import Header from "@/components/Header";
import Link from "next/link";

const WHATSAPP = "244974506949";

// Placeholder menu – replace with your real items and prices later
const MENU = {
  combos: [
    { name: "Combo Clássico", desc: "8 peças + 4 uramaki + 2 temaki", price: "—" },
    { name: "Combo Família", desc: "16 peças + 8 uramaki + 4 temaki", price: "—" },
    { name: "Combo Executivo", desc: "12 peças mistas + bebida", price: "—" },
  ],
  rolls: [
    { name: "California Roll", desc: "Caranguejo, abacate, pepino", price: "—" },
    { name: "Philadelphia", desc: "Salmão, cream cheese", price: "—" },
    { name: "Spicy Tuna", desc: "Atum picante", price: "—" },
    { name: "Dragon Roll", desc: "Enguia, abacate, molho especial", price: "—" },
  ],
  nigiri: [
    { name: "Salmão", desc: "2 peças", price: "—" },
    { name: "Atum", desc: "2 peças", price: "—" },
    { name: "Camarão", desc: "2 peças", price: "—" },
  ],
  extras: [
    { name: "Temaki Salmão", desc: "1 unidade", price: "—" },
    { name: "Sopa Miso", desc: "1 tigela", price: "—" },
    { name: "Edamame", desc: "Porção", price: "—" },
  ],
};

function MenuSection({
  title,
  items,
}: {
  title: string;
  items: { name: string; desc: string; price: string }[];
}) {
  return (
    <div className="mb-12">
      <h2 className="mb-6 text-2xl font-bold text-white border-b border-white/10 pb-3">
        {title}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-white/10 bg-card p-5 transition hover:border-primary/40"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-semibold text-white">{item.name}</h3>
                <p className="mt-1 text-sm text-muted">{item.desc}</p>
              </div>
              <span className="shrink-0 text-sm font-medium text-accent">
                {item.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-white md:text-4xl">Menu</h1>
            <p className="mt-2 text-muted">
              Preços e itens finais serão actualizados em breve. Pede pelo WhatsApp
              para a lista completa e actualizada.
            </p>
          </div>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
              "Olá! Quero ver o menu completo e preços 🍣"
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 hover:bg-primary-hover"
          >
            Pedir Menu no WhatsApp
          </a>
        </div>

        <MenuSection title="Combos" items={MENU.combos} />
        <MenuSection title="Rolls / Uramaki" items={MENU.rolls} />
        <MenuSection title="Nigiri" items={MENU.nigiri} />
        <MenuSection title="Extras" items={MENU.extras} />

        <div className="mt-16 rounded-2xl border border-primary/30 bg-primary/10 p-8 text-center">
          <h3 className="mb-3 text-xl font-bold text-white">
            Queres montar o teu pedido?
          </h3>
          <p className="mb-6 text-muted">
            Fala connosco no WhatsApp e montamos o combo perfeito para ti.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-green-600 px-8 py-3.5 font-semibold text-white hover:bg-green-500"
          >
            Abrir WhatsApp
          </a>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="text-sm text-muted hover:text-white">
            ← Voltar ao início
          </Link>
        </div>
      </main>
    </>
  );
}
