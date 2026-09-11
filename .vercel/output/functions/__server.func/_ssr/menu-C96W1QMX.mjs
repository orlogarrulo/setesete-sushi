import { i as __toESM } from "../_runtime.mjs";
import { i as productsByCategory, n as PRODUCTS, t as CATEGORIES } from "./menu-zEgjV5oi.mjs";
import { b as require_jsx_runtime, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Shell, d as cn, f as copy, g as useLang, h as useCart, m as t, p as formatKz } from "./shell-uG93CiQk.mjs";
import { n as Route$1 } from "./router-Cg76BJSv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/menu-C96W1QMX.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product }) {
	const lang = useLang((s) => s.lang);
	const add = useCart((s) => s.add);
	const qty = useCart((s) => s.lines.find((l) => l.id === product.id)?.qty ?? 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-xl bg-rice-warm shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] overflow-hidden bg-nori",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image,
				alt: product.name[lang],
				className: "size-full object-cover transition duration-500 group-hover:scale-[1.03]"
			}), product.flags?.[0] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 left-3 rounded-full bg-rice/95 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-kaki uppercase",
				children: t(copy.flags[product.flags[0]], lang)
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-4 sm:p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl leading-snug",
						children: product.name[lang]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "shrink-0 text-sm font-semibold text-kaki tabular-nums",
						children: formatKz(product.price)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-2 text-sm leading-relaxed text-stone",
					children: product.description[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 line-clamp-1 text-xs text-stone/75",
					children: product.ingredients[lang]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 flex items-center gap-3 text-[11px] tracking-[0.12em] text-stone uppercase",
					children: [product.pieces ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						product.pieces,
						" ",
						t(copy.pieces, lang)
					] }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						product.prepMin,
						" ",
						t(copy.min, lang)
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => add(product.id),
					className: cn("mt-4 min-h-11 rounded-full text-sm font-semibold tracking-[0.08em] transition", qty ? "bg-nori text-rice" : "bg-kaki text-rice hover:bg-kaki-deep"),
					children: qty ? `${t(copy.cart.added, lang)} · ${qty}` : t(copy.cart.add, lang)
				})
			]
		})]
	});
}
function stickyOffset() {
	const bar = document.querySelector("header");
	const tabs = document.querySelector(".sticky.z-30");
	return (bar instanceof HTMLElement ? bar.getBoundingClientRect().height : 64) + (tabs instanceof HTMLElement ? tabs.getBoundingClientRect().height : 52) + 8;
}
function jumpToCategory(id) {
	const el = document.getElementById(id);
	if (!el) return false;
	const top = el.getBoundingClientRect().top + window.scrollY - stickyOffset();
	window.scrollTo({
		top: Math.max(0, top),
		behavior: "auto"
	});
	return Math.abs(el.getBoundingClientRect().top - stickyOffset()) < 56;
}
function MenuPage() {
	const lang = useLang((s) => s.lang);
	const { cat } = Route$1.useSearch();
	const fromSearch = cat;
	const [active, setActive] = (0, import_react.useState)(fromSearch ?? "entradas");
	const lockObserver = (0, import_react.useRef)(Boolean(fromSearch));
	(0, import_react.useLayoutEffect)(() => {
		if (!fromSearch) {
			lockObserver.current = false;
			return;
		}
		lockObserver.current = true;
		setActive(fromSearch);
		let stopped = false;
		const tick = () => {
			if (stopped) return;
			jumpToCategory(fromSearch);
		};
		tick();
		const iv = window.setInterval(tick, 80);
		const imgs = [...document.querySelectorAll("main img")];
		imgs.forEach((img) => img.addEventListener("load", tick));
		const stop = window.setTimeout(() => {
			stopped = true;
			window.clearInterval(iv);
			lockObserver.current = false;
			imgs.forEach((img) => img.removeEventListener("load", tick));
		}, 2800);
		return () => {
			stopped = true;
			window.clearInterval(iv);
			window.clearTimeout(stop);
			imgs.forEach((img) => img.removeEventListener("load", tick));
		};
	}, [fromSearch]);
	(0, import_react.useEffect)(() => {
		const nodes = CATEGORIES.map((c) => document.getElementById(c.id)).filter((el) => Boolean(el));
		if (!nodes.length) return;
		const obs = new IntersectionObserver((entries) => {
			if (lockObserver.current) return;
			const id = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]?.target.id;
			if (id) setActive(id);
		}, {
			rootMargin: "-40% 0px -45% 0px",
			threshold: [
				0,
				.15,
				.4
			]
		});
		nodes.forEach((n) => obs.observe(n));
		return () => obs.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-nori text-rice",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/photos/combinado.jpg",
					alt: "Combinado Sete Sete",
					className: "absolute inset-0 size-full object-cover opacity-35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-nori/55" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.28em] text-kaki-soft uppercase",
							children: lang === "pt" ? "Cardápio" : "Menu"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 font-display text-5xl sm:text-7xl",
							children: t(copy.nav.menu, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-lg text-sm text-rice/70",
							children: lang === "pt" ? "Quarenta peças. Preços em Kwanzas. Preparação no momento." : "Forty pieces. Prices in Kwanzas. Made to order."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "sticky top-16 z-30 border-b border-ink/8 bg-rice/90 backdrop-blur-md sm:top-[4.25rem]",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-3 sm:px-6",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/menu",
					search: { cat: c.id },
					hash: c.id,
					resetScroll: false,
					onClick: () => {
						lockObserver.current = true;
						setActive(c.id);
						window.setTimeout(() => {
							jumpToCategory(c.id);
							lockObserver.current = false;
						}, 0);
					},
					className: cn("shrink-0 rounded-full px-3.5 py-2 text-[11px] font-medium tracking-[0.12em] whitespace-nowrap uppercase", active === c.id ? "bg-kaki text-rice" : "bg-ink/5 text-ink hover:bg-ink/10"),
					children: c.name[lang]
				}, c.id))
			})
		}),
		CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: c.id,
			className: "scroll-mt-36 mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:scroll-mt-40",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.22em] text-kaki uppercase",
						children: c.ja
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 font-display text-3xl sm:text-4xl",
						children: c.name[lang]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-stone",
						children: c.blurb[lang]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hidden text-sm text-stone sm:block",
					children: [
						productsByCategory(c.id).length,
						" ",
						lang === "pt" ? "itens" : "items"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: PRODUCTS.filter((p) => p.category === c.id).map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: p }, p.id))
			})]
		}, c.id))
	] }) });
}
//#endregion
export { MenuPage as component };
