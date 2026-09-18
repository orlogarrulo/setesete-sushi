import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { getSql } from "@/lib/db";
import {
  COURIERS,
  digitsPhone,
  firstName,
  remainingMinutes,
  routeProgress,
  waDigits,
  type CourierRow,
  type CustomerRow,
  type OrderEvent,
  type OrderRow,
  type OrderStatus,
  type PublicTracking,
  type TicketItem,
} from "@/lib/ops";
import {
  estimateEtaMin,
  jitter,
  KITCHEN,
  resolveZone,
  zoneById,
} from "@/lib/geo";
import type { PayMethod } from "@/lib/utils";

type Sql = Awaited<ReturnType<typeof getSql>>;

type OrderDb = {
  id: string;
  track_token: string;
  customer_id: string;
  customer_name: string;
  phone: string;
  address: string;
  zone: string;
  origin_lat: number;
  origin_lng: number;
  dest_lat: number;
  dest_lng: number;
  notes: string;
  pay: string;
  receipt_name: string | null;
  pay_verified?: boolean | number | string | null;
  pay_verified_at?: string | null;
  status: string;
  total: number;
  items_json: string;
  eta_min: number;
  courier_name: string | null;
  courier_id?: string | null;
  rider_token?: string | null;
  created_at: string;
  updated_at: string;
  dispatched_at: string | null;
  delivered_at: string | null;
};

type CustomerDb = {
  id: string;
  phone: string;
  name: string;
  zone: string;
  notes: string;
  tags: string;
  created_at: string;
  last_order_at: string | null;
};

function iso(d: Date) {
  return d.toISOString();
}

