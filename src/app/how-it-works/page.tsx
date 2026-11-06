import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  ClipboardList,
  FileCheck2,
  MessagesSquare,
  Settings2,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { Accordion } from "@/components/shared/Accordion";
import { faqGroups } from "@/data/faqs";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how a PracticeCareSource engagement moves from initial consultation through onboarding, implementation, and ongoing billing support.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | PracticeCareSource",
    description:
      "A clear view of the consultation, onboarding, implementation, and ongoing support process for medical billing services.",
    url: "/how-it-works",
  },
};

const steps = [
  {
    icon: MessagesSquare,
    title: "Initial consultation",
    text: "We talk about your practice, current billing workflow, systems, payer mix, and the problems you want to solve. If it helps, we can review a de-identified sample of billing information.",
    detail: "No obligation to continue.",
  },
  {
    icon: ClipboardList,
    title: "Workflow review and scope",
    text: "We map how work moves from scheduling through payment, identify gaps, and define which tasks will sit with us and which stay with your team.",
    detail: "Scope and responsibilities are documented.",
  },
  {
    icon: FileCheck2,
    title: "Agreement and documentation",
    text: "Service terms, reporting expectations, communication channels, and a Business Associate Agreement where applicable are put in writing before work begins.",
    detail: "No work starts on a verbal understanding alone.",
  },
  {
    icon: ShieldCheck,
    title: "Access and security planning",
    text: "System compatibility, access requirements, permissions, and any required agreements are reviewed with the practice before access is granted.",
    detail: "Specific controls must be confirmed before work begins.",
  },
  {
    icon: Settings2,
    title: "Implementation",
    text: "We begin working the agreed scope, whether that is new claim submission, AR follow-up, credentialing, or a focused audit. Early attention goes to the highest-risk items.",
    detail: "Timing depends on systems, payer mix, and volume.",
  },
  {
    icon: CalendarCheck,
    title: "Ongoing support and reporting",
    text: "Claims, denials, and AR are worked on a routine schedule. Reporting is reviewed with the practice, and recurring issues are addressed at the source where possible.",
    detail: "Reporting cadence is agreed during onboarding.",
  },
];

const onboardingFaqs = faqGroups.find((group) => group.id === "onboarding")?.items ?? [];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A structured path from first conversation to ongoing support"
        description="The steps below are a proposed engagement framework. The actual workflow, controls, responsibilities, and timeline must be confirmed with each practice before an agreement begins."
        breadcrumbs={[{ label: "How It Works" }]}
      />

      <section className="section">
        <div className="container-x">
          <ol className="relative space-y-6">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="relative rounded-xl border border-border bg-paper p-6 sm:p-8"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="flex items-center gap-4 sm:w-48 sm:shrink-0">
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-bg-secondary font-display text-sm font-bold text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <step.icon
                      className="size-6 text-teal"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-xl font-semibold text-navy">
                      {step.title}
                    </h2>
                    <p className="mt-2 leading-relaxed text-ink-soft">
                      {step.text}
                    </p>
                    <p className="mt-3 text-sm font-medium text-blue">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-xl border border-border bg-bg-secondary p-7">
              <h2 className="font-display text-xl font-bold text-navy">
                What we need from your practice
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-ink-soft">
                {[
                  "A point of contact who can answer workflow and credentialing questions.",
                  "Access to the systems used for claims, remittances, and payer portals.",
                  "Current provider and payer enrollment information.",
                  "Any existing billing policies or documentation standards.",
                  "A clear sense of which tasks you want to keep in-house.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-teal"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-paper p-7 shadow-card">
              <h2 className="font-display text-xl font-bold text-navy">
                What you should expect from us
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-ink-soft">
                {[
                  "A written scope before implementation begins.",
                  "Clear communication when information is missing or a payer request needs action.",
                  "Reporting in an agreed format and cadence.",
                  "Documented requirements for any protected health information handling.",
                  "Honest explanations when an outcome depends on payer behavior.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-blue"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg-secondary">
        <div className="container-x section">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
              Onboarding questions
            </h2>
            <p className="mt-3 text-ink-soft">
              A few common questions about timing and transitions.
            </p>
          </div>
          <div className="mt-8 max-w-3xl">
            <Accordion items={onboardingFaqs} />
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
            >
              Read all frequently asked questions
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Start with the first conversation"
        description="Tell us where billing is getting stuck. We will follow up to discuss whether a consultation makes sense."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "How It Works", path: "/how-it-works" },
        ])}
      />
    </>
  );
}
