const principles = [
  { label: "Defined scope", text: "Services and responsibilities are discussed before an engagement begins." },
  { label: "Clear reporting", text: "Reporting requirements and cadence are agreed as part of the scope." },
  { label: "No outcome guarantees", text: "Payer decisions and reimbursement outcomes remain outside a billing vendor's control." },
  { label: "No PHI through this site", text: "The public contact form is for business enquiries, not patient information." },
];

export function TrustHighlights() {
  return (
    <section className="border-y border-rule bg-surface" aria-labelledby="principles-heading">
      <div className="container-x py-10">
        <h2 id="principles-heading" className="mb-7 text-2xl">A straightforward way to work together</h2>
        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ label, text }) => (
            <div key={label} className="border-l border-rule pl-4">
              <dt className="font-semibold text-ink">{label}</dt>
              <dd className="mt-2 text-sm leading-6 text-muted">{text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
