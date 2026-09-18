import { o as __toESM } from "../_runtime.mjs";
import { n as CRM_TAGS } from "./ops-CJMdWyyN.mjs";
import { n as ZONES } from "./geo-CSQz4fgL.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as cn, p as formatKz } from "./utils-CJy7FdrE.mjs";
import { t as ExportBar } from "./export-bar-B6Mn9Tfh.mjs";
import { b as upsertCustomer, u as listCustomers } from "./ops.functions-DHvQhR2m.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/crm-KQvaOMa3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CrmPage() {
	const [rows, setRows] = (0, import_react.useState)([]);
	const [q, setQ] = (0, import_react.useState)("");
	const [tag, setTag] = (0, import_react.useState)("");
	const [err, setErr] = (0, import_react.useState)("");
	const [open, setOpen] = (0, import_react.useState)(false);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [zone, setZone] = (0, import_react.useState)(ZONES[0].id);
	const load = (0, import_react.useCallback)(async () => {
		const list = await listCustomers({ data: {
			q,
			tag
		} });
		setRows(list);
	}, [q, tag]);
	(0, import_react.useEffect)(() => {
		const t = window.setTimeout(() => {
			load().catch((e) => setErr(e instanceof Error ? e.message : "Erro"));
		}, 120);
		return () => window.clearTimeout(t);
	}, [load]);
	async function onCreate(e) {
		e.preventDefault();
		await upsertCustomer({ data: {
			name,
			phone,
			zone,
			notes: "",
			tags: ["novo"]
		} });
		setName("");
		setPhone("");
		setOpen(false);
		await load();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] tracking-[0.28em] text-kaki-soft uppercase",
			children: "Clientes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: "CRM da casa"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExportBar, {
					title: "CRM Sete Sete",
					filename: "setesete-crm",
					orientation: "landscape",
					headers: [
						"Nome",
						"Telefone",
						"Zona",
						"Tags",
						"Pedidos",
						"Gasto Kz",
						"Último pedido"
					],
					rows: rows.map((c) => [
						c.name,
						c.phone,
						c.zone,
						c.tags.join(", "),
						c.orderCount,
						c.spent,
						c.lastOrderAt ? c.lastOrderAt.replace("T", " ").slice(0, 16) : "—"
					])
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					className: "inline-flex min-h-11 items-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
					children: "Novo contacto"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 max-w-2xl text-sm leading-relaxed text-stone",
			children: "Cada pedido cria ou actualiza uma ficha. Tags, notas da casa, histórico e valor de vida — o CRM próprio da Sete Sete, sem plataforma terceira."
		}),
		open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => void onCreate(e),
			className: "mt-6 grid gap-3 rounded-xl bg-rice/4 p-5 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					placeholder: "Nome",
					value: name,
					onChange: (e) => setName(e.target.value),
					className: "min-h-11 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					required: true,
					placeholder: "Telefone",
					value: phone,
					onChange: (e) => setPhone(e.target.value),
					className: "min-h-11 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					value: zone,
					onChange: (e) => setZone(e.target.value),
					className: "min-h-11 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2",
					children: ZONES.map((z) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: z.id,
						children: z.name
					}, z.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "min-h-11 rounded-full bg-rice text-sm font-semibold tracking-[0.12em] text-nori uppercase sm:col-span-3",
					children: "Guardar ficha"
				})
			]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-col gap-3 sm:flex-row",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Nome, telefone, zona",
				className: "min-h-11 flex-1 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 flex flex-wrap gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTag(""),
				className: cn("min-h-10 rounded-full px-3 text-[11px] tracking-[0.12em] uppercase", tag === "" ? "bg-kaki text-rice" : "bg-rice/8"),
				children: "Todos"
			}), CRM_TAGS.map((tg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => setTag(tg.id === tag ? "" : tg.id),
				className: cn("min-h-10 rounded-full px-3 text-[11px] tracking-[0.12em] uppercase", tag === tg.id ? "bg-kaki text-rice" : "bg-rice/8"),
				children: tg.pt
			}, tg.id))]
		}),
		err ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-4 text-sm text-kaki",
			children: err
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-6 divide-y divide-rice/8",
			children: rows.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/ops/crm/$id",
				params: { id: c.id },
				className: "flex flex-wrap items-baseline justify-between gap-2 py-4 hover:text-kaki-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-medium",
						children: c.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-stone",
						children: [
							c.zone,
							" · ",
							c.phone
						]
					}),
					c.tags.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-[10px] tracking-[0.14em] text-kaki-soft uppercase",
						children: c.tags.join(" · ")
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "tabular-nums",
						children: formatKz(c.spent)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-stone",
						children: [c.orderCount, " ped."]
					})]
				})]
			}) }, c.id))
		})
	] });
}
//#endregion
export { CrmPage as component };
