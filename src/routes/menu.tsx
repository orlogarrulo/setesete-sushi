import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ProductCard } from "@/components/product-card.tsx";
import { Shell } from "@/components/shell.tsx";
import { copy, t } from "@/lib/copy";
import {
  CATEGORIES,
  type CategoryId,
  PRODUCTS,
  productsByCategory,
} from "@/lib/menu";
import { cn } from "@/lib/utils";
import { useLang } from "@/store/lang";
import { z } from "zod";

const searchSchema = z.object({
  cat: z.string().optional(),
});

export const Route = createFileRoute("/menu")({
  validateSearch: searchSchema,
  component: MenuPage,
});

function MenuPage() {
  const lang = useLang((s) => s.lang);
  const { cat } = Route.useSearch();
  const fromSearch = CATEGORIES.some((c) => c.id === cat)
    ? (cat as CategoryId)
    : undefined;
  const [active, setActive] = useState<CategoryId | undefined>(fromSearch);

  useEffect(() => {
    if (!fromSearch) return;
    const el = document.getElementById(fromSearch);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(fromSearch);
  }, [fromSearch]);

  useEffect(() => {
    const nodes = CATEGORIES.map((c) => document.getElementById(c.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!nodes.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const id = visible?.target.id as CategoryId | undefined;
        if (id) setActive(id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.2, 0.5] },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return (
    <Shell>
      <main>
        <section className="relative overflow-hidden bg-nori text-rice">
          <img
            src="/photos/combinado.jpg"
            alt="Combinado Sete Sete"
            className="absolute inset-0 size-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-nori/55" />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">
              {lang === "pt" ? "Cardápio" : "Menu"}
            </p>
            <h1 className="mt-3 font-display text-5xl sm:text-7xl">
              {t(copy.nav.menu, lang)}
            </h1>
            <p className="mt-4 max-w-lg text-sm text-rice/70">
              {lang === "pt"
                ? "Quarenta peças. Preços em Kwanzas. Preparação no momento."
                : "Forty pieces. Prices in Kwanzas. Made to order."}
            </p>
          </div>
        </section>

        <div className="sticky top-16 z-30 border-b border-ink/8 bg-rice/90 backdrop-blur-md sm:top-[4.25rem]">
          <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6">
            {CATEGORIES.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                onClick={() => setActive(c.id)}
                className={cn(
                  "shrink-0 rounded-full px-3.5 py-2 text-[11px] font-medium tracking-[0.12em] whitespace-nowrap uppercase",
                  active === c.id
                    ? "bg-kaki text-rice"
                    : "bg-ink/5 text-ink hover:bg-ink/10",
                )}
              >
                {c.name[lang]}
              </a>
            ))}
          </div>
        </div>

        {CATEGORIES.map((c) => (
          <section
            key={c.id}
            id={c.id}
            className="scroll-mt-32 mx-auto max-w-6xl px-4 py-14 sm:px-6"
          >
            <div className="mb-8 flex items-end justify-between gap-4">
              <div>
                <p className="text-[11px] tracking-[0.22em] text-kaki uppercase">
                  {c.ja}
                </p>
                <h2 className="mt-1 font-display text-3xl sm:text-4xl">
                  {c.name[lang]}
                </h2>
                <p className="mt-2 text-sm text-stone">{c.blurb[lang]}</p>
              </div>
              <p className="hidden text-sm text-stone sm:block">
                {productsByCategory(c.id).length}{" "}
                {lang === "pt" ? "itens" : "items"}
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.filter((p) => p.category === c.id).map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </Shell>
  );
}
