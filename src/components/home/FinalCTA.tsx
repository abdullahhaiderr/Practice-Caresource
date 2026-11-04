import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-[#f2f7f8]">
      <div className="container-x py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-2xl bg-[#173b55] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full border border-white/10" aria-hidden="true" />
          <div className="pointer-events-none absolute -right-8 -top-12 size-56 rounded-full border border-white/10" aria-hidden="true" />
          <span className="relative mx-auto mb-5 grid size-12 place-items-center rounded-xl bg-white/10 text-[#b7ded8]"><MessageCircle className="size-6" aria-hidden="true" /></span>
          <h2 className="relative mx-auto mb-5 max-w-2xl !text-white">Let’s make your billing workflow easier to manage.</h2>
          <p className="relative mx-auto mb-8 max-w-xl !text-slate-300">Tell us about your practice and the support you are looking for. We’ll start with a conversation about your needs and current process.</p>
          <Link href="/contact" className="btn relative btn-primary !border-white !bg-white !text-navy hover:!bg-slate-100">Request a consultation <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          <p className="relative mt-5 text-xs !text-slate-400">For business inquiries only. Please do not submit patient health information.</p>
        </div>
      </div>
    </section>
  );
}
