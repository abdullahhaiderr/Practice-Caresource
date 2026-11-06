import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
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
        title="Discuss your practice requirements"
        description="Our supported specialty list is being finalized. Contact us to discuss your practice and confirm whether our current services are a fit."
        breadcrumbs={[{ label: "Specialties" }]}
      />

      <CTASection
        title="Schedule a Consultation"
        description="Share your practice type and billing needs so we can confirm the right next step."
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
