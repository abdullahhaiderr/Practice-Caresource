import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardList } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Medical Billing Pricing and Engagement Scope",
  description: "Learn how PracticeCareSource approaches scope and pricing discussions for medical billing and revenue cycle support.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing Approach | PracticeCareSource",
    description: "Understand the information used to scope a medical billing support proposal.",
    url: "/pricing",
  },
};

const factors = [
  ["Practice size", "The number of providers and locations involved in the engagement."],
  ["Specialty and workflow", "The billing requirements, payer mix, systems, and operational complexity."],
  ["Claim volume", "The approximate monthly claim and transaction workload."],
  ["Service scope", "Which billing, credentialing, accounts receivable, or denial tasks are included."],
  ["Responsibilities and reporting", "The division of work, communication cadence, and reporting requirements."],
];

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="A clear scope before a pricing proposal"
        description="Medical billing support is scoped around the practice, its workflows, and the work requested. We do not publish unverified rates or imply that one pricing model fits every engagement."
        breadcrumbs={[{ label: "Pricing" }]}
      />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="grid size-12 place-items-center rounded-md bg-pale-pine text-pine">
              <ClipboardList className="size-6" aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-2xl">What goes into a quote?</h2>
            <p className="mt-4 leading-7">A useful proposal starts with a practical understanding of the current billing process and the responsibilities the practice wants to delegate. The final scope and commercial terms must be agreed in writing before work begins.</p>
            <Link href="/contact" className="btn btn-primary mt-7">Request a consultation <ArrowRight className="size-4" aria-hidden="true" /></Link>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {factors.map(([title, description], index) => (
              <div key={title} className="grid gap-2 py-5 sm:grid-cols-[3rem_1fr]">
                <span className="font-display text-lg text-terracotta">0{index + 1}</span>
                <div><h3 className="text-lg">{title}</h3><p className="mt-1 text-sm leading-6">{description}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section bg-bg-secondary">
        <div className="container-x max-w-3xl">
          <h2>What to prepare</h2>
          <p className="mt-4 leading-7">For an initial discussion, it is helpful to know your provider count, specialty, approximate claim volume, practice management system, payer mix, current billing workflow, and the tasks you want support with. Do not send patient names, records, claim documents, or other protected health information through the public enquiry form.</p>
          <p className="mt-4 leading-7">Specific pricing models, rates, minimums, and contract terms have not been confirmed for publication. They will remain unpublished until the business approves them.</p>
        </div>
      </section>
      <CTASection title="Discuss the right scope for your practice" description="Share a high-level description of your practice and the billing support you are considering." />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Pricing", path: "/pricing" }])} />
    </>
  );
}
