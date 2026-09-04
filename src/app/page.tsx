import Header from "@/components/Header";
import Link from "next/link";

const WHATSAPP = "244974506949";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background" />
          <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
                Luanda • 12h – 22h
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Sushi & Combos{" "}
                <span className="text-primary">frescos</span>
                <br />
                em Luanda
              </h1>
              <p className="mb-8 max-w-lg text-lg text-muted">
                Pedidos rápidos via WhatsApp. Sushi fresco, combos deliciosos e entrega
                prática. Todos os dias das 12h às 22h.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                    "Olá Sete Sete! Quero fazer um pedido 🍣"
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-xl shadow-primary/30 transition hover:bg-primary-hover"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Pedir no WhatsApp
                </a>
                <Link
                  href="/menu"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5"
                >
                  Ver Menu
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-y border-white/5 bg-card/50 py-16">
          <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                🍣
              </div>
              <h3 className="mb-2 font-semibold text-white">Sushi Fresco</h3>
              <p className="text-sm text-muted">
                Preparado no momento com ingredientes de qualidade
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                ⚡
              </div>
              <h3 className="mb-2 font-semibold text-white">Pedidos Rápidos</h3>
              <p className="text-sm text-muted">
                Encomenda pelo WhatsApp e recebe confirmação imediata
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-2xl">
                📍
              </div>
              <h3 className="mb-2 font-semibold text-white">Várias Localizações</h3>
              <p className="text-sm text-muted">
                Atendemos diferentes zonas de Luanda
              </p>
            </div>
          </div>
        </section>

        {/* CTA Order */}
        <section id="order" className="py-20">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Pronto para pedir?
            </h2>
            <p className="mb-8 text-muted">
              Clique no botão abaixo e fale directamente connosco no WhatsApp.
              Diz o que queres e nós tratamos do resto.
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                "Olá! Gostaria de ver o menu e fazer um pedido."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-green-600 px-10 py-5 text-lg font-semibold text-white shadow-xl shadow-green-600/25 transition hover:bg-green-500"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Abrir WhatsApp
            </a>
            <p className="mt-4 text-sm text-muted">+244 974 506 949</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row">
            <div className="text-sm text-muted">
              © {new Date().getFullYear()} Sete Sete – Sushi Delivery. Luanda, Angola.
            </div>
            <div className="flex gap-6 text-sm">
              <a
                href="https://www.instagram.com/setesete.ao/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
