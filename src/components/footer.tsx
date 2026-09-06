import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark.tsx";
import { copy, t } from "@/lib/copy";
import { EMAIL, INSTAGRAM, WHATSAPP, WHATSAPP_DISPLAY } from "@/lib/utils";
import { useLang } from "@/store/lang";

export function Footer() {
  const lang = useLang((s) => s.lang);
  return (
    <footer className="border-t border-ink/8 bg-nori text-rice print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Mark className="size-12" />
          <p className="mt-5 font-display text-3xl tracking-tight">Sete Sete</p>
          <p className="mt-2 text-sm tracking-[0.2em] text-kaki-soft uppercase">
            {t(copy.footer.tag, lang)}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-stone">
            {lang === "pt"
              ? "Sushi de precisão em Luanda. Pedidos das 12h às 22h, via WhatsApp."
              : "Precise sushi in Luanda. Orders from 12:00 to 22:00, via WhatsApp."}
          </p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.22em] text-stone uppercase">
            {lang === "pt" ? "Casa" : "House"}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/casa" className="hover:text-kaki-soft">
                {t(copy.nav.casa, lang)}
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-kaki-soft">
                {t(copy.nav.menu, lang)}
              </Link>
            </li>
            <li>
              <Link to="/pedir" className="hover:text-kaki-soft">
                {t(copy.nav.order, lang)}
              </Link>
            </li>
            <li>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noreferrer"
                className="hover:text-kaki-soft"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-kaki-soft"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-kaki-soft">
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rice/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-stone sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <span>© {new Date().getFullYear()} Sete Sete · Luanda, Angola</span>
          <span className="tracking-[0.18em] uppercase">七七</span>
        </div>
      </div>
    </footer>
  );
}
