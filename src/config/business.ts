type Business = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  emailHref: string;
  address: { country: string };
};

export const business: Business = {
  name: "PracticeCareSource",
  tagline: "Medical Billing and Revenue Cycle Support.",
  description: "Medical billing and revenue cycle support for healthcare practices in the United States.",
  // Temporary Vercel host until the official domain is connected and verified.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://practice-caresource.vercel.app",
  email: "info@practicecaresource.com",
  emailHref: "mailto:info@practicecaresource.com",
  address: { country: "US" },
};

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdown?: NavItem[];
};

export const servicesNav: NavItem[] = [
  { label: "Medical Billing", href: "/services/medical-billing" },
  { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
  { label: "Credentialing", href: "/services/credentialing" },
  { label: "Accounts Receivable", href: "/services/ar-management" },
  { label: "Denial Management", href: "/services/denial-management" },
  { label: "Medical Coding", href: "/services/medical-coding" },
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
  { label: "Services", href: "/services", hasDropdown: true, dropdown: servicesNav },
  { label: "Resources", href: "/resources", hasDropdown: true, dropdown: resourcesNav },
  { label: "Contact", href: "/contact" },
];

export const ctaNav = {
  label: "Request Free Consultation",
  href: "/contact",
} as const;

export const footerNav = {
  services: [
    { label: "Medical Billing", href: "/services/medical-billing" },
    { label: "Revenue Cycle Management", href: "/services/revenue-cycle-management" },
    { label: "Credentialing & Enrollment", href: "/services/credentialing" },
    { label: "Accounts Receivable Recovery", href: "/services/ar-management" },
    { label: "Denial Management", href: "/services/denial-management" },
    { label: "Medical Coding", href: "/services/medical-coding" },
  ],
  specialties: [],
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
