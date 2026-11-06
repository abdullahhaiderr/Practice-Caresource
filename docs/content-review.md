# Content review: PracticeCareSource

Last reviewed: November 7, 2026

## Editorial rules

Do not invent business facts, credentials, performance results, customer outcomes, legal details, contact details, supported specialties, or security controls. If information has not been verified by the business, keep it unpublished.

## Confirmed public identity and positioning

- Brand: PracticeCareSource.
- Public email: info@practicecaresource.com.
- Core positioning: medical billing and revenue-cycle support for healthcare practices in the United States.
- Primary CTA: Request a Consultation.
- Current canonical fallback: https://practice-caresource.vercel.app until the custom domain is verified and approved.
- Pricing approach: percentage-based; the actual percentage is not approved for publication.

## Do not publish without confirmation

- Registered legal entity name and jurisdiction.
- Phone number, mailing address, office address, and business hours.
- Exact supported medical specialties.
- Exact percentage rate, minimum fee, or other commercial terms.
- Client names, logos, testimonials, case studies, star ratings, and review counts.
- Named team members, job titles, credentials, years of experience, awards, payer relationships, or certifications.
- Claims that the company is HIPAA certified or guarantees compliance.
- Guarantees about reimbursement, revenue increases, clean-claim rates, payer decisions, enrollment timelines, denial overturns, or audit outcomes.
- Named EHR, practice management, clearinghouse, or payer integrations until tested and confirmed.

## Services and specialties

The public service catalogue is centralized in src/data/service-details.ts and drives service navigation, homepage service index, footer service links, and sitemap entries. The business must approve the exact public service scope before launch.

Specialty-specific copy and the specialty landing page have been removed until the business confirms supported specialties. Do not infer specialties from generic examples or industry norms.

AI automation is not currently presented as a standalone or active service. Do not add it to public marketing copy unless explicitly approved.

## Proof, people, and credentials

No verifiable staff names, biographies, professional credentials, client permissions, testimonials, case studies, awards, or performance metrics were provided for publication. Do not add fabricated proof or generic placeholder profiles. When evidence is supplied, verify spelling, role, credential status, date, permission to publish, and any associated claim before adding it.

## Contact form and PHI

The shortened consultation form requests the sender's name, business email, practice or organization name, and a short business message. It prepares a mailto draft addressed to info@practicecaresource.com. The visitor must review the draft and press Send in their own email application. The website cannot confirm sending or delivery.

The form warns visitors not to submit patient names, dates of birth, medical record numbers, claim documents, insurance identifiers, or other PHI. Basic browser checks catch only a few obvious patterns and are incomplete. Do not claim the form prevents all PHI. Do not add file uploads or patient-data fields to the marketing site.

There is no contact API route, Resend integration, server-side email provider, or lead database in the current implementation.

## Pricing

The public pricing page explains factors that can affect a proposal and states that the pricing approach is percentage-based. It does not publish an unapproved percentage, minimum, or guarantee. Confirm all commercial terms in writing before an agreement.

## Educational content

The medical billing glossary uses general industry explanations and links to CMS primary materials for clean claim and remittance advice terminology. Operational metrics do not always have one universal formula. Any published metric must state its calculation method and relevant payer or contract context.

Primary references:
- CMS Medicare Claims Processing Manual, Chapter 1: https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c01aug_claims_gen_.pdf
- CMS Health Care Payment and Remittance Advice: https://www.cms.gov/medicare/coding-billing/electronic-billing/health-care-payment-remittance-advice
- CMS EFT and ERA transaction overview: https://www.cms.gov/priorities/key-initiatives/burden-reduction/administrative-simplification/transactions/health-care-payment-remittance-advice-electronic-funds-transfer
- HHS Summary of the HIPAA Privacy Rule: https://www.hhs.gov/hipaa/for-professionals/privacy/laws-regulations/index.html

## Legal and compliance review

The Privacy Policy, Terms and Conditions, Cookie Policy, and HIPAA/security page are informational drafts, not legal advice, a security audit, or a certification. Qualified counsel should review:
- Exact legal entity name and governing-law jurisdiction.
- Privacy disclosures against actual data collection, hosting, email, and retention practices.
- Liability, indemnification, venue, and dispute terms.
- State privacy law applicability.
- Business Associate Agreement workflow and actual safeguards before client PHI is exchanged.

Do not state that PracticeCareSource is HIPAA certified. Do not make blanket compliance guarantees.

## Editorial standards

- Use US English and plain language.
- Explain specialized billing terms.
- Describe services and process steps specifically, without generic superlatives.
- State material limitations alongside capabilities.
- Avoid fear-based messaging and guaranteed outcomes.
- Keep blog content informational and clearly distinguish it from legal, coding, or compliance advice.
- Review dates, links, citations, and regulatory references before publishing updates.
