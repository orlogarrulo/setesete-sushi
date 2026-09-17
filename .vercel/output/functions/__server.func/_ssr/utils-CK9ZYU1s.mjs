import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CK9ZYU1s.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatKz(value) {
	return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
}
/** WhatsApp / pedidos — número da casa. */
var WHATSAPP = "244945407841";
var WHATSAPP_DISPLAY = "+244 945 407 841";
var EMAIL = "info@setesete.ao";
var INSTAGRAM = "https://www.instagram.com/setesete.ao/";
/** Public company page (not the admin dashboard). */
var LINKEDIN = "https://www.linkedin.com/company/135004198/";
var MANO_URL = "https://shop.manoapp.com/pt";
var HOURS = "12h – 22h";
var SITE = "setesete.ao";
var PAY_METHODS = {
	mcx: {
		pt: "Multicaixa Express",
		en: "Multicaixa Express",
		hint: {
			pt: "Pagas no telemóvel. A referência é o número da fatura.",
			en: "Pay on your phone. The invoice number is the reference."
		}
	},
	transfer: {
		pt: "Transferência bancária",
		en: "Bank transfer",
		hint: {
			pt: "Anexa o comprovativo em PDF. Envia o mesmo ficheiro no WhatsApp.",
			en: "Attach the PDF receipt. Send the same file on WhatsApp."
		}
	},
	cash: {
		pt: "Dinheiro no local",
		en: "Cash on delivery",
		hint: {
			pt: "Pagas na entrega, contra a fatura.",
			en: "Pay on delivery, against the invoice."
		}
	}
};
//#endregion
export { MANO_URL as a, WHATSAPP as c, formatKz as d, LINKEDIN as i, WHATSAPP_DISPLAY as l, HOURS as n, PAY_METHODS as o, INSTAGRAM as r, SITE as s, EMAIL as t, cn as u };
