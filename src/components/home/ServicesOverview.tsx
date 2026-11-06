import Link from "next/link";
import { ArrowUpRight, BadgeCheck, ClipboardList, FileCheck2, FileSearch, HandCoins, ShieldCheck, Stethoscope, Activity } from "lucide-react";
import { services } from "@/data/services";

const serviceIcons = {\n  "medical-billing": FileCheck2,\n  "revenue-cycle-management": Activity,\n  credentialing: BadgeCheck,\n  "ar-management": HandCoins,\n  "denial-management": ShieldCheck,\n  "medical-coding": ClipboardList,\n  "eligibility-prior-authorization": Stethoscope,\n  "payment-posting-reporting": FileSearch,\n  "medical-billing-audits": ClipboardList,\n} as const;

export function ServicesOverview() {
  return (
    <section>
      <div className="container-x section">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block">Services</span>
            <h2 className="mb-5">Revenue cycle support, connected from start to finish.</h2>
            <p className="max-w-xl text-base leading-8">Choose focused support for a specific challenge or bring more of your billing workflow together with one coordinated partner.</p>
          </div>
          <Link href="/services" className="btn btn-outline w-fit">Explore all services <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.id as keyof typeof serviceIcons] ?? ClipboardList;
            return <Link key={service.id} href={service.href} className="service-overview-card group flex min-h-52 flex-col rounded-xl border border-border bg-white p-6">
              <span className="mb-5 grid size-11 place-items-center rounded-xl bg-pale-pine text-teal"><Icon className="size-5" aria-hidden="true" /></span>
              <h3 className="text-lg tracking-tight group-hover:text-blue">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-6">{service.summary}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue">Learn about this service <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></span>
            </Link>;
          })}
        </div>
      </div>
    </section>
  );
}