function asIso(value: unknown) {
  if (!value) return null;
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

function parseItems(raw: string): TicketItem[] {
  try {
    const v = JSON.parse(raw) as TicketItem[];
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

function parseTags(raw: string): string[] {
  try {
    const v = JSON.parse(raw) as string[];
    return Array.isArray(v) ? v : [];
  } catch {
    return [];
  }
}

function mapOrder(row: OrderDb): OrderRow {
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
    pay: row.pay as PayMethod,
    receiptName: row.receipt_name,
    hasReceipt: Boolean(row.receipt_name),
    payVerified: Boolean(row.pay_verified),
    payVerifiedAt: asIso(row.pay_verified_at),
    status: row.status as OrderStatus,
    total: Number(row.total),
    items: parseItems(row.items_json),
    etaMin: Number(row.eta_min),
    courierName: row.courier_name,
    courierId: row.courier_id ?? null,
    riderToken: row.rider_token ?? "",
    createdAt: asIso(row.created_at) ?? new Date().toISOString(),
    updatedAt: asIso(row.updated_at) ?? new Date().toISOString(),
    dispatchedAt: asIso(row.dispatched_at),
    deliveredAt: asIso(row.delivered_at),
  };
}

async function requireStaff() {
  const { requireStaff: check } = await import("@/lib/staff-session");
  check();
}

function dbFail(err: unknown): never {
  const msg = err instanceof Error ? err.message : String(err);
  console.error("[ops] db", err);
  if (/ENOENT|pglite|ECONNREFUSED|connect|DATABASE/i.test(msg)) {
    throw new Error(
      "A casa não consegue ligar à base neste momento. Tenta de novo daqui a um instante.",
    );
  }
  throw err instanceof Error ? err : new Error(msg);
}

async function sqlReady() {
  try {
    const sql = await getSql();
    await ensureSeeded(sql);
    await backfillRiderTokens(sql);
    await ensureCouriers(sql);
    return sql;
  } catch (err) {
    dbFail(err);
  }
}

async function backfillRiderTokens(sql: Sql) {
  try {
    const rows = await sql<{ id: string; track_token: string }>`
      select id, track_token from orders where rider_token is null`;
    for (const r of rows) {
      const token = r.track_token.startsWith("sete-")
        ? `rd-${r.track_token}`
        : newRiderToken();
      await sql`update orders set rider_token = ${token} where id = ${r.id} and rider_token is null`;
    }
  } catch {
    /* column may not exist until migrate */
  }
}

function newId(prefix: string) {
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  const t = Date.now().toString(36).toUpperCase();
  return `${prefix}${t}${rand}`;
}

function newTicketId(date = new Date()) {
  const y = String(date.getFullYear()).slice(2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SS-${y}${m}${d}-${rand}`;
}

function newToken() {
  return `ss${Math.random().toString(36).slice(2, 10)}${Math.random().toString(36).slice(2, 8)}`;
}

function newRiderToken() {
  return `rd${Math.random().toString(36).slice(2, 10)}${Math.random().toString(36).slice(2, 8)}`;
}

async function ensureCouriers(sql: Sql) {
  try {
    await sql.query(`create table if not exists couriers (
      id text primary key,
      name text not null,
      phone text not null default '',
      active integer not null default 1,
      created_at timestamptz not null default now()
    )`);
    await sql.query(`alter table orders add column if not exists courier_id text`);
    await sql.query(`create index if not exists couriers_active_idx on couriers (active)`);
  } catch {
    /* ignore — migration 0005 covers a fresh boot */
  }
  try {
    const count = await sql<{ n: number }>`select count(*)::int as n from couriers`;
    if (Number(count[0]?.n ?? 0) > 0) return;
    for (const name of COURIERS) {
      const id = `cr_${name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()}`;
      await sql`insert into couriers (id, name, phone, active) values (${id}, ${name}, ${""}, ${1})`;
    }
  } catch {
    /* table may not exist until migrate */
  }
}

async function ensureRiderToken(sql: Sql, row: OrderDb): Promise<string> {
  if (row.rider_token) return row.rider_token;
  const token = newRiderToken();
  await sql`update orders set rider_token = ${token} where id = ${row.id} and rider_token is null`;
  const next = await sql<{ rider_token: string | null }>`select rider_token from orders where id = ${row.id}`;
  return next[0]?.rider_token ?? token;
}

function pick<T>(arr: readonly T[], i: number) {
  return arr[i % arr.length];
}

async function addEvent(
  sql: Sql,
  orderId: string,
  status: string,
  note: string,
  at?: string,
) {
  if (at) {
    await sql`insert into order_events (order_id, status, note, created_at) values (${orderId}, ${status}, ${note}, ${at})`;
  } else {
    await sql`insert into order_events (order_id, status, note) values (${orderId}, ${status}, ${note})`;
  }
}

async function toPublic(sql: Sql, row: OrderDb): Promise<PublicTracking> {
  const order = mapOrder(row);
  const events = await sql<{
    status: string;
    note: string;
    created_at: string;
  }>`select status, note, created_at from order_events where order_id = ${order.id} order by created_at asc`;
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
      zone: KITCHEN.zone,
    },
    dest: {
      lat: order.destLat,
      lng: order.destLng,
      name: order.address,
      zone: order.zone,
    },
    progress,
    items: order.items,
    total: order.total,
    pay: order.pay,
    events: events.map((e) => ({
      status: e.status as OrderStatus,
      note: e.note,
      createdAt: asIso(e.created_at) ?? order.createdAt,
    })) satisfies OrderEvent[],
  };
}

type SeedOrder = {
  token: string;
  name: string;
  phone: string;
  zone: string;
  address: string;
  status: OrderStatus;
  hoursAgo: number;
  pay: PayMethod;
  items: TicketItem[];
  tags: string[];
  notes?: string;
  courier?: string;
};

async function ensureSeeded(sql: Sql) {
  const count = await sql<{ n: number }>`select count(*)::int as n from orders`;
  if (Number(count[0]?.n ?? 0) > 0) return;
  try {
    await seedOps(sql);
  } catch (err) {
    console.error("[ops] seed failed", err);
    throw err;
  }
}

async function seedOps(sql: Sql) {

  const now = Date.now();
  const products: TicketItem[][] = [
    [
      { id: "SS-OUR-45", name: "Combinado Ouro 45", qty: 1, unit: 28000, total: 28000 },
      { id: "SS-BEB-01", name: "Água das Pedras", qty: 2, unit: 1500, total: 3000 },
    ],
    [
      { id: "SS-ASN-77", name: "Sete Sete 77", qty: 1, unit: 32000, total: 32000 },
    ],
    [
      { id: "SS-MES-16", name: "Combinado Mesa 16", qty: 1, unit: 14000, total: 14000 },
      { id: "SS-HOT-01", name: "Hot Filadélfia", qty: 1, unit: 6500, total: 6500 },
    ],
    [
      { id: "SS-URA-01", name: "Uramaki salmão", qty: 2, unit: 5500, total: 11000 },
      { id: "SS-NIG-01", name: "Nigiri salmão", qty: 4, unit: 1800, total: 7200 },
    ],
    [
      { id: "SS-ENT-01", name: "Gyoza", qty: 1, unit: 4500, total: 4500 },
      { id: "SS-TEM-01", name: "Temaki salmão", qty: 2, unit: 3500, total: 7000 },
      { id: "SS-DOC-01", name: "Mochi", qty: 2, unit: 2500, total: 5000 },
    ],
  ];

  const seeds: SeedOrder[] = [
    {
      token: "sete-ilha-77",
      name: "Nzinga Costa",
      phone: "+244 923 110 077",
      zone: "Ilha de Luanda",
      address: "Ilha de Luanda, junto ao Mussulo Gourmet",
      status: "out",
      hoursAgo: 0.35,
      pay: "mcx",
      items: products[0],
      tags: ["vip", "recorrente"],
      courier: "Nélson",
    },
    {
      token: "sete-ouro-77",
      name: "João Manuel",
      phone: "+244 912 441 208",
      zone: "Talatona",
      address: "Condomínio Belas Business, Talatona",
      status: "preparing",
      hoursAgo: 0.2,
      pay: "mcx",
      items: products[1],
      tags: ["empresa", "recorrente"],
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
      courier: "Rosa",
    },
    {
      token: "sete-maianga-77",
      name: "Miguel dos Santos",
      phone: "+244 922 008 331",
      zone: "Maianga",
      address: "Maianga, rua da Missão",
      status: "ready",
      hoursAgo: 0.45,
      pay: "transfer",
      items: products[3],
      tags: ["novo"],
    },
    {
      token: "sete-alvalade-77",
      name: "Aisha Bernardo",
      phone: "+244 941 773 015",
      zone: "Alvalade",
      address: "Alvalade, prédio da contemporânea",
      status: "nearby",
      hoursAgo: 0.7,
      pay: "mcx",
      items: products[4],
      tags: ["vip"],
      courier: "Marta",
    },
  ];

  const extras: Array<Omit<SeedOrder, "token" | "items"> & { hoursAgo: number }> = [
    { name: "Paulo Tavares", phone: "+244 926 554 019", zone: "Benfica", address: "Benfica, rua principal", status: "delivered", hoursAgo: 6, pay: "mcx", tags: ["recorrente"] },
    { name: "Carla Domingos", phone: "+244 931 220 448", zone: "Camama", address: "Camama, condomínio Sol", status: "delivered", hoursAgo: 26, pay: "cash", tags: ["novo"] },
    { name: "Hélder Silva", phone: "+244 944 119 200", zone: "Gamek", address: "Gamek, atrás do mercado", status: "delivered", hoursAgo: 30, pay: "mcx", tags: ["recorrente", "empresa"] },
    { name: "Inês Mateus", phone: "+244 915 667 831", zone: "Miramar", address: "Miramar, avenida da praia", status: "delivered", hoursAgo: 44, pay: "transfer", tags: ["vip"] },
    { name: "Bruno Cajá", phone: "+244 928 304 112", zone: "Viana", address: "Viana, zona industrial", status: "delivered", hoursAgo: 52, pay: "mcx", tags: ["winback"] },
    { name: "Sónia Leal", phone: "+244 937 881 004", zone: "Samba", address: "Samba, próximo da Marginal", status: "delivered", hoursAgo: 70, pay: "cash", tags: ["recorrente"] },
    { name: "Dário Campos", phone: "+244 921 450 776", zone: "Patriota", address: "Patriota, rua 12", status: "cancelled", hoursAgo: 8, pay: "mcx", tags: ["novo"] },
    { name: "Nzinga Costa", phone: "+244 923 110 077", zone: "Ilha de Luanda", address: "Ilha de Luanda, apt. 7", status: "delivered", hoursAgo: 96, pay: "mcx", tags: ["vip", "recorrente"] },
    { name: "João Manuel", phone: "+244 912 441 208", zone: "Talatona", address: "Talatona, Belas", status: "delivered", hoursAgo: 120, pay: "mcx", tags: ["empresa"] },
    { name: "Rosa Ferreira", phone: "+244 935 882 441", zone: "Kilamba", address: "Kilamba, Q. 12", status: "delivered", hoursAgo: 140, pay: "cash", tags: ["recorrente"] },
    { name: "Aisha Bernardo", phone: "+244 941 773 015", zone: "Alvalade", address: "Alvalade", status: "delivered", hoursAgo: 10, pay: "mcx", tags: ["vip"] },
    { name: "Paulo Tavares", phone: "+244 926 554 019", zone: "Benfica", address: "Benfica", status: "delivered", hoursAgo: 168, pay: "mcx", tags: ["recorrente"] },
    { name: "Carla Domingos", phone: "+244 931 220 448", zone: "Camama", address: "Camama", status: "delivered", hoursAgo: 4, pay: "transfer", tags: ["novo"] },
    { name: "Miguel dos Santos", phone: "+244 922 008 331", zone: "Maianga", address: "Maianga", status: "confirmed", hoursAgo: 0.15, pay: "mcx", tags: ["novo"] },
    { name: "Inês Mateus", phone: "+244 915 667 831", zone: "Miramar", address: "Miramar", status: "received", hoursAgo: 0.08, pay: "cash", tags: ["vip"] },
  ];

  const all: SeedOrder[] = [
    ...seeds,
    ...extras.map((e, i) => ({
      ...e,
      token: `seed-${i}-${Math.random().toString(36).slice(2, 7)}`,
      items: products[i % products.length],
    })),
  ];

  for (const s of all) {
    const phoneKey = digitsPhone(s.phone);
    const customerId = `c_${phoneKey}`;
    const zone = resolveZone(s.zone);
    const dest = jitter(zone, s.phone + s.hoursAgo);
    const total = s.items.reduce((n, l) => n + l.total, 0);
    const created = new Date(now - s.hoursAgo * 3600 * 1000);
    const eta = estimateEtaMin(zone, 16);
    const existing = await sql<{ id: string }>`select id from customers where id = ${customerId}`;
    if (existing.length === 0) {
      await sql`insert into customers (id, phone, name, zone, notes, tags, created_at, last_order_at)
        values (${customerId}, ${s.phone}, ${s.name}, ${zone.name}, ${s.notes ?? ""}, ${JSON.stringify(s.tags)}, ${iso(created)}, ${iso(created)})`;
    } else {
      await sql`update customers set last_order_at = ${iso(created)}, zone = ${zone.name}, tags = ${JSON.stringify(s.tags)}
        where id = ${customerId} and (last_order_at is null or last_order_at < ${iso(created)})`;
    }

    const orderId = newTicketId(created);
    const dispatched =
      s.status === "out" || s.status === "nearby" || s.status === "delivered"
        ? new Date(created.getTime() + 18 * 60000)
        : null;
    const delivered =
      s.status === "delivered" ? new Date(created.getTime() + eta * 60000) : null;
    const courier =
      s.courier ??
      (s.status === "out" || s.status === "nearby" || s.status === "delivered"
        ? pick(COURIERS, phoneKey.length)
        : null);

    await sql`insert into orders (
      id, track_token, rider_token, customer_id, customer_name, phone, address, zone,
      origin_lat, origin_lng, dest_lat, dest_lng, notes, pay, receipt_name,
      status, total, items_json, eta_min, courier_name, created_at, updated_at,
      dispatched_at, delivered_at
    ) values (
      ${orderId}, ${s.token}, ${`rd-${s.token}`}, ${customerId}, ${s.name}, ${s.phone}, ${s.address}, ${zone.name},
      ${KITCHEN.lat}, ${KITCHEN.lng}, ${dest.lat}, ${dest.lng}, ${s.notes ?? ""}, ${s.pay}, ${null},
      ${s.status}, ${total}, ${JSON.stringify(s.items)}, ${eta}, ${courier}, ${iso(created)}, ${iso(delivered ?? dispatched ?? created)},
      ${dispatched ? iso(dispatched) : null}, ${delivered ? iso(delivered) : null}
    )`;

    const flowNotes: Record<string, string> = {
      received: "Pedido chegou pelo site.",
      confirmed: "Casa confirmou zona e frescura.",
      preparing: "Cozinha a montar.",
      ready: "Pronto para o estafeta.",
      out: `Saiu da ${KITCHEN.name}.`,
      nearby: "Estafeta na zona.",
      delivered: "Entregue no destino.",
      cancelled: "Cancelado pela casa.",
    };
    const chain: OrderStatus[] =
      s.status === "cancelled"
        ? ["received", "cancelled"]
        : (["received", "confirmed", "preparing", "ready", "out", "nearby", "delivered"] as OrderStatus[]).slice(
            0,
            (["received", "confirmed", "preparing", "ready", "out", "nearby", "delivered"] as OrderStatus[]).indexOf(
              s.status,
            ) + 1,
          );
    for (let i = 0; i < chain.length; i++) {
      const st = chain[i];
      const at = new Date(created.getTime() + i * 7 * 60000);
      await addEvent(sql, orderId, st, flowNotes[st] ?? "", iso(at));
    }
  }

  await sql`insert into crm_notes (customer_id, body, author, created_at) values
    (${"c_244923110077"}, ${"Prefere hashi extra. Sem wasabi forte."}, ${"Casa"}, ${iso(new Date(now - 90 * 3600000))}),
    (${"c_244912441208"}, ${"Conta empresa — fatura no final do mês."}, ${"Casa"}, ${iso(new Date(now - 40 * 3600000))}),
    (${"c_244941773015"}, ${"Aniversário a 22. Enviar combinado Ouro."}, ${"Casa"}, ${iso(new Date(now - 12 * 3600000))})`;
}

const itemSchema = z.object({
  id: z.string(),
  name: z.string(),
  qty: z.number(),
  unit: z.number(),
  total: z.number(),
});

const receiptSchema = z.object({
  name: z.string().min(1).max(160),
  mime: z.enum(["image/jpeg", "image/png", "image/webp", "application/pdf"]),
  dataB64: z.string().min(40).max(2_800_000),
});

async function markReceiptFlags(sql: Sql, orders: OrderRow[]) {
  if (orders.length === 0) return orders;
  const recs = await sql<{ order_id: string }>`select distinct order_id from receipts`;
  const has = new Set(recs.map((r) => r.order_id));
  return orders.map((o) => ({ ...o, hasReceipt: has.has(o.id) || Boolean(o.receiptName) }));
}

async function saveReceipt(
  sql: Sql,
  opts: {
    orderId: string;
    customerId: string;
    phone: string;
    name: string;
    mime: string;
    dataB64: string;
  },
) {
  const id = newId("rc");
  const bytes = Math.round((opts.dataB64.length * 3) / 4);
  await sql`insert into receipts (id, order_id, customer_id, phone, filename, mime, bytes, data_b64)
    values (${id}, ${opts.orderId}, ${opts.customerId}, ${opts.phone}, ${opts.name}, ${opts.mime}, ${bytes}, ${opts.dataB64})`;
  await sql`update orders set receipt_name = ${opts.name} where id = ${opts.orderId}`;
  return id;
}

export const createOrder = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string().min(4),
      name: z.string().min(2).max(80),
      phone: z.string().min(6).max(24),
      address: z.string().min(3).max(160),
      zone: z.string().min(1).max(40),
      notes: z.string().max(400).optional().default(""),
      pay: z.enum(["mcx", "transfer", "cash"]),
      receiptName: z.string().max(160).optional(),
      receipt: receiptSchema.optional(),
      afterHours: z.boolean().optional().default(false),
      items: z.array(itemSchema).min(1),
      total: z.number(),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await sqlReady();
    const zone = zoneById(data.zone) ?? resolveZone(data.zone);
    const dest = jitter(zone, data.phone + data.id);
    const phoneKey = digitsPhone(data.phone);
    const customerId = `c_${phoneKey || newId("c")}`;
    const now = iso(new Date());
    const eta = estimateEtaMin(zone);
    const token = newToken();
    const rider = newRiderToken();

    const existing = await sql<CustomerDb>`select * from customers where id = ${customerId}`;
    if (existing.length === 0) {
      await sql`insert into customers (id, phone, name, zone, notes, tags, created_at, last_order_at)
        values (${customerId}, ${data.phone}, ${data.name}, ${zone.name}, ${""}, ${JSON.stringify(["novo"])}, ${now}, ${now})`;
    } else {
      const tags = parseTags(existing[0].tags).filter((t) => t !== "novo");
      if (!tags.includes("recorrente")) tags.push("recorrente");
      await sql`update customers set name = ${data.name}, phone = ${data.phone}, zone = ${zone.name},
        last_order_at = ${now}, tags = ${JSON.stringify(tags)} where id = ${customerId}`;
    }

    await sql`insert into orders (
      id, track_token, rider_token, customer_id, customer_name, phone, address, zone,
      origin_lat, origin_lng, dest_lat, dest_lng, notes, pay, receipt_name,
      status, total, items_json, eta_min, courier_name, created_at, updated_at, pay_verified
    ) values (
      ${data.id}, ${token}, ${rider}, ${customerId}, ${data.name}, ${data.phone}, ${data.address}, ${zone.name},
      ${KITCHEN.lat}, ${KITCHEN.lng}, ${dest.lat}, ${dest.lng}, ${data.notes ?? ""}, ${data.pay}, ${data.receipt?.name ?? null},
      ${"received"}, ${data.total}, ${JSON.stringify(data.items)}, ${eta}, ${null}, ${now}, ${now}, ${false}
    )`;
    if (data.receipt) {
      await saveReceipt(sql, {
        orderId: data.id,
        customerId,
        phone: data.phone,
        name: data.receipt.name,
        mime: data.receipt.mime,
        dataB64: data.receipt.dataB64,
      });
    }
    const note = data.afterHours
      ? "Pedido fora do horário. A confirmar na abertura, por ordem de chegada."
      : data.receipt
        ? "Pedido chegou pelo site. Comprovativo anexado."
        : "Pedido chegou pelo site. Fatura gerada — a aguardar pagamento.";
    await addEvent(sql, data.id, "received", note);
    return { id: data.id, trackToken: token, etaMin: eta, zone: zone.name };
  });

export const getTracking = createServerFn({ method: "GET" })
  .validator(z.object({ token: z.string().min(4).max(64) }))
  .handler(async ({ data }) => {
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where track_token = ${data.token} limit 1`;
    if (!rows[0]) return null;
    return toPublic(sql, rows[0]);
  });

export const lookupInvoice = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.string().min(4).max(40) }))
  .handler(async ({ data }) => {
    const sql = await sqlReady();
    const rows = await sql<{ track_token: string }>`select track_token from orders where id = ${data.id.trim()} limit 1`;
    if (!rows[0]) return null;
    return { token: rows[0].track_token };
  });

