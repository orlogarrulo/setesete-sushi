import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { RouteMap } from "@/components/route-map.tsx";
import { KITCHEN } from "@/lib/geo";
import {
  FLOW,
  STATUS_META,
  nextStatus,
  type OrderEvent,
  type OrderRow,
  type OrderStatus,
} from "@/lib/ops";
import { getOrder, setOrderStatus } from "@/lib/ops.functions";
import { formatKz, cn } from "@/lib/utils";

export const Route = createFileRoute("/ops/encomendas/$id")({
  component: OrderDetail,
});

type Detail = OrderRow & {
  events: OrderEvent[];
  progress: number;
  remainingMin: number;
};

function OrderDetail() {
  const { id } = Route.useParams();
  const [order, setOrder] = useState<Detail | null | undefined>(undefined);
  const [copied, setCopied] = useState(false);
  const [busy, setBusy] = useState(false);

  const load = useCallback(async () => {
    const row = await getOrder({ data: { id } });
    setOrder(row);
  }, [id]);

  useEffect(() => {
    void load();
  }, [load]);

  if (order === undefined) return <p className="text-sm text-stone">A carregar…</p>;
  if (order === null) return <p className="text-sm text-kaki">Encomenda não encontrada.</p>;

  const origin = {
    lat: order.originLat,
    lng: order.originLng,
    name: KITCHEN.name,
    zone: KITCHEN.zone,
  };
  const dest = {
    lat: order.destLat,
    lng: order.destLng,
    name: order.address,
    zone: order.zone,
  };
  const trackPath = `/seguir/${order.trackToken}`;
  const next = nextStatus(order.status);

  async function setStatus(status: OrderStatus) {
    setBusy(true);
    try {
      await setOrderStatus({ data: { id: order!.id, status, note: "" } });
      await load();
    } finally {
      setBusy(false);
    }
  }

  async function copyLink() {
    const url = `${window.location.origin}${trackPath}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div>
      <Link to="/ops/encomendas" className="text-xs tracking-[0.14em] text-stone uppercase hover:text-rice">
        ← Encomendas
      </Link>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">{order.id}</p>
          <h1 className="mt-1 font-display text-4xl">{order.customerName}</h1>
          <p className="mt-2 text-sm text-stone">
            {order.zone} · {order.address}
          </p>
        </div>
        <p className="font-display text-3xl tabular-nums">{formatKz(order.total)}</p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <RouteMap
          origin={origin}
          dest={dest}
          progress={order.progress}
          moving={order.status === "out" || order.status === "nearby"}
        />
        <div>
          <p className="text-[11px] tracking-[0.16em] text-stone uppercase">Estado</p>
          <p className="mt-2 font-display text-3xl">{STATUS_META[order.status].pt}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {FLOW.map((st) => (
              <button
                key={st}
                type="button"
                disabled={busy || st === order.status}
                onClick={() => void setStatus(st)}
                className={cn(
                  "min-h-10 rounded-full px-3 text-[11px] font-semibold tracking-[0.1em] uppercase",
                  st === order.status
                    ? "bg-kaki text-rice"
                    : "bg-rice/8 text-rice/80 hover:bg-rice/15",
                )}
              >
                {STATUS_META[st].pt}
              </button>
            ))}
            <button
              type="button"
              disabled={busy || order.status === "cancelled"}
              onClick={() => void setStatus("cancelled")}
              className="min-h-10 rounded-full bg-rice/8 px-3 text-[11px] font-semibold tracking-[0.1em] text-stone uppercase hover:bg-rice/15"
            >
              Cancelar
            </button>
          </div>
          {next ? (
            <button
              type="button"
              disabled={busy}
              onClick={() => void setStatus(next)}
              className="mt-4 flex min-h-12 w-full items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40"
            >
              Avançar · {STATUS_META[next].pt}
            </button>
          ) : null}

          <div className="mt-6 flex gap-2">
            <button
              type="button"
              onClick={() => void copyLink()}
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase"
            >
              {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
              {copied ? "Copiado" : "Copiar link de seguimento"}
            </button>
            <Link
              to="/seguir/$token"
              params={{ token: order.trackToken }}
              className="inline-flex min-h-11 items-center rounded-full bg-rice px-4 text-xs font-semibold tracking-[0.12em] text-nori uppercase"
            >
              Ver como o cliente
            </Link>
          </div>

          <ul className="mt-6 space-y-2 text-sm">
            {order.items.map((l) => (
              <li key={l.id} className="flex justify-between gap-3">
                <span>
                  {l.qty}× {l.name}
                </span>
                <span className="tabular-nums text-kaki-soft">{formatKz(l.total)}</span>
              </li>
            ))}
          </ul>
          {order.courierName ? (
            <p className="mt-4 text-xs text-stone">Estafeta · {order.courierName}</p>
          ) : null}
          <p className="mt-2 text-xs text-stone">Tel. {order.phone}</p>
          {order.notes ? <p className="mt-2 text-xs text-stone">Notas: {order.notes}</p> : null}

          <Link
            to="/ops/crm/$id"
            params={{ id: order.customerId }}
            className="mt-6 inline-block text-xs tracking-[0.14em] text-kaki-soft uppercase"
          >
            Ficha CRM →
          </Link>
        </div>
      </div>
    </div>
  );
}
