import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PracticeCareSource handles information submitted through this website, including business contact details and consultation requests.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      description="How information submitted through this website is collected, used, and protected."
      lastUpdated="November 4, 2026"
      breadcrumb="Privacy Policy"
    >
      <p>
        This Privacy Policy describes how PracticeCareSource (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;) handles information collected
        through practicecaresource.com (the &ldquo;Site&rdquo;). It applies to
        business inquiries submitted through the Site. It does not describe how
        protected health information is handled in client engagements, which is
        governed by separate agreements, including a Business Associate
        Agreement where applicable.
      </p>

      <section>
        <h2>Information we collect</h2>
        <p>
          When you submit the consultation form, we collect the information you
          provide: full name, business email address, phone number, practice
          name, specialty, number of providers, services of interest, your
          message, and your consent to this policy.
        </p>
        <p>
          We may also receive standard technical information through our hosting
          provider, such as IP address, browser type, and request timestamps, to
          operate the Site, maintain security, and prevent abuse. We do not use
          this information to identify individual visitors for advertising.
        </p>
      </section>

      <section>
        <h2>Information we do not want through this Site</h2>
        <p>
          The Site is not designed to receive protected health information. Do
          not submit patient names, dates of birth, medical record numbers, claim
          documents, insurance card details, or other patient information
          through the form or by email before a Business Associate Agreement is
          in place.
        </p>
        <p>
          If patient information is submitted accidentally, contact us so it can
          be addressed promptly.
        </p>
      </section>

      <section>
        <h2>How we use information</h2>
        <ul>
          <li>To review and respond to your consultation request.</li>
          <li>To communicate with you about services you asked about.</li>
          <li>To operate, secure, and improve the Site.</li>
          <li>To detect spam, abuse, and fraudulent submissions.</li>
          <li>To comply with applicable legal obligations.</li>
        </ul>
        <p>
          We do not sell personal information. We do not use consultation form
          submissions for unrelated marketing.
        </p>
      </section>

      <section>
        <h2>How we share information</h2>
        <p>
          We may share information with service providers who help operate the
          Site or deliver email, such as our hosting provider and email delivery
          provider. These providers process information on our behalf and are
          expected to protect it.
        </p>
        <p>
          We may also disclose information if required by law, legal process, or
          to protect the rights, safety, and security of our business, users, or
          others. If our business is involved in a merger, acquisition, or sale
          of assets, information may be transferred as part of that transaction.
        </p>
      </section>

      <section>
        <h2>Data retention</h2>
        <p>
          We retain consultation inquiries for as long as needed to respond and
          to maintain business records, unless a longer period is required by
          law. Retention periods may differ for information that becomes part of
          a client engagement.
        </p>
      </section>

      <section>
        <h2>Security</h2>
        <p>
          We use administrative and technical measures intended to protect
          information submitted through the Site, including access controls and
          encrypted transmission over HTTPS. No method of transmission or storage
          is completely secure, so we cannot guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Your choices and rights</h2>
        <p>
          Depending on where you live, you may have rights to access, correct,
          delete, or limit the use of personal information we hold about you. To
          make a request, use the{" "}
          <a href="/contact">contact form</a> and describe the request. We may
          need to verify your identity before responding.
        </p>
        <p>
          You can also ask us to stop sending follow-up communications at any
          time.
        </p>
      </section>

      <section>
        <h2>Children&rsquo;s privacy</h2>
        <p>
          The Site is intended for healthcare business professionals and is not
          directed to children under 13. We do not knowingly collect personal
          information from children through the Site.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The updated
          version will be posted on this page with a new last-updated date.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this Privacy Policy can be sent through the{" "}
          <a href="/contact">contact form</a>.
        </p>
      </section>
    </LegalPage>
  );
}
