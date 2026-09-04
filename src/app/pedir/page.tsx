"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";

const WHATSAPP = "244974506949";

export default function PedirPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [itemsText, setItemsText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    orderId: string;
    whatsappLink: string;
  } | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Very simple parsing: each line = 1 item
    const items = itemsText
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => ({
        name: line,
        quantity: 1,
      }));

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: name,
          customerPhone: phone,
          customerAddress: address || undefined,
          items,
          notes: notes || undefined,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setResult({
          orderId: data.order.id,
          whatsappLink: data.whatsappLink,
        });
      } else {
        alert(data.error || "Erro ao criar pedido");
      }
    } catch {
      alert("Erro de ligação. Tenta novamente ou usa o WhatsApp directamente.");
    } finally {
      setLoading(false);
    }
  }

  if (result) {
    return (
      <>
        <Header />
        <main className="mx-auto max-w-lg px-4 py-16 text-center">
          <div className="mb-6 text-5xl">✅</div>
          <h1 className="mb-3 text-2xl font-bold text-white">Pedido criado!</h1>
          <p className="mb-2 text-muted">Nº do pedido: <strong className="text-white">{result.orderId}</strong></p>
          <p className="mb-8 text-muted">
            Agora abre o WhatsApp para enviar a confirmação e finalizar o pedido.
          </p>
          <a
            href={result.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-8 py-4 font-semibold text-white hover:bg-green-500"
          >
            Enviar no WhatsApp
          </a>
          <div className="mt-8">
            <Link href="/" className="text-sm text-muted hover:text-white">
              ← Voltar ao início
            </Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="mx-auto max-w-lg px-4 py-12">
        <h1 className="mb-2 text-3xl font-bold text-white">Fazer Pedido</h1>
        <p className="mb-8 text-muted">
          Preenche os dados e no final abriremos o WhatsApp com o pedido já formatado.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-white">Nome *</label>
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-card px-4 py-3 text-white outline-none focus:border-primary"
              placeholder="O teu nome"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-white">Telefone / WhatsApp *</label>
            <input
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-card px-4 py-3 text-white outline-none focus:border-primary"
              placeholder="+244 9XX XXX XXX"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-white">Morada (opcional)</label>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-xl border border-white/15 bg-card px-4 py-3 text-white outline-none focus:border-primary"
              placeholder="Zona / rua para entrega"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-white">
              O que queres pedir? *
            </label>
            <textarea
              required
              value={itemsText}
              onChange={(e) => setItemsText(e.target.value)}
              rows={5}
              className="w-full rounded-xl border border-white/15 bg-card px-4 py-3 text-white outline-none focus:border-primary"
              placeholder={"Exemplo:\nCombo Clássico\n2x California Roll\n1 Temaki Salmão"}
            />
            <p className="mt-1 text-xs text-muted">Escreve um item por linha</p>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-white">Notas (opcional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
              className="w-full rounded-xl border border-white/15 bg-card px-4 py-3 text-white outline-none focus:border-primary"
              placeholder="Sem wasabi, entregar depois das 19h..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary py-4 font-semibold text-white shadow-lg shadow-primary/25 transition hover:bg-primary-hover disabled:opacity-60"
          >
            {loading ? "A criar pedido..." : "Criar Pedido e Abrir WhatsApp"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-muted">
          Ou fala directamente:{" "}
          <a href={`https://wa.me/${WHATSAPP}`} className="text-accent hover:underline">
            +244 974 506 949
          </a>
        </p>
      </main>
    </>
  );
}
