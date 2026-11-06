import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { specialtyDetails } from "@/data/specialty-details";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Specialties",
  robots: { index: false, follow: true },
  description:
    "Contact PracticeCareSource to discuss your practice billing requirements.",
  alternates: { canonical: "/specialties" },
  openGraph: {
    title: "Specialties We Serve | PracticeCareSource",
    description:
      "Medical billing support shaped around the documentation, coding, and payer requirements of your specialty.",
    url: "/specialties",
  },
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Billing support built around your specialty"
        description="Coding rules, payer requirements, and documentation pressure points differ by specialty. We organize billing support around the way your practice actually delivers care."
        breadcrumbs={[{ label: "Specialties" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {specialtyDetails.map((specialty) => (
              <Link
                key={specialty.id}
                href={specialty.href}
                className="card group flex flex-col"
              >
                <h2 className="font-display text-lg font-semibold text-navy transition-colors group-hover:text-blue">
                  {specialty.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {specialty.summary}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                  View details
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 grid gap-8 rounded-xl border border-border bg-bg-secondary p-7 sm:p-9 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
                Don&rsquo;t see your specialty?
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">
                These pages cover the specialties we discuss most often, but the
                underlying billing workflow is similar across many practices. If
                your specialty is not listed, share the details and we will tell
                you honestly whether we are a good fit.
              </p>
            </div>
            <div className="flex items-center lg:justify-end">
              <Link href="/contact" className="btn btn-primary">
                Request a consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Talk through your specialty billing"
        description="Tell us about your practice and the billing tasks that need attention. We will follow up to discuss scope and next steps."
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Specialties", path: "/specialties" },
        ])}
      />
    </>
  );
}
