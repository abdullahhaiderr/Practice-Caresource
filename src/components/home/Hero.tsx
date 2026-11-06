import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ClipboardList, FileCheck2, WalletCards } from "lucide-react";
import { ctaNav } from "@/config/business";

const workAreas = [
  { title: "Claims and billing", detail: "Organized submission and follow-up workflows", icon: FileCheck2 },
  { title: "Revenue cycle support", detail: "A clearer view of outstanding billing work", icon: WalletCards },
  { title: "Practice coordination", detail: "Defined tasks, communication and next steps", icon: ClipboardList },
];

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden">
      <div className="container-x grid items-center gap-12 py-16 sm:py-20 lg:min-h-[660px] lg:grid-cols-[1.08fr_.92fr] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-6">Medical billing and revenue cycle support</p>
          <h1 className="hero-title">
            Clearer billing workflows for <span>healthcare practices.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-ink-soft sm:text-lg">
            PracticeCareSource supports the operational work behind medical billing, from claims and credentialing to accounts receivable follow-up. Tell us how your practice works and where you need support.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={ctaNav.href} className="btn btn-primary">
              Request a consultation <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn btn-outline">Explore services</Link>
          </div>
          <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6 text-sm text-ink-soft">
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-pine" aria-hidden="true" /> Practice-focused support</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-pine" aria-hidden="true" /> Clear communication</li>
            <li className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-pine" aria-hidden="true" /> Defined workflows</li>
          </ul>
        </div>
        <div className="relative">
          <div className="hero-workflow border border-rule bg-surface p-6 sm:p-8">
            <div className="border-b border-rule pb-5">
              <p className="text-xs font-semibold uppercase tracking-[.12em] text-muted">How the work is organized</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">A practical view of billing support</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-muted">The exact scope is agreed with each practice before work begins.</p>
            </div>
            <ol className="mt-2 divide-y divide-rule">
              {workAreas.map(({ title, detail, icon: Icon }, index) => (
                <li key={title} className="flex items-start gap-4 py-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-pale-pine text-pine">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-terracotta">0{index + 1}</span>
                    <strong className="mt-1 block text-base text-ink">{title}</strong>
                    <span className="mt-1 block text-sm leading-6 text-muted">{detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-4 text-xs leading-5 text-muted">Service availability and responsibilities are confirmed during the initial discussion.</p>
        </div>
      </div>
    </section>
  );
}
