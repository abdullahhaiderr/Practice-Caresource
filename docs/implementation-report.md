# Implementation Report — PracticeCareSource

Date: November 4, 2026
Scope: Full rebuild of the PracticeCareSource marketing site (Option A) using a new design system and information architecture.
Status: Code complete and verified locally. Not deployed.

## 1. Summary

The site was rebuilt from scratch in `src/` with the Next.js App Router, TypeScript strict mode, Tailwind CSS v4, React Hook Form, and Zod. The previous root-level `app/`, `components/`, and `lib/` directories were removed as part of the approved rebuild; the empty root `app/` directory was what caused Next.js to ignore the new `src/app` tree.

The finished site includes:

- Homepage.
- About, Why Choose Us, How It Works, HIPAA & Security, FAQ, and Resources.
- Services overview plus nine service detail pages.
- Specialties overview plus eight specialty detail pages.
- Blog index plus eight articles.
- Contact page with a validated, rate-limited consultation form.
- Thank You, Privacy Policy, Terms and Conditions, and Cookie Policy pages.
- Custom 404, `sitemap.xml`, `robots.txt`, generated Open Graph image, and favicon.
- Shared components for headers, footers, hero sections, breadcrumbs, CTAs, accordions, legal pages, JSON-LD, and service/specialty templates.

The content avoids invented statistics, testimonials, certifications, team information, addresses, phone numbers, and email addresses. Business contact fields remain `undefined` placeholders until verified details are supplied.

## 2. Stack

| Layer | Implementation |
| --- | --- |
| Framework | Next.js 16.4.3, App Router, Turbopack |
| Language | TypeScript 5.9, strict mode |
| UI | React 19.3.1 |
| Styling | Tailwind CSS v4 with `@theme` design tokens |
| Icons | Lucide React |
| Forms | React Hook Form 7 + Zod 4 + `@hookform/resolvers` |
| Fonts | Inter (body) and Manrope (headings) via `next/font` |
| Email | Optional Resend HTTP API; console logging fallback |
| Linting | ESLint 10 + `eslint-config-next` flat config |
| Hosting target | Vercel-compatible Node/Next.js runtime |

No animation libraries (GSAP, Three.js, Lenis, Motion), no database, no authentication, and no client-side analytics are included.

## 3. Design system

Tokens are defined in `src/app/globals.css`:

- Navy `#153B58` and navy dark `#0E2A40`.
- Blue `#176B91` and blue dark `#0F5573`.
- Teal `#258A8A` and teal dark `#1C6E6E`.
- Ink `#243746`, secondary text `#667788`.
- Background `#FFFFFF` and secondary background `#F4F8FA`.
- Border `#E3EAF0`.
- Success `#23856D`.

The interface uses restrained hover transitions and respects `prefers-reduced-motion`. There are no autoplaying carousels, scroll-jacking effects, or heavy animation dependencies.

## 4. Architecture

```text
src/
  app/
    layout.tsx, page.tsx, globals.css
    about/, services/, specialties/, why-choose-us/, how-it-works/
    hipaa-security/, faq/, resources/, blog/, contact/, thank-you/
    privacy-policy/, terms-and-conditions/, cookie-policy/
    api/contact/route.ts
    sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg, not-found.tsx
  components/
    layout/        Header, Footer, SkipLink
    home/          Homepage sections
    services/      Service detail template
    specialties/   Specialty detail template
    forms/         Consultation form
    shared/        PageHero, Breadcrumbs, CTA, Accordion, JsonLd, LegalPage
  config/business.ts
  data/            Services, specialties, FAQs, blog, detail content
  lib/
    seo.ts         JSON-LD builders and absolute URLs
    contact-schema.ts
```

Key behavior:

- All marketing pages are statically generated.
- Only `/api/contact` is dynamic.
- Header dropdowns and the mobile dialog are client components.
- The service and specialty detail routes use `generateStaticParams` and `generateMetadata`.
- The blog uses the same static generation pattern and renders structured article content from typed data.

## 5. Contact form and API

Fields: full name, business email, phone, practice name, specialty, number of providers, services required, message, and consent.

Implemented protections:

