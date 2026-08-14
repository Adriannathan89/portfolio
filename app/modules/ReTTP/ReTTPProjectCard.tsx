import { Link } from "react-router";

export function ReTTPProjectCard() {
  return (
    <article className="project-card rettp-project-card" data-reveal>
      <div className="project-card__top">
        <span className="project-index">05</span>
        <span className="project-category">Solo project · REST API testing CLI</span>
      </div>
      <div className="rettp-project-visual" aria-hidden="true">
        <div className="rettp-project-terminal"><span>$</span> rettp run preprod.rttp <i>✓</i></div>
        <div className="rettp-project-flow"><b>check</b><em>→</em><b>request</b><em>→</em><b>assert</b><em>→</em><b>report</b></div>
        <div className="rettp-project-stats"><span><b>361</b> requests / second</span><span><b>7</b> HTTP methods</span><span><b>3</b> report formats</span></div>
      </div>
      <div className="project-card__copy">
        <h3>ReTTP</h3>
        <p>A CLI-based REST API testing tool built and maintained as a solo project. Its domain-specific language turns readable <code>.rttp</code> suites into repeatable checks, typed response assertions, and CI-ready evidence.</p>
        <div className="rettp-product-details"><span><b>Benchmark</b> 361 HTTP requests per second</span><span><b>Tested on</b> single-core Ryzen 5 6600H</span><span><b>Runs</b> standalone tests, core suites, and sequential pipelines</span></div>
      </div>
      <ul className="feature-list rettp-feature-list" aria-label="ReTTP key features">
        <li>Offline syntax and semantic validation before network execution</li>
        <li>Status, header, text, empty-body, and typed JSON assertions</li>
        <li>Core and pipeline workflows with typed response captures</li>
        <li>Redacted terminal, JSON, and JUnit XML reports for CI</li>
      </ul>
      <div className="project-card__footer">
        <div className="repo-links"><Link className="external-link" to="/rettp">Open deployment <span aria-hidden="true">→</span></Link></div>
        <div className="tech-list"><span className="tech-badge">Rust</span><span className="tech-badge">Tokio</span><span className="tech-badge">Reqwest</span><span className="tech-badge">CLI</span></div>
      </div>
    </article>
  );
}
