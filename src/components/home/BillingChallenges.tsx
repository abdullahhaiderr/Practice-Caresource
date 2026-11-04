export function BillingChallenges() {
  const challenges = [
    "Claims denied or delayed due to coding errors",
    "Aging accounts receivable with no clear follow-up",
    "Prior authorizations holding up patient care",
    "Credentialing delays blocking payer enrollment",
    "Limited visibility into billing performance",
    "Staff turnover disrupting revenue cycle operations",
  ];

  return (
    <section className="bg-bg-secondary">
      <div className="container-x section">
        <div className="max-w-3xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
            {challenges.map((challenge) => (
              <div key={challenge} className="p-6 rounded-lg border border-border bg-paper">
                <p className="text-sm text-ink-soft">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
