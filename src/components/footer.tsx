import { Link } from "@tanstack/react-router";
import { Mark } from "@/components/mark.tsx";
import { copy, t } from "@/lib/copy";
import {
  EMAIL,
  INSTAGRAM,
  LINKEDIN,
  MANO_URL,
  WHATSAPP,
  WHATSAPP_DISPLAY,
} from "@/lib/utils";
import { useLang } from "@/store/lang";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.4" cy="6.6" r="1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6.94 8.5H4.05V20h2.9V8.5zM5.5 3.5A1.7 1.7 0 1 0 5.5 6.9 1.7 1.7 0 0 0 5.5 3.5zM20 20h-2.9v-6.05c0-1.44-.03-3.29-2-3.29-2 0-2.31 1.56-2.31 3.18V20H10V8.5h2.78v1.57h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.44V20z" />
    </svg>
  );
}

export function Footer() {
  const lang = useLang((s) => s.lang);
  return (
    <footer className="border-t border-ink/8 bg-nori text-rice print:hidden">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Mark className="size-14" alt="Sete Sete" />
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
              <Link to="/seguir" className="hover:text-kaki-soft">
                {t(copy.nav.track, lang)}
              </Link>
            </li>
            <li>
              <Link to="/ops" className="hover:text-kaki-soft">
                {lang === "pt" ? "Equipa · casa" : "Staff · house"}
              </Link>
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
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-stone uppercase">
              {lang === "pt" ? "Parceiro" : "Partner"}
            </p>
            <a
              href={MANO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center rounded-lg bg-rice px-5 py-4"
              aria-label="MANO"
            >
              <img
                src="/partners/mano.svg"
                alt="MANO"
                className="h-14 w-auto"
              />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Sete Sete"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-rice/15 px-4 text-rice transition hover:border-kaki-soft hover:text-kaki-soft"
            >
              <InstagramIcon className="size-5" />
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
                Instagram
              </span>
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Sete Sete"
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-rice/15 px-4 text-rice transition hover:border-kaki-soft hover:text-kaki-soft"
            >
              <LinkedInIcon className="size-5" />
              <span className="text-[11px] font-medium tracking-[0.16em] uppercase">
                LinkedIn
              </span>
            </a>
          </div>
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
