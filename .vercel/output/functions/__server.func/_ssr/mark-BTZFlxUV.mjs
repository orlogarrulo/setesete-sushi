import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as cn } from "./utils-DDxYvakE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mark-BTZFlxUV.js
var import_jsx_runtime = require_jsx_runtime();
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
//#endregion
export { Mark as n, LogoLockup as t };
