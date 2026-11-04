import Link from "next/link";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Request a consultation",
  description = "Tell us about your practice and current billing workflow. A member of our team will follow up to discuss how we can help.",
  buttonLabel = "Request a Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-bg-secondary border-t border-border">
      <div className="container-x section">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-2xl font-display font-bold text-navy sm:text-3xl">
            {title}
          </h2>
          <p className="mb-8 text-lg text-ink-soft">{description}</p>
          <Link href={buttonHref} className="btn btn-primary">
            {buttonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
