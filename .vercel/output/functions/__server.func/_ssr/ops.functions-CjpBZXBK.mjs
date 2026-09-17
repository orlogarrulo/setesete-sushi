import { l as remainingMinutes, o as digitsPhone, s as firstName, t as COURIERS, u as routeProgress } from "./ops-CJMdWyyN.mjs";
import { a as object, i as number, n as array, o as string, t as _enum } from "../_libs/zod.mjs";
import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
import { l as resolveZone, o as estimateEtaMin, s as jitter, t as KITCHEN, u as zoneById } from "./geo-CSQz4fgL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ops.functions-CjpBZXBK.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var _0002_ops_default = "-- Sete Sete operations: orders, tracking, CRM (unowned restaurant rows)\ncreate table if not exists customers (\n  id text primary key,\n  phone text not null unique,\n  name text not null,\n  zone text not null default '',\n  notes text not null default '',\n  tags text not null default '[]',\n  created_at timestamptz not null default now(),\n  last_order_at timestamptz\n);\n\ncreate table if not exists orders (\n  id text primary key,\n  track_token text not null unique,\n  customer_id text not null,\n  customer_name text not null,\n  phone text not null,\n  address text not null,\n  zone text not null,\n  origin_lat double precision not null,\n  origin_lng double precision not null,\n  dest_lat double precision not null,\n  dest_lng double precision not null,\n  notes text not null default '',\n  pay text not null,\n  receipt_name text,\n  status text not null,\n  total integer not null,\n  items_json text not null,\n  eta_min integer not null default 35,\n  courier_name text,\n  created_at timestamptz not null default now(),\n  updated_at timestamptz not null default now(),\n  dispatched_at timestamptz,\n  delivered_at timestamptz\n);\n\ncreate table if not exists order_events (\n  id serial primary key,\n  order_id text not null,\n  status text not null,\n  note text not null default '',\n  created_at timestamptz not null default now()\n);\n\ncreate table if not exists crm_notes (\n  id serial primary key,\n  customer_id text not null,\n  body text not null,\n  author text not null default 'Casa',\n  created_at timestamptz not null default now()\n);\n\ncreate index if not exists orders_status_idx on orders (status);\ncreate index if not exists orders_customer_idx on orders (customer_id);\ncreate index if not exists orders_created_idx on orders (created_at desc);\ncreate index if not exists orders_token_idx on orders (track_token);\ncreate index if not exists order_events_order_idx on order_events (order_id);\ncreate index if not exists crm_notes_customer_idx on crm_notes (customer_id);\n";
/**
* Migration bookkeeping shared by the two appliers — `scripts/migrate.mjs`
* (deploy, `readdir`) and `src/lib/db.ts` (PGLite preview, `import.meta.glob`).
*
* Applied files are keyed by BASENAME, so the same file applies once no matter
* which directory it is globbed from. That is what makes the auth schema safe to
* copy from `migrations/auth/` into `migrations/` when an app turns sign-in on:
* a database that already has `0001_auth.sql` will not re-run it.
*
* Neither applier descends into subdirectories, so `migrations/auth/*.sql` is
* out of scope for both until it is copied up.
*/
/**
* The `_migrations` key for a migration path (or bare filename).
* @param {string} path
* @returns {string}
*/
function migrationName(path) {
	return path.split("/").pop() ?? path;
}
/**
* @param {string} path
* @returns {boolean}
*/
function isMigrationFile(path) {
	return path.endsWith(".sql");
}
/**
* Migrations in `paths` that are not yet in `applied`, in apply order.
* Non-`.sql` entries (a `readdir` also yields `migrations/auth/`) are dropped.
* @param {Iterable<string>} paths
* @param {Iterable<string>} applied
* @returns {Array<{ name: string, path: string }>}
*/
function pendingMigrations(paths, applied) {
	const done = new Set(applied);
	return [...paths].filter(isMigrationFile).map((path) => ({
		name: migrationName(path),
		path
	})).sort((a, b) => a.name.localeCompare(b.name)).filter(({ name }) => !done.has(name));
}
var rawDatabaseUrl = typeof process !== "undefined" ? process.env.DATABASE_URL : void 0;
var databaseUrl = rawDatabaseUrl && rawDatabaseUrl.trim() ? rawDatabaseUrl : void 0;
/**
* Active backend: real **Neon** when `DATABASE_URL` is set (deployed / configured
* sandbox), otherwise a local embedded **PGLite** (Postgres compiled to WASM) so
* the app has a working database even with nothing configured — the live preview
* included. Swap in Neon later by just setting `DATABASE_URL`; no code changes.
*/
var dbSource = databaseUrl ? "neon" : "pglite";
/**
* Init state lives on globalThis as promises: dev HMR creates new instances of
* this module, and two instances racing module-level state would open a second
* pool or run two concurrent PGLite migration passes (whose duplicate
* `_migrations` insert rejects — and would get memoized, poisoning every later
* `getSql()`). A failed init clears its slot so the next call retries.
*/
var globalRef = globalThis;
/**
* Result-type parity: Postgres sends every value as text plus a type OID — the
* JS value is the DRIVER's parsing choice, and pg and PGLite disagree (pg:
* int8 -> string, date -> local-midnight Date; PGLite: int8 -> BigInt, which
* JSON.stringify rejects, date -> UTC Date). Normalize both so preview and
* production return identical, JSON-safe shapes:
*   int8/bigint (incl. count(*)) -> number (past 2^53 loses precision — cast
*                                   `::text` if you ever need huge integers)
*   date                         -> 'YYYY-MM-DD' string
*   interval                     -> Postgres interval text
* numeric already comes back as a string on both (arbitrary precision).
*/
var OID_INT8 = 20;
var OID_DATE = 1082;
var OID_INTERVAL = 1186;
var identity = (v) => v;
/** Wrap a query runner in the tagged-template + `.query()` `Sql` surface. */
function toSql(run) {
	const sql = (async (strings, ...values) => {
		let text = strings[0];
		for (let i = 0; i < values.length; i += 1) text += `$${i + 1}${strings[i + 1]}`;
		return run(text, values);
	});
	sql.query = (text, params = []) => run(text, params);
	return sql;
}
function createNeonSql() {
	globalRef.__pgSqlPromise__ ??= (async () => {
		const { Pool, types } = await import("../_libs/pg.mjs").then((n) => n.t);
		types.setTypeParser(OID_INT8, Number);
		types.setTypeParser(OID_DATE, identity);
		types.setTypeParser(OID_INTERVAL, identity);
		const pool = new Pool({ connectionString: databaseUrl });
		return toSql(async (text, params) => {
			return (await pool.query(text, params)).rows;
		});
	})().catch((err) => {
		globalRef.__pgSqlPromise__ = void 0;
		throw err;
	});
	return globalRef.__pgSqlPromise__;
}
async function createPgliteSql() {
	globalRef.__pgliteInstance__ ??= (async () => {
		const { PGlite } = await import("../_libs/electric-sql__pglite.mjs").then((n) => n.t);
		const pg = new PGlite({
			dataDir: "memory://",
			parsers: {
				[OID_INT8]: Number,
				[OID_DATE]: identity,
				[OID_INTERVAL]: identity
			}
		});
		await pg.waitReady;
		await pg.exec("create table if not exists _migrations (name text primary key, applied_at timestamptz not null default now())");
		return pg;
	})().catch((err) => {
		globalRef.__pgliteInstance__ = void 0;
		throw err;
	});
	const pg = await globalRef.__pgliteInstance__;
	const migrate = async () => {
		const migrations = /* #__PURE__ */ Object.assign({ "/migrations/0002_ops.sql": _0002_ops_default });
		const done = (await pg.query("select name from _migrations")).rows.map((r) => r.name);
		for (const { name, path } of pendingMigrations(Object.keys(migrations), done)) await pg.transaction(async (tx) => {
			await tx.exec(migrations[path]);
			await tx.query("insert into _migrations (name) values ($1)", [name]);
		});
	};
	const pass = (globalRef.__pgliteMigrateChain__ ?? Promise.resolve()).catch(() => void 0).then(migrate);
	globalRef.__pgliteMigrateChain__ = pass;
	await pass;
	return toSql(async (text, params) => {
		return (await pg.query(text, params)).rows;
	});
}
var sqlPromise = null;
async function createSql() {
	if (typeof window !== "undefined") throw new Error("@/lib/db is server-only — call getSql() from a createServerFn handler or a server route loader, never from client code.");
	return dbSource === "neon" ? createNeonSql() : createPgliteSql();
}
/**
* Get the shared, **server-only** SQL client. Neon when `DATABASE_URL` is set,
* otherwise the local PGLite fallback. Memoized — safe to call per request.
*
* Schema comes from `migrations/*.sql`, auto-applied before the first query on
* both backends — define tables there, never inline in server functions.
*/
function getSql() {
	sqlPromise ??= createSql().catch((err) => {
		sqlPromise = null;
		throw err;
	});
	return sqlPromise;
}
/**
* Finish DB bootstrap before the server handles traffic.
*
* - **PGLite** (preview / no `DATABASE_URL`): open the in-memory DB and apply
*   `migrations/*.sql`. Idempotent — concurrent callers share one promise.
* - **Neon**: no-op (pool is created lazily on first query).
*
* Vite `configureServer` awaits this at dev startup; production imports of this
* module kick it off immediately (see bottom of file).
*/
function ensureDbReady() {
	if (dbSource !== "pglite") return Promise.resolve();
	return getSql().then(() => void 0);
}
var globalBoot = globalThis;
if (typeof window === "undefined" && dbSource === "pglite") globalBoot.__pgBootstrapPromise__ ??= ensureDbReady().catch((err) => {
	globalBoot.__pgBootstrapPromise__ = void 0;
	console.error("[db] PGLite bootstrap failed:", err);
	throw err;
});
function iso(d) {
	return d.toISOString();
}
function asIso(value) {
	if (!value) return null;
	if (value instanceof Date) return value.toISOString();
	return String(value);
}
function parseItems(raw) {
	try {
		const v = JSON.parse(raw);
		return Array.isArray(v) ? v : [];
	} catch {
		return [];
	}
}
function parseTags(raw) {
	try {
		const v = JSON.parse(raw);
		return Array.isArray(v) ? v : [];
	} catch {
		return [];
	}
}
function mapOrder(row) {
	return {
		id: row.id,
		trackToken: row.track_token,
		customerId: row.customer_id,
		customerName: row.customer_name,
		phone: row.phone,
		address: row.address,
		zone: row.zone,
		originLat: Number(row.origin_lat),
		originLng: Number(row.origin_lng),
		destLat: Number(row.dest_lat),
		destLng: Number(row.dest_lng),
		notes: row.notes,
		pay: row.pay,
		receiptName: row.receipt_name,
		status: row.status,
		total: Number(row.total),
		items: parseItems(row.items_json),
		etaMin: Number(row.eta_min),
		courierName: row.courier_name,
		createdAt: asIso(row.created_at) ?? (/* @__PURE__ */ new Date()).toISOString(),
		updatedAt: asIso(row.updated_at) ?? (/* @__PURE__ */ new Date()).toISOString(),
		dispatchedAt: asIso(row.dispatched_at),
		deliveredAt: asIso(row.delivered_at)
	};
}
async function requireStaff() {
	const { requireStaff: check } = await import("./staff-session-CKHucnaz.mjs");
	check();
}
function dbFail(err) {
	const msg = err instanceof Error ? err.message : String(err);
	console.error("[ops] db", err);
	if (/ENOENT|pglite|ECONNREFUSED|connect|DATABASE/i.test(msg)) throw new Error("A casa não consegue ligar à base neste momento. Tenta de novo daqui a um instante.");
	throw err instanceof Error ? err : new Error(msg);
}
async function sqlReady() {
	try {
		const sql = await getSql();
		await ensureSeeded(sql);
		return sql;
	} catch (err) {
		dbFail(err);
	}
}
function newId(prefix) {
	const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
	return `${prefix}${Date.now().toString(36).toUpperCase()}${rand}`;
}
function newTicketId(date = /* @__PURE__ */ new Date()) {
	return `SS-${String(date.getFullYear()).slice(2)}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
}
function newToken() {
	return `ss${Math.random().toString(36).slice(2, 10)}${Math.random().toString(36).slice(2, 8)}`;
}
function pick(arr, i) {
	return arr[i % arr.length];
}
async function addEvent(sql, orderId, status, note, at) {
	if (at) await sql`insert into order_events (order_id, status, note, created_at) values (${orderId}, ${status}, ${note}, ${at})`;
	else await sql`insert into order_events (order_id, status, note) values (${orderId}, ${status}, ${note})`;
}
async function toPublic(sql, row) {
	const order = mapOrder(row);
	const events = await sql`select status, note, created_at from order_events where order_id = ${order.id} order by created_at asc`;
	const progress = routeProgress(order);
	return {
		id: order.id,
		status: order.status,
		createdAt: order.createdAt,
		updatedAt: order.updatedAt,
		dispatchedAt: order.dispatchedAt,
		deliveredAt: order.deliveredAt,
		etaMin: order.etaMin,
		remainingMin: remainingMinutes(order),
		courierName: order.courierName,
		customerFirst: firstName(order.customerName),
		zone: order.zone,
		address: order.address,
		origin: {
			lat: order.originLat,
			lng: order.originLng,
			name: KITCHEN.name,
			zone: KITCHEN.zone
		},
		dest: {
			lat: order.destLat,
			lng: order.destLng,
			name: order.address,
			zone: order.zone
		},
		progress,
		items: order.items,
		total: order.total,
		pay: order.pay,
		events: events.map((e) => ({
			status: e.status,
			note: e.note,
			createdAt: asIso(e.created_at) ?? order.createdAt
		}))
	};
}
async function ensureSeeded(sql) {
	const count = await sql`select count(*)::int as n from orders`;
	if (Number(count[0]?.n ?? 0) > 0) return;
	try {
		await seedOps(sql);
	} catch (err) {
		console.error("[ops] seed failed", err);
		throw err;
	}
}
async function seedOps(sql) {
	const now = Date.now();
	const products = [
		[{
			id: "SS-OUR-45",
			name: "Combinado Ouro 45",
			qty: 1,
			unit: 28e3,
			total: 28e3
		}, {
			id: "SS-BEB-01",
			name: "Água das Pedras",
			qty: 2,
			unit: 1500,
			total: 3e3
		}],
		[{
			id: "SS-ASN-77",
			name: "Sete Sete 77",
			qty: 1,
			unit: 32e3,
			total: 32e3
		}],
		[{
			id: "SS-MES-16",
			name: "Combinado Mesa 16",
			qty: 1,
			unit: 14e3,
			total: 14e3
		}, {
			id: "SS-HOT-01",
			name: "Hot Filadélfia",
			qty: 1,
			unit: 6500,
			total: 6500
		}],
		[{
			id: "SS-URA-01",
			name: "Uramaki salmão",
			qty: 2,
			unit: 5500,
			total: 11e3
		}, {
			id: "SS-NIG-01",
			name: "Nigiri salmão",
			qty: 4,
			unit: 1800,
			total: 7200
		}],
		[
			{
				id: "SS-ENT-01",
				name: "Gyoza",
				qty: 1,
				unit: 4500,
				total: 4500
			},
			{
				id: "SS-TEM-01",
				name: "Temaki salmão",
				qty: 2,
				unit: 3500,
				total: 7e3
			},
			{
				id: "SS-DOC-01",
				name: "Mochi",
				qty: 2,
				unit: 2500,
				total: 5e3
			}
		]
	];
	const seeds = [
		{
			token: "sete-ilha-77",
			name: "Nzinga Costa",
			phone: "+244 923 110 077",
			zone: "Ilha de Luanda",
			address: "Ilha de Luanda, junto ao Mussulo Gourmet",
			status: "out",
			hoursAgo: .35,
			pay: "mcx",
			items: products[0],
			tags: ["vip", "recorrente"],
			courier: "Nélson"
		},
		{
			token: "sete-ouro-77",
			name: "João Manuel",
			phone: "+244 912 441 208",
			zone: "Talatona",
			address: "Condomínio Belas Business, Talatona",
			status: "preparing",
			hoursAgo: .2,
			pay: "mcx",
			items: products[1],
			tags: ["empresa", "recorrente"]
		},
		{
			token: "sete-mesa-77",
			name: "Rosa Ferreira",
			phone: "+244 935 882 441",
			zone: "Kilamba",
			address: "Centralidade do Kilamba, Q. 44",
			status: "delivered",
			hoursAgo: 18,
			pay: "cash",
			items: products[2],
			tags: ["recorrente"],
			courier: "Rosa"
		},
		{
			token: "sete-maianga-77",
			name: "Miguel dos Santos",
			phone: "+244 922 008 331",
			zone: "Maianga",
			address: "Maianga, rua da Missão",
			status: "ready",
			hoursAgo: .45,
			pay: "transfer",
			items: products[3],
			tags: ["novo"]
		},
		{
			token: "sete-alvalade-77",
			name: "Aisha Bernardo",
			phone: "+244 941 773 015",
			zone: "Alvalade",
			address: "Alvalade, prédio da contemporânea",
			status: "nearby",
			hoursAgo: .7,
			pay: "mcx",
			items: products[4],
			tags: ["vip"],
			courier: "Marta"
		}
	];
	const extras = [
		{
			name: "Paulo Tavares",
			phone: "+244 926 554 019",
			zone: "Benfica",
			address: "Benfica, rua principal",
			status: "delivered",
			hoursAgo: 6,
			pay: "mcx",
			tags: ["recorrente"]
		},
		{
			name: "Carla Domingos",
			phone: "+244 931 220 448",
			zone: "Camama",
			address: "Camama, condomínio Sol",
			status: "delivered",
			hoursAgo: 26,
			pay: "cash",
			tags: ["novo"]
		},
		{
			name: "Hélder Silva",
			phone: "+244 944 119 200",
			zone: "Gamek",
			address: "Gamek, atrás do mercado",
			status: "delivered",
			hoursAgo: 30,
			pay: "mcx",
			tags: ["recorrente", "empresa"]
		},
		{
			name: "Inês Mateus",
			phone: "+244 915 667 831",
			zone: "Miramar",
			address: "Miramar, avenida da praia",
			status: "delivered",
			hoursAgo: 44,
			pay: "transfer",
			tags: ["vip"]
		},
		{
			name: "Bruno Cajá",
			phone: "+244 928 304 112",
			zone: "Viana",
			address: "Viana, zona industrial",
			status: "delivered",
			hoursAgo: 52,
			pay: "mcx",
			tags: ["winback"]
		},
		{
			name: "Sónia Leal",
			phone: "+244 937 881 004",
			zone: "Samba",
			address: "Samba, próximo da Marginal",
			status: "delivered",
			hoursAgo: 70,
			pay: "cash",
			tags: ["recorrente"]
		},
		{
			name: "Dário Campos",
			phone: "+244 921 450 776",
			zone: "Patriota",
			address: "Patriota, rua 12",
			status: "cancelled",
			hoursAgo: 8,
			pay: "mcx",
			tags: ["novo"]
		},
		{
			name: "Nzinga Costa",
			phone: "+244 923 110 077",
			zone: "Ilha de Luanda",
			address: "Ilha de Luanda, apt. 7",
			status: "delivered",
			hoursAgo: 96,
			pay: "mcx",
			tags: ["vip", "recorrente"]
		},
		{
			name: "João Manuel",
			phone: "+244 912 441 208",
			zone: "Talatona",
			address: "Talatona, Belas",
			status: "delivered",
			hoursAgo: 120,
			pay: "mcx",
			tags: ["empresa"]
		},
		{
			name: "Rosa Ferreira",
			phone: "+244 935 882 441",
			zone: "Kilamba",
			address: "Kilamba, Q. 12",
			status: "delivered",
			hoursAgo: 140,
			pay: "cash",
			tags: ["recorrente"]
		},
		{
			name: "Aisha Bernardo",
			phone: "+244 941 773 015",
			zone: "Alvalade",
			address: "Alvalade",
			status: "delivered",
			hoursAgo: 10,
			pay: "mcx",
			tags: ["vip"]
		},
		{
			name: "Paulo Tavares",
			phone: "+244 926 554 019",
			zone: "Benfica",
			address: "Benfica",
			status: "delivered",
			hoursAgo: 168,
			pay: "mcx",
			tags: ["recorrente"]
		},
		{
			name: "Carla Domingos",
			phone: "+244 931 220 448",
			zone: "Camama",
			address: "Camama",
			status: "delivered",
			hoursAgo: 4,
			pay: "transfer",
			tags: ["novo"]
		},
		{
			name: "Miguel dos Santos",
			phone: "+244 922 008 331",
			zone: "Maianga",
			address: "Maianga",
			status: "confirmed",
			hoursAgo: .15,
			pay: "mcx",
			tags: ["novo"]
		},
		{
			name: "Inês Mateus",
			phone: "+244 915 667 831",
			zone: "Miramar",
			address: "Miramar",
			status: "received",
			hoursAgo: .08,
			pay: "cash",
			tags: ["vip"]
		}
	];
	const all = [...seeds, ...extras.map((e, i) => ({
		...e,
		token: `seed-${i}-${Math.random().toString(36).slice(2, 7)}`,
		items: products[i % products.length]
	}))];
	for (const s of all) {
		const phoneKey = digitsPhone(s.phone);
		const customerId = `c_${phoneKey}`;
		const zone = resolveZone(s.zone);
		const dest = jitter(zone, s.phone + s.hoursAgo);
		const total = s.items.reduce((n, l) => n + l.total, 0);
		const created = /* @__PURE__ */ new Date(now - s.hoursAgo * 3600 * 1e3);
		const eta = estimateEtaMin(zone, 16);
		if ((await sql`select id from customers where id = ${customerId}`).length === 0) await sql`insert into customers (id, phone, name, zone, notes, tags, created_at, last_order_at)
        values (${customerId}, ${s.phone}, ${s.name}, ${zone.name}, ${s.notes ?? ""}, ${JSON.stringify(s.tags)}, ${iso(created)}, ${iso(created)})`;
		else await sql`update customers set last_order_at = ${iso(created)}, zone = ${zone.name}, tags = ${JSON.stringify(s.tags)}
        where id = ${customerId} and (last_order_at is null or last_order_at < ${iso(created)})`;
		const orderId = newTicketId(created);
		const dispatched = s.status === "out" || s.status === "nearby" || s.status === "delivered" ? new Date(created.getTime() + 108e4) : null;
		const delivered = s.status === "delivered" ? new Date(created.getTime() + eta * 6e4) : null;
		const courier = s.courier ?? (s.status === "out" || s.status === "nearby" || s.status === "delivered" ? pick(COURIERS, phoneKey.length) : null);
		await sql`insert into orders (
      id, track_token, customer_id, customer_name, phone, address, zone,
      origin_lat, origin_lng, dest_lat, dest_lng, notes, pay, receipt_name,
      status, total, items_json, eta_min, courier_name, created_at, updated_at,
      dispatched_at, delivered_at
    ) values (
      ${orderId}, ${s.token}, ${customerId}, ${s.name}, ${s.phone}, ${s.address}, ${zone.name},
      ${KITCHEN.lat}, ${KITCHEN.lng}, ${dest.lat}, ${dest.lng}, ${s.notes ?? ""}, ${s.pay}, ${null},
      ${s.status}, ${total}, ${JSON.stringify(s.items)}, ${eta}, ${courier}, ${iso(created)}, ${iso(delivered ?? dispatched ?? created)},
      ${dispatched ? iso(dispatched) : null}, ${delivered ? iso(delivered) : null}
    )`;
		const flowNotes = {
			received: "Pedido chegou pelo site.",
			confirmed: "Casa confirmou zona e frescura.",
			preparing: "Cozinha a montar.",
			ready: "Pronto para o estafeta.",
			out: `Saiu da ${KITCHEN.name}.`,
			nearby: "Estafeta na zona.",
			delivered: "Entregue no destino.",
			cancelled: "Cancelado pela casa."
		};
		const chain = s.status === "cancelled" ? ["received", "cancelled"] : [
			"received",
			"confirmed",
			"preparing",
			"ready",
			"out",
			"nearby",
			"delivered"
		].slice(0, [
			"received",
			"confirmed",
			"preparing",
			"ready",
			"out",
			"nearby",
			"delivered"
		].indexOf(s.status) + 1);
		for (let i = 0; i < chain.length; i++) {
			const st = chain[i];
			const at = new Date(created.getTime() + i * 7 * 6e4);
			await addEvent(sql, orderId, st, flowNotes[st] ?? "", iso(at));
		}
	}
	await sql`insert into crm_notes (customer_id, body, author, created_at) values
    (${"c_244923110077"}, ${"Prefere hashi extra. Sem wasabi forte."}, ${"Casa"}, ${iso(/* @__PURE__ */ new Date(now - 324e6))}),
    (${"c_244912441208"}, ${"Conta empresa — fatura no final do mês."}, ${"Casa"}, ${iso(/* @__PURE__ */ new Date(now - 144e6))}),
    (${"c_244941773015"}, ${"Aniversário a 22. Enviar combinado Ouro."}, ${"Casa"}, ${iso(/* @__PURE__ */ new Date(now - 432e5))})`;
}
var itemSchema = object({
	id: string(),
	name: string(),
	qty: number(),
	unit: number(),
	total: number()
});
var createOrder_createServerFn_handler = createServerRpc({
	id: "11c6341857a1ee251e4eef9540515c357a225e8c38a47aebccae25391d044334",
	name: "createOrder",
	filename: "src/lib/ops.functions.ts"
}, (opts) => createOrder.__executeServer(opts));
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
})).handler(createOrder_createServerFn_handler, async ({ data }) => {
	const sql = await sqlReady();
	const zone = zoneById(data.zone) ?? resolveZone(data.zone);
	const dest = jitter(zone, data.phone + data.id);
	const customerId = `c_${digitsPhone(data.phone) || newId("c")}`;
	const now = iso(/* @__PURE__ */ new Date());
	const eta = estimateEtaMin(zone);
	const token = newToken();
	const existing = await sql`select * from customers where id = ${customerId}`;
	if (existing.length === 0) await sql`insert into customers (id, phone, name, zone, notes, tags, created_at, last_order_at)
        values (${customerId}, ${data.phone}, ${data.name}, ${zone.name}, ${""}, ${JSON.stringify(["novo"])}, ${now}, ${now})`;
	else {
		const tags = parseTags(existing[0].tags).filter((t) => t !== "novo");
		if (!tags.includes("recorrente")) tags.push("recorrente");
		await sql`update customers set name = ${data.name}, phone = ${data.phone}, zone = ${zone.name},
        last_order_at = ${now}, tags = ${JSON.stringify(tags)} where id = ${customerId}`;
	}
	await sql`insert into orders (
      id, track_token, customer_id, customer_name, phone, address, zone,
      origin_lat, origin_lng, dest_lat, dest_lng, notes, pay, receipt_name,
      status, total, items_json, eta_min, courier_name, created_at, updated_at
    ) values (
      ${data.id}, ${token}, ${customerId}, ${data.name}, ${data.phone}, ${data.address}, ${zone.name},
      ${KITCHEN.lat}, ${KITCHEN.lng}, ${dest.lat}, ${dest.lng}, ${data.notes ?? ""}, ${data.pay}, ${data.receiptName ?? null},
      ${"received"}, ${data.total}, ${JSON.stringify(data.items)}, ${eta}, ${null}, ${now}, ${now}
    )`;
	await addEvent(sql, data.id, "received", "Pedido chegou pelo site.");
	return {
		id: data.id,
		trackToken: token,
		etaMin: eta,
		zone: zone.name
	};
});
var getTracking_createServerFn_handler = createServerRpc({
	id: "d627379a4d98ecb8e3212ac780d733a1d11b14a29540cd19dbdd84ce8325c95d",
	name: "getTracking",
	filename: "src/lib/ops.functions.ts"
}, (opts) => getTracking.__executeServer(opts));
var getTracking = createServerFn({ method: "GET" }).validator(object({ token: string().min(4).max(64) })).handler(getTracking_createServerFn_handler, async ({ data }) => {
	const sql = await sqlReady();
	const rows = await sql`select * from orders where track_token = ${data.token} limit 1`;
	if (!rows[0]) return null;
	return toPublic(sql, rows[0]);
});
var lookupInvoice_createServerFn_handler = createServerRpc({
	id: "e515a5316d5514e368ede5d8784f624e8ea3b99a4966c526048704b2e43e13a2",
	name: "lookupInvoice",
	filename: "src/lib/ops.functions.ts"
}, (opts) => lookupInvoice.__executeServer(opts));
var lookupInvoice = createServerFn({ method: "GET" }).validator(object({ id: string().min(4).max(40) })).handler(lookupInvoice_createServerFn_handler, async ({ data }) => {
	const rows = await (await sqlReady())`select track_token from orders where id = ${data.id.trim()} limit 1`;
	if (!rows[0]) return null;
	return { token: rows[0].track_token };
});
var staffSession_createServerFn_handler = createServerRpc({
	id: "79a74620f11d52b09dab3190235f823d72a062cbb2de8d98ef0ff69d2e580752",
	name: "staffSession",
	filename: "src/lib/ops.functions.ts"
}, (opts) => staffSession.__executeServer(opts));
var staffSession = createServerFn({ method: "GET" }).handler(staffSession_createServerFn_handler, async () => {
	const { readStaffSession } = await import("./staff-session-CKHucnaz.mjs");
	return { ok: readStaffSession() };
});
var loginStaff_createServerFn_handler = createServerRpc({
	id: "e0cbcdf52944b73080fce02cf0b1dd8db663c2faad14c826b3e0ee9ce975ecce",
	name: "loginStaff",
	filename: "src/lib/ops.functions.ts"
}, (opts) => loginStaff.__executeServer(opts));
var loginStaff = createServerFn({ method: "POST" }).validator(object({
	user: string().min(1).max(40),
	password: string().min(1).max(80)
})).handler(loginStaff_createServerFn_handler, async ({ data }) => {
	const { attemptStaffLogin } = await import("./staff-session-CKHucnaz.mjs");
	return attemptStaffLogin(data.user, data.password);
});
var logoutStaff_createServerFn_handler = createServerRpc({
	id: "3bd9e2fc61f7beb23b256763511a4d8841ff054eae7fd350f28d4cf652d9a62e",
	name: "logoutStaff",
	filename: "src/lib/ops.functions.ts"
}, (opts) => logoutStaff.__executeServer(opts));
var logoutStaff = createServerFn({ method: "POST" }).handler(logoutStaff_createServerFn_handler, async () => {
	const { clearStaffCookie } = await import("./staff-session-CKHucnaz.mjs");
	clearStaffCookie();
	return { ok: true };
});
var listOrders_createServerFn_handler = createServerRpc({
	id: "0c5b4f45e7b0de6f73386fe666c1bc79cf68a0cf6fb77d3fb92be54819fe3ea4",
	name: "listOrders",
	filename: "src/lib/ops.functions.ts"
}, (opts) => listOrders.__executeServer(opts));
var listOrders = createServerFn({ method: "GET" }).validator(object({ status: string().optional() })).handler(listOrders_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	const sql = await sqlReady();
	return (data.status ? await sql`select * from orders where status = ${data.status} order by created_at desc` : await sql`select * from orders order by created_at desc`).map(mapOrder);
});
var getOrder_createServerFn_handler = createServerRpc({
	id: "8778c2fb72152c901880a9404219b9aa85b0c397742a534686814f45c7286b75",
	name: "getOrder",
	filename: "src/lib/ops.functions.ts"
}, (opts) => getOrder.__executeServer(opts));
var getOrder = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(getOrder_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	const sql = await sqlReady();
	const rows = await sql`select * from orders where id = ${data.id} limit 1`;
	if (!rows[0]) return null;
	const pub = await toPublic(sql, rows[0]);
	return {
		...mapOrder(rows[0]),
		events: pub.events,
		progress: pub.progress,
		remainingMin: pub.remainingMin
	};
});
var setOrderStatus_createServerFn_handler = createServerRpc({
	id: "ec3a65fc64e19e0f916933be1ddf639951cb66c4565b2653b3fa35dfa437b8d9",
	name: "setOrderStatus",
	filename: "src/lib/ops.functions.ts"
}, (opts) => setOrderStatus.__executeServer(opts));
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
})).handler(setOrderStatus_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	const sql = await sqlReady();
	const rows = await sql`select * from orders where id = ${data.id} limit 1`;
	if (!rows[0]) throw new Error("Encomenda não encontrada.");
	const now = iso(/* @__PURE__ */ new Date());
	let courier = rows[0].courier_name;
	let dispatched = asIso(rows[0].dispatched_at);
	let delivered = asIso(rows[0].delivered_at);
	if (data.status === "out" || data.status === "nearby") {
		if (!courier) courier = pick(COURIERS, data.id.length);
		if (!dispatched) dispatched = now;
	}
	if (data.status === "delivered") {
		if (!courier) courier = pick(COURIERS, data.id.length);
		if (!dispatched) dispatched = now;
		delivered = now;
	}
	await sql`update orders set status = ${data.status}, updated_at = ${now},
      courier_name = ${courier}, dispatched_at = ${dispatched}, delivered_at = ${delivered}
      where id = ${data.id}`;
	const note = data.note || (data.status === "out" ? `Saiu da ${KITCHEN.name} · estafeta ${courier}.` : data.status === "delivered" ? "Entregue no destino B." : "");
	await addEvent(sql, data.id, data.status, note);
	return mapOrder((await sql`select * from orders where id = ${data.id} limit 1`)[0]);
});
var listCustomers_createServerFn_handler = createServerRpc({
	id: "5e27cfefe075d717913eb60f7c1605ea77d90f9171de6d59c02b04f17a95daec",
	name: "listCustomers",
	filename: "src/lib/ops.functions.ts"
}, (opts) => listCustomers.__executeServer(opts));
var listCustomers = createServerFn({ method: "GET" }).validator(object({
	q: string().optional().default(""),
	tag: string().optional().default("")
})).handler(listCustomers_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	const sql = await sqlReady();
	const rows = await sql`select * from customers order by last_order_at desc, created_at desc`;
	const stats = await sql`select customer_id, count(*)::int as n, coalesce(sum(total),0)::int as spent
      from orders where status <> 'cancelled' group by customer_id`;
	const byId = new Map(stats.map((s) => [s.customer_id, s]));
	const q = data.q.trim().toLowerCase();
	return rows.map((r) => {
		const st = byId.get(r.id);
		return {
			id: r.id,
			phone: r.phone,
			name: r.name,
			zone: r.zone,
			notes: r.notes,
			tags: parseTags(r.tags),
			createdAt: asIso(r.created_at) ?? "",
			lastOrderAt: asIso(r.last_order_at),
			orderCount: st?.n ?? 0,
			spent: st?.spent ?? 0
		};
	}).filter((c) => {
		if (data.tag && !c.tags.includes(data.tag)) return false;
		if (!q) return true;
		return c.name.toLowerCase().includes(q) || c.phone.toLowerCase().includes(q) || c.zone.toLowerCase().includes(q);
	});
});
var getCustomer_createServerFn_handler = createServerRpc({
	id: "cdb11cfaec30595307b256d953f3ee15f1ed64ec2e11191087f75a2c663736f8",
	name: "getCustomer",
	filename: "src/lib/ops.functions.ts"
}, (opts) => getCustomer.__executeServer(opts));
var getCustomer = createServerFn({ method: "GET" }).validator(object({ id: string() })).handler(getCustomer_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	const sql = await sqlReady();
	const rows = await sql`select * from customers where id = ${data.id} limit 1`;
	if (!rows[0]) return null;
	const r = rows[0];
	const orders = await sql`select * from orders where customer_id = ${r.id} order by created_at desc`;
	const notes = await sql`select id, body, author, created_at from crm_notes where customer_id = ${r.id} order by created_at desc`;
	const mapped = orders.map(mapOrder);
	const spent = mapped.filter((o) => o.status !== "cancelled").reduce((n, o) => n + o.total, 0);
	return {
		id: r.id,
		phone: r.phone,
		name: r.name,
		zone: r.zone,
		notes: r.notes,
		tags: parseTags(r.tags),
		createdAt: asIso(r.created_at) ?? "",
		lastOrderAt: asIso(r.last_order_at),
		orderCount: mapped.filter((o) => o.status !== "cancelled").length,
		spent,
		orders: mapped,
		crmNotes: notes.map((n) => ({
			id: n.id,
			body: n.body,
			author: n.author,
			createdAt: asIso(n.created_at) ?? ""
		}))
	};
});
var upsertCustomer_createServerFn_handler = createServerRpc({
	id: "0cdb5d236ddea06eef815ba38f4d3edfcdb72a921b66f012e705cc8d39c72f7f",
	name: "upsertCustomer",
	filename: "src/lib/ops.functions.ts"
}, (opts) => upsertCustomer.__executeServer(opts));
var upsertCustomer = createServerFn({ method: "POST" }).validator(object({
	name: string().min(2).max(80),
	phone: string().min(6).max(24),
	zone: string().max(40).optional().default(""),
	notes: string().max(400).optional().default(""),
	tags: array(string()).optional().default([])
})).handler(upsertCustomer_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	const sql = await sqlReady();
	const id = `c_${digitsPhone(data.phone) || newId("c")}`;
	const now = iso(/* @__PURE__ */ new Date());
	const existing = await sql`select id from customers where id = ${id}`;
	const zone = data.zone ? resolveZone(data.zone).name : "";
	if (existing.length === 0) await sql`insert into customers (id, phone, name, zone, notes, tags, created_at)
        values (${id}, ${data.phone}, ${data.name}, ${zone}, ${data.notes ?? ""}, ${JSON.stringify(data.tags ?? [])}, ${now})`;
	else await sql`update customers set name = ${data.name}, phone = ${data.phone}, zone = ${zone},
        notes = ${data.notes ?? ""}, tags = ${JSON.stringify(data.tags ?? [])} where id = ${id}`;
	return { id };
});
var addCrmNote_createServerFn_handler = createServerRpc({
	id: "4f32623444f4033dd479dde7c76fedbbad1de4ed0c67e741c782f27b8d01a5c7",
	name: "addCrmNote",
	filename: "src/lib/ops.functions.ts"
}, (opts) => addCrmNote.__executeServer(opts));
var addCrmNote = createServerFn({ method: "POST" }).validator(object({
	customerId: string(),
	body: string().min(2).max(400),
	author: string().max(40).optional().default("Casa")
})).handler(addCrmNote_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	await (await sqlReady())`insert into crm_notes (customer_id, body, author) values (${data.customerId}, ${data.body}, ${data.author ?? "Casa"})`;
	return { ok: true };
});
var setCustomerTags_createServerFn_handler = createServerRpc({
	id: "eefcfaafa17efdfec84dbeae27272d2bbbb5c5587f79c3641f48b45198c9dbf8",
	name: "setCustomerTags",
	filename: "src/lib/ops.functions.ts"
}, (opts) => setCustomerTags.__executeServer(opts));
var setCustomerTags = createServerFn({ method: "POST" }).validator(object({
	id: string(),
	tags: array(string())
})).handler(setCustomerTags_createServerFn_handler, async ({ data }) => {
	await requireStaff();
	await (await sqlReady())`update customers set tags = ${JSON.stringify(data.tags)} where id = ${data.id}`;
	return { ok: true };
});
var getDashboard_createServerFn_handler = createServerRpc({
	id: "94cce137d1a8b85daeda3e302dde493adbb756b985840516409e2461f470aec5",
	name: "getDashboard",
	filename: "src/lib/ops.functions.ts"
}, (opts) => getDashboard.__executeServer(opts));
var getDashboard = createServerFn({ method: "GET" }).handler(getDashboard_createServerFn_handler, async () => {
	await requireStaff();
	const sql = await sqlReady();
	const orders = (await sql`select * from orders`).map(mapOrder);
	const customers = await sql`select * from customers`;
	const startToday = /* @__PURE__ */ new Date(/* @__PURE__ */ new Date());
	startToday.setHours(0, 0, 0, 0);
	const dayMs = 864e5;
	const today = orders.filter((o) => new Date(o.createdAt) >= startToday);
	const todayOk = today.filter((o) => o.status !== "cancelled");
	const revenue = todayOk.reduce((n, o) => n + o.total, 0);
	const inFlight = orders.filter((o) => [
		"received",
		"confirmed",
		"preparing",
		"ready",
		"out",
		"nearby"
	].includes(o.status));
	const delivered = orders.filter((o) => o.status === "delivered");
	const cycles = delivered.map((o) => {
		if (!o.deliveredAt) return null;
		return (new Date(o.deliveredAt).getTime() - new Date(o.createdAt).getTime()) / 6e4;
	}).filter((n) => n !== null);
	const cycleMin = cycles.length ? Math.round(cycles.reduce((a, b) => a + b, 0) / cycles.length) : 0;
	const onTime = delivered.filter((o) => {
		if (!o.deliveredAt) return false;
		return (new Date(o.deliveredAt).getTime() - new Date(o.createdAt).getTime()) / 6e4 <= o.etaMin + 8;
	}).length;
	const onTimePct = delivered.length ? Math.round(onTime / delivered.length * 100) : 0;
	const byCustomer = /* @__PURE__ */ new Map();
	for (const o of orders) {
		if (o.status === "cancelled") continue;
		byCustomer.set(o.customerId, (byCustomer.get(o.customerId) ?? 0) + 1);
	}
	const repeatCustomers = [...byCustomer.values()].filter((n) => n >= 2).length;
	const repeatPct = byCustomer.size ? Math.round(repeatCustomers / byCustomer.size * 100) : 0;
	const hourly = Array.from({ length: 11 }, (_, i) => {
		const hour = 12 + i;
		const count = today.filter((o) => new Date(o.createdAt).getHours() === hour).length;
		return {
			hour,
			label: `${hour}h`,
			count
		};
	});
	const daily = Array.from({ length: 14 }, (_, i) => {
		const d = /* @__PURE__ */ new Date(startToday.getTime() - (13 - i) * dayMs);
		const next = new Date(d.getTime() + dayMs);
		const slice = orders.filter((o) => {
			const t = new Date(o.createdAt).getTime();
			return t >= d.getTime() && t < next.getTime() && o.status !== "cancelled";
		});
		return {
			day: d.toISOString().slice(5, 10),
			orders: slice.length,
			revenue: slice.reduce((n, o) => n + o.total, 0)
		};
	});
	const productMap = /* @__PURE__ */ new Map();
	for (const o of orders) {
		if (o.status === "cancelled") continue;
		for (const it of o.items) {
			const cur = productMap.get(it.id) ?? {
				name: it.name,
				qty: 0,
				revenue: 0
			};
			cur.qty += it.qty;
			cur.revenue += it.total;
			productMap.set(it.id, cur);
		}
	}
	const topProducts = [...productMap.values()].sort((a, b) => b.revenue - a.revenue).slice(0, 6);
	const zoneMap = /* @__PURE__ */ new Map();
	for (const o of orders) {
		if (o.status === "cancelled") continue;
		const cur = zoneMap.get(o.zone) ?? {
			zone: o.zone,
			orders: 0,
			revenue: 0
		};
		cur.orders += 1;
		cur.revenue += o.total;
		zoneMap.set(o.zone, cur);
	}
	const zones = [...zoneMap.values()].sort((a, b) => b.orders - a.orders);
	const payMap = /* @__PURE__ */ new Map();
	for (const o of orders) {
		if (o.status === "cancelled") continue;
		const cur = payMap.get(o.pay) ?? {
			pay: o.pay,
			count: 0,
			revenue: 0
		};
		cur.count += 1;
		cur.revenue += o.total;
		payMap.set(o.pay, cur);
	}
	const spentBy = /* @__PURE__ */ new Map();
	for (const o of orders) {
		if (o.status === "cancelled") continue;
		const cur = spentBy.get(o.customerId) ?? {
			spent: 0,
			n: 0
		};
		cur.spent += o.total;
		cur.n += 1;
		spentBy.set(o.customerId, cur);
	}
	const vip = customers.map((c) => {
		const st = spentBy.get(c.id);
		return {
			id: c.id,
			name: c.name,
			zone: c.zone,
			spent: st?.spent ?? 0,
			orders: st?.n ?? 0,
			lastOrderAt: asIso(c.last_order_at)
		};
	}).sort((a, b) => b.spent - a.spent).slice(0, 5);
	const winback = customers.map((c) => ({
		id: c.id,
		name: c.name,
		zone: c.zone,
		lastOrderAt: asIso(c.last_order_at),
		spent: spentBy.get(c.id)?.spent ?? 0
	})).filter((c) => {
		if (!c.lastOrderAt) return false;
		return (Date.now() - new Date(c.lastOrderAt).getTime()) / dayMs >= 10;
	}).sort((a, b) => (a.lastOrderAt ?? "").localeCompare(b.lastOrderAt ?? "")).slice(0, 5);
	const live = {
		received: orders.filter((o) => o.status === "received" || o.status === "confirmed").length,
		preparing: orders.filter((o) => o.status === "preparing").length,
		ready: orders.filter((o) => o.status === "ready").length,
		out: orders.filter((o) => o.status === "out" || o.status === "nearby").length
	};
	const new7 = customers.filter((c) => {
		const t = asIso(c.created_at);
		return t ? Date.now() - new Date(t).getTime() < 7 * dayMs : false;
	}).length;
	return {
		today: {
			orders: today.length,
			revenue,
			avgTicket: todayOk.length ? Math.round(revenue / todayOk.length) : 0,
			inFlight: inFlight.length,
			delivered: today.filter((o) => o.status === "delivered").length,
			cancelled: today.filter((o) => o.status === "cancelled").length
		},
		kpis: {
			cycleMin,
			onTimePct,
			repeatPct,
			customers: customers.length,
			new7
		},
		hourly,
		daily,
		topProducts,
		zones,
		payMix: [...payMap.values()],
		live,
		vip,
		winback
	};
});
//#endregion
export { addCrmNote_createServerFn_handler, createOrder_createServerFn_handler, getCustomer_createServerFn_handler, getDashboard_createServerFn_handler, getOrder_createServerFn_handler, getTracking_createServerFn_handler, listCustomers_createServerFn_handler, listOrders_createServerFn_handler, loginStaff_createServerFn_handler, logoutStaff_createServerFn_handler, lookupInvoice_createServerFn_handler, setCustomerTags_createServerFn_handler, setOrderStatus_createServerFn_handler, staffSession_createServerFn_handler, upsertCustomer_createServerFn_handler };
