"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, CheckCircle2, Clock3, ShieldCheck, X } from "lucide-react";
import { providerOptions, serviceOptions } from "@/lib/contact-schema";

const STORAGE_KEY = "pcs-consultation-popup-dismissed";

export function ConsultationPopup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [startedAt, setStartedAt] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setStartedAt(Date.now());
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // The popup remains usable when browser storage is unavailable.
    }
    const timer = window.setTimeout(() => setOpen(true), 9000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 40);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  function dismiss() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Dismissal still works for the current page view.
    }
    setOpen(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);
    const form = new FormData(event.currentTarget);
    const payload = {
      fullName: String(form.get("fullName") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      practiceName: String(form.get("practiceName") ?? ""),
      specialty: String(form.get("specialty") ?? ""),
      providers: String(form.get("providers") ?? ""),
      services: [String(form.get("services") ?? "")],
      message: String(form.get("message") ?? ""),
      consent: form.get("consent") === "on",
      website: String(form.get("website") ?? ""),
      formStartedAt: startedAt,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
      } | null;
      if (!response.ok || !result?.ok) {
        setError(result?.message ?? "Please check your details and try again.");
        return;
      }
      dismiss();
      router.push("/thank-you");
    } catch {
      setError("We could not send your request. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="pcs-popup-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <section
        className="pcs-popup"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pcs-popup-title"
        aria-describedby="pcs-popup-description"
      >
        <button ref={closeRef} type="button" className="pcs-popup-close" onClick={dismiss} aria-label="Close consultation popup">
          <X size={19} aria-hidden="true" />
        </button>

        <aside className="pcs-popup-intro">
          <span className="pcs-popup-kicker">PRACTICECARESOURCE</span>
          <div className="pcs-popup-mark"><ShieldCheck size={25} aria-hidden="true" /></div>
          <h2 id="pcs-popup-title">Let’s make your billing work better.</h2>
          <p id="pcs-popup-description">A clearer billing process starts with understanding your practice. Tell us what support you need and our team can follow up.</p>
          <ul className="pcs-popup-benefits">
            <li><CheckCircle2 size={17} /> Medical billing and revenue cycle support</li>
            <li><CheckCircle2 size={17} /> Credentialing, denials and AR follow-up</li>
            <li><CheckCircle2 size={17} /> A conversation focused on your workflow</li>
          </ul>
          <div className="pcs-popup-response"><Clock3 size={16} /> Share your details to start a conversation.</div>
          <span className="pcs-popup-decoration pcs-popup-decoration-one" aria-hidden="true" />
          <span className="pcs-popup-decoration pcs-popup-decoration-two" aria-hidden="true" />
        </aside>

        <div className="pcs-popup-form-wrap">
          <div className="pcs-popup-form-heading">
            <span>FREE CONSULTATION</span>
            <h3>Tell us about your practice</h3>
            <p>Complete the short form and we’ll be in touch.</p>
          </div>
          {error ? <p className="pcs-popup-error" role="alert">{error}</p> : null}
          <form className="pcs-popup-form" onSubmit={handleSubmit}>
            <div className="pcs-popup-fields">
              <label>Full name<input name="fullName" autoComplete="name" placeholder="Your full name" required minLength={2} maxLength={100} /></label>
              <label>Business email<input name="email" type="email" autoComplete="email" placeholder="you@practice.com" required /></label>
              <label>Phone number<input name="phone" type="tel" autoComplete="tel" placeholder="+1 (555) 000-0000" required minLength={7} maxLength={25} /></label>
              <label>Practice name<input name="practiceName" autoComplete="organization" placeholder="Your practice" required minLength={2} maxLength={150} /></label>
              <label>Specialty<input name="specialty" placeholder="e.g. Family medicine" required /></label>
              <label>Number of providers
                <select name="providers" defaultValue="" required>
                  <option value="" disabled>Select providers</option>
                  {providerOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label className="pcs-popup-wide">Service you’re interested in
                <select name="services" defaultValue="" required>
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
              </label>
              <label className="pcs-popup-wide">What would you like help with?
                <textarea name="message" rows={3} placeholder="Briefly describe your billing needs (no patient information)." required minLength={10} maxLength={2000} />
              </label>
            </div>
            <div className="pcs-popup-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
            <label className="pcs-popup-consent"><input name="consent" type="checkbox" required /> <span>I agree to the <a href="/privacy-policy">Privacy Policy</a> and understand this is for business inquiries only.</span></label>
            <button className="pcs-popup-submit" type="submit" disabled={submitting}>
              {submitting ? "Sending request…" : "Request a consultation"} <ArrowRight size={17} aria-hidden="true" />
            </button>
            <p className="pcs-popup-privacy">Please do not submit patient names, medical records, claim details or other protected health information.</p>
          </form>
        </div>
      </section>
    </div>
  );
}
