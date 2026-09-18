import { o as __toESM } from "../_runtime.mjs";
import { V as require_react, d as useRouterState, m as Outlet, v as Link, x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as LayoutDashboard, h as ClipboardList, n as Users, p as FileCheck, u as LogOut } from "../_libs/lucide-react.mjs";
import { f as cn } from "./utils-CJy7FdrE.mjs";
import { m as logoutStaff, p as loginStaff, v as staffSession } from "./ops.functions-DHvQhR2m.mjs";
import { n as Mark } from "./mark-Byq4d7Oa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/route-CAhkexMe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var KEY = "setesete-ops-gate";
function markStaffUiAuthed() {
	sessionStorage.setItem(KEY, "1");
}
function clearStaffUi() {
	sessionStorage.removeItem(KEY);
	sessionStorage.removeItem("setesete-ops-pin");
}
var NAV = [
	{
		to: "/ops",
		label: "Painel",
		icon: LayoutDashboard,
		exact: true
	},
	{
		to: "/ops/encomendas",
		label: "Encomendas",
		icon: ClipboardList,
		exact: false
	},
	{
		to: "/ops/comprovativos",
		label: "Comprovativos",
		icon: FileCheck,
		exact: false
	},
	{
		to: "/ops/crm",
		label: "CRM",
		icon: Users,
		exact: false
	}
];
function OpsShell() {
	const [user, setUser] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [authed, setAuthed] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		staffSession().then((r) => {
			setAuthed(r.ok);
			if (r.ok) markStaffUiAuthed();
			else clearStaffUi();
			setReady(true);
		});
	}, []);
	async function onSubmit(e) {
		e.preventDefault();
		setError("");
		setBusy(true);
		try {
			const r = await loginStaff({ data: {
				user,
				password
			} });
			if (!r.ok) {
				setError(r.locked ? "Muitas tentativas. Espera uns minutos." : "Acesso recusado.");
				return;
			}
			markStaffUiAuthed();
			setPassword("");
			setAuthed(true);
		} catch {
			setError("Acesso recusado.");
		} finally {
			setBusy(false);
		}
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-nori text-rice",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm tracking-[0.2em] text-stone uppercase",
			children: "Sete Sete"
		})
	});
	if (!authed) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col items-center justify-center bg-nori px-4 text-rice",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
				invert: true,
				className: "size-16",
				alt: "Sete Sete"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-8 font-display text-4xl",
				children: "Backoffice"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => void onSubmit(e),
				className: "mt-8 w-full max-w-xs space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs tracking-[0.16em] text-stone uppercase",
						children: ["Utilizador", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							autoComplete: "username",
							value: user,
							onChange: (e) => setUser(e.target.value),
							className: "mt-2 min-h-12 w-full rounded-lg border border-rice/15 bg-nori px-3 text-sm text-rice outline-none ring-kaki focus:ring-2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "block text-xs tracking-[0.16em] text-stone uppercase",
						children: ["Palavra-passe", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							autoComplete: "current-password",
							value: password,
							onChange: (e) => setPassword(e.target.value),
							className: "mt-2 min-h-12 w-full rounded-lg border border-rice/15 bg-nori px-3 text-sm text-rice outline-none ring-kaki focus:ring-2"
						})]
					}),
					error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-center text-sm text-kaki",
						children: error
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: busy,
						className: "flex min-h-12 w-full items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.14em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-60",
						children: "Entrar"
					})
				]
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-nori text-rice",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "sticky top-0 z-30 border-b border-rice/10 bg-nori/92 backdrop-blur-md",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/ops",
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
							invert: true,
							className: "size-9",
							alt: ""
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold tracking-[0.16em] uppercase",
							children: "Backoffice"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex items-center gap-1",
						children: NAV.map((n) => {
							const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: n.to,
								className: cn("inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-[11px] font-medium tracking-[0.12em] uppercase sm:px-4", active ? "bg-kaki text-rice" : "text-rice/70 hover:bg-rice/8 hover:text-rice"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.icon, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: n.label
								})]
							}, n.to);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							logoutStaff().then(() => {
								clearStaffUi();
								setAuthed(false);
								setPassword("");
							});
						},
						className: "inline-flex size-11 items-center justify-center rounded-full hover:bg-rice/8",
						"aria-label": "Sair",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
					})
				]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
		})]
	});
}
var SplitComponent = OpsShell;
//#endregion
export { SplitComponent as component };
