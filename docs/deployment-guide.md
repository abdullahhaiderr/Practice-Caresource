# Deployment guide: PracticeCareSource

Last reviewed: November 7, 2026

This guide does not authorize a deployment. Do not merge, deploy, attach a domain, or change Vercel settings without explicit approval from the project owner.

## 1. Prerequisites

1. Node.js 20.9 or newer and npm.
2. The correct Vercel project connected to this repository.
3. DNS access for the intended production domain.
4. Explicit project-owner approval for a production release.

## 2. Environment configuration

The contact form does not require environment variables or an email API. The form opens the visitor's configured email application with a prepared message addressed to info@practicecaresource.com. The visitor must review and send it.

The optional `NEXT_PUBLIC_SITE_URL` variable controls the canonical origin used by metadata, sitemap, robots, and JSON-LD. Until practicecaresource.com is verified in DNS and Vercel, the code falls back to https://practice-caresource.vercel.app.

No Resend API key, contact recipient variable, sender variable, database, or contact backend is required.

## 3. Contact form behavior

The contact form validates required business enquiry fields in the browser and prepares a mailto message to info@practicecaresource.com. It does not send in the background, and the website cannot verify that the visitor pressed Send or that the message reached the inbox.

If no email application is configured, the visitor can use the direct email link. The inbox should be monitored and tested from an external email account.

The form is not for patient information or protected health information. Browser-side identifier checks are incomplete and cannot guarantee detection.

## 4. Local verification

```bash
npm ci
npm run lint
npm run typecheck
npm run build
npm start
```

Review GitHub Actions for the exact commit before considering code verification complete.

## 5. Vercel release procedure

Only follow this section after explicit project-owner approval.

1. Confirm the intended commit and successful CI checks.
2. Confirm the Vercel project is linked to the intended repository and branch.
3. Verify the official domain in DNS and Vercel.
4. Choose one canonical host, www or non-www.
5. Set `NEXT_PUBLIC_SITE_URL` to the verified canonical origin if needed.
6. Verify canonical tags, sitemap, robots.txt, JSON-LD, HTTPS and security headers.
7. Test the contact mailto flow on desktop and mobile browsers.
8. Deploy only after approval.

No DNS, domain, production alias, or production environment settings should be changed as part of ordinary code review.

## 6. Post-release verification

1. Homepage, navigation, footer, and all published service pages load.
2. Resources, FAQ, blog, contact, and legal routes load.
3. Unconfirmed specialties remain unpublished until reviewed.
4. Unknown routes return the custom 404 response.
5. robots.txt references the correct sitemap.
6. sitemap.xml uses the verified canonical host and excludes noindex or private routes.
7. Canonical tags and Open Graph URLs use the same canonical host.
8. Contact form validation works and opens a draft addressed to info@practicecaresource.com.
9. The visitor is told to press Send and is never shown a false sent confirmation.
10. Security headers and HTTPS behavior are verified on the live deployment.
11. Responsive and accessibility checks are repeated at mobile, tablet, and desktop widths.

## 7. Rollback

If an approved production deployment causes a regression, use Vercel deployment history to restore the last known-good deployment. Do not change or promote deployments without project-owner approval.
