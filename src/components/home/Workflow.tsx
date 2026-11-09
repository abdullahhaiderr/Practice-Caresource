const steps = [
  { step: "01", title: "Capture", text: "Gather charges and supporting details." },
  { step: "02", title: "Review", text: "Check information for completeness." },
  { step: "03", title: "Submit", text: "Prepare claims for payer submission." },
  { step: "04", title: "Post", text: "Record payments and adjustments." },
  { step: "05", title: "Resolve", text: "Investigate rejections and denials." },
  { step: "06", title: "Reconcile", text: "Review receivables and next actions." },
];

export function Workflow() {
  return (
    <section className="home-workflow-section">
      <div className="container-x section">
        <div className="home-workflow-heading">
          <div>
            <span className="eyebrow mb-4 block">HOW THE WORK MOVES</span>
            <h2>A connected view of the revenue cycle.</h2>
          </div>
          <p>Each stage has a clear purpose. The exact workflow is agreed around your systems, responsibilities, and service scope.</p>
        </div>
        <div className="home-workflow-track">
          {steps.map((item) => (
            <article className="home-workflow-step" key={item.step}>
              <span className="home-workflow-number">{item.step}</span>
              <span className="home-workflow-line" aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className="home-workflow-footnote">From the first review to ongoing follow-up, work is adapted to your practice and agreed scope.</p>
      </div>
    </section>
  );
}
