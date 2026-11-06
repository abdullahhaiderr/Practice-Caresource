import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const points = [
  { title: "Start with the current workflow", text: "The initial discussion should establish how billing is handled today and where support may be useful." },
  { title: "Agree on responsibilities", text: "Services, system requirements, handoffs, and reporting are documented before any work begins." },
  { title: "Keep decisions transparent", text: "Payer outcomes, timing, and scope limits are discussed without promising results outside the provider's control." },
];

export function PracticeApproach() {
  return (
    <section aria-labelledby="approach-heading">
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div className="max-w-md">
            <span className="eyebrow mb-4 block">Working approach</span>
            <h2 id="approach-heading">Clear expectations from the first conversation.</h2>
            <p className="mt-4 leading-7">A service relationship should begin with a shared understanding of the work, not assumptions about what is included.</p>
            <Link href="/how-it-works" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-pine underline underline-offset-4">Read about the process <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
          <ol className="divide-y divide-rule border-y border-rule">
            {points.map((point, index) => (
              <li key={point.title} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr] sm:gap-5">
                <span className="font-display text-2xl text-terracotta">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{point.title}</h3><p className="mt-2 text-sm leading-7">{point.text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
