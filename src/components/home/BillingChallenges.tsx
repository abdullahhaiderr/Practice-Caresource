import { AlertCircle, Clock3, FileWarning, ClipboardList, Eye, Users } from "lucide-react";

const challenges = [
  { icon: FileWarning, title: "Preventable claim issues", text: "Coding, eligibility, or missing information can send claims back for correction." },
  { icon: Clock3, title: "Aging receivables", text: "Unworked balances can sit too long without consistent payer follow-up." },
  { icon: AlertCircle, title: "Denials that repeat", text: "Without root-cause review, the same denial patterns can return month after month." },
  { icon: ClipboardList, title: "Authorization complexity", text: "Payer requirements and approval steps can slow down the path to reimbursement." },
  { icon: Eye, title: "Limited revenue visibility", text: "Scattered updates make it harder to understand what is paid, pending, or at risk." },
  { icon: Users, title: "Administrative pressure", text: "A busy front office may struggle to balance billing tasks with daily patient needs." },
];

export function BillingChallenges() {
  return (
    <section className="bg-bg-secondary">
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="max-w-md">
            <span className="eyebrow mb-4 block">Where billing gets difficult</span>
            <h2 className="mb-5">The work behind every paid claim adds up.</h2>
            <p className="text-base leading-8">Revenue cycle challenges rarely happen in isolation. A delay in one step can create extra work for your staff and uncertainty across the billing process.</p>
            <p className="mt-5 text-sm font-semibold text-navy">A more organized process starts by understanding where work is getting stuck.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {challenges.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card">
                <span className="card-icon mb-4"><Icon className="size-5" aria-hidden="true" /></span>
                <h3 className="text-base tracking-tight">{title}</h3><p className="mt-2 text-sm leading-6">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
