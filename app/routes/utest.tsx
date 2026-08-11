import type { Route } from "./+types/utest";
import { UTestReleasePage } from "../modules/utest/UTestReleasePage";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "UTest v0.1.1 — HTTP verification runner" },
    {
      name: "description",
      content: "Download UTest, a command-line HTTP verification runner for post-deployment and pre-production checks.",
    },
  ];
}

export default function UTestRoute() {
  return <UTestReleasePage />;
}
