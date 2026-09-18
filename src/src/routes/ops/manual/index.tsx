import { createFileRoute, Link } from "@tanstack/react-router";
import { Printer } from "lucide-react";
import { ManualDownload } from "@/components/manual-download.tsx";

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
            PDF da casa: escritório, cozinha, motoboy. Descarrega para o computador ou imprime a partir desta página.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ManualDownload />
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
      <p className="mt-4 text-sm text-stone">
        Motoboys e o ecrã da rota estão em{" "}
        <Link to="/ops/motoboys" className="text-kaki-soft underline-offset-4 hover:underline">
          Motoboys
        </Link>
        . Não misturar com o CRM de clientes.
      </p>
      <iframe
        id="manual-frame"
        title="Manual de seguimento Sete Sete"
        src="/manual/index.html"
        className="mt-8 min-h-[85vh] w-full rounded-xl bg-rice"
      />
    </div>
  );
}
