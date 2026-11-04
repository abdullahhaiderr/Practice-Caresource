import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  HelpCircle,
  ListChecks,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { blogPosts } from "@/data/blog";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Medical billing articles, frequently asked questions, onboarding details, and security information from PracticeCareSource.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | PracticeCareSource",
    description:
      "Medical billing articles, FAQs, onboarding details, and security information for healthcare practices.",
    url: "/resources",
  },
};

const resourceCards = [
  {
    icon: BookOpen,
    title: "Blog",
    description:
      "Plain-language articles about medical billing, coding, denials, AR, credentialing, and billing workflows.",
    href: "/blog",
    label: "Read the blog",
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description:
      "Answers to common questions about services, pricing discussions, onboarding, reporting, and data security.",
    href: "/faq",
    label: "Browse the FAQ",
  },
  {
    icon: ListChecks,
    title: "How It Works",
    description:
      "The path from initial consultation through onboarding, implementation, and ongoing support.",
    href: "/how-it-works",
    label: "See the process",
  },
  {
    icon: Sparkles,
    title: "Why Choose Us",
    description:
      "How we approach scope, reporting, denials, security, and honest communication about outcomes.",
    href: "/why-choose-us",
    label: "Read our approach",
  },
  {
    icon: ShieldCheck,
    title: "HIPAA & Security",
    description:
      "Our approach to protected health information, access controls, and Business Associate Agreements.",
    href: "/hipaa-security",
    label: "Review security",
  },
];

export default function ResourcesPage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Practical information for practice teams"
        description="Articles and answers written for the people who manage billing, coding, denials, and revenue cycle work inside a healthcare practice."
        breadcrumbs={[{ label: "Resources" }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {resourceCards.map((card) => (
              <Link key={card.href} href={card.href} className="card group">
                <card.icon
                  className="size-6 text-teal"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
                <h2 className="mt-4 font-display text-lg font-semibold text-navy transition-colors group-hover:text-blue">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {card.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                  {card.label}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                Recent articles
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
              >
                All articles
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card group flex flex-col"
                >
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                    {post.category}
                  </span>
                  <h3 className="mt-2 font-display text-lg font-semibold text-navy transition-colors group-hover:text-blue">
                    {post.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {post.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    Read article
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
        ])}
      />
    </>
  );
}
