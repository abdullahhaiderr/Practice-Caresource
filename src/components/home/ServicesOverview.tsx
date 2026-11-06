import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section aria-labelledby="services-heading">
      <div className="container-x section">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block">Services</span>
            <h2 id="services-heading" className="mb-5">Revenue cycle support, organized around the work.</h2>
            <p className="max-w-2xl text-base leading-8">Explore the billing functions that may be included in an engagement. Availability and responsibilities are confirmed in writing before work begins.</p>
          </div>
          <Link href="/services" className="btn btn-outline w-fit">View service details <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </div>
        <div className="border-y border-rule">
          {services.map((service, index) => (
            <Link key={service.id} href={service.href} className="group grid gap-2 border-b border-rule py-5 last:border-b-0 sm:grid-cols-[3rem_minmax(12rem,.75fr)_1.25fr_auto] sm:items-center sm:gap-5">
              <span className="font-display text-lg text-terracotta">{String(index + 1).padStart(2, "0")}</span>
              <span className="font-semibold text-ink group-hover:text-pine">{service.title}</span>
              <span className="text-sm leading-6 text-muted">{service.summary}</span>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-pine">Details <ArrowUpRight className="size-4" aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
