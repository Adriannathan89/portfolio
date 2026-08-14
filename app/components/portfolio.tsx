import type { ReactNode } from "react";
import type { Award, Experience, Project } from "../data/portfolio";

type IconName =
  | "arrow"
  | "code"
  | "github"
  | "linkedin"
  | "menu"
  | "close"
  | "message"
  | "external"
  | "download"
  | "spark";

export function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
    code: <><path d="m9 18-6-6 6-6M15 6l6 6-6 6" /><path d="m14 4-4 16" /></>,
    github: <path d="M12 2.8a9.2 9.2 0 0 0-2.91 17.93c.46.08.63-.2.63-.44v-1.7c-2.57.56-3.11-1.09-3.11-1.09-.42-1.08-1.03-1.37-1.03-1.37-.84-.58.06-.57.06-.57.94.06 1.43.96 1.43.96.82 1.42 2.17 1.01 2.7.77.08-.6.32-1.01.59-1.24-2.05-.23-4.21-1.03-4.21-4.57 0-1.01.36-1.84.95-2.49-.1-.23-.41-1.17.09-2.45 0 0 .77-.25 2.53.95A8.7 8.7 0 0 1 12 7.22a8.8 8.8 0 0 1 2.3.31c1.75-1.2 2.53-.95 2.53-.95.5 1.28.18 2.22.09 2.45.59.65.95 1.48.95 2.49 0 3.55-2.16 4.33-4.22 4.56.33.29.63.86.63 1.74v2.58c0 .24.17.52.64.44A9.2 9.2 0 0 0 12 2.8Z" />,
    linkedin: <><path d="M6.2 9.4v8.4M6.2 6.3v.1" /><path d="M10.5 17.8v-4.7a3.7 3.7 0 0 1 7.3 0v4.7M10.5 9.4v8.4" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
    message: <path d="M20 11.3a7.7 7.7 0 0 1-9.2 7.55L5 20l1.28-4.33A7.7 7.7 0 1 1 20 11.3Z" />,
    external: <><path d="M14 5h5v5M19 5l-8.5 8.5" /><path d="M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></>,
    download: <><path d="M12 4v10M8 11l4 4 4-4" /><path d="M5 19h14" /></>,
    spark: <path d="m12 2 1.8 7.2L21 11l-7.2 1.8L12 20l-1.8-7.2L3 11l7.2-1.8L12 2Z" />,
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

export function TechBadge({ children }: { children: ReactNode }) {
  return <span className="tech-badge">{children}</span>;
}

export function ExternalLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a className={`external-link ${className}`} href={href} target="_blank" rel="noreferrer noopener">
      {children} <Icon name="external" size={14} />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <div className="section-heading">
      <div className="section-heading__title">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p className="section-description">{children}</p>
    </div>
  );
}

function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "finance") return <div className="project-visual finance-visual" aria-hidden="true"><span>income</span><b>+ 1,240</b><i /><span>debt flow</span><b>→ synced</b><i /><span>nlp intent</span><b>expense</b></div>;
  if (kind === "queue") return <div className="project-visual queue-visual" aria-hidden="true"><div>submit()</div><i /><div>stream</div><i /><div>workers × n</div><i /><div>result</div></div>;
  if (kind === "academic") return <div className="project-visual academic-visual" aria-hidden="true"><div className="cal-row"><i /><i /><i /><i /><i /></div><div className="cal-grid"><b /><b /><b /><b /><b /><b /></div></div>;
  return <div className="project-visual cache-visual" aria-hidden="true"><div className="code-line"><i />@Cacheable()</div><div className="code-line dim"><i />async getUser()</div><div className="cache-node"><span>L1</span><i /><span>Redis</span></div></div>;
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`project-card project-card--${project.size}`} data-reveal>
      <div className="project-card__top">
        <span className="project-index">0{index + 1}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <ProjectVisual kind={project.visual} />
      <div className="project-card__copy">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      {project.metrics && (
        <dl className="project-metrics" aria-label={`${project.name} operational metrics`}>
          {project.metrics.map((metric) => <div key={metric.label}><dt>{metric.value}</dt><dd>{metric.label}</dd></div>)}
        </dl>
      )}
      <ul className="feature-list" aria-label={`${project.name} core features`}>
        {project.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <div className="project-card__footer">
        <div className="repo-links">
          {project.repositories.map((repository) => <ExternalLink href={repository.url} key={repository.url}>{repository.label}</ExternalLink>)}
        </div>
        <div className="tech-list">
          {project.stack.map((technology) => <TechBadge key={technology}>{technology}</TechBadge>)}
        </div>
      </div>
    </article>
  );
}

export function ExperienceCard({ experience, index }: { experience: Experience; index: number }) {
  return (
    <article className={`experience-card experience-card--${experience.accent}`} data-reveal>
      <div className="experience-card__marker" aria-hidden="true">0{index + 1}</div>
      <div className="experience-card__header">
        <div><p className="role-label">{experience.role}</p><h3>{experience.organization}</h3></div>
        <ExternalLink href={experience.website}>{experience.cta}</ExternalLink>
      </div>
      <p className="experience-card__description">{experience.description}</p>
      <div className="contribution-block"><span>CONTRIBUTIONS</span><ul>{experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
      <div className="tech-list">{experience.stack.map((technology) => <TechBadge key={technology}>{technology}</TechBadge>)}</div>
    </article>
  );
}

export function AwardCard({ award }: { award: Award }) {
  const content = <>
    <div className="award-image">
      {award.image ? <img src={award.image} alt={award.title} loading="lazy" /> : <><Icon name="spark" size={26} /><span>Recognition</span></>}
    </div>
    <div className="award-card__content">
      <div className="award-card__meta"><span>{award.issuer ?? "Issuer"}</span><span>{award.year ?? "Year"}</span></div>
      <h3>{award.title}</h3>
      {award.description && <p>{award.description}</p>}
    </div>
  </>;
  return award.url ? <a className={`award-card ${award.featured ? "award-card--featured" : ""}`} href={award.url} target="_blank" rel="noreferrer noopener" data-reveal>{content}<span className="sr-only"> (opens in a new tab)</span></a> : <article className={`award-card ${award.featured ? "award-card--featured" : ""}`} data-reveal>{content}</article>;
}
