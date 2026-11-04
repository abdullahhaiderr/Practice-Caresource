export function WhyChooseUs() {
  const reasons = [
    {
      title: "Dedicated billing support",
      text: "A named billing lead responsible for your account.",
    },
    {
      title: "Structured workflows",
      text: "Defined processes for every stage of the revenue cycle.",
    },
    {
      title: "Billing accuracy",
      text: "Focus on clean claims and correct coding.",
    },
    {
      title: "Transparent communication",
      text: "Clear reporting and open lines of communication.",
    },
    {
      title: "Specialty-aware processes",
      text: "Billing workflows aligned to your practice specialty.",
    },
    {
      title: "Reporting and visibility",
      text: "Regular insight into collections, denials, and AR.",
    },
  ];

  return (
    <section>
      <div className="container-x section">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Why PracticeCareSource</span>
          <h2 className="mb-6">Built for healthcare practices</h2>
          <p className="max-w-2xl mx-auto text-lg text-ink-soft">
            We focus on reliability, accuracy, and clear communication so you
            can focus on patient care.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title} className="card">
              <h3 className="mb-2 text-lg font-display font-semibold text-navy">
                {reason.title}
              </h3>
              <p className="text-sm text-ink-soft">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
