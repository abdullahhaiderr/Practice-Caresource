import Link from "next/link";
import { ArrowRight, Check, ChevronRight, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { serviceDetails } from "@/data/service-details";
import { specialtyDetails, type SpecialtyDetail } from "@/data/specialty-details";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ctaNav } from "@/config/business";

export function SpecialtyPage({ specialty }: { specialty: SpecialtyDetail }) {
  const otherSpecialties = specialtyDetails.filter(
    (item) => item.id !== specialty.id,
  );

  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title={`${specialty.title} Billing Support`}
        description={specialty.summary}
        breadcrumbs={[
          { label: "Specialties", href: "/specialties" },
          { label: specialty.title },
        ]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="min-w-0">
              <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                {specialty.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-14">
                <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                  Billing focus areas
                </h2>
                <p className="mt-3 text-ink-soft">
                  These are the coding and billing areas that come up most often
                  in this specialty.
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {specialty.billingFocus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-border bg-paper p-4"
                    >
                      <Check
                        className="mt-0.5 size-5 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                  Common billing challenges
                </h2>
                <p className="mt-3 text-ink-soft">
                  These are frequent pressure points. Not every practice
                  experiences all of them, but they are worth reviewing.
                </p>
                <ul className="mt-7 space-y-3">
                  {specialty.commonChallenges.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-border bg-bg-secondary p-4"
                    >
                      <AlertCircle
                        className="mt-0.5 size-5 shrink-0 text-muted"
                        aria-hidden="true"
                      />
                      <span className="text-sm text-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14">
                <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                  How we help
                </h2>
                <p className="mt-3 text-ink-soft">
                  Support is adapted to the way your practice actually works. The
                  scope is agreed before work begins.
                </p>
                <ol className="mt-8 space-y-4">
                  {specialty.howWeHelp.map((item, index) => (
                    <li
                      key={item}
                      className="relative rounded-xl border border-border bg-paper p-6 pl-16"
                    >
                      <span
                        className="absolute left-5 top-6 grid size-8 place-items-center rounded-full bg-teal font-display text-sm font-bold text-white"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <p className="text-sm leading-relaxed text-ink-soft">
                        {item}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-border bg-paper p-6 shadow-card">
                <h2 className="font-display text-lg font-bold text-navy">
                  Talk about your specialty
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Every specialty has its own coding and payer pressure points.
                  Tell us where yours is getting stuck.
                </p>
                <Link href={ctaNav.href} className="btn btn-primary mt-5 w-full">
                  {ctaNav.label}
                </Link>
              </div>

              <nav
                aria-label="Related services"
                className="mt-6 rounded-xl border border-border bg-bg-secondary p-6"
              >
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-navy">
                  Related services
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {serviceDetails.slice(0, 5).map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-2 text-sm text-ink-soft transition-colors hover:text-blue"
                      >
                        {item.title}
                        <ChevronRight
                          className="size-3.5 shrink-0 text-muted-soft transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <nav
                aria-label="Other specialties"
                className="mt-6 rounded-xl border border-border bg-bg-secondary p-6"
              >
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-navy">
                  Other specialties
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {otherSpecialties.slice(0, 6).map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        className="group flex items-center justify-between gap-2 text-sm text-ink-soft transition-colors hover:text-blue"
                      >
                        {item.title}
                        <ChevronRight
                          className="size-3.5 shrink-0 text-muted-soft transition-transform group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-bg-secondary">
        <div className="container-x section">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                Explore other specialties
              </h2>
              <p className="mt-2 text-ink-soft">
                Billing support shaped around the way each specialty documents
                and bills care.
              </p>
            </div>
            <Link
              href="/specialties"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue"
            >
              All specialties
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherSpecialties.slice(0, 6).map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="card group"
              >
                <h3 className="font-display font-semibold text-navy group-hover:text-blue transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Medical billing support for ${specialty.title.toLowerCase()}`}
        description="Tell us about your practice, your payer mix, and the billing tasks that need attention. We will follow up to discuss next steps."
      />

      <JsonLd
        data={serviceJsonLd({
          name: `${specialty.title} Medical Billing`,
          description: specialty.summary,
          path: specialty.href,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Specialties", path: "/specialties" },
          { name: specialty.title, path: specialty.href },
        ])}
      />
    </>
  );
}
