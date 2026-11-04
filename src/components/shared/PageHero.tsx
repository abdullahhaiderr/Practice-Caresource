import { Breadcrumbs, type Crumb } from "@/components/shared/Breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-bg-secondary">
      <div className="container-x py-12 lg:py-16">
        <div className="max-w-3xl">
          {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
          {eyebrow ? <span className="eyebrow mb-4 block">{eyebrow}</span> : null}
          <h1 className="text-3xl font-display font-bold text-navy sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 text-lg text-ink-soft leading-relaxed">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