export const staffSession = createServerFn({ method: "GET" }).handler(async () => {
  const { readStaffSession } = await import("@/lib/staff-session");
  return { ok: readStaffSession() };
});

export const loginStaff = createServerFn({ method: "POST" })
  .validator(z.object({ user: z.string().min(1).max(40), password: z.string().min(1).max(80) }))
  .handler(async ({ data }) => {
    const { attemptStaffLogin } = await import("@/lib/staff-session");
    return attemptStaffLogin(data.user, data.password);
  });

export const logoutStaff = createServerFn({ method: "POST" }).handler(async () => {
  const { clearStaffCookie } = await import("@/lib/staff-session");
  clearStaffCookie();
  return { ok: true };
});

export const listOrders = createServerFn({ method: "GET" })
  .validator(
    z.object({
      status: z.string().optional(),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = data.status
      ? await sql<OrderDb>`select * from orders where status = ${data.status} order by created_at desc`
      : await sql<OrderDb>`select * from orders order by created_at desc`;
    return markReceiptFlags(sql, rows.map(mapOrder));
  });

export const getOrder = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    if (!rows[0]) return null;
    const rider = await ensureRiderToken(sql, rows[0]);
    const pub = await toPublic(sql, rows[0]);
    const mapped = mapOrder({ ...rows[0], rider_token: rider });
    const [withFlag] = await markReceiptFlags(sql, [mapped]);
    return { ...withFlag, events: pub.events, progress: pub.progress, remainingMin: pub.remainingMin };
  });

