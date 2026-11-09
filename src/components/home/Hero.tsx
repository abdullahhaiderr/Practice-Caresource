import Link from "next/link";
import { ArrowRight, ArrowUpRight, ClipboardCheck, FileText, ShieldCheck } from "lucide-react";
import { ctaNav } from "@/config/business";

const stages = [
  { number: "01", title: "Prepare the claim", detail: "Review charges, coding, and supporting details.", icon: FileText },
  { number: "02", title: "Submit and monitor", detail: "Track claim progress and payer responses.", icon: ClipboardCheck },
  { number: "03", title: "Resolve and reconcile", detail: "Follow up on exceptions and review payments.", icon: ShieldCheck },
];

export function Hero() {
  return (
    <section className="hero-editorial">
      <div className="container-x hero-editorial-inner">
        <div className="hero-editorial-copy">
          <p className="hero-editorial-kicker">MEDICAL BILLING · REVENUE CYCLE MANAGEMENT</p>
          <h1>More clarity behind every <span>claim.</span></h1>
          <p className="hero-editorial-description">
            Practical billing and revenue cycle support for healthcare practices.
            We help bring structure to claims, follow-up, and the work that keeps
            your revenue cycle moving.
          </p>
          <div className="hero-editorial-actions">
            <Link href={ctaNav.href} className="btn btn-primary">
              Request a consultation <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link href="/services" className="hero-editorial-text-link">
              Explore services <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-editorial-note">A service conversation shaped around your practice, systems, and priorities.</p>
        </div>

        <div className="hero-process" aria-label="Illustration of three connected revenue cycle stages">
          <div className="hero-process-heading">
            <span>THE REVENUE CYCLE</span>
            <span className="hero-process-rule" />
            <span>01 — 03</span>
          </div>
          <div className="hero-process-list">
            {stages.map(({ number, title, detail, icon: Icon }) => (
              <div className="hero-process-step" key={number}>
                <span className="hero-process-number">{number}</span>
                <span className="hero-process-icon"><Icon aria-hidden="true" /></span>
                <span className="hero-process-copy">
                  <strong>{title}</strong>
                  <small>{detail}</small>
                </span>
                <ArrowUpRight className="hero-process-arrow" aria-hidden="true" />
              </div>
            ))}
          </div>
          <div className="hero-process-footer">
            <span className="hero-process-footer-mark" />
            <p>One connected process. Clear ownership at each stage.</p>
          </div>
        </div>
      </div>
      <div className="hero-editorial-bottom">
        <div className="container-x hero-editorial-bottom-inner">
          <span>BUILT AROUND YOUR PRACTICE</span>
          <span>Medical billing</span>
          <span>Credentialing</span>
          <span>Denial and AR follow-up</span>
        </div>
      </div>
    </section>
  );
}
