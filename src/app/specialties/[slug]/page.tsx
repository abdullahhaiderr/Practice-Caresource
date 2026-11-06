import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecialtyPage } from "@/components/specialties/SpecialtyPage";
import { specialtyDetails } from "@/data/specialty-details";

type SpecialtyRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return specialtyDetails.map((specialty) => ({ slug: specialty.id }));
}

export async function generateMetadata({
  params,
}: SpecialtyRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = specialtyDetails.find((item) => item.id === slug);

  if (!specialty) {
    return {};
  }

  const title = `${specialty.title} Medical Billing`;

  return {
    title,
    description: "Contact PracticeCareSource to confirm current specialty support.",
    robots: { index: false, follow: true },
    alternates: { canonical: specialty.href },
    openGraph: {
      title: `${title} | PracticeCareSource`,
      description: specialty.summary,
      url: specialty.href,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | PracticeCareSource`,
      description: specialty.summary,
    },
  };
}

export default async function SpecialtyDetailRoute({
  params,
}: SpecialtyRouteProps) {
  const { slug } = await params;
  const specialty = specialtyDetails.find((item) => item.id === slug);

  if (!specialty) {
    notFound();
  }

  return <SpecialtyPage specialty={specialty} />;
}
