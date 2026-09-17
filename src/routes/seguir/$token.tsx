import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Copy, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { RouteMap } from "@/components/route-map.tsx";
import { Shell } from "@/components/shell.tsx";
import { copy, t } from "@/lib/copy";
import { FLOW, STATUS_META, type PublicTracking } from "@/lib/ops";
import { getTracking } from "@/lib/ops.functions";
import { formatKz, cn } from "@/lib/utils";
import { useLang } from "@/store/lang";

export const Route = createFileRoute("/seguir/$token")({
  component: TrackPage,
});

function TrackPage() {
  const { token } = Route.useParams();
  const lang = useLang((s) => s.lang);
  const [data, setData] = useState<PublicTracking | null | undefined>(undefined);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    let alive = true;
    async function load() {
      const next = await getTracking({ data: { token } });
      if (alive) setData(next);
    }
    void load();
    const id = window.setInterval(() => void load(), 4000);
    return () => {
      alive = false;
      window.clearInterval(id);
    };
  }, [token]);

  if (data === undefined) {
    return (
      <Shell>
        <main className="mx-auto max-w-5xl px-4 py-20 text-sm text-stone">
          {lang === "pt" ? "A localizar a encomenda…" : "Locating the order…"}
        </main>
      </Shell>
    );
  }

  if (data === null) {
    return (
      <Shell>
        <main className="mx-auto max-w-xl px-4 py-20 text-center">
          <p className="text-[11px] tracking-[0.28em] text-kaki uppercase">404</p>
          <h1 className="mt-3 font-display text-4xl">
            {lang === "pt" ? "Este link não existe." : "This link does not exist."}
          </h1>
          <Link
            to="/seguir"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase"
          >
            {lang === "pt" ? "Procurar encomenda" : "Find an order"}
          </Link>
        </main>
      </Shell>
    );
  }

  const moving = data.status === "out" || data.status === "nearby";
  const idx = FLOW.indexOf(data.status);
  const share = typeof window !== "undefined" ? window.location.href : "";

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(share);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  }

  return (
    <Shell>
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
        <p className="text-[11px] tracking-[0.28em] text-kaki uppercase">
          {lang === "pt" ? "Seguimento" : "Tracking"} · {data.id}
        </p>
        <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
          <h1 className="font-display text-4xl sm:text-5xl">
            {STATUS_META[data.status][lang]}
          </h1>
          <p className="text-sm text-stone">
            {data.status === "delivered"
              ? lang === "pt"
                ? "Chegou."
                : "It arrived."
              : data.status === "cancelled"
                ? lang === "pt"
                  ? "Não segue."
                  : "Will not continue."
                : lang === "pt"
                  ? `~ ${data.remainingMin} min`
                  : `~ ${data.remainingMin} min`}
          </p>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone">
          {t(STATUS_META[data.status].hint, lang)}{" "}
          {lang === "pt"
            ? `${firstLine(data.customerFirst)} · destino ${data.zone}.`
            : `${firstLine(data.customerFirst)} · destination ${data.zone}.`}
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <RouteMap
            origin={data.origin}
            dest={data.dest}
            progress={data.progress}
            moving={moving}
          />

          <div>
            <ol className="space-y-0">
              {FLOW.map((st, i) => {
                const done = idx >= i || data.status === "delivered";
                const current = data.status === st;
                const ev = [...data.events].reverse().find((e) => e.status === st);
                return (
                  <li key={st} className="flex gap-3">
                    <div className="flex flex-col items-center">
                      <span
                        className={cn(
                          "grid size-3 rounded-full",
                          current
                            ? "bg-kaki"
                            : done
                              ? "bg-ink"
                              : "bg-ink/15",
                        )}
                      />
                      {i < FLOW.length - 1 ? (
                        <span className={cn("w-px flex-1", done ? "bg-ink/25" : "bg-ink/10")} />
                      ) : null}
                    </div>
                    <div className="pb-5">
                      <p className={cn("text-sm", current ? "font-semibold text-kaki" : "text-ink")}>
                        {STATUS_META[st][lang]}
                      </p>
                      {ev ? (
                        <p className="mt-0.5 text-xs text-stone">{ev.note}</p>
                      ) : (
                        <p className="mt-0.5 text-xs text-stone">{STATUS_META[st].hint[lang]}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-2 rounded-xl bg-rice-warm p-5 shadow-[var(--shadow-border)]">
              <p className="text-[11px] tracking-[0.18em] text-stone uppercase">
                {lang === "pt" ? "Pedido" : "Order"}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm">
                {data.items.map((l) => (
                  <li key={l.id} className="flex justify-between gap-3">
                    <span>
                      {l.qty}× {l.name}
                    </span>
                    <span className="tabular-nums text-kaki">{formatKz(l.total)}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 flex justify-between border-t border-ink/8 pt-3 font-display text-2xl">
                <span>{t(copy.cart.total, lang)}</span>
                <span className="tabular-nums">{formatKz(data.total)}</span>
              </p>
              {data.courierName && moving ? (
                <p className="mt-3 text-xs text-stone">
                  {lang === "pt" ? "Estafeta" : "Courier"} · {data.courierName}
                </p>
              ) : null}
            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={() => void copyLink()}
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied
                  ? lang === "pt"
                    ? "Copiado"
                    : "Copied"
                  : lang === "pt"
                    ? "Copiar link"
                    : "Copy link"}
              </button>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(share)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep"
              >
                <Share2 className="size-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </Shell>
  );
}

function firstLine(name: string) {
  return name;
}
