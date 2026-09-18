import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as ArrowRight } from "../_libs/lucide-react.mjs";
import { h as lookupInvoice, l as getTracking } from "./ops.functions-DHvQhR2m.mjs";
import { r as Shell, u as useLang } from "./shell-DsxHswG9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/seguir-DniFWZvY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DEMOS = [
	{
		token: "sete-ilha-77",
		label: {
			pt: "Ilha · em rota",
			en: "Ilha · on the way"
		}
	},
	{
		token: "sete-ouro-77",
		label: {
			pt: "Talatona · cozinha",
			en: "Talatona · kitchen"
		}
	},
	{
		token: "sete-alvalade-77",
		label: {
			pt: "Alvalade · próximo",
			en: "Alvalade · nearby"
		}
	}
];
function SeguirHome() {
	const lang = useLang((s) => s.lang);
	const nav = useNavigate();
	const [q, setQ] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	async function onSubmit(e) {
		e.preventDefault();
		setErr("");
		const value = q.trim();
		if (!value) return;
		setBusy(true);
		try {
			if (value.startsWith("SS-") || value.startsWith("ss-") || value.startsWith("Ss-")) {
				const found = await lookupInvoice({ data: { id: value.toUpperCase() } });
				if (!found) {
					setErr(lang === "pt" ? "Fatura não encontrada." : "Invoice not found.");
					return;
				}
				await nav({
					to: "/seguir/$token",
					params: { token: found.token }
				});
				return;
			}
			if (!await getTracking({ data: { token: value } })) {
				setErr(lang === "pt" ? "Link de seguimento inválido." : "Invalid tracking link.");
				return;
			}
			await nav({
				to: "/seguir/$token",
				params: { token: value }
			});
		} finally {
			setBusy(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.28em] text-kaki uppercase",
				children: lang === "pt" ? "Seguimento" : "Tracking"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl sm:text-6xl",
				children: lang === "pt" ? "Da cozinha à tua porta." : "From the kitchen to your door."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-5 max-w-xl text-sm leading-relaxed text-stone sm:text-base",
				children: lang === "pt" ? "Cada encomenda gera um link único. O ponto A é sempre a cozinha Sete Sete, em Talatona. O ponto B é a tua zona. A casa avança o estado — tu vês o estafeta no mapa." : "Each order gets a unique link. Point A is always the Sete Sete kitchen in Talatona. Point B is your area. The house advances the status — you watch the courier on the map."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => void onSubmit(e),
				className: "mt-10 rounded-xl bg-rice-warm p-5 shadow-[var(--shadow-border)] sm:p-7",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "text-sm font-medium",
						children: [lang === "pt" ? "Número da fatura ou código do link" : "Invoice number or tracking code", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: q,
							onChange: (e) => setQ(e.target.value),
							placeholder: "SS-… ou sete-ilha-77",
							className: "mt-2 min-h-12 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
						})]
					}),
					err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-kaki",
						children: err
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "submit",
						disabled: busy,
						className: "mt-4 inline-flex min-h-12 items-center gap-2 rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40",
						children: [lang === "pt" ? "Seguir" : "Track", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.2em] text-stone uppercase",
					children: lang === "pt" ? "Encomendas de demonstração" : "Demo orders"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: DEMOS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/seguir/$token",
						params: { token: d.token },
						className: "flex min-h-20 flex-col justify-center rounded-xl bg-rice-warm px-4 py-3 shadow-[var(--shadow-border)] transition hover:shadow-[var(--shadow-border-hover)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl",
							children: d.label[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 text-xs tracking-wide text-stone",
							children: d.token
						})]
					}) }, d.token))
				})]
			})
		]
	}) });
}
//#endregion
export { SeguirHome as component };
