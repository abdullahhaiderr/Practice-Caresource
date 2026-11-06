import Link from "next/link";
import { Accordion } from "@/components/shared/Accordion";

export const homepageFaqs = [
    {
      question: "What services does PracticeCareSource provide?",
      answer:
        "Medical billing, medical coding, credentialing, revenue cycle management, accounts receivable management, denial management, eligibility verification, prior authorization, payment posting, reporting, and billing audits.",
    },
    {
      question: "Do you work with my existing EHR or practice management system?",
      answer:
        "System compatibility and access requirements are reviewed during the initial discussion. We confirm what can be supported and agree on responsibilities before an engagement begins.",
    },
    {
      question: "Can I send patient information through this website?",
      answer:
        "No. The public website and ordinary email are for business enquiries only. Any future client PHI exchange requires a separately assessed and agreed channel, safeguards, and contractual arrangements.",
    },
    {
      question: "How long does onboarding take?",
      answer:
        "Onboarding timing depends on your practice\u2019s systems, payer mix, and agreed scope. We outline the timeline during your consultation.",
    },
  ];

export function HomepageFAQ() {
  return (
    <section>
      <div className="container-x section">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-4 block">Frequently Asked Questions</span>
          <h2 className="mb-6">Common questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-ink-soft">
            Clear answers about services, scope, security considerations, and next steps.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion items={homepageFaqs} />
        </div>

        <div className="mt-12 text-center">
          <Link href="/faq" className="btn btn-outline">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
