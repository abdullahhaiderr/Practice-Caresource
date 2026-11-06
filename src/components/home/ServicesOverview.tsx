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
        <div className="overflow-x-auto border-y border-rule">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-rule text-xs uppercase tracking-wider text-muted">
                <th scope="col" className="w-16 py-4 pr-4 font-semibold">No.</th>
                <th scope="col" className="py-4 pr-6 font-semibold">Service</th>
                <th scope="col" className="py-4 pr-6 font-semibold">Scope overview</th>
                <th scope="col" className="py-4 font-semibold"><span className="sr-only">Details</span></th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.id} className="border-b border-rule last:border-b-0">
                  <td className="py-5 pr-4 font-display text-lg text-terracotta">{String(index + 1).padStart(2, "0")}</td>
                  <th scope="row" className="py-5 pr-6 font-semibold text-ink"><Link href={service.href} className="hover:text-pine">{service.title}</Link></th>
                  <td className="py-5 pr-6 text-sm leading-6 text-muted">{service.summary}</td>
                  <td className="py-5 text-right"><Link href={service.href} aria-label={`View ${service.title} details`} className="inline-flex items-center gap-1 text-sm font-semibold text-pine underline underline-offset-4">Details <ArrowUpRight className="size-4" aria-hidden="true" /></Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
