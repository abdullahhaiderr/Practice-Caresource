import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How PracticeCareSource uses cookies and similar technologies on this website.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      description="How cookies and similar technologies are used on this website."
      lastUpdated="November 4, 2026"
      breadcrumb="Cookie Policy"
    >
      <p>
        This Cookie Policy explains how practicecaresource.com (the
        &ldquo;Site&rdquo;) uses cookies and similar technologies. It should be
        read together with our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>

      <section>
        <h2>What cookies are</h2>
        <p>
          Cookies are small text files placed on your device by a website. They
          can help a site function, remember preferences, or measure usage.
          Similar technologies include local storage and pixels.
        </p>
      </section>

      <section>
        <h2>Cookies used on this Site</h2>
        <p>
          This Site does not currently use advertising cookies, cross-site
          tracking pixels, or third-party analytics cookies. The Site is designed
          to work without requiring you to accept marketing cookies.
        </p>
        <p>
          Our hosting and security infrastructure may use strictly necessary
          cookies or similar mechanisms to deliver the Site securely, prevent
          abuse, and maintain availability. These are not used to build
          advertising profiles.
        </p>
      </section>

      <section>
        <h2>Contact form</h2>
        <p>
          The consultation form submits information you enter to our server. The
          Site does not use cookies to store the contents of the form. If email
          delivery is configured, your submission is sent to our email delivery
          provider so we can respond to your inquiry.
        </p>
      </section>

      <section>
        <h2>Managing cookies</h2>
        <p>
          You can control or delete cookies through your browser settings. Most
          browsers allow you to block cookies or alert you when a cookie is set.
          Blocking strictly necessary cookies may affect how the Site functions.
        </p>
        <p>
          Because this Site does not currently use advertising or analytics
          cookies, there is no cookie consent banner for those categories. If that
          changes, this policy and the Site will be updated.
        </p>
      </section>

      <section>
        <h2>Third-party services</h2>
        <p>
          The Site may rely on service providers for hosting and email delivery.
          Those providers process data under their own terms and privacy policies.
          We do not permit them to use information from this Site for their own
          advertising.
        </p>
      </section>

      <section>
        <h2>Changes to this policy</h2>
        <p>
          We may update this Cookie Policy if our use of cookies changes. The
          updated version will be posted on this page with a new last-updated
          date.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this Cookie Policy can be sent through the{" "}
          <a href="/contact">contact form</a>.
        </p>
      </section>
    </LegalPage>
  );
}
