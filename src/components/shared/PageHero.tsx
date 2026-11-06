import { Breadcrumbs, type Crumb } from "@/components/shared/Breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="border-b border-border bg-pale-pine">
      <div className="container-x py-12 sm:py-14 lg:py-[4.5rem]">
        <div className="max-w-3xl">
          {breadcrumbs ? <div className="mb-7"><Breadcrumbs items={breadcrumbs} /></div> : null}
          {eyebrow ? <span className="eyebrow mb-4 block">{eyebrow}</span> : null}
          <h1 className="max-w-3xl text-4xl font-display font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.6rem]">{title}</h1>
          {description ? <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">{description}</p> : null}
          <div className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal"><span className="h-px w-8 bg-teal" />Practice-focused billing and revenue cycle support</div>
        </div>
      </div>
    </section>
  );
}
