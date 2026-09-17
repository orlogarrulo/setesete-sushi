import { a as object, i as number, n as array, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ops.functions-C98Omw6C.js
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
	receiptName: string().max(120).optional(),
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
var getDashboard = createServerFn({ method: "GET" }).handler(createSsrRpc("94cce137d1a8b85daeda3e302dde493adbb756b985840516409e2461f470aec5"));
//#endregion
export { getOrder as a, listOrders as c, lookupInvoice as d, setCustomerTags as f, upsertCustomer as h, getDashboard as i, loginStaff as l, staffSession as m, createOrder as n, getTracking as o, setOrderStatus as p, getCustomer as r, listCustomers as s, addCrmNote as t, logoutStaff as u };
