import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Minus, i as Plus, r as Printer } from "../_libs/lucide-react.mjs";
import { a as LINKEDIN, b as useCart, d as WHATSAPP, f as WHATSAPP_DISPLAY, g as productById, h as formatKz, i as INSTAGRAM, l as SITE, m as copy, n as EMAIL, o as Mark, p as cn, r as HOURS, s as PAY_METHODS, u as Shell, x as useLang, y as t } from "./shell-CpAW0sy3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/pedir-CSZ7BfnX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function newTicketId(date = /* @__PURE__ */ new Date()) {
	return `SS-${String(date.getFullYear()).slice(2)}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
function buildTicket(opts) {
	const lines = useCart.getState().lines.map((l) => {
		const p = productById(l.id);
		if (!p) return null;
		return {
			id: l.id,
			name: p.name[opts.lang],
			qty: l.qty,
			unit: p.price,
			total: p.price * l.qty
		};
	}).filter((x) => Boolean(x));
	return {
		id: newTicketId(),
		createdAt: (/* @__PURE__ */ new Date()).toISOString(),
		name: opts.name.trim(),
		phone: opts.phone.trim(),
		address: opts.address.trim(),
		notes: opts.notes.trim(),
		pay: opts.pay,
		receiptName: opts.receiptName,
		lines,
		total: lines.reduce((n, l) => n + l.total, 0),
		lang: opts.lang
	};
}
function formatTicketWhen(iso, lang) {
	return new Date(iso).toLocaleString(lang === "pt" ? "pt-PT" : "en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function buildOrderMessage(ticket) {
	const { lang } = ticket;
	const rows = ticket.lines.map((l) => `• ${l.qty}× ${l.name} — ${formatKz(l.total)}`);
	const payLabel = ticket.pay === "mcx" ? "Multicaixa Express" : ticket.pay === "transfer" ? lang === "pt" ? "Transferência bancária" : "Bank transfer" : lang === "pt" ? "Dinheiro no local" : "Cash on delivery";
	const extra = [];
	if (ticket.pay === "transfer") extra.push(lang === "pt" ? `Comprovativo: ${ticket.receiptName ?? "anexar PDF nesta conversa"}` : `Receipt: ${ticket.receiptName ?? "please attach the PDF here"}`);
	if (ticket.pay === "mcx") extra.push(lang === "pt" ? `Referência Multicaixa Express: ${ticket.id}` : `Multicaixa Express reference: ${ticket.id}`);
	return [
		lang === "pt" ? `*Pedido Sete Sete*` : `*Sete Sete order*`,
		`Fatura: ${ticket.id}`,
		lang === "pt" ? `Nome: ${ticket.name}` : `Name: ${ticket.name}`,
		lang === "pt" ? `Telefone: ${ticket.phone}` : `Phone: ${ticket.phone}`,
		lang === "pt" ? `Morada: ${ticket.address}` : `Address: ${ticket.address}`,
		"",
		...rows,
		"",
		`*Total: ${formatKz(ticket.total)}*`,
		lang === "pt" ? `Pagamento: ${payLabel}` : `Payment: ${payLabel}`,
		lang === "pt" ? "Hashi incluídos no preço." : "Chopsticks included in the price.",
		...extra,
		ticket.notes ? lang === "pt" ? `Notas: ${ticket.notes}` : `Notes: ${ticket.notes}` : null
	].filter((x) => x !== null).join("\n");
}
function buildWhatsAppUrl(ticket) {
	return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildOrderMessage(ticket))}`;
}
function TicketSheet({ ticket }) {
	const lang = ticket.lang;
	const pay = PAY_METHODS[ticket.pay];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		id: "ticket-sheet",
		className: "ticket-sheet relative overflow-hidden bg-rice-warm text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-1.5 bg-kaki print:w-2" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-4 py-7 pr-8 pl-9",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-11" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[13px] font-semibold tracking-[0.2em] uppercase",
						children: "Sete Sete"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-[9px] tracking-[0.22em] text-kaki uppercase",
						children: "Sushi · Luanda"
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] tracking-[0.16em] text-kaki uppercase",
							children: t(copy.ticket.kicker, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 font-display text-xl leading-none tracking-tight",
							children: ticket.id
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-[11px] text-stone",
							children: formatTicketWhen(ticket.createdAt, lang)
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-9 border-t border-kaki/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
				className: "grid gap-3 px-9 py-5 text-sm sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-[10px] tracking-[0.18em] text-stone uppercase",
						children: t(copy.ticket.client, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-medium",
						children: ticket.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "text-stone",
						children: ticket.phone
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "text-[10px] tracking-[0.18em] text-stone uppercase",
					children: lang === "pt" ? "Morada" : "Address"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-1",
					children: ticket.address
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-y border-ink/8 text-left text-[10px] tracking-[0.16em] text-stone uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "px-9 py-2 font-medium",
							children: t(copy.ticket.item, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2 text-right font-medium",
							children: t(copy.ticket.qty, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-8 text-right font-medium",
							children: t(copy.ticket.total, lang)
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: ticket.lines.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-ink/6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-9 py-2.5",
							children: l.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 pr-2 text-right tabular-nums",
							children: l.qty
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2.5 pr-8 text-right tabular-nums",
							children: formatKz(l.total)
						})
					]
				}, l.id)) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-end justify-between px-9 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.18em] text-stone uppercase",
						children: t(copy.ticket.pay, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm font-medium",
						children: pay[lang]
					}),
					ticket.pay === "transfer" && ticket.receiptName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-stone",
						children: ticket.receiptName
					}) : null,
					ticket.pay === "mcx" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-xs text-stone",
						children: [
							lang === "pt" ? "Ref." : "Ref.",
							" ",
							ticket.id
						]
					}) : null
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] tracking-[0.18em] text-stone uppercase",
						children: t(copy.ticket.total, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 font-display text-3xl tabular-nums",
						children: formatKz(ticket.total)
					})]
				})]
			}),
			ticket.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "px-9 pb-4 text-xs text-stone",
				children: [lang === "pt" ? "Notas: " : "Notes: ", ticket.notes]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "flex items-end justify-between border-t border-ink/8 px-9 py-4 text-[10px] tracking-wide text-stone",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					EMAIL,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-2 text-kaki",
						children: "·"
					}),
					WHATSAPP_DISPLAY
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tracking-[0.16em] uppercase",
					children: SITE
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "px-9 pb-6 text-[10px] tracking-[0.14em] text-stone uppercase",
				children: t(copy.ticket.thanks, lang)
			})
		]
	});
}
function PedirPage() {
	const lang = useLang((s) => s.lang);
	const lines = useCart((s) => s.lines);
	const total = useCart((s) => s.total);
	const setQty = useCart((s) => s.setQty);
	const remove = useCart((s) => s.remove);
	const clear = useCart((s) => s.clear);
	const [name, setName] = (0, import_react.useState)("");
	const [phone, setPhone] = (0, import_react.useState)("");
	const [address, setAddress] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [pay, setPay] = (0, import_react.useState)("mcx");
	const [receiptName, setReceiptName] = (0, import_react.useState)();
	const [ticket, setTicket] = (0, import_react.useState)(null);
	const empty = lines.length === 0;
	function onSubmit(e) {
		e.preventDefault();
		if (empty) return;
		if (pay === "transfer" && !receiptName) return;
		const next = buildTicket({
			lang,
			name,
			phone,
			address,
			notes,
			pay,
			receiptName
		});
		setTicket(next);
	}
	function startNew() {
		setTicket(null);
		clear();
		setNotes("");
		setReceiptName(void 0);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1fr_0.95fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "print:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.28em] text-kaki uppercase",
					children: t(copy.pedir.kicker, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl sm:text-5xl",
					children: ticket ? t(copy.pedir.sent, lang) : t(copy.pedir.title, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-md text-sm leading-relaxed text-stone",
					children: ticket ? t(copy.pedir.sentBody, lang) : t(copy.pedir.hint, lang)
				}),
				empty && !ticket ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
					children: [ticket ? ticket.lines.map((l) => {
						const p = productById(l.id);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 px-4 py-4 sm:px-5",
							children: [p ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: l.name,
								className: "size-16 shrink-0 rounded-md object-cover"
							}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: l.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm tabular-nums text-kaki",
										children: formatKz(l.total)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-1 text-xs text-stone",
										children: [l.qty, " ×"]
									})
								]
							})]
						}, l.id);
					}) : lines.map((l) => {
						const p = productById(l.id);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3 px-4 py-4 sm:px-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name[lang],
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
							children: formatKz(ticket ? ticket.total : total())
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
									rel: "noopener noreferrer",
									children: "@setesete.ao"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-t border-ink/8 pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
								className: "text-[11px] tracking-[0.18em] text-stone uppercase",
								children: "LinkedIn"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
								className: "mt-1",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: LINKEDIN,
									className: "hover:text-kaki",
									target: "_blank",
									rel: "noopener noreferrer",
									children: "Sete Sete"
								})
							})]
						})
					]
				})
			]
		}), ticket ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TicketSheet, { ticket }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 print:hidden sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => window.print(),
						className: "inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full border border-ink/15 px-5 text-sm font-semibold tracking-[0.12em] uppercase",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), t(copy.pedir.print, lang)]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: buildWhatsAppUrl(ticket),
						target: "_blank",
						rel: "noopener noreferrer",
						className: "inline-flex min-h-12 flex-1 items-center justify-center rounded-full bg-kaki px-5 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
						children: t(copy.pedir.again, lang)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: startNew,
					className: "print:hidden w-full text-center text-xs text-stone underline-offset-2 hover:underline",
					children: t(copy.pedir.newOrder, lang)
				}),
				ticket.pay === "transfer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "print:hidden text-xs leading-relaxed text-stone",
					children: t(copy.pedir.receiptHint, lang)
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "print:hidden text-xs text-stone",
					children: [
						lang === "pt" ? "Horário" : "Hours",
						" · ",
						HOURS
					]
				})
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			className: "rounded-xl bg-rice-warm p-6 shadow-[var(--shadow-border)] sm:p-8",
			onSubmit,
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
						rows: 3,
						className: "mt-2 w-full rounded-lg border border-ink/10 bg-rice px-3 py-2 text-sm outline-none ring-kaki focus:ring-2"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
						className: "text-sm font-medium",
						children: t(copy.pedir.pay, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid gap-2",
						children: Object.keys(PAY_METHODS).map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: cn("flex cursor-pointer items-start gap-3 rounded-lg border px-3 py-3 transition", pay === key ? "border-kaki bg-kaki/5" : "border-ink/10 hover:border-ink/20"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "radio",
								name: "pay",
								value: key,
								checked: pay === key,
								onChange: () => setPay(key),
								className: "mt-1 accent-kaki"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-sm font-medium",
								children: PAY_METHODS[key][lang]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 block text-xs leading-relaxed text-stone",
								children: PAY_METHODS[key].hint[lang]
							})] })]
						}, key))
					})]
				}),
				pay === "transfer" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "mt-5 block text-sm font-medium",
					children: [
						t(copy.pedir.receipt, lang),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							required: true,
							type: "file",
							accept: "application/pdf,.pdf",
							onChange: (e) => setReceiptName(e.target.files?.[0]?.name),
							className: "mt-2 block w-full text-sm file:mr-3 file:rounded-full file:border-0 file:bg-kaki file:px-4 file:py-2 file:text-xs file:font-semibold file:tracking-[0.12em] file:text-rice file:uppercase"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-xs leading-relaxed text-stone",
							children: t(copy.pedir.receiptHint, lang)
						})
					]
				}) : null,
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
