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

export const MCX_DISPLAY = "974506949";
export const MCX_NUMBER = "974506949";
export const IBAN = "AO06.0040.0000.1297.1473.1038.1";

export type PayMethod = "mcx" | "transfer" | "cash";

export const PAY_METHODS: Record<
  PayMethod,
  { pt: string; en: string; hint: { pt: string; en: string } }
> = {
  mcx: {
    pt: "Multicaixa Express",
    en: "Multicaixa Express",
    hint: {
      pt: "Pagas no telemóvel para 974506949. A referência é o número da fatura.",
      en: "Pay on your phone to 974506949. The invoice number is the reference.",
    },
  },
  transfer: {
    pt: "Transferência bancária",
    en: "Bank transfer",
    hint: {
      pt: "IBAN AO06.0040.0000.1297.1473.1038.1. Anexa o comprovativo em PDF.",
      en: "IBAN AO06.0040.0000.1297.1473.1038.1. Attach the PDF receipt.",
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