- Client and server validation with the same Zod schema.
- Inline field errors, `aria-invalid`, and associated error text.
- PHI warning directly above the form and a second privacy reminder in the sidebar.
- Honeypot field (`website`) hidden from users and assistive technology.
- Minimum fill-time check (1.5 seconds); faster submissions are silently accepted and discarded server-side.
- Control-character and whitespace sanitization.
- Explicit maximum lengths for every field.
- In-memory fixed-window rate limit: five POSTs per IP per ten minutes, HTTP 429 with `Retry-After`.
- Optional Resend delivery with reply-to set to the submitter.
- If Resend is not configured, submissions are logged to the server console instead of failing. This is for local testing and is not acceptable for production lead capture.

The form never asks for patient information and does not include fields for PHI.

## 6. SEO implementation

- Unique titles and descriptions for every indexable page.
- Canonical URLs resolved against `NEXT_PUBLIC_SITE_URL`.
- `sitemap.xml` generated from a single source of truth: static pages, services, specialties, and blog posts.
- `robots.txt` allows crawling, disallows `/api/` and `/thank-you`, and references the sitemap.
- `/thank-you` is `noindex, follow`; the 404 page is also `noindex, follow`.
- Open Graph and Twitter metadata.
- Generated 1200×630 PNG Open Graph image.
- JSON-LD: `Organization`, `WebSite`, `Service`, `BreadcrumbList`, `Article`, and `FAQPage`.
- No `AggregateRating`, `Review`, or `LocalBusiness` markup, because there are no verified reviews, address, or phone number.
- Internal linking covers services, specialties, resources, legal pages, and the consultation CTA.

## 7. Verification results

All checks were run locally against a production build on November 4, 2026.

### Build and static checks

| Check | Result |
| --- | --- |
| `npm run lint` | Pass, no warnings or errors |
| `npm run typecheck` | Pass, no output |
| `npm run build` | Pass; Next.js generated 47 entries across the route set |
| Sitemap URLs | 39 unique URLs |
| Sitemap pages returning 200 | 39 of 39 |
| Duplicate page titles | None |
| Canonical mismatches | None |
| Pages with exactly one H1 | 39 of 39 |
| Pages with JSON-LD | 39 of 39 |
| Internal link targets crawled | 39; no 4xx responses |
| Custom 404 | Returns HTTP 404 and the custom heading |
| `robots.txt` | 200; blocks `/api/` and `/thank-you`; includes sitemap |
| Sitemap exclusions | `/thank-you` and `/api/` are absent |
| Open Graph image | 200, `image/png`, 1200×630, 52,851 bytes |
| Favicon | 200, `image/svg+xml`, 361 bytes |

Structured data counts observed across the sitemap:

- `Organization`: 1
- `WebSite`: 1
- `Service`: 17 (9 services + 8 specialties)
- `BreadcrumbList`: 38
- `Article`: 8
- `FAQPage`: 1

### API behavior

| Scenario | Result |
| --- | --- |
| Invalid payload | HTTP 400 with field-level errors for every required field |
| Honeypot filled | HTTP 200 silently; no email/log entry for the submission |
| Valid payload | HTTP 200; browser submission redirects to `/thank-you` |
| Rate limit | After five allowed POSTs from one IP, the next returns HTTP 429 with `Retry-After` |
| Minimum fill time | Implemented server-side; submissions under 1.5 seconds return success without delivery |
| Email configuration absent | Submission is logged server-side; no delivery attempted |

The rate-limit test counted all POSTs, including the valid browser submission, invalid payload, honeypot, and valid API submissions. The first five were accepted; the sixth returned 429 with a `Retry-After` value near 500–590 seconds.

### Browser, responsive, and accessibility checks

Browser testing used local Chrome through the DevTools Protocol (CDP). Playwright and the Chrome DevTools MCP integration were not available in this session, so no claim is made that they were used.

