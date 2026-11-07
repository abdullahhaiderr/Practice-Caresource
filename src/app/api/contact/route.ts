import { NextResponse, type NextRequest } from "next/server";
import { contactSchema } from "@/lib/contact-schema";

const RATE_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT = 5;
const MIN_FORM_TIME_MS = 1500;

type RateEntry = { count: number; resetAt: number };

const rateStore = new Map<string, RateEntry>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function clean(value: string): string {
  return value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function containsLikelyPhi(value: string): boolean {
  const patterns = [
    /\b\d{3}-\d{2}-\d{4}\b/,
    /\b(?:DOB|date of birth|birth date)\s*[:#-]?\s*\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/i,
    /\b(?:MRN|medical record number|patient ID|member ID|insurance ID|policy number)\s*[:#-]?\s*[A-Z0-9-]{4,}\b/i,
  ];
  return patterns.some((pattern) => pattern.test(value));
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const now = Date.now();

  const existing = rateStore.get(ip);
  if (existing && existing.resetAt > now) {
    if (existing.count >= RATE_LIMIT) {
      return NextResponse.json(
        {
          ok: false,
          message: "Too many requests. Please try again in a few minutes.",
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(Math.ceil((existing.resetAt - now) / 1000)),
          },
        },
      );
    }
    existing.count += 1;
  } else {
    rateStore.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
  }

  if (rateStore.size > 5000) {
    for (const [key, entry] of rateStore) {
      if (entry.resetAt <= now) rateStore.delete(key);
    }
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please check the highlighted fields and try again.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;\n\n  const freeText = [data.practiceName, data.specialty, data.message].join(" ");\n  if (containsLikelyPhi(freeText)) {\n    return NextResponse.json(\n      { ok: false, message: "Please remove patient identifiers or health information and submit a business inquiry only." },\n      { status: 400 },\n    );\n  }

  // Silently accept obvious bots so they do not retry.
  if (data.website) {
    return NextResponse.json({ ok: true });
  }

  if (data.formStartedAt && now - data.formStartedAt < MIN_FORM_TIME_MS) {
    return NextResponse.json({ ok: true });
  }

  const submission = {
    fullName: clean(data.fullName),
    email: clean(data.email).toLowerCase(),
    phone: clean(data.phone ?? ""),
    practiceName: clean(data.practiceName),
    specialty: clean(data.specialty),
    providers: clean(data.providers),
    services: data.services.map(clean),
    message: clean(data.message),
  };

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL ?? "PracticeCareSource <onboarding@resend.dev>";

  if (apiKey && toEmail && fromEmail) {
    const html = `
      <h2>New consultation request</h2>
      <p><strong>Name:</strong> ${escapeHtml(submission.fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(submission.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(submission.phone)}</p>
      <p><strong>Practice:</strong> ${escapeHtml(submission.practiceName)}</p>
      <p><strong>Specialty:</strong> ${escapeHtml(submission.specialty)}</p>
      <p><strong>Providers:</strong> ${escapeHtml(submission.providers)}</p>
      <p><strong>Services:</strong> ${escapeHtml(submission.services.join(", "))}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(submission.message).replace(/\n/g, "<br />")}</p>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: submission.email,
        subject: `Consultation request: ${submission.practiceName}`,
        html,
      }),
    });

    if (!response.ok) {
      console.error("Contact email delivery failed", response.status);
      return NextResponse.json(
        {
          ok: false,
          message:
            "We could not send your request right now. Please try again later.",
        },
        { status: 502 },
      );
    }
  } else {
    // Fail closed: never log personal or practice inquiry data to application logs.
    return NextResponse.json(
      {
        ok: false,
        message: "The contact form is temporarily unavailable. Please email info@practicecaresource.com.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
