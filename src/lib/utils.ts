import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatKz(value: number) {
  return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
}

/** WhatsApp / pedidos — número da casa. */
export const WHATSAPP = "244945407841";
export const WHATSAPP_DISPLAY = "+244 945 407 841";
export const EMAIL = "info@setesete.ao";
export const INSTAGRAM = "https://www.instagram.com/setesete.ao/";
/** Public company page (not the admin dashboard). */
export const LINKEDIN = "https://www.linkedin.com/company/135004198/";
export const MANO_URL = "https://shop.manoapp.com/pt";
export const HOURS = "12h – 22h";
export const CITY = "Luanda";
export const SITE = "setesete.ao";

export const MCX_DISPLAY = "+244 945 407 841";

export type PayMethod = "mcx" | "transfer" | "cash";

export const PAY_METHODS: Record<
  PayMethod,
  { pt: string; en: string; hint: { pt: string; en: string } }
> = {
  mcx: {
    pt: "Multicaixa Express",
    en: "Multicaixa Express",
    hint: {
      pt: "Pagas no telemóvel. A referência é o número da fatura.",
      en: "Pay on your phone. The invoice number is the reference.",
    },
  },
  transfer: {
    pt: "Transferência bancária",
    en: "Bank transfer",
    hint: {
      pt: "Anexa o comprovativo em PDF. Envia o mesmo ficheiro no WhatsApp.",
      en: "Attach the PDF receipt. Send the same file on WhatsApp.",
    },
  },
  cash: {
    pt: "Dinheiro no local",
    en: "Cash on delivery",
    hint: {
      pt: "Pagas na entrega, contra a fatura.",
      en: "Pay on delivery, against the invoice.",
    },
  },
};