| Check | Result |
| --- | --- |
| Chrome widths | 375, 768, 1024, and 1440 px |
| Horizontal overflow | None on homepage, services, service detail, specialties, specialty detail, contact, blog, blog post, or FAQ |
| Mobile menu | Opens as a modal, shows nine service links, closes on Escape, restores focus to the trigger, restores body scroll |
| Mobile trigger `aria-controls` | Set to `mobile-menu` only while open; matches the dialog ID |
| Desktop Services dropdown | 10 links (All Services plus nine services) |
| FAQ accordions | 28 controls; opening one closes the previously open item; `aria-expanded` and `hidden` states remain consistent |
| Skip link | Hidden off-screen until focused; fully visible after focus; navigates to `#main` and moves focus to the main element |
| Invalid form submit | Nine visible field errors, 17 `aria-invalid` states, zero API requests |
| Valid form submit | HTTP 200 and redirect to `/thank-you` |
| Footer | 31 links, all with destinations, including the three legal pages |
| Console errors | None during the tested flows |

### Security headers

Verified on the production server:

- Content-Security-Policy present.
- Strict-Transport-Security present (`max-age=63072000; includeSubDomains; preload`).
- `X-Frame-Options: DENY`.
- `X-Content-Type-Options: nosniff`.
- `Referrer-Policy: strict-origin-when-cross-origin`.
- `Permissions-Policy` present.
- No `X-Powered-By` header.

### Dependency audit

- `npm audit --omit=dev`: 0 vulnerabilities in production dependencies.
- `npm audit`: 15 moderate advisories in the development-only ESLint toolchain, rooted in a `minimatch` denial-of-service advisory. `npm audit fix --force` proposes a breaking downgrade to ESLint 4, so it was not applied. These packages are not included in the deployed runtime.

## 8. Known limitations and launch blockers

1. **Business contact details are placeholders.** Phone, email, address, and hours are `undefined` in `src/config/business.ts`. The footer and mobile menu hide those rows until real details are supplied.
2. **Email delivery is not configured.** Without `RESEND_API_KEY` and `CONTACT_TO_EMAIL`, the API logs submissions instead of sending them. Production lead capture requires Resend or another delivery mechanism.
3. **Rate limiting is in-memory.** It resets on redeploy and is not shared across serverless instances. Add Vercel WAF rate limiting or a durable store such as Upstash Redis.
4. **Legal pages need counsel review.** The governing-law state is deliberately not invented; the Terms page refers to “the state in which PracticeCareSource is organized.” Counsel should confirm the entity name, jurisdiction, liability language, and state privacy obligations.
5. **Domain choice needs confirmation.** `NEXT_PUBLIC_SITE_URL` falls back to `https://practicecaresource.com`. Confirm non-www versus `www`, set the production value, and redirect the alternate host.
6. **Service catalog has nine services.** The brief referenced ten subpages, but the approved catalog contains nine distinct services. A tenth page was not invented. If a tenth service exists, confirm its scope and content.
7. **No verified authors, testimonials, or case studies.** Blog posts have no bylines, and no review or rating schema is used. Add these only with verifiable information and, for client outcomes, written permission.
8. **No analytics or advertising tracking.** The Cookie Policy reflects this. If analytics is added, update the policy, consent approach, and CSP.
9. **CSP uses `'unsafe-inline'` for scripts.** This is required by the current Next.js hydration bootstrap. A nonce-based CSP via middleware/proxy is a future hardening step.
10. **The site was not deployed.** No DNS, hosting, or production email changes were made.

## 9. Verification commands

```bash
npm install
npm run lint
npm run typecheck
npm run build
npm start
```

For a clean full check, run the commands above and then re-test:

- `/contact` with an empty form (client errors, no API request).
- `/contact` with a valid form (redirect to `/thank-you`).
- `POST /api/contact` with invalid JSON, a filled honeypot, a valid payload, and more than five requests in ten minutes.
- `/sitemap.xml`, `/robots.txt`, an unknown URL, and the Open Graph image.

## 10. Handoff notes

- Update `src/config/business.ts` first when verified contact details arrive.
- Update `.env.local` and the hosting environment with `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
- Have counsel review the three legal pages and insert the governing state.
- Re-run lint, typecheck, and build after any content or dependency change.
- Use the checklists in `docs/deployment-guide.md` before launch.
- Keep the claims standards in `docs/content-review.md` in force for future copy.
