import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sete Sete | Sushi Delivery Luanda",
  description:
    "Sushi & Combos frescos em Luanda. Pedidos rápidos via WhatsApp. Todos os dias das 12h às 22h.",
  keywords: ["sushi", "luanda", "delivery", "sete sete", "combos", "japonesa"],
  openGraph: {
    title: "Sete Sete | Sushi Delivery Luanda",
    description: "Sushi & Combos frescos em Luanda. Pedidos rápidos via WhatsApp.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
