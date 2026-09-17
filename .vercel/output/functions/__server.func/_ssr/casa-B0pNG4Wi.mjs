import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Mark } from "./mark-BP7VB-b_.mjs";
import { c as t, i as copy, r as Shell, u as useLang } from "./shell-DwpA-Hnb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/casa-B0pNG4Wi.js
var import_jsx_runtime = require_jsx_runtime();
function CasaPage() {
	const lang = useLang((s) => s.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-nori text-rice",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/salmon.jpg",
					alt: "Salmão fresco da casa",
					className: "absolute inset-0 size-full object-cover opacity-40"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-nori/50" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.28em] text-kaki-soft uppercase",
						children: t(copy.casa.kicker, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 max-w-3xl font-display text-4xl sm:text-6xl",
						children: t(copy.casa.title, lang)
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-base leading-relaxed text-stone sm:text-lg",
					children: t(copy.casa.body, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 text-base leading-relaxed text-stone sm:text-lg",
					children: lang === "pt" ? "A cozinha está em Talatona — o ponto A de todas as rotas. Cada encomenda sai daqui rumo à tua zona, com um link para seguir o caminho." : "The kitchen is in Talatona — point A of every route. Each order leaves here for your area, with a link to follow the path."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/seguir",
						className: "inline-flex min-h-11 items-center rounded-full bg-kaki px-5 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
						children: t(copy.nav.track, lang)
					})
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
				className: "grid place-items-center rounded-xl bg-nori px-8 py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
					className: "size-40 sm:size-52",
					alt: "Kamon Sete Sete — dois setes em simetria circular"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
					className: "mt-6 text-center text-[11px] tracking-[0.22em] text-kaki-soft uppercase",
					children: lang === "pt" ? "Selo 77 · kamon" : "Seal 77 · kamon"
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-rice-warm py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3",
				children: [
					{
						t: lang === "pt" ? "Frescura" : "Freshness",
						b: lang === "pt" ? "Peixe escolhido pela qualidade do corte e da temperatura. Sem atalhos." : "Fish chosen for the cut and the temperature. No shortcuts."
					},
					{
						t: lang === "pt" ? "Clareza" : "Clarity",
						b: lang === "pt" ? "Um menu legível. Preços em Kwanzas. Tempo de preparação à vista." : "A readable menu. Prices in Kwanzas. Prep time in plain sight."
					},
					{
						t: lang === "pt" ? "Proximidade" : "Nearness",
						b: lang === "pt" ? "O pedido vive no WhatsApp — o sítio onde Luanda já fala." : "The order lives on WhatsApp — where Luanda already speaks."
					}
				].map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-ink/10 pt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl",
						children: x.t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm leading-relaxed text-stone",
						children: x.b
					})]
				}, x.t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/cozinha.jpg",
				alt: "Cozinha Sete Sete — preparação no momento",
				className: "aspect-[4/3] w-full rounded-xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: t(copy.casa.kitchen, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-stone",
					children: t(copy.casa.kitchenBody, lang)
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/catalogo.jpg",
				alt: "Catálogo Sete Sete",
				className: "aspect-[4/3] w-full rounded-xl object-cover"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
				className: "pt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-2xl",
					children: t(copy.casa.catalog, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-stone",
					children: t(copy.casa.catalogBody, lang)
				})]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 pb-20 text-center sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl sm:text-4xl",
				children: lang === "pt" ? "Vem à mesa." : "Come to the table."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/menu",
				className: "mt-8 inline-flex min-h-12 items-center rounded-full bg-kaki px-7 text-sm font-semibold tracking-[0.14em] text-rice uppercase",
				children: t(copy.hero.ctaMenu, lang)
			})]
		})
	] }) });
}
//#endregion
export { CasaPage as component };
