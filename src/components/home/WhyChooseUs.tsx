const principles = [
  { number: "01", title: "Understand before recommending", text: "We begin by learning how your practice works, what systems you use, and where support is needed." },
  { number: "02", title: "Agree on clear responsibilities", text: "Services, handoffs, reporting, and scope should be understood before work begins." },
  { number: "03", title: "Keep communication practical", text: "Useful updates help your team understand progress, exceptions, and next actions." },
  { number: "04", title: "Review the work with context", text: "Billing activity and receivables are more useful when discussed alongside the process behind them." },
];

export function WhyChooseUs() {
  return (
    <section className="home-partnership-section">
      <div className="container-x section">
        <div className="home-partnership-layout">
          <div className="home-partnership-lead">
            <span className="eyebrow mb-4 block">A PRACTICAL PARTNERSHIP</span>
            <h2>Good billing support starts with understanding your practice.</h2>
            <p>There is no one-size-fits-all workflow. We focus on the people, systems, and priorities behind your billing operation before agreeing on the work.</p>
          </div>
          <div className="home-principles-list">
            {principles.map((item) => (
              <article key={item.number} className="home-principle-row">
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
