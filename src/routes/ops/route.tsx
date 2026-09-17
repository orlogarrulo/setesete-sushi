import { createFileRoute } from "@tanstack/react-router";
import { OpsShell } from "@/components/ops-shell.tsx";

export const Route = createFileRoute("/ops")({
  component: OpsShell,
});
