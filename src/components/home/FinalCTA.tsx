import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="bg-navy">
      <div className="container-x section">
        <div className="max-w-2xl mx-auto text-center rounded-xl bg-blue p-10 md:p-14">
          <h2 className="mb-4 text-2xl font-display font-bold text-paper sm:text-3xl">
            Request a consultation today
          </h2>
          <p className="mb-8 text-lg text-paper/90">
            Let&rsquo;s review your billing workflow and identify opportunities
            to improve collections and reduce denials.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Request a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
