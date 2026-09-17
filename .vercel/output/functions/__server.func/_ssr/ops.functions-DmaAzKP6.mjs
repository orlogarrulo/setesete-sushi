import { a as number, n as array, o as object, r as boolean, s as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ops.functions-DmaAzKP6.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var itemSchema = object({
	id: string(),
	name: string(),
	qty: number(),
	unit: number(),
	total: number()
});
var receiptSchema = object({
	name: string().min(1).max(160),
	mime: _enum([
		"image/jpeg",
		"image/png",
		"image/webp",
		"application/pdf"
	]),
	dataB64: string().min(40).max(28e5)
});
var createOrder = createServerFn({ method: "POST" }).validator(object({
	id: string().min(4),
	name: string().min(2).max(80),
	phone: string().min(6).max(24),
	address: string().min(3).max(160),
	zone: string().min(1).max(40),
	notes: string().max(400).optional().default(""),
	pay: _enum([
		"mcx",
		"transfer",
		"cash"
	]),
	receiptName: string().max(160).optional(),
	receipt: receiptSchema,
	items: array(itemSchema).min(1),
	total: number()
})).handler(createSsrRpc("11c6341857a1ee251e4eef9540515c357a225e8c38a47aebccae25391d044334"));
var getTracking = createServerFn({ method: "GET" }).validator(object({ token: string().min(4).max(64) })).handler(createSsrRpc("d627379a4d98ecb8e3212ac780d733a1d11b14a29540cd19dbdd84ce8325c95d"));
var lookupInvoice = createServerFn({ method: "GET" }).validator(object({ id: string().min(4).max(40) })).handler(createSsrRpc("e515a5316d5514e368ede5d8784f624e8ea3b99a4966c526048704b2e43e13a2"));
var staffSession = createServerFn({ method: "GET" }).handler(createSsrRpc("79a74620f11d52b09dab3190235f823d72a062cbb2de8d98ef0ff69d2e580752"));
var loginStaff = createServerFn({ method: "POST" }).validator(object({
	user: string().min(1).max(40),
	password: string().min(1).max(80)
})).handler(createSsrRpc("e0cbcdf52944b73080fce02cf0b1dd8db663c2faad14c826b3e0ee9ce975ecce"));
var logoutStaff = createServerFn({ method: "POST" }).handler(createSsrRpc("3bd9e2fc61f7beb23b256763511a4d8841ff054eae7fd350f28d4cf652d9a62e"));
var listOrders = createServerFn({ method: "GET" }).validator(object({ status: string().optional() })).handler(createSsrRpc("0c5b4f45e7b0de6f73386fe666c1bc79cf68a0cf6fb77d3fb92be54819fe3ea4"));
var getOrder = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(createSsrRpc("8778c2fb72152c901880a9404219b9aa85b0c397742a534686814f45c7286b75"));
var setOrderStatus = createServerFn({ method: "POST" }).validator(object({
	id: string(),
	status: _enum([
		"received",
		"confirmed",
		"preparing",
		"ready",
		"out",
		"nearby",
		"delivered",
		"cancelled"
	]),
	note: string().max(200).optional().default("")
})).handler(createSsrRpc("ec3a65fc64e19e0f916933be1ddf639951cb66c4565b2653b3fa35dfa437b8d9"));
var listCustomers = createServerFn({ method: "GET" }).validator(object({
	q: string().optional().default(""),
	tag: string().optional().default("")
})).handler(createSsrRpc("5e27cfefe075d717913eb60f7c1605ea77d90f9171de6d59c02b04f17a95daec"));
var getCustomer = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(createSsrRpc("cdb11cfaec30595307b256d953f3ee15f1ed64ec2e11191087f75a2c663736f8"));
var upsertCustomer = createServerFn({ method: "POST" }).validator(object({
	name: string().min(2).max(80),
	phone: string().min(6).max(24),
	zone: string().max(40).optional().default(""),
	notes: string().max(400).optional().default(""),
	tags: array(string()).optional().default([])
})).handler(createSsrRpc("0cdb5d236ddea06eef815ba38f4d3edfcdb72a921b66f012e705cc8d39c72f7f"));
var addCrmNote = createServerFn({ method: "POST" }).validator(object({
	customerId: string(),
	body: string().min(2).max(400),
	author: string().max(40).optional().default("Casa")
})).handler(createSsrRpc("4f32623444f4033dd479dde7c76fedbbad1de4ed0c67e741c782f27b8d01a5c7"));
var setCustomerTags = createServerFn({ method: "POST" }).validator(object({
	id: string(),
	tags: array(string())
})).handler(createSsrRpc("eefcfaafa17efdfec84dbeae27272d2bbbb5c5587f79c3641f48b45198c9dbf8"));
var findOrders = createServerFn({ method: "GET" }).validator(object({ q: string().min(2).max(40) })).handler(createSsrRpc("090b8c82772100e5c03070b36dd145f30f77c7d016b34d50d105d5e1835b1518"));
var listReceipts = createServerFn({ method: "GET" }).validator(object({
	q: string().optional().default(""),
	pending: boolean().optional().default(false)
})).handler(createSsrRpc("156f710f63f255b6e16cb315bb8628ce6cb13c87af810a89809d0d6bd2856fb7"));
var getReceipt = createServerFn({ method: "GET" }).validator(object({ orderId: string().min(4) })).handler(createSsrRpc("3793b6eee164265ea5c215b5d2a658b3ef7ef43ee026711f9974483c8bd1de95"));
var attachReceipt = createServerFn({ method: "POST" }).validator(object({
	orderId: string().min(4),
	receipt: receiptSchema
})).handler(createSsrRpc("8d63bf61709d7ee3c8cf157b71c82f91225ea174961c34c97411fbe09835b616"));
var verifyPayment = createServerFn({ method: "POST" }).validator(object({
	id: string().min(4),
	ok: boolean()
})).handler(createSsrRpc("d1c961430f01f84389693c862ec7f436df68576de9ded80eb41c6433a48e9dce"));
var getDashboard = createServerFn({ method: "GET" }).handler(createSsrRpc("94cce137d1a8b85daeda3e302dde493adbb756b985840516409e2461f470aec5"));
//#endregion
export { setOrderStatus as _, getCustomer as a, verifyPayment as b, getReceipt as c, listOrders as d, listReceipts as f, setCustomerTags as g, lookupInvoice as h, findOrders as i, getTracking as l, logoutStaff as m, attachReceipt as n, getDashboard as o, loginStaff as p, createOrder as r, getOrder as s, addCrmNote as t, listCustomers as u, staffSession as v, upsertCustomer as y };
