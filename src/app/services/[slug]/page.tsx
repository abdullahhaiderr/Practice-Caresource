import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/services/ServicePage";
import { serviceDetails } from "@/data/service-details";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.id === slug);

  if (!service) {
    return {};
  }

  const title = `${service.title} Services`;

  return {
    title,
    description: service.summary,
    alternates: { canonical: service.href },
    openGraph: {
      title: `${title} | PracticeCareSource`,
      description: service.summary,
      url: service.href,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | PracticeCareSource`,
      description: service.summary,
    },
  };
}

export default async function ServiceDetailRoute({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = serviceDetails.find((item) => item.id === slug);

  if (!service) {
    notFound();
  }

  return <ServicePage service={service} />;
}
