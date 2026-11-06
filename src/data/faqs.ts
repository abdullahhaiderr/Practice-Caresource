export type FAQGroup = {
  id: string;
  title: string;
  items: { question: string; answer: string }[];
};

export const faqGroups: FAQGroup[] = [
  {
    id: "services",
    title: "Medical billing services",
    items: [
      {
        question: "What does PracticeCareSource do?",
        answer:
          "PracticeCareSource provides medical billing and revenue cycle support to healthcare practices. Our services include medical billing, medical coding, credentialing, accounts receivable management, denial management, eligibility verification, prior authorization, payment posting, reporting, and billing audits.",
      },
      {
        question: "Can we use only some of your services?",
        answer:
          "Yes. Some practices need full revenue cycle support, while others need help with a specific function such as credentialing, AR follow-up, or denial management. The scope is discussed during the consultation and documented before work begins.",
      },
      {
        question: "Do you work with our existing EHR or practice management system?",
        answer:
          "System compatibility, access requirements, and responsibilities are reviewed with each practice before an engagement begins. No specific platform is represented as supported until confirmed.",
      },
      {
        question: "How is pricing structured?",
        answer:
          "The intended pricing approach is percentage-based. The applicable percentage and scope must be discussed and confirmed in writing before an agreement is signed; no rate is published on this website.",
      },
    ],
  },
  {
    id: "coding",
    title: "Medical coding",
    items: [
      {
        question: "What coding systems do you support?",
        answer:
          "ICD-10-CM, CPT, and HCPCS are commonly used coding systems in U.S. medical billing. The specific coding tasks and review responsibilities available from PracticeCareSource must be confirmed in the agreed service scope.",
      },
      {
        question: "Can you help reduce coding-related denials?",
        answer:
          "Coding review can identify recurring documentation and code selection issues that lead to denials. We work with the practice to address those patterns and to review denials when they occur.",
      },
      {
        question: "Do you provide coding audits?",
        answer:
          "Yes. Billing and coding audits are available as a standalone service. An audit reviews a sample of claims and documentation, summarizes findings, and provides practical recommendations.",
      },
    ],
  },
  {
    id: "credentialing",
    title: "Credentialing",
    items: [
      {
        question: "What does credentialing support include?",
        answer:
          "Credentialing support includes organizing documentation, preparing applications, supporting payer enrollment, coordinating recredentialing, and following up on application status.",
      },
      {
        question: "How long does payer enrollment take?",
        answer:
          "Payer timelines vary and are controlled by the payer, not by PracticeCareSource. Some enrollments move quickly while others take considerably longer. We track status and follow up, but cannot guarantee a payer's decision or timeline.",
      },
      {
        question: "Can you help with CAQH?",
        answer:
          "CAQH-related tasks can be discussed during the consultation. Any included profile maintenance or application support must be confirmed in the written service scope.",
      },
    ],
  },
  {
    id: "ar-denials",
    title: "AR and denial management",
    items: [
      {
        question: "How do you approach aging accounts receivable?",
        answer:
          "We review AR by age, payer, and value, then prioritize claims that are most likely to be recovered. Follow-up activity is documented and reported.",
      },
      {
        question: "What happens when a claim is denied?",
        answer:
          "Denials are reviewed and categorized by cause. Correctable claims are fixed and resubmitted. Claims with appeal rights are prepared with supporting documentation. Recurring denial reasons are reported so upstream issues can be addressed.",
      },
      {
        question: "Do you guarantee that denials will be overturned?",
        answer:
          "No. Payer decisions are outside our control. We work denials thoroughly and provide documentation to support appeals, but we cannot guarantee a specific outcome.",
      },
    ],
  },
  {
    id: "eligibility",
    title: "Insurance verification",
    items: [
      {
        question: "What does eligibility verification cover?",
        answer:
          "Eligibility verification checks whether a patient's coverage is active for the date of service and reviews basic benefits information. It can also identify whether a service requires prior authorization.",
      },
      {
        question: "Can you verify benefits for every visit?",
        answer:
          "The scope of verification depends on the agreed workflow. Some practices verify all scheduled visits, while others verify new patients or high-cost services. The approach is defined during onboarding.",
      },
      {
        question: "Do you contact payers on our behalf?",
        answer:
          "Yes, where the agreed scope includes payer communication. We document the contact and the information received.",
      },
    ],
  },
  {
    id: "onboarding",
    title: "Onboarding",
    items: [
      {
        question: "What does onboarding involve?",
        answer:
          "A proposed onboarding discussion can cover the current workflow, scope, responsibilities, system compatibility, access requirements, and reporting. Actual steps and safeguards must be confirmed before work begins.",
      },
      {
        question: "How long does onboarding take?",
        answer:
          "Timing depends on the practice's systems, payer mix, documentation readiness, and the agreed scope. A timeline is discussed during the consultation.",
      },
      {
        question: "Will there be a gap in billing during the transition?",
        answer:
          "We plan the transition to reduce disruption, but every practice is different. The transition approach is discussed and documented before implementation begins.",
      },
    ],
  },
  {
    id: "reporting",
    title: "Reporting",
    items: [
      {
        question: "What kind of reporting do you provide?",
        answer:
          "Reporting typically covers charges, payments, adjustments, denials, and AR aging. The specific reports and frequency are agreed during onboarding.",
      },
      {
        question: "Can we access reports at any time?",
        answer:
          "Reporting access depends on the systems used and the agreed workflow. We discuss reporting cadence and access during onboarding.",
      },
      {
        question: "Do you report on denial trends?",
        answer:
          "Yes. Denial trend reporting is part of denial management and helps identify recurring issues by payer and reason.",
      },
    ],
  },
  {
    id: "security",
    title: "Data security",
    items: [
      {
        question: "How is patient information protected?",
        answer:
          "The actual safeguards, access controls, subcontractors, and contractual responsibilities must be reviewed before any protected health information is shared. A Business Associate Agreement may be required depending on the parties and services. This website does not claim HIPAA certification or guarantee compliance.",
      },
      {
        question: "Is PracticeCareSource HIPAA certified?",
        answer:
          "No. PracticeCareSource does not claim HIPAA certification. HIPAA compliance depends on the applicable legal roles, actual safeguards, and contractual arrangements; this website is not proof of compliance.",
      },
      {
        question: "Can we submit patient information through this website?",
        answer:
          "No. This marketing website is not designed to receive protected health information. Please do not include patient names, medical records, claim documents, or insurance card details in the consultation form.",
      },
    ],
  },
  {
    id: "consultation",
    title: "Consultation and arrangements",
    items: [
      {
        question: "What happens during a consultation?",
        answer:
          "We discuss your practice, current billing workflow, challenges, and goals. If it is useful, we review a de-identified sample of billing information to understand the workflow better. There is no obligation to continue.",
      },
      {
        question: "Are there long-term contracts?",
        answer:
          "Service arrangements are discussed during the consultation and documented in writing. Terms depend on the services requested and the agreed scope.",
      },
      {
        question: "How do we get started?",
        answer:
          "Use the contact form to prepare an email addressed to info@practicecaresource.com. Review the draft in your email application and press Send. The website cannot confirm delivery.",
      },
    ],
  },
];
