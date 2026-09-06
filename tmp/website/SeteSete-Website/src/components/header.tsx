import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useState } from "react";
import { LogoLockup } from "@/components/mark.tsx";
import { copy, t } from "@/lib/copy";
import { cn } from "@/lib/utils";
import { useCart } from "@/store/cart";
import { useLang } from "@/store/lang";

const LINKS = [
  { to: "/", key: "home" as const },
  { to: "/casa", key: "casa" as const },
  { to: "/menu", key: "menu" as const },
  { to: "/identidade", key: "identity" as const },
];

export function Header() {
  const lang = useLang((s) => s.lang);
  const setLang = useLang((s) => s.setLang);
  const count = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
  const setOpen = useCart((s) => s.setOpen);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobile, setMobile] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/8 bg-rice/92 text-ink backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6">
        <Link to="/" className="shrink-0" onClick={() => setMobile(false)}>
          <LogoLockup />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "text-[13px] font-medium tracking-[0.14em] uppercase transition-opacity hover:opacity-70",
                pathname === l.to ? "text-kaki opacity-100" : "opacity-55",
              )}
            >
              {t(copy.nav[l.key], lang)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="hidden items-center rounded-full bg-ink/5 p-0.5 text-[11px] font-semibold tracking-wider sm:flex">
            {(["pt", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "min-h-8 rounded-full px-2.5 uppercase transition",
                  lang === code
                    ? "bg-ink text-rice"
                    : "opacity-60 hover:opacity-100",
                )}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="relative inline-flex size-11 items-center justify-center rounded-full hover:bg-ink/5"
            aria-label={t(copy.cart.title, lang)}
          >
            <ShoppingBag className="size-5" strokeWidth={1.75} />
            {count > 0 && (
              <span className="absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-kaki px-1 text-[10px] font-semibold text-rice tabular-nums">
                {count}
              </span>
            )}
          </button>

          <Link
            to="/pedir"
            className="hidden min-h-11 items-center rounded-full bg-kaki px-4 text-[12px] font-semibold tracking-[0.12em] text-rice uppercase transition hover:bg-kaki-deep sm:inline-flex"
          >
            {t(copy.nav.order, lang)}
          </Link>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label="Menu"
          >
            {mobile ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {mobile && (
        <div className="border-t border-ink/8 bg-rice px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMobile(false)}
                className="min-h-11 py-2 text-sm tracking-[0.12em] uppercase"
              >
                {t(copy.nav[l.key], lang)}
              </Link>
            ))}
            <Link
              to="/pedir"
              onClick={() => setMobile(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase"
            >
              {t(copy.nav.order, lang)}
            </Link>
            <div className="mt-2 flex gap-2">
              {(["pt", "en"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  className={cn(
                    "min-h-11 rounded-full px-4 text-xs font-semibold uppercase",
                    lang === code ? "bg-kaki text-rice" : "bg-ink/8",
                  )}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
