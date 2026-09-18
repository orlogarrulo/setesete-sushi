import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { ExportBar } from "@/components/export-bar.tsx";
import { listReceipts, verifyPayment } from "@/lib/ops.functions";
import { formatKz, cn } from "@/lib/utils";

export const Route = createFileRoute("/ops/comprovativos/")({
  component: ProofsPage,
});

type Row = Awaited<ReturnType<typeof listReceipts>>[number];

function ProofsPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [q, setQ] = useState("");
  const [pending, setPending] = useState(true);
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    const list = await listReceipts({ data: { q, pending } });
    setRows(list);
  }, [q, pending]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      void load().catch((e: unknown) => setErr(e instanceof Error ? e.message : "Erro"));
    }, 120);
    return () => window.clearTimeout(t);
  }, [load]);

  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Pagamentos</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-4xl">Comprovativos</h1>
        <ExportBar
          title="Comprovativos Sete Sete"
          filename="setesete-comprovativos"
          orientation="landscape"
          headers={["Fatura", "Cliente", "Telefone", "Pagamento", "Ficheiro", "Total Kz", "Verificado", "Data"]}
          rows={rows.map((r) => [
            r.orderId,
            r.customerName,
            r.phone,
            r.pay,
            r.filename,
            r.total,
            r.payVerified ? "sim" : "não",
            r.createdAt.replace("T", " ").slice(0, 16),
          ])}
        />
      </div>
      <p className="mt-3 max-w-2xl text-sm text-stone">
        Cada ficheiro fica associado à referência da fatura e ao telefone /whatsapp
        do cliente. Verifica aqui antes de a cozinha avançar.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Fatura, telefone ou nome"
          className="min-h-12 flex-1 rounded-full border border-rice/15 bg-nori px-4 text-sm text-rice outline-none ring-kaki focus:ring-2"
        />
        <button
          type="button"
          onClick={() => setPending((v) => !v)}
          className={cn(
            "min-h-12 rounded-full px-5 text-xs font-semibold tracking-[0.14em] uppercase",
            pending ? "bg-kaki text-rice" : "border border-rice/15",
          )}
        >
          {pending ? "Só por verificar" : "Todos"}
        </button>
      </div>
      {err ? <p className="mt-3 text-sm text-kaki">{err}</p> : null}

      <ul className="mt-8 divide-y divide-rice/10">
        {rows.length === 0 ? (
          <li className="py-10 text-sm text-stone">Nenhum comprovativo neste filtro.</li>
        ) : (
          rows.map((r) => (
            <li key={r.id} className="flex flex-wrap items-center justify-between gap-3 py-4">
              <div>
                <p className="text-xs tracking-wide text-stone">{r.orderId}</p>
                <p className="mt-1 font-medium">{r.customerName}</p>
                <p className="text-sm text-stone">{r.phone}</p>
                <p className="mt-1 text-xs text-stone">
                  {r.pay} · {r.filename} · {formatKz(r.total)}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {r.payVerified ? (
                  <span className="text-[10px] tracking-[0.14em] text-kaki-soft uppercase">Verificado</span>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      void verifyPayment({ data: { id: r.orderId, ok: true } }).then(() => load());
                    }}
                    className="min-h-10 rounded-full bg-kaki px-4 text-[11px] font-semibold tracking-[0.12em] text-rice uppercase"
                  >
                    Verificar
                  </button>
                )}
                <Link
                  to="/ops/encomendas/$id"
                  params={{ id: r.orderId }}
                  className="min-h-10 rounded-full border border-rice/15 px-4 text-[11px] font-semibold tracking-[0.12em] uppercase"
                >
                  Ver fatura
                </Link>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
