import { createFileRoute } from "@tanstack/react-router";
import { Download, Printer } from "lucide-react";

export const Route = createFileRoute("/ops/manual/")({
  component: ManualPage,
});

function ManualPage() {
  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Operações</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-4xl">Manual de seguimento</h1>
          <p className="mt-2 max-w-xl text-sm text-stone">
            Como a encomenda sai da cozinha, quem confirma cada passo, e como o motoboy usa o telemóvel — sem instalar aplicação.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/docs/sete-sete-manual-seguimento.pdf"
            download
            className="inline-flex min-h-11 items-center gap-2 rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase"
          >
            <Download className="size-3.5" />
            Descarregar PDF
          </a>
          <button
            type="button"
            onClick={() => {
              const frame = document.querySelector<HTMLIFrameElement>("#manual-frame");
              frame?.contentWindow?.print();
            }}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase"
          >
            <Printer className="size-3.5" />
            Imprimir
          </button>
        </div>
      </div>
      <iframe
        id="manual-frame"
        title="Manual de seguimento Sete Sete"
        src="/manual/index.html"
        className="mt-8 min-h-[80vh] w-full rounded-xl bg-rice"
      />
    </div>
  );
}
