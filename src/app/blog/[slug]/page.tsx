import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";

type BlogPostRouteProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      section: post.category,
    },
    twitter: {
      card: "summary",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostRoute({ params }: BlogPostRouteProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const related = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article>
        <header className="border-b border-border bg-bg-secondary">
          <div className="container-x py-12 lg:py-16">
            <div className="max-w-3xl">
              <Breadcrumbs
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.title },
                ]}
              />
              <span className="eyebrow mb-4 block">{post.category}</span>
              <h1 className="text-3xl font-display font-bold text-navy sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-soft">
                {post.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" aria-hidden="true" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="container-x py-12 lg:py-16">
          <div className="max-w-3xl">
            {post.sections.map((section) => (
              <section key={section.heading} className="mb-10 last:mb-0">
                <h2 className="text-2xl font-display font-bold text-navy">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-teal"
                          aria-hidden="true"
                        />
                        <span className="text-ink-soft">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="mt-12 rounded-xl border border-border bg-bg-secondary p-6">
              <p className="text-sm text-ink-soft">
                This article is general information about billing operations. It
                is not legal, compliance, or coding advice, and it does not
                replace payer-specific requirements or professional review.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Back to all articles
              </Link>
              <Link href="/contact" className="btn btn-primary">
                Request a Consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-border bg-bg-secondary">
        <div className="container-x section">
          <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
            Related reading
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="card group flex flex-col"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-blue">
                  {item.category}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-navy transition-colors group-hover:text-blue">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
                <span className="mt-4 text-xs text-muted">{item.readTime}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <JsonLd
        data={articleJsonLd({
          title: post.title,
          description: post.description,
          path: `/blog/${post.slug}`,
          datePublished: post.date,
          category: post.category,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
    </>
  );
}
