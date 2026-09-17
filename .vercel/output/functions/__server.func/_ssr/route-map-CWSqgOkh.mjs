import { o as __toESM } from "../_runtime.mjs";
import { a as curveControls, c as project, i as cubicTangent, n as ZONES, r as cubicPoint, t as KITCHEN } from "./geo-CSQz4fgL.mjs";
import { V as require_react, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-map-CWSqgOkh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var W = 640;
var H = 480;
function RouteMap({ origin, dest, progress, moving = false }) {
	const geo = (0, import_react.useMemo)(() => {
		const a = project(origin.lat, origin.lng, W, H);
		const b = project(dest.lat, dest.lng, W, H);
		const { c1, c2 } = curveControls(a, b);
		const t = Math.min(1, Math.max(0, progress));
		const courier = cubicPoint(t, a, c1, c2, b);
		const tan = cubicTangent(t, a, c1, c2, b);
		return {
			a,
			b,
			c1,
			c2,
			courier,
			angle: Math.atan2(tan.y, tan.x) * 180 / Math.PI,
			d: `M ${a.x} ${a.y} C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${b.x} ${b.y}`,
			t
		};
	}, [
		origin.lat,
		origin.lng,
		dest.lat,
		dest.lng,
		progress
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative overflow-hidden rounded-xl bg-nori shadow-[var(--shadow-border)]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: `0 0 ${W} ${H}`,
			className: "block h-auto w-full",
			role: "img",
			"aria-label": `Rota de ${origin.zone} para ${dest.zone}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("defs", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "bay",
						x1: "0",
						y1: "0",
						x2: "1",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#1b3a42"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#12262c"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "land",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "0%",
							stopColor: "#2a2622"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "100%",
							stopColor: "#1a1714"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("filter", {
						id: "glow",
						x: "-20%",
						y: "-20%",
						width: "140%",
						height: "140%",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feGaussianBlur", {
							stdDeviation: "3",
							result: "b"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("feMerge", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "b" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("feMergeNode", { in: "SourceGraphic" })] })]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					width: W,
					height: H,
					fill: "url(#land)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M0 0 L 210 0 C 230 70 200 130 160 170 C 110 230 90 280 70 360 L 0 420 Z",
					fill: "url(#bay)",
					opacity: "0.95"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 168 8 C 210 40 250 36 310 22 C 380 8 430 18 470 8",
					fill: "none",
					stroke: "#3d6a72",
					strokeWidth: "18",
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M 200 90 C 250 70 310 95 280 140 C 250 180 300 200 340 170",
					fill: "none",
					stroke: "#3a3530",
					strokeWidth: "10",
					opacity: "0.5"
				}),
				ZONES.filter((z) => [
					"Talatona",
					"Ilha de Luanda",
					"Maianga",
					"Kilamba",
					origin.zone,
					dest.zone
				].includes(z.name)).map((z) => {
					const p = project(z.lat, z.lng, W, H);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
						opacity: "0.35",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
							cx: p.x,
							cy: p.y,
							r: "2.2",
							fill: "#f4f0e8"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
							x: p.x + 6,
							y: p.y + 3,
							fill: "#f4f0e8",
							fontSize: "9",
							fontFamily: "Outfit, sans-serif",
							letterSpacing: "0.08em",
							children: z.name
						})]
					}, z.id);
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: geo.d,
					fill: "none",
					stroke: "#f3d5c6",
					strokeWidth: "2.5",
					strokeDasharray: "6 8",
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: geo.d,
					fill: "none",
					stroke: "#e24a17",
					strokeWidth: "3",
					strokeLinecap: "round",
					pathLength: 1,
					strokeDasharray: geo.t,
					strokeDashoffset: 0,
					filter: "url(#glow)",
					className: moving ? "route-dash" : void 0
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
					x: geo.a.x,
					y: geo.a.y,
					label: "A",
					sub: KITCHEN.zone
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pin, {
					x: geo.b.x,
					y: geo.b.y,
					label: "B",
					sub: dest.zone
				}),
				geo.t > .02 && geo.t < .98 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					transform: `translate(${geo.courier.x} ${geo.courier.y}) rotate(${geo.angle})`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
						r: "13",
						fill: "#e24a17",
						className: moving ? "courier-pulse" : void 0
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
						d: "M -6 0 h 10 M 4 -4 l 5 4 l -5 4",
						fill: "none",
						stroke: "#fbfaf7",
						strokeWidth: "1.8",
						strokeLinecap: "round",
						strokeLinejoin: "round"
					})]
				}) : null
			]
		})
	});
}
function Pin({ x, y, label, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
		transform: `translate(${x} ${y})`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				r: "16",
				fill: "#f4f0e8"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				textAnchor: "middle",
				y: "5",
				fill: "#e24a17",
				fontSize: "13",
				fontWeight: "700",
				fontFamily: "Outfit, sans-serif",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				textAnchor: "middle",
				y: "32",
				fill: "#f4f0e8",
				fontSize: "10",
				fontFamily: "Outfit, sans-serif",
				letterSpacing: "0.12em",
				children: sub.toUpperCase()
			})
		]
	});
}
//#endregion
export { RouteMap as t };
