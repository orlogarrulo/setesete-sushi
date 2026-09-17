import { o as __toESM } from "./_runtime.mjs";
import { l as nextStatus, o as STATUS_META, r as FLOW } from "./_ssr/ops-BbesVQD-.mjs";
import { t as KITCHEN } from "./_ssr/geo-CSQz4fgL.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { f as Copy, m as Check } from "./_libs/lucide-react.mjs";
import { n as Route } from "./_ssr/router-4dU_Mm5l.mjs";
import { d as formatKz, u as cn } from "./_ssr/utils-CK9ZYU1s.mjs";
import { a as getOrder, d as setOrderStatus } from "./_ssr/ops.functions-7TMTmNkW.mjs";
import { n as readStaffPin } from "./_ssr/staff-DrvdntMU.mjs";
import { t as RouteMap } from "./_ssr/route-map-Ao42i3GW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-Dfe67m6b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OrderDetail() {
	const { id } = Route.useParams();
	const [order, setOrder] = (0, import_react.useState)(void 0);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const [busy, setBusy] = (0, import_react.useState)(false);
	const load = (0, import_react.useCallback)(async () => {
		const pin = readStaffPin();
		if (!pin) return;
		const row = await getOrder({ data: {
			pin,
			id
		} });
		setOrder(row);
	}, [id]);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	if (order === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-stone",
		children: "A carregar…"
	});
	if (order === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-kaki",
		children: "Encomenda não encontrada."
	});
	const origin = {
		lat: order.originLat,
		lng: order.originLng,
		name: KITCHEN.name,
		zone: KITCHEN.zone
	};
	const dest = {
		lat: order.destLat,
		lng: order.destLng,
		name: order.address,
		zone: order.zone
	};
	const trackPath = `/seguir/${order.trackToken}`;
	const next = nextStatus(order.status);
	async function setStatus(status) {
		const pin = readStaffPin();
		if (!pin) return;
		setBusy(true);
		try {
			await setOrderStatus({ data: {
				pin,
				id: order.id,
				status,
				note: ""
			} });
			await load();
		} finally {
			setBusy(false);
		}
	}
	async function copyLink() {
		const url = `${window.location.origin}${trackPath}`;
		await navigator.clipboard.writeText(url);
		setCopied(true);
		window.setTimeout(() => setCopied(false), 1600);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/ops/encomendas",
			className: "text-xs tracking-[0.14em] text-stone uppercase hover:text-rice",
			children: "← Encomendas"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-kaki-soft uppercase",
					children: order.id
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-1 font-display text-4xl",
					children: order.customerName
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-sm text-stone",
					children: [
						order.zone,
						" · ",
						order.address
					]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl tabular-nums",
				children: formatKz(order.total)
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteMap, {
				origin,
				dest,
				progress: order.progress,
				moving: order.status === "out" || order.status === "nearby"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.16em] text-stone uppercase",
					children: "Estado"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-3xl",
					children: STATUS_META[order.status].pt
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [FLOW.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy || st === order.status,
						onClick: () => void setStatus(st),
						className: cn("min-h-10 rounded-full px-3 text-[11px] font-semibold tracking-[0.1em] uppercase", st === order.status ? "bg-kaki text-rice" : "bg-rice/8 text-rice/80 hover:bg-rice/15"),
						children: STATUS_META[st].pt
					}, st)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						disabled: busy || order.status === "cancelled",
						onClick: () => void setStatus("cancelled"),
						className: "min-h-10 rounded-full bg-rice/8 px-3 text-[11px] font-semibold tracking-[0.1em] text-stone uppercase hover:bg-rice/15",
						children: "Cancelar"
					})]
				}),
				next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					disabled: busy,
					onClick: () => void setStatus(next),
					className: "mt-4 flex min-h-12 w-full items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40",
					children: ["Avançar · ", STATUS_META[next].pt]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void copyLink(),
						className: "inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase",
						children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied ? "Copiado" : "Copiar link de seguimento"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/seguir/$token",
						params: { token: order.trackToken },
						className: "inline-flex min-h-11 items-center rounded-full bg-rice px-4 text-xs font-semibold tracking-[0.12em] text-nori uppercase",
						children: "Ver como o cliente"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2 text-sm",
					children: order.items.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							l.qty,
							"× ",
							l.name
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums text-kaki-soft",
							children: formatKz(l.total)
						})]
					}, l.id))
				}),
				order.courierName ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-stone",
					children: ["Estafeta · ", order.courierName]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-stone",
					children: ["Tel. ", order.phone]
				}),
				order.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs text-stone",
					children: ["Notas: ", order.notes]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ops/crm/$id",
					params: { id: order.customerId },
					className: "mt-6 inline-block text-xs tracking-[0.14em] text-kaki-soft uppercase",
					children: "Ficha CRM →"
				})
			] })]
		})
	] });
}
//#endregion
export { OrderDetail as component };
