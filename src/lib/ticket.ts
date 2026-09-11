import { productById, type Lang } from "@/lib/menu";
import { formatKz, WHATSAPP, type PayMethod } from "@/lib/utils";
import { useCart } from "@/store/cart";

export type TicketLine = {
  id: string;
  name: string;
  qty: number;
  unit: number;
  total: number;
};

export type Ticket = {
  id: string;
  createdAt: string;
  name: string;
  phone: string;
  address: string;
  notes: string;
  pay: PayMethod;
  receiptName?: string;
  lines: TicketLine[];
  total: number;
  lang: Lang;
};

export function newTicketId(date = new Date()) {
  const y = String(date.getFullYear()).slice(2);
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SS-${y}${m}${d}-${rand}`;
}

export function buildTicket(opts: {
  lang: Lang;
  name: string;
  phone: string;
  address: string;
  notes: string;
  pay: PayMethod;
  receiptName?: string;
}): Ticket {
  const lines: TicketLine[] = useCart
    .getState()
    .lines.map((l) => {
      const p = productById(l.id);
      if (!p) return null;
      return {
        id: l.id,
        name: p.name[opts.lang],
        qty: l.qty,
        unit: p.price,
        total: p.price * l.qty,
      };
    })
    .filter((x): x is TicketLine => Boolean(x));

  return {
    id: newTicketId(),
    createdAt: new Date().toISOString(),
    name: opts.name.trim(),
    phone: opts.phone.trim(),
    address: opts.address.trim(),
    notes: opts.notes.trim(),
    pay: opts.pay,
    receiptName: opts.receiptName,
    lines,
    total: lines.reduce((n, l) => n + l.total, 0),
    lang: opts.lang,
  };
}

export function formatTicketWhen(iso: string, lang: Lang) {
  const d = new Date(iso);
  return d.toLocaleString(lang === "pt" ? "pt-PT" : "en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function buildOrderMessage(ticket: Ticket) {
  const { lang } = ticket;
  const rows = ticket.lines.map(
    (l) => `• ${l.qty}× ${l.name} — ${formatKz(l.total)}`,
  );
  const payLabel =
    ticket.pay === "mcx"
      ? "Multicaixa Express"
      : ticket.pay === "transfer"
        ? lang === "pt"
          ? "Transferência bancária"
          : "Bank transfer"
        : lang === "pt"
          ? "Dinheiro no local"
          : "Cash on delivery";

  const extra: string[] = [];
  if (ticket.pay === "transfer") {
    extra.push(
      lang === "pt"
        ? `Comprovativo: ${ticket.receiptName ?? "anexar PDF nesta conversa"}`
        : `Receipt: ${ticket.receiptName ?? "please attach the PDF here"}`,
    );
  }
  if (ticket.pay === "mcx") {
    extra.push(
      lang === "pt"
        ? `Referência Multicaixa Express: ${ticket.id}`
        : `Multicaixa Express reference: ${ticket.id}`,
    );
  }

  return [
    lang === "pt" ? `*Pedido Sete Sete*` : `*Sete Sete order*`,
    `Fatura: ${ticket.id}`,
    lang === "pt" ? `Nome: ${ticket.name}` : `Name: ${ticket.name}`,
    lang === "pt" ? `Telefone: ${ticket.phone}` : `Phone: ${ticket.phone}`,
    lang === "pt" ? `Morada: ${ticket.address}` : `Address: ${ticket.address}`,
    "",
    ...rows,
    "",
    `*Total: ${formatKz(ticket.total)}*`,
    lang === "pt" ? `Pagamento: ${payLabel}` : `Payment: ${payLabel}`,
    lang === "pt"
      ? "Hashi incluídos no preço."
      : "Chopsticks included in the price.",
    ...extra,
    ticket.notes
      ? lang === "pt"
        ? `Notas: ${ticket.notes}`
        : `Notes: ${ticket.notes}`
      : null,
  ]
    .filter((x) => x !== null)
    .join("\n");
}

export function buildWhatsAppUrl(ticket: Ticket) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(buildOrderMessage(ticket))}`;
}
