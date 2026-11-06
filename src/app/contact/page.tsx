import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, Mail } from "lucide-react";
import { business } from "@/config/business";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact PracticeCareSource to discuss medical billing and revenue cycle support for your healthcare practice.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact PracticeCareSource",
    description:
      "Contact our team about medical billing and revenue cycle support.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a consultation"
        description="Tell us about your practice and current billing workflow. We will follow up to discuss your needs and whether our services are a fit."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_19rem] lg:gap-16">
            <div className="min-w-0">
              <h2 className="text-2xl font-display font-bold text-navy">
                Business inquiry form
              </h2>
              <p className="mt-2 text-ink-soft">
                All fields marked with an asterisk are required. This form is not
                for patient inquiries or protected health information.
              </p>
              <div className="mt-7">
                <ConsultationForm />
              </div>
            </div>

            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-white/70 bg-white/80 p-6 shadow-[0_18px_50px_-35px_rgba(23,59,86,.28)] backdrop-blur-xl">
                <h2 className="font-display text-lg font-bold text-navy">Contact our team</h2>
                <div className="mt-4 space-y-4 text-sm">
                  <a href={business.emailHref} className="flex items-start gap-3 text-ink-soft hover:text-blue"><Mail className="mt-0.5 size-4 shrink-0 text-teal" />{business.email}</a>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-bg-secondary p-6">
                <h2 className="font-display text-lg font-bold text-navy">
                  What happens next
                </h2>
                <ol className="mt-4 space-y-4">
                  {[
                    "Your email application opens with your enquiry prepared.",
                    "You review the message and press Send to email our team.",
                    "Our team can then review your enquiry and discuss possible next steps.",
                  ].map((step, index) => (
                    <li key={step} className="flex items-start gap-3 text-sm">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-paper font-display text-xs font-bold text-blue">
                        {index + 1}
                      </span>
                      <span className="text-ink-soft">{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="mt-4 flex items-start gap-2 text-xs text-muted">
                  <Clock className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
                  Response timing depends on the details provided and team
                  availability. We do not promise a specific response time.
                </p>
              </div>

              <div className="rounded-xl border border-border bg-paper p-6">
                <h2 className="flex items-center gap-2 font-display text-lg font-bold text-navy">
                  <ShieldCheck className="size-5 text-teal" aria-hidden="true" />
                  Privacy reminder
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Please do not submit patient information through this form. If
                  you need to discuss a specific claim, use a de-identified
                  summary.
                </p>
                <Link
                  href="/hipaa-security"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
                >
                  HIPAA & security
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <div className="rounded-xl border border-border bg-paper p-6">
                <h2 className="font-display text-lg font-bold text-navy">
                  Prefer to explore first?
                </h2>
                <ul className="mt-3 space-y-2.5 text-sm">
                  {[
                    { label: "Browse services", href: "/services" },
                    { label: "See how onboarding works", href: "/how-it-works" },
                    { label: "Read the FAQ", href: "/faq" },
                    { label: "Review our approach", href: "/why-choose-us" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-2 text-ink-soft transition-colors hover:text-blue"
                      >
                        {link.label}
                        <ArrowRight
                          className="size-3.5 text-muted-soft transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-border bg-bg-secondary p-6">
                <h2 className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-navy">
                  <CheckCircle2 className="size-4 text-success" aria-hidden="true" />
                  Before you submit
                </h2>
                <ul className="mt-3 space-y-2 text-xs text-ink-soft">
                  <li>Use a business email address.</li>
                  <li>Include the services you are considering.</li>
                  <li>Describe the workflow issue, not patient details.</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
