import { copyFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(new URL(".", import.meta.url)));
const srcDir = join(root, "node_modules/@electric-sql/pglite/dist");
const files = ["pglite.data", "pglite.wasm", "initdb.wasm"];

function copyInto(dest) {
  mkdirSync(dest, { recursive: true });
  for (const name of files) {
    const from = join(srcDir, name);
    if (!existsSync(from)) continue;
    copyFileSync(from, join(dest, name));
  }
}

const candidates = [
  join(root, ".vercel/output/functions/__server.func/_libs"),
  join(root, ".vercel/output/functions/__server.func"),
];

const vercelFn = join(root, ".vercel/output/functions");
if (existsSync(vercelFn)) {
  for (const name of readdirSync(vercelFn)) {
    candidates.push(join(vercelFn, name, "_libs"));
    candidates.push(join(vercelFn, name));
  }
}

let copied = 0;
for (const dest of [...new Set(candidates)]) {
  if (!existsSync(dirname(dest))) continue;
  if (!existsSync(dest)) continue;
  copyInto(dest);
  copied += 1;
}

if (copied === 0) {
  console.warn("[pglite-assets] no function output dirs yet");
} else {
  console.log(`[pglite-assets] copied wasm/data into ${copied} dirs`);
}
