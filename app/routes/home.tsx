import { useState } from "react";
import type { Route } from "./+types/home";
import {
  AwardCard,
  ExperienceCard,
  Icon,
  ProjectCard,
  SectionHeading,
} from "../components/portfolio";
import { ScrollEffects } from "../components/scroll-effects";
import { InkCursor } from "../components/ink-cursor";
import { VisitTracker } from "../components/visit-tracker";
import { ReTTPProjectCard } from "../modules/ReTTP/ReTTPProjectCard";
import {
  awards,
  experiences,
  navigation,
  profile,
  projects,
} from "../data/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adrian Nathanael Setiawan — Software Engineer" },
    {
      name: "description",
      content: "Portfolio of Adrian Nathanael Setiawan, Software Engineer focused on backend and distributed systems.",
    },
  ];
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#about" aria-label="Go to top">Adrian Nathanael Setiawan</a>
        <nav className="desktop-navigation" aria-label="Primary navigation">
          {navigation.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-socials">
          <ContactAnchor href={profile.contact.linkedin} label="LinkedIn"><Icon name="linkedin" /></ContactAnchor>
          <ContactAnchor href={profile.contact.whatsapp} label="WhatsApp"><Icon name="message" /></ContactAnchor>
        </div>
        <button className="menu-button" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"} aria-controls="mobile-navigation" aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((open) => !open)}>
          <Icon name={isMenuOpen ? "close" : "menu"} size={21} />
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-navigation ${isMenuOpen ? "is-open" : ""}`} aria-label="Mobile navigation">
        {navigation.map((item) => <a href={item.href} key={item.href} onClick={closeMenu}>{item.label}<Icon name="arrow" /></a>)}
        <div className="mobile-navigation__contact">
          <ContactAnchor href={profile.contact.linkedin} label="LinkedIn"><Icon name="linkedin" /> LinkedIn</ContactAnchor>
          <ContactAnchor href={profile.contact.whatsapp} label="WhatsApp"><Icon name="message" /> WhatsApp</ContactAnchor>
        </div>
      </nav>
    </header>
  );
}

function ContactAnchor({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  const isReady = href.startsWith("https://");
  if (!isReady) return <span className="contact-placeholder" title={`${label} URL has not been supplied`} aria-label={`${label} URL needs to be configured`}>{children}<span className="sr-only"> (URL needs to be configured)</span></span>;
  return <a href={href} target="_blank" rel="noreferrer noopener" aria-label={`${label} (opens in a new tab)`}>{children}</a>;
}

function HeroSection() {
  return (
    <section id="about" className="hero section-shell">
      <div className="hero-ink" aria-hidden="true">
        <span className="hero-ink__drop hero-ink__drop--one" />
        <span className="hero-ink__drop hero-ink__drop--two" />
        <span className="hero-ink__drop hero-ink__drop--three" />
      </div>
      <div className="hero-heading">
        <p className="eyebrow hero-eyebrow"><span />{profile.eyebrow}</p>
        <h1>Adrian <em>Nathanael</em> <span>Setiawan</span></h1>
      </div>
      <div className="hero-copy">
        <p className="hero-introduction-label">Introduction</p>
        <p className="hero-bio">{profile.bio}</p>
        <div className="hero-actions">
          <a className="button button--primary" href={profile.cv} target="_blank" rel="noreferrer noopener">Download CV <Icon name="download" /></a>
          <a className="button button--ghost" href="#contact">Contact Me</a>
        </div>
      </div>
      <a className="hero-scroll-cue" href="#projects"><span>Explore selected work</span><Icon name="arrow" size={15} /></a>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact-section section-shell">
      <div className="contact-gridline" aria-hidden="true" />
      <div className="contact-heading">
        <p className="eyebrow"><span /> GET IN TOUCH</p>
        <h2>Let’s build something <em>meaningful.</em></h2>
      </div>
      <div className="contact-copy">
        <p>Have a project, opportunity, or engineering challenge in mind? I’m always open to a thoughtful conversation.</p>
        <div className="contact-actions">
          <ContactAnchor href={profile.contact.linkedin} label="LinkedIn"><Icon name="linkedin" size={19} /> <span>LinkedIn</span></ContactAnchor>
          <ContactAnchor href={profile.contact.whatsapp} label="WhatsApp"><Icon name="message" size={19} /> <span>WhatsApp</span></ContactAnchor>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><span>© {new Date().getFullYear()} {profile.name}</span><span>Designed & built with intention.</span><a href="#about">Back to top <Icon name="arrow" size={14} /></a></footer>;
}

export default function Home() {
  return (
    <main className="portfolio-page">
      <ScrollEffects />
      <InkCursor />
      <VisitTracker />
      <Header />
      <HeroSection />
      <section id="projects" className="projects-section section-shell">
        <SectionHeading eyebrow="SELECTED PROJECTS" title="Work built with purpose">A selection of backend systems, developer tools, and full-stack products designed around reliability, clarity, and real-world use.</SectionHeading>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.name} />)}<ReTTPProjectCard /></div>
      </section>
      <section id="experience" className="experience-section section-shell">
        <SectionHeading eyebrow="IN THE FIELD" title="Experience that shaped the work">Engineering experience across organizations, collaborative teams, and systems that need to remain dependable as they grow.</SectionHeading>
        <div className="experience-timeline">{experiences.map((experience, index) => <ExperienceCard experience={experience} index={index} key={experience.organization} />)}</div>
      </section>
      <section id="awards" className="awards-section section-shell">
        <SectionHeading eyebrow="MILESTONES" title="Recognition along the way">Selected milestones from national programming, informatics, and logic competitions.</SectionHeading>
        <div className="awards-grid">{awards.map((award, index) => <AwardCard award={award} key={`${award.title}-${index}`} />)}</div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
