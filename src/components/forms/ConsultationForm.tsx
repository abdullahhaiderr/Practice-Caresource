"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2, Send } from "lucide-react";
import {
  contactSchema,
  providerOptions,
  serviceOptions,
  specialtyOptions,
  type ContactFormValues,
} from "@/lib/contact-schema";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="error-text">
      {message}
    </p>
  );
}

export function ConsultationForm() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    setValue,
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
      website: "",
      formStartedAt: 0,
    },
  });

  useEffect(() => {
    setValue("formStartedAt", Date.now());
  }, [setValue]);

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const result = (await response.json().catch(() => null)) as {
        ok?: boolean;
        message?: string;
        errors?: Record<string, string[]>;
      } | null;

      if (!response.ok || !result?.ok) {
        if (result?.errors) {
          for (const [field, messages] of Object.entries(result.errors)) {
            if (Array.isArray(messages) && messages.length > 0) {
              setError(field as keyof ContactFormValues, {
                message: String(messages[0]),
              });
            }
          }
        }
        setServerError(
          result?.message ??
            "We could not send your request. Please try again in a moment.",
        );
        return;
      }

      router.push("/thank-you");
    } catch {
      setServerError(
        "We could not send your request. Please check your connection and try again.",
      );
    }
  });

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="rounded-lg border-l-4 border-teal bg-bg-secondary p-4 sm:p-5">
        <p className="text-sm font-semibold text-navy">
          Please do not include patient health information.
        </p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
          Do not submit patient names, dates of birth, medical record numbers,
          claim documents, or insurance card details. This form is for business
          inquiries only.
        </p>
      </div>

      {serverError ? (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-[#E4BDBB] bg-[#FBF3F2] p-4 text-sm text-[#8A3B38]"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{serverError}</span>
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="label">
            Full name <span className="text-[#C0504D]">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            autoComplete="name"
            className="field"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            {...register("fullName")}
          />
          <FieldError id="fullName-error" message={errors.fullName?.message} />
        </div>

        <div>
          <label htmlFor="email" className="label">
            Business email <span className="text-[#C0504D]">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            className="field"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="email-error" message={errors.email?.message} />
        </div>

        <div>
          <label htmlFor="phone" className="label">
            Phone <span className="text-[#C0504D]">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            className="field"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            {...register("phone")}
          />
          <FieldError id="phone-error" message={errors.phone?.message} />
        </div>

        <div>
          <label htmlFor="practiceName" className="label">
            Practice name <span className="text-[#C0504D]">*</span>
          </label>
          <input
            id="practiceName"
            type="text"
            autoComplete="organization"
            className="field"
            aria-invalid={Boolean(errors.practiceName)}
            aria-describedby={
              errors.practiceName ? "practiceName-error" : undefined
            }
            {...register("practiceName")}
          />
          <FieldError
            id="practiceName-error"
            message={errors.practiceName?.message}
          />
        </div>

        <div>
          <label htmlFor="specialty" className="label">
            Specialty <span className="text-[#C0504D]">*</span>
          </label>
          <select
            id="specialty"
            className="field"
            defaultValue=""
            aria-invalid={Boolean(errors.specialty)}
            aria-describedby={errors.specialty ? "specialty-error" : undefined}
            {...register("specialty")}
          >
            <option value="" disabled>
              Select a specialty
            </option>
            {specialtyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError
            id="specialty-error"
            message={errors.specialty?.message}
          />
        </div>

        <div>
          <label htmlFor="providers" className="label">
            Number of providers <span className="text-[#C0504D]">*</span>
          </label>
          <select
            id="providers"
            className="field"
            defaultValue=""
            aria-invalid={Boolean(errors.providers)}
            aria-describedby={errors.providers ? "providers-error" : undefined}
            {...register("providers")}
          >
            <option value="" disabled>
              Select number of providers
            </option>
            {providerOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError
            id="providers-error"
            message={errors.providers?.message}
          />
        </div>
      </div>

      <fieldset>
        <legend className="label">
          Services required <span className="text-[#C0504D]">*</span>
        </legend>
        <div className="grid gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => (
            <label
              key={service}
              className="flex items-start gap-2.5 rounded-lg border border-border bg-paper px-3.5 py-3 text-sm text-ink-soft transition-colors hover:border-blue/50"
            >
              <input
                type="checkbox"
                value={service}
                className="mt-0.5 size-4 shrink-0 accent-[#176B91]"
                aria-invalid={Boolean(errors.services)}
                {...register("services")}
              />
              {service}
            </label>
          ))}
        </div>
        <FieldError id="services-error" message={errors.services?.message} />
      </fieldset>

      <div>
        <label htmlFor="message" className="label">
          What would you like help with?{" "}
          <span className="text-[#C0504D]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          className="field resize-y"
          placeholder="Tell us about your current billing workflow, the systems you use, and where it is getting stuck."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
          {...register("message")}
        />
        {errors.message ? (
          <FieldError id="message-error" message={errors.message.message} />
        ) : (
          <p id="message-help" className="helper-text">
            Do not include patient information. 2,000 characters maximum.
          </p>
        )}
      </div>

      <div>
        <label className="flex items-start gap-3 text-sm text-ink-soft">
          <input
            type="checkbox"
            className="mt-0.5 size-4 shrink-0 accent-[#176B91]"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            {...register("consent")}
          />
          <span>
            I have read the{" "}
            <Link href="/privacy-policy" className="font-medium text-blue underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            and understand that this form is for business inquiries only.{" "}
            <span className="text-[#C0504D]">*</span>
          </span>
        </label>
        <FieldError id="consent-error" message={errors.consent?.message} />
      </div>

      {/* Honeypot: hidden from real users and assistive technology. */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website")}
        />
        <input
          type="hidden"
          {...register("formStartedAt", {
            setValueAs: (value) => Number(value),
          })}
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">
          Fields marked <span className="text-[#C0504D]">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending request…
            </>
          ) : (
            <>
              <Send className="size-4" aria-hidden="true" />
              Request a Consultation
            </>
          )}
        </button>
      </div>

      <p className="text-xs leading-relaxed text-muted">
        Submitting this form does not create a client relationship. We use the
        information you provide to respond to your inquiry.
      </p>
    </form>
  );
}
