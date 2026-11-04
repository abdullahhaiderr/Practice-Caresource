import Link from "next/link";
import { specialties } from "@/data/specialties";

export function Specialties() {
  return (
    <section className="bg-bg-secondary">
      <div className="container-x section">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Healthcare Specialties</span>
          <h2 className="mb-6">Billing expertise for your specialty</h2>
          <p className="max-w-2xl mx-auto text-lg text-ink-soft">
            We understand the coding, payer rules, and documentation patterns
            specific to your practice area.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          {specialties.map((specialty) => (
            <Link
              key={specialty.id}
              href={specialty.href}
              className="card text-center"
            >
              <h3 className="text-lg font-display font-semibold text-navy">
                {specialty.title}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/specialties" className="btn btn-outline">
            View All Specialties
          </Link>
        </div>
      </div>
    </section>
  );
}
