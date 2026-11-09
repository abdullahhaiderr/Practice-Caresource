export function Onboarding() {
  const steps = [
    { title: "Initial conversation", text: "Discuss your practice, current process, and the support you are looking for." },
    { title: "Workflow assessment", text: "Review the billing workflow, systems, payer mix, and operational priorities." },
    { title: "Scope and responsibilities", text: "Agree on services, handoffs, reporting, access, and pricing." },
    { title: "Setup and preparation", text: "Complete the agreed onboarding steps and prepare the working process." },
    { title: "Service begins", text: "Start the agreed work with clear points of contact and escalation paths." },
    { title: "Ongoing review", text: "Review activity, outstanding items, and opportunities to improve the workflow." },
  ];

  return (
    <section className="home-onboarding-section">
      <div className="container-x section">
        <div className="home-section-intro">
          <div>
            <span className="eyebrow mb-4 block">GETTING STARTED</span>
            <h2>A considered start, not a one-size-fits-all handoff.</h2>
          </div>
          <p>We establish the scope and working process with you before ongoing service begins. Timing depends on your systems and agreed requirements.</p>
        </div>
        <ol className="home-onboarding-track">
          {steps.map((step, index) => (
            <li key={step.title} className="home-onboarding-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{step.title}</h3><p>{step.text}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
