"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Mail } from "lucide-react";
import {
  contactSchema,
  providerOptions,
  serviceOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";

const CONTACT_EMAIL = "info@practicecaresource.com";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="error-text">{message}</p>;
}

function containsLikelyPhi(value: string) {
  return [
    /\b\d{3}-\d{2}-\d{4}\b/,
    /\b(?:DOB|date of birth|birth date)\s*[:#-]?\s*\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/i,
    /\b(?:MRN|medical record number|patient ID|member ID|insurance ID|policy number)\s*[:#-]?\s*[A-Z0-9-]{4,}\b/i,
  ].some((pattern) => pattern.test(value));
}

export function ConsultationForm() {
  const [notice, setNotice] = useState<string | null>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      practiceName: "",
      specialty: "",
      providers: "",
      services: [],
      message: "",
      consent: false,
    },
  });

  const onSubmit = handleSubmit((values) => {
    setNotice(null);
    setWarning(null);

    const freeText = [values.practiceName, values.specialty, values.message].join(" ");
    if (containsLikelyPhi(freeText)) {
      setWarning("Please remove patient identifiers or health information. This form is for business enquiries only.");
      return;
    }

    const lines = [
      "New PracticeCareSource business enquiry",
      "",
      `Name: ${values.fullName}`,
      `Business email: ${values.email}`,
      `Phone: ${values.phone || "Not provided"}`,
      `Practice: ${values.practiceName}`,
      `Specialty: ${values.specialty}`,
      `Number of providers: ${values.providers || "Not provided"}`,
      `Services of interest: ${values.services?.length ? values.services.join(", ") : "Not specified"}`,
      "",
      "Message:",
      values.message,
      "",
      "This enquiry was prepared using the PracticeCareSource website contact form.",
    ];

    const subject = `PracticeCareSource enquiry: ${values.practiceName}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    setNotice("Your email app should open with the enquiry prepared. Review it and press Send to deliver it to PracticeCareSource. If no email app opens, use the email link below.");
    window.location.href = mailto;
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="rounded-lg border-l-4 border-teal bg-bg-secondary p-4 sm:p-5">
        <p className="text-sm font-semibold text-navy">Please do not include patient health information.</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
          Do not submit patient names, dates of birth, medical record numbers, claim documents, or insurance card details. This form is for business enquiries only. The browser checks are a basic precaution and cannot identify every type of sensitive information.
        </p>
      </div>

      {warning ? (
        <div role="alert" className="flex items-start gap-3 rounded-lg border border-[#E4BDBB] bg-[#FBF3F2] p-4 text-sm text-[#8A3B38]">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{warning}</span>
        </div>
      ) : null}

      {notice ? (
        <div role="status" aria-live="polite" className="rounded-lg border border-[#b8d9c8] bg-[#f0f7f2] p-4 text-sm text-[#245b3c]">
          {notice}
          <p className="mt-2"><a className="font-semibold underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>Email {CONTACT_EMAIL}</a></p>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="label">Full name <span className="text-[#C0504D]">*</span></label>
          <input id="fullName" type="text" autoComplete="name" className="field" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...register("fullName")} />
          <FieldError id="fullName-error" message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="email" className="label">Business email <span className="text-[#C0504D]">*</span></label>
          <input id="email" type="email" autoComplete="email" className="field" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
        <div>
          <label htmlFor="practiceName" className="label">Practice name <span className="text-[#C0504D]">*</span></label>
          <input id="practiceName" type="text" autoComplete="organization" className="field" aria-invalid={Boolean(errors.practiceName)} aria-describedby={errors.practiceName ? "practiceName-error" : undefined} {...register("practiceName")} />
          <FieldError id="practiceName-error" message={errors.practiceName?.message} />
        </div>
        <div>
          <label htmlFor="specialty" className="label">Specialty <span className="text-[#C0504D]">*</span></label>
          <input id="specialty" type="text" autoComplete="off" placeholder="Enter your practice specialty" className="field" aria-invalid={Boolean(errors.specialty)} aria-describedby={errors.specialty ? "specialty-error" : undefined} {...register("specialty")} />
          <FieldError id="specialty-error" message={errors.specialty?.message} />
        </div>
        <div>
          <label htmlFor="phone" className="label">Phone <span className="text-muted">(optional)</span></label>
          <input id="phone" type="tel" autoComplete="tel" className="field" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} {...register("phone")} />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>
        <div>
          <label htmlFor="providers" className="label">Number of providers <span className="text-muted">(optional)</span></label>
          <select id="providers" className="field" defaultValue="" aria-invalid={Boolean(errors.providers)} aria-describedby={errors.providers ? "providers-error" : undefined} {...register("providers")}>
            <option value="">Select number of providers</option>
            {providerOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          <FieldError id="providers-error" message={errors.providers?.message} />
        </div>
      </div>

      <fieldset>
        <legend className="label">Services of interest <span className="text-muted">(optional)</span></legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-start gap-2.5 rounded-lg border border-border bg-paper px-3.5 py-3 text-sm text-ink-soft transition-colors hover:border-blue/50">
              <input type="checkbox" value={service} className="mt-0.5 size-4 shrink-0 accent-[#176B91]" {...register("services")} />
              {service}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="label">What would you like help with? <span className="text-[#C0504D]">*</span></label>
        <textarea id="message" rows={5} maxLength={2000} className="field resize-y" placeholder="Tell us about your current billing workflow and what support you are looking for." aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-help"} {...register("message")} />
        {errors.message ? <FieldError id="message-error" message={errors.message.message} /> : <p id="message-help" className="helper-text">Do not include patient information. 2,000 characters maximum.</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-[#176B91]" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} {...register("consent")} />
          <span>I have read the <Link href="/privacy-policy" className="font-medium text-blue underline underline-offset-2">Privacy Policy</Link> and understand that this form is for business enquiries only. <span className="text-[#C0504D]">*</span></span>
        </label>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Fields marked <span className="text-[#C0504D]">*</span> are required.</p>
        <button type="submit" className="btn btn-primary w-full sm:w-auto">
          <Mail className="size-4" aria-hidden="true" />
          Prepare email enquiry
        </button>
      </div>
      <p className="text-xs leading-relaxed text-muted">
        Your email application sends the message only after you review it and press Send. If you do not have an email application configured, contact us directly at <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Do not send protected health information.
      </p>
    </form>
  );
}
