export type TrackQuery =
  | { kind: "invoice"; value: string }
  | { kind: "track"; value: string }
  | { kind: "rider"; value: string };

export function parseTrackQuery(raw: string): TrackQuery | null {
  const v = raw.trim();
  if (!v) return null;
  if (/^SS-[A-Z0-9-]+$/i.test(v)) return { kind: "invoice", value: v.toUpperCase() };

  const fromPath = (path: string): TrackQuery | null => {
    const m = path.match(/\/(seguir|moto)\/([^/?#]+)/i);
    if (!m) return null;
    const token = decodeURIComponent(m[2]);
    return m[1].toLowerCase() === "moto" ? { kind: "rider", value: token } : { kind: "track", value: token };
  };

  if (/^https?:\/\//i.test(v) || v.startsWith("/") || /(?:seguir|moto)\//i.test(v)) {
    try {
      const u = new URL(v.includes("://") ? v : `https://setesete.ao/${v.replace(/^\//, "")}`);
      const hit = fromPath(u.pathname);
      if (hit) return hit;
    } catch {
      const hit = fromPath(`/${v.replace(/^\//, "")}`);
      if (hit) return hit;
    }
  }
  if (v.startsWith("rd")) return { kind: "rider", value: v };
  return { kind: "track", value: v };
}
