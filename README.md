# PracticeCareSource website

PracticeCareSource is a Next.js marketing website for medical billing and revenue cycle support.

## Stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS v4
- React Hook Form and Zod
- Lucide React

## Local development

Requirements: Node.js 20.9 or newer and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

## Verification

```bash
npm run lint
npm run typecheck
npm run build
```

## Contact form

The form prepares an email addressed to **info@practicecaresource.com** using the visitor's configured email application. The visitor must review the draft and press Send. There is no contact API route, Resend integration, server-side email service, or contact database.

If the visitor has no email application configured, they can email info@practicecaresource.com directly. The website cannot verify delivery or show a genuine sent confirmation because the sending occurs outside the website.

The form is for business enquiries only. Do not submit patient information or protected health information (PHI). Basic browser checks are incomplete and are not a guarantee that PHI will be detected.

## Business information

The public working brand is PracticeCareSource. Do not invent or publish unverified legal entity details, physical address, phone number, staff credentials, specialties, testimonials, client names, certifications, performance metrics, or guaranteed financial outcomes.

The official domain practicecaresource.com must not be treated as connected to Vercel until DNS and domain verification are completed. The current canonical URL falls back to https://practice-caresource.vercel.app.

## Release policy

Changes are committed directly to main as requested. Automatic production deployments remain paused through the existing Vercel ignore-build safeguard. Do not remove that safeguard or promote a deployment without explicit approval.
