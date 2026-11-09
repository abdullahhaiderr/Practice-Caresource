import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { specialties } from "@/data/specialties";

export function Specialties() {
  return (
    <section className="home-specialties-section">
      <div className="container-x section">
        <div className="home-section-intro">
          <div>
            <span className="eyebrow mb-4 block">SPECIALTY-AWARE SUPPORT</span>
            <h2>Billing support shaped around the care you provide.</h2>
          </div>
          <div>
            <p>Different specialties bring different coding patterns, payer requirements, and administrative workflows. Explore the areas covered in our service information.</p>
            <Link href="/specialties" className="home-editorial-link">All specialties <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
          </div>
        </div>
        <div className="home-specialty-directory">
          {specialties.map((specialty, index) => (
            <Link key={specialty.id} href={specialty.href} className="home-specialty-item">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{specialty.title}</strong>
              <ArrowUpRight aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
