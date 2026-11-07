const carriers = [
  { name: "UnitedHealthcare", domain: "uhc.com" },
  { name: "Elevance Health", domain: "elevancehealth.com" },
  { name: "Aetna", domain: "aetna.com" },
  { name: "Ambetter", domain: "ambetterhealth.com" },
  { name: "HCSC", domain: "hcsc.com" },
  { name: "Cigna Healthcare", domain: "cigna.com" },
  { name: "Kaiser Permanente", domain: "kp.org" },
  { name: "Humana", domain: "humana.com" },
  { name: "GuideWell / Florida Blue", domain: "floridablue.com" },
  { name: "Blue Cross Blue Shield of Michigan", domain: "bcbsm.com" },
];

export function InsuranceMarquee() {
  const items = [...carriers, ...carriers];
  return (
    <section className="payer-section overflow-hidden py-12 sm:py-16" aria-labelledby="payer-heading">
      <div className="container-x mb-7 text-center">
        <p className="payer-kicker">Payer experience</p>
        <h2 id="payer-heading" className="mt-2 text-3xl sm:text-4xl">Billing support across major U.S. health plans</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6">We support billing workflows involving leading health plans. Specific plan and service availability is confirmed for each practice.</p>
      </div>
      <div className="payer-marquee" aria-label="Health plan names and logos">
        <div className="payer-track">
          {items.map((carrier, index) => (
            <div className="payer-logo-card" key={carrier.name + index}>
              <img src={`https://logo.clearbit.com/${carrier.domain}?size=240`} alt={carrier.name} loading="lazy" />
              <span>{carrier.name}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="container-x mt-5 text-center text-xs leading-5 text-muted">Payer names and logos are trademarks of their respective owners. Their display is for identification only and does not imply endorsement, affiliation, or a formal partnership. Plan participation and requirements vary by payer, product, state and provider.</p>
    </section>
  );
}