export const setOrderStatus = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string(),
      status: z.enum([
        "received",
        "confirmed",
        "preparing",
        "ready",
        "out",
        "nearby",
        "delivered",
        "cancelled",
      ]),
      note: z.string().max(200).optional().default(""),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    if (!rows[0]) throw new Error("Encomenda não encontrada.");
    const now = iso(new Date());
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
    const note =
      data.note ||
      (data.status === "out"
        ? `Saiu da ${KITCHEN.name} · estafeta ${courier}.`
        : data.status === "delivered"
          ? "Entregue na morada."
          : "");
    await addEvent(sql, data.id, data.status, note);
    const next = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    return mapOrder(next[0]);
  });

export const updateEta = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string(),
      etaMin: z.number().int().min(15).max(180),
      note: z.string().max(200).optional().default(""),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    if (!rows[0]) throw new Error("Encomenda não encontrada.");
    const now = iso(new Date());
    await sql`update orders set eta_min = ${data.etaMin}, updated_at = ${now} where id = ${data.id}`;
    const reason = data.note.trim() || "constrangimento em Luanda";
    await addEvent(
      sql,
      data.id,
      rows[0].status,
      `Tempo actualizado para ${data.etaMin} min · ${reason}.`,
    );
    const next = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    return mapOrder(next[0]);
  });

