# Security and privacy notes

## Website scope

PracticeCareSource is a public marketing website. It does not provide patient accounts, a patient portal, a medical records system, billing transaction processing, or a secure channel for protected health information (PHI).

## Contact form

The contact form validates fields in the visitor's browser and prepares an email addressed to info@practicecaresource.com using the visitor's configured email application.

No contact API route, Resend integration, server-side email delivery, database, or application-side lead storage is used by the form.

The visitor must review the prepared message and press Send in their email application. The website cannot verify that the visitor sent the message or that it reached the inbox. If no email application is configured, the visitor can email info@practicecaresource.com directly.

The browser performs basic checks for a few obvious identifier patterns. These checks are incomplete and are not a guarantee that PHI will be detected. The form must not be used to submit patient names, dates of birth, medical record numbers, insurance details, claim documents, or other PHI. Never describe the form or website as HIPAA compliant or certified.

## Implemented website protections

- Security headers and a restrictive Content Security Policy are configured in next.config.ts.
- Form input is validated with the shared Zod schema before an email draft is opened.
- The form uses semantic labels, inline validation, accessible status messaging, and a keyboard-operable submit button.
- The repository does not contain contact delivery credentials.

## Review before launch

- Verify that info@practicecaresource.com is monitored and can receive external messages.
- Test the form on desktop and mobile browsers with a configured email application.
- Review the privacy policy and terms with qualified counsel.
- Review all business claims, service availability, specialties, contact information, and public legal identity before publication.
- Do not use this marketing form to exchange PHI. Use an appropriately assessed and contractually approved channel for sensitive information.

## Vulnerability reporting

Report website security issues without including patient information or other sensitive personal data.
