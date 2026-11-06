import Link from "next/link";
import { Accordion } from "@/components/shared/Accordion";

export function HomepageFAQ() {
  const faqs = [
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
      question: "How do you protect patient information?",
      answer:
        "This public website is for business enquiries only and should not receive patient health information. Any client PHI handling, access controls, and required agreements must be assessed and agreed before work begins.",
    },
    {
      question: "How long does onboarding take?",
      answer:
        "Onboarding timing depends on your practice\u2019s systems, payer mix, and agreed scope. We outline the timeline during your consultation.",
    },
  ];

  return (
    <section>
      <div className="container-x section">
        <div className="mb-12 text-center">
          <span className="eyebrow mb-4 block">Frequently Asked Questions</span>
          <h2 className="mb-6">Common questions</h2>
          <p className="mx-auto max-w-2xl text-lg text-ink-soft">
            Answers to questions we hear most from healthcare practices.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion items={faqs} />
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
