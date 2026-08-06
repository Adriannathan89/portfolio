import { createHash, randomUUID, timingSafeEqual } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import { createRequestHandler } from "@react-router/express";

const rootDirectory = path.dirname(fileURLToPath(import.meta.url));
const metricsDirectory = path.join(rootDirectory, ".data");
const metricsFile = path.join(metricsDirectory, "metrics.json");
const emptyMetrics = () => ({
  totalVisits: 0,
  uniqueVisitorIds: [],
  visitsByDay: {},
  lastVisitAt: null,
});

function readMetrics() {
  if (!existsSync(metricsFile)) return emptyMetrics();

  try {
    const data = JSON.parse(readFileSync(metricsFile, "utf8"));
    return {
      ...emptyMetrics(),
      ...data,
      uniqueVisitorIds: Array.isArray(data.uniqueVisitorIds)
        ? data.uniqueVisitorIds.filter((id) => typeof id === "string")
        : [],
      visitsByDay:
        data.visitsByDay && typeof data.visitsByDay === "object"
          ? data.visitsByDay
          : {},
    };
  } catch {
    return emptyMetrics();
  }
}

let metrics = readMetrics();

function persistMetrics() {
  mkdirSync(metricsDirectory, { recursive: true });
  writeFileSync(metricsFile, JSON.stringify(metrics, null, 2));
}

function getCookie(request, name) {
  const cookie = request.headers.cookie;
  if (!cookie) return undefined;
  const value = cookie.split(";").find((entry) => entry.trim().startsWith(`${name}=`));
  return value ? decodeURIComponent(value.trim().slice(name.length + 1)) : undefined;
}

function recordVisit(visitorId) {
  const visitorHash = createHash("sha256").update(visitorId).digest("hex");
  const today = new Date().toISOString().slice(0, 10);

  metrics.totalVisits += 1;
  metrics.visitsByDay[today] = (metrics.visitsByDay[today] ?? 0) + 1;
  metrics.lastVisitAt = new Date().toISOString();
  if (!metrics.uniqueVisitorIds.includes(visitorHash)) {
    metrics.uniqueVisitorIds.push(visitorHash);
  }
  persistMetrics();
}

function metricSummary() {
  const today = new Date().toISOString().slice(0, 10);
  return {
    totalVisits: metrics.totalVisits,
    uniqueVisitors: metrics.uniqueVisitorIds.length,
    visitsToday: metrics.visitsByDay[today] ?? 0,
    lastVisitAt: metrics.lastVisitAt,
  };
}

const build = await import("./build/server/index.js");
const app = express();
const port = Number(process.env.PORT ?? 3000);
const metricsUsername = process.env.METRICS_USERNAME;
const metricsPassword = process.env.METRICS_PASSWORD;

function credentialsMatch(actual, expected) {
  const actualHash = createHash("sha256").update(actual).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(actualHash, expectedHash);
}

function requireMetricsAuth(request, response, next) {
  if (!metricsUsername || !metricsPassword) {
    response.status(503).send("Metrics authentication is not configured.");
    return;
  }

  const authorization = request.get("authorization");
  if (!authorization?.startsWith("Basic ")) {
    response.set("WWW-Authenticate", 'Basic realm="Portfolio metrics", charset="UTF-8"');
    response.status(401).send("Authentication required.");
    return;
  }

  const credentials = Buffer.from(authorization.slice(6), "base64").toString("utf8");
  const separator = credentials.indexOf(":");
  const username = separator === -1 ? "" : credentials.slice(0, separator);
  const password = separator === -1 ? "" : credentials.slice(separator + 1);

  if (
    !credentialsMatch(username, metricsUsername) ||
    !credentialsMatch(password, metricsPassword)
  ) {
    response.set("WWW-Authenticate", 'Basic realm="Portfolio metrics", charset="UTF-8"');
    response.status(401).send("Authentication required.");
    return;
  }

  next();
}

app.disable("x-powered-by");
app.use("/assets", express.static(path.join(rootDirectory, build.assetsBuildDirectory, "assets"), {
  immutable: true,
  maxAge: "1y",
}));
app.use(express.static(path.join(rootDirectory, build.assetsBuildDirectory)));
app.use(express.static(path.join(rootDirectory, "public"), { maxAge: "1h" }));

app.use(["/metric", "/api/metrics"], requireMetricsAuth);

app.get("/api/metrics", (_request, response) => {
  response.set("Cache-Control", "no-store");
  response.json(metricSummary());
});

app.use((request, response, next) => {
  const acceptsHtml = request.accepts(["html"]);
  const isTrackablePage = request.method === "GET" && acceptsHtml === "html" && request.path !== "/metric";
  if (!isTrackablePage) return next();

  let visitorId = getCookie(request, "portfolio_visitor");
  if (!visitorId) {
    visitorId = randomUUID();
    response.cookie("portfolio_visitor", visitorId, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
  }

  recordVisit(visitorId);
  next();
});

app.all("/{*splat}", createRequestHandler({ build, mode: process.env.NODE_ENV }));

app.listen(port, () => {
  console.log(`Portfolio metrics server listening on http://localhost:${port}`);
});
