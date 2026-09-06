import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Download } from "../_libs/lucide-react.mjs";
import { b as useLang, l as Shell, s as Mark } from "./shell-q6iFRlmm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/identidade-CX-u532W.js
var import_jsx_runtime = require_jsx_runtime();
var PALETTE = [
	{
		name: "Kaki",
		hex: "#E24A17",
		cls: "bg-kaki text-rice"
	},
	{
		name: "Kaki profundo",
		hex: "#B83310",
		cls: "bg-kaki-deep text-rice"
	},
	{
		name: "Arroz",
		hex: "#F4F0E8",
		cls: "bg-rice text-ink"
	},
	{
		name: "Arroz quente",
		hex: "#FBFAF7",
		cls: "bg-rice-warm text-ink"
	},
	{
		name: "Tinta",
		hex: "#1A1714",
		cls: "bg-ink text-rice"
	},
	{
		name: "Nori",
		hex: "#231F1C",
		cls: "bg-nori text-rice"
	},
	{
		name: "Pedra",
		hex: "#8A8278",
		cls: "bg-stone text-rice"
	},
	{
		name: "Gari",
		hex: "#F3D5C6",
		cls: "bg-kaki-soft text-ink"
	}
];
function IdentityPage() {
	const pt = useLang((s) => s.lang) === "pt";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink/8 bg-rice-warm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.28em] text-kaki uppercase",
						children: pt ? "Identidade visual" : "Visual identity"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-3 max-w-3xl font-display text-4xl sm:text-6xl",
						children: pt ? "Um kamon de dois setes. Papel de arroz. Persimão." : "A kamon of two sevens. Rice paper. Persimmon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-2xl text-sm leading-relaxed text-stone sm:text-base",
						children: pt ? "Sistema original — próximo da clareza Sushiro (espaço, fotografia, um só acento) mas nunca uma cópia. O laranja do catálogo tornou-se kaki, um persimão japonês." : "An original system — close to Sushiro’s clarity (space, photography, a single accent) but never a copy. The catalogue orange became kaki, a Japanese persimmon."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/downloads/SeteSete-Identidade-Visual.zip",
							download: true,
							className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-kaki px-5 text-sm font-semibold tracking-[0.1em] text-rice uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), pt ? "Logotipo + identidade" : "Logo + identity"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "/downloads/SeteSete-Website.zip",
							download: true,
							className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-ink/15 px-5 text-sm font-semibold tracking-[0.1em] uppercase",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), pt ? "Kit website" : "Website kit"]
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: pt ? "Selo" : "Seal"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-stone",
					children: pt ? "Dois 7 em simetria de 180°. A curva de cima — o sabor. A de baixo — o encontro. Ficheiros SVG vectoriais no kit." : "Two 7s in 180° symmetry. The upper curve — taste. The lower — the meeting. Vector SVG files in the kit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center rounded-xl bg-rice-warm p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-28" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center rounded-xl bg-nori p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
								className: "size-28",
								invert: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center rounded-xl bg-kaki p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
								className: "size-28",
								invert: true
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid place-items-center rounded-xl border border-ink/10 p-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
								className: "size-28",
								line: true
							})
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-rice-warm py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: pt ? "Paleta" : "Palette"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4",
					children: PALETTE.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-xl px-4 py-8 ${c.cls}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: c.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-8 font-mono text-xs tracking-wider",
							children: c.hex
						})]
					}, c.hex))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: pt ? "Tipografia" : "Typography"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-rice-warm p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.2em] text-stone uppercase",
							children: "Display · Cormorant Garamond"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-display text-5xl leading-none",
							children: "Sete Sete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-display text-2xl italic text-stone",
							children: "sushi fresco"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl bg-rice-warm p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.2em] text-stone uppercase",
							children: "UI · Outfit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-3xl font-semibold tracking-[0.08em] uppercase",
							children: "No teu WhatsApp"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed text-stone",
							children: pt ? "Corpo, navegação, preços. Geométrica, calma, legível em ecrã." : "Body, navigation, prices. Geometric, calm, screen-legible."
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-nori py-16 text-rice",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl",
						children: pt ? "O catálogo" : "The catalogue"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-xl text-sm text-rice/65",
						children: pt ? "A capa original da casa — o mesmo laranja que deu origem ao kaki." : "The house’s original cover — the same orange that became kaki."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-4 md:grid-cols-[0.72fr_1.28fr]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/capa-catalogo.jpg",
							alt: "",
							className: "h-full max-h-[520px] w-full rounded-xl object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/catalogo-mesa.jpg",
							alt: "",
							className: "h-full max-h-[520px] w-full rounded-xl object-cover"
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: pt ? "Papelaria" : "Stationery"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-stone",
					children: pt ? "Cartão, sticker e saco de entrega — no kit para descarregar." : "Card, sticker and delivery bag — in the download kit."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rounded-xl bg-rice-warm p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/papelaria/cartao-frente.svg",
								alt: "",
								className: "w-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-4 text-xs tracking-[0.16em] text-stone uppercase",
								children: pt ? "Cartão · frente" : "Card · front"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rounded-xl bg-rice-warm p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/papelaria/cartao-verso.svg",
								alt: "",
								className: "w-full"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-4 text-xs tracking-[0.16em] text-stone uppercase",
								children: pt ? "Cartão · verso" : "Card · back"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "rounded-xl bg-nori p-6 sm:col-span-2 lg:col-span-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/brand/papelaria/sticker.svg",
								alt: "",
								className: "mx-auto max-h-48"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "mt-4 text-center text-xs tracking-[0.16em] text-kaki-soft uppercase",
								children: "Sticker"
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "h-48 bg-repeat",
			style: {
				backgroundImage: "url(/brand/padrao.svg)",
				backgroundSize: "160px"
			}
		})
	] }) });
}
//#endregion
export { IdentityPage as component };
