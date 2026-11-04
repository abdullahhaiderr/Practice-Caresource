import Link from "next/link";
import { ArrowRight, ArrowDown, Check } from "lucide-react";
import { ctaNav } from "@/config/business";

export function Hero() {
  return (
    <section className="relative bg-paper overflow-hidden">
      <div className="container-x relative pt-20 pb-12 lg:pt-24 lg:pb-16">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="eyebrow mb-4 block">
              Medical Billing and Revenue Cycle Management
            </span>
            <h1 className="mb-6">
              Simplifying Medical Billing. Supporting Better Healthcare.
            </h1>
            <p className="mb-8 max-w-lg text-lg text-ink-soft leading-relaxed">
              PracticeCareSource provides medical billing, coding, credentialing,
              and revenue cycle support to help healthcare practices manage billing
              operations more efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={ctaNav.href} className="btn btn-primary w-full sm:w-auto">
                Request a Consultation
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <Link href="/services" className="btn btn-outline w-full sm:w-auto">
                Explore Our Services
                <ArrowDown className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-navy/5 rounded-2xl border border-border" />
              <div className="relative p-8 bg-paper rounded-2xl border border-border shadow-card">
                <h3 className="mb-4 text-lg font-display font-semibold text-navy">
                  What we handle for you
                </h3>
                <ul className="space-y-3 text-sm text-ink-soft">
                  {[
                    "Clean claim submission and tracking",
                    "Medical coding (ICD-10, CPT, HCPCS)",
                    "Credentialing and payer enrollment",
                    "Denial and AR management",
                    "Eligibility and prior authorization",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
