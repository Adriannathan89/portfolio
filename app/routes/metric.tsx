import { useEffect, useState } from "react";
import type { Route } from "./+types/metric";

type Metrics = {
  totalVisits: number;
  uniqueVisitors: number;
  visitsToday: number;
  lastVisitAt: string | null;
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Metrics — Adrian Nathanael Setiawan" },
    { name: "description", content: "Portfolio visitor metrics." },
  ];
}

function formatLastVisit(value: string | null) {
  if (!value) return "No visits yet";
  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default function Metric() {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadMetrics = async () => {
    setIsLoading(true);
    setError(false);
    try {
      const response = await fetch("/api/metrics", { cache: "no-store" });
      if (!response.ok) throw new Error("Unable to load metrics");
      setMetrics((await response.json()) as Metrics);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    void loadMetrics();
  }, []);

  return (
    <main className="metric-page section-shell">
      <a className="metric-back" href="/">← Back to portfolio</a>
      <p className="eyebrow"><span /> PRIVATE OVERVIEW</p>
      <div className="metric-heading">
        <div>
          <h1>Visitor metrics</h1>
          <p>Simple, privacy-conscious counts for this portfolio. No IP addresses or personal profiles are stored.</p>
        </div>
        <button className="metric-refresh" type="button" onClick={() => void loadMetrics()} disabled={isLoading}>
          {isLoading ? "Refreshing…" : "Refresh"}
        </button>
      </div>
      {error ? (
        <p className="metric-status" role="alert">Metrics are currently unavailable. Please try again.</p>
      ) : (
        <div className="metric-grid" aria-live="polite" aria-busy={isLoading}>
          <MetricCard label="Total visits" value={metrics?.totalVisits} />
          <MetricCard label="Unique visitors" value={metrics?.uniqueVisitors} />
          <MetricCard label="Visits today" value={metrics?.visitsToday} />
          <MetricCard label="Last recorded visit" value={metrics ? formatLastVisit(metrics.lastVisitAt) : undefined} isText />
        </div>
      )}
    </main>
  );
}

function MetricCard({ label, value, isText = false }: { label: string; value: number | string | undefined; isText?: boolean }) {
  return (
    <article className={`metric-card ${isText ? "metric-card--text" : ""}`}>
      <p>{label}</p>
      <strong>{value ?? "—"}</strong>
    </article>
  );
}
