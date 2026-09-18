//#region node_modules/.nitro/vite/services/ssr/assets/hours-Bem0ew0F.js
var TZ = "Africa/Luanda";
function luandaParts(at = /* @__PURE__ */ new Date()) {
	const parts = new Intl.DateTimeFormat("en-GB", {
		timeZone: TZ,
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
		hour: "2-digit",
		minute: "2-digit",
		hourCycle: "h23"
	}).formatToParts(at);
	const n = (type) => Number(parts.find((p) => p.type === type)?.value ?? "0");
	return {
		year: n("year"),
		month: n("month"),
		day: n("day"),
		hour: n("hour"),
		minute: n("minute")
	};
}
/** Open 12:00–22:00, Luanda time. */
function isHouseOpen(at = /* @__PURE__ */ new Date()) {
	const { hour } = luandaParts(at);
	return hour >= 12 && hour < 22;
}
/** Visible until (not including) 16/10/2026 in Luanda. */
function showOpeningSoon(at = /* @__PURE__ */ new Date()) {
	const { year, month, day } = luandaParts(at);
	if (year < 2026) return true;
	if (year > 2026) return false;
	if (month < 10) return true;
	if (month > 10) return false;
	return day < 16;
}
//#endregion
export { showOpeningSoon as n, isHouseOpen as t };
