import { Link } from "react-router";
import { ScrollEffects } from "../../components/scroll-effects";
import { rettpRelease } from "./rettp-data";

function DownloadIcon() {
  return <svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v11m-4-4 4 4 4-4M5 20h14" /></svg>;
}

export function ReTTPReleasePage() {
  return (
    <main className="rettp-page">
      <ScrollEffects />
      <header className="rettp-nav"><div className="rettp-nav__inner"><nav aria-label="ReTTP navigation"><Link to="/">Portfolio</Link><a href="#download">Download</a><a href="#release-notes">Release notes</a><Link to="/rettp/guide">DSL guide</Link><a href={rettpRelease.repository} target="_blank" rel="noreferrer">GitHub ↗</a></nav></div></header>
      <section className="rettp-hero section-shell">
        <div className="rettp-hero__copy" data-reveal>
          <p className="eyebrow"><span /> RELEASED · V{rettpRelease.version}</p>
          <h1>Verify every<br /><em>release.</em></h1>
          <p>ReTTP is a focused command-line runner for HTTP verification after deployment and before production. Write readable suites, assert real responses, and ship with confidence.</p>
          <div className="rettp-hero__actions"><a className="button button--primary" href="#download">Download ReTTP <DownloadIcon /></a><a className="button button--ghost" href={rettpRelease.repository} target="_blank" rel="noreferrer">View on GitHub ↗</a></div>
        </div>
        <div className="rettp-terminal" data-reveal>
          <div className="rettp-terminal__bar"><span /><span /><span /><b>preprod.utest</b></div>
          <pre><code><i>core</i> {'{'}{`\n  `}<i>test</i> <strong>"health check"</strong> {'{'}{`\n    `}<i>request</i> <b>GET</b> <strong>"/health"</strong>{`\n    `}<i>expect</i> {'{'} <em>status</em> = <b>200</b> {'}'}{`\n  }\n`} {'}'}{`\n\n`}<span>$ rettp run preprod.utest --base-url https://staging.example.com</span>{`\n`}<mark>✓ 1 suite passed · 0 failures · 234ms</mark></code></pre>
        </div>
      </section>
      <section className="rettp-proof section-shell" data-reveal><div><span>01</span><strong>Validate first</strong><p>Check syntax and semantics before a request leaves your machine.</p></div><div><span>02</span><strong>Assert precisely</strong><p>Verify status, headers, text, empty bodies, and typed JSON.</p></div><div><span>03</span><strong>Gate safely</strong><p>Export redacted JSON and JUnit reports for CI release gates.</p></div></section>
      <section id="download" className="rettp-section section-shell">
        <div className="rettp-section__heading" data-reveal><p className="eyebrow"><span /> GET STARTED</p><h2>Download for your platform.</h2><p>ReTTP {rettpRelease.version} is the first published MVP release. Choose the archive built for your system, then verify its checksum before installing.</p></div>
        <div className="rettp-download-grid">{rettpRelease.downloads.map((download) => <article className="rettp-download-card" data-reveal key={download.platform}><div className="rettp-download-card__meta"><span>{download.platform}</span><small>{download.format}</small></div><h3>{download.architecture}</h3><p>{download.asset}</p><a href={download.url} className="rettp-download-button">Download <DownloadIcon /></a><pre><code>{download.command}</code></pre></article>)}</div>
        <aside className="rettp-checksum" data-reveal><div><strong>Verify every download</strong><p>Compare the archive with the published SHA-256 manifest before executing it.</p></div><a href={rettpRelease.checksum} target="_blank" rel="noreferrer">Download SHA256SUMS ↗</a></aside>
      </section>
      <section id="release-notes" className="rettp-section rettp-section--notes section-shell">
        <div className="rettp-section__heading" data-reveal><p className="eyebrow"><span /> RELEASE NOTES</p><h2>ReTTP {rettpRelease.version}</h2></div>
        <div className="rettp-release-grid"><article className="rettp-release-summary" data-reveal><span>WHAT’S INSIDE</span><ul>{rettpRelease.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><a href={rettpRelease.release} target="_blank" rel="noreferrer">Open full release on GitHub ↗</a></article><div className="rettp-changelog">{rettpRelease.releaseNotes.map(([label, note], index) => <article data-reveal key={note}><span>0{index + 1}</span><div><b>{label}</b><p>{note}</p></div></article>)}</div></div>
      </section>
    </main>
  );
}
