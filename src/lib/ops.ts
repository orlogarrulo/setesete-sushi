import type { Lang } from "@/lib/menu";
import type { PayMethod } from "@/lib/utils";

export const ORDER_STATUSES = [
  "received",
  "confirmed",
  "preparing",
  "ready",
  "out",
  "nearby",
  "delivered",
  "cancelled",
] as const;

export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const STATUS_META: Record<
  OrderStatus,
  { pt: string; en: string; hint: { pt: string; en: string }; tone: string }
> = {
  received: {
    pt: "Recebido",
    en: "Received",
    hint: { pt: "O pedido chegou à casa.", en: "The order reached the house." },
    tone: "stone",
  },
  confirmed: {
    pt: "Confirmado",
    en: "Confirmed",
    hint: { pt: "A casa confirmou pagamento, zona e tempo.", en: "The house confirmed payment, zone and timing." },
    tone: "ink",
  },
  preparing: {
    pt: "A preparar",
    en: "Preparing",
    hint: { pt: "A cozinha está a montar o pedido.", en: "The kitchen is assembling the order." },
    tone: "kaki",
  },
  ready: {
    pt: "Pronto",
    en: "Ready",
    hint: { pt: "À espera do estafeta na cozinha.", en: "Waiting for the courier at the kitchen." },
    tone: "kaki",
  },
  out: {
    pt: "Em rota",
    en: "On the way",
    hint: { pt: "Saiu da cozinha em direcção à morada.", en: "Left the kitchen toward the address." },
    tone: "kaki",
  },
  nearby: {
    pt: "Próximo",
    en: "Nearby",
    hint: { pt: "O estafeta está na tua zona.", en: "The courier is in your area." },
    tone: "kaki",
  },
  delivered: {
    pt: "Entregue",
    en: "Delivered",
    hint: { pt: "Chegou à morada.", en: "Arrived at the address." },
    tone: "ink",
  },
  cancelled: {
    pt: "Cancelado",
    en: "Cancelled",
    hint: { pt: "Este pedido não segue.", en: "This order will not continue." },
    tone: "stone",
  },
};

export const FLOW: OrderStatus[] = [
  "received",
  "confirmed",
  "preparing",
  "ready",
  "out",
  "nearby",
  "delivered",
];

export function nextStatus(s: OrderStatus): OrderStatus | null {
  const i = FLOW.indexOf(s);
  if (i < 0 || i >= FLOW.length - 1) return null;
  return FLOW[i + 1];
}

export function statusLabel(s: OrderStatus, lang: Lang) {
  return STATUS_META[s][lang];
}

export type TicketItem = {
  id: string;
  name: string;
  qty: number;
  unit: number;
  total: number;
};

export type OrderRow = {
  id: string;
  trackToken: string;
  customerId: string;
  customerName: string;
  phone: string;
  address: string;
  zone: string;
  originLat: number;
  originLng: number;
  destLat: number;
  destLng: number;
  notes: string;
  pay: PayMethod;
  receiptName: string | null;
  hasReceipt: boolean;
  payVerified: boolean;
  payVerifiedAt: string | null;
  status: OrderStatus;
  total: number;
  items: TicketItem[];
  etaMin: number;
  courierName: string | null;
  courierId: string | null;
  riderToken: string;
  createdAt: string;
  updatedAt: string;
  dispatchedAt: string | null;
  deliveredAt: string | null;
};

export type OrderEvent = {
  status: OrderStatus;
  note: string;
  createdAt: string;
};

export type PublicTracking = {
  id: string;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  dispatchedAt: string | null;
  deliveredAt: string | null;
  etaMin: number;
  remainingMin: number;
  courierName: string | null;
  customerFirst: string;
  zone: string;
  address: string;
  origin: { lat: number; lng: number; name: string; zone: string };
  dest: { lat: number; lng: number; name: string; zone: string };
  progress: number;
  items: TicketItem[];
  total: number;
  pay: PayMethod;
  events: OrderEvent[];
};

export type CustomerRow = {
  id: string;
  phone: string;
  name: string;
  zone: string;
  notes: string;
  tags: string[];
  createdAt: string;
  lastOrderAt: string | null;
  orderCount: number;
  spent: number;
};

