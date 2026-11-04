import { BarChart3, LockKeyhole, Workflow } from "lucide-react";

const points = [
  { icon: BarChart3, title: "Reporting that answers questions", text: "Regular visibility into collections, claim status, denial activity, and accounts receivable." },
  { icon: Workflow, title: "Processes that work with your systems", text: "We aim to fit into your established practice-management and billing workflows rather than force an unnecessary reset." },
  { icon: LockKeyhole, title: "Careful information handling", text: "Access, confidentiality, and safeguards are considered as part of the agreed operating process." },
];

export function Technology() {
  return (
    <section>
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div><span className="eyebrow mb-4 block">Visibility and coordination</span><h2 className="mb-5">Useful information. Clear next steps.</h2><p className="text-base leading-8">Your team should not have to guess where claims stand. We emphasize practical reporting and coordinated workflows that make billing activity easier to follow.</p></div>
          <div className="grid gap-4 sm:grid-cols-3">
            {points.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-xl border border-border bg-white p-5"><span className="mb-5 grid size-10 place-items-center rounded-xl bg-[#edf5f5] text-teal"><Icon className="size-5" aria-hidden="true" /></span><h3 className="text-base">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p></article>)}
          </div>
        </div>
      </div>
    </section>
  );
}
