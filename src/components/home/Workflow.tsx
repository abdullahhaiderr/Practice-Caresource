export function Workflow() {
  const steps = [
    {
      step: "1",
      title: "Charge entry",
      text: "Accurate capture of charges and patient information.",
    },
    {
      step: "2",
      title: "Claim preparation",
      text: "Claims scrubbed and formatted to payer requirements.",
    },
    {
      step: "3",
      title: "Claim submission",
      text: "Clean claims submitted electronically to payers.",
    },
    {
      step: "4",
      title: "Claim tracking",
      text: "Status monitored until adjudication and payment.",
    },
    {
      step: "5",
      title: "Payment posting",
      text: "ERAs and payments posted and reconciled.",
    },
    {
      step: "6",
      title: "Follow-up & reporting",
      text: "Denials worked, AR followed up, reports delivered.",
    },
  ];

  return (
    <section className="bg-bg-secondary">
      <div className="container-x section">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Billing Workflow</span>
          <h2 className="mb-6">A structured billing workflow</h2>
          <p className="max-w-2xl mx-auto text-lg text-ink-soft">
            Every claim follows a defined process from entry to payment.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto mb-4 size-12 rounded-full bg-blue text-navy flex items-center justify-center text-lg font-bold">
                {step.step}
              </div>
              <h3 className="mb-2 text-lg font-display font-semibold text-navy">
                {step.title}
              </h3>
              <p className="text-sm text-ink-soft">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
