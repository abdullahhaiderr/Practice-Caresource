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
    absolute: "Medical Billing, RCM & Practice Support | PracticeCareSource",
  },
  description:
    "PracticeCareSource helps US medical practices with medical billing, revenue cycle management, credentialing, AR recovery, denial management, medical coding, virtual assistant support, digital marketing, and responsible AI-enabled workflows.",
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
