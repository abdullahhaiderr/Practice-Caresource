# Implementation report: PracticeCareSource

Last reviewed: November 7, 2026

## Scope

PracticeCareSource is a Next.js App Router marketing website for medical billing and revenue-cycle support. The project includes the homepage, service index and service detail pages, company information, process, resources, blog, FAQ, glossary, pricing explanation, contact page, legal information drafts, metadata, sitemap, robots rules, and shared responsive components.

## Repository

- Repository: abdullahhaiderr/Practice-Caresource.
- Default branch: main.
- Stack: Next.js 16, React 19, TypeScript 5.9, Tailwind CSS 4, React Hook Form, Zod, and Lucide React.
- Public contact email: info@practicecaresource.com.
- Canonical URL fallback: https://practice-caresource.vercel.app.
- The official domain must not be treated as configured until DNS and Vercel verification are complete.

## Current implementation

- The public contact form has four business fields: full name, business email, practice or organization, and a short message, plus privacy acknowledgement.
- The form prepares a mailto draft addressed to info@practicecaresource.com. The visitor must review the draft and press Send.
- There is no contact API route, Resend integration, server-side email delivery, database, or website lead storage.
- The homepage has eight sections and uses the flat paper/pine/ink/terracotta palette, Newsreader headings, and Public Sans body typography.
- Billing challenges are presented as a ruled list, services as a semantic responsive table, and the engagement workflow as a horizontal timeline.
- Pricing and glossary pages are linked from the information architecture.
- Specialty pages remain unpublished until the supported specialties are confirmed.
- No named people, credentials, testimonials, client outcomes, awards, or performance statistics have been invented.
- Organization, WebSite, Service, BreadcrumbList, FAQPage, and Article structured data are used where appropriate.

## Important contact limitation

The form does not send email in the background. It opens the visitor's configured email application with a prepared message addressed to info@practicecaresource.com. The visitor must review and press Send. The website cannot verify that the message was sent or delivered. A direct email link is provided as a fallback.

The form is for business enquiries only. Basic browser-side identifier checks are incomplete and do not guarantee detection of PHI. Do not describe the form as a secure PHI intake channel or claim HIPAA compliance or certification.

## Visual and UX implementation

- Flat Paper #F7F5F0, Surface #FFFFFF, Pale Pine #EEF3F0, Ink #14212B, Muted #5B6670, Pine #0F5C4D, Terracotta #C2512F, Rule #DDD8CC, Deep Ink #0F1B24, Success #1F7A4D, Warning #A15C00, Error #B3261E.
- Newsreader and Public Sans loaded with next/font.
- No gradients, blur, glassmorphism, decorative orbs, cursor effects, hover tilt, or shadow styling in the shared design system.
- Reduced-motion handling remains enabled.
- Contact CTA wording standardized to Request a Consultation.

## Verification record

No fresh local execution of npm ci, npm run lint, npm run typecheck, or npm run build is claimed in this report. The latest Vercel check encountered the account build-limit/upgrade response and production deployments were canceled by the existing ignore-build safeguard. GitHub Actions and local checks must be reviewed for the exact current commit before the code is considered verified.

## Remaining QA and owner inputs

1. Test mailto behavior on desktop and mobile with configured email applications.
2. Verify that info@practicecaresource.com is active and monitored.
3. Run lint, typecheck, and production build on the latest main commit.
4. Test responsive layouts at 320, 360, 390, 430, 768, 1024, 1280, 1440, and 1920 pixels.
5. Run keyboard, screen-reader, zoom, axe, Lighthouse, and WebAIM contrast checks.
6. Validate structured data and check all metadata/canonical URLs on the final verified host.
7. Create or approve social preview and Apple touch assets if required.
8. Confirm legal entity and jurisdiction with counsel; legal pages remain drafts.
9. Confirm specialties, platform compatibility, and final commercial terms before making more specific public claims.
10. Add named team members, credentials, testimonials, or case studies only when real evidence and permission to publish are supplied.

## Release policy

The Vercel production ignore-build safeguard remains active. No production deployment, promotion, DNS change, or domain attachment has been performed. Do not release until the owner completes QA and explicitly approves deployment.
