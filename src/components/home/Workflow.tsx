import { ArrowRight, ClipboardCheck, FileCheck2, FileSearch, HandCoins, ListChecks, RefreshCw } from "lucide-react";

const steps = [
  { step: "01", title: "Capture and review", text: "Charges and supporting details are reviewed for completeness.", icon: ClipboardCheck },
  { step: "02", title: "Code and prepare", text: "Claims are prepared with attention to coding and payer requirements.", icon: ListChecks },
  { step: "03", title: "Submit and track", text: "Claims are sent through the appropriate channels and monitored.", icon: FileCheck2 },
  { step: "04", title: "Post and reconcile", text: "Payments and adjustments are posted and reviewed against remittances.", icon: HandCoins },
  { step: "05", title: "Resolve exceptions", text: "Rejections and denials are investigated and routed for follow-up.", icon: FileSearch },
  { step: "06", title: "Review performance", text: "Receivables and billing activity are reviewed to guide next steps.", icon: RefreshCw },
];

export function Workflow() {
  return (
    <section className="bg-[#173b55]">
      <div className="container-x section">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow mb-4 block !text-[#bfdbfe]">How the work moves</span>
          <h2 className="mb-5 !text-white">A clear process for every stage of the claim.</h2>
          <p className="!text-slate-300">From the first review through payment and follow-up, each step has a purpose and a next action.</p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/15 bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ step, title, text, icon: Icon }) => (
            <article key={step} className="bg-[#1b465f] p-6 sm:p-7">
              <div className="mb-7 flex items-center justify-between"><span className="text-xs font-bold tracking-[.18em] text-[#93c5fd]">{step}</span><Icon className="size-5 text-[#93c5fd]" aria-hidden="true" /></div>
              <h3 className="text-lg !text-white">{title}</h3><p className="mt-2 text-sm leading-6 !text-slate-300">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-center text-sm text-slate-300"><ArrowRight className="size-4 text-[#93c5fd]" aria-hidden="true" /> Workflows are adapted to your practice, systems, and agreed scope.</p>
      </div>
    </section>
  );
}
