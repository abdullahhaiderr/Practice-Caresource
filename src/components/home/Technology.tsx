export function Technology() {
  const points = [
    {
      title: "Structured reporting",
      text: "Regular insight into collections, denials, and AR aging.",
    },
    {
      title: "Payer-specific workflows",
      text: "Billing processes aligned to each payer\u2019s requirements.",
    },
    {
      title: "Secure information handling",
      text: "Protected health information handled with appropriate safeguards.",
    },
  ];

  return (
    <section className="bg-bg-secondary">
      <div className="container-x section">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Technology and Reporting</span>
          <h2 className="mb-6">Transparent, structured billing support</h2>
          <p className="max-w-2xl mx-auto text-lg text-ink-soft">
            Clear reporting and defined processes give you visibility into your
            revenue cycle.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {points.map((point) => (
            <div key={point.title} className="text-center">
              <h3 className="mb-2 text-lg font-display font-semibold text-navy">
                {point.title}
              </h3>
              <p className="text-sm text-ink-soft">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
