import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState, type FormEvent } from "react";
import { FLOW, STATUS_META, nextStatus, type OrderRow, type OrderStatus } from "@/lib/ops";
import { findOrders, listOrders, setOrderStatus } from "@/lib/ops.functions";
import { formatKz, cn } from "@/lib/utils";

export const Route = createFileRoute("/ops/encomendas/")({
  component: EncomendasPage,
});

const COLS: { id: string; title: string; statuses: OrderStatus[] }[] = [
  { id: "in", title: "Recebidos", statuses: ["received", "confirmed"] },
  { id: "cook", title: "Cozinha", statuses: ["preparing"] },
  { id: "ready", title: "Prontos", statuses: ["ready"] },
  { id: "route", title: "Em rota", statuses: ["out", "nearby"] },
  { id: "done", title: "Entregues", statuses: ["delivered"] },
];

function EncomendasPage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState<string | null>(null);
  const [lookup, setLookup] = useState("");
  const [lookupErr, setLookupErr] = useState("");
  const [hits, setHits] = useState<OrderRow[] | null>(null);

  const load = useCallback(async () => {
    const rows = await listOrders({ data: {} });
    setOrders(rows);
  }, []);

  useEffect(() => {
    void load().catch((e: unknown) => setErr(e instanceof Error ? e.message : "Erro"));
    const id = window.setInterval(() => void load(), 5000);
    return () => window.clearInterval(id);
  }, [load]);

  const live = useMemo(
    () => orders.filter((o) => o.status !== "cancelled" && o.status !== "delivered"),
    [orders],
  );

  async function advance(order: OrderRow) {
    const next = nextStatus(order.status);
    if (!next) return;
    setBusy(order.id);
    try {
      await setOrderStatus({ data: { id: order.id, status: next, note: "" } });
      await load();
    } finally {
      setBusy(null);
    }
  }

  if (err) return <p className="text-sm text-kaki">{err}</p>;

  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Cozinha</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-4xl">Encomendas</h1>
        <p className="text-sm text-stone">{live.length} em curso</p>
      </div>
      <p className="mt-3 max-w-2xl text-sm text-stone">
        Verifica a fatura pela referência (SS-…). O comprovativo fica ligado ao
        telefone do cliente. Avança o estado quando o pagamento estiver certo.
      </p>

      <form
        className="mt-6 flex flex-col gap-2 sm:flex-row"
        onSubmit={(e: FormEvent) => {
          e.preventDefault();
          const q = lookup.trim();
          if (q.length < 2) return;
          setLookupErr("");
          void findOrders({ data: { q } })
            .then((rows) => {
              if (rows.length === 1) {
                void navigate({ to: "/ops/encomendas/$id", params: { id: rows[0].id } });
                return;
              }
              setHits(rows);
              if (rows.length === 0) setLookupErr("Nenhuma encomenda com essa referência ou telefone.");
            })
            .catch((er: unknown) => setLookupErr(er instanceof Error ? er.message : "Erro"));
        }}
      >
        <input
          value={lookup}
          onChange={(e) => setLookup(e.target.value)}
          placeholder="Referência da fatura ou telefone"
          className="min-h-12 flex-1 rounded-full border border-rice/15 bg-nori px-4 text-sm text-rice outline-none ring-kaki focus:ring-2"
        />
        <button
          type="submit"
          className="min-h-12 rounded-full bg-kaki px-5 text-xs font-semibold tracking-[0.14em] text-rice uppercase"
        >
          Verificar
        </button>
      </form>
      {lookupErr ? <p className="mt-2 text-sm text-kaki">{lookupErr}</p> : null}
      {hits && hits.length > 1 ? (
        <ul className="mt-4 space-y-2">
          {hits.map((o) => (
            <li key={o.id}>
              <Link
                to="/ops/encomendas/$id"
                params={{ id: o.id }}
                className="flex items-center justify-between rounded-lg bg-rice/6 px-4 py-3 text-sm hover:bg-rice/10"
              >
                <span>
                  <span className="font-medium">{o.id}</span>
                  <span className="ml-2 text-stone">{o.customerName} · {o.phone}</span>
                </span>
                <span className="tabular-nums text-kaki-soft">{formatKz(o.total)}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-8 flex gap-3 overflow-x-auto pb-4">
        {COLS.map((col) => {
          const items = orders.filter((o) => col.statuses.includes(o.status));
          return (
            <section
              key={col.id}
              className="w-64 shrink-0 rounded-xl bg-rice/4 p-3 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-rice)_8%,transparent)]"
            >
              <header className="flex items-baseline justify-between px-1 pb-2">
                <h2 className="text-[11px] tracking-[0.16em] text-stone uppercase">{col.title}</h2>
                <span className="text-xs tabular-nums text-kaki-soft">{items.length}</span>
              </header>
              <ul className="space-y-2">
                {items.length === 0 ? (
                  <li className="px-2 py-6 text-center text-xs text-stone">Vazio</li>
                ) : (
                  items.map((o) => (
                    <li
                      key={o.id}
                      className="rounded-lg bg-nori px-3 py-3 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-rice)_8%,transparent)]"
                    >
                      <Link
                        to="/ops/encomendas/$id"
                        params={{ id: o.id }}
                        className="block"
                      >
                        <p className="text-xs tracking-wide text-stone">{o.id}</p>
                        <p className="mt-1 font-medium">{o.customerName}</p>
                        <p className="text-xs text-stone">{o.zone}</p>
                        <p className="mt-1 text-sm tabular-nums text-kaki-soft">
                          {formatKz(o.total)}
                        </p>
                        <p className="mt-1 text-[10px] tracking-[0.12em] uppercase">
                          {o.payVerified ? (
                            <span className="text-kaki-soft">Pago verificado</span>
                          ) : o.hasReceipt ? (
                            <span className="text-stone">Comprovativo · a verificar</span>
                          ) : (
                            <span className="text-kaki">Sem comprovativo</span>
                          )}
                        </p>
                      </Link>
                      {nextStatus(o.status) ? (
                        <button
                          type="button"
                          disabled={busy === o.id}
                          onClick={() => void advance(o)}
                          className="mt-3 flex min-h-10 w-full items-center justify-center rounded-full bg-kaki text-[11px] font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40"
                        >
                          {STATUS_META[nextStatus(o.status)!].pt}
                        </button>
                      ) : null}
                    </li>
                  ))
                )}
              </ul>
            </section>
          );
        })}
      </div>

      <section className="mt-10">
        <h2 className="font-display text-2xl">Todas</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="text-[11px] tracking-[0.16em] text-stone uppercase">
                <th className="py-2 font-medium">Fatura</th>
                <th className="py-2 font-medium">Cliente</th>
                <th className="py-2 font-medium">Zona</th>
                <th className="py-2 font-medium">Estado</th>
                <th className="py-2 text-right font-medium">Total</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o) => (
                <tr key={o.id} className="border-t border-rice/8">
                  <td className="py-3">
                    <Link
                      to="/ops/encomendas/$id"
                      params={{ id: o.id }}
                      className="hover:text-kaki-soft"
                    >
                      {o.id}
                    </Link>
                  </td>
                  <td className="py-3">{o.customerName}</td>
                  <td className="py-3 text-stone">{o.zone}</td>
                  <td className="py-3">
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 text-[11px] tracking-wide uppercase",
                        FLOW.includes(o.status) && o.status !== "delivered"
                          ? "bg-kaki/20 text-kaki-soft"
                          : "bg-rice/8 text-stone",
                      )}
                    >
                      {STATUS_META[o.status].pt}
                    </span>
                  </td>
                  <td className="py-3 text-right tabular-nums">{formatKz(o.total)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
