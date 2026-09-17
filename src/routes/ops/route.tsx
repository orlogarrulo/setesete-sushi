import { createFileRoute } from "@tanstack/react-router";
import { OpsShell } from "@/components/ops-shell.tsx";

export const Route = createFileRoute("/ops")({
  component: OpsShell,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Sete Sete" },
    ],
  }),
});
