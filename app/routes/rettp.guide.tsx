import type { Route } from "./+types/rettp.guide";
import { ReTTPGuidePage } from "../modules/ReTTP/ReTTPGuidePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ReTTP DSL Guide — Structure & execution" },
    { name: "description", content: "Learn ReTTP DSL suite structure, variables, assertions, captures, and execution flow." },
  ];
}

export default function ReTTPGuideRoute() {
  return <ReTTPGuidePage />;
}