export const assignCourier = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string(),
      courierId: z.string().min(1).max(40),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    if (!rows[0]) throw new Error("Encomenda não encontrada.");
    const couriers = await sql<{ id: string; name: string; phone: string }>`
      select id, name, phone from couriers where id = ${data.courierId} limit 1`;
    if (!couriers[0]) throw new Error("Motoboy não encontrado.");
    const now = iso(new Date());
    await sql`update orders set courier_name = ${couriers[0].name}, courier_id = ${couriers[0].id}, updated_at = ${now} where id = ${data.id}`;
    await addEvent(sql, data.id, rows[0].status, `Estafeta atribuído: ${couriers[0].name}.`);
    const next = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    return mapOrder(next[0]);
  });

type CourierDb = {
  id: string;
  name: string;
  phone: string;
  active: number | boolean | string;
  created_at: string;
};

function mapCourier(row: CourierDb): CourierRow {
  return {
    id: row.id,
    name: row.name,
    phone: row.phone,
    active: Boolean(Number(row.active)),
    createdAt: asIso(row.created_at) ?? new Date().toISOString(),
  };
}

export const listCouriers = createServerFn({ method: "GET" })
  .validator(z.object({ all: z.boolean().optional().default(false) }))
  .handler(async ({ data }): Promise<CourierRow[]> => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = data.all
      ? await sql<CourierDb>`select * from couriers order by active desc, name asc`
      : await sql<CourierDb>`select * from couriers where active = 1 order by name asc`;
    return rows.map(mapCourier);
  });

export const saveCourier = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string().max(40).optional(),
      name: z.string().trim().min(2).max(40),
      phone: z.string().max(24).optional().default(""),
      active: z.boolean().optional().default(true),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const phone = data.phone.trim();
    const digits = waDigits(phone);
    if (phone && digits.length < 11) {
      throw new Error("WhatsApp incompleto. Usa o número angolano, ex. 923 000 000.");
    }
    const now = iso(new Date());
    if (data.id) {
      await sql`update couriers set name = ${data.name}, phone = ${phone}, active = ${data.active ? 1 : 0} where id = ${data.id}`;
      const next = await sql<CourierDb>`select * from couriers where id = ${data.id} limit 1`;
      if (!next[0]) throw new Error("Motoboy não encontrado.");
      return mapCourier(next[0]);
    }
    const id = newId("cr");
    await sql`insert into couriers (id, name, phone, active, created_at)
      values (${id}, ${data.name}, ${phone}, ${data.active ? 1 : 0}, ${now})`;
    const next = await sql<CourierDb>`select * from couriers where id = ${id} limit 1`;
    return mapCourier(next[0]);
  });

