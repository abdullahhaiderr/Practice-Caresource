# Implementation report: PracticeCareSource

Last reviewed: November 7, 2026

## Scope

PracticeCareSource is a Next.js App Router marketing website for medical billing and revenue-cycle support. It includes a homepage, company information, service overview and detail pages, resources, blog content, a contact page, legal-page drafts, metadata, sitemap, robots rules, and shared responsive components.

## Current repository facts

- Repository: abdullahhaiderr/Practice-Caresource.
- Default branch: main.
- Stack: Next.js 16, React 19, TypeScript 5.9, Tailwind CSS 4, React Hook Form, Zod, and Lucide React.
- Public contact address: info@practicecaresource.com.
- Canonical URL fallback: https://practice-caresource.vercel.app.
- The official domain is not assumed to be configured until DNS and Vercel settings are verified.
- The contact form uses a mailto draft. There is no contact API route, Resend integration, server-side email delivery, or contact database.
- No database, authentication system, or patient portal is part of the marketing-site scope.

## Recent implementation changes

1. Replaced the contact API submission with a browser email draft addressed to info@practicecaresource.com.
2. Removed the Resend API route and server-side contact delivery dependency.
3. Removed the thank-you route that implied an enquiry had been received.
4. Made phone, provider count, and services of interest optional.
5. Added basic browser-side checks for a few obvious patient identifier patterns.
6. Replaced the homepage hero dashboard illustration with a clearer medical billing support proposition.
7. Consolidated global styles around the approved paper, pine, ink, and terracotta palette.
8. Applied Newsreader and Public Sans through next/font.
9. Removed the decorative cursor effect.
10. Updated README.md, SECURITY.md, deployment guidance, launch checklist, and the implementation audit.

## Important contact form limitation

The form opens the visitor's configured email application with a prepared message addressed to info@practicecaresource.com. The visitor must review the draft and press Send. The website cannot verify that the visitor sent the message or that it reached the inbox. If the visitor has no email application configured, they can use the direct email link.

The form is for business enquiries only. Browser-side identifier checks are incomplete and do not guarantee detection of PHI. Never describe the form or website as HIPAA compliant or certified.

## Data and claims controls

Do not publish unverified phone numbers, street addresses, business hours, legal entity details, specialties, customer counts, financial outcomes, testimonials, certifications, or guarantees.

Legal pages are drafts and require qualified counsel review before launch.

## Verification record

No fresh local execution of npm ci, npm run lint, npm run typecheck, or npm run build is claimed in this report. GitHub Actions and browser checks must be reviewed for the exact current commit before the code is considered verified.

## Known limitations and launch blockers

1. The mailto flow needs browser and device testing with configured email applications.
2. The monitored inbox must be verified and actively checked.
3. Official-domain DNS and Vercel configuration must be verified before changing the canonical origin.
4. Legal identity, governing-law state, and public business details require confirmation.
5. The final service catalogue and specialties require business confirmation.
6. Legal pages require qualified counsel review.
7. Responsive, accessibility, and browser checks must be completed against the reviewed branch.
8. No production deployment is authorized by this report.

## Verification commands

```bash
npm ci
npm run lint
npm run typecheck
npm run build
```

## Handoff

Use docs/launch-readiness.md for remaining business, legal, email, domain, and release actions. Keep the no-invented-claims standard in docs/content-review.md in force.
