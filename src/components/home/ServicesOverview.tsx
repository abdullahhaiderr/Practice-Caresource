import Link from "next/link";
import { ArrowUpRight, BadgeCheck, ClipboardList, FileCheck2, FileSearch, HandCoins, ShieldCheck, Stethoscope } from "lucide-react";
import { services } from "@/data/services";

const serviceIcons = [FileCheck2, ClipboardList, Stethoscope, BadgeCheck, HandCoins, ShieldCheck, FileSearch];

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
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return <Link key={service.id} href={service.href} className="group flex min-h-52 flex-col rounded-xl border border-border bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#b8d0d8] hover:shadow-hover">
              <span className="mb-5 grid size-11 place-items-center rounded-xl bg-[#edf5f5] text-teal"><Icon className="size-5" aria-hidden="true" /></span>
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
