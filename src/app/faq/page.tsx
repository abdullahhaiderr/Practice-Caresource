import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { Accordion } from "@/components/shared/Accordion";
import { faqGroups } from "@/data/faqs";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about medical billing services, coding, credentialing, AR management, denials, onboarding, reporting, and data security.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Frequently Asked Questions | PracticeCareSource",
    description:
      "Answers to common questions about medical billing, coding, credentialing, AR management, denials, onboarding, and data security.",
    url: "/faq",
  },
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Answers to the questions practices ask most often about billing services, coding, credentialing, AR, onboarding, and data security."
        breadcrumbs={[{ label: "FAQ" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
            <nav aria-label="FAQ topics" className="lg:sticky lg:top-28 lg:self-start">
              <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-navy">
                Topics
              </h2>
              <ul className="mt-4 space-y-2 border-l border-border pl-4">
                {faqGroups.map((group) => (
                  <li key={group.id}>
                    <a
                      href={`#${group.id}`}
                      className="text-sm text-ink-soft transition-colors hover:text-blue"
                    >
                      {group.title}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-border bg-bg-secondary p-5">
                <p className="text-sm text-ink-soft">
                  Still have a question? Ask it directly during a consultation.
                </p>
                <Link href="/contact" className="btn btn-primary mt-4 w-full text-sm">
                  Contact us
                </Link>
              </div>
            </nav>

            <div className="min-w-0 space-y-12">
              {faqGroups.map((group) => (
                <section key={group.id} id={group.id} className="scroll-mt-28">
                  <h2 className="font-display text-2xl font-bold text-navy">
                    {group.title}
                  </h2>
                  <div className="mt-5">
                    <Accordion
                      items={group.items}
                      defaultOpen={group.id === "services" ? 0 : null}
                    />
                  </div>
                </section>
              ))}

              <div className="rounded-xl border border-border bg-bg-secondary p-7">
                <h2 className="font-display text-xl font-bold text-navy">
                  Have a question that is not listed?
                </h2>
                <p className="mt-2 text-ink-soft">
                  Ask us directly. If the answer depends on your systems or payer
                  mix, we will say so rather than give a generic response.
                </p>
                <Link href="/contact" className="btn btn-primary mt-5">
                  Request a consultation
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Talk through your billing questions"
        description="Tell us about your practice and the parts of the billing workflow that are causing the most friction."
      />

      <JsonLd
        data={faqJsonLd(faqGroups.flatMap((group) => group.items))}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
    </>
  );
}
