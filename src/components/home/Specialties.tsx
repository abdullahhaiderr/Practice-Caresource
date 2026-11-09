import Link from "next/link";
import { ArrowUpRight, Activity, Brain, Bone, Dumbbell, HandHeart, HeartPulse, ScanFace, Stethoscope } from "lucide-react";
import { specialties } from "@/data/specialties";

const icons: Record<string, typeof Stethoscope> = {
  "family-practice": Stethoscope,
  "internal-medicine": Activity,
  cardiology: HeartPulse,
  orthopedics: Bone,
  dermatology: ScanFace,
  "behavioral-health": Brain,
  "physical-therapy": Dumbbell,
  "pain-management": HandHeart,
};

export function Specialties() {
  return (
    <section className="bg-bg-secondary">
      <div className="container-x section">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl"><span className="eyebrow mb-4 block">Specialty-aware support</span><h2 className="mb-5">Billing support shaped around the care you provide.</h2><p className="text-base leading-8">Different specialties bring different coding patterns, payer requirements, and administrative workflows. Explore the areas we support.</p></div>
          <Link href="/specialties" className="btn btn-outline w-fit">View all specialties <ArrowUpRight className="size-4" aria-hidden="true" /></Link>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {specialties.map((specialty) => {
            const Icon = icons[specialty.id] ?? Stethoscope;
            return <Link key={specialty.id} href={specialty.href} className="card group flex items-center gap-4 p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-[#edf5f5] text-teal"><Icon className="size-5" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1 text-sm font-semibold text-navy group-hover:text-blue">{specialty.title}</span>
              <ArrowUpRight className="size-4 shrink-0 text-slate-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>;
          })}
        </div>
      </div>
    </section>
  );
}
