import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { business, footerNav } from "@/config/business";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="container-x py-14 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="inline-block font-display text-xl font-bold tracking-tight text-navy"
            >
              PracticeCareSource
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-soft">
              Medical billing, coding, credentialing, and revenue cycle support
              for healthcare practices across the United States.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                { label: "About", href: "/about" },
                { label: "Why Choose Us", href: "/why-choose-us" },
                { label: "How It Works", href: "/how-it-works" },
                { label: "HIPAA & Security", href: "/hipaa-security" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-soft transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer services">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy">
              Services
            </h3>
            <ul className="space-y-2">
              {footerNav.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer specialties">
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy">
              Specialties
            </h3>
            <ul className="space-y-2">
              {footerNav.specialties.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-navy">
              Resources
            </h3>
            <ul className="space-y-2">
              {footerNav.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-soft transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-3 mt-8 font-display text-sm font-semibold uppercase tracking-wider text-navy">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-ink-soft">
              {business.phoneHref && business.phone ? (
                <li className="flex items-start gap-2">
                  <Phone className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  <a
                    href={business.phoneHref}
                    className="transition-colors hover:text-blue"
                  >
                    {business.phone}
                  </a>
                </li>
              ) : null}
              {business.emailHref && business.email ? (
                <li className="flex items-start gap-2">
                  <Mail className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  <a
                    href={business.emailHref}
                    className="transition-colors hover:text-blue"
                  >
                    {business.email}
                  </a>
                </li>
              ) : null}
              {business.address.line1 ? (
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-blue" aria-hidden="true" />
                  <span>
                    {business.address.line1}, {business.address.city},{" "}
                    {business.address.state} {business.address.zip}
                  </span>
                </li>
              ) : null}
              <li>
                <Link
                  href="/contact"
                  className="inline-flex items-center font-semibold text-blue transition-colors hover:text-blue-dark"
                >
                  Request a consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-border pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {business.legalName}. All rights
              reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs">
              {footerNav.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-blue"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="max-w-3xl text-xs leading-relaxed text-muted-soft">
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
