// Simple in-memory order store for development.
// Later we will connect this to Supabase / Vercel Postgres / Airtable.

export type OrderStatus = "novo" | "preparando" | "pronto" | "entregue" | "cancelado";

export interface OrderItem {
  name: string;
  quantity: number;
  notes?: string;
}

export interface Order {
  id: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  customerAddress?: string;
  items: OrderItem[];
  notes?: string;
  status: OrderStatus;
  totalEstimate?: string;
  source: "website" | "whatsapp" | "mano";
}

// In-memory store (resets on server restart – good enough for MVP)
const orders: Order[] = [];

export function createOrder(
  data: Omit<Order, "id" | "createdAt" | "status">
): Order {
  const order: Order = {
    ...data,
    id: `SS-${Date.now().toString(36).toUpperCase()}`,
    createdAt: new Date().toISOString(),
    status: "novo",
  };
  orders.unshift(order);
  return order;
}

export function getOrders(): Order[] {
  return [...orders];
}

export function getOrder(id: string): Order | undefined {
  return orders.find((o) => o.id === id);
}

export function updateOrderStatus(id: string, status: OrderStatus): Order | null {
  const order = orders.find((o) => o.id === id);
  if (!order) return null;
  order.status = status;
  return order;
}

export function buildWhatsAppMessage(order: Order): string {
  const itemsText = order.items
    .map((i) => `• ${i.quantity}x ${i.name}${i.notes ? ` (${i.notes})` : ""}`)
    .join("\n");

  return (
    `🍣 *Novo Pedido Sete Sete*\n` +
    `Nº: ${order.id}\n\n` +
    `👤 *Cliente:* ${order.customerName}\n` +
    `📱 *Telefone:* ${order.customerPhone}\n` +
    (order.customerAddress ? `📍 *Morada:* ${order.customerAddress}\n` : "") +
    `\n📋 *Itens:*\n${itemsText}\n` +
    (order.notes ? `\n📝 *Notas:* ${order.notes}\n` : "") +
    `\nStatus: ${order.status.toUpperCase()}`
  );
}
