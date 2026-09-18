import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ExportBar } from "@/components/export-bar.tsx";
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
import { getOrder, getReceipt, setOrderStatus, verifyPayment, attachReceipt } from "@/lib/ops.functions";
import { fileToReceipt } from "@/lib/receipt-file";
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
  const [proofs, setProofs] = useState<
    { id: string; mime: string; filename: string; dataB64: string; phone: string }[]
  >([]);

  const load = useCallback(async () => {
    const row = await getOrder({ data: { id } });
    setOrder(row);
    if (row) {
      const recs = await getReceipt({ data: { orderId: row.id } });
      setProofs(recs);
    }
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
        <div className="flex flex-col items-end gap-3">
          <p className="font-display text-3xl tabular-nums">{formatKz(order.total)}</p>
          <ExportBar
            title={`Fatura ${order.id}`}
            filename={`fatura-${order.id}`}
            orientation="portrait"
            headers={["Campo", "Valor"]}
            rows={[
              ["Fatura", order.id],
              ["Cliente", order.customerName],
              ["Telefone", order.phone],
              ["Zona", order.zone],
              ["Morada", order.address],
              ["Estado", STATUS_META[order.status].pt],
              ["Pagamento", order.pay],
              ["Total Kz", order.total],
              ["Comprovativo", order.hasReceipt ? order.receiptName ?? "sim" : "não"],
              ["Pago", order.payVerified ? "verificado" : "pendente"],
              ["Criada", order.createdAt.replace("T", " ").slice(0, 16)],
              ...order.items.map((l) => [`${l.qty}× ${l.name}`, formatKz(l.total)]),
            ]}
          />
        </div>
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

          <section className="mt-8 rounded-xl bg-rice/5 p-4">
            <p className="text-[11px] tracking-[0.16em] text-stone uppercase">
              Comprovativo · {order.id}
            </p>
            <p className="mt-1 text-sm text-stone">Ligado ao WhatsApp {order.phone}</p>
            <p className="mt-2 text-xs tracking-[0.12em] uppercase">
              {order.payVerified ? (
                <span className="text-kaki-soft">Pagamento verificado</span>
              ) : (
                <span className="text-kaki">Aguardando verificação</span>
              )}
            </p>
            <div className="mt-4 space-y-3">
              {proofs.length === 0 ? (
                <p className="text-sm text-stone">Ainda sem ficheiro nesta ficha.</p>
              ) : (
                proofs.map((p) => (
                  <figure key={p.id} className="overflow-hidden rounded-lg bg-nori">
                    {p.mime.startsWith("image/") ? (
                      <img
                        src={`data:${p.mime};base64,${p.dataB64}`}
                        alt={`Comprovativo ${order.id}`}
                        className="max-h-80 w-full object-contain"
                      />
                    ) : (
                      <iframe
                        title={p.filename}
                        src={`data:${p.mime};base64,${p.dataB64}`}
                        className="h-80 w-full bg-rice"
                      />
                    )}
                    <figcaption className="px-3 py-2 text-xs text-stone">
                      {p.filename} · {p.phone}
                    </figcaption>
                  </figure>
                ))
              )}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                disabled={busy || order.payVerified}
                onClick={() => {
                  setBusy(true);
                  void verifyPayment({ data: { id: order.id, ok: true } })
                    .then(() => load())
                    .finally(() => setBusy(false));
                }}
                className="min-h-11 rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase disabled:opacity-40"
              >
                Confirmar pagamento
              </button>
              <label className="inline-flex min-h-11 cursor-pointer items-center rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase">
                Anexar outro
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp,application/pdf"
                  className="sr-only"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    setBusy(true);
                    void fileToReceipt(f)
                      .then((receipt) => attachReceipt({ data: { orderId: order.id, receipt } }))
                      .then(() => load())
                      .finally(() => setBusy(false));
                  }}
                />
              </label>
            </div>
          </section>

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
