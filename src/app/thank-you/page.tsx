import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for contacting PracticeCareSource. Your consultation request has been received.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you" },
};

export default function ThankYouPage() {
  return (
    <>
      <section className="bg-bg-secondary">
        <div className="container-x flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <div className="grid size-16 place-items-center rounded-full bg-success/10">
            <CheckCircle2 className="size-8 text-success" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-display font-bold text-navy sm:text-4xl">
            Thank you. Your request was received.
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            We review consultation requests and follow up using the business
            contact details you provided. Response timing depends on the details
            and team availability.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className="btn btn-primary">
              Back to home
            </Link>
            <Link href="/blog" className="btn btn-outline">
              Read billing articles
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="mt-8 max-w-md text-sm text-muted">
            If you submitted patient information by mistake, please contact us
            so it can be addressed promptly.
          </p>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Thank You", path: "/thank-you" },
        ])}
      />
    </>
  );
}
