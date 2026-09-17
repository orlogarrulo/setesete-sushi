import { useMemo } from "react";
import {
  cubicPoint,
  cubicTangent,
  curveControls,
  KITCHEN,
  project,
  ZONES,
} from "@/lib/geo";

const W = 640;
const H = 480;

type Props = {
  origin: { lat: number; lng: number; name: string; zone: string };
  dest: { lat: number; lng: number; name: string; zone: string };
  progress: number;
  moving?: boolean;
};

export function RouteMap({ origin, dest, progress, moving = false }: Props) {
  const geo = useMemo(() => {
    const a = project(origin.lat, origin.lng, W, H);
    const b = project(dest.lat, dest.lng, W, H);
    const { c1, c2 } = curveControls(a, b);
    const t = Math.min(1, Math.max(0, progress));
    const courier = cubicPoint(t, a, c1, c2, b);
    const tan = cubicTangent(t, a, c1, c2, b);
    const angle = (Math.atan2(tan.y, tan.x) * 180) / Math.PI;
    const d = `M ${a.x} ${a.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${b.x} ${b.y}`;
    return { a, b, c1, c2, courier, angle, d, t };
  }, [origin.lat, origin.lng, dest.lat, dest.lng, progress]);

  return (
    <div className="relative overflow-hidden rounded-xl bg-nori shadow-[var(--shadow-border)]">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="block h-auto w-full"
        role="img"
        aria-label={`Rota de ${origin.zone} para ${dest.zone}`}
      >
        <defs>
          <linearGradient id="bay" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1b3a42" />
            <stop offset="100%" stopColor="#12262c" />
          </linearGradient>
          <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2a2622" />
            <stop offset="100%" stopColor="#1a1714" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width={W} height={H} fill="url(#land)" />
        <path
          d="M0 0 L 210 0 C 230 70 200 130 160 170 C 110 230 90 280 70 360 L 0 420 Z"
          fill="url(#bay)"
          opacity="0.95"
        />
        <path
          d="M 168 8 C 210 40 250 36 310 22 C 380 8 430 18 470 8"
          fill="none"
          stroke="#3d6a72"
          strokeWidth="18"
          opacity="0.35"
        />
        <path
          d="M 200 90 C 250 70 310 95 280 140 C 250 180 300 200 340 170"
          fill="none"
          stroke="#3a3530"
          strokeWidth="10"
          opacity="0.5"
        />

        {ZONES.filter((z) =>
          ["Talatona", "Ilha de Luanda", "Maianga", "Kilamba", origin.zone, dest.zone].includes(
            z.name,
          ),
        ).map((z) => {
          const p = project(z.lat, z.lng, W, H);
          return (
            <g key={z.id} opacity="0.35">
              <circle cx={p.x} cy={p.y} r="2.2" fill="#f4f0e8" />
              <text
                x={p.x + 6}
                y={p.y + 3}
                fill="#f4f0e8"
                fontSize="9"
                fontFamily="Outfit, sans-serif"
                letterSpacing="0.08em"
              >
                {z.name}
              </text>
            </g>
          );
        })}

        <path
          d={geo.d}
          fill="none"
          stroke="#f3d5c6"
          strokeWidth="2.5"
          strokeDasharray="6 8"
          opacity="0.35"
        />
        <path
          d={geo.d}
          fill="none"
          stroke="#e24a17"
          strokeWidth="3"
          strokeLinecap="round"
          pathLength={1}
          strokeDasharray={geo.t}
          strokeDashoffset={0}
          filter="url(#glow)"
          className={moving ? "route-dash" : undefined}
        />

        <Pin x={geo.a.x} y={geo.a.y} label="A" sub={KITCHEN.zone} />
        <Pin x={geo.b.x} y={geo.b.y} label="B" sub={dest.zone} />

        {geo.t > 0.02 && geo.t < 0.98 ? (
          <g transform={`translate(${geo.courier.x} ${geo.courier.y}) rotate(${geo.angle})`}>
            <circle r="13" fill="#e24a17" className={moving ? "courier-pulse" : undefined} />
            <path
              d="M -6 0 h 10 M 4 -4 l 5 4 l -5 4"
              fill="none"
              stroke="#fbfaf7"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ) : null}
      </svg>
    </div>
  );
}

function Pin({ x, y, label, sub }: { x: number; y: number; label: string; sub: string }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <circle r="16" fill="#f4f0e8" />
      <text
        textAnchor="middle"
        y="5"
        fill="#e24a17"
        fontSize="13"
        fontWeight="700"
        fontFamily="Outfit, sans-serif"
      >
        {label}
      </text>
      <text
        textAnchor="middle"
        y="32"
        fill="#f4f0e8"
        fontSize="10"
        fontFamily="Outfit, sans-serif"
        letterSpacing="0.12em"
      >
        {sub.toUpperCase()}
      </text>
    </g>
  );
}
