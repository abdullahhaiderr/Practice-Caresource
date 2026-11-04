# Deployment Guide — PracticeCareSource

Last updated: November 4, 2026

## 1. Prerequisites

- Node.js 20.9 or newer (Next.js 16 requirement).
- npm 10 or newer.
- A Vercel account (recommended) or another Node-compatible host.
- A Resend account if email delivery is required.
- Access to DNS for the production domain.

## 2. Environment variables

Create `.env.local` for development and set the same variables in the hosting provider for production.

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Canonical origin used by metadata, sitemap, robots, and JSON-LD. Use the final primary domain, no trailing slash. |
| `RESEND_API_KEY` | For email delivery | Server-side Resend API key. Never expose with `NEXT_PUBLIC_`. |
| `CONTACT_TO_EMAIL` | For email delivery | Monitored inbox that receives consultation requests. |
| `CONTACT_FROM_EMAIL` | For email delivery | Verified sender, for example `PracticeCareSource <website@yourdomain.com>`. |
| `CONTACT_WEBHOOK_URL` | No | Not used. Legacy placeholder retained only for older environment files. |
| `CONTACT_WEBHOOK_SECRET` | No | Not used. Legacy placeholder retained only for older environment files. |

Example `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://practicecaresource.com
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=inquiries@practicecaresource.com
CONTACT_FROM_EMAIL="PracticeCareSource <website@practicecaresource.com>"
```

If `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are not set, the API validates submissions and logs them to the server console instead of sending email. That is useful for local testing but is **not acceptable for production lead capture**.

## 3. Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Production checks:

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

ESLint uses the Next.js flat config in `eslint.config.mjs`. TypeScript strict mode and the production build remain the primary gates; run all three in CI.

## 4. Deploy to Vercel

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Confirm the framework preset is **Next.js**.
4. Build command: `npm run build`.
5. Output: Vercel detects `.next` automatically. Do not override the output directory.
6. Add the environment variables from section 2 under **Settings → Environment Variables**. Apply them to Production, Preview, and Development as appropriate.
7. Deploy.
8. Verify the deployment URL before attaching the production domain.

### Domain

1. Add the domain in **Settings → Domains**.
2. Choose the primary host (non-www or `www`) and redirect the alternate to it.
3. Update DNS records as instructed by Vercel.
4. Set `NEXT_PUBLIC_SITE_URL` to the primary host and redeploy so canonical URLs, sitemap entries, and JSON-LD match.
5. Confirm HTTPS is active and HSTS is served from the application headers.

Do not launch with `NEXT_PUBLIC_SITE_URL` still pointing at a preview host. Canonical tags and the sitemap would all point to the wrong origin.

## 5. Email delivery with Resend

1. Create a Resend account and verify the sending domain.
2. Add the DNS records Resend provides (SPF and DKIM). Wait for verification.
3. Create an API key with sending permission.
4. Set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
5. Redeploy.
6. Submit a real test through `/contact` and confirm delivery, reply-to behavior, and formatting.

Notes:

- The default `onboarding@resend.dev` sender can only send to the Resend account owner’s address. Use a verified domain sender before launch.
- The API currently sends a plain HTML notification. It does not send an auto-reply to the submitter. Add one only if the company can monitor replies.
- Keep the recipient inbox monitored. The form is a lead channel, not a ticketing system.

## 6. Rate limiting caveat

The contact route uses an in-memory `Map` keyed by client IP. This is best-effort protection:

- It resets on redeploy and cold starts.
- It is not shared across serverless instances or regions.
- It does not survive horizontal scaling.

For production-grade protection, use one of:

- Vercel WAF rate limiting rules on `/api/contact`.
- Upstash Redis (`@upstash/ratelimit`) with environment variables.
- A managed API gateway or edge middleware with a durable store.

Keep the honeypot and minimum-submission-time checks even after adding durable rate limiting.

## 7. Security headers and CSP

`next.config.ts` sets:

- Content-Security-Policy with `default-src 'self'`.
- `X-Content-Type-Options: nosniff`.
- `X-Frame-Options: DENY` and `frame-ancestors 'none'`.
- Referrer policy `strict-origin-when-cross-origin`.
- Permissions policy disabling camera, microphone, geolocation, payment, and USB.
- HSTS for two years with preload.
- Cross-origin opener and resource policies.

Before adding any third-party script, font, image host, or analytics tool:

1. Update the CSP in `next.config.ts`.
2. Update the cookie policy and privacy policy if tracking is introduced.
3. Re-test the contact form and all pages.

`'unsafe-inline'` is currently allowed for scripts because Next.js hydration uses inline bootstrap scripts. Moving to a nonce-based CSP requires middleware/proxy work and should be tested carefully.

## 8. Post-deployment checklist

### Routes

- [ ] `/` loads and the hero, services, FAQ, and footer render.
- [ ] `/services` and all nine service pages load.
- [ ] `/specialties` and all eight specialty pages load.
- [ ] `/blog` and all eight articles load.
- [ ] `/about`, `/why-choose-us`, `/how-it-works`, `/hipaa-security`, `/faq`, `/resources` load.
- [ ] `/contact`, `/thank-you`, and the three legal pages load.
- [ ] An unknown URL returns the custom 404 page with HTTP 404.

### SEO

- [ ] `NEXT_PUBLIC_SITE_URL` matches the live primary domain.
- [ ] `https://<domain>/robots.txt` returns the sitemap URL.
- [ ] `https://<domain>/sitemap.xml` lists all published pages and no `/thank-you` or `/api/` URLs.
- [ ] Canonical tags use the live domain.
- [ ] Open Graph image resolves at `/opengraph-image`.
- [ ] Structured data passes the Rich Results Test.
- [ ] Sitemap submitted to Google Search Console and Bing Webmaster Tools.

### Forms

- [ ] Empty submit shows field-level errors.
- [ ] Invalid email and invalid phone show errors.
- [ ] Consent is required.
- [ ] Valid submit redirects to `/thank-you`.
- [ ] Email arrives at the monitored inbox with a working reply-to.
- [ ] Honeypot submissions are not delivered.
- [ ] More than five submissions in ten minutes from one IP returns HTTP 429.
- [ ] PHI warning is visible near the form.

### Security and operations

- [ ] HTTPS is enforced.
- [ ] Security headers are present (`curl -I`).
- [ ] No secrets are exposed in client bundles (`NEXT_PUBLIC_` is only used for the site URL).
- [ ] Error monitoring is configured, or server logs are reviewed regularly.
- [ ] A rollback plan exists (Vercel instant rollback to the previous deployment).

## 9. Rollback

Vercel keeps immutable deployments. To roll back:

1. Open **Deployments**.
2. Select the last known good deployment.
3. Choose **Promote to Production**.

If the issue is configuration-related, revert the environment variable change and redeploy. Database migrations are not part of this site.

## 10. Maintenance

- Update blog content on a regular cadence; avoid publishing AI-generated filler without review.
- Review legal pages annually and whenever tools, vendors, or data practices change.
- Monitor form deliverability and spam volume.
- Re-run `npm run lint`, `npm run typecheck`, and `npm run build` before every deployment.
- Keep Next.js and dependencies patched. Test the contact form after framework upgrades.
- Revalidate structured data after template changes.
- Confirm the domain and canonical host remain consistent after any DNS change.
