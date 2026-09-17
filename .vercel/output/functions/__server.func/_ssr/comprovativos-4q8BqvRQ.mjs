import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as cn, p as formatKz } from "./utils-DDxYvakE.mjs";
import { b as verifyPayment, f as listReceipts } from "./ops.functions-DmaAzKP6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/comprovativos-4q8BqvRQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProofsPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [q, setQ] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)(true);
	const [err, setErr] = (0, import_react.useState)("");
	const load = (0, import_react.useCallback)(async () => {
		const list = await listReceipts({ data: {
			q,
			pending
		} });
		setRows(list);
	}, [q, pending]);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => {
			load().catch((e) => setErr(e instanceof Error ? e.message : "Erro"));
		}, 120);
		return () => window.clearTimeout(t);
	}, [load]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-[0.28em] text-kaki-soft uppercase",
			children: "Pagamentos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl",
			children: "Comprovativos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm text-stone",
			children: "Cada ficheiro fica associado à referência da fatura e ao telefone /whatsapp do cliente. Verifica aqui antes de a cozinha avançar."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Fatura, telefone ou nome",
				className: "min-h-12 flex-1 rounded-full border border-rice/15 bg-nori px-4 text-sm text-rice outline-none ring-kaki focus:ring-2"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setPending((v) => !v),
				className: cn("min-h-12 rounded-full px-5 text-xs font-semibold tracking-[0.14em] uppercase", pending ? "bg-kaki text-rice" : "border border-rice/15"),
				children: pending ? "Só por verificar" : "Todos"
			})]
		}),
		err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-kaki",
			children: err
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 divide-y divide-rice/10",
			children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
				className: "py-10 text-sm text-stone",
				children: "Nenhum comprovativo neste filtro."
			}) : rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex flex-wrap items-center justify-between gap-3 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-stone",
						children: r.orderId
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-medium",
						children: r.customerName
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-stone",
						children: r.phone
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-stone",
						children: [
							r.pay,
							" · ",
							r.filename,
							" · ",
							formatKz(r.total)
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [r.payVerified ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] tracking-[0.14em] text-kaki-soft uppercase",
						children: "Verificado"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							verifyPayment({ data: {
								id: r.orderId,
								ok: true
							} }).then(() => load());
						},
						className: "min-h-10 rounded-full bg-kaki px-4 text-[11px] font-semibold tracking-[0.12em] text-rice uppercase",
						children: "Verificar"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/ops/encomendas/$id",
						params: { id: r.orderId },
						className: "min-h-10 rounded-full border border-rice/15 px-4 text-[11px] font-semibold tracking-[0.12em] uppercase",
						children: "Ver fatura"
					})]
				})]
			}, r.id))
		})
	] });
}
//#endregion
export { ProofsPage as component };
