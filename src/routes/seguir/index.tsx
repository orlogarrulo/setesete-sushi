import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Shell } from "@/components/shell.tsx";
import { getTracking, lookupInvoice } from "@/lib/ops.functions";
import { useLang } from "@/store/lang";

export const Route = createFileRoute("/seguir/")({ component: SeguirHome });

const DEMOS = [
  { token: "sete-ilha-77", label: { pt: "Ilha · em rota", en: "Ilha · on the way" } },
  { token: "sete-ouro-77", label: { pt: "Talatona · cozinha", en: "Talatona · kitchen" } },
  { token: "sete-alvalade-77", label: { pt: "Alvalade · próximo", en: "Alvalade · nearby" } },
];

function SeguirHome() {
  const lang = useLang((s) => s.lang);
  const nav = useNavigate();
  const [q, setQ] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    const value = q.trim();
    if (!value) return;
    setBusy(true);
    try {
      if (value.startsWith("SS-") || value.startsWith("ss-") || value.startsWith("Ss-")) {
        const found = await lookupInvoice({ data: { id: value.toUpperCase() } });
        if (!found) {
          setErr(lang === "pt" ? "Fatura não encontrada." : "Invoice not found.");
          return;
        }
        await nav({ to: "/seguir/$token", params: { token: found.token } });
        return;
      }
      const track = await getTracking({ data: { token: value } });
      if (!track) {
        setErr(lang === "pt" ? "Link de seguimento inválido." : "Invalid tracking link.");
        return;
      }
      await nav({ to: "/seguir/$token", params: { token: value } });
    } finally {
      setBusy(false);
    }
  }

  return (
    <Shell>
      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-[11px] tracking-[0.28em] text-kaki uppercase">
          {lang === "pt" ? "Seguimento" : "Tracking"}
        </p>
        <h1 className="mt-3 font-display text-4xl sm:text-6xl">
          {lang === "pt" ? "Da cozinha à tua porta." : "From the kitchen to your door."}
        </h1>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-stone sm:text-base">
          {lang === "pt"
            ? "Cada encomenda gera um link único. A cozinha Sete Sete, em Talatona, é o ponto de partida. A casa e o motoboy actualizam o estado — tu vês o caminho até à porta."
            : "Each order gets a unique link. The Sete Sete kitchen in Talatona is the starting point. The house and the courier update the status — you watch the route to your door."}
        </p>

        <form
          onSubmit={(e) => void onSubmit(e)}
          className="mt-10 rounded-xl bg-rice-warm p-5 shadow-[var(--shadow-border)] sm:p-7"
        >
          <label className="text-sm font-medium">
            {lang === "pt" ? "Número da fatura ou código do link" : "Invoice number or tracking code"}
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="SS-… ou sete-ilha-77"
              className="mt-2 min-h-12 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
            />
          </label>
          {err ? <p className="mt-2 text-sm text-kaki">{err}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40"
          >
            {lang === "pt" ? "Seguir" : "Track"}
            <ArrowRight className="size-4" />
          </button>
        </form>

        <div className="mt-12">
          <p className="text-[11px] tracking-[0.2em] text-stone uppercase">
            {lang === "pt" ? "Encomendas de demonstração" : "Demo orders"}
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-3">
            {DEMOS.map((d) => (
              <li key={d.token}>
                <Link
                  to="/seguir/$token"
                  params={{ token: d.token }}
                  className="flex min-h-20 flex-col justify-center rounded-xl bg-rice-warm px-4 py-3 shadow-[var(--shadow-border)] transition hover:shadow-[var(--shadow-border-hover)]"
                >
                  <span className="font-display text-xl">{d.label[lang]}</span>
                  <span className="mt-1 text-xs tracking-wide text-stone">{d.token}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </Shell>
  );
}
