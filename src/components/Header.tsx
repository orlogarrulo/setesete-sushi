"use client";

import { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";

const WHATSAPP = "244974506949";

export default function Header() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const [menuOpen, setMenuOpen] = useState(false);

  const t = {
    pt: {
      home: "Início",
      menu: "Menu",
      order: "Pedir Agora",
      about: "Sobre",
    },
    en: {
      home: "Home",
      menu: "Menu",
      order: "Order Now",
      about: "About",
    },
  };


  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-sm font-medium text-muted hover:text-white transition">
            {t[lang].home}
          </Link>
          <Link href="/menu" className="text-sm font-medium text-muted hover:text-white transition">
            {t[lang].menu}
          </Link>
          <Link href="/pedir" className="text-sm font-medium text-muted hover:text-white transition">
            {t[lang].order}
          </Link>

          {/* Language switch */}
          <div className="flex rounded-full border border-white/15 p-0.5 text-xs">
            <button
              onClick={() => setLang("pt")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "pt" ? "bg-primary text-white" : "text-muted hover:text-white"
              }`}
            >
              PT
            </button>
            <button
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                lang === "en" ? "bg-primary text-white" : "text-muted hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              lang === "pt"
                ? "Olá! Quero fazer um pedido de sushi 🍣"
                : "Hi! I would like to order sushi 🍣"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover"
          >
            WhatsApp
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden rounded-lg p-2 text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            <Link href="/" className="py-2 text-sm" onClick={() => setMenuOpen(false)}>
              {t[lang].home}
            </Link>
            <Link href="/menu" className="py-2 text-sm" onClick={() => setMenuOpen(false)}>
              {t[lang].menu}
            </Link>
            <Link href="/pedir" className="py-2 text-sm" onClick={() => setMenuOpen(false)}>
              {t[lang].order}
            </Link>
            <div className="flex gap-2 py-2">
              <button
                onClick={() => setLang("pt")}
                className={`rounded-full px-3 py-1 text-xs ${
                  lang === "pt" ? "bg-primary text-white" : "border border-white/20"
                }`}
              >
                PT
              </button>
              <button
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs ${
                  lang === "en" ? "bg-primary text-white" : "border border-white/20"
                }`}
              >
                EN
              </button>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              className="mt-2 rounded-full bg-primary py-3 text-center text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
