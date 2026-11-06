import { Hero } from "@/components/home/Hero";
import { ConsultationCTA } from "@/components/home/ConsultationCTA";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { BillingChallenges } from "@/components/home/BillingChallenges";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Workflow } from "@/components/home/Workflow";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Onboarding } from "@/components/home/Onboarding";
import { Technology } from "@/components/home/Technology";
import { HomepageFAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = {
  title: {
    absolute: "Medical Billing, RCM & Practice Support | PracticeCareSource",
  },
  description:
    "PracticeCareSource provides medical billing and revenue cycle support for U.S. healthcare practices, including credentialing, accounts receivable support, denial management, and medical coding.",
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
      <Onboarding />
      <Technology />
      <HomepageFAQ />
      <FinalCTA />
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
    </>
  );
}
