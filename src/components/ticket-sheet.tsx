import { Mark } from "@/components/mark.tsx";
import { copy, t } from "@/lib/copy";
import {
  formatTicketWhen,
  type Ticket,
} from "@/lib/ticket";
import {
  EMAIL,
  formatKz,
  PAY_METHODS,
  SITE,
  WHATSAPP_DISPLAY,
} from "@/lib/utils";

export function TicketSheet({ ticket }: { ticket: Ticket }) {
  const lang = ticket.lang;
  const pay = PAY_METHODS[ticket.pay];

  return (
    <article
      id="ticket-sheet"
      className="ticket-sheet relative overflow-hidden bg-rice-warm text-ink"
    >
      <div className="absolute inset-y-0 left-0 w-1.5 bg-kaki print:w-2" />
      <header className="flex items-start justify-between gap-4 py-7 pr-8 pl-9">
        <div className="flex items-center gap-3">
          <Mark className="size-11" />
          <div>
            <p className="text-[13px] font-semibold tracking-[0.2em] uppercase">
              Sete Sete
            </p>
            <p className="mt-0.5 text-[9px] tracking-[0.22em] text-kaki uppercase">
              Sushi · Luanda
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-[10px] tracking-[0.16em] text-kaki uppercase">
            {t(copy.ticket.kicker, lang)}
          </p>
          <p className="mt-1 font-display text-xl leading-none tracking-tight">
            {ticket.id}
          </p>
          <p className="mt-1.5 text-[11px] text-stone">
            {formatTicketWhen(ticket.createdAt, lang)}
          </p>
        </div>
      </header>

      <div className="mx-9 border-t border-kaki/30" />

      <dl className="grid gap-3 px-9 py-5 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-[10px] tracking-[0.18em] text-stone uppercase">
            {t(copy.ticket.client, lang)}
          </dt>
          <dd className="mt-1 font-medium">{ticket.name}</dd>
          <dd className="text-stone">{ticket.phone}</dd>
        </div>
        <div>
          <dt className="text-[10px] tracking-[0.18em] text-stone uppercase">
            {lang === "pt" ? "Morada" : "Address"}
          </dt>
          <dd className="mt-1">{ticket.address}</dd>
        </div>
      </dl>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-y border-ink/8 text-left text-[10px] tracking-[0.16em] text-stone uppercase">
            <th className="px-9 py-2 font-medium">
              {t(copy.ticket.item, lang)}
            </th>
            <th className="py-2 pr-2 text-right font-medium">
              {t(copy.ticket.qty, lang)}
            </th>
            <th className="py-2 pr-8 text-right font-medium">
              {t(copy.ticket.total, lang)}
            </th>
          </tr>
        </thead>
        <tbody>
          {ticket.lines.map((l) => (
            <tr key={l.id} className="border-b border-ink/6">
              <td className="px-9 py-2.5">{l.name}</td>
              <td className="py-2.5 pr-2 text-right tabular-nums">{l.qty}</td>
              <td className="py-2.5 pr-8 text-right tabular-nums">
                {formatKz(l.total)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex items-end justify-between px-9 py-5">
        <div>
          <p className="text-[10px] tracking-[0.18em] text-stone uppercase">
            {t(copy.ticket.pay, lang)}
          </p>
          <p className="mt-1 text-sm font-medium">{pay[lang]}</p>
          {ticket.pay === "transfer" && ticket.receiptName ? (
            <p className="mt-1 text-xs text-stone">{ticket.receiptName}</p>
          ) : null}
          {ticket.pay === "mcx" ? (
            <p className="mt-1 text-xs text-stone">
              {lang === "pt" ? "Ref." : "Ref."} {ticket.id}
            </p>
          ) : null}
        </div>
        <div className="text-right">
          <p className="text-[10px] tracking-[0.18em] text-stone uppercase">
            {t(copy.ticket.total, lang)}
          </p>
          <p className="mt-1 font-display text-3xl tabular-nums">
            {formatKz(ticket.total)}
          </p>
        </div>
      </div>

      {ticket.notes ? (
        <p className="px-9 pb-4 text-xs text-stone">
          {lang === "pt" ? "Notas: " : "Notes: "}
          {ticket.notes}
        </p>
      ) : null}

      <footer className="flex items-end justify-between border-t border-ink/8 px-9 py-4 text-[10px] tracking-wide text-stone">
        <span>
          {EMAIL}
          <span className="mx-2 text-kaki">·</span>
          {WHATSAPP_DISPLAY}
        </span>
        <span className="tracking-[0.16em] uppercase">{SITE}</span>
      </footer>
      <p className="px-9 pb-6 text-[10px] tracking-[0.14em] text-stone uppercase">
        {t(copy.ticket.thanks, lang)}
      </p>
    </article>
  );
}
