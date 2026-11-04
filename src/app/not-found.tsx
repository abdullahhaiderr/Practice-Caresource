import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, SearchX } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-bg-secondary">
      <div className="container-x flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
        <div className="grid size-16 place-items-center rounded-full bg-paper shadow-card">
          <SearchX className="size-7 text-blue" aria-hidden="true" />
        </div>
        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-blue">
          404 error
        </p>
        <h1 className="mt-2 text-3xl font-display font-bold text-navy sm:text-4xl">
          We could not find that page
        </h1>
        <p className="mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
          The page may have moved, or the address may be incorrect. Here are a few
          places to continue.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/services" className="btn btn-outline">
            Browse services
          </Link>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
          {[
            { label: "Specialties", href: "/specialties" },
            { label: "Blog", href: "/blog" },
            { label: "FAQ", href: "/faq" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 text-ink-soft transition-colors hover:text-blue"
            >
              {link.label}
              <ArrowRight className="size-3.5" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
