import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { Mark } from "@/components/mark.tsx";
import { Shell } from "@/components/shell.tsx";
import { useLang } from "@/store/lang";

export const Route = createFileRoute("/identidade")({
  component: IdentityPage,
});

const PALETTE = [
  { name: "Kaki", hex: "#E24A17", cls: "bg-kaki text-rice" },
  { name: "Kaki profundo", hex: "#B83310", cls: "bg-kaki-deep text-rice" },
  { name: "Arroz", hex: "#F4F0E8", cls: "bg-rice text-ink" },
  { name: "Arroz quente", hex: "#FBFAF7", cls: "bg-rice-warm text-ink" },
  { name: "Tinta", hex: "#1A1714", cls: "bg-ink text-rice" },
  { name: "Nori", hex: "#231F1C", cls: "bg-nori text-rice" },
  { name: "Pedra", hex: "#8A8278", cls: "bg-stone text-rice" },
  { name: "Gari", hex: "#F3D5C6", cls: "bg-kaki-soft text-ink" },
];

function IdentityPage() {
  const lang = useLang((s) => s.lang);
  const pt = lang === "pt";

  return (
    <Shell>
      <main>
        <section className="border-b border-ink/8 bg-rice-warm">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-[11px] tracking-[0.28em] text-kaki uppercase">
              {pt ? "Identidade visual" : "Visual identity"}
            </p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl sm:text-6xl">
              {pt
                ? "Um kamon de dois setes. Papel de arroz. Persimão."
                : "A kamon of two sevens. Rice paper. Persimmon."}
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone sm:text-base">
              {pt
                ? "Sistema original — próximo da clareza Sushiro (espaço, fotografia, um só acento) mas nunca uma cópia. O laranja do catálogo tornou-se kaki, um persimão japonês."
                : "An original system — close to Sushiro’s clarity (space, photography, a single accent) but never a copy. The catalogue orange became kaki, a Japanese persimmon."}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/downloads/SeteSete-Identidade-Visual.zip"
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-kaki px-5 text-sm font-semibold tracking-[0.1em] text-rice uppercase"
              >
                <Download className="size-4" />
                {pt ? "Logotipo + identidade" : "Logo + identity"}
              </a>
              <a
                href="/downloads/SeteSete-Website.zip"
                download
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 px-5 text-sm font-semibold tracking-[0.1em] uppercase"
              >
                <Download className="size-4" />
                {pt ? "Kit website" : "Website kit"}
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl">{pt ? "Selo" : "Seal"}</h2>
          <p className="mt-2 max-w-xl text-sm text-stone">
            {pt
              ? "Dois 7 em simetria de 180°. A curva de cima — o sabor. A de baixo — o encontro. Ficheiros SVG vectoriais no kit."
              : "Two 7s in 180° symmetry. The upper curve — taste. The lower — the meeting. Vector SVG files in the kit."}
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="grid place-items-center rounded-xl bg-rice-warm p-8">
              <Mark className="size-28" />
            </div>
            <div className="grid place-items-center rounded-xl bg-nori p-8">
              <Mark className="size-28" invert />
            </div>
            <div className="grid place-items-center rounded-xl bg-kaki p-8">
              <Mark className="size-28" invert />
            </div>
            <div className="grid place-items-center rounded-xl border border-ink/10 p-8">
              <Mark className="size-28" line />
            </div>
          </div>
        </section>

        <section className="bg-rice-warm py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl">{pt ? "Paleta" : "Palette"}</h2>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {PALETTE.map((c) => (
                <div
                  key={c.hex}
                  className={`rounded-xl px-4 py-8 ${c.cls}`}
                >
                  <p className="text-sm font-medium">{c.name}</p>
                  <p className="mt-8 font-mono text-xs tracking-wider">{c.hex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl">
            {pt ? "Tipografia" : "Typography"}
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-rice-warm p-8">
              <p className="text-[11px] tracking-[0.2em] text-stone uppercase">
                Display · Cormorant Garamond
              </p>
              <p className="mt-4 font-display text-5xl leading-none">Sete Sete</p>
              <p className="mt-2 font-display text-2xl italic text-stone">
                sushi fresco
              </p>
            </div>
            <div className="rounded-xl bg-rice-warm p-8">
              <p className="text-[11px] tracking-[0.2em] text-stone uppercase">
                UI · Outfit
              </p>
              <p className="mt-4 text-3xl font-semibold tracking-[0.08em] uppercase">
                No teu WhatsApp
              </p>
              <p className="mt-3 text-sm leading-relaxed text-stone">
                {pt
                  ? "Corpo, navegação, preços. Geométrica, calma, legível em ecrã."
                  : "Body, navigation, prices. Geometric, calm, screen-legible."}
              </p>
            </div>
          </div>
        </section>

        <section className="bg-nori py-16 text-rice">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl">
              {pt ? "O catálogo" : "The catalogue"}
            </h2>
            <p className="mt-2 max-w-xl text-sm text-rice/65">
              {pt
                ? "A capa original da casa — o mesmo laranja que deu origem ao kaki."
                : "The house’s original cover — the same orange that became kaki."}
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-[0.72fr_1.28fr]">
              <img
                src="/photos/capa-catalogo.jpg"
                alt=""
                className="h-full max-h-[520px] w-full rounded-xl object-cover"
              />
              <img
                src="/photos/catalogo-mesa.jpg"
                alt=""
                className="h-full max-h-[520px] w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="font-display text-3xl">
            {pt ? "Papelaria" : "Stationery"}
          </h2>
          <p className="mt-2 max-w-xl text-sm text-stone">
            {pt
              ? "Cartão, sticker e saco de entrega — no kit para descarregar."
              : "Card, sticker and delivery bag — in the download kit."}
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="rounded-xl bg-rice-warm p-6">
              <img
                src="/brand/papelaria/cartao-frente.svg"
                alt=""
                className="w-full"
              />
              <figcaption className="mt-4 text-xs tracking-[0.16em] text-stone uppercase">
                {pt ? "Cartão · frente" : "Card · front"}
              </figcaption>
            </figure>
            <figure className="rounded-xl bg-rice-warm p-6">
              <img
                src="/brand/papelaria/cartao-verso.svg"
                alt=""
                className="w-full"
              />
              <figcaption className="mt-4 text-xs tracking-[0.16em] text-stone uppercase">
                {pt ? "Cartão · verso" : "Card · back"}
              </figcaption>
            </figure>
            <figure className="rounded-xl bg-nori p-6 sm:col-span-2 lg:col-span-1">
              <img
                src="/brand/papelaria/sticker.svg"
                alt=""
                className="mx-auto max-h-48"
              />
              <figcaption className="mt-4 text-center text-xs tracking-[0.16em] text-kaki-soft uppercase">
                Sticker
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="h-48 bg-repeat"
          style={{ backgroundImage: "url(/brand/padrao.svg)", backgroundSize: "160px" }}
        />
      </main>
    </Shell>
  );
}
