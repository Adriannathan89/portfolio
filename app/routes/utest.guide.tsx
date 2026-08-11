import type { Route } from "./+types/utest.guide";
import { UTestGuidePage } from "../modules/utest/UTestGuidePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UTest DSL Guide — Structure & execution" },
    { name: "description", content: "Learn UTest DSL suite structure, variables, assertions, captures, and execution flow." },
  ];
}

export default function UTestGuideRoute() {
  return <UTestGuidePage />;
}
