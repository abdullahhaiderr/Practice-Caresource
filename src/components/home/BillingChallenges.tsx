const challenges = [
  { title: "Preventable claim issues", text: "Coding, eligibility, or missing information can send claims back for correction." },
  { title: "Aging receivables", text: "Balances can remain outstanding when payer follow-up is delayed or inconsistent." },
  { title: "Recurring denials", text: "Repeated denial reasons may point to an upstream workflow issue." },
  { title: "Authorization complexity", text: "Payer requirements and approval steps can slow the path to claim payment." },
  { title: "Limited revenue visibility", text: "Scattered updates make it harder to understand what is paid, pending, or outstanding." },
  { title: "Administrative pressure", text: "Billing work competes with the daily responsibilities of a busy practice." },
];

export function BillingChallenges() {
  return (
    <section className="bg-pale-pine" aria-labelledby="challenges-heading">
      <div className="container-x section">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div className="max-w-md">
            <span className="eyebrow mb-4 block">Where billing gets difficult</span>
            <h2 id="challenges-heading" className="mb-5">The work behind every paid claim adds up.</h2>
            <p className="text-base leading-8">Revenue cycle challenges rarely happen in isolation. A delay in one step can create extra work for staff and uncertainty across the billing process.</p>
            <p className="mt-5 text-sm font-semibold text-ink">A more organized process starts by understanding where work is getting stuck.</p>
          </div>
          <ul className="divide-y divide-rule border-y border-rule">
            {challenges.map(({ title, text }, index) => (
              <li key={title} className="grid gap-2 py-5 sm:grid-cols-[2.5rem_1fr] sm:gap-4">
                <span className="font-display text-lg text-terracotta">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="text-lg">{title}</h3><p className="mt-1 text-sm leading-6">{text}</p></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
