import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the PracticeCareSource website and submitting business inquiries.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms and Conditions"
      description="The terms that apply to your use of this website and its content."
      lastUpdated="November 7, 2026"
      breadcrumb="Terms and Conditions"
    >
      <p>
        These Terms and Conditions (&ldquo;Terms&rdquo;) describe the intended rules for
        using the PracticeCareSource website (&ldquo;Site&rdquo;). The operating
        legal entity and governing jurisdiction have not been published here.
        This page is an informational draft and must be reviewed and completed
        by qualified counsel before it is relied upon as a binding legal notice.
      </p>

      <section>
        <h2>Website purpose</h2>
        <p>
          The Site provides general information about medical billing, coding,
          credentialing, and revenue cycle services. It allows healthcare
          practices to submit business inquiries. The Site is not a patient
          portal and must not be used to submit protected health information.
        </p>
      </section>

      <section>
        <h2>No professional advice</h2>
        <p>
          Content on the Site is general information. It is not medical, legal,
          compliance, coding, or financial advice, and it does not create a
          professional relationship. Payer requirements and regulations change;
          verify information against current official sources and your own
          compliance review before relying on it.
        </p>
      </section>

      <section>
        <h2>No client relationship</h2>
        <p>
          Submitting the consultation form or contacting us does not create a
          client relationship. A client relationship begins only when both parties
          sign a written agreement that defines the scope of services.
        </p>
      </section>

      <section>
        <h2>No guarantees</h2>
        <p>
          We do not guarantee specific billing results, revenue increases, payer
          decisions, enrollment timelines, or claim outcomes. Payer behavior,
          documentation quality, patient volume, and other factors outside our
          control affect results. Any examples or descriptions on the Site are
          illustrative and are not promises of a particular outcome.
        </p>
      </section>

      <section>
        <h2>Acceptable use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Submit patient health information through the Site.</li>
          <li>Use the Site for unlawful, fraudulent, or abusive purposes.</li>
          <li>Attempt to gain unauthorized access to the Site or its systems.</li>
          <li>Interfere with the Site&rsquo;s operation or security features.</li>
          <li>Scrape, copy, or republish Site content without permission.</li>
        </ul>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          Site materials may be protected by intellectual property laws. Do not
          reproduce or republish website materials without permission from the
          relevant rights holder.
        </p>
      </section>

      <section>
        <h2>Third-party links</h2>
        <p>
          The Site may link to third-party websites. We do not control those
          sites and are not responsible for their content, policies, or
          practices. Following a third-party link is at your own discretion.
        </p>
      </section>

      <section>
        <h2>Disclaimer of warranties</h2>
        <p>
          The Site is provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. To the extent permitted by law, we disclaim all
          warranties, express or implied, including warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that the Site will be uninterrupted,
          error-free, or free of harmful components.
        </p>
      </section>

      <section>
        <h2>Limitation of liability</h2>
        <p>
          To the extent permitted by law, PracticeCareSource and its officers,
          employees, and contractors will not be liable for indirect, incidental,
          special, consequential, or punitive damages arising from your use of the
          Site, including lost profits or data, even if advised of the possibility
          of such damages. Nothing in these Terms limits liability that cannot be
          limited under applicable law.
        </p>
      </section>

      <section>
        <h2>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless PracticeCareSource from claims,
          losses, and expenses arising from your violation of these Terms or your
          misuse of the Site, to the extent permitted by law.
        </p>
      </section>

      <section>
        <h2>Governing law</h2>
        <p>
          The governing law, venue, and dispute process have not been specified
          because the operating legal entity and jurisdiction have not been
          confirmed for publication. Qualified counsel should complete this
          section before launch.
        </p>
      </section>

      <section>
        <h2>Changes to these Terms</h2>
        <p>
          We may update these Terms from time to time. The updated version will be
          posted on this page with a new last-updated date. Continued use of the
          Site after changes are posted means you accept the updated Terms.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these Terms can be sent through the{" "}
          <a href="/contact">contact form</a>.
        </p>
      </section>
    </LegalPage>
  );
}
