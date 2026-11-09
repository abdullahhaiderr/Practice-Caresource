const challenges = [
  { number: "01", title: "Claims returned for correction", text: "Coding, eligibility, or missing information can create avoidable rework." },
  { number: "02", title: "Receivables left waiting", text: "Balances need consistent review and payer follow-up to avoid unnecessary aging." },
  { number: "03", title: "Denials that keep recurring", text: "Understanding the reason behind a denial helps teams address repeat issues." },
  { number: "04", title: "Authorization requirements", text: "Payer-specific steps can delay care workflows and downstream billing." },
  { number: "05", title: "Limited visibility", text: "Scattered updates make it harder to see what is paid, pending, or needs action." },
  { number: "06", title: "Pressure on front-office teams", text: "Administrative work competes with the daily needs of patients and staff." },
];

export function BillingChallenges() {
  return (
    <section className="home-challenges-section">
      <div className="container-x section">
        <div className="home-challenges-layout">
          <div className="home-challenges-lead">
            <span className="eyebrow mb-4 block">THE OPERATIONAL REALITY</span>
            <h2>The smallest gaps in a billing process can create the biggest delays.</h2>
            <p>Revenue cycle work is connected. When one step slows down, the next team often inherits the extra work.</p>
            <span className="home-challenges-caption">A clearer process starts with knowing where work gets stuck.</span>
          </div>
          <div className="home-challenge-list">
            {challenges.map((item) => (
              <article className="home-challenge-row" key={item.number}>
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
