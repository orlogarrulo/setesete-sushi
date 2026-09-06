import { Link } from "@tanstack/react-router";
import { Minus, Plus, X } from "lucide-react";
import { copy, t } from "@/lib/copy";
import { productById } from "@/lib/menu";
import { cn, formatKz } from "@/lib/utils";
import { useCart } from "@/store/cart";
import { useLang } from "@/store/lang";

export function CartDrawer() {
  const lang = useLang((s) => s.lang);
  const { lines, open, setOpen, setQty, remove, total } = useCart();
  const empty = lines.length === 0;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-ink/40 transition-opacity duration-200 print:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />
      <aside
        className={cn(
          "fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-rice-warm shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] print:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-ink/8 px-5 py-4">
          <h2 className="font-display text-2xl">{t(copy.cart.title, lang)}</h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="grid size-11 place-items-center rounded-full hover:bg-ink/5"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {empty ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-stone">{t(copy.cart.empty, lang)}</p>
              <Link
                to="/menu"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex min-h-11 items-center rounded-full bg-kaki px-5 text-sm font-semibold text-rice"
              >
                {t(copy.cart.emptyCta, lang)}
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {lines.map((line) => {
                const p = productById(line.id);
                if (!p) return null;
                return (
                  <li key={line.id} className="flex gap-3">
                    <img
                      src={p.image}
                      alt=""
                      className="size-20 shrink-0 rounded-md object-cover"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium">
                        {p.name[lang]}
                      </p>
                      <p className="mt-0.5 text-sm text-kaki tabular-nums">
                        {formatKz(p.price * line.qty)}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          className="grid size-9 place-items-center rounded-full border border-ink/10"
                          onClick={() => setQty(line.id, line.qty - 1)}
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm tabular-nums">
                          {line.qty}
                        </span>
                        <button
                          type="button"
                          className="grid size-9 place-items-center rounded-full border border-ink/10"
                          onClick={() => setQty(line.id, line.qty + 1)}
                        >
                          <Plus className="size-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => remove(line.id)}
                          className="ml-auto text-xs text-stone underline-offset-2 hover:underline"
                        >
                          {lang === "pt" ? "Retirar" : "Remove"}
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {!empty && (
          <div className="border-t border-ink/8 p-5">
            <div className="mb-4 flex items-baseline justify-between">
              <span className="text-sm text-stone">{t(copy.cart.total, lang)}</span>
              <span className="font-display text-2xl tabular-nums">
                {formatKz(total())}
              </span>
            </div>
            <Link
              to="/pedir"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep"
            >
              {t(copy.cart.checkout, lang)}
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
