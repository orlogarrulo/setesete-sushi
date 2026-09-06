import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Shell } from "@/components/shell.tsx";
import { copy, t } from "@/lib/copy";
import { productById } from "@/lib/menu";
import {
  EMAIL,
  FOUNDER_NAME,
  FOUNDER_TITLE,
  formatKz,
  HOURS,
  INSTAGRAM,
  WHATSAPP,
  WHATSAPP_DISPLAY,
} from "@/lib/utils";
import { buildWhatsAppUrl, useCart } from "@/store/cart";
import { useLang } from "@/store/lang";

export const Route = createFileRoute("/pedir")({ component: PedirPage });

function PedirPage() {
  const lang = useLang((s) => s.lang);
  const lines = useCart((s) => s.lines);
  const total = useCart((s) => s.total);
  const setQty = useCart((s) => s.setQty);
  const remove = useCart((s) => s.remove);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const href = buildWhatsAppUrl({ lang, name, phone, address, notes });
  const empty = lines.length === 0;

  return (
    <Shell>
      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-[11px] tracking-[0.28em] text-kaki uppercase">
            {t(copy.pedir.kicker, lang)}
          </p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl">
            {t(copy.pedir.title, lang)}
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
            {t(copy.pedir.hint, lang)}
          </p>

          {empty ? (
            <div className="mt-10 rounded-xl border border-ink/8 bg-rice-warm p-8">
              <p className="text-stone">{t(copy.cart.empty, lang)}</p>
              <Link
                to="/menu"
                className="mt-4 inline-flex min-h-11 items-center rounded-full bg-kaki px-5 text-sm font-semibold text-rice"
              >
                {t(copy.cart.emptyCta, lang)}
              </Link>
            </div>
          ) : (
            <ul className="mt-8 divide-y divide-ink/8 overflow-hidden rounded-xl bg-rice-warm">
              {lines.map((l) => {
                const p = productById(l.id);
                if (!p) return null;
                return (
                  <li key={l.id} className="flex items-center gap-3 px-4 py-4 sm:px-5">
                    <img
                      src={p.image}
                      alt=""
                      className="size-16 shrink-0 rounded-md object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">{p.name[lang]}</p>
                      <p className="mt-0.5 text-sm tabular-nums text-kaki">
                        {formatKz(p.price * l.qty)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          className="grid size-9 place-items-center rounded-full border border-ink/10"
                          onClick={() => setQty(l.id, l.qty - 1)}
                          aria-label="−"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">
                          {l.qty}
                        </span>
                        <button
                          type="button"
                          className="grid size-9 place-items-center rounded-full border border-ink/10"
                          onClick={() => setQty(l.id, l.qty + 1)}
                          aria-label="+"
                        >
                          <Plus className="size-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => remove(l.id)}
                          className="ml-auto text-xs text-stone underline-offset-2 hover:underline"
                        >
                          {lang === "pt" ? "Retirar" : "Remove"}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
              <li className="flex items-baseline justify-between px-5 py-4">
                <span className="text-sm text-stone">{t(copy.cart.total, lang)}</span>
                <span className="font-display text-2xl tabular-nums">
                  {formatKz(total())}
                </span>
              </li>
            </ul>
          )}

          <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
            <div className="border-t border-ink/8 pt-4">
              <dt className="text-[11px] tracking-[0.18em] text-stone uppercase">
                {lang === "pt" ? "Horário" : "Hours"}
              </dt>
              <dd className="mt-1">{t(copy.pedir.hours, lang)}</dd>
            </div>
            <div className="border-t border-ink/8 pt-4">
              <dt className="text-[11px] tracking-[0.18em] text-stone uppercase">
                {lang === "pt" ? "Entrega" : "Delivery"}
              </dt>
              <dd className="mt-1 text-stone">{t(copy.pedir.zone, lang)}</dd>
            </div>
            <div className="border-t border-ink/8 pt-4">
              <dt className="text-[11px] tracking-[0.18em] text-stone uppercase">
                WhatsApp
              </dt>
              <dd className="mt-1">
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  className="hover:text-kaki"
                  target="_blank"
                  rel="noreferrer"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </dd>
            </div>
            <div className="border-t border-ink/8 pt-4">
              <dt className="text-[11px] tracking-[0.18em] text-stone uppercase">
                {lang === "pt" ? "Correio" : "Email"}
              </dt>
              <dd className="mt-1">
                <a href={`mailto:${EMAIL}`} className="hover:text-kaki">
                  {EMAIL}
                </a>
              </dd>
            </div>
            <div className="border-t border-ink/8 pt-4">
              <dt className="text-[11px] tracking-[0.18em] text-stone uppercase">
                Instagram
              </dt>
              <dd className="mt-1">
                <a
                  href={INSTAGRAM}
                  className="hover:text-kaki"
                  target="_blank"
                  rel="noreferrer"
                >
                  @setesete.ao
                </a>
              </dd>
            </div>
            <div className="border-t border-ink/8 pt-4">
              <dt className="text-[11px] tracking-[0.18em] text-stone uppercase">
                {FOUNDER_TITLE}
              </dt>
              <dd className="mt-1">{FOUNDER_NAME}</dd>
            </div>
          </dl>
        </div>

        {sent && !empty ? (
          <div className="rounded-xl bg-rice-warm p-6 text-center shadow-[var(--shadow-border)] sm:p-8">
            <p className="font-display text-3xl">{t(copy.pedir.sent, lang)}</p>
            <p className="mt-3 text-sm leading-relaxed text-stone">
              {t(copy.pedir.sentBody, lang)}
            </p>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep"
            >
              {t(copy.pedir.again, lang)}
            </a>
            <p className="mt-4 text-xs text-stone">
              {lang === "pt" ? "Horário" : "Hours"} · {HOURS}
            </p>
          </div>
        ) : (
          <form
            className="rounded-xl bg-rice-warm p-6 shadow-[var(--shadow-border)] sm:p-8"
            onSubmit={(e) => {
              e.preventDefault();
              if (empty) return;
              window.open(href, "_blank", "noopener,noreferrer");
              setSent(true);
            }}
          >
            <label className="block text-sm font-medium">
              {t(copy.pedir.name, lang)}
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
                className="mt-2 min-h-11 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
              />
            </label>
            <label className="mt-5 block text-sm font-medium">
              {t(copy.pedir.phone, lang)}
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                placeholder="+244 9XX XXX XXX"
                className="mt-2 min-h-11 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
              />
            </label>
            <label className="mt-5 block text-sm font-medium">
              {t(copy.pedir.address, lang)}
              <input
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="street-address"
                className="mt-2 min-h-11 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
              />
            </label>
            <label className="mt-5 block text-sm font-medium">
              {t(copy.pedir.notes, lang)}
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="mt-2 w-full rounded-lg border border-ink/10 bg-rice px-3 py-2 text-sm outline-none ring-kaki focus:ring-2"
              />
            </label>
            <button
              type="submit"
              disabled={empty}
              className="mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40"
            >
              {t(copy.pedir.send, lang)}
            </button>
          </form>
        )}
      </main>
    </Shell>
  );
}
