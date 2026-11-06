import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";

type CTASectionProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CTASection({
  title = "Request a consultation",
  description = "Tell us about your practice and current billing workflow. A member of our team will follow up to discuss how we can help.",
  buttonLabel = "Request a Consultation",
  buttonHref = "/contact",
}: CTASectionProps) {
  return (
    <section className="bg-pale-pine">
      <div className="container-x py-14 sm:py-16">
        <div className="relative overflow-hidden rounded-lg bg-[#0F1B24] px-6 py-10 sm:px-10 sm:py-12">
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#a8d7d1]"><MessageCircle className="size-4" aria-hidden="true" /> Start a conversation</span>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">{description}</p>
            </div>
            <Link href={buttonHref} className="btn relative w-fit !border-white !bg-white !text-navy hover:!bg-slate-100">{buttonLabel}<ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
          <p className="relative mt-8 border-t border-white/15 pt-5 text-xs text-slate-400">For business inquiries only. Please do not submit patient health information.</p>
        </div>
      </div>
    </section>
  );
}
