import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Medical Billing and Revenue Cycle Glossary",
  description: "Plain-language explanations of common medical billing, claims, denial, payment, and revenue cycle terms.",
  alternates: { canonical: "/glossary" },
  openGraph: {
    title: "Medical Billing Glossary | PracticeCareSource",
    description: "Understand common medical billing and revenue cycle terminology.",
    url: "/glossary",
  },
};

const entries = [
  { term: "Accounts Receivable (AR)", definition: "Amounts billed for services that have not yet been collected. In a medical practice, AR may include balances pending payer adjudication, patient responsibility, or follow-up." },
  { term: "AR Aging", definition: "A view of outstanding balances grouped by how long they have remained unpaid, often using time buckets such as 0 to 30, 31 to 60, 61 to 90, and more than 90 days. Reporting conventions can vary." },
  { term: "Clean Claim", definition: "For Medicare claims processing, CMS describes a clean claim as one that does not require the contractor to investigate or develop information outside its Medicare operation before payment. Definitions and rules may differ across programs and contracts." },
  { term: "Claim Denial", definition: "A payer determination that a submitted claim or claim line will not be paid as billed. The reason should be reviewed to determine whether correction, additional information, or an appeal is appropriate." },
  { term: "Claim Rejection", definition: "A submission that fails an initial format, data, or front-end validation check and is returned before it enters the payer's adjudication process. The exact workflow and terminology depend on the clearinghouse and payer." },
  { term: "Denial Code", definition: "A standardized or payer-specific code used to communicate why a claim or service line was adjusted or denied. Claim Adjustment Reason Codes and Remittance Advice Remark Codes provide standardized explanations for many electronic remittances." },
  { term: "Eligibility Verification", definition: "A check of a patient's insurance coverage and benefit information for a relevant date of service. A verification response is not a guarantee that a service will be covered or paid." },
  { term: "Electronic Remittance Advice (ERA)", definition: "An electronic explanation from a health plan to a provider describing how a claim payment was processed, including payment and adjustment information. ERA data can support automated payment posting." },
  { term: "Payment Posting", definition: "Recording payer and patient payments, contractual adjustments, and other remittance information against the relevant claims or accounts so balances and follow-up work can be tracked." },
  { term: "Revenue Cycle Management (RCM)", definition: "The administrative and financial processes associated with a healthcare encounter, from registration and eligibility through charge capture, claim submission, adjudication, payment posting, and follow-up." },
  { term: "First-Pass Resolution", definition: "A measure or operational description of issues resolved without repeated rework or resubmission. Organizations may define the numerator, denominator, and time window differently, so the method should be stated when reporting it." },
  { term: "Net Collection Rate", definition: "A financial metric comparing collections with an adjusted collectible amount after defined contractual or other adjustments. The exact formula varies by organization; a reported rate should always disclose its calculation and exclusions." },
];

export default function GlossaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Resource"
        title="Medical billing and revenue cycle glossary"
        description="Straightforward explanations of common terms used in medical billing, claims, payments, and accounts receivable. Definitions are general and do not replace payer-specific guidance."
        breadcrumbs={[{ label: "Glossary" }]}
      />
      <section className="section">
        <div className="container-x max-w-4xl">
          <dl className="divide-y divide-border border-y border-border">
            {entries.map((entry) => (
              <div key={entry.term} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-display text-lg font-semibold text-ink">{entry.term}</dt>
                <dd className="text-sm leading-7 text-ink-soft">{entry.definition}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 rounded-lg border border-border bg-bg-secondary p-6">
            <h2 className="text-xl">Primary references</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li><a className="inline-flex items-center gap-2 font-semibold underline underline-offset-4" href="https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c01aug_claims_gen_.pdf" target="_blank" rel="noreferrer">CMS Medicare Claims Processing Manual, Chapter 1 <ArrowUpRight className="size-4" /></a></li>
              <li><a className="inline-flex items-center gap-2 font-semibold underline underline-offset-4" href="https://www.cms.gov/medicare/coding-billing/electronic-billing/health-care-payment-remittance-advice" target="_blank" rel="noreferrer">CMS: Health Care Payment and Remittance Advice <ArrowUpRight className="size-4" /></a></li>
              <li><a className="inline-flex items-center gap-2 font-semibold underline underline-offset-4" href="https://www.cms.gov/priorities/key-initiatives/burden-reduction/administrative-simplification/transactions/health-care-payment-remittance-advice-electronic-funds-transfer" target="_blank" rel="noreferrer">CMS: EFT and ERA transaction overview <ArrowUpRight className="size-4" /></a></li>
            </ul>
            <p className="mt-4 text-xs leading-5 text-muted">Some operational terms have no single universal definition. Metrics should be accompanied by the organization's calculation method and payer or contract context.</p>
          </div>
        </div>
      </section>
      <CTASection title="Have a billing workflow question?" description="Contact our team to discuss your practice's operational needs." />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Glossary", path: "/glossary" }])} />
    </>
  );
}
