import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowUpRight, FileText, Lock, Mail, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "HIPAA and Data Security Considerations",
  description: "Important information about protected health information, business associate agreements, and reviewing medical billing vendor security before sharing patient data.",
  alternates: { canonical: "/hipaa-security" },
  openGraph: {
    title: "HIPAA and Data Security | PracticeCareSource",
    description: "Review important questions about PHI, vendor safeguards, and business associate agreements before sharing patient information.",
    url: "/hipaa-security",
  },
};

const reviewItems = [
  {
    icon: Lock,
    title: "Access and permissions",
    text: "Confirm which people need access, which systems are involved, what permissions are appropriate, and how access is reviewed and removed.",
  },
  {
    icon: FileText,
    title: "Written agreements",
    text: "Determine whether the service provider is acting as a business associate and whether a Business Associate Agreement is required before PHI is shared.",
  },
  {
    icon: ShieldCheck,
    title: "Safeguards and incident response",
    text: "Review the actual administrative, physical, and technical safeguards, incident reporting process, subcontractors, and contractual responsibilities.",
  },
  {
    icon: Mail,
    title: "Approved communication channels",
    text: "Confirm which channels are approved for sensitive information. Do not assume ordinary email or a public website form is appropriate for PHI.",
  },
];

export default function HipaaSecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="HIPAA and security"
        title="Review data protection before sharing patient information"
        description="Medical billing may involve protected health information. This page is a starting point for vendor due diligence, not a security certification, legal opinion, or guarantee about a particular engagement."
        breadcrumbs={[{ label: "HIPAA & Security" }]}
      />
      <section className="section">
        <div className="container-x max-w-4xl">
          <div className="rounded-lg border-l-4 border-[#A15C00] bg-bg-secondary p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="mt-1 size-6 shrink-0 text-[#A15C00]" aria-hidden="true" />
              <div>
                <h2 className="text-xl">Do not submit PHI through this website</h2>
                <p className="mt-2 text-sm leading-7">The public enquiry form prepares an ordinary email draft addressed to info@practicecaresource.com. It is not a secure patient intake system. Do not enter patient names, dates of birth, medical record numbers, claim details, insurance identifiers, or other protected health information. Basic browser checks are incomplete and cannot guarantee detection.</p>
              </div>
            </div>
          </div>

          <h2 className="mt-12">Questions to resolve before an engagement</h2>
          <p className="mt-3 leading-7">The correct requirements depend on the parties&apos; roles, the services being performed, the information involved, and the actual data flow. Review these items with qualified privacy or legal counsel before any PHI is shared.</p>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {reviewItems.map(({ icon: Icon, title, text }) => (
              <article key={title} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
                <span className="grid size-11 place-items-center rounded-md bg-pale-pine text-pine"><Icon className="size-5" aria-hidden="true" /></span>
                <div><h3 className="text-lg">{title}</h3><p className="mt-2 text-sm leading-7">{text}</p></div>
              </article>
            ))}
          </div>

          <h2 className="mt-12">HIPAA certification</h2>
          <p className="mt-3 leading-7">PracticeCareSource does not claim HIPAA certification. HIPAA obligations are based on applicable law, the parties&apos; roles, and the actual safeguards and contractual arrangements. Do not treat this website or its content as proof of compliance.</p>

          <h2 className="mt-12">Authoritative information</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a className="inline-flex items-center gap-2 font-semibold underline underline-offset-4" href="https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html" target="_blank" rel="noreferrer">HHS: Summary of the HIPAA Privacy Rule <ArrowUpRight className="size-4" /></a></li>
            <li><a className="inline-flex items-center gap-2 font-semibold underline underline-offset-4" href="https://www.hhs.gov/hipaa/for-professionals/special-topics/de-identification/index.html" target="_blank" rel="noreferrer">HHS: Guidance on de-identification <ArrowUpRight className="size-4" /></a></li>
          </ul>

          <div className="mt-12 rounded-lg border border-border bg-paper p-6">
            <h2 className="text-xl">Have vendor security requirements?</h2>
            <p className="mt-2 text-sm leading-7">Raise them during an initial business discussion using high-level, non-identifying information. Do not attach patient records or security-sensitive documents to the public contact form.</p>
            <Link href="/contact" className="btn btn-primary mt-5">Request a Consultation</Link>
          </div>
        </div>
      </section>
      <CTASection title="Discuss your practice's requirements" description="Start with a business enquiry and keep patient information out of the public form." />
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "HIPAA & Security", path: "/hipaa-security" }])} />
    </>
  );
}
