import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  Database,
  FileLock2,
  Lock,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "HIPAA & Data Security",
  description:
    "How PracticeCareSource approaches protected health information, access controls, Business Associate Agreements, and data security for medical billing services.",
  alternates: { canonical: "/hipaa-security" },
  openGraph: {
    title: "HIPAA & Data Security | PracticeCareSource",
    description:
      "Our approach to protected health information, access controls, Business Associate Agreements, and data security in medical billing.",
    url: "/hipaa-security",
  },
};

const safeguards = [
  {
    icon: Lock,
    title: "Access controls",
    text: "System access is limited to team members who need it for their assigned work. Credentials are individual, and access is adjusted when responsibilities change.",
  },
  {
    icon: FileLock2,
    title: "Confidentiality requirements",
    text: "Team members working with protected health information are subject to confidentiality requirements and are expected to follow documented handling procedures.",
  },
  {
    icon: Database,
    title: "Minimum necessary use",
    text: "Protected health information is used for the billing and revenue cycle tasks within the agreed scope. It is not used for unrelated purposes.",
  },
  {
    icon: UserCheck,
    title: "Business Associate Agreements",
    text: "Where PracticeCareSource acts as a business associate, a Business Associate Agreement is used to define permitted uses, safeguards, and reporting obligations.",
  },
];

export default function HipaaSecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="HIPAA & security"
        title="Handling protected health information carefully"
        description="Medical billing involves protected health information. This page explains the safeguards we describe, what our website does not collect, and where the limits of any billing vendor's role begin."
        breadcrumbs={[{ label: "HIPAA & Security" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="min-w-0">
              <div className="rounded-xl border-l-4 border-teal bg-bg-secondary p-6 sm:p-7">
                <div className="flex items-start gap-4">
                  <AlertTriangle
                    className="mt-1 size-6 shrink-0 text-teal"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="font-display text-lg font-bold text-navy">
                      We do not claim HIPAA certification
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      HIPAA does not create a certification program for covered
                      entities or business associates. Any vendor claiming to be
                      &ldquo;HIPAA certified&rdquo; is using that phrase loosely.
                      We describe our safeguards and contractual obligations
                      accurately instead.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="mt-12 text-2xl font-display font-bold text-navy sm:text-3xl">
                Safeguards we describe
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                The specific administrative, technical, and physical safeguards
                used for an engagement depend on the services, systems, and
                information involved. These are the core practices we apply.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {safeguards.map((item) => (
                  <div key={item.title} className="card">
                    <item.icon
                      className="card-icon size-11 p-2 text-teal"
                      aria-hidden="true"
                      strokeWidth={1.75}
                    />
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <h2 className="mt-14 text-2xl font-display font-bold text-navy sm:text-3xl">
                This website does not collect patient information
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  The consultation form on this site asks for business contact
                  information only: your name, business email, phone, practice
                  name, specialty, number of providers, services of interest, and
                  a message about your billing needs.
                </p>
                <p>
                  Please do not include patient names, dates of birth, medical
                  record numbers, claim documents, insurance card images, or any
                  other protected health information in the form or in email
                  correspondence with us before a Business Associate Agreement is
                  in place.
                </p>
                <p>
                  If patient information is submitted to this website
                  accidentally, contact us so it can be addressed promptly.
                </p>
              </div>

              <h2 className="mt-14 text-2xl font-display font-bold text-navy sm:text-3xl">
                Working with your systems
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  We work within the EHR, practice management, clearinghouse, and
                  payer portal systems your practice already uses. Access should
                  be provisioned by your organization with the permissions
                  appropriate to the agreed scope.
                </p>
                <p>
                  Your organization remains responsible for its own HIPAA
                  compliance program, policies, and risk analysis. Our role is to
                  support billing operations within the boundaries defined by the
                  agreement and applicable law.
                </p>
              </div>

              <h2 className="mt-14 text-2xl font-display font-bold text-navy sm:text-3xl">
                Questions about security
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                If your practice has specific security requirements, vendor
                questionnaires, or system access policies, raise them during the
                consultation. These should be reviewed before an engagement
                begins, not after.
              </p>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-border bg-paper p-6 shadow-card">
                <ShieldCheck className="card-icon size-12 p-2.5 text-teal" aria-hidden="true" />
                <h2 className="mt-4 font-display text-lg font-bold text-navy">
                  Security questions?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Ask about access controls, Business Associate Agreements, and
                  data handling before you share systems access.
                </p>
                <Link href="/contact" className="btn btn-primary mt-5 w-full">
                  Contact us
                </Link>
              </div>

              <div className="mt-6 rounded-xl border border-border bg-bg-secondary p-6">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-navy">
                  Related pages
                </h2>
                <ul className="mt-4 space-y-2.5 text-sm">
                  {[
                    { label: "Privacy Policy", href: "/privacy-policy" },
                    { label: "Terms and Conditions", href: "/terms-and-conditions" },
                    { label: "Cookie Policy", href: "/cookie-policy" },
                    { label: "How It Works", href: "/how-it-works" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-2 text-ink-soft transition-colors hover:text-blue"
                      >
                        {link.label}
                        <ArrowRight
                          className="size-3.5 text-muted-soft transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTASection
        title="Review security requirements with us"
        description="Tell us about your practice and any vendor security requirements. We will follow up to discuss the engagement."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "HIPAA & Security", path: "/hipaa-security" },
        ])}
      />
    </>
  );
}
