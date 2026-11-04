import Link from "next/link";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section>
      <div className="container-x section">
        <div className="text-center mb-12">
          <span className="eyebrow mb-4 block">Our Services</span>
          <h2 className="mb-6">Complete revenue cycle support</h2>
          <p className="max-w-2xl mx-auto text-lg text-ink-soft">
            From charge entry to final payment, we handle every step of the
            medical billing and revenue cycle process.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="card group hover:border-blue/50"
            >
              <h3 className="mb-2 text-lg font-display font-semibold text-navy group-hover:text-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-ink-soft">{service.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
