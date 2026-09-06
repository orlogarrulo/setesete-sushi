import { useEffect, type ReactNode } from "react";
import { CartDrawer } from "@/components/cart-drawer.tsx";
import { Footer } from "@/components/footer.tsx";
import { Header } from "@/components/header.tsx";
import { WhatsAppFab } from "@/components/whatsapp-fab.tsx";
import { useCart } from "@/store/cart";
import { useLang } from "@/store/lang";

export function Shell({ children }: { children: ReactNode }) {
  useEffect(() => {
    void useCart.persist.rehydrate();
    void useLang.persist.rehydrate();
  }, []);

  return (
    <div className="flex min-h-dvh flex-col bg-rice text-ink">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
      <CartDrawer />
      <WhatsAppFab />
    </div>
  );
}
