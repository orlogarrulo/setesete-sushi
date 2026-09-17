import { o as __toESM } from "./_runtime.mjs";
import { o as STATUS_META, r as FLOW } from "./_ssr/ops-BbesVQD-.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as Share2, f as Copy, m as Check } from "./_libs/lucide-react.mjs";
import { i as Route$4 } from "./_ssr/router-4dU_Mm5l.mjs";
import { d as formatKz, u as cn } from "./_ssr/utils-CK9ZYU1s.mjs";
import { o as getTracking } from "./_ssr/ops.functions-7TMTmNkW.mjs";
import { t as RouteMap } from "./_ssr/route-map-Ao42i3GW.mjs";
import { c as t, i as copy, r as Shell, u as useLang } from "./_ssr/shell-DELOctKK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_token-50Z-W9UR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TrackPage() {
	const { token } = Route$4.useParams();
	const lang = useLang((s) => s.lang);
	const [data, setData] = (0, import_react.useState)(void 0);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		let alive = true;
		async function load() {
			const next = await getTracking({ data: { token } });
			if (alive) setData(next);
		}
		load();
		const id = window.setInterval(() => void load(), 4e3);
		return () => {
			alive = false;
			window.clearInterval(id);
		};
	}, [token]);
	if (data === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "mx-auto max-w-5xl px-4 py-20 text-sm text-stone",
		children: lang === "pt" ? "A localizar a encomenda…" : "Locating the order…"
	}) });
	if (data === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-xl px-4 py-20 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.28em] text-kaki uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl",
				children: lang === "pt" ? "Este link não existe." : "This link does not exist."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/seguir",
				className: "mt-8 inline-flex min-h-12 items-center rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase",
				children: lang === "pt" ? "Procurar encomenda" : "Find an order"
			})
		]
	}) });
	const moving = data.status === "out" || data.status === "nearby";
	const idx = FLOW.indexOf(data.status);
	const share = typeof window !== "undefined" ? window.location.href : "";
	async function copyLink() {
		try {
			await navigator.clipboard.writeText(share);
			setCopied(true);
			window.setTimeout(() => setCopied(false), 1600);
		} catch {}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[11px] tracking-[0.28em] text-kaki uppercase",
				children: [
					lang === "pt" ? "Seguimento" : "Tracking",
					" · ",
					data.id
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-4xl sm:text-5xl",
					children: STATUS_META[data.status][lang]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-stone",
					children: data.status === "delivered" ? lang === "pt" ? "Chegou." : "It arrived." : data.status === "cancelled" ? lang === "pt" ? "Não segue." : "Will not continue." : lang === "pt" ? `~ ${data.remainingMin} min` : `~ ${data.remainingMin} min`
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 max-w-xl text-sm leading-relaxed text-stone",
				children: [
					t(STATUS_META[data.status].hint, lang),
					" ",
					lang === "pt" ? `${firstLine(data.customerFirst)} · destino ${data.zone}.` : `${firstLine(data.customerFirst)} · destination ${data.zone}.`
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouteMap, {
					origin: data.origin,
					dest: data.dest,
					progress: data.progress,
					moving
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "space-y-0",
						children: FLOW.map((st, i) => {
							const done = idx >= i || data.status === "delivered";
							const current = data.status === st;
							const ev = [...data.events].reverse().find((e) => e.status === st);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col items-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("grid size-3 rounded-full", current ? "bg-kaki" : done ? "bg-ink" : "bg-ink/15") }), i < FLOW.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("w-px flex-1", done ? "bg-ink/25" : "bg-ink/10") }) : null]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pb-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: cn("text-sm", current ? "font-semibold text-kaki" : "text-ink"),
										children: STATUS_META[st][lang]
									}), ev ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-xs text-stone",
										children: ev.note
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-xs text-stone",
										children: STATUS_META[st].hint[lang]
									})]
								})]
							}, st);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 rounded-xl bg-rice-warm p-5 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] tracking-[0.18em] text-stone uppercase",
								children: lang === "pt" ? "Pedido" : "Order"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-3 space-y-1.5 text-sm",
								children: data.items.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
										l.qty,
										"× ",
										l.name
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-kaki",
										children: formatKz(l.total)
									})]
								}, l.id))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 flex justify-between border-t border-ink/8 pt-3 font-display text-2xl",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(copy.cart.total, lang) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "tabular-nums",
									children: formatKz(data.total)
								})]
							}),
							data.courierName && moving ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-xs text-stone",
								children: [
									lang === "pt" ? "Estafeta" : "Courier",
									" · ",
									data.courierName
								]
							}) : null
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void copyLink(),
							className: "inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase",
							children: [copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-3.5" }), copied ? lang === "pt" ? "Copiado" : "Copied" : lang === "pt" ? "Copiar link" : "Copy link"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `https://wa.me/?text=${encodeURIComponent(share)}`,
							target: "_blank",
							rel: "noreferrer",
							className: "inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "size-3.5" }), "WhatsApp"]
						})]
					})
				] })]
			})
		]
	}) });
}
function firstLine(name) {
	return name;
}
//#endregion
export { TrackPage as component };
