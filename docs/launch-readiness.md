# PracticeCareSource launch readiness

Last reviewed: November 7, 2026

This checklist separates repository work from business, legal, and hosting actions. A website build passing does not mean the business is ready to launch.

## Repository and application

- [x] Core marketing routes and reusable components exist.
- [x] Public contact email is configured as `info@practicecaresource.com`.
- [x] Unverified phone and street-address details are not published.
- [x] Unconfirmed specialty lists are not presented as an approved catalog or included in the sitemap.
- [x] Contact API fails closed when email delivery is not configured.
- [x] Contact API does not log inquiry contents.
- [ ] Confirm the current pull request CI checks pass.
- [ ] Run browser-based responsive and accessibility checks against the reviewed branch.
- [ ] Verify the consultation form end-to-end after email configuration.

## Business inputs still required

- [ ] Confirm the registered legal entity name. Do not assume “PracticeCareSource LLC”.
- [ ] Confirm the exact supported medical specialties before publishing specialty pages.
- [ ] Confirm the final service catalog and service descriptions.
- [ ] Supply a verified business phone number only if it should be public.
- [ ] Supply a verified mailing or office address only if it should be public.
- [ ] Confirm business hours if they will be displayed.
- [ ] Confirm the preferred primary host (www or non-www) after domain setup.

The public email address is already set in the site configuration. The Resend recipient and sender settings are separate server-side environment variables.

## Email and form operations

- [ ] Configure `RESEND_API_KEY` in the hosting environment.
- [ ] Configure `CONTACT_TO_EMAIL` to a monitored inbox.
- [ ] Configure `CONTACT_FROM_EMAIL` using a sender domain verified with Resend.
- [ ] Submit a real test inquiry and verify receipt, formatting, and reply-to behavior.
- [ ] Confirm who monitors and responds to incoming inquiries.
- [ ] Add durable rate limiting (Vercel WAF or a shared store) before treating the current in-memory limiter as production-grade.

Until these items are completed, the form intentionally returns HTTP 503 when email delivery is unavailable.

## Domain and hosting

- [ ] Verify DNS ownership and Vercel domain configuration for `practicecaresource.com`.
- [ ] Decide whether www or non-www is canonical.
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the verified primary domain only after the domain is attached and HTTPS works.
- [ ] Verify redirects, canonical tags, sitemap URLs, robots.txt, and JSON-LD on the final host.
- [ ] Review Vercel environment variables and deployment settings.
- [ ] Obtain explicit project-owner approval before production deployment or domain changes.

The current canonical fallback is `https://practice-caresource.vercel.app`. Do not change it to the official domain based only on the intended domain name.

## Legal and privacy review

- [ ] Have qualified counsel review the Privacy Policy, Terms and Conditions, and Cookie Policy.
- [ ] Confirm the legal entity, governing-law state, venue, and liability clauses with counsel.
- [ ] Review the actual vendors, data flows, retention practices, and privacy disclosures.
- [ ] Confirm the Business Associate Agreement process before any PHI is exchanged.
- [ ] Keep the website inquiry form limited to business inquiries and maintain a clear warning not to submit PHI.

No HIPAA certification or blanket compliance guarantee should be claimed.

## Final release gates

A release is ready for owner review only when:
1. GitHub CI passes on the exact proposed commit.
2. Browser, responsive, and accessibility checks have been completed and recorded.
3. Contact email delivery has been tested successfully.
4. Business and legal placeholders have been resolved or intentionally kept unpublished.
5. Domain and hosting configuration have been verified.
6. The project owner explicitly approves merge and deployment.
