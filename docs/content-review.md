# Content Review — PracticeCareSource

Last updated: November 4, 2026

## 1. Purpose

This document records what was written, what was deliberately not written, and what must be verified before launch. The guiding rule was: do not invent business facts, performance claims, credentials, testimonials, or contact details.

## 2. Page inventory

| Group | Pages | Status |
| --- | --- | --- |
| Homepage | `/` | Complete |
| Company | `/about`, `/why-choose-us`, `/how-it-works` | Complete |
| Services | `/services` + 9 detail pages | Complete |
| Specialties | `/specialties` + 8 detail pages | Complete |
| Trust / support | `/hipaa-security`, `/faq`, `/resources` | Complete |
| Blog | `/blog` + 8 articles | Complete |
| Conversion | `/contact`, `/thank-you` | Complete |
| Legal | `/privacy-policy`, `/terms-and-conditions`, `/cookie-policy` | Drafted, needs counsel review |
| System | `404`, `sitemap.xml`, `robots.txt`, OG image, icon | Complete |

Note: the project brief referenced 10 service subpages, but the approved service catalog contains nine distinct services. A tenth page was not invented. If a tenth service is intended, confirm its name, scope, and supporting content before adding it.

## 3. Claims audit

### Claims intentionally avoided

- Specific years in business, number of clients, number of providers served, or states covered.
- Collection percentages, clean claim rates, revenue increases, or turnaround guarantees.
- “HIPAA certified” or any equivalent certification claim.
- Awards, rankings, partnerships, or payer relationships.
- Testimonials, case studies, star ratings, or review counts.
- Named team members, biographies, headshots, or leadership credentials.
- Office address, phone number, email address, business hours, or service area.
- Guarantees about payer enrollment timelines, denial overturns, or audit outcomes.
- Legal advice, coding advice, or compliance assurances.

### Claims used, with basis

| Claim | Basis |
| --- | --- |
| Provides medical billing, coding, credentialing, and RCM support | Company description supplied for the project |
| Works within the practice’s existing systems | Stated in the brief and standard for the service model |
| Uses HIPAA-aligned safeguards and BAAs where applicable | Required framing for a billing vendor; avoids certification claims |
| Does not collect PHI through the website | True of the implemented form and site architecture |
| Payer timelines and decisions are outside the vendor’s control | Factually accurate and important for trust |
| No guarantee of specific financial results | Deliberate risk-reduction and honesty standard |

## 4. Placeholders requiring verified input

Before launch, replace or confirm:

1. **Primary domain** — currently `https://practicecaresource.com` as a fallback. Confirm non-www vs `www`.
2. **Phone number** — `business.phone` and `business.phoneHref` are undefined. The footer and mobile menu hide the phone row until set.
3. **Email address** — `business.email` and `business.emailHref` are undefined. The footer hides the email row until set.
4. **Mailing address** — `business.address` fields are undefined. No address is rendered.
5. **Business hours** — `business.hours` is undefined and not rendered.
6. **Governing law state** — the Terms page refers to “the state in which PracticeCareSource is organized” instead of inventing a state. Counsel should insert the correct jurisdiction.
7. **Legal entity name** — currently “PracticeCareSource LLC.” Confirm the exact registered entity.
8. **Resend configuration** — `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` must be set for email delivery.

## 5. Legal and compliance review

The privacy, terms, and cookie pages are written to match the implemented site behavior:

- The contact form collects business contact data, not PHI.
- No advertising or analytics cookies are used by default.
- Hosting and email delivery providers are described generically.
- No data sale is claimed.
- No specific retention period is promised beyond business needs and legal requirements.

These pages are not a substitute for legal advice. Have counsel review:

- State privacy law obligations (for example, CCPA/CPRA and other state statutes) based on the company’s size and customer base.
- The governing law and venue clause.
- The limitation of liability and indemnification language.
- The Business Associate Agreement template used in engagements.
- Cookie disclosures if analytics or advertising tools are added later.

## 6. Editorial standards

- Plain language over jargon. Define terms like ERA, EOB, E/M, and AR on first use where practical.
- No fear-based exaggeration. Denials and AR are described as process problems, not catastrophes.
- No generic filler about “cutting-edge technology” or “world-class service.”
- Specificity is preferred over volume. Each service and specialty page describes concrete tasks and pressure points.
- Limitations are stated next to capabilities. This is intentional and should be preserved in future edits.
- Blog articles end with a disclaimer that they are general information, not legal or coding advice.

## 7. Content gaps and recommended next steps

### High priority

1. Add a verified company phone, email, and address.
2. Configure email delivery and test the form end to end.
3. Have legal pages reviewed and insert the correct governing state.
4. Add real author information to blog posts only if named contributors are available.
5. Create a “Medical Billing Company Evaluation Checklist” lead magnet or article to support comparison searches.

### Medium priority

1. Expand the FAQ with pricing-approach and transition questions once the company confirms its answers.
2. Add specialty-specific blog articles for family practice, behavioral health, and orthopedics.
3. Add a glossary of billing terms (ERA, EOB, clean claim, timely filing, modifier 25, global period).
4. Publish a de-identified sample reporting package if it can be shared without client identification.
5. Add case studies only with written client permission and verifiable context.

### Low priority

1. Add a newsletter if a real sending cadence and owner exist.
2. Add downloadable templates if they can be maintained.
3. Add video content only if accessibility (captions/transcripts) can be maintained.

## 8. Quality checks performed

- Unique titles and descriptions across indexable pages.
- One H1 per page.
- Canonical URLs on all indexable pages.
- Internal link crawl returned no 4xx responses for published routes.
- Contact API validation returns field-level errors.
- Honeypot submissions are accepted silently and not delivered.
- Rate limiting returns HTTP 429 after the configured threshold.
- ESLint and TypeScript pass with no findings.
- Production build completed with all pages statically generated.

## 9. Sign-off checklist

- [ ] Business name and legal entity confirmed.
- [ ] Phone, email, address, and hours confirmed.
- [ ] Primary domain confirmed and configured.
- [ ] Email delivery tested to a monitored inbox.
- [ ] Legal pages reviewed by counsel.
- [ ] Governing law state inserted.
- [ ] Any new claims reviewed against the standards in this document.
- [ ] Analytics/cookie disclosures updated if tracking is added.
