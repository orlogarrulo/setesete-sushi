import { i as __toESM } from "../_runtime.mjs";
import { n as PRODUCTS, r as productById } from "./menu-zEgjV5oi.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Minus, i as Plus, n as ShoppingBag, o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-uG93CiQk.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatKz(value) {
	return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
}
/** WhatsApp / pedidos — número da casa. */
var WHATSAPP = "244945407841";
var WHATSAPP_DISPLAY = "+244 945 407 841";
var EMAIL = "info@setesete.ao";
var INSTAGRAM = "https://www.instagram.com/setesete.ao/";
/** Public company page (not the admin dashboard). */
var LINKEDIN = "https://www.linkedin.com/company/135004198/";
var MANO_URL = "https://shop.manoapp.com/pt";
var HOURS = "12h – 22h";
var SITE = "setesete.ao";
var PAY_METHODS = {
	mcx: {
		pt: "Multicaixa Express",
		en: "Multicaixa Express",
		hint: {
			pt: "Pagas no telemóvel. A referência é o número da fatura.",
			en: "Pay on your phone. The invoice number is the reference."
		}
	},
	transfer: {
		pt: "Transferência bancária",
		en: "Bank transfer",
		hint: {
			pt: "Anexa o comprovativo em PDF. Envia o mesmo ficheiro no WhatsApp.",
			en: "Attach the PDF receipt. Send the same file on WhatsApp."
		}
	},
	cash: {
		pt: "Dinheiro no local",
		en: "Cash on delivery",
		hint: {
			pt: "Pagas na entrega, contra a fatura.",
			en: "Pay on delivery, against the invoice."
		}
	}
};
/** Official kamon (selo 77) — circular two-sevens, never the pixel-7. */
function Mark({ className, invert = false, line = false, alt = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: line ? "/brand/setesete-selo-linha.svg" : invert ? "/brand/setesete-selo-reverso.svg" : "/brand/setesete-selo.svg",
		alt,
		className: cn("size-12 object-contain", className),
		width: 120,
		height: 120
	});
}
function LogoLockup({ className, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			className: "size-9 shrink-0",
			invert: light,
			alt: "Sete Sete"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-sans text-[13px] font-semibold tracking-[0.16em] uppercase sm:text-[15px]", light ? "text-rice" : "text-ink"),
				children: "Sete\xA0Sete"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 text-[8px] font-medium tracking-[0.18em] uppercase sm:text-[9px] sm:tracking-[0.22em]", light ? "text-kaki-soft" : "text-kaki"),
				children: "no\xA0teu\xA0WhatsApp"
			})]
		})]
	});
}
var copy = {
	nav: {
		home: {
			pt: "Início",
			en: "Home"
		},
		casa: {
			pt: "A casa",
			en: "The house"
		},
		menu: {
			pt: "Menu",
			en: "Menu"
		},
		order: {
			pt: "Encomendar",
			en: "Order"
		}
	},
	hero: {
		kicker: {
			pt: "Luanda · 12h – 22h",
			en: "Luanda · 12:00 – 22:00"
		},
		title: {
			pt: "Sete Sete",
			en: "Sete Sete"
		},
		lead: {
			pt: "Sushi fresco, no teu WhatsApp.",
			en: "Fresh sushi, on your WhatsApp."
		},
		sub: {
			pt: "Peixe escolhido com rigor, arroz temperado no ponto, combinados para a mesa. Pedido directo — sem filas, sem aplicações extra.",
			en: "Carefully chosen fish, rice seasoned to the grain, sets for the table. Order directly — no queues, no extra apps."
		},
		ctaMenu: {
			pt: "Ver o menu",
			en: "See the menu"
		},
		ctaOrder: {
			pt: "Pedir agora",
			en: "Order now"
		}
	},
	secret: {
		kicker: {
			pt: "O segredo do sabor",
			en: "The secret of the taste"
		},
		title: {
			pt: "Ingredientes escolhidos pela frescura. Arroz preparado com o mesmo cuidado, do vinagre ao corte.",
			en: "Ingredients chosen for freshness. Rice prepared with the same care, from the vinegar to the cut."
		},
		body: {
			pt: "Cada peça é feita na hora. A atenção estende-se ao shoyu, ao wasabi, ao nori. Sushi japonês com a clareza de uma casa de Luanda.",
			en: "Each piece is made to order. The same attention runs through the soy, the wasabi, the nori. Japanese sushi with the clarity of a Luanda house."
		},
		rice: {
			pt: "Arroz no ponto",
			en: "Rice, exact"
		},
		riceBody: {
			pt: "Temperado com vinagre, açúcar e sal — grão a grão.",
			en: "Seasoned with vinegar, sugar and salt — grain by grain."
		},
		fish: {
			pt: "Peixe do dia",
			en: "Fish of the day"
		},
		fishBody: {
			pt: "Salmão, atum, camarão. Corte limpo, temperatura certa.",
			en: "Salmon, tuna, prawn. A clean cut, the right temperature."
		}
	},
	menuTeaser: {
		kicker: {
			pt: "Um menu extenso",
			en: "An extensive menu"
		},
		title: {
			pt: "Mais de 40 peças. Combinados, hots, temakis, niguiris.",
			en: "More than 40 pieces. Sets, hot rolls, temaki, nigiri."
		}
	},
	how: {
		kicker: {
			pt: "Como pedir",
			en: "How to order"
		},
		title: {
			pt: "Três gestos. O resto é connosco.",
			en: "Three steps. We do the rest."
		},
		s1t: {
			pt: "Escolhe",
			en: "Choose"
		},
		s1: {
			pt: "Navega o cardápio e monta o pedido no cesto.",
			en: "Browse the menu and build your basket."
		},
		s2t: {
			pt: "Paga e confirma",
			en: "Pay and confirm"
		},
		s2: {
			pt: "Multicaixa Express, transferência ou dinheiro. Geras a fatura e envias no WhatsApp.",
			en: "Multicaixa Express, transfer or cash. You get the invoice and send it on WhatsApp."
		},
		s3t: {
			pt: "Recebe",
			en: "Receive"
		},
		s3: {
			pt: "Preparação no momento. Entrega em Luanda, 12h às 22h.",
			en: "Made to order. Delivery across Luanda, 12:00 to 22:00."
		}
	},
	cart: {
		title: {
			pt: "O teu pedido",
			en: "Your order"
		},
		empty: {
			pt: "O cesto está vazio.",
			en: "Your basket is empty."
		},
		emptyCta: {
			pt: "Abrir o menu",
			en: "Open the menu"
		},
		total: {
			pt: "Total",
			en: "Total"
		},
		checkout: {
			pt: "Fechar pedido",
			en: "Check out"
		},
		add: {
			pt: "Adicionar",
			en: "Add"
		},
		added: {
			pt: "No cesto",
			en: "In basket"
		}
	},
	pedir: {
		kicker: {
			pt: "Encomendar",
			en: "Order"
		},
		title: {
			pt: "Fecha o pedido. Gera a fatura.",
			en: "Close the order. Get the invoice."
		},
		name: {
			pt: "Nome",
			en: "Name"
		},
		phone: {
			pt: "Telefone / WhatsApp",
			en: "Phone / WhatsApp"
		},
		address: {
			pt: "Morada / zona",
			en: "Address / area"
		},
		notes: {
			pt: "Notas (opcional)",
			en: "Notes (optional)"
		},
		pay: {
			pt: "Pagamento",
			en: "Payment"
		},
		receipt: {
			pt: "Comprovativo PDF",
			en: "PDF receipt"
		},
		receiptHint: {
			pt: "O ficheiro não viaja automaticamente. Anexa-o de seguida na conversa WhatsApp.",
			en: "The file does not travel automatically. Attach it next in the WhatsApp chat."
		},
		send: {
			pt: "Gerar fatura",
			en: "Create invoice"
		},
		hint: {
			pt: "Escolhe o pagamento, geras a fatura, e envias o resumo no WhatsApp. Confirmamos frescura, tempo e zona.",
			en: "Choose payment, get the invoice, send the summary on WhatsApp. We confirm freshness, timing and area."
		},
		sent: {
			pt: "Fatura pronta.",
			en: "Invoice ready."
		},
		sentBody: {
			pt: "Imprime ou guarda em PDF. Depois envia o pedido no WhatsApp — e o comprovativo, se for transferência.",
			en: "Print or save as PDF. Then send the order on WhatsApp — and the receipt, if you paid by transfer."
		},
		print: {
			pt: "Imprimir / PDF",
			en: "Print / PDF"
		},
		again: {
			pt: "Abrir WhatsApp",
			en: "Open WhatsApp"
		},
		newOrder: {
			pt: "Novo pedido",
			en: "New order"
		},
		hours: {
			pt: "Todos os dias, 12h – 22h",
			en: "Every day, 12:00 – 22:00"
		},
		zone: {
			pt: "Entrega em Luanda. Diz a zona — confirmamos tempo e taxa.",
			en: "Delivery across Luanda. Tell us the area — we confirm time and fee."
		}
	},
	ticket: {
		kicker: {
			pt: "Fatura",
			en: "Invoice"
		},
		client: {
			pt: "Cliente",
			en: "Customer"
		},
		qty: {
			pt: "Qtd",
			en: "Qty"
		},
		item: {
			pt: "Peça",
			en: "Item"
		},
		total: {
			pt: "Total",
			en: "Total"
		},
		pay: {
			pt: "Pagamento",
			en: "Payment"
		},
		thanks: {
			pt: "Obrigado. Preparação no momento.",
			en: "Thank you. Made to order."
		}
	},
	casa: {
		kicker: {
			pt: "A casa",
			en: "The house"
		},
		title: {
			pt: "Duas vezes sete. Um só gesto.",
			en: "Twice seven. A single gesture."
		},
		body: {
			pt: "Sete Sete nasceu para trazer sushi de precisão a Luanda — sem cerimónia a mais, sem qualidade a menos. O nome é um espelho: 77, duas curvas que se encontram. O sabor e o sorriso. O peixe e o arroz. Tu e o WhatsApp.",
			en: "Sete Sete exists to bring precise sushi to Luanda — no extra ceremony, no less quality. The name is a mirror: 77, two curves that meet. Taste and smile. Fish and rice. You and WhatsApp."
		},
		kitchen: {
			pt: "A cozinha",
			en: "The kitchen"
		},
		kitchenBody: {
			pt: "Peixe à temperatura certa, arroz no ponto, nori crocante. Nada é montado à espera.",
			en: "Fish at the right temperature, rice on the grain, nori still crisp. Nothing is assembled waiting."
		},
		catalog: {
			pt: "O catálogo",
			en: "The catalogue"
		},
		catalogBody: {
			pt: "O mesmo cardápio que chega à mesa — agora no ecrã, com preços em Kwanzas.",
			en: "The same menu that reaches the table — now on screen, priced in Kwanzas."
		}
	},
	footer: { tag: {
		pt: "Sushi no teu WhatsApp",
		en: "Sushi on your WhatsApp"
	} },
	flags: {
		chef: {
			pt: "Do chef",
			en: "Chef's pick"
		},
		signature: {
			pt: "Assinatura",
			en: "Signature"
		},
		popular: {
			pt: "Mais pedido",
			en: "Most ordered"
		},
		highlight: {
			pt: "Destaque",
			en: "Featured"
		}
	},
	pieces: {
		pt: "peças",
		en: "pieces"
	},
	min: {
		pt: "min",
		en: "min"
	},
	notFound: {
		title: {
			pt: "Esta página não existe.",
			en: "This page does not exist."
		},
		back: {
			pt: "Voltar ao início",
			en: "Back home"
		}
	}
};
function t(dict, lang) {
	return dict[lang];
}
var useCart = create()(persist((set, get) => ({
	lines: [],
	open: false,
	setOpen: (open) => set({ open }),
	add: (id, qty = 1) => {
		const lines = [...get().lines];
		const i = lines.findIndex((l) => l.id === id);
		if (i >= 0) lines[i] = {
			id,
			qty: lines[i].qty + qty
		};
		else lines.push({
			id,
			qty
		});
		set({
			lines,
			open: true
		});
	},
	setQty: (id, qty) => {
		if (qty <= 0) {
			set({ lines: get().lines.filter((l) => l.id !== id) });
			return;
		}
		set({ lines: get().lines.map((l) => l.id === id ? {
			...l,
			qty
		} : l) });
	},
	remove: (id) => set({ lines: get().lines.filter((l) => l.id !== id) }),
	clear: () => set({ lines: [] }),
	count: () => get().lines.reduce((n, l) => n + l.qty, 0),
	total: () => get().lines.reduce((n, l) => {
		const p = PRODUCTS.find((x) => x.id === l.id);
		return n + (p ? p.price * l.qty : 0);
	}, 0)
}), {
	name: "setesete-cart",
	partialize: (s) => ({ lines: s.lines }),
	skipHydration: true
}));
var useLang = create()(persist((set) => ({
	lang: "pt",
	setLang: (lang) => set({ lang })
}), {
	name: "setesete-lang",
	skipHydration: true
}));
function CartDrawer() {
	const lang = useLang((s) => s.lang);
	const { lines, open, setOpen, setQty, remove, total } = useCart();
	const empty = lines.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("fixed inset-0 z-50 bg-ink/40 transition-opacity duration-200 print:hidden", open ? "opacity-100" : "pointer-events-none opacity-0"),
		onClick: () => setOpen(false),
		"aria-hidden": true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-rice-warm shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] print:hidden", open ? "translate-x-0" : "translate-x-full"),
		"aria-hidden": !open,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-ink/8 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: t(copy.cart.title, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "grid size-11 place-items-center rounded-full hover:bg-ink/5",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto px-5 py-4",
				children: empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col items-center justify-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-stone",
						children: t(copy.cart.empty, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						onClick: () => setOpen(false),
						className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-kaki px-5 text-sm font-semibold text-rice",
						children: t(copy.cart.emptyCta, lang)
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: lines.map((line) => {
						const p = productById(line.id);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name[lang],
								className: "size-20 shrink-0 rounded-md object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: p.name[lang]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm text-kaki tabular-nums",
										children: formatKz(p.price * line.qty)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "grid size-9 place-items-center rounded-full border border-ink/10",
												onClick: () => setQty(line.id, line.qty - 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 text-center text-sm tabular-nums",
												children: line.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "grid size-9 place-items-center rounded-full border border-ink/10",
												onClick: () => setQty(line.id, line.qty + 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => remove(line.id),
												className: "ml-auto text-xs text-stone underline-offset-2 hover:underline",
												children: lang === "pt" ? "Retirar" : "Remove"
											})
										]
									})
								]
							})]
						}, line.id);
					})
				})
			}),
			!empty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-ink/8 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-stone",
						children: t(copy.cart.total, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tabular-nums",
						children: formatKz(total())
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pedir",
					onClick: () => setOpen(false),
					className: "flex min-h-12 items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
					children: t(copy.cart.checkout, lang)
				})]
			})
		]
	})] });
}
function InstagramIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "5",
				stroke: "currentColor",
				strokeWidth: "1.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4",
				stroke: "currentColor",
				strokeWidth: "1.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.4",
				cy: "6.6",
				r: "1",
				fill: "currentColor"
			})
		]
	});
}
function LinkedInIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.94 8.5H4.05V20h2.9V8.5zM5.5 3.5A1.7 1.7 0 1 0 5.5 6.9 1.7 1.7 0 0 0 5.5 3.5zM20 20h-2.9v-6.05c0-1.44-.03-3.29-2-3.29-2 0-2.31 1.56-2.31 3.18V20H10V8.5h2.78v1.57h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.44V20z" })
	});
}
function Footer() {
	const lang = useLang((s) => s.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ink/8 bg-nori text-rice print:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
							className: "size-14",
							alt: "Sete Sete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-3xl tracking-tight",
							children: "Sete Sete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm tracking-[0.2em] text-kaki-soft uppercase",
							children: t(copy.footer.tag, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-stone",
							children: lang === "pt" ? "Sushi de precisão em Luanda. Pedidos das 12h às 22h, via WhatsApp." : "Precise sushi in Luanda. Orders from 12:00 to 22:00, via WhatsApp."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.22em] text-stone uppercase",
					children: lang === "pt" ? "Casa" : "House"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/casa",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.casa, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.menu, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pedir",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.order, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${WHATSAPP}`,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-kaki-soft",
							children: WHATSAPP_DISPLAY
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${EMAIL}`,
							className: "hover:text-kaki-soft",
							children: EMAIL
						}) })
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-rice/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.22em] text-stone uppercase",
						children: lang === "pt" ? "Parceiro" : "Partner"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: MANO_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 inline-flex items-center rounded-lg bg-rice px-5 py-4",
						"aria-label": "MANO",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/partners/mano.svg",
							alt: "MANO",
							className: "h-14 w-auto"
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Instagram Sete Sete",
							className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-rice/15 px-4 text-rice transition hover:border-kaki-soft hover:text-kaki-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tracking-[0.16em] uppercase",
								children: "Instagram"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKEDIN,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "LinkedIn Sete Sete",
							className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-rice/15 px-4 text-rice transition hover:border-kaki-soft hover:text-kaki-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tracking-[0.16em] uppercase",
								children: "LinkedIn"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-rice/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-stone sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Sete Sete · Luanda, Angola"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-[0.18em] uppercase",
						children: "七七"
					})]
				})
			})
		]
	});
}
var LINKS = [
	{
		to: "/",
		key: "home"
	},
	{
		to: "/casa",
		key: "casa"
	},
	{
		to: "/menu",
		key: "menu"
	}
];
function Header() {
	const lang = useLang((s) => s.lang);
	const setLang = useLang((s) => s.setLang);
	const count = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
	const setOpen = useCart((s) => s.setOpen);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [mobile, setMobile] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-ink/8 bg-rice/92 text-ink backdrop-blur-md print:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					onClick: () => setMobile(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoLockup, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("text-[13px] font-medium tracking-[0.14em] uppercase transition-opacity hover:opacity-70", pathname === l.to ? "text-kaki opacity-100" : "opacity-55"),
						children: t(copy.nav[l.key], lang)
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center rounded-full bg-ink/5 p-0.5 text-[11px] font-semibold tracking-wider sm:flex",
							children: ["pt", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLang(code),
								className: cn("min-h-8 rounded-full px-2.5 uppercase transition", lang === code ? "bg-ink text-rice" : "opacity-60 hover:opacity-100"),
								children: code
							}, code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(true),
							className: "relative inline-flex size-11 items-center justify-center rounded-full hover:bg-ink/5",
							"aria-label": t(copy.cart.title, lang),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: "size-5",
								strokeWidth: 1.75
							}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-kaki px-1 text-[10px] font-semibold text-rice tabular-nums",
								children: count
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pedir",
							className: "hidden min-h-11 items-center rounded-full bg-kaki px-4 text-[12px] font-semibold tracking-[0.12em] text-rice uppercase transition hover:bg-kaki-deep sm:inline-flex",
							children: t(copy.nav.order, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-full lg:hidden",
							onClick: () => setMobile((v) => !v),
							"aria-label": "Menu",
							children: mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink/8 bg-rice px-4 py-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [
					LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setMobile(false),
						className: "min-h-11 py-2 text-sm tracking-[0.12em] uppercase",
						children: t(copy.nav[l.key], lang)
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pedir",
						onClick: () => setMobile(false),
						className: "mt-2 flex min-h-11 items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase",
						children: t(copy.nav.order, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex gap-2",
						children: ["pt", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(code),
							className: cn("min-h-11 rounded-full px-4 text-xs font-semibold uppercase", lang === code ? "bg-kaki text-rice" : "bg-ink/8"),
							children: code
						}, code))
					})
				]
			})
		})]
	});
}
function WhatsAppFab() {
	const lang = useLang((s) => s.lang);
	const cartOpen = useCart((s) => s.open);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (cartOpen || pathname === "/pedir") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lang === "pt" ? "Olá Sete Sete! Quero fazer um pedido." : "Hello Sete Sete! I would like to order.")}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": lang === "pt" ? "Falar no WhatsApp" : "Chat on WhatsApp",
		className: "fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-kaki text-rice shadow-[0_12px_32px_-8px_rgba(226,74,23,0.55)] transition hover:bg-kaki-deep print:hidden sm:right-6 sm:bottom-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
		})
	});
}
function Shell({ children }) {
	(0, import_react.useEffect)(() => {
		useCart.persist.rehydrate();
		useLang.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-rice text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
//#endregion
export { Mark as a, Shell as c, cn as d, copy as f, useLang as g, useCart as h, LINKEDIN as i, WHATSAPP as l, t as m, HOURS as n, PAY_METHODS as o, formatKz as p, INSTAGRAM as r, SITE as s, EMAIL as t, WHATSAPP_DISPLAY as u };
