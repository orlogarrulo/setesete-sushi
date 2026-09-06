import { copy, t } from "@/lib/copy";
import type { Product } from "@/lib/menu";
import { cn, formatKz } from "@/lib/utils";
import { useCart } from "@/store/cart";
import { useLang } from "@/store/lang";

export function ProductCard({ product }: { product: Product }) {
  const lang = useLang((s) => s.lang);
  const add = useCart((s) => s.add);
  const qty = useCart(
    (s) => s.lines.find((l) => l.id === product.id)?.qty ?? 0,
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl bg-rice-warm shadow-[var(--shadow-border)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-nori">
        <img
          src={product.image}
          alt={product.name[lang]}
          className="size-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        {product.flags?.[0] && (
          <span className="absolute top-3 left-3 rounded-full bg-rice/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-kaki uppercase">
            {t(copy.flags[product.flags[0]], lang)}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl leading-snug">
            {product.name[lang]}
          </h3>
          <p className="shrink-0 text-sm font-semibold text-kaki tabular-nums">
            {formatKz(product.price)}
          </p>
        </div>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-stone">
          {product.description[lang]}
        </p>
        <p className="mt-1 line-clamp-1 text-xs text-stone/75">
          {product.ingredients[lang]}
        </p>
        <div className="mt-3 flex items-center gap-3 text-[11px] tracking-[0.12em] text-stone uppercase">
          {product.pieces ? (
            <span>
              {product.pieces} {t(copy.pieces, lang)}
            </span>
          ) : null}
          <span>
            {product.prepMin} {t(copy.min, lang)}
          </span>
        </div>
        <button
          type="button"
          onClick={() => add(product.id)}
          className={cn(
            "mt-4 min-h-11 rounded-full text-sm font-semibold tracking-[0.08em] transition",
            qty
              ? "bg-nori text-rice"
              : "bg-kaki text-rice hover:bg-kaki-deep",
          )}
        >
          {qty
            ? `${t(copy.cart.added, lang)} · ${qty}`
            : t(copy.cart.add, lang)}
        </button>
      </div>
    </article>
  );
}
