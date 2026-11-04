export type SpecialtyDetail = {
  id: string;
  title: string;
  href: string;
  summary: string;
  intro: string[];
  billingFocus: string[];
  commonChallenges: string[];
  howWeHelp: string[];
};

export const specialtyDetails: SpecialtyDetail[] = [
  {
    id: "family-practice",
    title: "Family Practice",
    href: "/specialties/family-practice",
    summary:
      "Billing support for high-volume primary care with preventive, chronic, and acute visits.",
    intro: [
      "Family practice billing covers a wide range of services: preventive visits, acute problem visits, chronic condition management, immunizations, and minor procedures. Volume is high, and small coding inconsistencies add up quickly.",
      "We support family practices with billing workflows that account for preventive versus problem-oriented visits, documentation requirements, and the payer mix that typically includes commercial plans, Medicare, and Medicaid.",
    ],
    billingFocus: [
      "Preventive and problem-oriented E/M coding",
      "Chronic care management documentation",
      "Immunization administration and vaccine product codes",
      "Minor procedure coding and modifier use",
      "Lab and point-of-care service billing",
      "Well-child visit requirements",
      "Payer-specific preventive service rules",
    ],
    commonChallenges: [
      "Preventive and problem visits documented in the same encounter",
      "Missing or inconsistent modifier use",
      "Vaccine administration codes billed without the product",
      "High claim volume with limited in-house billing staff",
      "Patients with coverage changes between visits",
    ],
    howWeHelp: [
      "Review E/M leveling and documentation consistency",
      "Check modifier use on same-day services",
      "Verify eligibility and benefits before visits where possible",
      "Work denials by cause rather than one claim at a time",
      "Provide reporting on common denial reasons and payer trends",
    ],
  },
  {
    id: "internal-medicine",
    title: "Internal Medicine",
    href: "/specialties/internal-medicine",
    summary:
      "Billing support for complex adult medicine, chronic conditions, and care coordination.",
    intro: [
      "Internal medicine encounters often involve multiple chronic conditions, medication management, and coordination with other providers. Documentation is detailed, and medical necessity is central to how claims are paid.",
      "Our internal medicine billing support focuses on accurate E/M leveling, diagnosis specificity, and the documentation needed to support complex visits and diagnostic services.",
    ],
    billingFocus: [
      "Complex E/M leveling and documentation",
      "Multiple chronic condition coding",
      "Diagnostic test ordering and result follow-up",
      "Care coordination and transitional care services",
      "Preventive service coding where applicable",
      "Medicare and commercial payer rules",
      "Referral and consult documentation",
    ],
    commonChallenges: [
      "Undercoding complex visits due to incomplete documentation",
      "Diagnosis codes that lack the specificity payers expect",
      "Preventive and chronic care services billed incorrectly together",
      "High denial rates on diagnostic services without clear medical necessity",
      "Time-based coding that is not supported by the note",
    ],
    howWeHelp: [
      "Review documentation against E/M and diagnosis requirements",
      "Identify recurring medical necessity denial patterns",
      "Support cleaner charge capture for diagnostic services",
      "Work coding-related denials with clear supporting information",
      "Report on payer-specific denial trends",
    ],
  },
  {
    id: "cardiology",
    title: "Cardiology",
    href: "/specialties/cardiology",
    summary:
      "Billing support for cardiology diagnostics, procedures, and ongoing condition management.",
    intro: [
      "Cardiology billing combines office visits, diagnostic testing, and procedures, often on the same day. Correct use of modifiers, global period rules, and medical necessity documentation heavily influences reimbursement.",
      "We support cardiology practices with coding and billing workflows that distinguish professional and technical components, apply modifiers correctly, and keep authorization and documentation aligned with the service billed.",
    ],
    billingFocus: [
      "Cardiology E/M coding",
      "Diagnostic testing codes (for example, ECG and echocardiography)",
      "Professional and technical component modifiers",
      "Stress test and imaging documentation",
      "Procedure coding and global period awareness",
      "Prior authorization for scheduled procedures",
      "Medical necessity documentation for testing",
    ],
    commonChallenges: [
      "Missing or incorrect 26/TC modifier use",
      "Diagnostic testing billed without supporting medical necessity",
      "Authorization gaps for scheduled procedures",
      "Same-day E/M and procedure modifier issues",
      "Global period billing errors after procedures",
    ],
    howWeHelp: [
      "Review modifier use on diagnostic and professional claims",
      "Check authorization status against scheduled services",
      "Support documentation review for medical necessity",
      "Work cardiology-specific denials by payer and reason",
      "Provide reporting on high-risk code and payer combinations",
    ],
  },
  {
    id: "orthopedics",
    title: "Orthopedics",
    href: "/specialties/orthopedics",
    summary:
      "Billing support for surgical, fracture care, imaging, and rehabilitation services.",
    intro: [
      "Orthopedic billing involves surgical procedures, fracture care, imaging, durable medical equipment, and rehabilitation. Global periods, modifiers, and payer-specific rules create recurring complexity.",
      "We support orthopedic practices with billing workflows that track global periods, distinguish surgical and non-surgical services, and keep documentation aligned with the codes reported.",
    ],
    billingFocus: [
      "Surgical procedure coding",
      "Fracture care and global period rules",
      "Modifier use for staged and bilateral procedures",
      "Imaging and diagnostic service billing",
      "Durable medical equipment coding",
      "Workers' compensation and auto injury claims",
      "Post-operative visit billing rules",
    ],
    commonChallenges: [
      "Billing visits inside a global period without the correct modifier",
      "Fracture care coding inconsistencies",
      "DME documentation and coverage requirements",
      "Workers' compensation and liability payer complexity",
      "Authorization issues for surgical and imaging services",
    ],
    howWeHelp: [
      "Review global period tracking and modifier use",
      "Check DME documentation before submission",
      "Support authorization follow-up for surgical services",
      "Work liability and workers' compensation claims with payer-specific handling",
      "Report on denials by procedure and payer",
    ],
  },
  {
    id: "dermatology",
    title: "Dermatology",
    href: "/specialties/dermatology",
    summary:
      "Billing support for medical dermatology, procedures, and pathology services.",
    intro: [
      "Dermatology billing often mixes evaluation and management services with procedures and pathology. Distinguishing medical from cosmetic services and applying the correct modifiers is essential.",
      "We support dermatology practices with coding review for lesion procedures, pathology billing, same-day E/M services, and documentation that supports medical necessity.",
    ],
    billingFocus: [
      "Medical dermatology E/M coding",
      "Lesion excision, destruction, and biopsy coding",
      "Pathology service billing",
      "Modifier 25 use for same-day E/M and procedures",
      "Medical versus cosmetic service documentation",
      "Multiple procedure reduction rules",
      "Phototherapy and other in-office services",
    ],
    commonChallenges: [
      "E/M services denied when billed with a same-day procedure",
      "Lesion size and location documentation gaps",
      "Cosmetic services billed without clear medical justification",
      "Pathology claims separated from the originating procedure",
      "Multiple procedure reductions applied unexpectedly",
    ],
    howWeHelp: [
      "Review procedure documentation for size, location, and method",
      "Check modifier 25 support when E/M is billed with a procedure",
      "Support clean pathology claim submission",
      "Work same-day service denials by payer",
      "Report on procedure denial patterns and documentation gaps",
    ],
  },
  {
    id: "behavioral-health",
    title: "Behavioral Health",
    href: "/specialties/behavioral-health",
    summary:
      "Billing support for therapy, psychiatric services, and telehealth encounters.",
    intro: [
      "Behavioral health billing relies on time-based codes, authorization requirements, and clear documentation of the service provided. Telehealth has added another layer of payer-specific rules.",
      "We support behavioral health practices with billing workflows that match documentation to the code billed, track authorizations, and handle the payer variation common in mental health coverage.",
    ],
    billingFocus: [
      "Psychotherapy and psychiatric evaluation codes",
      "Time-based service documentation",
      "Telehealth modifiers and place of service",
      "Authorization and visit limit tracking",
      "Diagnosis coding for behavioral health conditions",
      "Coordination with primary care billing",
      "Payer-specific mental health benefit rules",
    ],
    commonChallenges: [
      "Time-based codes not supported by documentation",
      "Authorization or visit limit denials",
      "Telehealth claims submitted with incorrect modifiers",
      "Coverage differences between medical and behavioral health plans",
      "Missed sessions and cancellation policy billing questions",
    ],
    howWeHelp: [
      "Review documentation for time-based code support",
      "Track authorizations and visit limits",
      "Check telehealth modifier and place-of-service use",
      "Work behavioral health denials with payer-specific handling",
      "Report on authorization and eligibility denial trends",
    ],
  },
  {
    id: "physical-therapy",
    title: "Physical Therapy",
    href: "/specialties/physical-therapy",
    summary:
      "Billing support for timed codes, plan of care requirements, and visit limits.",
    intro: [
      "Physical therapy billing is built around timed codes, units, and plan of care requirements. Small documentation gaps can lead to downcoding or denials, especially near visit limits.",
      "We support physical therapy practices with billing workflows that match documented treatment time to billed units and keep plan of care and authorization requirements visible.",
    ],
    billingFocus: [
      "Timed code billing and unit calculation",
      "Plan of care certification and recertification",
      "Visit limit tracking",
      "KX modifier and medical necessity documentation",
      "Therapy cap and exception rules",
      "Progress note documentation",
      "Payer-specific therapy requirements",
    ],
    commonChallenges: [
      "Units billed that do not match documented treatment time",
      "Missing or expired plan of care certification",
      "Visit limit denials near cap thresholds",
      "Insufficient progress documentation to support continued care",
      "Different rules across commercial and Medicare plans",
    ],
    howWeHelp: [
      "Review unit calculation against documented time",
      "Track plan of care dates and certification needs",
      "Monitor visit limits and exception requirements",
      "Support documentation review for medical necessity",
      "Work therapy-specific denials by payer and reason",
    ],
  },
  {
    id: "pain-management",
    title: "Pain Management",
    href: "/specialties/pain-management",
    summary:
      "Billing support for interventional procedures, imaging, and ongoing pain care.",
    intro: [
      "Pain management billing combines evaluation and management services with injections, imaging, and other interventional procedures. Authorization requirements and documentation of medical necessity are common pressure points.",
      "We support pain management practices with coding and billing workflows that keep procedure documentation, authorization, and claim submission aligned.",
    ],
    billingFocus: [
      "Pain management E/M coding",
      "Injection and procedure coding",
      "Fluoroscopy and imaging guidance billing",
      "Modifier use for same-day services",
      "Prior authorization for interventional procedures",
      "Medical necessity documentation",
      "Ongoing care and medication management visits",
    ],
    commonChallenges: [
      "Procedure claims denied for missing or expired authorization",
      "Same-day E/M and procedure modifier issues",
      "Imaging guidance billed without supporting documentation",
      "Medical necessity questions on repeat procedures",
      "Payer variation in interventional pain coverage",
    ],
    howWeHelp: [
      "Check authorization status before scheduled procedures",
      "Review procedure and imaging documentation",
      "Support modifier use on same-day services",
      "Work pain management denials by payer and procedure",
      "Report on authorization and medical necessity denial trends",
    ],
  },
];
