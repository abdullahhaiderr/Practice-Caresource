const steps = [
  { step: "01", title: "Review", text: "Understand the practice's current billing workflow and agree on the scope." },
  { step: "02", title: "Prepare", text: "Confirm responsibilities, required information, and the agreed working process." },
  { step: "03", title: "Process", text: "Complete the billing tasks included in the written service scope." },
  { step: "04", title: "Follow up", text: "Track outstanding items and handle exceptions within the agreed responsibilities." },
  { step: "05", title: "Report", text: "Review activity and outstanding work using the agreed reporting approach." },
];

export function Workflow() {
  return (
    <section className="bg-deep-ink" aria-labelledby="workflow-heading">
      <div className="container-x section">
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow mb-4 block !text-[#C9DDD5]">How the work moves</span>
          <h2 id="workflow-heading" className="mb-5 !text-white">A practical process, agreed before work begins.</h2>
          <p className="!text-white/75">The exact tasks, access requirements, handoffs, and reporting are defined with each practice rather than assumed.</p>
        </div>
        <ol className="grid gap-0 border-y border-white/20 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map(({ step, title, text }, index) => (
            <li key={step} className="relative border-b border-white/20 py-6 sm:border-r sm:px-5 sm:first:pl-0 sm:last:border-r-0 lg:border-b-0">
              <span className="font-display text-2xl text-terracotta">{step}</span>
              <h3 className="mt-4 text-lg !text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 !text-white/75">{text}</p>
              {index < steps.length - 1 ? <span className="sr-only">Then</span> : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
