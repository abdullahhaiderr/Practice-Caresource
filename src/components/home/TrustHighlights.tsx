export function TrustHighlights() {
  const highlights = [
    {
      label: "Clean claims",
      text: "Focused on accurate first-pass claim submission.",
    },
    {
      label: "Specialty-aware",
      text: "Billing workflows tailored to your practice specialty.",
    },
    {
      label: "Transparent",
      text: "Clear reporting and open communication.",
    },
    {
      label: "No lock-in",
      text: "Flexible service arrangements that work for you.",
    },
  ];

  return (
    <section className="border-y border-border">
      <div className="container-x section">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="text-center p-4"
            >
              <p className="text-sm font-semibold text-navy">{item.label}</p>
              <p className="text-sm text-ink-soft">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
