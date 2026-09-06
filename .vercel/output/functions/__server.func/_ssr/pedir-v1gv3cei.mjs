import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Minus, i as Plus } from "../_libs/lucide-react.mjs";
import { a as HOURS, b as useLang, d as WHATSAPP_DISPLAY, f as buildWhatsAppUrl, g as productById, h as formatKz, i as FOUNDER_TITLE, l as Shell, m as copy, n as EMAIL, o as INSTAGRAM, r as FOUNDER_NAME, u as WHATSAPP, v as t, y as useCart } from "./shell-q6iFRlmm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pedir-v1gv3cei.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PedirPage() {
	const lang = useLang((s) => s.lang);
	const lines = useCart((s) => s.lines);
	const total = useCart((s) => s.total);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const href = buildWhatsAppUrl({
		lang,
		name,
		phone,
		address,
		notes
	});
	const empty = lines.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.9fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[11px] tracking-[0.28em] text-kaki uppercase",
				children: t(copy.pedir.kicker, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl sm:text-5xl",
				children: t(copy.pedir.title, lang)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-md text-sm leading-relaxed text-stone",
				children: t(copy.pedir.hint, lang)
			}),
			empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10 rounded-xl border border-ink/8 bg-rice-warm p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-stone",
					children: t(copy.cart.empty, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/menu",
					className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-kaki px-5 text-sm font-semibold text-rice",
					children: t(copy.cart.emptyCta, lang)
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-8 divide-y divide-ink/8 overflow-hidden rounded-xl bg-rice-warm",
				children: [lines.map((l) => {
					const p = productById(l.id);
					if (!p) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 px-4 py-4 sm:px-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.image,
							alt: "",
							className: "size-16 shrink-0 rounded-md object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm font-medium",
									children: p.name[lang]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-sm tabular-nums text-kaki",
									children: formatKz(p.price * l.qty)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "grid size-9 place-items-center rounded-full border border-ink/10",
											onClick: () => setQty(l.id, l.qty - 1),
											"aria-label": "−",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "w-6 text-center text-sm tabular-nums",
											children: l.qty
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											className: "grid size-9 place-items-center rounded-full border border-ink/10",
											onClick: () => setQty(l.id, l.qty + 1),
											"aria-label": "+",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => remove(l.id),
											className: "ml-auto text-xs text-stone underline-offset-2 hover:underline",
											children: lang === "pt" ? "Retirar" : "Remove"
										})
									]
								})
							]
						})]
					}, l.id);
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex items-baseline justify-between px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-stone",
						children: t(copy.cart.total, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tabular-nums",
						children: formatKz(total())
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "mt-8 grid gap-4 text-sm sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-ink/8 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] tracking-[0.18em] text-stone uppercase",
							children: lang === "pt" ? "Horário" : "Hours"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: t(copy.pedir.hours, lang)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-ink/8 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] tracking-[0.18em] text-stone uppercase",
							children: lang === "pt" ? "Entrega" : "Delivery"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-stone",
							children: t(copy.pedir.zone, lang)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-ink/8 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] tracking-[0.18em] text-stone uppercase",
							children: "WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${WHATSAPP}`,
								className: "hover:text-kaki",
								target: "_blank",
								rel: "noreferrer",
								children: WHATSAPP_DISPLAY
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-ink/8 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] tracking-[0.18em] text-stone uppercase",
							children: lang === "pt" ? "Correio" : "Email"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "hover:text-kaki",
								children: EMAIL
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-ink/8 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] tracking-[0.18em] text-stone uppercase",
							children: "Instagram"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: INSTAGRAM,
								className: "hover:text-kaki",
								target: "_blank",
								rel: "noreferrer",
								children: "@setesete.ao"
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-t border-ink/8 pt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-[11px] tracking-[0.18em] text-stone uppercase",
							children: FOUNDER_TITLE
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1",
							children: FOUNDER_NAME
						})]
					})
				]
			})
		] }), sent && !empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl bg-rice-warm p-6 text-center shadow-[var(--shadow-border)] sm:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl",
					children: t(copy.pedir.sent, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-relaxed text-stone",
					children: t(copy.pedir.sentBody, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href,
					target: "_blank",
					rel: "noopener noreferrer",
					className: "mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
					children: t(copy.pedir.again, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-xs text-stone",
					children: [
						lang === "pt" ? "Horário" : "Hours",
						" · ",
						HOURS
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "rounded-xl bg-rice-warm p-6 shadow-[var(--shadow-border)] sm:p-8",
			onSubmit: (e) => {
				e.preventDefault();
				if (empty) return;
				window.open(href, "_blank", "noopener,noreferrer");
				setSent(true);
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "block text-sm font-medium",
					children: [t(copy.pedir.name, lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: name,
						onChange: (e) => setName(e.target.value),
						autoComplete: "name",
						className: "mt-2 min-h-11 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block text-sm font-medium",
					children: [t(copy.pedir.phone, lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						type: "tel",
						value: phone,
						onChange: (e) => setPhone(e.target.value),
						autoComplete: "tel",
						placeholder: "+244 9XX XXX XXX",
						className: "mt-2 min-h-11 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block text-sm font-medium",
					children: [t(copy.pedir.address, lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						required: true,
						value: address,
						onChange: (e) => setAddress(e.target.value),
						autoComplete: "street-address",
						className: "mt-2 min-h-11 w-full rounded-lg border border-ink/10 bg-rice px-3 text-sm outline-none ring-kaki focus:ring-2"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block text-sm font-medium",
					children: [t(copy.pedir.notes, lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						value: notes,
						onChange: (e) => setNotes(e.target.value),
						rows: 4,
						className: "mt-2 w-full rounded-lg border border-ink/10 bg-rice px-3 py-2 text-sm outline-none ring-kaki focus:ring-2"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					disabled: empty,
					className: "mt-6 flex min-h-12 w-full items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-40",
					children: t(copy.pedir.send, lang)
				})
			]
		})]
	}) });
}
//#endregion
export { PedirPage as component };
