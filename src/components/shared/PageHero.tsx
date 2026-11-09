import { Breadcrumbs, type Crumb } from "@/components/shared/Breadcrumbs";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
};

export function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="page-hero-editorial">
      <div className="container-x page-hero-editorial-inner">
        <div className="page-hero-editorial-copy">
          {breadcrumbs ? <div className="mb-5"><Breadcrumbs items={breadcrumbs} /></div> : null}
          {eyebrow ? <span className="page-hero-editorial-eyebrow">{eyebrow}</span> : null}
          <h1>{title}</h1>
          {description ? <p>{description}</p> : null}
        </div>
        <div className="page-hero-editorial-aside" aria-hidden="true">
          <span>PCS</span>
          <span>Practice-focused</span>
          <span>Billing support</span>
        </div>
      </div>
    </section>
  );
}
