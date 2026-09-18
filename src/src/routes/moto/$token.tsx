import { createFileRoute } from "@tanstack/react-router";
import { Check, MapPin, Phone } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Mark } from "@/components/mark.tsx";
import { getRiderJob, riderAdvance, type RiderJob } from "@/lib/ops.functions";
import { STATUS_META, type OrderStatus } from "@/lib/ops";
import { clientWhatsAppDigits } from "@/lib/ticket";
import { formatKz, cn } from "@/lib/utils";

export const Route = createFileRoute("/moto/$token")({
  component: RiderPage,
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, nofollow" },
      { title: "Rota · Sete Sete" },
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
    ],
  }),
});

type Action = "pickup" | "nearby" | "delivered";

function nextAction(status: OrderStatus): { action: Action; label: string } | null {
  if (status === "confirmed" || status === "preparing" || status === "ready") {
    return { action: "pickup", label: "Recebi a encomenda · saí da casa" };
  }
  if (status === "out") return { action: "nearby", label: "Estou na zona do cliente" };
  if (status === "nearby") return { action: "delivered", label: "Encomenda entregue" };
  return null;
}

function RiderPage() {
  const { token } = Route.useParams();
  const [job, setJob] = useState<RiderJob | null | undefined>(undefined);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const load = useCallback(async () => {
    const next = await getRiderJob({ data: { token } });
    setJob(next);
  }, [token]);

  useEffect(() => {
    void load();
    const id = window.setInterval(() => void load(), 8000);
    return () => window.clearInterval(id);
  }, [load]);

  async function advance(action: Action) {
    setBusy(true);
    setErr("");
    try {
      await riderAdvance({ data: { token, action } });
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Não foi possível actualizar.");
    } finally {
      setBusy(false);
    }
  }

  if (job === undefined) {
    return (
      <main className="flex min-h-dvh items-center justify-center bg-nori text-rice">
        <p className="text-sm tracking-[0.2em] text-stone uppercase">A carregar rota…</p>
      </main>
    );
  }

  if (job === null) {
    return (
      <main className="flex min-h-dvh flex-col items-center justify-center bg-nori px-6 text-center text-rice">
        <Mark invert className="size-14" alt="Sete Sete" />
        <h1 className="mt-8 font-display text-4xl">Esta rota não existe.</h1>
        <p className="mt-3 max-w-xs text-sm text-stone">
          Pede um novo link ao escritório. O cliente não usa esta página.
        </p>
      </main>
    );
  }

  const wa = clientWhatsAppDigits(job.phone);
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${job.address}, ${job.zone}, Luanda`)}`;
  const action = nextAction(job.status);
  const done = job.status === "delivered";
  const blocked = job.status === "received" || job.status === "cancelled";

  return (
    <main className="min-h-dvh bg-nori px-4 py-8 text-rice">
      <div className="mx-auto max-w-md">
        <div className="flex items-center justify-between">
          <Mark invert className="size-10" alt="Sete Sete" />
          <p className="text-[11px] tracking-[0.22em] text-kaki-soft uppercase">Motoboy</p>
        </div>
        <p className="mt-8 text-[11px] tracking-[0.22em] text-stone uppercase">{job.id}</p>
        <h1 className="mt-2 font-display text-4xl">{STATUS_META[job.status].pt}</h1>
        <p className="mt-2 text-sm text-stone">
          {done ? "Entrega confirmada." : `~ ${job.remainingMin} min · ${job.zone}`}
        </p>

        <section className="mt-8 rounded-xl bg-rice/6 p-5">
          <p className="font-display text-3xl">{job.customerName}</p>
          <p className="mt-2 flex items-start gap-2 text-sm leading-relaxed">
            <MapPin className="mt-0.5 size-4 shrink-0 text-kaki-soft" />
            <span>
              {job.address}
              <span className="mt-1 block text-stone">{job.zone}</span>
            </span>
          </p>
          {job.notes ? <p className="mt-3 text-sm text-kaki-soft">{job.notes}</p> : null}
          <div className="mt-5 grid grid-cols-2 gap-2">
            <a
              href={`tel:+${wa}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-rice/10 text-sm font-semibold"
            >
              <Phone className="size-4" />
              Ligar
            </a>
            <a
              href={`https://wa.me/${wa}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-kaki text-sm font-semibold text-rice"
            >
              WhatsApp
            </a>
          </div>
          <a
            href={maps}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex min-h-11 items-center justify-center rounded-full border border-rice/15 text-xs font-semibold tracking-[0.12em] uppercase"
          >
            Abrir no mapa
          </a>
        </section>

        <ul className="mt-6 space-y-2 text-sm">
          {job.items.map((l) => (
            <li key={l.id} className="flex justify-between gap-3">
              <span>
                {l.qty}× {l.name}
              </span>
              <span className="tabular-nums text-kaki-soft">{formatKz(l.total)}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 flex justify-between border-t border-rice/10 pt-3 font-display text-2xl">
          <span>Total</span>
          <span className="tabular-nums">{formatKz(job.total)}</span>
        </p>
        <p className="mt-2 text-xs text-stone">
          {job.pay === "cash" ? "Receber em dinheiro na porta." : "Já pago · não cobrar na porta."}
        </p>

        {err ? <p className="mt-4 text-sm text-kaki">{err}</p> : null}

        {blocked ? (
          <p className="mt-8 rounded-xl bg-rice/6 px-4 py-5 text-sm leading-relaxed text-stone">
            {job.status === "cancelled"
              ? "Esta encomenda foi cancelada. Não saias."
              : "O escritório ainda não confirmou. Espera o sinal da cozinha."}
          </p>
        ) : done ? (
          <p className="mt-8 flex min-h-16 items-center justify-center gap-2 rounded-xl bg-kaki text-sm font-semibold tracking-[0.12em] uppercase">
            <Check className="size-4" />
            Entregue
          </p>
        ) : action ? (
          <button
            type="button"
            disabled={busy}
            onClick={() => void advance(action.action)}
            className={cn(
              "mt-8 flex min-h-16 w-full items-center justify-center rounded-xl text-base font-semibold tracking-[0.08em] uppercase disabled:opacity-40",
              action.action === "delivered" ? "bg-kaki text-rice" : "bg-rice text-nori",
            )}
          >
            {busy ? "A confirmar…" : action.label}
          </button>
        ) : null}

        <p className="mt-8 text-center text-[11px] leading-relaxed tracking-[0.08em] text-stone uppercase">
          Não precisas de instalar nada. Este link é só teu.
        </p>
      </div>
    </main>
  );
}