export const listCustomers = createServerFn({ method: "GET" })
  .validator(
    z.object({
      q: z.string().optional().default(""),
      tag: z.string().optional().default(""),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<CustomerDb>`select * from customers order by last_order_at desc, created_at desc`;
    const stats = await sql<{
      customer_id: string;
      n: number;
      spent: number;
    }>`select customer_id, count(*)::int as n, coalesce(sum(total),0)::int as spent
      from orders where status <> 'cancelled' group by customer_id`;
    const byId = new Map(stats.map((s) => [s.customer_id, s]));
    const q = data.q.trim().toLowerCase();
    const list: CustomerRow[] = rows
      .map((r) => {
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
          spent: st?.spent ?? 0,
        };
      })
      .filter((c) => {
        if (data.tag && !c.tags.includes(data.tag)) return false;
        if (!q) return true;
        return (
          c.name.toLowerCase().includes(q) ||
          c.phone.toLowerCase().includes(q) ||
          c.zone.toLowerCase().includes(q)
        );
      });
    return list;
  });

export const getCustomer = createServerFn({ method: "GET" })
  .validator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<CustomerDb>`select * from customers where id = ${data.id} limit 1`;
    if (!rows[0]) return null;
    const r = rows[0];
    const orders = await sql<OrderDb>`select * from orders where customer_id = ${r.id} order by created_at desc`;
    const notes = await sql<{
      id: number;
      body: string;
      author: string;
      created_at: string;
    }>`select id, body, author, created_at from crm_notes where customer_id = ${r.id} order by created_at desc`;
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
        createdAt: asIso(n.created_at) ?? "",
      })),
    };
  });

export const upsertCustomer = createServerFn({ method: "POST" })
  .validator(
    z.object({
      name: z.string().min(2).max(80),
      phone: z.string().min(6).max(24),
      zone: z.string().max(40).optional().default(""),
      notes: z.string().max(400).optional().default(""),
      tags: z.array(z.string()).optional().default([]),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const id = `c_${digitsPhone(data.phone) || newId("c")}`;
    const now = iso(new Date());
    const existing = await sql<{ id: string }>`select id from customers where id = ${id}`;
    const zone = data.zone ? resolveZone(data.zone).name : "";
    if (existing.length === 0) {
      await sql`insert into customers (id, phone, name, zone, notes, tags, created_at)
        values (${id}, ${data.phone}, ${data.name}, ${zone}, ${data.notes ?? ""}, ${JSON.stringify(data.tags ?? [])}, ${now})`;
    } else {
      await sql`update customers set name = ${data.name}, phone = ${data.phone}, zone = ${zone},
        notes = ${data.notes ?? ""}, tags = ${JSON.stringify(data.tags ?? [])} where id = ${id}`;
    }
    return { id };
  });

export const addCrmNote = createServerFn({ method: "POST" })
  .validator(
    z.object({
      customerId: z.string(),
      body: z.string().min(2).max(400),
      author: z.string().max(40).optional().default("Casa"),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    await sql`insert into crm_notes (customer_id, body, author) values (${data.customerId}, ${data.body}, ${data.author ?? "Casa"})`;
    return { ok: true };
  });

export const setCustomerTags = createServerFn({ method: "POST" })
  .validator(
    z.object({
      id: z.string(),
      tags: z.array(z.string()),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    await sql`update customers set tags = ${JSON.stringify(data.tags)} where id = ${data.id}`;
    return { ok: true };
  });

export const findOrders = createServerFn({ method: "GET" })
  .validator(z.object({ q: z.string().min(2).max(40) }))
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const q = data.q.trim();
    const rows = await sql<OrderDb>`
      select * from orders
      where id ilike ${"%" + q + "%"}
         or phone ilike ${"%" + q + "%"}
         or customer_name ilike ${"%" + q + "%"}
      order by created_at desc
      limit 20`;
    return markReceiptFlags(sql, rows.map(mapOrder));
  });

export const listReceipts = createServerFn({ method: "GET" })
  .validator(
    z.object({
      q: z.string().optional().default(""),
      pending: z.boolean().optional().default(false),
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    type Row = {
      id: string;
      order_id: string;
      customer_id: string;
      phone: string;
      filename: string;
      mime: string;
      bytes: number;
      created_at: string;
      customer_name: string;
      pay: string;
      total: number;
      pay_verified: boolean | number | string | null;
      status: string;
    };
    const rows = await sql<Row>`
      select r.id, r.order_id, r.customer_id, r.phone, r.filename, r.mime, r.bytes, r.created_at,
             o.customer_name, o.pay, o.total, o.pay_verified, o.status
      from receipts r
      join orders o on o.id = r.order_id
      order by r.created_at desc
      limit 80`;
    const q = data.q.trim().toLowerCase();
    const phoneQ = digitsPhone(data.q);
    return rows
      .filter((r) => {
        if (data.pending && Boolean(r.pay_verified)) return false;
        if (!q) return true;
        return (
          r.order_id.toLowerCase().includes(q) ||
          r.phone.toLowerCase().includes(q) ||
          r.customer_name.toLowerCase().includes(q) ||
          (phoneQ.length >= 6 && digitsPhone(r.phone).includes(phoneQ))
        );
      })
      .map((r) => ({
        id: r.id,
        orderId: r.order_id,
        customerId: r.customer_id,
        phone: r.phone,
        filename: r.filename,
        mime: r.mime,
        bytes: Number(r.bytes),
        createdAt: asIso(r.created_at) ?? "",
        customerName: r.customer_name,
        pay: r.pay,
        total: Number(r.total),
        payVerified: Boolean(r.pay_verified),
        status: r.status,
      }));
  });

export const getReceipt = createServerFn({ method: "GET" })
  .validator(z.object({ orderId: z.string().min(4) }))
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<{
      id: string;
      order_id: string;
      customer_id: string;
      phone: string;
      filename: string;
      mime: string;
      bytes: number;
      data_b64: string;
      created_at: string;
    }>`select * from receipts where order_id = ${data.orderId} order by created_at desc`;
    return rows.map((r) => ({
      id: r.id,
      orderId: r.order_id,
      customerId: r.customer_id,
      phone: r.phone,
      filename: r.filename,
      mime: r.mime,
      bytes: Number(r.bytes),
      dataB64: r.data_b64,
      createdAt: asIso(r.created_at) ?? "",
    }));
  });

