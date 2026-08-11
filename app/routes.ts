import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("metric", "routes/metric.tsx"),
  route("utest", "routes/utest.tsx"),
  route("utest/guide", "routes/utest.guide.tsx"),
] satisfies RouteConfig;
