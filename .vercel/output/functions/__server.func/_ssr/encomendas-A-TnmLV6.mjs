import { o as __toESM } from "../_runtime.mjs";
import { l as nextStatus, o as STATUS_META, r as FLOW } from "./ops-BbesVQD-.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as formatKz, u as cn } from "./utils-CK9ZYU1s.mjs";
import { c as listOrders, d as setOrderStatus } from "./ops.functions-7TMTmNkW.mjs";
import { n as readStaffPin } from "./staff-DrvdntMU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/encomendas-A-TnmLV6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLS = [
	{
		id: "in",
		title: "Recebidos",
		statuses: ["received", "confirmed"]
	},
	{
		id: "cook",
		title: "Cozinha",
		statuses: ["preparing"]
	},
	{
		id: "ready",
		title: "Prontos",
		statuses: ["ready"]
	},
	{
		id: "route",
		title: "Em rota",
		statuses: ["out", "nearby"]
	},
	{
		id: "done",
		title: "Entregues",
		statuses: ["delivered"]
	}
];
function EncomendasPage() {
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [err, setErr] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const load = (0, import_react.useCallback)(async () => {
		const pin = readStaffPin();
		if (!pin) return;
		const rows = await listOrders({ data: { pin } });
		setOrders(rows);
	}, []);
	(0, import_react.useEffect)(() => {
		load().catch((e) => setErr(e instanceof Error ? e.message : "Erro"));
		const id = window.setInterval(() => void load(), 5e3);
		return () => window.clearInterval(id);
	}, [load]);
	const live = (0, import_react.useMemo)(() => orders.filter((o) => o.status !== "cancelled" && o.status !== "delivered"), [orders]);
	async function advance(order) {
		const pin = readStaffPin();
		const next = nextStatus(order.status);
		if (!pin || !next) return;
		setBusy(order.id);
		try {
			await setOrderStatus({ data: {
				pin,
				id: order.id,
				status: next,
				note: ""
			} });
			await load();
		} finally {
			setBusy(null);
		}
	}
	if (err) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-kaki",
		children: err
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-[0.28em] text-kaki-soft uppercase",
			children: "Cozinha"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "Encomendas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-stone",
				children: [live.length, " em curso"]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm text-stone",
			children: "Avança o estado. Quando marcas «em rota», o cliente vê o estafeta a sair do ponto A (Talatona) rumo ao destino B. O link de seguimento está em cada ficha."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 flex gap-3 overflow-x-auto pb-4",
			children: COLS.map((col) => {
				const items = orders.filter((o) => col.statuses.includes(o.status));
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "w-64 shrink-0 rounded-xl bg-rice/4 p-3 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-rice)_8%,transparent)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-baseline justify-between px-1 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[11px] tracking-[0.16em] text-stone uppercase",
							children: col.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tabular-nums text-kaki-soft",
							children: items.length
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-2",
						children: items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "px-2 py-6 text-center text-xs text-stone",
							children: "Vazio"
						}) : items.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg bg-nori px-3 py-3 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-rice)_8%,transparent)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/ops/encomendas/$id",
								params: { id: o.id },
								className: "block",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-wide text-stone",
										children: o.id
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 font-medium",
										children: o.customerName
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-stone",
										children: o.zone
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm tabular-nums text-kaki-soft",
										children: formatKz(o.total)
									})
								]
							}), nextStatus(o.status) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: busy === o.id,
								onClick: () => void advance(o),
								className: "mt-3 flex min-h-10 w-full items-center justify-center rounded-full bg-kaki text-[11px] font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40",
								children: STATUS_META[nextStatus(o.status)].pt
							}) : null]
						}, o.id))
					})]
				}, col.id);
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Todas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[640px] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "text-[11px] tracking-[0.16em] text-stone uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Fatura"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Cliente"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Zona"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Estado"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 text-right font-medium",
								children: "Total"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-rice/8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/ops/encomendas/$id",
									params: { id: o.id },
									className: "hover:text-kaki-soft",
									children: o.id
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: o.customerName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 text-stone",
								children: o.zone
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("rounded-full px-2 py-0.5 text-[11px] tracking-wide uppercase", FLOW.includes(o.status) && o.status !== "delivered" ? "bg-kaki/20 text-kaki-soft" : "bg-rice/8 text-stone"),
									children: STATUS_META[o.status].pt
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-3 text-right tabular-nums",
								children: formatKz(o.total)
							})
						]
					}, o.id)) })]
				})
			})]
		})
	] });
}
//#endregion
export { EncomendasPage as component };
