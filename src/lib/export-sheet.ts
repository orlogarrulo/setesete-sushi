function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function sheetHtml(
  title: string,
  headers: string[],
  rows: (string | number)[][],
  orientation: "portrait" | "landscape",
) {
  const head = headers
    .map(
      (h) =>
        `<th style="background:#1a1714;color:#f4f0e8;font-weight:700;text-align:left;padding:10px 12px;font-family:Calibri,Arial,sans-serif;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;border:1px solid #2a2622">${escapeHtml(h)}</th>`,
    )
    .join("");
  const body = rows
    .map((row, i) => {
      const bg = i % 2 === 0 ? "#fbfaf7" : "#f3eee6";
      const cells = row
        .map(
          (c) =>
            `<td style="padding:8px 12px;font-family:Calibri,Arial,sans-serif;font-size:12px;color:#1a1714;border:1px solid #e6dfd4;vertical-align:top">${escapeHtml(String(c))}</td>`,
        )
        .join("");
      return `<tr style="background:${bg}">${cells}</tr>`;
    })
    .join("");
  const when = new Date().toLocaleString("pt-PT", { timeZone: "Africa/Luanda" });
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

export function downloadExcel(opts: {
  filename: string;
  title: string;
  headers: string[];
  rows: (string | number)[][];
  orientation?: "portrait" | "landscape";
}) {
  const html = sheetHtml(
    opts.title,
    opts.headers,
    opts.rows,
    opts.orientation ?? "landscape",
  );
  const blob = new Blob(["\ufeff", html], { type: "application/vnd.ms-excel" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = opts.filename.endsWith(".xls") ? opts.filename : `${opts.filename}.xls`;
  a.click();
  window.setTimeout(() => URL.revokeObjectURL(a.href), 1500);
}

export function printPdf(opts: {
  title: string;
  headers: string[];
  rows: (string | number)[][];
  orientation?: "portrait" | "landscape";
}) {
  const html = sheetHtml(
    opts.title,
    opts.headers,
    opts.rows,
    opts.orientation ?? "landscape",
  );
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
