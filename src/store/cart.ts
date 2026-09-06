import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PRODUCTS } from "@/lib/menu";

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
