export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-medical-billing",
    title: "What Is Medical Billing?",
    description:
      "A plain-language overview of medical billing, what happens between a patient visit and payment, and where practices commonly lose track of claims.",
    date: "2026-10-14",
    category: "Medical Billing",
    readTime: "6 min read",
    sections: [
      {
        heading: "The short definition",
        paragraphs: [
          "Medical billing is the process of converting a healthcare encounter into a claim, submitting that claim to the appropriate payer, and following it through payment or denial. It connects clinical documentation to the financial side of the practice.",
          "Billing is not a single task. It is a chain of steps that includes patient registration, insurance verification, charge entry, coding review, claim submission, tracking, payment posting, and follow-up on unpaid balances.",
        ],
      },
      {
        heading: "What happens after the visit",
        paragraphs: [
          "After a patient is seen, the encounter documentation is reviewed and the services provided are translated into charges. Diagnosis and procedure codes are assigned, either by the clinician, an in-house coder, or a billing team.",
          "The claim is then prepared for the payer. This includes checking patient demographics, insurance information, and common claim requirements. Once submitted, the claim moves through the payer's adjudication process, which can result in payment, partial payment, a request for information, or a denial.",
        ],
        bullets: [
          "Charge entry captures what was done and why.",
          "Coding translates the encounter into standardized codes.",
          "Claim scrubbing checks for missing or inconsistent information.",
          "Submission sends the claim to the payer.",
          "Posting records the payer's response and remaining balance.",
        ],
      },
      {
        heading: "Where billing problems usually start",
        paragraphs: [
          "Most billing problems begin before the claim is submitted. A patient's coverage may have changed, a prior authorization may be missing, or the documentation may not support the level of service billed.",
          "Problems also start when claims are submitted but not tracked. A claim that is neither paid nor denied can sit in limbo for weeks. Without routine follow-up, it becomes part of aging accounts receivable and is harder to recover.",
        ],
      },
      {
        heading: "Why structure matters more than speed",
        paragraphs: [
          "A billing team that submits claims quickly but does not track them is not necessarily improving revenue. Speed helps only when the claim is complete and the follow-up is consistent.",
          "A structured workflow assigns ownership to each step. Eligibility is checked before the visit, claims are reviewed before submission, denials are categorized, and AR is worked by age and value. That structure makes it easier to see where revenue is leaking and what to fix.",
        ],
      },
      {
        heading: "What to look for in a billing partner",
        paragraphs: [
          "A good billing partner can explain the workflow in plain language, show how claims are tracked, and describe what reporting the practice will receive. They should be clear about what they control and what depends on payers.",
          "Be cautious with promises of guaranteed results or specific revenue increases. Payer behavior, patient volume, specialty mix, and documentation quality all affect outcomes. A credible partner talks about process and visibility rather than guarantees.",
        ],
      },
    ],
  },
  {
    slug: "understanding-the-medical-revenue-cycle",
    title: "Understanding the Medical Revenue Cycle",
    description:
      "How the revenue cycle works from patient registration to final payment, and why each stage affects the next.",
    date: "2026-10-01",
    category: "Revenue Cycle",
    readTime: "7 min read",
    sections: [
      {
        heading: "The revenue cycle is a chain",
        paragraphs: [
          "The medical revenue cycle is the full financial journey of a patient encounter. It starts before the visit, with registration and insurance verification, and ends when the remaining balance is resolved.",
          "Each stage depends on the one before it. If eligibility was never verified, the claim may be denied. If the documentation does not support the code, the claim may be downcoded. If the denial is never worked, the balance ages out.",
        ],
      },
      {
        heading: "The main stages",
        paragraphs: [
          "While workflows vary by practice, most revenue cycles include the same core stages. Understanding them separately makes it easier to identify where problems begin.",
        ],
        bullets: [
          "Registration: collecting accurate patient and insurance information.",
          "Eligibility and benefits: confirming coverage and patient responsibility.",
          "Authorization: obtaining payer approval when required.",
          "Charge capture: recording services, supplies, and diagnoses.",
          "Coding: translating documentation into billable codes.",
          "Claim submission: sending a clean claim to the payer.",
          "Tracking: monitoring the claim until it is adjudicated.",
          "Payment posting: recording payments and adjustments.",
          "AR follow-up: working unpaid and underpaid claims.",
          "Denial management: correcting or appealing denied claims.",
        ],
      },
      {
        heading: "Front-end versus back-end",
        paragraphs: [
          "Billing teams often talk about front-end and back-end work. Front-end work happens before or during the visit: registration, eligibility, authorization, and charge capture. Back-end work happens after the visit: coding, submission, posting, follow-up, and denials.",
          "Front-end errors are usually cheaper to fix. A coverage issue caught before the visit can be resolved with the patient. The same issue discovered after a denial may require rework, patient contact, and a new claim.",
        ],
      },
      {
        heading: "Why end-to-end visibility helps",
        paragraphs: [
          "When each stage is managed separately, it is difficult to see cause and effect. A denial might be blamed on coding when the real issue was an authorization that was never obtained.",
          "End-to-end reporting connects the stages. It can show which payers deny most often, which service lines have the longest lag between submission and payment, and which denial reasons repeat. That information is more useful than a single collection total.",
        ],
      },
      {
        heading: "Practical takeaway",
        paragraphs: [
          "Improving the revenue cycle does not always require a large technology change. It often starts with clear ownership, a consistent eligibility process, a claim review step, and routine AR follow-up.",
          "Practices that document their workflow and review it regularly tend to catch problems earlier and have a clearer picture of expected cash.",
        ],
      },
    ],
  },
  {
    slug: "common-reasons-medical-claims-get-denied",
    title: "Common Reasons Medical Claims Get Denied",
    description:
      "A practical look at frequent denial causes, how to categorize them, and what to fix upstream.",
    date: "2026-09-18",
    category: "Denial Management",
    readTime: "6 min read",
    sections: [
      {
        heading: "Denials are information",
        paragraphs: [
          "A denial is not just an unpaid claim. It is a signal about something in the workflow. Treating denials as individual problems leads to repeated rework. Categorizing them by cause leads to process improvement.",
          "Most denials fall into a small number of categories: eligibility, authorization, coding, documentation, and administrative or data errors.",
        ],
      },
      {
        heading: "Eligibility and coverage denials",
        paragraphs: [
          "Coverage can change between visits. A patient may have a new plan, a terminated policy, or a different primary insurer. If eligibility is not verified for the date of service, the claim may be denied even though the care was appropriate.",
          "These denials are often preventable with a consistent verification step before the visit and a process for updating insurance information at check-in.",
        ],
      },
      {
        heading: "Authorization denials",
        paragraphs: [
          "Some services require prior authorization. If authorization was never requested, was requested for a different service, or expired before the date of service, the payer may deny the claim.",
          "Tracking authorization status and matching the approval to the service billed helps reduce these denials. When they occur, the appeal may depend on whether the service met urgent or emergent criteria.",
        ],
      },
      {
        heading: "Coding and documentation denials",
        paragraphs: [
          "Coding denials can involve an invalid code combination, a missing modifier, a service not supported by documentation, or a diagnosis that does not meet medical necessity requirements.",
          "Documentation denials often reflect a gap between what was done and what was recorded. Reviewing recurring denial reasons can reveal where documentation needs to be more specific.",
        ],
      },
      {
        heading: "Administrative and data errors",
        paragraphs: [
          "Simple errors still cause a large share of rejections and denials: misspelled names, incorrect member IDs, missing referring provider information, or a payer that was never updated.",
          "These are usually correctable, but each one costs time. Claim scrubbing and a second review before submission can catch many of them.",
        ],
      },
      {
        heading: "What to do with denial data",
        paragraphs: [
          "Track denials by payer, reason, and service line. Look for patterns rather than isolated claims. If the same denial reason appears repeatedly, the fix is usually upstream, not in the appeal.",
          "A denial report should answer three questions: what is being denied, why, and what change would prevent it next time.",
        ],
      },
    ],
  },
  {
    slug: "why-medical-credentialing-matters",
    title: "Why Medical Credentialing Matters",
    description:
      "What credentialing and payer enrollment do, why delays are costly, and how to keep the process organized.",
    date: "2026-09-04",
    category: "Credentialing",
    readTime: "5 min read",
    sections: [
      {
        heading: "What credentialing is",
        paragraphs: [
          "Credentialing is the process payers use to verify a provider's qualifications, licensure, and background before allowing the provider to participate in their network. Payer enrollment is the related process of registering the provider so claims can be billed and paid.",
          "The two terms are often used together because they serve the same practical purpose: establishing the provider's ability to bill a given payer.",
        ],
      },
      {
        heading: "Why it affects revenue",
        paragraphs: [
          "If a provider is not credentialed or enrolled with a payer, claims for that payer may be denied or held. In many cases, services provided before the effective enrollment date are not payable, even if the provider was qualified.",
          "Delays also affect patients. A provider who is not in-network with a patient's plan may create unexpected cost or access problems. Organized credentialing keeps both the financial and patient sides moving.",
        ],
      },
      {
        heading: "Why the process takes time",
        paragraphs: [
          "Credentialing involves multiple verification steps and payer-specific requirements. Applications can be returned for missing information, and payer review timelines vary widely.",
          "PracticeCareSource can support the administrative work, but payer timelines and enrollment decisions remain controlled by the payer. No billing company can guarantee a payer's processing time or outcome.",
        ],
      },
      {
        heading: "Keeping it organized",
        paragraphs: [
          "The most common credentialing problems are administrative: expired documents, inconsistent provider information across applications, and missed recredentialing dates.",
        ],
        bullets: [
          "Maintain a single source of truth for provider information.",
          "Track expiration dates for licenses, certifications, and malpractice coverage.",
          "Keep CAQH profiles current where applicable.",
          "Log application submissions and payer follow-up.",
          "Plan recredentialing well before the deadline.",
        ],
      },
      {
        heading: "Working with a credentialing partner",
        paragraphs: [
          "Ask how applications are tracked, how often status is reviewed, and what happens when a payer requests additional information. Clear tracking is more valuable than optimistic timelines.",
        ],
      },
    ],
  },
  {
    slug: "understanding-ar-aging-in-medical-billing",
    title: "Understanding AR Aging in Medical Billing",
    description:
      "What the 30, 60, 90, and 120+ day buckets mean, why AR ages, and how to prioritize follow-up.",
    date: "2026-08-21",
    category: "Accounts Receivable",
    readTime: "6 min read",
    sections: [
      {
        heading: "What AR aging means",
        paragraphs: [
          "Accounts receivable aging groups unpaid claims by how long they have been outstanding. Common buckets are 0–30, 31–60, 61–90, and 120+ days from the date of service or submission.",
          "The aging report shows where money is stuck. A healthy-looking total AR balance can hide a large portion of claims that are unlikely to be paid without intervention.",
        ],
      },
      {
        heading: "Why claims age",
        paragraphs: [
          "Claims age for several reasons. Some are never submitted. Some are submitted but not tracked. Some are denied and never worked. Others are paid at a lower amount than expected and the underpayment is not identified.",
          "Aging is often a sign of missing ownership. If no one is responsible for reviewing the bucket each week, claims move from 30 to 60 to 90 days without action.",
        ],
      },
      {
        heading: "How to prioritize",
        paragraphs: [
          "Not every claim deserves the same urgency. Prioritize by age, value, and likelihood of recovery. Large claims approaching a timely filing limit should come before small, old balances with little chance of payment.",
        ],
        bullets: [
          "Work the oldest high-value claims first.",
          "Review payer-specific timely filing limits.",
          "Separate denials from clean claims awaiting payment.",
          "Flag underpayments rather than writing them off silently.",
          "Document each follow-up attempt and next action.",
        ],
      },
      {
        heading: "What good AR reporting looks like",
        paragraphs: [
          "A useful AR report goes beyond a single total. It breaks the balance down by payer, age, and status, and it shows change over time.",
          "It should also connect to denial data. If a large share of aging AR is denial-related, the fix may be in coding or authorization rather than collections.",
        ],
      },
      {
        heading: "Practical takeaway",
        paragraphs: [
          "Review AR on a fixed schedule, assign ownership, and track whether the aging profile is improving. A smaller AR balance worked consistently is more valuable than a large balance that is only reviewed once a quarter.",
        ],
      },
    ],
  },
  {
    slug: "medical-billing-vs-medical-coding",
    title: "Medical Billing vs. Medical Coding",
    description:
      "How billing and coding differ, where they overlap, and why practices need both to work together.",
    date: "2026-08-07",
    category: "Medical Billing",
    readTime: "5 min read",
    sections: [
      {
        heading: "Two related but different functions",
        paragraphs: [
          "Medical coding translates clinical documentation into standardized diagnosis and procedure codes. Medical billing uses those codes, along with patient and insurance information, to create and submit claims.",
          "Coding is about what happened clinically and how it is represented. Billing is about how that representation moves through the payer system and becomes payment.",
        ],
      },
      {
        heading: "What coders do",
        paragraphs: [
          "Coders review documentation and assign ICD-10-CM, CPT, and HCPCS codes. They apply modifiers, check for medical necessity support, and flag documentation that is incomplete or inconsistent.",
          "Good coding requires clinical knowledge and attention to detail. It also requires staying current with code updates and payer-specific requirements.",
        ],
      },
      {
        heading: "What billers do",
        paragraphs: [
          "Billers prepare claims, verify that required information is present, submit claims to payers, track status, post payments, and follow up on denials and unpaid balances.",
          "Billing work is more administrative and process-oriented. It depends on accurate coding but also on eligibility, authorization, and clean data.",
        ],
      },
      {
        heading: "Where the handoff breaks",
        paragraphs: [
          "Problems often occur at the handoff. A coder may assign a code that the biller cannot support with the documentation on file. A biller may submit a claim without noticing that authorization was never obtained.",
          "When coding and billing operate in separate silos, each side sees only part of the problem. A denial may be labeled a coding issue when the real cause was eligibility.",
        ],
      },
      {
        heading: "Why they should work together",
        paragraphs: [
          "The most effective revenue cycle teams share information. Denial trends inform coding reviews. Documentation feedback improves claim quality. Eligibility data shapes what is billed and when.",
          "Whether these functions are in-house or outsourced, the workflow should make the handoff visible and assign ownership at each step.",
        ],
      },
    ],
  },
  {
    slug: "how-insurance-eligibility-verification-works",
    title: "How Insurance Eligibility Verification Works",
    description:
      "What eligibility checks confirm, what they do not confirm, and how to use the information before the visit.",
    date: "2026-07-24",
    category: "Eligibility",
    readTime: "5 min read",
    sections: [
      {
        heading: "What eligibility verification checks",
        paragraphs: [
          "Eligibility verification confirms whether a patient's insurance coverage is active for a specific date of service. It typically checks the plan, member ID, coverage status, and basic benefit information.",
          "The check is usually performed through a payer portal, clearinghouse, or automated eligibility transaction. The result should be documented in the patient record.",
        ],
      },
      {
        heading: "What it does not confirm",
        paragraphs: [
          "Eligibility is not the same as authorization. A patient can be eligible for coverage while a specific service still requires prior approval.",
          "Eligibility also does not guarantee payment. Benefits may have limits, exclusions, or coordination-of-benefits rules that only become clear when the claim is processed.",
        ],
      },
      {
        heading: "When to verify",
        paragraphs: [
          "Verify as close to the date of service as practical. Coverage can change between scheduling and the visit. For recurring visits, verify at an interval that matches the practice's workflow and payer requirements.",
        ],
        bullets: [
          "New patients before the first visit.",
          "Established patients when insurance information changes.",
          "High-cost services and procedures.",
          "Visits after a coverage termination date.",
          "Recurring visits at an agreed interval.",
        ],
      },
      {
        heading: "Using the information well",
        paragraphs: [
          "Eligibility data is most useful when it reaches the people who need it. Front desk staff can update patient information. Billers can flag authorization requirements. Patients can be informed of expected responsibility.",
          "The goal is not to collect data for its own sake. It is to prevent avoidable denials and give patients clearer expectations before the visit.",
        ],
      },
      {
        heading: "Common gaps",
        paragraphs: [
          "A common gap is verifying eligibility but not documenting the result. Another is checking coverage without reviewing whether the specific service requires authorization.",
          "A consistent checklist and a place to record the result make eligibility verification more reliable.",
        ],
      },
    ],
  },
  {
    slug: "how-healthcare-practices-can-improve-billing-workflows",
    title: "How Healthcare Practices Can Improve Billing Workflows",
    description:
      "Practical workflow improvements that reduce rework, shorten follow-up time, and improve visibility.",
    date: "2026-07-10",
    category: "Operations",
    readTime: "6 min read",
    sections: [
      {
        heading: "Start with visibility",
        paragraphs: [
          "Before changing a workflow, understand what is actually happening. Map the steps from scheduling to payment and identify who owns each one. Look for handoffs where information is lost or delayed.",
          "A simple process map often reveals that no one is responsible for a specific step, such as authorization follow-up or denial review.",
        ],
      },
      {
        heading: "Fix the front end first",
        paragraphs: [
          "Registration and eligibility errors are among the most expensive to correct later. Standardize what is collected at scheduling and check-in, and verify coverage before the visit where possible.",
        ],
        bullets: [
          "Use a consistent registration checklist.",
          "Re-verify insurance when the patient reports a change.",
          "Record eligibility results in the patient account.",
          "Flag services that commonly require authorization.",
        ],
      },
      {
        heading: "Add a claim review step",
        paragraphs: [
          "A brief review before submission can catch missing information, inconsistent codes, and common payer requirements. The review does not need to be lengthy; it needs to be consistent.",
          "Track which errors are caught at this stage. If the same issue appears repeatedly, address it at the source rather than relying on the review to catch it every time.",
        ],
      },
      {
        heading: "Work denials by category",
        paragraphs: [
          "Instead of working denials one at a time, group them by reason. Eligibility denials, authorization denials, coding denials, and documentation denials each require a different fix.",
          "Categorizing denials makes it easier to see which upstream process needs attention and which appeals are worth pursuing.",
        ],
      },
      {
        heading: "Set a reporting rhythm",
        paragraphs: [
          "Reports are only useful if they are reviewed on a schedule. A monthly review of charges, collections, adjustments, denials, and AR aging keeps problems from drifting.",
          "Keep the report focused. A few consistent metrics reviewed regularly are more useful than a large dashboard that no one opens.",
        ],
      },
      {
        heading: "Know when to bring in help",
        paragraphs: [
          "If the practice cannot keep up with eligibility, claim follow-up, or denial work, a billing partner can provide capacity and structure. The decision should be based on workload and workflow, not only cost.",
          "Ask prospective partners how they track claims, what reporting they provide, and how they handle the handoff from clinical documentation to billing.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}
