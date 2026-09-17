//#region node_modules/.nitro/vite/services/ssr/assets/receipt-file-CKrlpYiu.js
var MAX_BYTES = 18e5;
var ALLOWED = /* @__PURE__ */ new Set([
	"image/jpeg",
	"image/png",
	"image/webp",
	"application/pdf"
]);
function bufToB64(buf) {
	const bytes = new Uint8Array(buf);
	let bin = "";
	const chunk = 32768;
	for (let i = 0; i < bytes.length; i += chunk) bin += String.fromCharCode(...bytes.subarray(i, i + chunk));
	return btoa(bin);
}
async function compressImage(file) {
	const bmp = await createImageBitmap(file);
	const scale = Math.min(1, 1400 / Math.max(bmp.width, bmp.height));
	const w = Math.max(1, Math.round(bmp.width * scale));
	const h = Math.max(1, Math.round(bmp.height * scale));
	const canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Não foi possível ler a imagem.");
	ctx.drawImage(bmp, 0, 0, w, h);
	bmp.close();
	const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/jpeg", .82));
	if (!blob) throw new Error("Não foi possível comprimir a imagem.");
	return blob;
}
async function fileToReceipt(file) {
	const type = file.type || "application/octet-stream";
	if (!ALLOWED.has(type)) throw new Error("Envia uma foto (JPG, PNG, WEBP) ou um PDF.");
	let blob = file;
	let mime = type;
	let name = file.name || "comprovativo";
	if (type.startsWith("image/")) {
		blob = await compressImage(file);
		mime = "image/jpeg";
		name = name.replace(/\.[^.]+$/, "") + ".jpg";
	}
	if (blob.size > MAX_BYTES) throw new Error("Ficheiro demasiado grande. Máximo cerca de 2 MB.");
	const dataB64 = bufToB64(await blob.arrayBuffer());
	return {
		name,
		mime,
		dataB64
	};
}
//#endregion
export { fileToReceipt as t };
