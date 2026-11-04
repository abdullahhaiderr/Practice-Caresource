import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  HeartPulse,
  LineChart,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About PracticeCareSource",
  description:
    "Learn how PracticeCareSource approaches medical billing, coding, and revenue cycle support for healthcare practices across the United States.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PracticeCareSource",
    description:
      "A medical billing and revenue cycle management company focused on clear process, honest communication, and protected health information.",
    url: "/about",
  },
};

const principles = [
  {
    icon: ClipboardCheck,
    title: "Clear scope before work begins",
    text: "We document what is included, who owns each step, and how reporting will work. Scope changes are discussed rather than assumed.",
  },
  {
    icon: LineChart,
    title: "Visibility over vague assurances",
    text: "Claims, denials, and aging AR should be reviewable. We focus on reporting that shows what is happening rather than promises about what will happen.",
  },
  {
    icon: ShieldCheck,
    title: "Protected information handled carefully",
    text: "We use HIPAA-aligned administrative and technical safeguards, access controls, confidentiality requirements, and Business Associate Agreements where applicable.",
  },
  {
    icon: HeartPulse,
    title: "Respect for the clinical side",
    text: "Billing exists to support care, not the other way around. We work to keep requests reasonable and documentation feedback practical.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A billing partner focused on process and visibility"
        description="PracticeCareSource provides medical billing, coding, credentialing, and revenue cycle support to healthcare practices across the United States. Our work is built around clear ownership, consistent follow-up, and honest reporting."
        breadcrumbs={[{ label: "About" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
            <div>
              <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                Why we focus on the revenue cycle
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  A healthcare practice can deliver excellent care and still
                  struggle financially because claims are not submitted cleanly,
                  denials are not worked, or no one has a clear view of what is
                  outstanding. Those are operational problems, and they are
                  fixable.
                </p>
                <p>
                  Our approach is to treat billing as a connected process rather
                  than a set of isolated tasks. Eligibility, authorization, charge
                  capture, coding, submission, posting, and follow-up all affect
                  one another. When one stage is weak, the problem usually shows
                  up later as a denial or an aging balance.
                </p>
                <p>
                  We work with practices that want a factual view of their billing
                  operation and a partner who will communicate clearly about what
                  is working, what is not, and what depends on payer decisions
                  outside anyone&rsquo;s control.
                </p>
              </div>

              <h2 className="mt-12 text-2xl font-display font-bold text-navy sm:text-3xl">
                How we describe ourselves
              </h2>
              <div className="mt-5 space-y-4 text-lg leading-relaxed text-ink-soft">
                <p>
                  We do not publish statistics, client counts, certifications, or
                  testimonials that we cannot verify. We do not claim HIPAA
                  certification, because HIPAA does not establish a certification
                  program for covered entities or business associates.
                </p>
                <p>
                  What we can describe is how we work: defined scope, documented
                  workflows, secure access to the systems you already use,
                  routine reporting, and direct communication about issues as they
                  arise.
                </p>
              </div>
            </div>

            <aside className="lg:pt-2">
              <div className="rounded-xl border border-border bg-bg-secondary p-7">
                <h2 className="font-display text-lg font-bold text-navy">
                  At a glance
                </h2>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold text-navy">Services</dt>
                    <dd className="mt-1 text-ink-soft">
                      Medical billing, coding, credentialing, AR management,
                      denial management, eligibility and prior authorization,
                      payment posting, reporting, and billing audits.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Who we work with</dt>
                    <dd className="mt-1 text-ink-soft">
                      Healthcare practices and healthcare organizations in the
                      United States.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Systems</dt>
                    <dd className="mt-1 text-ink-soft">
                      We work within the EHR and practice management systems your
                      practice already uses.
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">Engagement</dt>
                    <dd className="mt-1 text-ink-soft">
                      Full revenue cycle support or focused services for a
                      specific part of the workflow.
                    </dd>
                  </div>
                </dl>
                <Link href="/contact" className="btn btn-primary mt-6 w-full">
                  Request a consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-bg-secondary">
        <div className="container-x section">
          <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
            How we approach the work
          </h2>
          <p className="mt-3 max-w-2xl text-ink-soft">
            These principles guide how engagements are structured and how we
            communicate with the practices we serve.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle.title} className="card">
                <principle.icon
                  className="size-6 text-teal"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {principle.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                What we do not do
              </h2>
              <ul className="mt-6 space-y-4">
                {[
                  "We do not collect patient health information through this website.",
                  "We do not guarantee payer decisions, timelines, or specific financial results.",
                  "We do not claim certifications or credentials we do not hold.",
                  "We do not take over clinical documentation decisions; those remain with the practice.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 size-5 shrink-0 text-teal"
                      aria-hidden="true"
                    />
                    <span className="text-ink-soft">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-paper p-7 shadow-card">
              <h2 className="font-display text-xl font-bold text-navy">
                Start with a conversation
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                The best first step is usually a discussion about your current
                billing workflow, where claims are slowing down, and what you
                would like to improve. There is no obligation to continue.
              </p>
              <Link href="/contact" className="btn btn-primary mt-6">
                Request a consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
