import { createFileRoute, Link } from "@tanstack/react-router";
import { Shell } from "@/components/shell.tsx";
import { copy, t } from "@/lib/copy";
import { useLang } from "@/store/lang";

export const Route = createFileRoute("/casa")({ component: CasaPage });

function CasaPage() {
  const lang = useLang((s) => s.lang);
  return (
    <Shell>
      <main>
        <section className="relative overflow-hidden bg-nori text-rice">
          <img
            src="/photos/salmon.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-nori/50" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">
              {t(copy.casa.kicker, lang)}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl sm:text-6xl">
              {t(copy.casa.title, lang)}
            </h1>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-base leading-relaxed text-stone sm:text-lg">
              {t(copy.casa.body, lang)}
            </p>
            <p className="mt-6 text-base leading-relaxed text-stone sm:text-lg">
              {lang === "pt"
                ? "O selo — dois setes em simetria circular — é um kamon. A curva de cima é o sabor. A de baixo é o encontro. Não é um arco copiado: é 77, o nosso número, desenhado como um brasão japonês."
                : "The seal — two sevens in circular symmetry — is a kamon. The upper curve is taste. The lower is the meeting. Not a copied arch: it is 77, our number, drawn as a Japanese crest."}
            </p>
          </div>
          <img
            src="/photos/rice.jpg"
            alt=""
            className="aspect-[4/3] w-full rounded-xl object-cover"
          />
        </section>

        <section className="bg-rice-warm py-20">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
            {[
              {
                t: lang === "pt" ? "Frescura" : "Freshness",
                b:
                  lang === "pt"
                    ? "Peixe escolhido pela qualidade do corte e da temperatura. Sem atalhos."
                    : "Fish chosen for the cut and the temperature. No shortcuts.",
              },
              {
                t: lang === "pt" ? "Clareza" : "Clarity",
                b:
                  lang === "pt"
                    ? "Um menu legível. Preços em Kwanzas. Tempo de preparação à vista."
                    : "A readable menu. Prices in Kwanzas. Prep time in plain sight.",
              },
              {
                t: lang === "pt" ? "Proximidade" : "Nearness",
                b:
                  lang === "pt"
                    ? "O pedido vive no WhatsApp — o sítio onde Luanda já fala."
                    : "The order lives on WhatsApp — where Luanda already speaks.",
              },
            ].map((x) => (
              <div key={x.t} className="border-t border-ink/10 pt-6">
                <h2 className="font-display text-2xl">{x.t}</h2>
                <p className="mt-3 text-sm leading-relaxed text-stone">{x.b}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2">
          <figure>
            <img
              src="/photos/cozinha.jpg"
              alt=""
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <figcaption className="pt-4">
              <p className="font-display text-2xl">{t(copy.casa.kitchen, lang)}</p>
              <p className="mt-1 text-sm text-stone">
                {t(copy.casa.kitchenBody, lang)}
              </p>
            </figcaption>
          </figure>
          <figure>
            <img
              src="/photos/catalogo.jpg"
              alt=""
              className="aspect-[4/3] w-full rounded-xl object-cover"
            />
            <figcaption className="pt-4">
              <p className="font-display text-2xl">{t(copy.casa.catalog, lang)}</p>
              <p className="mt-1 text-sm text-stone">
                {t(copy.casa.catalogBody, lang)}
              </p>
            </figcaption>
          </figure>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-20 text-center sm:px-6">
          <p className="font-display text-3xl sm:text-4xl">
            {lang === "pt" ? "Vem à mesa." : "Come to the table."}
          </p>
          <Link
            to="/menu"
            className="mt-8 inline-flex min-h-12 items-center rounded-full bg-kaki px-7 text-sm font-semibold tracking-[0.14em] text-rice uppercase"
          >
            {t(copy.hero.ctaMenu, lang)}
          </Link>
        </section>
      </main>
    </Shell>
  );
}
