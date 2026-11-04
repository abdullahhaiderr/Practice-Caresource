import type { ReactNode } from "react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { JsonLd } from "@/components/shared/JsonLd";
import { breadcrumbJsonLd } from "@/lib/seo";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

export function LegalPage({
  title,
  description,
  lastUpdated,
  breadcrumb,
  children,
}: {
  title: string;
  description: string;
  lastUpdated: string;
  breadcrumb: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={title}
        description={description}
        breadcrumbs={[{ label: breadcrumb }]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <nav aria-label="Legal pages">
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-navy">
                  Legal pages
                </h2>
                <ul className="mt-4 space-y-2 border-l border-border pl-4">
                  {legalLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-sm transition-colors hover:text-blue ${
                          link.href === `/${breadcrumb.toLowerCase().replace(/\s+/g, "-")}`
                            ? "font-semibold text-navy"
                            : "text-ink-soft"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="mt-6 text-xs text-muted">Last updated: {lastUpdated}</p>
              <div className="mt-6 rounded-lg border border-border bg-bg-secondary p-4">
                <p className="text-xs leading-relaxed text-ink-soft">
                  Questions about this policy can be sent through the{" "}
                  <Link href="/contact" className="font-medium text-blue underline underline-offset-2">
                    contact form
                  </Link>
                  .
                </p>
              </div>
            </aside>

            <div className="min-w-0 max-w-3xl">
              <div className="space-y-8 text-ink-soft [&_a]:text-blue [&_a]:underline [&_a]:underline-offset-2 [&_h2]:scroll-mt-28 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-navy [&_h3]:font-display [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-navy [&_li]:leading-relaxed [&_p]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
                {children}
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: breadcrumb, path: `/${breadcrumb.toLowerCase().replace(/\s+/g, "-")}` },
        ])}
      />
    </>
  );
}
