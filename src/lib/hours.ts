const TZ = "Africa/Luanda";

function luandaParts(at = new Date()) {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: TZ,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(at);
  const n = (type: string) =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");
  return {
    year: n("year"),
    month: n("month"),
    day: n("day"),
    hour: n("hour"),
    minute: n("minute"),
  };
}

/** Open 12:00–22:00, Luanda time. */
export function isHouseOpen(at = new Date()) {
  const { hour } = luandaParts(at);
  return hour >= 12 && hour < 22;
}

/** Visible until (not including) 16/10/2026 in Luanda. */
export function showOpeningSoon(at = new Date()) {
  const { year, month, day } = luandaParts(at);
  if (year < 2026) return true;
  if (year > 2026) return false;
  if (month < 10) return true;
  if (month > 10) return false;
  return day < 16;
}
