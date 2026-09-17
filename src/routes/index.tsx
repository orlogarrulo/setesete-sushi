import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Mark } from "@/components/mark.tsx";
import { Shell } from "@/components/shell.tsx";
import { copy, t } from "@/lib/copy";
import { CATEGORIES, PRODUCTS } from "@/lib/menu";
import { formatKz } from "@/lib/utils";
import { useLang } from "@/store/lang";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const lang = useLang((s) => s.lang);
  const featured = PRODUCTS.filter((p) =>
    ["SS-OUR-45", "SS-ASN-77"].includes(p.id),
  );

  return (
    <Shell>
      <main>
        <section className="relative min-h-[88dvh] overflow-hidden bg-nori text-rice">
          <img
            src="/photos/hero-capa.jpg"
            alt="Uramaki de salmão Sete Sete"
            className="absolute inset-0 size-full object-cover object-[20%_50%]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-nori via-nori/55 to-nori/20" />
          <div className="relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-20">
            <Mark className="size-16 sm:size-20" alt="Kamon Sete Sete" />
            <p className="mt-6 text-[11px] font-medium tracking-[0.32em] text-kaki-soft uppercase">
              {t(copy.hero.kicker, lang)}
            </p>
            <h1 className="mt-4 font-display text-[18vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl">
              Sete Sete
            </h1>
            <p className="mt-5 max-w-xl font-display text-2xl italic text-rice/90 sm:text-3xl">
              {t(copy.hero.lead, lang)}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-rice/70 sm:text-base">
              {t(copy.hero.sub, lang)}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep"
              >
                {t(copy.hero.ctaMenu, lang)}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/pedir"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-rice/25 px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-rice/10"
              >
                {t(copy.hero.ctaOrder, lang)}
              </Link>
            </div>
          </div>
        </section>

        <section className="border-b border-ink/8 bg-rice-warm">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4">
            {[
              { n: "65", l: lang === "pt" ? "itens no cardápio" : "menu items" },
              { n: "12–22h", l: lang === "pt" ? "todos os dias" : "every day" },
              { n: "Luanda", l: lang === "pt" ? "entrega" : "delivery" },
              { n: "WhatsApp", l: lang === "pt" ? "pedido directo" : "direct order" },
            ].map((s) => (
              <div key={s.n} className="px-5 py-8 text-center sm:py-10">
                <p className="font-display text-3xl tracking-tight sm:text-4xl">
                  {s.n}
                </p>
                <p className="mt-2 text-[11px] tracking-[0.18em] text-stone uppercase">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-[11px] font-medium tracking-[0.28em] text-kaki uppercase">
            {t(copy.secret.kicker, lang)}
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-5xl">
            {t(copy.secret.title, lang)}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone sm:text-lg">
            {t(copy.secret.body, lang)}
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <figure className="overflow-hidden rounded-xl">
              <img
                src="/photos/rice.jpg"
                alt="Arroz de sushi temperado, grão a grão"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="pt-4">
                <p className="font-display text-2xl">{t(copy.secret.rice, lang)}</p>
                <p className="mt-1 text-sm text-stone">
                  {t(copy.secret.riceBody, lang)}
                </p>
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl md:mt-12">
              <img
                src="/photos/salmon.jpg"
                alt="Salmão fresco para niguiri"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="pt-4">
                <p className="font-display text-2xl">{t(copy.secret.fish, lang)}</p>
                <p className="mt-1 text-sm text-stone">
                  {t(copy.secret.fishBody, lang)}
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="bg-nori py-20 text-rice sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-[11px] font-medium tracking-[0.28em] text-kaki-soft uppercase">
              {t(copy.menuTeaser.kicker, lang)}
            </p>
            <div className="mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <h2 className="max-w-xl font-display text-3xl sm:text-5xl">
                {t(copy.menuTeaser.title, lang)}
              </h2>
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase hover:text-kaki-soft"
              >
                {t(copy.hero.ctaMenu, lang)}
                <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4">
              {CATEGORIES.map((c) => (
                <Link
                  key={c.id}
                  to="/menu"
                  search={{ cat: c.id }}
                  hash={c.id}
                  resetScroll={false}
                  className="group relative aspect-[3/4] overflow-hidden rounded-lg"
                >
                  <img
                    src={c.image}
                    alt={c.name[lang]}
                    className="size-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-nori/80 via-nori/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <p className="text-[10px] tracking-[0.2em] text-kaki-soft">
                      {c.ja}
                    </p>
                    <p className="font-display text-lg leading-tight sm:text-xl">
                      {c.name[lang]}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-[11px] font-medium tracking-[0.28em] text-kaki uppercase">
            {lang === "pt" ? "Ouro e assinatura" : "Gold and signature"}
          </p>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl">
            {lang === "pt"
              ? "Só salmão, ou o 77 da casa."
              : "Salmon only, or the house 77."}
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {featured.map((p) => (
              <Link
                key={p.id}
                to="/menu"
                search={{ cat: p.category }}
                hash={p.category}
                resetScroll={false}
                className="group overflow-hidden rounded-xl bg-rice-warm shadow-[var(--shadow-border)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name[lang]}
                    className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  {p.flags?.[0] && (
                    <span className="absolute top-3 left-3 rounded-full bg-rice/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-kaki uppercase">
                      {t(copy.flags[p.flags[0]], lang)}
                    </span>
                  )}
                </div>
                <div className="flex items-end justify-between gap-3 p-5">
                  <div>
                    <p className="font-display text-2xl">{p.name[lang]}</p>
                    <p className="mt-1 text-sm text-stone">{p.description[lang]}</p>
                  </div>
                  <p className="shrink-0 text-sm font-semibold text-kaki tabular-nums">
                    {formatKz(p.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-ink/8 bg-rice-warm py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="text-[11px] font-medium tracking-[0.28em] text-kaki uppercase">
              {t(copy.how.kicker, lang)}
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl sm:text-5xl">
              {t(copy.how.title, lang)}
            </h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                [copy.how.s1t, copy.how.s1],
                [copy.how.s2t, copy.how.s2],
                [copy.how.s3t, copy.how.s3],
              ].map(([title, body], i) => (
                <li key={i} className="border-t border-ink/10 pt-6">
                  <p className="font-display text-5xl text-kaki/40">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{t(title, lang)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {t(body, lang)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative overflow-hidden bg-nori py-24 text-center text-rice">
          <img
            src="/photos/combinado.jpg"
            alt="Combinado Sete Sete"
            className="absolute inset-0 size-full object-cover opacity-25"
          />
          <div className="relative mx-auto max-w-xl px-4">
            <p className="font-display text-4xl sm:text-5xl">
              {lang === "pt" ? "Pronto para a mesa?" : "Ready for the table?"}
            </p>
            <p className="mt-4 text-sm text-rice/70">
              {lang === "pt"
                ? "Monta o pedido e envia no WhatsApp. Nós tratamos do resto."
                : "Build the order and send it on WhatsApp. We handle the rest."}
            </p>
            <Link
              to="/pedir"
              className="mt-8 inline-flex min-h-12 items-center rounded-full bg-kaki px-8 text-sm font-semibold tracking-[0.14em] text-rice uppercase hover:bg-kaki-deep"
            >
              {t(copy.hero.ctaOrder, lang)}
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
