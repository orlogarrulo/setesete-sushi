import { cn } from "@/lib/utils";

type MarkProps = {
  className?: string;
  invert?: boolean;
  line?: boolean;
  alt?: string;
};

/** Official kamon (selo 77) — circular two-sevens, never the pixel-7. */
export function Mark({
  className,
  invert = false,
  line = false,
  alt = "",
}: MarkProps) {
  const src = line
    ? "/brand/setesete-selo-linha.svg"
    : invert
      ? "/brand/setesete-selo-reverso.svg"
      : "/brand/setesete-selo.svg";

  return (
    <img
      src={src}
      alt={alt}
      className={cn("size-12 object-contain", className)}
      width={120}
      height={120}
    />
  );
}

export function LogoLockup({
  className,
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Mark className="size-9 shrink-0" invert={light} alt="Sete Sete" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-sans text-[13px] font-semibold tracking-[0.16em] uppercase sm:text-[15px]",
            light ? "text-rice" : "text-ink",
          )}
        >
          Sete&nbsp;Sete
        </span>
        <span
          className={cn(
            "mt-1 text-[8px] font-medium tracking-[0.18em] uppercase sm:text-[9px] sm:tracking-[0.22em]",
            light ? "text-kaki-soft" : "text-kaki",
          )}
        >
          no&nbsp;teu&nbsp;WhatsApp
        </span>
      </span>
    </span>
  );
}
