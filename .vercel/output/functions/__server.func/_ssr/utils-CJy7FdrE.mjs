import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-CJy7FdrE.js
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
var MCX_NUMBER = "974506949";
var IBAN = "AO06.0040.0000.1297.1473.1038.1";
var PAY_METHODS = {
	mcx: {
		pt: "Multicaixa Express",
		en: "Multicaixa Express",
		hint: {
			pt: "Gera a fatura. Paga no telemóvel para 974506949, com o número da fatura como referência.",
			en: "Create the invoice. Pay on your phone to 974506949, using the invoice number as reference."
		}
	},
	transfer: {
		pt: "Transferência bancária",
		en: "Bank transfer",
		hint: {
			pt: "Gera a fatura. Transfere para o IBAN AO06.0040.0000.1297.1473.1038.1 e anexa o PDF.",
			en: "Create the invoice. Transfer to IBAN AO06.0040.0000.1297.1473.1038.1 and attach the PDF."
		}
	},
	cash: {
		pt: "Dinheiro no local",
		en: "Cash on delivery",
		hint: {
			pt: "Pagas na entrega, contra a fatura. Sem comprovativo.",
			en: "Pay on delivery, against the invoice. No proof required."
		}
	}
};
//#endregion
export { LINKEDIN as a, PAY_METHODS as c, WHATSAPP_DISPLAY as d, cn as f, INSTAGRAM as i, SITE as l, HOURS as n, MANO_URL as o, formatKz as p, IBAN as r, MCX_NUMBER as s, EMAIL as t, WHATSAPP as u };
