import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const html = path.resolve("public/manual/index.html");
const outDir = path.resolve("public/docs");
const out = path.join(outDir, "sete-sete-manual-seguimento.pdf");

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${html}`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});
await browser.close();
console.log("wrote", out);
