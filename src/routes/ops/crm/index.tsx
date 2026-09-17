import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { ZONES } from "@/lib/geo";
import { CRM_TAGS, type CustomerRow } from "@/lib/ops";
import { listCustomers, upsertCustomer } from "@/lib/ops.functions";
import { formatKz, cn } from "@/lib/utils";

export const Route = createFileRoute("/ops/crm/")({
  component: CrmPage,
});

function CrmPage() {
  const [rows, setRows] = useState<CustomerRow[]>([]);
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("");
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [zone, setZone] = useState(ZONES[0].id);

  const load = useCallback(async () => {
    const list = await listCustomers({ data: { q, tag } });
    setRows(list);
  }, [q, tag]);

  useEffect(() => {
    const t = window.setTimeout(() => {
      void load().catch((e: unknown) => setErr(e instanceof Error ? e.message : "Erro"));
    }, 120);
    return () => window.clearTimeout(t);
  }, [load]);

  async function onCreate(e: FormEvent) {
    e.preventDefault();
    await upsertCustomer({ data: { name, phone, zone, notes: "", tags: ["novo"] } });
    setName("");
    setPhone("");
    setOpen(false);
    await load();
  }

  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Clientes</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-4xl">CRM da casa</h1>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex min-h-11 items-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep"
        >
          Novo contacto
        </button>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone">
        Cada pedido cria ou actualiza uma ficha. Tags, notas da casa, histórico e
        valor de vida — o CRM próprio da Sete Sete, sem plataforma terceira.
      </p>

      {open ? (
        <form
          onSubmit={(e) => void onCreate(e)}
          className="mt-6 grid gap-3 rounded-xl bg-rice/4 p-5 sm:grid-cols-3"
        >
          <input
            required
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="min-h-11 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2"
          />
          <input
            required
            placeholder="Telefone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="min-h-11 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2"
          />
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className="min-h-11 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2"
          >
            {ZONES.map((z) => (
              <option key={z.id} value={z.id}>
                {z.name}
              </option>
            ))}
          </select>
          <button
            type="submit"
            className="min-h-11 rounded-full bg-rice text-sm font-semibold tracking-[0.12em] text-nori uppercase sm:col-span-3"
          >
            Guardar ficha
          </button>
        </form>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Nome, telefone, zona"
          className="min-h-11 flex-1 rounded-lg border border-rice/15 bg-nori px-3 text-sm outline-none ring-kaki focus:ring-2"
        />
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTag("")}
          className={cn(
            "min-h-10 rounded-full px-3 text-[11px] tracking-[0.12em] uppercase",
            tag === "" ? "bg-kaki text-rice" : "bg-rice/8",
          )}
        >
          Todos
        </button>
        {CRM_TAGS.map((tg) => (
          <button
            key={tg.id}
            type="button"
            onClick={() => setTag(tg.id === tag ? "" : tg.id)}
            className={cn(
              "min-h-10 rounded-full px-3 text-[11px] tracking-[0.12em] uppercase",
              tag === tg.id ? "bg-kaki text-rice" : "bg-rice/8",
            )}
          >
            {tg.pt}
          </button>
        ))}
      </div>

      {err ? <p className="mt-4 text-sm text-kaki">{err}</p> : null}

      <ul className="mt-6 divide-y divide-rice/8">
        {rows.map((c) => (
          <li key={c.id}>
            <Link
              to="/ops/crm/$id"
              params={{ id: c.id }}
              className="flex flex-wrap items-baseline justify-between gap-2 py-4 hover:text-kaki-soft"
            >
              <div>
                <p className="font-medium">{c.name}</p>
                <p className="text-xs text-stone">
                  {c.zone} · {c.phone}
                </p>
                {c.tags.length ? (
                  <p className="mt-1 text-[10px] tracking-[0.14em] text-kaki-soft uppercase">
                    {c.tags.join(" · ")}
                  </p>
                ) : null}
              </div>
              <div className="text-right">
                <p className="tabular-nums">{formatKz(c.spent)}</p>
                <p className="text-xs text-stone">{c.orderCount} ped.</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
