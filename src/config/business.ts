type Business = {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  phone?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
  address: {
    line1?: string;
    city?: string;
    state?: string;
    zip?: string;
    country: string;
  };
  hours?: string;
};

export const business: Business = {
  name: "PracticeCareSource",
  legalName: "PracticeCareSource LLC",
  tagline: "Medical Billing, Practice Support and AI-Enabled Operations.",
  description:
    "PracticeCareSource supports US healthcare practices with medical billing, revenue cycle management, credentialing, accounts receivable recovery, denial management, medical coding, virtual assistance, and digital marketing support.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://practicecaresource.com",
  phone: "+1 (762) 536-7267",
  phoneHref: "tel:+17625367267",
  email: "info@practicecaresource.com",
  emailHref: "mailto:info@practicecaresource.com",
  address: {
    line1: "123 Baltimore Ave",
    city: "Baltimore",
    state: "MD",
    zip: "21226",
    country: "US",
  },
  hours: undefined,
};

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: NavItem[];
};

export const servicesNav: NavItem[] = [
  { label: "Medical Billing", href: "/services/medical-billing" },
  { label: "Medical Coding", href: "/services/medical-coding" },
  { label: "Virtual Assistant", href: "/services/virtual-assistant" },
  { label: "Marketing & Digital Presence", href: "/services/marketing-digital-presence" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  { label: "Credentialing", href: "/services/credentialing" },
  { label: "Accounts Receivable", href: "/services/ar-management" },
  { label: "Denial Management", href: "/services/denial-management" },
  { label: "Eligibility & Prior Auth", href: "/services/eligibility-prior-authorization" },
  { label: "Payment Posting & Reporting", href: "/services/payment-posting-reporting" },
  { label: "Medical Billing Audits", href: "/services/medical-billing-audits" },
];

export const resourcesNav: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "How It Works", href: "/how-it-works" },
];

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    hasDropdown: true,
    dropdown: servicesNav,
  },
  { label: "Specialties", href: "/specialties" },
  {
    label: "Resources",
    href: "/resources",
    hasDropdown: true,
    dropdown: resourcesNav,
  },
  { label: "Contact", href: "/contact" },
];

export const ctaNav = {
  label: "Request a Consultation",
  href: "/contact",
} as const;

export const footerNav = {
  services: [
    { label: "Medical Billing", href: "/services/medical-billing" },
    { label: "Medical Coding", href: "/services/medical-coding" },
    { label: "Virtual Assistant", href: "/services/virtual-assistant" },
    { label: "Marketing & Digital Presence", href: "/services/marketing-digital-presence" },
    { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
    { label: "Credentialing", href: "/services/credentialing" },
    { label: "Accounts Receivable", href: "/services/ar-management" },
    { label: "Denial Management", href: "/services/denial-management" },
    { label: "Eligibility & Prior Auth", href: "/services/eligibility-prior-authorization" },
    { label: "Payment Posting & Reporting", href: "/services/payment-posting-reporting" },
    { label: "Medical Billing Audits", href: "/services/medical-billing-audits" },
  ],
  specialties: [
    { label: "Family Practice", href: "/specialties/family-practice" },
    { label: "Internal Medicine", href: "/specialties/internal-medicine" },
    { label: "Cardiology", href: "/specialties/cardiology" },
    { label: "Orthopedics", href: "/specialties/orthopedics" },
    { label: "Dermatology", href: "/specialties/dermatology" },
    { label: "Behavioral Health", href: "/specialties/behavioral-health" },
    { label: "Physical Therapy", href: "/specialties/physical-therapy" },
    { label: "Pain Management", href: "/specialties/pain-management" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Why Choose Us", href: "/why-choose-us" },
    { label: "HIPAA & Security", href: "/hipaa-security" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms and Conditions", href: "/terms-and-conditions" },
    { label: "Cookie Policy", href: "/cookie-policy" },
  ],
} as const;
