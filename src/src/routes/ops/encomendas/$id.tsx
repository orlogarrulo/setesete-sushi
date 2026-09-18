import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ExportBar } from "@/components/export-bar.tsx";
import { RouteMap } from "@/components/route-map.tsx";
import { KITCHEN } from "@/lib/geo";
import { FLOW, STATUS_META, nextStatus, waDigits, type CourierRow, type OrderEvent, type OrderRow, type OrderStatus } from "@/lib/ops";
import { getOrder, getReceipt, setOrderStatus, verifyPayment, attachReceipt, updateEta, assignCourier, listCouriers } from "@/lib/ops.functions";
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
  const [copiedRider, setCopiedRider] = useState(false);
  const [busy, setBusy] = useState(false);
  const [etaDraft, setEtaDraft] = useState<number | null>(null);
  const [etaNote, setEtaNote] = useState("");
  const [couriers, setCouriers] = useState<CourierRow[]>([]);
  const [proofs, setProofs] = useState<
    { id: string; mime: string; filename: string; dataB64: string; phone: string }[]
  >([]);

  const load = useCallback(async () => {
    const [row, list] = await Promise.all([
      getOrder({ data: { id } }),
      listCouriers({ data: { all: false } }),
    ]);
    setOrder(row);
    setCouriers(list);
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
          <section className="rounded-xl bg-kaki/15 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] tracking-[0.16em] text-kaki-soft uppercase">Motoboy · enviar rota</p>
                <p className="mt-2 text-sm text-rice/80">
                  Escolhe o estafeta. O botão abre o WhatsApp dele com o link desta encomenda.
                </p>
              </div>
              <Link
                to="/ops/motoboys"
                className="shrink-0 text-[11px] tracking-[0.12em] text-kaki-soft uppercase hover:text-rice"
              >
                Lista
              </Link>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {couriers.length === 0 ? (
                <p className="text-sm text-stone">Ainda sem motoboys activos. Cria-os em Motoboys.</p>
              ) : (
                couriers.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    disabled={busy}
                    onClick={() => {
                      setBusy(true);
                      void assignCourier({ data: { id: order.id, courierId: c.id } })
                        .then(() => load())
                        .finally(() => setBusy(false));
                    }}
                    className={cn(
                      "min-h-10 rounded-full px-3 text-[11px] font-semibold tracking-[0.1em] uppercase",
                      order.courierId === c.id || order.courierName === c.name
                        ? "bg-kaki text-rice"
                        : "bg-rice/8 text-rice/80 hover:bg-rice/15",
                    )}
                  >
                    {c.name}
                  </button>
                ))
              )}
            </div>
            {order.riderToken ? (
              <RiderActions
                order={order}
                couriers={couriers}
                copied={copiedRider}
                onCopied={() => {
                  setCopiedRider(true);
                  window.setTimeout(() => setCopiedRider(false), 1600);
                }}
              />
            ) : null}
          </section>

          <p className="mt-8 text-[11px] tracking-[0.16em] text-stone uppercase">Estado</p>
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

          <section className="mt-6 rounded-xl bg-rice/5 p-4">
            <p className="text-[11px] tracking-[0.16em] text-stone uppercase">Tempo de entrega</p>
            <p className="mt-2 font-display text-3xl tabular-nums">{etaDraft ?? order.etaMin} min</p>
            <p className="mt-1 text-xs text-stone">
              Base por zona. Em Luanda, edita quando houver trânsito, chuva ou falta de estafeta.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[30, 45, 60, 75, 90, 120].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setEtaDraft(n)}
                  className={cn(
                    "min-h-10 rounded-full px-3 text-[11px] font-semibold tracking-[0.1em] uppercase",
                    (etaDraft ?? order.etaMin) === n
                      ? "bg-kaki text-rice"
                      : "bg-rice/8 text-rice/80 hover:bg-rice/15",
                  )}
                >
                  {n} min
                </button>
              ))}
              <label className="inline-flex min-h-10 items-center gap-2 rounded-full bg-rice/8 px-3 text-[11px] tracking-[0.08em] uppercase">
                Outro
                <input
                  type="number"
                  min={15}
                  max={180}
                  value={etaDraft ?? order.etaMin}
                  onChange={(e) => {
                    const n = Number(e.target.value);
                    if (Number.isFinite(n)) setEtaDraft(Math.min(180, Math.max(15, Math.round(n))));
                  }}
                  className="w-14 bg-transparent text-right text-sm tabular-nums text-rice outline-none"
                />
                min
              </label>
            </div>
            <input
              value={etaNote}
              onChange={(e) => setEtaNote(e.target.value)}
              placeholder="Motivo — trânsito, chuva, motoboy atrasado…"
              className="mt-3 min-h-11 w-full rounded-lg border border-rice/15 bg-nori px-3 text-sm text-rice outline-none ring-kaki focus:ring-2"
            />
            <button
              type="button"
              disabled={busy || ((etaDraft ?? order.etaMin) === order.etaMin && !etaNote.trim())}
              onClick={() => {
                setBusy(true);
                void updateEta({
                  data: {
                    id: order.id,
                    etaMin: etaDraft ?? order.etaMin,
                    note: etaNote,
                  },
                })
                  .then(() => {
                    setEtaNote("");
                    return load();
                  })
                  .finally(() => setBusy(false));
              }}
              className="mt-3 flex min-h-11 w-full items-center justify-center rounded-full border border-rice/15 text-xs font-semibold tracking-[0.12em] uppercase disabled:opacity-40"
            >
              Actualizar tempo
            </button>
          </section>

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

