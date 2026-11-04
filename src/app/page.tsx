import { Hero } from "@/components/home/Hero";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { BillingChallenges } from "@/components/home/BillingChallenges";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Workflow } from "@/components/home/Workflow";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Specialties } from "@/components/home/Specialties";
import { Onboarding } from "@/components/home/Onboarding";
import { Technology } from "@/components/home/Technology";
import { HomepageFAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = {
  title: {
    absolute: "Medical Billing and Revenue Cycle Management | PracticeCareSource",
  },
  description:
    "PracticeCareSource provides medical billing, coding, credentialing, and revenue cycle support to help healthcare practices manage billing operations more efficiently.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConsultationCTA />
      <TrustHighlights />
      <BillingChallenges />
      <ServicesOverview />
      <Workflow />
      <WhyChooseUs />
      <Specialties />
      <Onboarding />
      <Technology />
      <HomepageFAQ />
      <FinalCTA />
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
    </>
  );
}
