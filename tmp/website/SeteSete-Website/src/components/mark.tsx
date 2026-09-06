import { cn } from "@/lib/utils";

const SEVEN_A = "M30 42 Q60 24 84 40 L56 90";
const SEVEN_B = "M90 78 Q60 96 36 80 L64 30";

type MarkProps = {
  className?: string;
  invert?: boolean;
  line?: boolean;
};

export function Mark({ className, invert = false, line = false }: MarkProps) {
  if (line) {
    return (
      <svg
        viewBox="0 0 120 120"
        className={cn("text-kaki", className)}
        aria-hidden
      >
        <g
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="60" cy="60" r="56" strokeWidth="5" />
          <circle cx="60" cy="60" r="50" strokeWidth="1.2" opacity="0.35" />
          <g strokeWidth="8">
            <path d={SEVEN_A} />
            <path d={SEVEN_B} />
          </g>
        </g>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <circle
        cx="60"
        cy="60"
        r="58"
        className={invert ? "fill-rice" : "fill-kaki"}
      />
      <g
        fill="none"
        className={invert ? "stroke-kaki" : "stroke-rice"}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d={SEVEN_A} />
        <path d={SEVEN_B} />
      </g>
    </svg>
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
      <Mark className="size-9 shrink-0" invert={light} />
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
