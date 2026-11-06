# Deployment guide — PracticeCareSource

Last reviewed: November 7, 2026

This guide describes the release process. It does not authorize a deployment. Do not merge, deploy, attach a domain, or change Vercel settings without explicit approval from the project owner.

## 1. Prerequisites

- Node.js 20.9 or newer and npm.
- A verified Vercel project connected to this repository.
- DNS access for the intended production domain.
- A Resend account and verified sender domain if the consultation form should deliver email.

## 2. Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes for a release | Canonical origin used by metadata, sitemap, robots, and JSON-LD. |
| `RESEND_API_KEY` | For email delivery | Server-side Resend API key. Never expose it with a `NEXT_PUBLIC_` prefix. |
| `CONTACT_TO_EMAIL` | For email delivery | Monitored inbox that receives consultation requests. |
| `CONTACT_FROM_EMAIL` | Recommended | Sender identity verified with Resend. |

The repository fallback is currently `https://practice-caresource.vercel.app`. Keep this value until `practicecaresource.com` has been verified in DNS and Vercel. Do not set the official domain merely because it is the intended brand domain.

Example local environment:

```bash
NEXT_PUBLIC_SITE_URL=https://practice-caresource.vercel.app
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=info@practicecaresource.com
CONTACT_FROM_EMAIL="PracticeCareSource <website@verified-sending-domain.com>"
```

Use the actual verified sender address provided by Resend. Store secrets in local environment files or the hosting provider's secret manager. Never commit them or paste them into chat.

## 3. Contact form behavior

The API validates form submissions and sends email through Resend only when `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are configured. If either is missing, the endpoint returns HTTP 503 and directs the visitor to `info@practicecaresource.com`. Inquiry contents are not written to application logs.

A successful API response means the email provider accepted the message; it does not prove that the recipient inbox delivered or reviewed it. Test delivery using a monitored inbox before launch.

The form requests business information and includes a free-text field. It warns users not to submit patient information or PHI, but cannot technically guarantee that free-text content contains no PHI.

The current rate limiter uses in-memory process state and is not shared across Vercel instances. Add Vercel WAF rate limiting or a durable shared store before relying on it as production-grade protection.

## 4. Local verification

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm start
```

GitHub Actions runs lint, typecheck, and build for pull requests and pushes. Review the workflow result for the exact commit before considering the code verified.

## 5. Vercel release procedure

Only follow this section after explicit project-owner approval.

1. Confirm the intended commit and successful CI checks.
2. Confirm the Vercel project is linked to the intended repository and branch.
3. Review Production, Preview, and Development environment variables.
4. Configure the email variables and test the form on a preview deployment.
5. Confirm the official domain is attached and its DNS records match Vercel's instructions.
6. Choose the canonical www or non-www host and configure the alternate-host redirect.
7. Set `NEXT_PUBLIC_SITE_URL` to the verified canonical origin.
8. Deploy only after approval.
9. Verify HTTPS, canonical tags, sitemap, robots.txt, metadata, security headers, and form delivery on the live host.

No DNS, domain, or production settings should be changed as part of ordinary code review.

## 6. Post-release verification

- Homepage, navigation, footer, and all published service pages load.
- Resources, FAQ, blog, contact, and legal routes load.
- Unconfirmed specialty pages remain excluded from search indexing until reviewed.
- Unknown routes return the custom 404 response.
- `/robots.txt` references the correct sitemap.
- `/sitemap.xml` uses the verified canonical host and excludes noindex or private routes.
- Canonical tags and Open Graph URLs use the same canonical host.
- Contact form validation works and successful submissions reach the monitored inbox.
- Missing email configuration produces a clear failure rather than silent success.
- No secrets are exposed in client bundles.
- Security headers and HTTPS behavior are verified on the live deployment.
- Responsive and accessibility checks are repeated at mobile, tablet, and desktop widths.

## 7. Rollback

If an approved production deployment causes a regression, use the Vercel deployment history to restore the last known-good deployment. Confirm the active environment variables and canonical URL after rollback. Do not change or promote deployments without project-owner approval.
