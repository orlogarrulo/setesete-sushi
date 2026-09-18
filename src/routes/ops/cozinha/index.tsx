import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";
import { listOrders, setOrderStatus } from "@/lib/ops.functions";
import { STATUS_META, type OrderRow, type OrderStatus } from "@/lib/ops";
import { formatKz } from "@/lib/utils";

export const Route = createFileRoute("/ops/cozinha/")({
  component: KitchenBoard,
});

const QUEUE: OrderStatus[] = ["confirmed", "preparing", "ready"];

function KitchenBoard() {
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [busy, setBusy] = useState<string | null>(null);

  const load = useCallback(async () => {
    const rows = await listOrders({ data: {} });
    setOrders(rows.filter((o) => QUEUE.includes(o.status)));
  }, []);

  useEffect(() => {
    void load();
    const id = window.setInterval(() => void load(), 5000);
    return () => window.clearInterval(id);
  }, [load]);

  async function go(id: string, status: OrderStatus) {
    setBusy(id);
    try {
      await setOrderStatus({
        data: {
          id,
          status,
          note:
            status === "preparing"
              ? "Cozinha começou a montar."
              : "Pronto para o estafeta.",
        },
      });
      await load();
    } finally {
      setBusy(null);
    }
  }

  const columns = QUEUE.map((st) => ({
    st,
    rows: orders.filter((o) => o.status === st),
  }));

  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Cozinha</p>
      <h1 className="mt-2 font-display text-4xl">Pass</h1>
      <p className="mt-2 max-w-xl text-sm text-stone">
        A cozinha confirma o prato. O escritório confirma o pagamento. O motoboy confirma a saída e a entrega.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {columns.map((col) => (
          <section key={col.st} className="rounded-xl bg-rice/5 p-4">
            <p className="text-[11px] tracking-[0.16em] text-stone uppercase">
              {STATUS_META[col.st].pt} · {col.rows.length}
            </p>
            <ul className="mt-4 space-y-3">
              {col.rows.length === 0 ? (
                <li className="text-sm text-stone">Vazio.</li>
              ) : (
                col.rows.map((o) => (
                  <li key={o.id} className="rounded-lg bg-nori p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-xs tracking-[0.12em] text-kaki-soft uppercase">{o.id}</p>
                        <p className="mt-1 font-medium">{o.customerName}</p>
                        <p className="mt-1 text-xs text-stone">{o.zone}</p>
                      </div>
                      <p className="text-sm tabular-nums text-kaki-soft">{formatKz(o.total)}</p>
                    </div>
                    <ul className="mt-3 space-y-1 text-sm text-rice/80">
                      {o.items.map((l) => (
                        <li key={l.id}>
                          {l.qty}× {l.name}
                        </li>
                      ))}
                    </ul>
                    {col.st === "confirmed" ? (
                      <button
                        type="button"
                        disabled={busy === o.id}
                        onClick={() => void go(o.id, "preparing")}
                        className="mt-4 flex min-h-11 w-full items-center justify-center rounded-full bg-kaki text-xs font-semibold tracking-[0.12em] text-rice uppercase disabled:opacity-40"
                      >
                        Começar
                      </button>
                    ) : col.st === "preparing" ? (
                      <button
                        type="button"
                        disabled={busy === o.id}
                        onClick={() => void go(o.id, "ready")}
                        className="mt-4 flex min-h-11 w-full items-center justify-center rounded-full bg-rice text-xs font-semibold tracking-[0.12em] text-nori uppercase disabled:opacity-40"
                      >
                        Pronto para o motoboy
                      </button>
                    ) : (
                      <p className="mt-4 text-xs tracking-[0.12em] text-stone uppercase">
                        À espera do estafeta
                        {o.courierName ? ` · ${o.courierName}` : ""}
                      </p>
                    )}
                    <Link
                      to="/ops/encomendas/$id"
                      params={{ id: o.id }}
                      className="mt-2 block text-center text-[11px] tracking-[0.14em] text-stone uppercase hover:text-rice"
                    >
                      Ficha
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
