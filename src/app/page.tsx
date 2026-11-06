import { Hero } from "@/components/home/Hero";
import { TrustHighlights } from "@/components/home/TrustHighlights";
import { BillingChallenges } from "@/components/home/BillingChallenges";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { Workflow } from "@/components/home/Workflow";
import { HomepageFAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { JsonLd } from "@/components/shared/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

export const metadata = {
  title: { absolute: "Medical Billing and Revenue Cycle Management | PracticeCareSource" },
  description: "PracticeCareSource provides medical billing and revenue cycle support for U.S. healthcare practices, including credentialing, accounts receivable support, and claims follow-up.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustHighlights />
      <BillingChallenges />
      <ServicesOverview />
      <Workflow />
      <HomepageFAQ />
      <FinalCTA />
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={websiteJsonLd()} />
    </>
  );
}
