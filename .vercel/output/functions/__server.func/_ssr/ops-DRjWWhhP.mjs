import { o as __toESM } from "../_runtime.mjs";
import { i as KPI_COPY } from "./ops-CJMdWyyN.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { p as formatKz } from "./utils-CJy7FdrE.mjs";
import { t as ExportBar } from "./export-bar-B6Mn9Tfh.mjs";
import { o as getDashboard } from "./ops.functions-DHvQhR2m.mjs";
import { a as Line, c as Cell, i as XAxis, l as ResponsiveContainer, n as LineChart, o as CartesianGrid, r as YAxis, s as Bar, t as BarChart, u as Tooltip } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ops-DRjWWhhP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function OpsDashboard() {
	const [data, setData] = (0, import_react.useState)(null);
	const [err, setErr] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		getDashboard().then(setData).catch((e) => setErr(e instanceof Error ? e.message : "Erro"));
	}, []);
	if (err) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-kaki",
		children: err
	});
	if (!data) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-stone",
		children: "A carregar o painel…"
	});
	const cards = [
		{
			label: KPI_COPY[0].pt,
			value: formatKz(data.today.revenue),
			why: KPI_COPY[0].why.pt
		},
		{
			label: KPI_COPY[1].pt,
			value: String(data.today.orders),
			why: KPI_COPY[1].why.pt
		},
		{
			label: KPI_COPY[2].pt,
			value: formatKz(data.today.avgTicket),
			why: KPI_COPY[2].why.pt
		},
		{
			label: KPI_COPY[3].pt,
			value: `${data.kpis.cycleMin} min`,
			why: KPI_COPY[3].why.pt
		},
		{
			label: KPI_COPY[4].pt,
			value: `${data.kpis.onTimePct}%`,
			why: KPI_COPY[4].why.pt
		},
		{
			label: KPI_COPY[5].pt,
			value: `${data.kpis.repeatPct}%`,
			why: KPI_COPY[5].why.pt
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-[0.28em] text-kaki-soft uppercase",
			children: "Painel"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "O dia da casa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportBar, {
				title: "Painel Sete Sete",
				filename: "setesete-painel",
				orientation: "landscape",
				headers: [
					"Secção",
					"Item",
					"Valor"
				],
				rows: [
					...cards.map((c) => [
						"KPI",
						c.label,
						c.value
					]),
					...data.topProducts.map((p) => [
						"Top peças",
						p.name,
						`${p.qty} × ${formatKz(p.revenue)}`
					]),
					...data.zones.map((z) => [
						"Zonas",
						z.zone,
						`${z.orders} ped. · ${formatKz(z.revenue)}`
					]),
					...data.daily.map((d) => [
						"14 dias",
						d.day,
						`${d.orders} ped. · ${formatKz(d.revenue)}`
					])
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm leading-relaxed text-stone",
			children: "Seis números que bastam para gerir o serviço: receita, carga, ticket, ciclo, pontualidade e recorrência. O resto é detalhe — zonas, produtos, e o CRM a puxar quem já não pede."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3",
			children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "rounded-xl bg-rice/4 px-5 py-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-rice)_8%,transparent)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] text-stone uppercase",
						children: c.label
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-display text-3xl text-rice tabular-nums",
						children: c.value
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-relaxed text-stone",
						children: c.why
					})
				]
			}, c.label))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4",
			children: [
				{
					l: "Recebidos",
					n: data.live.received
				},
				{
					l: "Cozinha",
					n: data.live.preparing
				},
				{
					l: "Prontos",
					n: data.live.ready
				},
				{
					l: "Em rota",
					n: data.live.out
				}
			].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/ops/encomendas",
				className: "rounded-xl bg-kaki/15 px-4 py-4 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl tabular-nums",
					children: item.n
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-[11px] tracking-[0.14em] text-kaki-soft uppercase",
					children: item.l
				})]
			}, item.l))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Receita · 14 dias"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
						data: data.daily,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "rgba(244,240,232,0.08)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "day",
								stroke: "#8a8278",
								fontSize: 11,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								stroke: "#8a8278",
								fontSize: 11,
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
								contentStyle: {
									background: "#1a1714",
									border: "1px solid #3a3530",
									borderRadius: 8
								},
								formatter: (v) => formatKz(v)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "revenue",
								stroke: "#e24a17",
								strokeWidth: 2,
								dot: false
							})
						]
					})
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Pedidos por hora · hoje"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-56",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
						data: data.hourly,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: "rgba(244,240,232,0.08)",
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "label",
								stroke: "#8a8278",
								fontSize: 11,
								tickLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								allowDecimals: false,
								stroke: "#8a8278",
								fontSize: 11,
								tickLine: false,
								axisLine: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "#1a1714",
								border: "1px solid #3a3530",
								borderRadius: 8
							} }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
								dataKey: "count",
								radius: [
									4,
									4,
									0,
									0
								],
								children: data.hourly.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: h.count > 0 ? "#e24a17" : "#3a3530" }, h.hour))
							})
						]
					})
				})
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Top peças"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-rice/8",
				children: data.topProducts.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [p.name, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 text-xs text-stone",
						children: [p.qty, "×"]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-kaki-soft",
						children: formatKz(p.revenue)
					})]
				}, p.name))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Zonas"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-rice/8",
				children: data.zones.slice(0, 7).map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between gap-3 py-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [z.zone, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 text-xs text-stone",
						children: [z.orders, " ped."]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums text-kaki-soft",
						children: formatKz(z.revenue)
					})]
				}, z.zone))
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "VIP · maior LTV"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/ops/crm",
					className: "text-xs tracking-[0.14em] text-kaki-soft uppercase",
					children: "CRM"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-rice/8",
				children: data.vip.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ops/crm/$id",
					params: { id: c.id },
					className: "flex items-baseline justify-between gap-3 py-3 hover:text-kaki-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [c.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-xs text-stone",
						children: c.zone
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tabular-nums",
						children: formatKz(c.spent)
					})]
				}) }, c.id))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "A reactivar · 10+ dias"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-rice/8",
				children: data.winback.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-3 text-sm text-stone",
					children: "Ninguém em silêncio."
				}) : data.winback.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/ops/crm/$id",
					params: { id: c.id },
					className: "flex items-baseline justify-between gap-3 py-3 hover:text-kaki-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [c.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 text-xs text-stone",
						children: c.zone
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-stone",
						children: c.lastOrderAt ? new Date(c.lastOrderAt).toLocaleDateString("pt-PT") : "—"
					})]
				}) }, c.id))
			})] })]
		})
	] });
}
//#endregion
export { OpsDashboard as component };
