import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type FormEvent } from "react";
import { ExportBar } from "@/components/export-bar.tsx";
import { listCouriers, saveCourier } from "@/lib/ops.functions";
import { waDigits, type CourierRow } from "@/lib/ops";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ops/motoboys/")({
  component: MotoboysPage,
});

function MotoboysPage() {
  const [rows, setRows] = useState<CourierRow[]>([]);
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [editing, setEditing] = useState<string | "new" | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const load = useCallback(async () => {
    const list = await listCouriers({ data: { all: true } });
    setRows(list);
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
          id: editing && editing !== "new" ? editing : undefined,
          name,
          phone,
          active: true,
        },
      });
      setEditing(null);
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
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Entregas</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-4xl">Motoboys</h1>
          <p className="mt-2 max-w-xl text-sm text-stone">
            Lista da casa. Cada um tem o WhatsApp. Quando atribuís uma encomenda, o link da rota vai directo para esse número.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <ExportBar
            title="Motoboys Sete Sete"
            filename="setesete-motoboys"
            orientation="portrait"
            headers={["Nome", "WhatsApp", "Estado"]}
            rows={rows.map((c) => [c.name, c.phone || "—", c.active ? "activo" : "pausado"])}
          />
          <button
            type="button"
            onClick={startNew}
            className="inline-flex min-h-11 items-center rounded-full bg-kaki px-4 text-xs font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep"
          >
            Novo motoboy
          </button>
        </div>
      </div>

      {editing ? (
        <form onSubmit={(e) => void onSave(e)} className="mt-8 max-w-md rounded-xl bg-rice/5 p-5">
          <p className="text-[11px] tracking-[0.16em] text-stone uppercase">
            {editing === "new" ? "Novo" : "Editar"}
          </p>
          <label className="mt-4 block text-xs tracking-[0.16em] text-stone uppercase">
            Nome
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              Gravar
            </button>
            <button
              type="button"
              onClick={() => setEditing(null)}
              className="inline-flex min-h-11 items-center rounded-full border border-rice/15 px-4 text-xs font-semibold tracking-[0.12em] uppercase"
            >
              Cancelar
            </button>
          </div>
        </form>
      ) : err ? (
        <p className="mt-6 text-sm text-kaki">{err}</p>
      ) : null}

      <ul className="mt-8 divide-y divide-rice/10 overflow-hidden rounded-xl bg-rice/5">
        {rows.length === 0 ? (
          <li className="px-5 py-8 text-sm text-stone">Ainda sem motoboys. Cria o primeiro.</li>
        ) : (
          rows.map((c) => {
            const wa = waDigits(c.phone);
            return (
              <li key={c.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <div>
                  <p className={cn("font-medium", !c.active && "text-stone")}>{c.name}</p>
                  <p className="mt-1 text-sm text-stone">
                    {c.phone ? c.phone : "Sem WhatsApp"}
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
    </div>
  );
}
