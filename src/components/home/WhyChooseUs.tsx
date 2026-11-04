import { BadgeCheck, ChartNoAxesCombined, Headset, Layers3, MessagesSquare, Stethoscope } from "lucide-react";

const reasons = [
  { icon: Headset, title: "A team that stays connected", text: "Clear communication and an accountable point of contact keep day-to-day work moving." },
  { icon: Layers3, title: "Support that fits your workflow", text: "Services can be scoped around your existing team, systems, and operational priorities." },
  { icon: BadgeCheck, title: "Attention to billing detail", text: "A consistent review process helps catch missing information and avoidable errors before submission." },
  { icon: Stethoscope, title: "Specialty-aware operations", text: "Billing support considers the documentation, coding, and payer workflows relevant to your specialty." },
  { icon: ChartNoAxesCombined, title: "Reporting with context", text: "Understand claim activity, receivables, and denial themes with useful operational updates." },
  { icon: MessagesSquare, title: "A practical partnership", text: "We focus on understanding your current process before recommending changes or next steps." },
];

export function WhyChooseUs() {
  return (
    <section>
      <div className="container-x section">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow mb-4 block">Why PracticeCareSource</span>
          <h2 className="mb-5">A billing partner that understands the practice behind the claims.</h2>
          <p className="text-base leading-8">Good billing support is more than processing transactions. It takes consistency, communication, and a clear understanding of how your practice works.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-xl border border-border bg-white p-6">
            <span className="mb-5 grid size-11 place-items-center rounded-xl bg-[#edf5f5] text-teal"><Icon className="size-5" aria-hidden="true" /></span>
            <h3 className="text-lg">{title}</h3><p className="mt-2 text-sm leading-7">{text}</p>
          </article>)}
        </div>
      </div>
    </section>
  );
}
