import Link from "next/link";

export function ConsultationCTA() {
  return (
    <section className="bg-bg-secondary">
      <div className="container-x section">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="mb-4 text-2xl font-display font-bold text-navy sm:text-3xl">
            Ready to simplify your billing?
          </h2>
          <p className="mb-8 text-lg text-ink-soft">
            Tell us about your current billing workflow and where it is getting
            stuck. We will follow up to discuss whether our services fit your
            needs.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