export const submitOrderReceipt = createServerFn({ method: "POST" })
  .validator(
    z.object({
      token: z.string().min(4).max(64),
      receipt: receiptSchema,
    }),
  )
  .handler(async ({ data }) => {
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where track_token = ${data.token} limit 1`;
    if (!rows[0]) throw new Error("Encomenda não encontrada.");
    await saveReceipt(sql, {
      orderId: rows[0].id,
      customerId: rows[0].customer_id,
      phone: rows[0].phone,
      name: data.receipt.name,
      mime: data.receipt.mime,
      dataB64: data.receipt.dataB64,
    });
    await addEvent(sql, rows[0].id, rows[0].status, "Comprovativo enviado pelo cliente.");
    return { ok: true };
  });

export const attachReceipt = createServerFn({ method: "POST" })
  .validator(
    z.object({
      orderId: z.string().min(4),
      receipt: receiptSchema,
    }),
  )
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where id = ${data.orderId} limit 1`;
    if (!rows[0]) throw new Error("Encomenda não encontrada.");
    await saveReceipt(sql, {
      orderId: rows[0].id,
      customerId: rows[0].customer_id,
      phone: rows[0].phone,
      name: data.receipt.name,
      mime: data.receipt.mime,
      dataB64: data.receipt.dataB64,
    });
    await addEvent(sql, rows[0].id, rows[0].status, "Comprovativo anexado pela casa.");
    return { ok: true };
  });

export const verifyPayment = createServerFn({ method: "POST" })
  .validator(z.object({ id: z.string().min(4), ok: z.boolean() }))
  .handler(async ({ data }) => {
    await requireStaff();
    const sql = await sqlReady();
    const now = iso(new Date());
    if (data.ok) {
      await sql`update orders set pay_verified = ${true}, pay_verified_at = ${now}, updated_at = ${now} where id = ${data.id}`;
      await addEvent(sql, data.id, "confirmed", "Pagamento verificado pela casa.");
    } else {
      await sql`update orders set pay_verified = ${false}, pay_verified_at = ${null}, updated_at = ${now} where id = ${data.id}`;
    }
    const rows = await sql<OrderDb>`select * from orders where id = ${data.id} limit 1`;
    return rows[0] ? mapOrder(rows[0]) : null;
  });

export const getDashboard = createServerFn({ method: "GET" }).handler(async () => {
    await requireStaff();
    const sql = await sqlReady();
    const orders = (await sql<OrderDb>`select * from orders`).map(mapOrder);
    const customers = await sql<CustomerDb>`select * from customers`;
    const now = new Date();
    const startToday = new Date(now);
    startToday.setHours(0, 0, 0, 0);
    const dayMs = 86400000;
    const today = orders.filter((o) => new Date(o.createdAt) >= startToday);
    const todayOk = today.filter((o) => o.status !== "cancelled");
    const revenue = todayOk.reduce((n, o) => n + o.total, 0);
    const inFlight = orders.filter((o) =>
      ["received", "confirmed", "preparing", "ready", "out", "nearby"].includes(o.status),
    );
    const delivered = orders.filter((o) => o.status === "delivered");
    const cycles = delivered
      .map((o) => {
        if (!o.deliveredAt) return null;
        return (new Date(o.deliveredAt).getTime() - new Date(o.createdAt).getTime()) / 60000;
      })
      .filter((n): n is number => n !== null);
    const cycleMin = cycles.length
      ? Math.round(cycles.reduce((a, b) => a + b, 0) / cycles.length)
      : 0;
    const onTime = delivered.filter((o) => {
      if (!o.deliveredAt) return false;
      const took = (new Date(o.deliveredAt).getTime() - new Date(o.createdAt).getTime()) / 60000;
      return took <= o.etaMin + 8;
    }).length;
    const onTimePct = delivered.length ? Math.round((onTime / delivered.length) * 100) : 0;
    const byCustomer = new Map<string, number>();
    for (const o of orders) {
      if (o.status === "cancelled") continue;
      byCustomer.set(o.customerId, (byCustomer.get(o.customerId) ?? 0) + 1);
    }
    const repeatCustomers = [...byCustomer.values()].filter((n) => n >= 2).length;
    const repeatPct = byCustomer.size
      ? Math.round((repeatCustomers / byCustomer.size) * 100)
      : 0;

    const hourly = Array.from({ length: 11 }, (_, i) => {
      const hour = 12 + i;
      const count = today.filter((o) => new Date(o.createdAt).getHours() === hour).length;
      return { hour, label: `${hour}h`, count };
    });

    const daily = Array.from({ length: 14 }, (_, i) => {
      const d = new Date(startToday.getTime() - (13 - i) * dayMs);
      const next = new Date(d.getTime() + dayMs);
      const slice = orders.filter((o) => {
        const t = new Date(o.createdAt).getTime();
        return t >= d.getTime() && t < next.getTime() && o.status !== "cancelled";
      });
      return {
        day: d.toISOString().slice(5, 10),
        orders: slice.length,
        revenue: slice.reduce((n, o) => n + o.total, 0),
      };
    });

    const productMap = new Map<string, { name: string; qty: number; revenue: number }>();
    for (const o of orders) {
      if (o.status === "cancelled") continue;
      for (const it of o.items) {
        const cur = productMap.get(it.id) ?? { name: it.name, qty: 0, revenue: 0 };
        cur.qty += it.qty;
        cur.revenue += it.total;
        productMap.set(it.id, cur);
      }
    }
    const topProducts = [...productMap.values()]
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 6);

    const zoneMap = new Map<string, { zone: string; orders: number; revenue: number }>();
    for (const o of orders) {
      if (o.status === "cancelled") continue;
      const cur = zoneMap.get(o.zone) ?? { zone: o.zone, orders: 0, revenue: 0 };
      cur.orders += 1;
      cur.revenue += o.total;
      zoneMap.set(o.zone, cur);
    }
    const zones = [...zoneMap.values()].sort((a, b) => b.orders - a.orders);

    const payMap = new Map<string, { pay: string; count: number; revenue: number }>();
    for (const o of orders) {
      if (o.status === "cancelled") continue;
      const cur = payMap.get(o.pay) ?? { pay: o.pay, count: 0, revenue: 0 };
      cur.count += 1;
      cur.revenue += o.total;
      payMap.set(o.pay, cur);
    }

    const spentBy = new Map<string, { spent: number; n: number }>();
    for (const o of orders) {
      if (o.status === "cancelled") continue;
      const cur = spentBy.get(o.customerId) ?? { spent: 0, n: 0 };
      cur.spent += o.total;
      cur.n += 1;
      spentBy.set(o.customerId, cur);
    }
    const vip = customers
      .map((c) => {
        const st = spentBy.get(c.id);
        return {
          id: c.id,
          name: c.name,
          zone: c.zone,
          spent: st?.spent ?? 0,
          orders: st?.n ?? 0,
          lastOrderAt: asIso(c.last_order_at),
        };
      })
      .sort((a, b) => b.spent - a.spent)
      .slice(0, 5);

    const winback = customers
      .map((c) => ({
        id: c.id,
        name: c.name,
        zone: c.zone,
        lastOrderAt: asIso(c.last_order_at),
        spent: spentBy.get(c.id)?.spent ?? 0,
      }))
      .filter((c) => {
        if (!c.lastOrderAt) return false;
        const days = (Date.now() - new Date(c.lastOrderAt).getTime()) / dayMs;
        return days >= 10;
      })
      .sort((a, b) => (a.lastOrderAt ?? "").localeCompare(b.lastOrderAt ?? ""))
      .slice(0, 5);

    const live = {
      received: orders.filter((o) => o.status === "received" || o.status === "confirmed").length,
      preparing: orders.filter((o) => o.status === "preparing").length,
      ready: orders.filter((o) => o.status === "ready").length,
      out: orders.filter((o) => o.status === "out" || o.status === "nearby").length,
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
        cancelled: today.filter((o) => o.status === "cancelled").length,
      },
      kpis: {
        cycleMin,
        onTimePct,
        repeatPct,
        customers: customers.length,
        new7,
      },
      hourly,
      daily,
      topProducts,
      zones,
      payMix: [...payMap.values()],
      live,
      vip,
      winback,
    };
  });

