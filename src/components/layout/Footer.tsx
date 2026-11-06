import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { business, footerNav } from "@/config/business";



const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "How it works", href: "/how-it-works" },
  { label: "FAQs", href: "/faq" },
  { label: "HIPAA & Security", href: "/hipaa-security" },
];

export function Footer() {
  return (
    <footer id="site-footer" className="border-t border-white/10 bg-[#0F1B24] text-white">
      <div className="container-x py-12 sm:py-14">
        <div className="grid gap-10 border-b border-white/15 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-12">
          <div className="flex flex-col items-start">
            <Link href="/" aria-label="PracticeCareSource home" className="shrink-0">
            <img
              src="/footer-logo.png"
              alt="PracticeCareSource"
              className="h-12 w-auto"
              width="240"
              height="48"
            />
          </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#c2d2db]">
              Medical billing, credentialing, and revenue cycle support
              for healthcare practices in the United States only.
            </p>
            <span className="mt-5 inline-flex items-center rounded-full border border-[#77cfc4]/30 bg-[#77cfc4]/10 px-3 py-1.5 text-xs font-semibold text-[#9be0d5]">
              Serving U.S. healthcare practices
            </span>

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
                    className="text-sm text-[#c2d2db] transition-colors hover:text-[#9be0d5]"
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
                    className="text-sm text-[#c2d2db] transition-colors hover:text-[#9be0d5]"
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
                  <Mail className="mt-0.5 size-4 shrink-0 text-[#79d4c7]" aria-hidden="true" />
                  <a href={business.emailHref} className="break-all transition-colors hover:text-white">
                    {business.email}
                  </a>
                </li>
              ) : null}
            </ul>
            <Link
              href="/contact"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#79d4c7] px-4 py-2.5 text-sm font-bold text-[#102f45] transition-colors hover:bg-[#a0e5d9]"
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
