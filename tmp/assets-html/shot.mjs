import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";

const jobs = [
  { file: "infografico.html", out: "linkedin-infografico-1080x1350.png", w: 1080, h: 1350 },
  { file: "capa-linkedin.html", out: "linkedin-capa-1584x396.png", w: 1584, h: 396 },
  { file: "perfil.html", out: "perfil-1080.png", w: 1080, h: 1080 },
  { file: "whatsapp.html", out: "whatsapp-640.png", w: 640, h: 640 },
  { file: "story-abertura.html", out: "instagram-story-abertura-1080x1920.png", w: 1080, h: 1920 },
  { file: "feed-abertura.html", out: "instagram-feed-abertura-1080x1350.png", w: 1080, h: 1350 },
  { file: "mano-capa.html", out: "mano-capa-1600x640.png", w: 1600, h: 640 },
];

const outDir = "/workspace/artifacts/brand";
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch({ args: ["--disable-web-security"] });
const page = await browser.newPage();

for (const job of jobs) {
  await page.setViewportSize({ width: job.w, height: job.h });
  await page.goto(`http://127.0.0.1:8765/tmp/assets-html/${job.file}`, {
    waitUntil: "networkidle",
  });
  await page.waitForTimeout(250);
  const el = page.locator("#shot");
  await el.screenshot({ path: `${outDir}/${job.out}`, type: "png" });
  console.log("ok", job.out);
}

await browser.close();
