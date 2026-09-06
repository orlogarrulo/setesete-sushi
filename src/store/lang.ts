import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Lang } from "@/lib/menu";

type LangState = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

export const useLang = create<LangState>()(
  persist(
    (set) => ({
      lang: "pt",
      setLang: (lang) => set({ lang }),
    }),
    { name: "setesete-lang", skipHydration: true },
  ),
);
