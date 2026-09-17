import { v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { h as ArrowRight } from "../_libs/lucide-react.mjs";
import { d as formatKz } from "./utils-CK9ZYU1s.mjs";
import { n as Mark } from "./mark-BP7VB-b_.mjs";
import { c as t, i as copy, n as PRODUCTS, r as Shell, t as CATEGORIES, u as useLang } from "./shell-DELOctKK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C7Jt_Xrt.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const lang = useLang((s) => s.lang);
	const featured = PRODUCTS.filter((p) => ["SS-OUR-45", "SS-ASN-77"].includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative min-h-[88dvh] overflow-hidden bg-nori text-rice",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/hero-capa.jpg",
					alt: "Uramaki de salmão Sete Sete",
					className: "absolute inset-0 size-full object-cover object-[20%_50%]"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-nori via-nori/55 to-nori/20" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto flex min-h-[88dvh] max-w-6xl flex-col justify-end px-4 pb-16 sm:px-6 sm:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
							className: "size-16 sm:size-20",
							alt: "Kamon Sete Sete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-[11px] font-medium tracking-[0.32em] text-kaki-soft uppercase",
							children: t(copy.hero.kicker, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 font-display text-[18vw] leading-[0.85] tracking-tight sm:text-8xl md:text-9xl",
							children: "Sete Sete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl font-display text-2xl italic text-rice/90 sm:text-3xl",
							children: t(copy.hero.lead, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm leading-relaxed text-rice/70 sm:text-base",
							children: t(copy.hero.sub, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-col gap-3 sm:flex-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/menu",
								className: "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
								children: [t(copy.hero.ctaMenu, lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/pedir",
								className: "inline-flex min-h-12 items-center justify-center rounded-full border border-rice/25 px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-rice/10",
								children: t(copy.hero.ctaOrder, lang)
							})]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-b border-ink/8 bg-rice-warm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl grid-cols-2 gap-px sm:grid-cols-4",
				children: [
					{
						n: "65",
						l: lang === "pt" ? "itens no cardápio" : "menu items"
					},
					{
						n: "12–22h",
						l: lang === "pt" ? "todos os dias" : "every day"
					},
					{
						n: "Luanda",
						l: lang === "pt" ? "entrega" : "delivery"
					},
					{
						n: "WhatsApp",
						l: lang === "pt" ? "pedido directo" : "direct order"
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "px-5 py-8 text-center sm:py-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-3xl tracking-tight sm:text-4xl",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[11px] tracking-[0.18em] text-stone uppercase",
						children: s.l
					})]
				}, s.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium tracking-[0.28em] text-kaki uppercase",
					children: t(copy.secret.kicker, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 max-w-3xl font-display text-3xl leading-tight sm:text-5xl",
					children: t(copy.secret.title, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-stone sm:text-lg",
					children: t(copy.secret.body, lang)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/rice.jpg",
							alt: "Arroz de sushi temperado, grão a grão",
							className: "aspect-[3/2] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: t(copy.secret.rice, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-stone",
								children: t(copy.secret.riceBody, lang)
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "overflow-hidden rounded-xl md:mt-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/photos/salmon.jpg",
							alt: "Salmão fresco para niguiri",
							className: "aspect-[3/2] w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "pt-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: t(copy.secret.fish, lang)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-stone",
								children: t(copy.secret.fishBody, lang)
							})]
						})]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-nori py-20 text-rice sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-[0.28em] text-kaki-soft uppercase",
						children: t(copy.menuTeaser.kicker, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "max-w-xl font-display text-3xl sm:text-5xl",
							children: t(copy.menuTeaser.title, lang)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/menu",
							className: "inline-flex items-center gap-2 text-sm tracking-[0.14em] uppercase hover:text-kaki-soft",
							children: [t(copy.hero.ctaMenu, lang), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4",
						children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/menu",
							search: { cat: c.id },
							hash: c.id,
							resetScroll: false,
							className: "group relative aspect-[3/4] overflow-hidden rounded-lg",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.name[lang],
									className: "size-full object-cover transition duration-500 group-hover:scale-105"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-linear-to-t from-nori/80 via-nori/10 to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute inset-x-0 bottom-0 p-3 sm:p-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] tracking-[0.2em] text-kaki-soft",
										children: c.ja
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-lg leading-tight sm:text-xl",
										children: c.name[lang]
									})]
								})
							]
						}, c.id))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] font-medium tracking-[0.28em] text-kaki uppercase",
					children: lang === "pt" ? "Ouro e assinatura" : "Gold and signature"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-3xl sm:text-5xl",
					children: lang === "pt" ? "Só salmão, ou o 77 da casa." : "Salmon only, or the house 77."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2",
					children: featured.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/menu",
						search: { cat: p.category },
						hash: p.category,
						resetScroll: false,
						className: "group overflow-hidden rounded-xl bg-rice-warm shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative aspect-[16/9] overflow-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name[lang],
								className: "size-full object-cover transition duration-500 group-hover:scale-[1.03]"
							}), p.flags?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-3 left-3 rounded-full bg-rice/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-kaki uppercase",
								children: t(copy.flags[p.flags[0]], lang)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between gap-3 p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl",
								children: p.name[lang]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-stone",
								children: p.description[lang]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "shrink-0 text-sm font-semibold text-kaki tabular-nums",
								children: formatKz(p.price)
							})]
						})]
					}, p.id))
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-ink/8 bg-rice-warm py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] font-medium tracking-[0.28em] text-kaki uppercase",
						children: t(copy.how.kicker, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 max-w-xl font-display text-3xl sm:text-5xl",
						children: t(copy.how.title, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							[copy.how.s1t, copy.how.s1],
							[copy.how.s2t, copy.how.s2],
							[copy.how.s3t, copy.how.s3]
						].map(([title, body], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "border-t border-ink/10 pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-5xl text-kaki/40",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-3 font-display text-2xl",
									children: t(title, lang)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm leading-relaxed text-stone",
									children: t(body, lang)
								})
							]
						}, i))
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-nori py-24 text-center text-rice",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/photos/combinado.jpg",
				alt: "Combinado Sete Sete",
				className: "absolute inset-0 size-full object-cover opacity-25"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-xl px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-4xl sm:text-5xl",
						children: lang === "pt" ? "Pronto para a mesa?" : "Ready for the table?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-rice/70",
						children: lang === "pt" ? "Monta o pedido e envia no WhatsApp. Nós tratamos do resto." : "Build the order and send it on WhatsApp. We handle the rest."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pedir",
						className: "mt-8 inline-flex min-h-12 items-center rounded-full bg-kaki px-8 text-sm font-semibold tracking-[0.14em] text-rice uppercase hover:bg-kaki-deep",
						children: t(copy.hero.ctaOrder, lang)
					})
				]
			})]
		})
	] }) });
}
//#endregion
export { Home as component };
