import type { Route } from "./+types/rettp";
import { ReTTPReleasePage } from "../modules/ReTTP/ReTTPReleasePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ReTTP v0.1.1 — HTTP verification runner" },
    {
      name: "description",
      content: "Download ReTTP, a command-line HTTP verification runner for post-deployment and pre-production checks.",
    },
  ];
}

export default function ReTTPRoute() {
  return <ReTTPReleasePage />;
}
