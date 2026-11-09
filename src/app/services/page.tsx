import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Banknote, CheckCircle2, ClipboardCheck, Code2, FileSearch, Megaphone, ReceiptText, ShieldAlert, ShieldCheck, UsersRound, Wallet, Workflow } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { serviceDetails } from "@/data/service-details";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Medical Billing & Revenue Cycle Services",
  description:
    "Explore medical billing, coding, credentialing, AR management, denial management, eligibility, payment posting, and billing audit services from PracticeCareSource.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Medical Billing Services | PracticeCareSource",
    description:
      "Explore medical billing and RCM, credentialing, accounts receivable recovery, denial management, medical coding, virtual assistant, and digital presence support.",
    url: "/services",
  },
};

const serviceIcons: Record<string, typeof ReceiptText> = {
  "medical-billing": ReceiptText,
  "medical-coding": Code2,
  "revenue-cycle-management": Workflow,
  credentialing: BadgeCheck,
  "ar-management": Wallet,
  "denial-management": ShieldAlert,
  "eligibility-prior-authorization": ShieldCheck,
  "payment-posting-reporting": Banknote,
  "medical-billing-audits": FileSearch,
  "virtual-assistant": UsersRound,
  "marketing-digital-presence": Megaphone,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Medical billing and revenue cycle services"
        description="Choose full revenue cycle support or a focused service for the part of the workflow that needs attention. Every engagement starts with a conversation about your practice and current process."
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceDetails.map((service, index) => {
              const Icon = serviceIcons[service.id] ?? ClipboardCheck;
              return (
              <Link
                key={service.id}
                href={service.href}
                className="card group flex flex-col"
              >
                <span className="card-icon mb-2"><Icon aria-hidden="true" /></span>
                <span className="font-display text-sm font-bold text-muted-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-3 font-display text-xl font-semibold text-navy transition-colors group-hover:text-blue">
                  {service.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {service.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                  Explore service
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            );
            })}
          </div>

          <div className="mt-14 rounded-xl border border-border bg-bg-secondary p-7 sm:p-9">
            <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
              Not sure which service you need?
            </h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
              Many practices start with a billing audit or a review of aging
              accounts receivable. That gives both sides a factual picture of
              where claims are slowing down before deciding on a broader scope.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Request a consultation
              </Link>
              <Link href="/services/medical-billing-audits" className="btn btn-outline">
                Explore billing audits
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Defined scope",
                text: "Responsibilities and reporting are documented before work begins.",
              },
              {
                title: "Visible workflow",
                text: "Claims, denials, and AR are tracked so progress can be reviewed.",
              },
              {
                title: "No guarantees",
                text: "Payer decisions are outside our control. We describe outcomes honestly.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 size-5 shrink-0 text-teal"
                  aria-hidden="true"
                />
                <div>
                  <h2 className="text-sm font-semibold text-navy">{item.title}</h2>
                  <p className="mt-1 text-sm text-ink-soft">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Request a consultation"
        description="Tell us about your practice and the billing tasks that are taking the most time. We will follow up to discuss options."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
