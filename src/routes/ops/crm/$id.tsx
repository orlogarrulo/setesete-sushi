import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { CRM_TAGS, STATUS_META, type CustomerRow, type OrderRow } from "@/lib/ops";
import { addCrmNote, getCustomer, setCustomerTags } from "@/lib/ops.functions";
import { readStaffPin } from "@/lib/staff";
import { formatKz, cn } from "@/lib/utils";

export const Route = createFileRoute("/ops/crm/$id")({
  component: CustomerDetail,
});

type Detail = CustomerRow & {
  orders: OrderRow[];
  crmNotes: { id: number; body: string; author: string; createdAt: string }[];
};

function CustomerDetail() {
  const { id } = Route.useParams();
  const [data, setData] = useState<Detail | null | undefined>(undefined);
  const [note, setNote] = useState("");

  const load = useCallback(async () => {
    const pin = readStaffPin();
    if (!pin) return;
    const row = await getCustomer({ data: { pin, id } });
    setData(row);
  }, [id]);

  useEffect(() => {
    void load();
  }, [load]);

  if (data === undefined) return <p className="text-sm text-stone">A carregar…</p>;
  if (data === null) return <p className="text-sm text-kaki">Cliente não encontrado.</p>;

  async function toggleTag(tag: string) {
    const pin = readStaffPin();
    if (!pin) return;
    const current = data;
    if (!current) return;
    const tags = current.tags.includes(tag)
      ? current.tags.filter((t) => t !== tag)
      : [...current.tags, tag];
    await setCustomerTags({ data: { pin, id: current.id, tags } });
    await load();
  }

  async function onNote(e: FormEvent) {
    e.preventDefault();
    const pin = readStaffPin();
    const current = data;
    if (!pin || !current || !note.trim()) return;
    await addCrmNote({ data: { pin, customerId: current.id, body: note.trim() } });
    setNote("");
    await load();
  }

  return (
    <div>
      <Link to="/ops/crm" className="text-xs tracking-[0.14em] text-stone uppercase hover:text-rice">
        ← CRM
      </Link>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl">{data.name}</h1>
          <p className="mt-2 text-sm text-stone">
            {data.zone} · {data.phone}
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-3xl tabular-nums">{formatKz(data.spent)}</p>
          <p className="text-xs text-stone">{data.orderCount} pedidos · LTV</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {CRM_TAGS.map((tg) => (
          <button
            key={tg.id}
            type="button"
            onClick={() => void toggleTag(tg.id)}
            className={cn(
              "min-h-10 rounded-full px-3 text-[11px] tracking-[0.12em] uppercase",
              data.tags.includes(tg.id) ? "bg-kaki text-rice" : "bg-rice/8",
            )}
          >
            {tg.pt}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-2xl">Histórico</h2>
          <ul className="mt-4 divide-y divide-rice/8">
            {data.orders.map((o) => (
              <li key={o.id} className="py-3">
                <Link
                  to="/ops/encomendas/$id"
                  params={{ id: o.id }}
                  className="flex items-baseline justify-between gap-3 hover:text-kaki-soft"
                >
                  <span>
                    {o.id}
                    <span className="ml-2 text-xs text-stone">{STATUS_META[o.status].pt}</span>
                  </span>
                  <span className="tabular-nums">{formatKz(o.total)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Notas da casa</h2>
          <form onSubmit={(e) => void onNote(e)} className="mt-4">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Alergia, horário, preferência…"
              className="w-full rounded-lg border border-rice/15 bg-nori px-3 py-2 text-sm outline-none ring-kaki focus:ring-2"
            />
            <button
              type="submit"
              className="mt-3 inline-flex min-h-11 items-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep"
            >
              Adicionar nota
            </button>
          </form>
          <ul className="mt-6 space-y-4">
            {data.crmNotes.map((n) => (
              <li key={n.id}>
                <p className="text-sm">{n.body}</p>
                <p className="mt-1 text-[11px] text-stone">
                  {n.author} · {new Date(n.createdAt).toLocaleString("pt-PT")}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
