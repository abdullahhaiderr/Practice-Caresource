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
        "Yes. We work with the systems you already use and can coordinate secure access to your practice management and billing systems.",
    },
    {
      question: "How do you protect patient information?",
      answer:
        "We follow HIPAA-aligned security practices, including access controls, confidentiality requirements, and Business Associate Agreements where applicable. This marketing site does not collect patient health information.",
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
