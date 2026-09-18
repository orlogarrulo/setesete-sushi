import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { ExportBar } from "@/components/export-bar.tsx";
import { listCouriers, listOrders, saveCourier } from "@/lib/ops.functions";
import { STATUS_META, waDigits, type CourierRow, type OrderRow } from "@/lib/ops";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ops/motoboys/")({
  component: MotoboysPage,
});

const LIVE: OrderRow["status"][] = ["confirmed", "preparing", "ready", "out", "nearby"];

function MotoboysPage() {
  const [rows, setRows] = useState<CourierRow[]>([]);
  const [jobs, setJobs] = useState<OrderRow[]>([]);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<string | "new">("new");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const load = useCallback(async () => {
    const [list, orders] = await Promise.all([
      listCouriers({ data: { all: true } }),
      listOrders({ data: {} }),
    ]);
    setRows(list);
    setJobs(orders.filter((o) => LIVE.includes(o.status) && o.riderToken));
  }, []);

  useEffect(() => {
    void load().catch((e: unknown) => setErr(e instanceof Error ? e.message : "Erro"));
  }, [load]);

  function startNew() {
    setEditing("new");
    setName("");
    setPhone("");
    setErr("");
  }

  function startEdit(row: CourierRow) {
    setEditing(row.id);
    setName(row.name);
    setPhone(row.phone);
    setErr("");
  }

  async function onSave(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr("");
    try {
      await saveCourier({
        data: {
          id: editing !== "new" ? editing : undefined,
          name,
          phone,
          active: true,
        },
      });
      startNew();
      await load();
    } catch (e) {
      setErr(e instanceof Error ? e.message : "Não foi possível gravar.");
    } finally {
      setBusy(false);
    }
  }

  async function toggle(row: CourierRow) {
    setBusy(true);
    try {
      await saveCourier({
        data: { id: row.id, name: row.name, phone: row.phone, active: !row.active },
      });
      await load();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Entregas · não é o CRM</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl">Motoboys</h1>
          <p className="mt-2 max-w-xl text-sm text-stone">
            Quem leva a caixa. Clientes estão em CRM. Aqui só a equipa de entrega: nome, WhatsApp, activo ou pausado.
          </p>
        </div>
        <ExportBar
          title="Motoboys Sete Sete"
          filename="setesete-motoboys"
          orientation="portrait"
          headers={["Nome", "WhatsApp", "Estado"]}
          rows={rows.map((c) => [c.name, c.phone || "—", c.active ? "activo" : "pausado"])}
        />
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <ul className="divide-y divide-rice/10 overflow-hidden rounded-xl bg-rice/5">
          {rows.length === 0 ? (
            <li className="px-5 py-8 text-sm text-stone">Ainda sem motoboys. Cria o primeiro à direita.</li>
          ) : (
            rows.map((c) => {
              const wa = waDigits(c.phone);
              return (
                <li key={c.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                  <div>
                    <p className={cn("font-medium", !c.active && "text-stone")}>
                      {c.name}
                      {!c.active ? <span className="ml-2 text-[11px] tracking-[0.12em] uppercase">pausado</span> : null}
                    </p>
                    <p className="mt-1 text-sm text-stone">
                      {c.phone ? `WhatsApp ${c.phone}` : "Sem WhatsApp"}
                      {wa ? ` · +${wa}` : ""}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => startEdit(c)}
                      className="min-h-10 rounded-full border border-rice/15 px-3 text-[11px] font-semibold tracking-[0.1em] uppercase"
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void toggle(c)}
                      className="min-h-10 rounded-full bg-rice/8 px-3 text-[11px] font-semibold tracking-[0.1em] uppercase"
                    >
                      {c.active ? "Pausar" : "Activar"}
                    </button>
                  </div>
                </li>
              );
            })
          )}
        </ul>

        <form onSubmit={(e) => void onSave(e)} className="rounded-xl bg-rice/5 p-5">
          <p className="text-[11px] tracking-[0.16em] text-stone uppercase">
            {editing === "new" ? "Novo motoboy" : "Editar motoboy"}
          </p>
          <label className="mt-4 block text-xs tracking-[0.16em] text-stone uppercase">
            Nome
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex. Nélson"
              className="mt-2 min-h-12 w-full rounded-lg border border-rice/15 bg-nori px-3 text-sm text-rice outline-none ring-kaki focus:ring-2"
            />
          </label>
          <label className="mt-4 block text-xs tracking-[0.16em] text-stone uppercase">
            WhatsApp
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="923 000 000"
              inputMode="tel"
              className="mt-2 min-h-12 w-full rounded-lg border border-rice/15 bg-nori px-3 text-sm text-rice outline-none ring-kaki focus:ring-2"
            />
          </label>
          <p className="mt-2 text-xs text-stone">Número angolano. O 244 entra sozinho.</p>
          {err ? <p className="mt-3 text-sm text-kaki">{err}</p> : null}
          <div className="mt-4 flex gap-2">
            <button
              type="submit"
              disabled={busy}
              className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase disabled:opacity-40"
            >
              {editing === "new" ? "Criar motoboy" : "Gravar"}
            </button>
            {editing !== "new" ? (
              <button
                type="button"
                onClick={startNew}
                className="inline-flex min-h-11 items-center rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase"
              >
                Novo
              </button>
            ) : null}
          </div>
        </form>
      </div>

      <section id="provar" className="mt-12 scroll-mt-24">
        <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Experimentar</p>
        <h2 className="mt-2 font-display text-3xl">Ecrã do motoboy</h2>
        <p className="mt-2 max-w-2xl text-sm text-stone">
          Abre no mesmo ecrã — é o que o motoboy vê no telemóvel. Não precisas de WhatsApp para testar. Depois de alocar um motoboy na ficha da encomenda, o link também vai no número dele.
        </p>
        <ul className="mt-6 divide-y divide-rice/10 overflow-hidden rounded-xl bg-rice/5">
          {jobs.length === 0 ? (
            <li className="px-5 py-8 text-sm text-stone">
              Não há encomendas em curso com rota. Confirma um pedido em Encomendas e volta aqui.
            </li>
          ) : (
            jobs.map((o) => (
              <li key={o.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <div>
                  <p className="text-xs tracking-[0.12em] text-kaki-soft uppercase">{o.id}</p>
                  <p className="mt-1 font-medium">
                    {o.zone} · {STATUS_META[o.status].pt}
                  </p>
                  <p className="mt-1 text-sm text-stone">
                    {o.courierName ? `Alocado a ${o.courierName}` : "Ainda sem motoboy"}
                  </p>
                </div>
                <Link
                  to="/moto/$token"
                  params={{ token: o.riderToken }}
                  className="inline-flex min-h-11 items-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase"
                >
                  Abrir rota
                </Link>
              </li>
            ))
          )}
        </ul>
      </section>
    </div>
  );
}
