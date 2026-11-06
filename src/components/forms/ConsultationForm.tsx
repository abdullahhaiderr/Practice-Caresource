"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Mail } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/contact-schema";

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
  const [prepared, setPrepared] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { fullName: "", email: "", practiceName: "", message: "", consent: false },
  });

  const onSubmit = handleSubmit((values) => {
    setNotice(null);
    setWarning(null);
    if (containsLikelyPhi([values.practiceName, values.message].join(" "))) {
      setWarning("Please remove patient identifiers or health information. This form is for business enquiries only.");
      return;
    }

    const body = [
      "New PracticeCareSource business enquiry",
      "",
      `Name: ${values.fullName}`,
      `Business email: ${values.email}`,
      `Practice or organization: ${values.practiceName}`,
      "",
      "Message:",
      values.message,
      "",
      "Prepared using the PracticeCareSource website. Please review before sending.",
    ].join("\n");
    const subject = "PracticeCareSource consultation enquiry";
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setPrepared(true);
    setNotice("Your email application should open with the enquiry prepared. Review the message and press Send. If it does not open, use the direct email link below.");
    window.location.href = mailto;
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="border-l-4 border-warning bg-pale-pine p-4">
        <p className="text-sm font-semibold text-ink">Business enquiries only. Do not include patient health information.</p>
        <p className="mt-1 text-sm leading-6 text-muted">Do not enter patient names, dates of birth, medical record numbers, claim details, insurance identifiers, or other protected health information. Browser checks are limited and cannot detect every sensitive detail.</p>
      </div>

      {warning ? <div role="alert" className="flex items-start gap-3 border border-warning bg-pale-pine p-4 text-sm text-warning"><AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" /><span>{warning}</span></div> : null}
      {notice ? <div role="status" aria-live="polite" className="border border-success bg-pale-pine p-4 text-sm text-success">{notice}<p className="mt-2"><a className="font-semibold underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>Email {CONTACT_EMAIL}</a></p></div> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="label">Full name <span className="text-error">*</span></label>
          <input id="fullName" type="text" autoComplete="name" className="field" aria-invalid={Boolean(errors.fullName)} aria-describedby={errors.fullName ? "fullName-error" : undefined} {...register("fullName")} />
          <FieldError id="fullName-error" message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="email" className="label">Business email <span className="text-error">*</span></label>
          <input id="email" type="email" autoComplete="email" className="field" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="practiceName" className="label">Practice or organization <span className="text-error">*</span></label>
          <input id="practiceName" type="text" autoComplete="organization" className="field" aria-invalid={Boolean(errors.practiceName)} aria-describedby={errors.practiceName ? "practiceName-error" : undefined} {...register("practiceName")} />
          <FieldError id="practiceName-error" message={errors.practiceName?.message} />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label">How can we help? <span className="text-error">*</span></label>
        <textarea id="message" rows={4} maxLength={1500} className="field resize-y" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : "message-help"} {...register("message")} />
        {errors.message ? <FieldError id="message-error" message={errors.message.message} /> : <p id="message-help" className="helper-text">Describe the business need only. Do not include patient details. 1,500 characters maximum.</p>}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" className="mt-1 size-4 shrink-0 accent-pine" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "consent-error" : undefined} {...register("consent")} />
          <span>I have read the <Link href="/privacy-policy" className="font-semibold text-pine underline underline-offset-2">Privacy Policy</Link> and understand that this is a business enquiry channel. <span className="text-error">*</span></span>
        </label>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>

      <div className="flex flex-col gap-3 border-t border-rule pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">Required fields are marked with an asterisk.</p>
        <button type="submit" disabled={prepared} className="btn btn-primary w-full sm:w-auto"><Mail className="size-4" aria-hidden="true" />{prepared ? "Email draft prepared" : "Request a Consultation"}</button>
      </div>
      <p className="text-xs leading-relaxed text-muted">The form opens your email application. Your message is sent only after you review it and press Send. You can also email <a className="font-semibold underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> directly.</p>
    </form>
  );
}
