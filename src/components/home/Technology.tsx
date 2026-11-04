import { BarChart3, BrainCircuit, LockKeyhole, Sparkles, Workflow } from "lucide-react";

const points = [
  { icon: BarChart3, title: "Reporting that answers questions", text: "Practical visibility into claim status, denial activity, collections, and accounts receivable." },
  { icon: Workflow, title: "Workflows that fit your systems", text: "Coordinated processes designed around your existing practice management and billing tools." },
  { icon: BrainCircuit, title: "AI-assisted operational insight", text: "We explore responsible AI and automation to help organize information, surface patterns, and reduce repetitive administrative work, with human review where it matters." },
];

export function Technology() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f3f9fa_0%,#ffffff_55%,#eef7f7_100%)]">
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <span className="eyebrow mb-4 block">Technology with a purpose</span>
            <h2 className="mb-5">Smarter operations, supported by people and technology.</h2>
            <p className="text-base leading-8">We are building a modern service model that combines experienced operational support with carefully selected automation and AI capabilities. Technology should make work clearer, not replace sound judgment or personal service.</p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal/20 bg-white/80 px-4 py-2 text-sm font-semibold text-teal shadow-sm"><Sparkles className="size-4" /> Human-led. Technology-enabled.</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {points.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl border border-white/80 bg-white/75 p-5 shadow-[0_18px_50px_-35px_rgba(23,59,86,.28)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-soft"><span className="mb-5 grid size-10 place-items-center rounded-xl bg-[#edf5f5] text-teal"><Icon className="size-5" aria-hidden="true" /></span><h3 className="text-base">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
