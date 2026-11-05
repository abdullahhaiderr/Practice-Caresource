import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function ConsultationCTA() {
  return (
    <section className="border-b border-border bg-white">
      <div className="container-x py-5 sm:py-6">
        <div className="consultation-cta-card flex flex-col gap-4 rounded-xl border border-[#dce8eb] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-lg bg-white text-teal shadow-card"><MessageCircle className="size-5" aria-hidden="true" /></span>
            <div><h2 className="text-base font-bold tracking-tight text-navy">Not sure where to start?</h2><p className="mt-1 text-sm leading-6 text-ink-soft">Tell us what is happening in your billing workflow. We’ll help you identify a sensible next step.</p></div>
          </div>
          <Link href="/contact" className="btn btn-primary shrink-0">Talk with our team <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
