# PracticeCareSource launch readiness

Last reviewed: November 7, 2026

This checklist separates repository work from business, legal, and hosting actions. A successful build does not mean the business is ready to launch.

## Repository and application

- [x] Public contact email configured as info@practicecaresource.com.
- [x] Contact form no longer depends on a server API or Resend.
- [x] Contact form prepares an email draft and does not claim the message was sent.
- [x] Unverified phone and street-address details are not intentionally published.
- [ ] Confirm current GitHub Actions checks pass on the exact main commit.
- [ ] Run browser-based responsive and accessibility checks.
- [ ] Test mailto behavior on desktop and mobile devices with configured email applications.
- [ ] Review every public page, service claim, metadata field, structured data item, and internal link.\n- [ ] Create and approve a 1200x630 Open Graph image and Apple touch icon.\n- [ ] Confirm the original logo treatment and approve any palette adjustment.\n- [ ] Complete viewport screenshots, 200%/400% zoom, axe, keyboard, screen reader, and Lighthouse checks.

## Business inputs still required

- [ ] Confirm the registered legal entity name.
- [ ] Confirm the exact supported medical specialties.
- [ ] Confirm the final service catalogue and service descriptions.
- [ ] Supply a verified business phone number only if it should be public.
- [ ] Supply a verified mailing or office address only if it should be public.
- [ ] Confirm business hours if they will be displayed.
- [ ] Confirm the preferred primary host (www or non-www) after domain setup.
- [ ] Confirm that info@practicecaresource.com is active and monitored.
- [ ] Confirm final primary CTA wording.

Unverified business facts must remain unpublished.

## Email and form operations

- [x] Remove the contact API route and Resend implementation.
- [x] Remove Resend environment variable instructions.
- [ ] Test that the visitor's email application opens with the prepared message.
- [ ] Test the direct email fallback link.
- [ ] Confirm who monitors and responds to incoming enquiries.

The website cannot verify that a visitor sent a mailto draft or that it reached the inbox.

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
- [ ] Confirm the legal entity, governing-law state, venue, and liability clauses with counsel.
- [ ] Review actual vendors, data flows, retention practices, and privacy disclosures.
- [ ] Keep the website enquiry form limited to business enquiries and maintain a clear warning not to submit PHI.
- [ ] Do not claim HIPAA certification or blanket compliance.

## Final release gates

A release is ready for owner review only when:
1. GitHub CI passes on the exact proposed commit.
2. Browser, responsive, and accessibility checks have been completed and recorded.
3. Contact mailto behavior has been tested on supported browsers and devices.
4. Business and legal placeholders have been resolved or intentionally kept unpublished.
5. Domain and hosting configuration have been verified.
6. The project owner explicitly approves deployment.
