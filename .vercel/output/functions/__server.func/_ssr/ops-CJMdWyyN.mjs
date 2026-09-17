//#region node_modules/.nitro/vite/services/ssr/assets/ops-CJMdWyyN.js
var STATUS_META = {
	received: {
		pt: "Recebido",
		en: "Received",
		hint: {
			pt: "O pedido chegou à casa.",
			en: "The order reached the house."
		},
		tone: "stone"
	},
	confirmed: {
		pt: "Confirmado",
		en: "Confirmed",
		hint: {
			pt: "A casa confirmou frescura, zona e tempo.",
			en: "The house confirmed freshness, zone and timing."
		},
		tone: "ink"
	},
	preparing: {
		pt: "A preparar",
		en: "Preparing",
		hint: {
			pt: "A cozinha está a montar o pedido.",
			en: "The kitchen is assembling the order."
		},
		tone: "kaki"
	},
	ready: {
		pt: "Pronto",
		en: "Ready",
		hint: {
			pt: "À espera do estafeta na cozinha.",
			en: "Waiting for the courier at the kitchen."
		},
		tone: "kaki"
	},
	out: {
		pt: "Em rota",
		en: "On the way",
		hint: {
			pt: "Saiu da cozinha · ponto A → destino B.",
			en: "Left the kitchen · point A → destination B."
		},
		tone: "kaki"
	},
	nearby: {
		pt: "Próximo",
		en: "Nearby",
		hint: {
			pt: "O estafeta está na tua zona.",
			en: "The courier is in your area."
		},
		tone: "kaki"
	},
	delivered: {
		pt: "Entregue",
		en: "Delivered",
		hint: {
			pt: "Chegou ao destino B.",
			en: "Arrived at destination B."
		},
		tone: "ink"
	},
	cancelled: {
		pt: "Cancelado",
		en: "Cancelled",
		hint: {
			pt: "Este pedido não segue.",
			en: "This order will not continue."
		},
		tone: "stone"
	}
};
var FLOW = [
	"received",
	"confirmed",
	"preparing",
	"ready",
	"out",
	"nearby",
	"delivered"
];
function nextStatus(s) {
	const i = FLOW.indexOf(s);
	if (i < 0 || i >= FLOW.length - 1) return null;
	return FLOW[i + 1];
}
var CRM_TAGS = [
	{
		id: "vip",
		pt: "VIP",
		en: "VIP"
	},
	{
		id: "empresa",
		pt: "Empresa",
		en: "Company"
	},
	{
		id: "recorrente",
		pt: "Recorrente",
		en: "Repeat"
	},
	{
		id: "novo",
		pt: "Novo",
		en: "New"
	},
	{
		id: "winback",
		pt: "A reactivar",
		en: "Win-back"
	},
	{
		id: "alergia",
		pt: "Alergia / nota",
		en: "Allergy / note"
	}
];
var COURIERS = [
	"Nélson",
	"Rosa",
	"Paulo",
	"Marta",
	"Hélder"
];
function firstName(full) {
	return full.trim().split(/\s+/)[0] || full;
}
function digitsPhone(phone) {
	return phone.replace(/\D/g, "");
}
function routeProgress(input) {
	if (input.status === "cancelled") return 0;
	if (input.status === "delivered") return 1;
	if (input.status === "nearby") return .9;
	if (input.status === "received") return 0;
	if (input.status === "confirmed") return .02;
	if (input.status === "preparing") return .05;
	if (input.status === "ready") return .1;
	if (input.status === "out") {
		if (!input.dispatchedAt) return .16;
		const elapsed = Date.now() - new Date(input.dispatchedAt).getTime();
		const window = Math.max(input.etaMin, 14) * 60 * 1e3 * .72;
		return .16 + .72 * Math.min(1, Math.max(0, elapsed / window));
	}
	return 0;
}
function remainingMinutes(input) {
	if (input.status === "delivered" || input.status === "cancelled") return 0;
	const start = input.dispatchedAt ? new Date(input.dispatchedAt).getTime() : new Date(input.createdAt).getTime();
	const left = input.etaMin * 60 * 1e3 - (Date.now() - start);
	if (input.status === "nearby") return Math.max(2, Math.round(left / 6e4));
	return Math.max(4, Math.round(left / 6e4));
}
var KPI_COPY = [
	{
		id: "gmv",
		pt: "Receita do dia",
		en: "Today's revenue",
		why: {
			pt: "O pulso comercial. Compara com o mesmo dia da semana anterior.",
			en: "Commercial pulse. Compare with the same weekday last week."
		}
	},
	{
		id: "orders",
		pt: "Pedidos hoje",
		en: "Orders today",
		why: {
			pt: "Carga da cozinha. Acima de 18/hora, abre um segundo banco.",
			en: "Kitchen load. Above 18/hour, open a second station."
		}
	},
	{
		id: "ticket",
		pt: "Ticket médio",
		en: "Average ticket",
		why: {
			pt: "Sobe com combinados Ouro e bebidas. Meta: acima de 18.000 Kz.",
			en: "Rises with Gold sets and drinks. Target: above 18,000 Kz."
		}
	},
	{
		id: "cycle",
		pt: "Ciclo médio",
		en: "Avg. cycle",
		why: {
			pt: "Do clique à porta. SLA interno: 45 min em Talatona, 70 min na Ilha.",
			en: "From tap to door. Internal SLA: 45 min in Talatona, 70 min on the Ilha."
		}
	},
	{
		id: "ontime",
		pt: "No prazo",
		en: "On time",
		why: {
			pt: "Entregas dentro do ETA prometido. Abaixo de 85% — rever rotas.",
			en: "Deliveries within the promised ETA. Below 85% — review routes."
		}
	},
	{
		id: "repeat",
		pt: "Recorrentes",
		en: "Repeat rate",
		why: {
			pt: "Clientes com 2+ pedidos. O CRM vive disto — não de novos a qualquer custo.",
			en: "Customers with 2+ orders. The CRM lives on this — not new names at any cost."
		}
	}
];
//#endregion
export { STATUS_META as a, nextStatus as c, KPI_COPY as i, remainingMinutes as l, CRM_TAGS as n, digitsPhone as o, FLOW as r, firstName as s, COURIERS as t, routeProgress as u };