export type RiderJob = {
  id: string;
  status: OrderStatus;
  customerName: string;
  phone: string;
  address: string;
  zone: string;
  notes: string;
  items: TicketItem[];
  total: number;
  etaMin: number;
  remainingMin: number;
  courierName: string | null;
  pay: PayMethod;
};

export const getRiderJob = createServerFn({ method: "GET" })
  .validator(z.object({ token: z.string().min(6).max(64) }))
  .handler(async ({ data }): Promise<RiderJob | null> => {
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where rider_token = ${data.token} limit 1`;
    if (!rows[0]) return null;
    const order = mapOrder(rows[0]);
    return {
      id: order.id,
      status: order.status,
      customerName: order.customerName,
      phone: order.phone,
      address: order.address,
      zone: order.zone,
      notes: order.notes,
      items: order.items,
      total: order.total,
      etaMin: order.etaMin,
      remainingMin: remainingMinutes(order),
      courierName: order.courierName,
      pay: order.pay,
    };
  });

export const riderAdvance = createServerFn({ method: "POST" })
  .validator(
    z.object({
      token: z.string().min(6).max(64),
      action: z.enum(["pickup", "nearby", "delivered"]),
    }),
  )
  .handler(async ({ data }) => {
    const sql = await sqlReady();
    const rows = await sql<OrderDb>`select * from orders where rider_token = ${data.token} limit 1`;
    if (!rows[0]) throw new Error("Rota não encontrada.");
    const order = mapOrder(rows[0]);
    if (order.status === "cancelled") throw new Error("Esta encomenda foi cancelada.");
    if (order.status === "delivered") return order;

    const allowed: Record<typeof data.action, OrderStatus[]> = {
      pickup: ["confirmed", "preparing", "ready"],
      nearby: ["out"],
      delivered: ["out", "nearby"],
    };
    if (!allowed[data.action].includes(order.status)) {
      throw new Error("Este passo já não está disponível.");
    }

    const nextStatus: Record<typeof data.action, OrderStatus> = {
      pickup: "out",
      nearby: "nearby",
      delivered: "delivered",
    };
    const status = nextStatus[data.action];
    const now = iso(new Date());
    let courier = rows[0].courier_name;
    if (!courier) courier = pick(COURIERS, order.id.length);
    const dispatched =
      data.action === "pickup" ? now : asIso(rows[0].dispatched_at) ?? now;
    const delivered = data.action === "delivered" ? now : asIso(rows[0].delivered_at);

    await sql`update orders set status = ${status}, updated_at = ${now},
      courier_name = ${courier}, dispatched_at = ${dispatched}, delivered_at = ${delivered}
      where id = ${order.id}`;
    const note =
      data.action === "pickup"
        ? `Estafeta ${courier} recebeu a encomenda e saiu da cozinha.`
        : data.action === "nearby"
          ? `Estafeta ${courier} na zona ${order.zone}.`
          : `Estafeta ${courier} confirmou a entrega.`;
    await addEvent(sql, order.id, status, note);
    const next = await sql<OrderDb>`select * from orders where id = ${order.id} limit 1`;
    return mapOrder(next[0]);
  });
