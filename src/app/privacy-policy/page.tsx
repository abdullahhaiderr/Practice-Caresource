import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How PracticeCareSource handles website visits and explains the email-draft contact process.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How this website handles technical information and how the contact email draft works."
      lastUpdated="November 7, 2026"
      breadcrumb="Privacy Policy"
    >
      <p>
        This Privacy Policy describes the public PracticeCareSource website
        (&ldquo;Site&rdquo;). It is intended for business enquiries. It does not
        describe information handling during a client engagement, which must be
        addressed separately in the applicable contract and, where required, a
        Business Associate Agreement.
      </p>

      <section>
        <h2>Contact form and information you enter</h2>
        <p>
          The contact form validates the information in your browser and prepares
          an email draft addressed to info@practicecaresource.com using your
          device's configured email application. You must review the draft and
          press Send. The Site does not submit the form to a contact API, store
          the enquiry in a website database, or verify that the email was sent
          or delivered.
        </p>
        <p>
          If your device has no configured email application, you can contact us
          directly at <a href="mailto:info@practicecaresource.com">info@practicecaresource.com</a>.
          Once you send the message, your email provider and our receiving email
          provider may process and retain the message under their own terms and
          policies.
        </p>
      </section>

      <section>
        <h2>Information we ask you not to send</h2>
        <p>
          Do not enter patient names, dates of birth, medical record numbers,
          Social Security numbers, insurance identifiers, claim documents, or
          other protected health information (PHI) into the form or ordinary
          email. This is a business enquiry channel, not a patient intake or
          secure PHI exchange system.
        </p>
        <p>
          The browser performs limited checks for a few obvious identifier
          patterns. Those checks are incomplete and cannot guarantee that PHI
          will be detected or blocked.
        </p>
      </section>

      <section>
        <h2>Technical information</h2>
        <p>
          Our hosting provider may process standard technical information
          needed to deliver and secure the Site, such as IP address, browser
          information, request time, and diagnostic logs. The exact information
          and retention periods depend on the hosting provider's configuration
          and policies.
        </p>
      </section>

      <section>
        <h2>How information may be used</h2>
        <ul>
          <li>To operate, maintain, and secure the Site.</li>
          <li>To respond to an email you choose to send to our business inbox.</li>
          <li>To investigate technical issues or misuse.</li>
          <li>To comply with applicable legal obligations.</li>
        </ul>
        <p>
          We do not sell personal information. The Site does not collect contact
          form submissions through a server-side lead database.
        </p>
      </section>

      <section>
        <h2>Service providers and third parties</h2>
        <p>
          The Site is hosted by Vercel. When you choose to send an email, the
          email providers involved may process the message. Their privacy
          policies, security practices, and retention rules apply to the services
          they provide. We do not represent that ordinary email is suitable for
          PHI.
        </p>
      </section>

      <section>
        <h2>Retention</h2>
        <p>
          The Site does not retain contact form submissions because it does not
          receive them. Messages you send by email may be retained in the sender
          and recipient mailboxes according to the relevant email providers'
          settings and the recipient's business record practices.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          The Site uses HTTPS and configured hosting security controls. No
          website or email transmission can be guaranteed completely secure.
          Do not use the public contact form or ordinary email to exchange
          patient information or other sensitive records.
        </p>
      </section>

      <section>
        <h2>Your choices and privacy requests</h2>
        <p>
          For questions about this policy or a privacy request relating to
          information we hold, email <a href="mailto:info@practicecaresource.com">info@practicecaresource.com</a>.
          We may need to verify your identity before responding. Do not include
          patient information in the request.
        </p>
      </section>

      <section>
        <h2>Children's privacy</h2>
        <p>
          The Site is intended for healthcare business professionals and is not
          directed to children under 13.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          This policy may be updated as the Site or its data practices change.
          The date at the top of this page indicates the latest revision.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent to
          {" "}<a href="mailto:info@practicecaresource.com">info@practicecaresource.com</a>.
          This page is an informational draft and should be reviewed by
          qualified counsel before launch.
        </p>
      </section>
    </LegalPage>
  );
}
