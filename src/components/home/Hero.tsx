import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileCheck2, ShieldCheck, Stethoscope, Activity, CircleDollarSign, ClipboardCheck } from "lucide-react";
import { ctaNav } from "@/config/business";

const capabilities = [
  "Medical billing and claim submission",
  "Credentialing and payer enrollment",
  "Denial follow-up and AR management",
];

const stages = [
  { label: "Claims received", detail: "Ready for review", icon: ClipboardCheck, state: "Complete" },
  { label: "Claim validation", detail: "Coding and payer checks", icon: FileCheck2, state: "In progress" },
  { label: "Payment follow-up", detail: "Tracking next actions", icon: CircleDollarSign, state: "Monitored" },
];

export function Hero() {
  return (
    <section className="hero-shell relative isolate overflow-hidden">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-orb hero-orb-one" aria-hidden="true" />
      <div className="hero-orb hero-orb-two" aria-hidden="true" />
      <div className="container-x relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:min-h-[740px] lg:grid-cols-[.94fr_1.06fr] lg:gap-10 lg:py-24">
        <div className="hero-copy max-w-2xl">
          <div className="hero-kicker mb-7"><span className="hero-kicker-dot" />MEDICAL BILLING &amp; REVENUE CYCLE SUPPORT</div>
          <h1 className="hero-title max-w-[720px]">Your practice deserves <span>revenue clarity.</span></h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Medical billing, credentialing, and revenue cycle support that brings structure to the work behind every claim, so your team can stay focused on patient care.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={ctaNav.href} className="btn btn-primary hero-primary">Talk with our team <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
            <Link href="/services" className="btn btn-outline hero-secondary">Explore our services</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-6 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-teal-300" /> Clear workflows</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-teal-300" /> Responsive communication</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-teal-300" /> Practice-focused support</span>
          </div>
        </div>
        <div className="hero-visual relative mx-auto w-full max-w-[610px]">
          <div className="hero-visual-wash" aria-hidden="true" />
          <div className="hero-ring hero-ring-one" aria-hidden="true" />
          <div className="hero-ring hero-ring-two" aria-hidden="true" />
          <div className="hero-panel relative">
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div><p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">PracticeCareSource / Overview</p><p className="mt-1 font-display text-lg font-bold text-white">Revenue workflow</p></div>
              <span className="grid size-11 place-items-center rounded-xl bg-teal-300/10 text-teal-200"><Stethoscope className="size-5" aria-hidden="true" /></span>
            </div>
            <div className="grid grid-cols-2 gap-3 p-5 sm:p-6">
              <div className="hero-metric"><span className="text-xs text-slate-400">Workflow visibility</span><strong>End to end</strong><small><Activity className="mr-1 inline size-3.5 text-teal-300" /> Connected billing stages</small></div>
              <div className="hero-metric"><span className="text-xs text-slate-400">Support model</span><strong>Practice-first</strong><small><ShieldCheck className="mr-1 inline size-3.5 text-teal-300" /> Built around your needs</small></div>
            </div>
            <div className="space-y-3 px-5 pb-5 sm:px-6 sm:pb-6">
              <div className="mb-2 flex items-center justify-between"><p className="text-sm font-semibold text-white">A clearer path through billing</p><span className="text-[10px] uppercase tracking-wider text-teal-200">Illustrative workflow</span></div>
              {stages.map(({ label, detail, icon: Icon, state }, index) => (
                <div key={label} className="hero-work-row" style={{ animationDelay: `${index * 160}ms` }}>
                  <span className="hero-work-icon"><Icon className="size-5" aria-hidden="true" /></span>
                  <span className="min-w-0 flex-1"><strong>{label}</strong><small>{detail}</small></span>
                  <span className="hero-stage-state">{state}</span>
                </div>
              ))}
            </div>
            <div className="mx-5 mb-5 rounded-xl border border-white/10 bg-white/[.045] px-5 py-4 sm:mx-6 sm:mb-6">
              <p className="text-sm font-semibold text-white">Support shaped around your practice</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">{capabilities.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-5 text-slate-300"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-teal-300" aria-hidden="true" />{item}</li>)}</ul>
            </div>
          </div>
          <div className="hero-note"><span className="hero-note-icon"><ShieldCheck className="size-4" aria-hidden="true" /></span><span><strong>People-first partnership</strong><small>Practical support. Clear communication.</small></span></div>
        </div>
      </div>
      <div className="hero-bottom-fade" aria-hidden="true" />
    </section>
  );
}
