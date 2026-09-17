//#region node_modules/.nitro/vite/services/ssr/assets/geo-CSQz4fgL.js
/** Cozinha Sete Sete — ponto A de todas as rotas. Talatona, Luanda. */
var KITCHEN = {
	name: "Cozinha Sete Sete",
	zone: "Talatona",
	address: "Talatona, Luanda",
	lat: -8.9412,
	lng: 13.1874
};
var ZONES = [
	{
		id: "talatona",
		name: "Talatona",
		lat: -8.941,
		lng: 13.187,
		etaBias: 12
	},
	{
		id: "benfica",
		name: "Benfica",
		lat: -8.962,
		lng: 13.168,
		etaBias: 18
	},
	{
		id: "camama",
		name: "Camama",
		lat: -8.918,
		lng: 13.218,
		etaBias: 16
	},
	{
		id: "kilamba",
		name: "Kilamba",
		lat: -8.998,
		lng: 13.268,
		etaBias: 28
	},
	{
		id: "gamek",
		name: "Gamek",
		lat: -8.888,
		lng: 13.208,
		etaBias: 20
	},
	{
		id: "patriota",
		name: "Patriota",
		lat: -8.904,
		lng: 13.158,
		etaBias: 22
	},
	{
		id: "maianga",
		name: "Maianga",
		lat: -8.828,
		lng: 13.234,
		etaBias: 32
	},
	{
		id: "alvalade",
		name: "Alvalade",
		lat: -8.848,
		lng: 13.252,
		etaBias: 30
	},
	{
		id: "ingombota",
		name: "Ingombota",
		lat: -8.812,
		lng: 13.234,
		etaBias: 34
	},
	{
		id: "miramar",
		name: "Miramar",
		lat: -8.806,
		lng: 13.246,
		etaBias: 36
	},
	{
		id: "ilha",
		name: "Ilha de Luanda",
		lat: -8.776,
		lng: 13.242,
		etaBias: 40
	},
	{
		id: "samba",
		name: "Samba",
		lat: -8.858,
		lng: 13.214,
		etaBias: 24
	},
	{
		id: "viana",
		name: "Viana",
		lat: -8.902,
		lng: 13.372,
		etaBias: 38
	},
	{
		id: "cazenga",
		name: "Cazenga",
		lat: -8.838,
		lng: 13.292,
		etaBias: 34
	}
];
function zoneById(id) {
	return ZONES.find((z) => z.id === id);
}
function resolveZone(text) {
	const q = text.trim().toLowerCase();
	if (!q) return ZONES[0];
	const exact = ZONES.find((z) => z.id === q || z.name.toLowerCase() === q);
	if (exact) return exact;
	return ZONES.find((z) => q.includes(z.id) || z.name.toLowerCase().includes(q) || q.includes(z.name.toLowerCase())) ?? ZONES[7];
}
function jitter(zone, salt) {
	let h = 0;
	for (let i = 0; i < salt.length; i++) h = h * 31 + salt.charCodeAt(i) | 0;
	const a = (h % 1e3 / 1e3 - .5) * .012;
	const b = ((h / 1e3 | 0) % 1e3 / 1e3 - .5) * .012;
	return {
		lat: zone.lat + a,
		lng: zone.lng + b
	};
}
function estimateEtaMin(zone, prepMin = 16) {
	return prepMin + zone.etaBias;
}
/** Luanda bounding box used by the tracking map. */
var MAP_BOUNDS = {
	west: 13.12,
	east: 13.42,
	north: -8.74,
	south: -9.06
};
function project(lat, lng, w, h) {
	const { west, east, north, south } = MAP_BOUNDS;
	return {
		x: (lng - west) / (east - west) * w,
		y: (north - lat) / (north - south) * h
	};
}
function cubicPoint(t, p0, p1, p2, p3) {
	const u = 1 - t;
	return {
		x: u ** 3 * p0.x + 3 * u ** 2 * t * p1.x + 3 * u * t ** 2 * p2.x + t ** 3 * p3.x,
		y: u ** 3 * p0.y + 3 * u ** 2 * t * p1.y + 3 * u * t ** 2 * p2.y + t ** 3 * p3.y
	};
}
function cubicTangent(t, p0, p1, p2, p3) {
	const u = 1 - t;
	return {
		x: 3 * u ** 2 * (p1.x - p0.x) + 6 * u * t * (p2.x - p1.x) + 3 * t ** 2 * (p3.x - p2.x),
		y: 3 * u ** 2 * (p1.y - p0.y) + 6 * u * t * (p2.y - p1.y) + 3 * t ** 2 * (p3.y - p2.y)
	};
}
function curveControls(a, b) {
	const mx = (a.x + b.x) / 2;
	const my = (a.y + b.y) / 2;
	const dx = b.x - a.x;
	const nx = -(b.y - a.y) * .22;
	const ny = dx * .22;
	return {
		c1: {
			x: mx * .35 + a.x * .65 + nx * .45,
			y: my * .35 + a.y * .65 + ny * .45
		},
		c2: {
			x: mx * .35 + b.x * .65 + nx,
			y: my * .35 + b.y * .65 + ny
		}
	};
}
//#endregion
export { curveControls as a, project as c, cubicTangent as i, resolveZone as l, ZONES as n, estimateEtaMin as o, cubicPoint as r, jitter as s, KITCHEN as t, zoneById as u };
