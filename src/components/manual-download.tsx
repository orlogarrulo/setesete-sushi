import { Download } from "lucide-react";
import { useState } from "react";
import { downloadUrl } from "@/lib/export-sheet";
import { cn } from "@/lib/utils";

const MANUAL_HREF = "/docs/sete-sete-manual-seguimento.pdf";
const MANUAL_NAME = "Sete-Sete-manual-seguimento.pdf";

type Props = {
  className?: string;
  label?: string;
};

export function ManualDownload({ className, label = "Descarregar manual PDF" }: Props) {
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <button
        type="button"
        disabled={busy}
        onClick={() => {
          setBusy(true);
          setErr("");
          void downloadUrl(MANUAL_HREF, MANUAL_NAME)
            .catch(() => setErr("Não foi possível descarregar. Tenta de novo."))
            .finally(() => setBusy(false));
        }}
        className={cn(
          "inline-flex min-h-11 items-center gap-2 rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40",
          className,
        )}
      >
        <Download className="size-3.5" />
        {busy ? "A descarregar…" : label}
      </button>
      {err ? <span className="text-xs text-kaki">{err}</span> : null}
    </span>
  );
}
