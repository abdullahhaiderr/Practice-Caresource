import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="home-final-cta">
      <div className="container-x">
        <div className="home-final-cta-inner">
          <div>
            <span className="home-final-cta-kicker">START WITH A CONVERSATION</span>
            <h2>Let’s talk about what your practice needs from its billing partner.</h2>
            <p>Tell us where your team needs support. We’ll discuss your current process, priorities, and whether our services are a fit.</p>
          </div>
          <div className="home-final-cta-action">
            <Link href="/contact" className="btn home-final-cta-button">Request a consultation <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
            <span>Business inquiries only. Please do not submit patient health information.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
