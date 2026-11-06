import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  FileSearch,
  Lock,
  MessagesSquare,
  Workflow,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Choose Us",
  description:
    "How PracticeCareSource approaches medical billing: defined scope, documented workflows, clear reporting, secure data handling, and honest communication.",
  alternates: { canonical: "/why-choose-us" },
  openGraph: {
    title: "Why Choose PracticeCareSource",
    description:
      "Defined scope, visible workflows, clear reporting, and honest communication about what billing support can and cannot control.",
    url: "/why-choose-us",
  },
};

const differentiators = [
  {
    icon: Workflow,
    title: "One connected workflow",
    text: "Eligibility, authorization, coding, submission, posting, and follow-up are managed as connected stages. That makes it easier to find the source of a problem instead of only treating the symptom.",
  },
  {
    icon: FileSearch,
    title: "Denials used as information",
    text: "Denials are categorized by cause and reviewed for patterns. The goal is to fix the upstream issue as well as work the individual claim.",
  },
  {
    icon: BarChart3,
    title: "Reporting you can review",
    text: "Charges, payments, adjustments, denials, and AR aging are summarized in a consistent format so the practice can see what changed and what still needs attention.",
  },
  {
    icon: Lock,
    title: "Security treated as part of the process",
    text: "Access permissions, confidentiality requirements, and any required Business Associate Agreement should be reviewed and documented before protected information is shared.",
  },
  {
    icon: MessagesSquare,
    title: "Direct communication",
    text: "Questions and issues are raised as they come up. We would rather explain a delay or a payer limitation clearly than let it surface at the end of a reporting period.",
  },
  {
    icon: CheckCircle2,
    title: "No inflated promises",
    text: "Payer behavior, patient volume, documentation quality, and specialty mix all affect results. We describe what we control and are clear about what we do not.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why choose us"
        title="A billing partner judged by process, not promises"
        description="Medical billing is not a place for vague assurances. The useful questions are about ownership, visibility, security, and how problems get resolved. Here is how we approach those questions."
        breadcrumbs={[{ label: "Why Choose Us" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="card flex flex-col">
                <item.icon
                  className="size-6 text-teal"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <h2 className="mt-4 font-display text-lg font-semibold text-navy">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                Questions worth asking any billing partner
              </h2>
              <p className="mt-3 text-ink-soft">
                These apply to us as much as anyone else. A partner should be
                able to answer them directly.
              </p>
              <ul className="mt-7 space-y-4">
                {[
                  "Who owns each step from eligibility through follow-up?",
                  "How are claims tracked after submission?",
                  "How are denials categorized, and what reporting comes from that?",
                  "What happens when a payer requests additional information?",
                  "How is access to our systems controlled and reviewed?",
                  "What is included in the scope, and what costs extra?",
                ].map((question) => (
                  <li
                    key={question}
                    className="flex items-start gap-3 border-b border-border pb-4"
                  >
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-teal"
                      aria-hidden="true"
                    />
                    <span className="text-ink-soft">{question}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-bg-secondary p-7 sm:p-9">
              <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
                A realistic view of what changes
              </h2>
              <div className="mt-5 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  Bringing in billing support can improve capacity, consistency,
                  and visibility. It does not eliminate payer requirements,
                  retroactive coverage changes, or documentation gaps that begin
                  in the clinical encounter.
                </p>
                <p>
                  Early in an engagement, part of the work is often diagnostic:
                  understanding why claims are aging, which denial reasons repeat,
                  and where the handoff between clinical and billing work breaks
                  down.
                </p>
                <p>
                  We would rather set that expectation up front than imply that a
                  billing change alone solves every revenue problem.
                </p>
              </div>
              <Link href="/how-it-works" className="btn btn-outline mt-7">
                See how onboarding works
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Compare us against your current process"
        description="Tell us how billing works today and where it breaks down. We will follow up with a direct conversation about fit."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Why Choose Us", path: "/why-choose-us" },
        ])}
      />
    </>
  );
}
