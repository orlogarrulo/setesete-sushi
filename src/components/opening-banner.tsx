import { showOpeningSoon } from "@/lib/hours";

export function OpeningBanner() {
  if (!showOpeningSoon()) return null;
  return (
    <div className="relative z-10 border-b border-rice/15 bg-nori/70 px-4 py-4 text-center text-rice backdrop-blur-sm sm:py-5">
      <p className="text-[11px] font-medium tracking-[0.32em] text-kaki-soft uppercase">
        Abertura do serviço brevemente
      </p>
      <p className="mt-1 font-display text-3xl tracking-tight sm:text-4xl">15 / 10 / 2026</p>
    </div>
  );
}
