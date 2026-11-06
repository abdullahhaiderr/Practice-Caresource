# PracticeCareSource implementation audit

Date: 7 November 2026  
Repository: abdullahhaiderr/Practice-Caresource  
Branch: main  
Production release: intentionally paused. No production deployment or promotion performed.

## Baseline findings

| Area | Initial status on inspected main | Evidence |
|---|---|---|
| Contact delivery | Confirmed: form called a Next.js API route and depended on Resend environment variables | src/components/forms/ConsultationForm.tsx, src/app/api/contact/route.ts |
| Rate limiting | Confirmed: API used an in-memory Map, unsuitable as durable serverless rate limiting | src/app/api/contact/route.ts |
| Form fields | Confirmed: provider count and service selection were required despite being optional in the approved brief | src/lib/contact-schema.ts, ConsultationForm.tsx |
| Visual system | Confirmed: global stylesheet contained conflicting light and dark overrides, gradients, blur, orbs, rotating rings and hover tilt | src/app/globals.css |
| Hero | Confirmed: hero included a dashboard-like illustration and mixed unrelated service claims | src/components/home/Hero.tsx |
| Typography | Confirmed: previous fonts were Inter and Manrope rather than the specified serif and sans pairing | src/app/layout.tsx |
| Cursor effect | Confirmed: a cursor-following decorative effect was mounted globally | src/app/layout.tsx, CursorAura.tsx |
| Contact confirmation | Confirmed: a thank-you route implied that an enquiry had been received after API submission | src/app/thank-you/page.tsx |
| Public email | Confirmed in business configuration: info@practicecaresource.com | src/config/business.ts |
| Canonical domain | Needs external verification: business URL falls back to the Vercel hostname until the custom domain is verified | src/config/business.ts |
| Legal and business facts | Needs external verification: legal identity, physical address, phone, supported specialties, testimonials and credentials are not established by source code | public copy and business configuration |
| Automated visual QA | Not run in this environment | Browser tooling and screenshots unavailable in this GitHub-only edit session |

## Changes committed

1. Replaced the contact API submission with a browser email draft addressed to info@practicecaresource.com.
2. Removed the Resend API route and the server-side contact delivery dependency.
3. Removed the false thank-you route. The form now explains that the visitor must press Send in their own email application.
4. Made provider count, phone and service selection optional.
5. Added basic client-side checks for a few obvious patient identifier patterns and retained the explicit business-enquiry-only warning.
6. Replaced the homepage hero's fake dashboard treatment with a plain-language description of billing support workflows.
7. Replaced the conflicting global styling with the approved paper, pine, ink and terracotta palette, a serif/sans typography pairing, restrained borders and reduced-motion handling.
8. Removed the decorative cursor effect.
9. Updated README.md and SECURITY.md to accurately describe the new email-draft behaviour and its limitations.

## Important email behaviour

This implementation does not send mail in the background. It opens the visitor's configured email application with a prepared message addressed to info@practicecaresource.com. The visitor must review and send it. If the visitor has no email application configured, they can use the direct email link. The website cannot confirm that the message was sent or delivered.

## Limitations and approval items

1. Test the mailto flow in current desktop and mobile browsers with configured email applications.
2. Verify that info@practicecaresource.com is active and monitored.
3. Confirm business legal identity, public phone, address, specialties, actual service catalogue, credentials and final CTA.
4. Review legal policies with qualified counsel.
5. Verify custom-domain ownership and Vercel domain configuration before changing canonical URLs.
6. Run lint, typecheck, production build, browser screenshots, accessibility scans and Lighthouse after checkout in a full Node.js environment.
7. Review all remaining pages, service detail content, structured data, metadata, favicon and social sharing assets against the master specification.
8. No claim of HIPAA compliance or complete PHI detection is made.

## Release safety

The existing Vercel production deployment safeguard remains in place. Changes on main are not approved for production release. No domain, DNS, production alias, or production environment-variable settings were changed.
