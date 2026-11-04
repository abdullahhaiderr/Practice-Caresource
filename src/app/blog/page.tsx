import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { blogPosts } from "@/data/blog";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Medical Billing Blog",
  description:
    "Practical articles about medical billing, revenue cycle management, coding, denials, credentialing, and accounts receivable for healthcare practices.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Medical Billing Blog | PracticeCareSource",
    description:
      "Practical articles about medical billing, revenue cycle management, coding, denials, credentialing, and accounts receivable.",
    url: "/blog",
  },
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes on medical billing and revenue cycle work"
        description="Plain-language articles for practice teams who want to understand where billing problems start and how to address them."
        breadcrumbs={[{ label: "Blog" }]}
      />

      <section className="section">
        <div className="container-x">
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-xl border border-border bg-bg-secondary p-7 transition-colors hover:border-blue sm:p-10"
            >
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-muted">
                <span className="rounded-full bg-paper px-3 py-1 text-blue">
                  {featured.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-3.5" aria-hidden="true" />
                  {formatDate(featured.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" aria-hidden="true" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="mt-5 max-w-3xl font-display text-2xl font-bold text-navy transition-colors group-hover:text-blue sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">
                {featured.description}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                Read article
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ) : null}

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col"
              >
                <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted">
                  <span className="text-blue">{post.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-2 font-display text-lg font-semibold text-navy transition-colors group-hover:text-blue">
                  {post.title}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {post.description}
                </p>
                <span className="mt-4 text-xs text-muted">
                  {formatDate(post.date)}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 rounded-xl border border-border bg-bg-secondary p-7">
            <h2 className="font-display text-xl font-bold text-navy">
              Looking for a specific topic?
            </h2>
            <p className="mt-2 text-ink-soft">
              If you have a billing question that is not covered here, ask it
              during a consultation. We would rather answer directly than add
              another generic article.
            </p>
            <Link href="/contact" className="btn btn-primary mt-5">
              Ask a question
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
        ])}
      />
    </>
  );
}
