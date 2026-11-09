import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="home-services-section">
      <div className="container-x section">
        <div className="home-section-intro home-services-intro">
          <div>
            <span className="eyebrow mb-4 block">WHAT WE HELP WITH</span>
            <h2>Focused support for the work behind patient care.</h2>
          </div>
          <div>
            <p>Start with the part of your revenue cycle that needs attention, or discuss a broader scope that fits your practice.</p>
            <Link href="/services" className="home-editorial-link">View all services <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="home-service-list">
          {services.map((service, index) => (
            <Link key={service.id} href={service.href} className="home-service-row">
              <span className="home-service-index">{String(index + 1).padStart(2, "0")}</span>
              <span className="home-service-title">{service.title}</span>
              <span className="home-service-summary">{service.summary}</span>
              <ArrowUpRight className="home-service-arrow" aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
