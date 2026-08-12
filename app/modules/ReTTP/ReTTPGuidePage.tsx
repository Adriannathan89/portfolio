import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ScrollEffects } from "../../components/scroll-effects";

const suiteExample = `core {
  test "authenticate" {
    request POST "/session"
    expect { status = 200 body { token: string -> ACCESS_TOKEN } }
  }
}

pipeline "resource lifecycle" {
  test "create" {
    request POST "/items" { body { name = "sample" } }
    expect { status = 201 body { id: integer -> ITEM_ID } }
  }
  test "read" { request GET "/items/\${ITEM_ID}" expect { status = 200 } }
}`;

const guideSections = [
  { id: "structure", label: "Suite structure" },
  { id: "building-blocks", label: "Building blocks" },
  { id: "execution", label: "Execution flow" },
] as const;

function GuideLinks({ activeSection }: { activeSection: string }) {
  return <>{guideSections.map(({ id, label }) => <a className={activeSection === id ? "is-active" : ""} href={`#${id}`} aria-current={activeSection === id ? "location" : undefined} key={id}>{label}</a>)}</>;
}

export function ReTTPGuidePage() {
  const [activeSection, setActiveSection] = useState("structure");

  useEffect(() => {
    const sections = guideSections.map(({ id }) => document.getElementById(id)).filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-24% 0px -62%", threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <main className="rettp-page rettp-guide-page"><ScrollEffects />
    <aside className="rettp-docs-sidebar" aria-label="Guide table of contents"><Link className="rettp-docs-back" to="/rettp">← Release</Link><p>ReTTP DOCUMENTATION</p><b>DSL guide</b><GuideLinks activeSection={activeSection} /><hr /><span>v0.1.1</span></aside>
    <section className="rettp-guide-hero section-shell" data-reveal><p className="rettp-breadcrumb">Documentation <span>/</span> DSL guide</p><p className="eyebrow"><span /> LANGUAGE REFERENCE</p><h1>ReTTP DSL guide</h1><p>Learn the suite structure, response contracts, variables, and deterministic execution model behind ReTTP verification runs.</p></section>
    <section id="structure" className="rettp-guide-section section-shell"><div className="rettp-section__heading" data-reveal><p className="eyebrow"><span /> 01 · STRUCTURE</p><h2>One suite, clear responsibilities.</h2><p>A suite may contain one optional core, named pipelines, and standalone tests. Every test has exactly one request followed by one expectation block.</p></div><div className="rettp-guide-code" data-reveal><div><span>example.utest</span><small>UTF-8 · comments supported</small></div><pre><code>{suiteExample}</code></pre></div><div className="rettp-guide-legend" data-reveal><article><b>core</b><p>Runs first; its captures are available to later blocks.</p></article><article><b>pipeline</b><p>Groups dependent tests. Captures flow only forward inside it.</p></article><article><b>test</b><p>Defines one HTTP request and its response contract.</p></article></div></section>
    <section id="building-blocks" className="rettp-guide-section section-shell"><div className="rettp-section__heading" data-reveal><p className="eyebrow"><span /> 02 · BUILDING BLOCKS</p><h2>Express requests and contracts.</h2></div><div className="rettp-guide-grid"><article data-reveal><span>REQUEST</span><h3>Relative HTTP calls</h3><p>Use GET, POST, PUT, PATCH, DELETE, HEAD, or OPTIONS with headers, query values, and JSON bodies.</p></article><article data-reveal><span>EXPECT</span><h3>Response assertions</h3><p>Assert status, case-insensitive headers, exact or partial text, empty bodies, and typed JSON.</p></article><article data-reveal><span>VARIABLES</span><h3>Safe interpolation</h3><p>Use <code>${"{NAME}"}</code> from environment values, CLI variables, or earlier captures. Invalid references never execute.</p></article><article data-reveal><span>CAPTURES</span><h3>Typed hand-off</h3><p>Capture typed fields with <code>token: string -&gt; TOKEN</code>; changes commit only after a full pass.</p></article></div></section>
    <section id="execution" className="rettp-guide-section rettp-guide-section--algorithm section-shell"><div className="rettp-section__heading" data-reveal><p className="eyebrow"><span /> 03 · EXECUTION ALGORITHM</p><h2>Validate, then execute in order.</h2><p>ReTTP blocks malformed suites and invalid references before any request reaches an environment, then follows deterministic fail rules.</p></div><ol className="rettp-algorithm"><li data-reveal><span>01</span><div><b>Parse &amp; validate</b><p>Lexical, syntax, and semantic diagnostics are collected where recovery is safe. Invalid suites stop without network execution.</p></div></li><li data-reveal><span>02</span><div><b>Run the core</b><p>The optional core always runs first. A failure aborts the entire suite because later checks may depend on it.</p></div></li><li data-reveal><span>03</span><div><b>Process pipelines</b><p>Pipelines run in source order. A failure skips later steps only in the same pipeline; subsequent blocks still run.</p></div></li><li data-reveal><span>04</span><div><b>Finish standalone tests</b><p>Standalone failures are recorded but do not stop other tests. Reports are emitted with redacted output.</p></div></li></ol><aside className="rettp-guide-note" data-reveal><b>Atomic captures</b><p>Response captures are staged and committed only after every assertion passes, so a failed test never leaves partial state.</p></aside></section>
    <footer className="rettp-footer section-shell"><Link to="/rettp">← Back to ReTTP release</Link><span>ReTTP DSL guide · v0.1.1</span></footer>
  </main>;
}
