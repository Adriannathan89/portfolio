import { Link } from "react-router";

export function UTestProjectCard() {
  return (
    <article className="project-card utest-project-card" data-reveal>
      <div className="project-card__top">
        <span className="project-index">05</span>
        <span className="project-category">Open-source HTTP verification CLI</span>
      </div>
      <div className="utest-project-visual" aria-hidden="true">
        <div className="utest-project-terminal"><span>$</span> utest run preprod.utest <i>✓</i></div>
        <div className="utest-project-flow"><b>check</b><em>→</em><b>request</b><em>→</em><b>assert</b><em>→</em><b>report</b></div>
        <div className="utest-project-stats"><span><b>7</b> HTTP methods</span><span><b>3</b> report formats</span><span><b>130</b> Ctrl+C exit</span></div>
      </div>
      <div className="project-card__copy">
        <h3>UTest</h3>
        <p>A Rust-powered command-line HTTP verification runner for post-deployment and pre-production release gates. It turns a readable <code>.utest</code> suite into repeatable API checks, typed response assertions, and CI-ready evidence—without coupling verification to an application framework.</p>
        <div className="utest-product-details"><span><b>Built for</b> release gates &amp; pre-production checks</span><span><b>Runs</b> standalone tests, core suites, and sequential pipelines</span></div>
      </div>
      <ul className="feature-list utest-feature-list" aria-label="UTest key features">
        <li>Offline syntax and semantic validation before network execution</li>
        <li>Status, header, text, empty-body, and typed JSON assertions</li>
        <li>Core and pipeline workflows with typed response captures</li>
        <li>Redacted terminal, JSON, and JUnit XML reports for CI</li>
      </ul>
      <div className="project-card__footer">
        <div className="repo-links"><Link className="external-link" to="/utest">View release <span aria-hidden="true">→</span></Link></div>
        <div className="tech-list"><span className="tech-badge">Rust</span><span className="tech-badge">CLI</span><span className="tech-badge">HTTP</span><span className="tech-badge">GitHub Actions</span></div>
      </div>
    </article>
  );
}