export const CRM_TAGS = [
  { id: "vip", pt: "VIP", en: "VIP" },
  { id: "empresa", pt: "Empresa", en: "Company" },
  { id: "recorrente", pt: "Recorrente", en: "Repeat" },
  { id: "novo", pt: "Novo", en: "New" },
  { id: "winback", pt: "A reactivar", en: "Win-back" },
  { id: "alergia", pt: "Alergia / nota", en: "Allergy / note" },
] as const;

export const COURIERS = ["Nélson", "Rosa", "Paulo", "Marta", "Hélder"] as const;

export type CourierRow = {
  id: string;
  name: string;
  phone: string;
  active: boolean;
  createdAt: string;
};

export function waDigits(phone: string) {
  let d = phone.replace(/\D/g, "");
  if (!d) return "";
  if (d.startsWith("00")) d = d.slice(2);
  if (d.startsWith("244")) return d;
  if (d.startsWith("0")) d = d.slice(1);
  return `244${d}`;
}

export function firstName(full: string) {
  return full.trim().split(/\s+/)[0] || full;
}

export function digitsPhone(phone: string) {
  return phone.replace(/\D/g, "");
}

export function routeProgress(input: {
  status: OrderStatus;
  dispatchedAt: string | null;
  etaMin: number;
  deliveredAt: string | null;
}) {
  if (input.status === "cancelled") return 0;
  if (input.status === "delivered") return 1;
  if (input.status === "nearby") return 0.9;
  if (input.status === "received") return 0;
  if (input.status === "confirmed") return 0.02;
  if (input.status === "preparing") return 0.05;
  if (input.status === "ready") return 0.1;
  if (input.status === "out") {
    if (!input.dispatchedAt) return 0.16;
    const elapsed = Date.now() - new Date(input.dispatchedAt).getTime();
    const window = Math.max(input.etaMin, 14) * 60 * 1000 * 0.72;
    return 0.16 + 0.72 * Math.min(1, Math.max(0, elapsed / window));
  }
  return 0;
}

export function remainingMinutes(input: {
  status: OrderStatus;
  dispatchedAt: string | null;
  etaMin: number;
  createdAt: string;
}) {
  if (input.status === "delivered" || input.status === "cancelled") return 0;
  const start = input.dispatchedAt
    ? new Date(input.dispatchedAt).getTime()
    : new Date(input.createdAt).getTime();
  const total = input.etaMin * 60 * 1000;
  const left = total - (Date.now() - start);
  if (input.status === "nearby") return Math.max(2, Math.round(left / 60000));
  return Math.max(4, Math.round(left / 60000));
}

export const KPI_COPY = [
  {
    id: "gmv",
    pt: "Receita do dia",
    en: "Today's revenue",
    why: {
      pt: "O pulso comercial. Compara com o mesmo dia da semana anterior.",
      en: "Commercial pulse. Compare with the same weekday last week.",
    },
  },
  {
    id: "orders",
    pt: "Pedidos hoje",
    en: "Orders today",
    why: {
      pt: "Carga da cozinha. Acima de 18/hora, abre um segundo banco.",
      en: "Kitchen load. Above 18/hour, open a second station.",
    },
  },
  {
    id: "ticket",
    pt: "Ticket médio",
    en: "Average ticket",
    why: {
      pt: "Sobe com combinados Ouro e bebidas. Meta: acima de 18.000 Kz.",
      en: "Rises with Gold sets and drinks. Target: above 18,000 Kz.",
    },
  },
  {
    id: "cycle",
    pt: "Ciclo médio",
    en: "Avg. cycle",
    why: {
      pt: "Do clique à porta. SLA interno: 45 min em Talatona, 70 min na Ilha.",
      en: "From tap to door. Internal SLA: 45 min in Talatona, 70 min on the Ilha.",
    },
  },
  {
    id: "ontime",
    pt: "No prazo",
    en: "On time",
    why: {
      pt: "Entregas dentro do ETA prometido. Abaixo de 85% — rever rotas.",
      en: "Deliveries within the promised ETA. Below 85% — review routes.",
    },
  },
  {
    id: "repeat",
    pt: "Recorrentes",
    en: "Repeat rate",
    why: {
      pt: "Clientes com 2+ pedidos. O CRM vive disto — não de novos a qualquer custo.",
      en: "Customers with 2+ orders. The CRM lives on this — not new names at any cost.",
    },
  },
] as const;
