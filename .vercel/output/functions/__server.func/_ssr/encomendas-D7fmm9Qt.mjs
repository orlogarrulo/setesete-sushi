import { o as __toESM } from "../_runtime.mjs";
import { a as STATUS_META, c as nextStatus, r as FLOW } from "./ops-CJMdWyyN.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as cn, p as formatKz } from "./utils-CJy7FdrE.mjs";
import { t as ExportBar } from "./export-bar-B6Mn9Tfh.mjs";
import { _ as setOrderStatus, d as listOrders, i as findOrders } from "./ops.functions-DHvQhR2m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/encomendas-D7fmm9Qt.js
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
	const navigate = useNavigate();
	const [orders, setOrders] = (0, import_react.useState)([]);
	const [err, setErr] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [lookup, setLookup] = (0, import_react.useState)("");
	const [lookupErr, setLookupErr] = (0, import_react.useState)("");
	const [hits, setHits] = (0, import_react.useState)(null);
	const load = (0, import_react.useCallback)(async () => {
		const rows = await listOrders({ data: {} });
		setOrders(rows);
	}, []);
	(0, import_react.useEffect)(() => {
		load().catch((e) => setErr(e instanceof Error ? e.message : "Erro"));
		const id = window.setInterval(() => void load(), 5e3);
		return () => window.clearInterval(id);
	}, [load]);
	const live = (0, import_react.useMemo)(() => orders.filter((o) => o.status !== "cancelled" && o.status !== "delivered"), [orders]);
	async function advance(order) {
		const next = nextStatus(order.status);
		if (!next) return;
		setBusy(order.id);
		try {
			await setOrderStatus({ data: {
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
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-stone",
					children: [live.length, " em curso"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportBar, {
					title: "Encomendas Sete Sete",
					filename: "setesete-encomendas",
					orientation: "landscape",
					headers: [
						"Fatura",
						"Cliente",
						"Telefone",
						"Zona",
						"Estado",
						"Pagamento",
						"Total Kz",
						"Comprovativo",
						"Pago",
						"Criada"
					],
					rows: orders.map((o) => [
						o.id,
						o.customerName,
						o.phone,
						o.zone,
						STATUS_META[o.status].pt,
						o.pay,
						o.total,
						o.hasReceipt ? "sim" : "não",
						o.payVerified ? "verificado" : "pendente",
						o.createdAt.replace("T", " ").slice(0, 16)
					])
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm text-stone",
			children: "Verifica a fatura pela referência (SS-…). O comprovativo fica ligado ao telefone do cliente. Avança o estado quando o pagamento estiver certo."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "mt-6 flex flex-col gap-2 sm:flex-row",
			onSubmit: (e) => {
				e.preventDefault();
				const q = lookup.trim();
				if (q.length < 2) return;
				setLookupErr("");
				findOrders({ data: { q } }).then((rows) => {
					if (rows.length === 1) {
						navigate({
							to: "/ops/encomendas/$id",
							params: { id: rows[0].id }
						});
						return;
					}
					setHits(rows);
					if (rows.length === 0) setLookupErr("Nenhuma encomenda com essa referência ou telefone.");
				}).catch((er) => setLookupErr(er instanceof Error ? er.message : "Erro"));
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: lookup,
				onChange: (e) => setLookup(e.target.value),
				placeholder: "Referência da fatura ou telefone",
				className: "min-h-12 flex-1 rounded-full border border-rice/15 bg-nori px-4 text-sm text-rice outline-none ring-kaki focus:ring-2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				className: "min-h-12 rounded-full bg-kaki px-5 text-xs font-semibold tracking-[0.14em] text-rice uppercase",
				children: "Verificar"
			})]
		}),
		lookupErr ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-kaki",
			children: lookupErr
		}) : null,
		hits && hits.length > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-2",
			children: hits.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/ops/encomendas/$id",
				params: { id: o.id },
				className: "flex items-center justify-between rounded-lg bg-rice/6 px-4 py-3 text-sm hover:bg-rice/10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: o.id
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-2 text-stone",
					children: [
						o.customerName,
						" · ",
						o.phone
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums text-kaki-soft",
					children: formatKz(o.total)
				})]
			}) }, o.id))
		}) : null,
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
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-[10px] tracking-[0.12em] uppercase",
										children: o.payVerified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-kaki-soft",
											children: "Pago verificado"
										}) : o.hasReceipt ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-stone",
											children: "Comprovativo · a verificar"
										}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-kaki",
											children: "Sem comprovativo"
										})
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
