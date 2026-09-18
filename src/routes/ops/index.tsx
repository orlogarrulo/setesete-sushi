import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ExportBar } from "@/components/export-bar.tsx";
import { getDashboard } from "@/lib/ops.functions";
import { KPI_COPY } from "@/lib/ops";
import { formatKz } from "@/lib/utils";

export const Route = createFileRoute("/ops/")({
  component: OpsDashboard,
});

type Dash = Awaited<ReturnType<typeof getDashboard>>;

function OpsDashboard() {
  const [data, setData] = useState<Dash | null>(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    void getDashboard()
      .then(setData)
      .catch((e: unknown) => setErr(e instanceof Error ? e.message : "Erro"));
  }, []);

  if (err) return <p className="text-sm text-kaki">{err}</p>;
  if (!data) return <p className="text-sm text-stone">A carregar o painel…</p>;

  const cards = [
    { label: KPI_COPY[0].pt, value: formatKz(data.today.revenue), why: KPI_COPY[0].why.pt },
    { label: KPI_COPY[1].pt, value: String(data.today.orders), why: KPI_COPY[1].why.pt },
    { label: KPI_COPY[2].pt, value: formatKz(data.today.avgTicket), why: KPI_COPY[2].why.pt },
    { label: KPI_COPY[3].pt, value: `${data.kpis.cycleMin} min`, why: KPI_COPY[3].why.pt },
    { label: KPI_COPY[4].pt, value: `${data.kpis.onTimePct}%`, why: KPI_COPY[4].why.pt },
    { label: KPI_COPY[5].pt, value: `${data.kpis.repeatPct}%`, why: KPI_COPY[5].why.pt },
  ];

  return (
    <div>
      <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Painel</p>
      <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
        <h1 className="font-display text-4xl">O dia da casa</h1>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="/manual/setesete-manual-seguimento.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-10 items-center rounded-full border border-rice/15 px-4 text-[11px] font-semibold tracking-[0.12em] uppercase"
          >
            Manual de seguimento
          </a>
          <ExportBar
            title="Painel Sete Sete"
            filename="setesete-painel"
            orientation="landscape"
            headers={["Secção", "Item", "Valor"]}
            rows={[
              ...cards.map((c) => ["KPI", c.label, c.value]),
              ...data.topProducts.map((p) => ["Top peças", p.name, `${p.qty} × ${formatKz(p.revenue)}`]),
              ...data.zones.map((z) => ["Zonas", z.zone, `${z.orders} ped. · ${formatKz(z.revenue)}`]),
              ...data.daily.map((d) => ["14 dias", d.day, `${d.orders} ped. · ${formatKz(d.revenue)}`]),
            ]}
          />
        </div>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone">
        Seis números que bastam para gerir o serviço: receita, carga, ticket,
        ciclo, pontualidade e recorrência. O resto é detalhe — zonas, produtos,
        e o CRM a puxar quem já não pede.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <article
            key={c.label}
            className="rounded-xl bg-rice/4 px-5 py-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-rice)_8%,transparent)]"
          >
            <p className="text-[11px] tracking-[0.16em] text-stone uppercase">{c.label}</p>
            <p className="mt-2 font-display text-3xl text-rice tabular-nums">{c.value}</p>
            <p className="mt-2 text-xs leading-relaxed text-stone">{c.why}</p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { l: "Recebidos", n: data.live.received },
          { l: "Cozinha", n: data.live.preparing },
          { l: "Prontos", n: data.live.ready },
          { l: "Em rota", n: data.live.out },
        ].map((item) => (
          <Link
            key={item.l}
            to="/ops/encomendas"
            className="rounded-xl bg-kaki/15 px-4 py-4 text-center"
          >
            <p className="font-display text-3xl tabular-nums">{item.n}</p>
            <p className="mt-1 text-[11px] tracking-[0.14em] text-kaki-soft uppercase">
              {item.l}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-2xl">Receita · 14 dias</h2>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.daily}>
                <CartesianGrid stroke="rgba(244,240,232,0.08)" vertical={false} />
                <XAxis dataKey="day" stroke="#8a8278" fontSize={11} tickLine={false} />
                <YAxis stroke="#8a8278" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ background: "#1a1714", border: "1px solid #3a3530", borderRadius: 8 }}
                  formatter={(v: number) => formatKz(v)}
                />
                <Line type="monotone" dataKey="revenue" stroke="#e24a17" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>
        <section>
          <h2 className="font-display text-2xl">Pedidos por hora · hoje</h2>
          <div className="mt-4 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.hourly}>
                <CartesianGrid stroke="rgba(244,240,232,0.08)" vertical={false} />
                <XAxis dataKey="label" stroke="#8a8278" fontSize={11} tickLine={false} />
                <YAxis allowDecimals={false} stroke="#8a8278" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{ background: "#1a1714", border: "1px solid #3a3530", borderRadius: 8 }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {data.hourly.map((h) => (
                    <Cell key={h.hour} fill={h.count > 0 ? "#e24a17" : "#3a3530"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section>
          <h2 className="font-display text-2xl">Top peças</h2>
          <ul className="mt-4 divide-y divide-rice/8">
            {data.topProducts.map((p) => (
              <li key={p.name} className="flex items-baseline justify-between gap-3 py-3">
                <span>
                  {p.name}
                  <span className="ml-2 text-xs text-stone">{p.qty}×</span>
                </span>
                <span className="tabular-nums text-kaki-soft">{formatKz(p.revenue)}</span>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">Zonas</h2>
          <ul className="mt-4 divide-y divide-rice/8">
            {data.zones.slice(0, 7).map((z) => (
              <li key={z.zone} className="flex items-baseline justify-between gap-3 py-3">
                <span>
                  {z.zone}
                  <span className="ml-2 text-xs text-stone">{z.orders} ped.</span>
                </span>
                <span className="tabular-nums text-kaki-soft">{formatKz(z.revenue)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <section>
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl">VIP · maior LTV</h2>
            <Link to="/ops/crm" className="text-xs tracking-[0.14em] text-kaki-soft uppercase">
              CRM
            </Link>
          </div>
          <ul className="mt-4 divide-y divide-rice/8">
            {data.vip.map((c) => (
              <li key={c.id}>
                <Link
                  to="/ops/crm/$id"
                  params={{ id: c.id }}
                  className="flex items-baseline justify-between gap-3 py-3 hover:text-kaki-soft"
                >
                  <span>
                    {c.name}
                    <span className="ml-2 text-xs text-stone">{c.zone}</span>
                  </span>
                  <span className="tabular-nums">{formatKz(c.spent)}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="font-display text-2xl">A reactivar · 10+ dias</h2>
          <ul className="mt-4 divide-y divide-rice/8">
            {data.winback.length === 0 ? (
              <li className="py-3 text-sm text-stone">Ninguém em silêncio.</li>
            ) : (
              data.winback.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/ops/crm/$id"
                    params={{ id: c.id }}
                    className="flex items-baseline justify-between gap-3 py-3 hover:text-kaki-soft"
                  >
                    <span>
                      {c.name}
                      <span className="ml-2 text-xs text-stone">{c.zone}</span>
                    </span>
                    <span className="text-xs text-stone">
                      {c.lastOrderAt
                        ? new Date(c.lastOrderAt).toLocaleDateString("pt-PT")
                        : "—"}
                    </span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </section>
      </div>
    </div>
  );
}
