# Security Policy — PracticeCareSource Website

## Reporting a vulnerability

Use the contact form at `/contact` and describe the issue, its impact, and steps
to reproduce. Please do not test against production data, publicly disclose the
issue before it is reviewed, or include protected health information in a report.

## Implemented controls

### HTTP hardening

Configured in `next.config.ts` and applied to every route:

- Content-Security-Policy with `default-src 'self'`, no third-party scripts,
  `object-src 'none'`, `frame-ancestors 'none'`, `form-action 'self'`.
- Strict-Transport-Security (two years, includeSubDomains, preload).
- X-Frame-Options: DENY and X-Content-Type-Options: nosniff.
- Referrer-Policy: strict-origin-when-cross-origin.
- Permissions-Policy disabling camera, microphone, geolocation, payment, and USB.
- Cross-Origin-Opener-Policy and Cross-Origin-Resource-Policy.
- `poweredByHeader: false`.

### Contact endpoint (`POST /api/contact`)

- Zod validation on the server using the same schema as the client.
- Honeypot field (`website`) and a minimum fill-time check.
- Sanitization of control characters and whitespace; explicit length limits.
- Best-effort in-memory fixed-window rate limiting (5 requests / 10 minutes / IP)
  with HTTP 429 and `Retry-After`. This is not shared or durable across serverless
  instances and must not be treated as production-grade protection.
- Consent required before submission.
- The API rejects several common structured identifiers (such as SSNs, labelled
  dates of birth, MRNs, and member IDs). Pattern checks cannot reliably identify
  patient names or all PHI; the form must never be used to submit PHI.
- Resend delivery requires `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and a verified
  `CONTACT_FROM_EMAIL`. If any are missing, the endpoint returns HTTP 503.
- Inquiry contents are not written to application logs. Provider failures log
  only the HTTP status code.

### Application

- No secrets in `NEXT_PUBLIC_*` variables. Only the canonical site URL is public.
- `.env`, `.env.local`, and `.env.production` are git-ignored.
- JSON-LD is serialized from controlled application data; no user input is
  inserted into `dangerouslySetInnerHTML`.
- Navigation is same-origin. External links are avoided in the current build.
- Public forms prohibit PHI; a Business Associate Agreement is required before
  any exchange of protected health information.

## Production hardening checklist

- [ ] Terminate TLS at the edge, redirect HTTP to HTTPS, and confirm HSTS.
- [ ] Add Vercel WAF rate limiting or a durable shared store (Upstash Redis,
      Vercel KV, DynamoDB) for `/api/contact`.
- [ ] Configure Resend and test delivery to a monitored inbox.
- [ ] Persist or forward leads so an email outage cannot lose an inquiry.
- [ ] Add a nonce-based CSP via middleware/proxy and remove `'unsafe-inline'`
      from `script-src` if required by policy.
- [ ] Add WAF/bot protection (Vercel Firewall, Cloudflare).
- [ ] Enable dependency scanning (Dependabot/Renovate) and `npm audit` in CI.
- [ ] Add uptime and error monitoring with PII scrubbing.
- [ ] Restrict preview deployments (Vercel deployment protection).
- [ ] Review subprocessors and sign BAAs before any PHI access.
- [ ] Run an annual HIPAA risk assessment and penetration test.
- [ ] Back up configuration and document incident response contacts.

## Out of scope

This repository is a marketing website. It does not store PHI, does not include
a client portal, and does not implement authentication. Those systems require a
separate security architecture, threat model, and compliance review.
