import { o as __toESM } from "./_runtime.mjs";
import { n as CRM_TAGS, o as STATUS_META } from "./_ssr/ops-BbesVQD-.mjs";
import { V as require_react, v as Link, x as require_jsx_runtime } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as Route$2 } from "./_ssr/router-4dU_Mm5l.mjs";
import { d as formatKz, u as cn } from "./_ssr/utils-CK9ZYU1s.mjs";
import { r as getCustomer, t as addCrmNote, u as setCustomerTags } from "./_ssr/ops.functions-7TMTmNkW.mjs";
import { n as readStaffPin } from "./_ssr/staff-DrvdntMU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_id-F9-NnWOD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CustomerDetail() {
	const { id } = Route$2.useParams();
	const [data, setData] = (0, import_react.useState)(void 0);
	const [note, setNote] = (0, import_react.useState)("");
	const load = (0, import_react.useCallback)(async () => {
		const pin = readStaffPin();
		if (!pin) return;
		const row = await getCustomer({ data: {
			pin,
			id
		} });
		setData(row);
	}, [id]);
	(0, import_react.useEffect)(() => {
		load();
	}, [load]);
	if (data === void 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-stone",
		children: "A carregar…"
	});
	if (data === null) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm text-kaki",
		children: "Cliente não encontrado."
	});
	async function toggleTag(tag) {
		const pin = readStaffPin();
		if (!pin) return;
		const current = data;
		if (!current) return;
		const tags = current.tags.includes(tag) ? current.tags.filter((t) => t !== tag) : [...current.tags, tag];
		await setCustomerTags({ data: {
			pin,
			id: current.id,
			tags
		} });
		await load();
	}
	async function onNote(e) {
		e.preventDefault();
		const pin = readStaffPin();
		const current = data;
		if (!pin || !current || !note.trim()) return;
		await addCrmNote({ data: {
			pin,
			customerId: current.id,
			body: note.trim()
		} });
		setNote("");
		await load();
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/ops/crm",
			className: "text-xs tracking-[0.14em] text-stone uppercase hover:text-rice",
			children: "← CRM"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display text-4xl",
				children: data.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-stone",
				children: [
					data.zone,
					" · ",
					data.phone
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl tabular-nums",
					children: formatKz(data.spent)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-stone",
					children: [data.orderCount, " pedidos · LTV"]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 flex flex-wrap gap-2",
			children: CRM_TAGS.map((tg) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => void toggleTag(tg.id),
				className: cn("min-h-10 rounded-full px-3 text-[11px] tracking-[0.12em] uppercase", data.tags.includes(tg.id) ? "bg-kaki text-rice" : "bg-rice/8"),
				children: tg.pt
			}, tg.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Histórico"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-rice/8",
				children: data.orders.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "py-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ops/encomendas/$id",
						params: { id: o.id },
						className: "flex items-baseline justify-between gap-3 hover:text-kaki-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [o.id, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-xs text-stone",
							children: STATUS_META[o.status].pt
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "tabular-nums",
							children: formatKz(o.total)
						})]
					})
				}, o.id))
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: "Notas da casa"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: (e) => void onNote(e),
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: note,
						onChange: (e) => setNote(e.target.value),
						rows: 3,
						placeholder: "Alergia, horário, preferência…",
						className: "w-full rounded-lg border border-rice/15 bg-nori px-3 py-2 text-sm outline-none ring-kaki focus:ring-2"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "mt-3 inline-flex min-h-11 items-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
						children: "Adicionar nota"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-4",
					children: data.crmNotes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: n.body
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-[11px] text-stone",
						children: [
							n.author,
							" · ",
							new Date(n.createdAt).toLocaleString("pt-PT")
						]
					})] }, n.id))
				})
			] })]
		})
	] });
}
//#endregion
export { CustomerDetail as component };