function RiderActions({
  order,
  couriers,
  copied,
  onCopied,
}: {
  order: OrderRow;
  couriers: CourierRow[];
  copied: boolean;
  onCopied: () => void;
}) {
  const assigned =
    couriers.find((c) => c.id === order.courierId) ??
    couriers.find((c) => c.name === order.courierName);
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const riderUrl = `${origin}/moto/${order.riderToken}`;
  const wa = assigned ? waDigits(assigned.phone) : "";
  const text = encodeURIComponent(
    `Sete Sete · ${order.id}\n${order.customerName} · ${order.address}, ${order.zone}\nAbre este link e confirma a saída e a entrega:\n${riderUrl}`,
  );

  return (
    <div className="mt-4 space-y-2">
      {assigned && !wa ? (
        <p className="text-xs text-kaki">
          {assigned.name} ainda não tem WhatsApp. Adiciona o número em Motoboys.
        </p>
      ) : null}
      {!assigned ? (
        <p className="text-xs text-stone">Escolhe o motoboy em cima para enviar o link ao número dele.</p>
      ) : null}
      <label className="block text-[11px] tracking-[0.12em] text-stone uppercase">
        Link da rota (motoboy)
        <input
          readOnly
          value={riderUrl}
          onFocus={(e) => e.currentTarget.select()}
          className="mt-2 min-h-11 w-full rounded-lg border border-rice/15 bg-nori px-3 font-mono text-xs text-rice outline-none"
        />
      </label>
      <div className="flex flex-col gap-2 sm:flex-row">
        {wa ? (
          <a
            href={`https://wa.me/${wa}?text=${text}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase"
          >
            Enviar rota a {assigned?.name}
          </a>
        ) : (
          <span className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-rice/8 px-4 text-xs font-semibold tracking-[0.12em] text-stone uppercase">
            Sem WhatsApp do motoboy
          </span>
        )}
        <button
          type="button"
          onClick={() => {
            void navigator.clipboard.writeText(riderUrl).then(onCopied);
          }}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase"
        >
          {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
          {copied ? "Link copiado" : "Copiar link"}
        </button>
        <Link
          to="/moto/$token"
          params={{ token: order.riderToken }}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase"
        >
          Abrir ecrã da rota
        </Link>
      </div>
    </div>
  );
}
