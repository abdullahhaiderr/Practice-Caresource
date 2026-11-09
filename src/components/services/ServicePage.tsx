import Link from "next/link";
import { ArrowRight, BadgeCheck, Banknote, Check, ChevronRight, Code2, FileSearch, Megaphone, ReceiptText, ShieldAlert, ShieldCheck, UsersRound, Wallet, Workflow } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { JsonLd } from "@/components/shared/JsonLd";
import { serviceDetails, type ServiceDetail } from "@/data/service-details";
import { serviceJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { ctaNav } from "@/config/business";

const serviceIcons: Record<string, typeof ReceiptText> = {
  "medical-billing": ReceiptText,
  "medical-coding": Code2,
  "revenue-cycle-management": Workflow,
  credentialing: BadgeCheck,
  "ar-management": Wallet,
  "denial-management": ShieldAlert,
  "eligibility-prior-authorization": ShieldCheck,
  "payment-posting-reporting": Banknote,
  "medical-billing-audits": FileSearch,
  "virtual-assistant": UsersRound,
  "marketing-digital-presence": Megaphone,
};

export function ServicePage({ service }: { service: ServiceDetail }) {
  const related = service.related
    .map((id) => serviceDetails.find((item) => item.id === id))
    .filter((item): item is ServiceDetail => Boolean(item));

  const otherServices = serviceDetails.filter((item) => item.id !== service.id);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={service.title}
        description={service.summary}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16">
            <div className="min-w-0">
              <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-14">
                <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
                  What we handle
                </h2>
                <p className="mt-3 text-ink-soft">
                  The scope for each practice is agreed before work begins. These
                  are the tasks typically included in this service.
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {service.whatWeHandle.map((item) => (
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
                  How this service works
                </h2>
                <p className="mt-3 text-ink-soft">
                  A clear sequence keeps work moving and makes it easier to spot
                  where a claim needs attention.
                </p>
                <ol className="mt-8 space-y-4">
                  {service.process.map((step, index) => (
                    <li
                      key={step.title}
                      className="relative rounded-xl border border-border bg-paper p-6 pl-16"
                    >
                      <span
                        className="absolute left-5 top-6 grid size-8 place-items-center rounded-full bg-navy font-display text-sm font-bold text-white"
                        aria-hidden="true"
                      >
                        {index + 1}
                      </span>
                      <h3 className="font-display text-lg font-semibold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {step.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-14 rounded-xl border border-border bg-bg-secondary p-7 sm:p-9">
                <div className="flex items-start gap-4">
                  <ShieldCheck
                    className="mt-1 size-6 shrink-0 text-teal"
                    aria-hidden="true"
                  />
                  <div>
                    <h2 className="font-display text-xl font-bold text-navy">
                      Why it matters
                    </h2>
                    <p className="mt-3 leading-relaxed text-ink-soft">
                      {service.whyItMatters}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-border bg-paper p-6 shadow-card">
                <h2 className="font-display text-lg font-bold text-navy">
                  Discuss your billing workflow
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Tell us what is happening in your practice. We will follow up to
                  talk through scope and next steps.
                </p>
                <Link href={ctaNav.href} className="btn btn-primary mt-5 w-full">
                  {ctaNav.label}
                </Link>
                <Link
                  href="/how-it-works"
                  className="mt-4 flex items-center justify-center gap-1.5 text-sm font-medium text-blue hover:text-blue-dark"
                >
                  See how onboarding works
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>

              <nav
                aria-label="Other services"
                className="mt-6 rounded-xl border border-border bg-bg-secondary p-6"
              >
                <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-navy">
                  Other services
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {otherServices.map((item) => (
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

      {related.length > 0 ? (
        <section className="border-t border-border bg-bg-secondary">
          <div className="container-x section">
            <h2 className="text-2xl font-display font-bold text-navy sm:text-3xl">
              Related services
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => {
                const Icon = serviceIcons[item.id] ?? ReceiptText;
                return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="card group flex flex-col"
                >
                  <span className="card-icon mb-4"><Icon aria-hidden="true" /></span>
                  <h3 className="font-display text-lg font-semibold text-navy group-hover:text-blue transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                    {item.summary}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue">
                    Learn more
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <CTASection
        title={`Talk to us about ${service.title.toLowerCase()}`}
        description="Share a few details about your practice and current billing process. We will follow up to discuss whether our services fit your needs."
      />

      <JsonLd
        data={serviceJsonLd({
          name: service.title,
          description: service.summary,
          path: service.href,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: service.href },
        ])}
      />
    </>
  );
}
