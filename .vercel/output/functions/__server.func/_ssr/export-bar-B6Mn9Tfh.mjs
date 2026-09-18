import { x as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { f as FileDown, o as Printer } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/export-bar-B6Mn9Tfh.js
var import_jsx_runtime = require_jsx_runtime();
function escapeHtml(s) {
	return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("\"", "&quot;");
}
function sheetHtml(title, headers, rows, orientation) {
	const head = headers.map((h) => `<th style="background:#1a1714;color:#f4f0e8;font-weight:700;text-align:left;padding:10px 12px;font-family:Calibri,Arial,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;border:1px solid #2a2622">${escapeHtml(h)}</th>`).join("");
	const body = rows.map((row, i) => {
		return `<tr style="background:${i % 2 === 0 ? "#fbfaf7" : "#f3eee6"}">${row.map((c) => `<td style="padding:8px 12px;font-family:Calibri,Arial,sans-serif;font-size:12px;color:#1a1714;border:1px solid #e6dfd4;vertical-align:top">${escapeHtml(String(c))}</td>`).join("")}</tr>`;
	}).join("");
	const when = (/* @__PURE__ */ new Date()).toLocaleString("pt-PT", { timeZone: "Africa/Luanda" });
	return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<style>
  @page { size: A4 ${orientation}; margin: 14mm; }
  body { margin: 0; background: #fbfaf7; color: #1a1714; }
  h1 { font-family: "Times New Roman", serif; font-size: 28px; margin: 0; }
  .kicker { font-family: Calibri, Arial, sans-serif; font-size: 11px; letter-spacing: 0.22em; text-transform: uppercase; color: #e24a17; }
  .meta { font-family: Calibri, Arial, sans-serif; font-size: 11px; color: #6b6560; margin-top: 4px; }
  table { border-collapse: collapse; width: 100%; margin-top: 18px; }
</style>
</head>
<body>
  <p class="kicker">Sete Sete · Backoffice</p>
  <h1>${escapeHtml(title)}</h1>
  <p class="meta">Luanda · gerado ${escapeHtml(when)} · ${rows.length} linhas</p>
  <table>
    <thead><tr>${head}</tr></thead>
    <tbody>${body}</tbody>
  </table>
</body>
</html>`;
}
function downloadExcel(opts) {
	const html = sheetHtml(opts.title, opts.headers, opts.rows, opts.orientation ?? "landscape");
	const blob = new Blob(["﻿", html], { type: "application/vnd.ms-excel" });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = opts.filename.endsWith(".xls") ? opts.filename : `${opts.filename}.xls`;
	a.click();
	window.setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}
function printPdf(opts) {
	const html = sheetHtml(opts.title, opts.headers, opts.rows, opts.orientation ?? "landscape");
	const w = window.open("", "_blank", "noopener,noreferrer");
	if (!w) return;
	w.document.open();
	w.document.write(html);
	w.document.close();
	w.focus();
	window.setTimeout(() => {
		w.print();
	}, 350);
}
function ExportBar({ title, filename, headers, rows, orientation = "landscape" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap gap-2 print:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => printPdf({
				title,
				headers,
				rows,
				orientation
			}),
			className: "inline-flex min-h-11 items-center gap-2 rounded-full border border-rice/15 px-4 text-[11px] font-semibold tracking-[0.12em] uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "PDF"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => downloadExcel({
				filename,
				title,
				headers,
				rows,
				orientation
			}),
			className: "inline-flex min-h-11 items-center gap-2 rounded-full bg-kaki px-4 text-[11px] font-semibold tracking-[0.12em] text-rice uppercase",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDown, { className: "size-3.5" }), "Excel"]
		})]
	});
}
//#endregion
export { ExportBar as t };
