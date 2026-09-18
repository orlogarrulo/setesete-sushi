import { productById, type Lang } from "@/lib/menu";
import { formatKz, IBAN, MCX_NUMBER, WHATSAPP, type PayMethod } from "@/lib/utils";
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
  zone?: string;
  notes: string;
  pay: PayMethod;
  receiptName?: string;
  lines: TicketLine[];
  total: number;
  lang: Lang;
  trackToken?: string;
  trackUrl?: string;
  afterHours?: boolean;
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
  zone?: string;
  notes: string;
  pay: PayMethod;
  receiptName?: string;
  afterHours?: boolean;
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
    zone: opts.zone,
    notes: opts.notes.trim(),
    pay: opts.pay,
    receiptName: opts.receiptName,
    afterHours: opts.afterHours,
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
  if (ticket.afterHours) {
    extra.push(
      lang === "pt"
        ? "*Encomenda a ser confirmada — fora do horário*"
        : "*Order pending confirmation — outside opening hours*",
    );
    extra.push(
      lang === "pt"
        ? "Contactamos-te na abertura (12h–22h), pela ordem das encomendas."
        : "We will contact you at opening (12:00–22:00), in order of arrival.",
    );
  }
  if (ticket.pay === "transfer") {
    extra.push(`IBAN: ${IBAN}`);
  }
  if (ticket.pay === "mcx") {
    extra.push(
      lang === "pt"
        ? `Multicaixa Express: ${MCX_NUMBER} · referência da fatura ${ticket.id}`
        : `Multicaixa Express: ${MCX_NUMBER} · invoice reference ${ticket.id}`,
    );
  }
  if (ticket.receiptName) {
    extra.push(
      lang === "pt"
        ? `Comprovativo: ${ticket.receiptName}`
        : `Proof: ${ticket.receiptName}`,
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
    ticket.trackUrl
      ? lang === "pt"
        ? `Seguir encomenda: ${ticket.trackUrl}`
        : `Track order: ${ticket.trackUrl}`
      : null,
  ]
    .filter((x) => x !== null)
    .join("\n");
}

export function clientWhatsAppDigits(phone: string) {
  let d = phone.replace(/\D/g, "");
  if (d.startsWith("00")) d = d.slice(2);
  if (d.startsWith("0") && d.length === 10) d = d.slice(1);
  if (d.length === 9 && d.startsWith("9")) d = `244${d}`;
  return d;
}

export function buildWhatsAppUrl(ticket: Ticket) {
  const n = clientWhatsAppDigits(ticket.phone) || WHATSAPP;
  return `https://wa.me/${n}?text=${encodeURIComponent(buildOrderMessage(ticket))}`;
}
