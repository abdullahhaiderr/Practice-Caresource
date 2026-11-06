export type ServiceDetail = {
  id: string;
  title: string;
  href: string;
  summary: string;
  intro: string[];
  whatWeHandle: string[];
  process: { title: string; text: string }[];
  whyItMatters: string;
  related: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    id: "medical-billing",
    title: "Medical Billing",
    href: "/services/medical-billing",
    summary:
      "End-to-end billing support from charge entry to claim submission and payment posting.",
    intro: [
      "Medical billing is the process of turning completed patient encounters into claims that payers will process and pay correctly. It touches every part of the practice, from the front desk to the clinical note to the final remittance.",
      "PracticeCareSource manages the billing workflow as a structured, repeatable process. Each claim is prepared, checked, submitted, tracked, and followed up so that problems are caught early instead of surfacing months later in accounts receivable.",
    ],
    whatWeHandle: [
      "Charge entry and demographic review",
      "Claim preparation and scrubbing",
      "Electronic claim submission",
      "Claim tracking and status monitoring",
      "Rejected claim correction and resubmission",
      "Insurance follow-up on unpaid claims",
      "Payment posting and reconciliation support",
      "Billing workflow monitoring",
      "Revenue and collections reporting",
    ],
    process: [
      {
        title: "Charge capture and review",
        text: "Charges are entered from encounter documentation and checked against patient and insurance details before a claim is built.",
      },
      {
        title: "Claim preparation",
        text: "Claims are reviewed for coding accuracy, payer-specific requirements, and common rejection triggers before submission.",
      },
      {
        title: "Submission and tracking",
        text: "Claims are submitted electronically and monitored through payer adjudication. Rejections are corrected and resubmitted promptly.",
      },
      {
        title: "Follow-up and posting",
        text: "Unpaid claims are worked by age and value. Payments and adjustments are posted, and remaining balances are reviewed.",
      },
      {
        title: "Reporting",
        text: "Monthly reporting summarizes charges, payments, adjustments, denials, and outstanding AR so the practice can see what is happening.",
      },
    ],
    whyItMatters:
      "Billing problems rarely stay contained. A missed charge, a coding error, or an unworked denial slows cash flow and hides the true financial picture of the practice. A structured billing process keeps claims moving and makes problems visible while they can still be fixed.",
    related: ["medical-coding", "denial-management", "payment-posting-reporting"],
  },
  {
    id: "medical-coding",
    title: "Medical Coding",
    href: "/services/medical-coding",
    summary:
      "ICD-10-CM, CPT, and HCPCS coding aligned with clinical documentation.",
    intro: [
      "Medical coding translates clinical documentation into the diagnosis and procedure codes payers use to process claims. Accurate coding depends on clear documentation and a careful review of what was actually performed and supported.",
      "Our coding support focuses on consistency between the note, the codes, and the payer's requirements. We review documentation for specificity, apply appropriate modifiers, and flag gaps that could lead to denials or compliance risk.",
    ],
    whatWeHandle: [
      "ICD-10-CM diagnosis coding",
      "CPT procedure coding",
      "HCPCS coding for supplies and services",
      "Modifier review and application",
      "Documentation review and query support",
      "Coding accuracy checks",
      "Medical necessity considerations",
      "Coding audits and feedback",
      "Coding-related denial review",
    ],
    process: [
      {
        title: "Documentation review",
        text: "Each encounter is reviewed for the details needed to support the codes being reported.",
      },
      {
        title: "Code assignment",
        text: "Diagnosis and procedure codes are assigned based on documented clinical information and current code sets.",
      },
      {
        title: "Modifier and edit review",
        text: "Modifiers and claim edits are reviewed to reflect the services accurately and reduce avoidable denials.",
      },
      {
        title: "Feedback and audit",
        text: "Recurring documentation or coding issues are summarized so the practice can improve at the source.",
      },
    ],
    whyItMatters:
      "Coding sits between clinical care and payment. Small documentation gaps can turn into denials, downcoding, or compliance exposure. Consistent coding review protects revenue and supports a cleaner audit trail.",
    related: ["medical-billing", "denial-management", "medical-billing-audits"],
  },
  {
    id: "revenue-cycle-management",
    title: "Revenue Cycle Management",
    href: "/services/revenue-cycle-management",
    summary:
      "Full-cycle oversight from patient registration through final payment.",
    intro: [
      "Revenue cycle management covers the entire financial journey of a patient encounter: eligibility, authorization, charge capture, coding, claim submission, payment posting, and follow-up.",
      "When those steps operate as separate tasks, revenue leaks between them. We manage the cycle as one connected workflow, with clear ownership at each stage and reporting that shows where claims slow down or fall out.",
    ],
    whatWeHandle: [
      "Patient registration and eligibility review",
      "Prior authorization coordination",
      "Charge capture and coding review",
      "Claim submission and tracking",
      "Payment posting and reconciliation",
      "Accounts receivable follow-up",
      "Denial management and appeals support",
      "Revenue cycle reporting and analysis",
      "Workflow monitoring and process improvement",
    ],
    process: [
      {
        title: "Front-end review",
        text: "Registration, eligibility, and authorization are checked before the visit so claims start on solid ground.",
      },
      {
        title: "Mid-cycle accuracy",
        text: "Charges and codes are reviewed for completeness and consistency with documentation.",
      },
      {
        title: "Back-end follow-up",
        text: "Claims are tracked, denials are worked, and AR is followed up by age and value.",
      },
      {
        title: "Reporting and improvement",
        text: "Performance is reviewed regularly to identify recurring issues and adjust workflows.",
      },
    ],
    whyItMatters:
      "Most revenue problems are process problems. Without end-to-end ownership, it is difficult to tell whether a claim was denied because of eligibility, coding, authorization, or follow-up. Full-cycle visibility makes those causes clear.",
    related: ["medical-billing", "ar-management", "denial-management"],
  },
  {
    id: "credentialing",
    title: "Credentialing",
    href: "/services/credentialing",
    summary:
      "Provider enrollment, payer enrollment, and recredentialing support.",
    intro: [
      "Credentialing and payer enrollment determine whether a provider can bill a given insurance plan. The process is document-heavy, payer-specific, and often slow.",
      "We support the administrative side of credentialing: organizing documentation, preparing applications, tracking status, and following up with payers. Payer timelines and enrollment decisions remain controlled by the relevant payers.",
    ],
    whatWeHandle: [
      "Initial credentialing support",
      "Provider enrollment applications",
      "Insurance payer enrollment",
      "Recredentialing coordination",
      "CAQH profile support",
      "Documentation collection and management",
      "Application tracking and status follow-up",
      "Payer follow-up and communication",
      "Ongoing provider information maintenance",
    ],
    process: [
      {
        title: "Documentation intake",
        text: "We collect the documents and details payers require and review them for completeness before submission.",
      },
      {
        title: "Application preparation",
        text: "Applications and profile information are prepared and aligned across payers to reduce avoidable back-and-forth.",
      },
      {
        title: "Submission and tracking",
        text: "Applications are submitted and tracked, with follow-up on missing items or payer requests.",
      },
      {
        title: "Maintenance",
        text: "Recredentialing dates and provider changes are monitored so enrollment does not lapse unexpectedly.",
      },
    ],
    whyItMatters:
      "A provider who is not enrolled with a payer generally cannot be paid for that plan's claims. Delays in credentialing can hold up billing for weeks or months. Organized tracking keeps the process moving and makes gaps visible early.",
    related: ["medical-billing", "eligibility-prior-authorization", "revenue-cycle-management"],
  },
  {
    id: "ar-management",
    title: "Accounts Receivable Management",
    href: "/services/ar-management",
    summary:
      "AR aging analysis, outstanding claim follow-up, and collection reporting.",
    intro: [
      "Accounts receivable is the money a practice has earned but not yet collected. Aging AR ties up cash and often hides claims that were never resolved.",
      "We review AR by age and value, prioritize the claims most worth working, and follow up with payers on outstanding balances. Reporting shows how the AR balance is changing over time.",
    ],
    whatWeHandle: [
      "AR aging analysis",
      "30, 60, 90, and 120+ day bucket review",
      "Outstanding claim follow-up",
      "Insurance payment tracking",
      "Underpayment identification",
      "Denial-related AR review",
      "Collection reporting",
      "Prioritization of outstanding balances",
    ],
    process: [
      {
        title: "Aging review",
        text: "The AR balance is broken down by payer, age, and claim status to identify where money is stuck.",
      },
      {
        title: "Prioritization",
        text: "Claims are prioritized by value, age, and likelihood of recovery so effort goes where it matters most.",
      },
      {
        title: "Follow-up",
        text: "Payers are contacted, claim status is documented, and next actions are scheduled.",
      },
      {
        title: "Reporting",
        text: "Progress is reported so the practice can see reductions in aging balances and remaining problem areas.",
      },
    ],
    whyItMatters:
      "AR that is not actively worked tends to age into write-offs. Regular, prioritized follow-up improves the chance of collection and gives the practice a clearer view of expected cash.",
    related: ["denial-management", "medical-billing", "payment-posting-reporting"],
  },
  {
    id: "denial-management",
    title: "Denial Management",
    href: "/services/denial-management",
    summary:
      "Denial identification, root cause analysis, and appeal preparation support.",
    intro: [
      "A denial is a payer's decision not to pay a claim as submitted. Some denials are administrative and easy to correct; others point to deeper issues in eligibility, coding, authorization, or documentation.",
      "We categorize denials by cause, work the ones that can be corrected or appealed, and report recurring patterns so the practice can address the source rather than only the symptom.",
    ],
    whatWeHandle: [
      "Denial identification and review",
      "Denial categorization by cause",
      "Root cause analysis",
      "Eligibility-related denial review",
      "Coding-related denial review",
      "Authorization-related denial review",
      "Documentation-related denial review",
      "Appeal preparation support",
      "Corrected claim preparation",
      "Denial trend reporting",
    ],
    process: [
      {
        title: "Categorize",
        text: "Each denial is reviewed and grouped by reason: eligibility, coding, authorization, documentation, or administrative.",
      },
      {
        title: "Correct or appeal",
        text: "Correctable claims are fixed and resubmitted. Denials with appeal rights are prepared with supporting documentation.",
      },
      {
        title: "Find the pattern",
        text: "Recurring denial reasons are summarized so upstream workflows can be adjusted.",
      },
      {
        title: "Report",
        text: "Denial trends and recovery activity are included in regular reporting.",
      },
    ],
    whyItMatters:
      "Denials cost more than the unpaid claim. Each one requires rework, delays cash, and can signal a process problem that will repeat. Categorizing denials turns them from a backlog into actionable information.",
    related: ["medical-coding", "ar-management", "revenue-cycle-management"],
  },
  {
    id: "eligibility-prior-authorization",
    title: "Eligibility & Prior Authorization",
    href: "/services/eligibility-prior-authorization",
    summary:
      "Insurance eligibility verification, benefits checks, and authorization tracking.",
    intro: [
      "Eligibility and authorization problems are among the most preventable causes of denials. They are also easiest to address before the service is rendered.",
      "We verify coverage and benefits, identify authorization requirements, and track authorization status so the billing team knows what is approved before a claim is submitted.",
    ],
    whatWeHandle: [
      "Insurance eligibility verification",
      "Coverage verification",
      "Benefits verification",
      "Patient responsibility information",
      "Authorization requirement review",
      "Authorization tracking",
      "Payer communication",
      "Authorization-related claim issue review",
    ],
    process: [
      {
        title: "Verify coverage",
        text: "Eligibility is checked for the date of service, including plan status and basic benefits.",
      },
      {
        title: "Identify requirements",
        text: "Payer rules are reviewed to determine whether prior authorization is required for the planned service.",
      },
      {
        title: "Track authorization",
        text: "Authorization requests are tracked through approval, with reference numbers documented for the claim.",
      },
      {
        title: "Connect to billing",
        text: "Authorization details are carried into the claim workflow so the service and approval match.",
      },
    ],
    whyItMatters:
      "A claim for a service that was never authorized, or for a patient whose coverage had changed, is likely to be denied. Front-end verification prevents avoidable rework and gives patients clearer cost information.",
    related: ["credentialing", "denial-management", "medical-billing"],
  },
  {
    id: "payment-posting-reporting",
    title: "Payment Posting & Reporting",
    href: "/services/payment-posting-reporting",
    summary:
      "ERA/EOB processing, payment posting, reconciliation, and billing reports.",
    intro: [
      "Payment posting turns remittance advice into an accurate record of what was paid, adjusted, or left outstanding. When posting is delayed or inconsistent, the practice cannot trust its AR or its reporting.",
      "We post electronic and manual payments, record adjustments, support reconciliation, and produce reporting that reflects the actual state of the revenue cycle.",
    ],
    whatWeHandle: [
      "ERA processing",
      "EOB review",
      "Electronic payment posting",
      "Manual payment posting",
      "Adjustment tracking",
      "Reconciliation support",
      "Outstanding balance reporting",
      "Billing performance reports",
    ],
    process: [
      {
        title: "Receive remittance",
        text: "ERAs and EOBs are reviewed for payment amounts, adjustments, and denial information.",
      },
      {
        title: "Post accurately",
        text: "Payments and adjustments are posted to the correct claims and line items.",
      },
      {
        title: "Reconcile",
        text: "Posted amounts are checked against remittance totals to catch discrepancies.",
      },
      {
        title: "Report",
        text: "Collections, adjustments, and outstanding balances are summarized for the practice.",
      },
    ],
    whyItMatters:
      "Accurate posting is the foundation of trustworthy reporting. If payments and adjustments are not recorded correctly, AR balances and collection trends will be misleading.",
    related: ["medical-billing", "ar-management", "revenue-cycle-management"],
  },
  {
    id: "medical-billing-audits",
    title: "Medical Billing Audits",
    href: "/services/medical-billing-audits",
    summary:
      "Billing accuracy reviews, coding audits, and revenue leakage identification.",
    intro: [
      "A billing audit reviews a sample of claims and documentation to identify errors, inconsistencies, and missed revenue. It is a diagnostic step, not a guarantee of recovery.",
      "We review billing and coding accuracy, documentation consistency, and claim quality, then provide practical recommendations the practice can act on.",
    ],
    whatWeHandle: [
      "Billing accuracy reviews",
      "Coding review",
      "Documentation consistency review",
      "Claim quality assessment",
      "Revenue leakage identification",
      "Operational improvement recommendations",
      "Audit findings summary",
      "Follow-up review support",
    ],
    process: [
      {
        title: "Scope the audit",
        text: "We agree on the sample, time period, and focus areas before work begins.",
      },
      {
        title: "Review claims",
        text: "Claims and supporting documentation are reviewed against coding and payer requirements.",
      },
      {
        title: "Summarize findings",
        text: "Findings are organized by type and severity so the practice can prioritize fixes.",
      },
      {
        title: "Recommend improvements",
        text: "We provide practical recommendations for documentation, coding, and billing workflow changes.",
      },
    ],
    whyItMatters:
      "Practices often know something is leaking but not where. An audit creates a clear picture of error patterns and revenue opportunities before larger process changes are made.",
    related: ["medical-coding", "medical-billing", "denial-management"],
  },


];