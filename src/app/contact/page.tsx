import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { business } from "@/config/business";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact PracticeCareSource",
  description: "Request a consultation about medical billing and revenue cycle support for your healthcare practice.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact PracticeCareSource",
    description: "Send a business enquiry about medical billing and revenue cycle support.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Request a consultation" description="Share a few details about your practice and the billing support you are considering. Your email application will prepare the enquiry for you to review and send." breadcrumbs={[{ label: "Contact" }]} />
      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <div className="min-w-0">
            <h2 className="text-2xl">Tell us what you need</h2>
            <p className="mt-2 text-sm leading-7 text-muted">Four short fields. No patient records, claim attachments, or insurance details.</p>
            <div className="mt-7"><ConsultationForm /></div>
          </div>
          <aside className="h-fit border-t border-rule pt-6 lg:sticky lg:top-28">
            <h2 className="text-lg">Prefer email?</h2>
            <a href={business.emailHref} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-pine underline underline-offset-4"><Mail className="size-4" aria-hidden="true" />{business.email}</a>
            <p className="mt-6 text-sm leading-7 text-muted">This website is for business enquiries only. Do not send protected health information through the form or ordinary email.</p>
          </aside>
        </div>
      </section>
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
    </>
  );
}
