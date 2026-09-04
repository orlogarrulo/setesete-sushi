import { NextRequest, NextResponse } from "next/server";
import { createOrder, buildWhatsAppMessage } from "@/lib/orders";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { customerName, customerPhone, customerAddress, items, notes } = body;

    if (!customerName || !customerPhone || !items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Nome, telefone e pelo menos 1 item são obrigatórios." },
        { status: 400 }
      );
    }

    const order = createOrder({
      customerName,
      customerPhone,
      customerAddress,
      items,
      notes,
      source: "website",
    });

    const whatsappMessage = buildWhatsAppMessage(order);
    const whatsappLink = `https://wa.me/244974506949?text=${encodeURIComponent(whatsappMessage)}`;

    // Here we can later add:
    // - Send email with Resend
    // - Notify kitchen
    // - Save permanently to database

    return NextResponse.json({
      success: true,
      order,
      whatsappLink,
      message: "Pedido criado com sucesso. Abra o WhatsApp para confirmar.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao criar pedido." }, { status: 500 });
  }
}

export async function GET() {
  // For admin later – protect this route
  const { getOrders } = await import("@/lib/orders");
  return NextResponse.json({ orders: getOrders() });
}
