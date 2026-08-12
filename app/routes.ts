import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("metric", "routes/metric.tsx"),
  route("rettp", "routes/rettp.tsx"),
  route("rettp/guide", "routes/rettp.guide.tsx"),
] satisfies RouteConfig;
