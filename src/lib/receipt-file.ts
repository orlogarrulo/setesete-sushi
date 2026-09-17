const MAX_BYTES = 1_800_000;
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "application/pdf"]);

export type ReceiptPayload = {
  name: string;
  mime: "image/jpeg" | "image/png" | "image/webp" | "application/pdf";
  dataB64: string;
};

function bufToB64(buf: ArrayBuffer) {
  const bytes = new Uint8Array(buf);
  let bin = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    bin += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(bin);
}

async function compressImage(file: File): Promise<Blob> {
  const bmp = await createImageBitmap(file);
  const max = 1400;
  const scale = Math.min(1, max / Math.max(bmp.width, bmp.height));
  const w = Math.max(1, Math.round(bmp.width * scale));
  const h = Math.max(1, Math.round(bmp.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Não foi possível ler a imagem.");
  ctx.drawImage(bmp, 0, 0, w, h);
  bmp.close();
  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", 0.82),
  );
  if (!blob) throw new Error("Não foi possível comprimir a imagem.");
  return blob;
}

export async function fileToReceipt(file: File): Promise<ReceiptPayload> {
  const type = file.type || "application/octet-stream";
  if (!ALLOWED.has(type)) {
    throw new Error("Envia uma foto (JPG, PNG, WEBP) ou um PDF.");
  }
  let blob: Blob = file;
  let mime: ReceiptPayload["mime"] = type as ReceiptPayload["mime"];
  let name = file.name || "comprovativo";
  if (type.startsWith("image/")) {
    blob = await compressImage(file);
    mime = "image/jpeg";
    name = name.replace(/\.[^.]+$/, "") + ".jpg";
  }
  if (blob.size > MAX_BYTES) {
    throw new Error("Ficheiro demasiado grande. Máximo cerca de 2 MB.");
  }
  const dataB64 = bufToB64(await blob.arrayBuffer());
  return { name, mime, dataB64 };
}
