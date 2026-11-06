import { serviceDetails } from "@/data/service-details";

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
  // Keep the temporary Vercel host until the official domain is verified and approved.
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

export const servicesNav: NavItem[] = serviceDetails.map((service) => ({
  label: service.title,
  href: service.href,
}));

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
  label: "Request a Consultation",
  href: "/contact",
} as const;

export const footerNav = {
  services: serviceDetails.slice(0, 6).map((service) => ({
    label: service.title,
    href: service.href,
  })),
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
