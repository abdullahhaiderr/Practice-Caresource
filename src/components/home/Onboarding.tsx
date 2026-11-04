export function Onboarding() {
  const steps = [
    {
      title: "Initial consultation",
      text: "We discuss your practice, billing challenges, and goals.",
    },
    {
      title: "Practice assessment",
      text: "We review your current billing workflow and payer mix.",
    },
    {
      title: "Scope and workflow planning",
      text: "We define the services and processes that fit your practice.",
    },
    {
      title: "Secure access and documentation",
      text: "We arrange secure access to your systems and records.",
    },
    {
      title: "Service implementation",
      text: "Billing operations begin under a structured workflow.",
    },
    {
      title: "Ongoing support and reporting",
      text: "Continued billing support with regular performance reports.",
    },
  ];

  return (
    <section>
      <div className="container-x section">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Onboarding</span>
          <h2 className="mb-6">How onboarding works</h2>
          <p className="max-w-2xl mx-auto text-lg text-ink-soft">
            A simple, structured transition designed around your practice.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="card">
              <div className="mx-auto mb-4 size-10 rounded-full bg-bg-secondary flex items-center justify-center text-lg font-bold text-navy">
                {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-display font-semibold text-navy">
                {step.title}
              </h3>
              <p className="text-sm text-ink-soft">{step.text}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl mx-auto text-sm text-muted-soft text-center">
          Implementation timing depends on your practice&rsquo;s systems,
          requirements, and agreed scope.
        </p>
      </div>
    </section>
  );
}
