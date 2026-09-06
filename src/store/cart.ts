import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS, productById } from "@/lib/menu";
import { WHATSAPP } from "@/lib/utils";
import type { Lang } from "@/lib/menu";

export type CartLine = { id: string; qty: number };

type CartState = {
  lines: CartLine[];
  open: boolean;
  setOpen: (open: boolean) => void;
  add: (id: string, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
};

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      lines: [],
      open: false,
      setOpen: (open) => set({ open }),
      add: (id, qty = 1) => {
        const lines = [...get().lines];
        const i = lines.findIndex((l) => l.id === id);
        if (i >= 0) lines[i] = { id, qty: lines[i].qty + qty };
        else lines.push({ id, qty });
        set({ lines, open: true });
      },
      setQty: (id, qty) => {
        if (qty <= 0) {
          set({ lines: get().lines.filter((l) => l.id !== id) });
          return;
        }
        set({
          lines: get().lines.map((l) => (l.id === id ? { ...l, qty } : l)),
        });
      },
      remove: (id) => set({ lines: get().lines.filter((l) => l.id !== id) }),
      clear: () => set({ lines: [] }),
      count: () => get().lines.reduce((n, l) => n + l.qty, 0),
      total: () =>
        get().lines.reduce((n, l) => {
          const p = PRODUCTS.find((x) => x.id === l.id);
          return n + (p ? p.price * l.qty : 0);
        }, 0),
    }),
    {
      name: "setesete-cart",
      partialize: (s) => ({ lines: s.lines }),
      skipHydration: true,
    },
  ),
);

export function buildWhatsAppUrl(opts: {
  lang: Lang;
  name?: string;
  phone?: string;
  address?: string;
  notes?: string;
}) {
  const { lang, name, phone, address, notes } = opts;
  const lines = useCart.getState().lines;
  const rows = lines
    .map((l) => {
      const p = productById(l.id);
      if (!p) return null;
      const price = p.price * l.qty;
      return `• ${l.qty}× ${p.name[lang]} — ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
    })
    .filter(Boolean);
  const total = useCart.getState().total();
  const totalFmt = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const header = lang === "pt" ? "Pedido Sete Sete" : "Sete Sete order";
  const body = [
    `*${header}*`,
    name ? (lang === "pt" ? `Nome: ${name}` : `Name: ${name}`) : null,
    phone ? (lang === "pt" ? `Telefone: ${phone}` : `Phone: ${phone}`) : null,
    address ? (lang === "pt" ? `Morada: ${address}` : `Address: ${address}`) : null,
    "",
    ...rows,
    "",
    `*Total: ${totalFmt} Kz*`,
    notes ? (lang === "pt" ? `Notas: ${notes}` : `Notes: ${notes}`) : null,
  ]
    .filter((x) => x !== null)
    .join("\n");
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`;
}
