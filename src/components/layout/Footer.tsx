import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { business, footerNav } from "@/config/business";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/creativehaider/" },
  { label: "TikTok", href: "https://www.tiktok.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQs", href: "/faq" },
  { label: "HIPAA & Security", href: "/hipaa-security" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#102f45] text-white">
      <div className="container-x py-12 sm:py-14">
        <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-12">
          <div className="flex flex-col items-start">
            <Link href="/" aria-label="PracticeCareSource home" className="shrink-0">
            <img
              src="/footer-logo.webp"
              alt="PracticeCareSource"
              className="w-[280px] max-w-full h-auto object-contain sm:w-[320px]"
              width="396"
              height="110"
            />
          </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#c2d2db]">
              Medical billing, coding, credentialing, and revenue cycle support
              for healthcare practices in the United States only.
            </p>
            <span className="mt-5 inline-flex items-center rounded-full border border-[#93c5fd]/35 bg-[#3b82f6]/15 px-3 py-1.5 text-xs font-semibold text-[#bfdbfe]">
              Serving U.S. healthcare practices
            </span>
            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[.04] text-[#c2d2db] transition-colors hover:border-[#93c5fd]/70 hover:bg-[#3b82f6]/15 hover:text-[#bfdbfe]"
                >
                  <svg viewBox="0 0 24 24" className="size-[18px]" fill="currentColor" aria-hidden="true">
                    {label === "LinkedIn" ? (
                      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.44c.98 0 1.79-.77 1.79-1.72V1.72C24 .77 23.19 0 22.22 0Z" />
                    ) : label === "TikTok" ? (
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-4.03v13.67a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6.04.9.13V8.78a7.1 7.1 0 1 0 6.03 7.03V9.08a8.8 8.8 0 0 0 5.15 1.66V6.7a4.8 4.8 0 0 1-1.38-.01Z" />
                    ) : label === "Instagram" ? (
                      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9Zm4.5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
                    ) : (
                      <path d="M13.5 22v-8.2h2.76l.41-3.2H13.5V8.56c0-.93.26-1.56 1.59-1.56h1.7V4.14c-.3-.04-1.35-.14-2.57-.14-2.55 0-4.3 1.55-4.3 4.4v2.2H7v3.2h2.92V22h3.58Z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer services">
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[.12em] text-white">
              Main services
            </h3>
            <ul className="space-y-3">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#c2d2db] transition-colors hover:text-[#bfdbfe]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer company">
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[.12em] text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#c2d2db] transition-colors hover:text-[#bfdbfe]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-[.12em] text-white">
              Get in touch
            </h3>
            <ul className="space-y-4 text-sm text-[#c2d2db]">
              {business.emailHref && business.email ? (
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#93c5fd]" aria-hidden="true" />
                  <a href={business.emailHref} className="break-all transition-colors hover:text-white">
                    {business.email}
                  </a>
                </li>
              ) : null}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#2563eb] px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#1d4ed8]"
            >
              Schedule a Consultation
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-[#b3c5cf]">
              © {new Date().getFullYear()} {business.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#b3c5cf] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="max-w-4xl text-xs leading-relaxed text-[#9eb3bf]">
            PracticeCareSource is a medical billing and revenue cycle management
            service provider. This website is for business inquiries and does not
            collect patient health information. We do not claim HIPAA
            certification; HIPAA does not create a certification program for
            covered entities or business associates.
          </p>
        </div>
      </div>
    </footer>
  );
}
