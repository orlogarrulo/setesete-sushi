"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";

type OrderStatus = "novo" | "preparando" | "pronto" | "entregue" | "cancelado";

interface Order {
  id: string;
  createdAt: string;
  customerName: string;
  customerPhone: string;
  customerAddress?: string;
  items: { name: string; quantity: number; notes?: string }[];
  notes?: string;
  status: OrderStatus;
  source: string;
}

const statusColors: Record<OrderStatus, string> = {
  novo: "bg-blue-500/20 text-blue-300 border-blue-500/40",
  preparando: "bg-yellow-500/20 text-yellow-300 border-yellow-500/40",
  pronto: "bg-green-500/20 text-green-300 border-green-500/40",
  entregue: "bg-zinc-500/20 text-zinc-300 border-zinc-500/40",
  cancelado: "bg-red-500/20 text-red-300 border-red-500/40",
};

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadOrders() {
    try {
      const res = await fetch("/api/orders");
      const data = await res.json();
      setOrders(data.orders || []);
    } catch {
      console.error("Failed to load orders");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadOrders();
    const interval = setInterval(loadOrders, 15000); // refresh every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">Gestão de Pedidos</h1>
            <p className="text-sm text-muted">
              Pedidos recebidos pelo site (em memória – reinicia quando o servidor reinicia)
            </p>
          </div>
          <button
            onClick={loadOrders}
            className="rounded-full border border-white/20 px-4 py-2 text-sm hover:bg-white/5"
          >
            Actualizar
          </button>
        </div>

        {loading ? (
          <p className="text-muted">A carregar...</p>
        ) : orders.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-white/15 py-16 text-center">
            <p className="text-muted">Ainda não há pedidos.</p>
            <p className="mt-2 text-sm text-muted">
              Quando alguém usar a página /pedir, os pedidos aparecem aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-2xl border border-white/10 bg-card p-5"
              >
                <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <span className="font-mono text-sm text-accent">{order.id}</span>
                    <h3 className="text-lg font-semibold text-white">
                      {order.customerName}
                    </h3>
                    <p className="text-sm text-muted">{order.customerPhone}</p>
                    {order.customerAddress && (
                      <p className="text-sm text-muted">{order.customerAddress}</p>
                    )}
                  </div>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium uppercase ${statusColors[order.status]}`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="mb-3 text-sm">
                  <p className="mb-1 font-medium text-white">Itens:</p>
                  <ul className="list-inside list-disc text-muted">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.quantity}x {item.name}
                        {item.notes ? ` – ${item.notes}` : ""}
                      </li>
                    ))}
                  </ul>
                </div>

                {order.notes && (
                  <p className="mb-3 text-sm text-muted">
                    <span className="font-medium text-white">Notas:</span> {order.notes}
                  </p>
                )}

                <p className="text-xs text-muted">
                  {new Date(order.createdAt).toLocaleString("pt-AO")} • Fonte: {order.source}
                </p>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-sm text-yellow-200">
          <strong>Nota importante:</strong> Neste momento os pedidos ficam apenas na memória do
          servidor. Quando fizeres deploy no Vercel e reiniciares, os pedidos desaparecem.
          Na próxima fase ligamos a uma base de dados real (Supabase ou Vercel Postgres) para
          guardar permanentemente e adicionamos botões para mudar o status.
        </div>
      </main>
    </>
  );
}
