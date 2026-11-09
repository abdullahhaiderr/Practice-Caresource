const points = [
  { number: "01", title: "Useful reporting", text: "Clearer visibility into claim status, denial activity, collections, and accounts receivable." },
  { number: "02", title: "Existing systems first", text: "Workflows are planned around the practice management and billing tools your team already uses." },
  { number: "03", title: "Automation with oversight", text: "Where appropriate, automation can help organize repetitive administrative work. Important decisions remain subject to human review." },
];

export function Technology() {
  return (
    <section className="home-technology-section">
      <div className="container-x section">
        <div className="home-technology-layout">
          <div>
            <span className="eyebrow mb-4 block">TOOLS IN SERVICE OF THE WORK</span>
            <h2>Technology should make the process clearer, not louder.</h2>
            <p>We focus on practical systems, useful reporting, and carefully considered automation. The tools should support the agreed workflow and the people responsible for it.</p>
          </div>
          <div className="home-technology-list">
            {points.map((item) => (
              <article key={item.number} className="home-technology-row">
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
