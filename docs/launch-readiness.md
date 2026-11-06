# PracticeCareSource launch readiness

Last reviewed: November 7, 2026

This checklist separates repository implementation from business, legal, hosting, and final QA. Repository completion does not itself authorize a production release.

## Implemented in the repository

- [x] Public email set to info@practicecaresource.com.
- [x] Contact API route and Resend integration removed.
- [x] Shortened contact form to name, business email, practice or organization, and message.
- [x] Contact form opens an email draft and explains that the visitor must press Send.
- [x] No false success confirmation or server-side lead storage.
- [x] No unverified public phone number, street address, or social links.
- [x] Removed specialty page until supported specialties are confirmed.
- [x] No fabricated team profiles, testimonials, certifications, or performance statistics.
- [x] Eight homepage sections: hero, engagement principles, billing challenges, services index, workflow timeline, working approach, FAQs, and final CTA.
- [x] Paper, pine, ink, terracotta and deep-ink flat visual system.
- [x] Newsreader and Public Sans loaded through next/font.
- [x] Ruled list for billing challenges, semantic service index table, and horizontal process timeline.
- [x] Structured data includes Organization, WebSite, Service, BreadcrumbList, FAQPage, and Article where applicable.
- [x] Pricing and glossary pages included in navigation and sitemap.
- [x] Metadata uses the Vercel fallback until the custom domain is verified.
- [x] Privacy, cookie, terms, and HIPAA/security copy updated to match the actual contact workflow and known business facts.

## Still required before owner QA sign-off

- [ ] Confirm GitHub Actions lint, typecheck, and build pass on the exact main commit.
- [ ] Run a fresh local production build in a Node.js environment.
- [ ] Test all routes and internal links.
- [ ] Test responsive layouts at 320, 360, 390, 430, 768, 1024, 1280, 1440, and 1920 pixels.
- [ ] Test keyboard navigation, focus order, form errors, screen-reader labels, and 200%/400% zoom.
- [ ] Run axe or equivalent accessibility scans.
- [ ] Run Lighthouse on representative mobile and desktop pages.
- [ ] Verify WebAIM contrast ratios for all foreground/background pairs, including hover, focus, warning, success, and error states.
- [ ] Test the mailto form on desktop and mobile with configured email applications, including the direct email fallback.
- [ ] Check final browser rendering of logo, favicon, font loading, table overflow, timeline, and mobile navigation.
- [ ] Create or approve a real 1200x630 social preview image and Apple touch icon if required; none is currently verified in the repository.
- [ ] Validate structured data with Google's Rich Results Test and Schema Markup Validator.

## Business inputs still required

- [ ] Confirm registered legal entity name and governing jurisdiction.
- [ ] Confirm exact supported medical specialties.
- [ ] Approve final service catalogue and service descriptions.
- [ ] Confirm the actual percentage pricing rate and commercial terms privately; do not publish until approved.
- [ ] Supply verified staff names, roles, credentials, and permission to publish, if a team section is desired.
- [ ] Supply genuine client proof, testimonials, case studies, and permission to publish, if available.
- [ ] Supply a verified business phone, address, or business hours only if these should be public.
- [ ] Confirm that info@practicecaresource.com is active and monitored.
- [ ] Confirm preferred primary host (www or non-www) after domain setup.

Unverified business facts must remain unpublished. Do not create placeholder profiles or fake proof to fill these gaps.

## Domain and hosting

- [ ] Verify DNS ownership and Vercel domain configuration for practicecaresource.com.
- [ ] Decide whether www or non-www is canonical.
- [ ] Set NEXT_PUBLIC_SITE_URL to the verified primary domain only after DNS and HTTPS work.
- [ ] Verify redirects, canonical tags, sitemap URLs, robots.txt, and JSON-LD on the final host.
- [ ] Review Vercel deployment settings.
- [ ] Obtain explicit project-owner approval before production deployment or domain changes.

The current canonical fallback is https://practice-caresource.vercel.app.

## Legal and privacy review

- [ ] Have qualified counsel review the Privacy Policy, Terms and Conditions, and Cookie Policy.
- [ ] Confirm legal entity, governing law, venue, and liability clauses with counsel.
- [ ] Review actual vendors, data flows, retention practices, and privacy disclosures.
- [ ] Keep the website enquiry form limited to business enquiries and maintain a clear warning not to submit PHI.
- [ ] Do not claim HIPAA certification or blanket compliance.

## Current release safety

The Vercel production ignore-build safeguard remains in place. Recent main-branch production deployment attempts were canceled by that safeguard. The Vercel status check also reports an account build-limit/upgrade response. Do not remove the safeguard or promote a deployment until the owner completes QA and explicitly approves release.
