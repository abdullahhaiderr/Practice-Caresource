import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileCheck2, ShieldCheck, Stethoscope } from "lucide-react";
import { ctaNav } from "@/config/business";

const capabilities = [
  "Medical billing and claim submission",
  "Credentialing and payer enrollment",
  "Denial follow-up and AR management",
];

export function Hero() {
  return (
    <section className="hero-shell relative overflow-hidden">
      <div className="container-x relative z-10 grid items-center gap-14 py-16 sm:py-20 lg:min-h-[650px] lg:grid-cols-[1.04fr_.96fr] lg:gap-16 lg:py-24">
        <div className="max-w-2xl">
          <div className="hero-kicker mb-7">
            <span className="hero-kicker-dot" />
            MEDICAL BILLING &amp; REVENUE CYCLE SUPPORT
          </div>
          <h1 className="hero-title max-w-[680px]">
            More clarity in billing. <span>More room to care.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            A dependable billing partner for healthcare practices. We help bring structure to claims, credentialing, and follow-up so your team can stay focused on patients.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={ctaNav.href} className="btn btn-primary hero-primary">
              Talk with our team <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="btn btn-outline hero-secondary">
              Explore our services
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-teal" /> Clear workflows</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-teal" /> Responsive communication</span>
            <span className="inline-flex items-center gap-2"><CheckCircle2 className="size-4 text-teal" /> Practice-focused support</span>
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-[540px]">
          <div className="hero-visual-wash" aria-hidden="true" />
          <div className="hero-panel relative">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-slate-400">Your revenue cycle</p>
                <p className="mt-1 font-display text-lg font-bold text-navy">A clearer picture, step by step</p>
              </div>
              <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue"><Stethoscope className="size-5" /></span>
            </div>
            <div className="space-y-3 p-5 sm:p-6">
              <div className="hero-work-row">
                <span className="hero-work-icon"><FileCheck2 className="size-5" /></span>
                <span className="min-w-0 flex-1"><strong>Claims &amp; billing</strong><small>Preparation, submission and tracking</small></span>
                <span className="hero-step">01</span>
              </div>
              <div className="hero-work-row">
                <span className="hero-work-icon"><ShieldCheck className="size-5" /></span>
                <span className="min-w-0 flex-1"><strong>Credentialing</strong><small>Enrollment and payer follow-up</small></span>
                <span className="hero-step">02</span>
              </div>
              <div className="hero-work-row">
                <span className="hero-work-icon"><CheckCircle2 className="size-5" /></span>
                <span className="min-w-0 flex-1"><strong>Denials &amp; receivables</strong><small>Review, follow-up and reporting</small></span>
                <span className="hero-step">03</span>
              </div>
            </div>
            <div className="mx-5 mb-5 rounded-xl bg-slate-50 px-5 py-4 sm:mx-6 sm:mb-6">
              <p className="text-sm font-semibold text-navy">Support shaped around your practice</p>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {capabilities.map((item) => <li key={item} className="flex items-start gap-2 text-xs leading-5 text-slate-600"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-teal" />{item}</li>)}
              </ul>
            </div>
          </div>
          <div className="hero-note"><span className="hero-note-icon"><ShieldCheck className="size-4" /></span><span><strong>People-first partnership</strong><small>Practical support. Clear communication.</small></span></div>
        </div>
      </div>
    </section>
  );
}
