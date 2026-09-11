import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as Minus, i as Plus, n as ShoppingBag, o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-CpAW0sy3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
/** Official kamon (selo 77) — circular two-sevens, never the pixel-7. */
function Mark({ className, invert = false, line = false, alt = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: line ? "/brand/setesete-selo-linha.svg" : invert ? "/brand/setesete-selo-reverso.svg" : "/brand/setesete-selo.svg",
		alt,
		className: cn("size-12 object-contain", className),
		width: 120,
		height: 120
	});
}
function LogoLockup({ className, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			className: "size-9 shrink-0",
			invert: light,
			alt: "Sete Sete"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "flex flex-col leading-none",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("font-sans text-[13px] font-semibold tracking-[0.16em] uppercase sm:text-[15px]", light ? "text-rice" : "text-ink"),
				children: "Sete\xA0Sete"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("mt-1 text-[8px] font-medium tracking-[0.18em] uppercase sm:text-[9px] sm:tracking-[0.22em]", light ? "text-kaki-soft" : "text-kaki"),
				children: "no\xA0teu\xA0WhatsApp"
			})]
		})]
	});
}
var copy = {
	nav: {
		home: {
			pt: "Início",
			en: "Home"
		},
		casa: {
			pt: "A casa",
			en: "The house"
		},
		menu: {
			pt: "Menu",
			en: "Menu"
		},
		order: {
			pt: "Encomendar",
			en: "Order"
		}
	},
	hero: {
		kicker: {
			pt: "Luanda · 12h – 22h",
			en: "Luanda · 12:00 – 22:00"
		},
		title: {
			pt: "Sete Sete",
			en: "Sete Sete"
		},
		lead: {
			pt: "Sushi fresco, no teu WhatsApp.",
			en: "Fresh sushi, on your WhatsApp."
		},
		sub: {
			pt: "Peixe escolhido com rigor, arroz temperado no ponto, combinados para a mesa. Hashi incluídos. Pedido directo — sem filas, sem aplicações extra.",
			en: "Carefully chosen fish, rice seasoned to the grain, sets for the table. Chopsticks included. Order directly — no queues, no extra apps."
		},
		ctaMenu: {
			pt: "Ver o menu",
			en: "See the menu"
		},
		ctaOrder: {
			pt: "Pedir agora",
			en: "Order now"
		}
	},
	secret: {
		kicker: {
			pt: "O segredo do sabor",
			en: "The secret of the taste"
		},
		title: {
			pt: "Ingredientes escolhidos pela frescura. Arroz preparado com o mesmo cuidado, do vinagre ao corte.",
			en: "Ingredients chosen for freshness. Rice prepared with the same care, from the vinegar to the cut."
		},
		body: {
			pt: "Cada peça é feita na hora. A atenção estende-se ao shoyu, ao wasabi, ao nori. Sushi japonês com a clareza de uma casa de Luanda.",
			en: "Each piece is made to order. The same attention runs through the soy, the wasabi, the nori. Japanese sushi with the clarity of a Luanda house."
		},
		rice: {
			pt: "Arroz no ponto",
			en: "Rice, exact"
		},
		riceBody: {
			pt: "Temperado com vinagre, açúcar e sal — grão a grão.",
			en: "Seasoned with vinegar, sugar and salt — grain by grain."
		},
		fish: {
			pt: "Peixe do dia",
			en: "Fish of the day"
		},
		fishBody: {
			pt: "Salmão, atum, camarão. Corte limpo, temperatura certa.",
			en: "Salmon, tuna, prawn. A clean cut, the right temperature."
		}
	},
	menuTeaser: {
		kicker: {
			pt: "O cardápio",
			en: "The menu"
		},
		title: {
			pt: "Sessenta e cinco itens. Ouro, Mesa, assinatura Luanda.",
			en: "Sixty-five items. Gold, Table, Luanda signatures."
		}
	},
	how: {
		kicker: {
			pt: "Como pedir",
			en: "How to order"
		},
		title: {
			pt: "Três gestos. O resto é connosco.",
			en: "Three steps. We do the rest."
		},
		s1t: {
			pt: "Escolhe",
			en: "Choose"
		},
		s1: {
			pt: "Navega o cardápio e monta o pedido no cesto.",
			en: "Browse the menu and build your basket."
		},
		s2t: {
			pt: "Paga e confirma",
			en: "Pay and confirm"
		},
		s2: {
			pt: "Multicaixa Express, transferência ou dinheiro. Geras a fatura e envias no WhatsApp.",
			en: "Multicaixa Express, transfer or cash. You get the invoice and send it on WhatsApp."
		},
		s3t: {
			pt: "Recebe",
			en: "Receive"
		},
		s3: {
			pt: "Preparação no momento. Entrega em Luanda, 12h às 22h.",
			en: "Made to order. Delivery across Luanda, 12:00 to 22:00."
		}
	},
	cart: {
		title: {
			pt: "O teu pedido",
			en: "Your order"
		},
		empty: {
			pt: "O cesto está vazio.",
			en: "Your basket is empty."
		},
		emptyCta: {
			pt: "Abrir o menu",
			en: "Open the menu"
		},
		total: {
			pt: "Total",
			en: "Total"
		},
		checkout: {
			pt: "Fechar pedido",
			en: "Check out"
		},
		add: {
			pt: "Adicionar",
			en: "Add"
		},
		added: {
			pt: "No cesto",
			en: "In basket"
		}
	},
	pedir: {
		kicker: {
			pt: "Encomendar",
			en: "Order"
		},
		title: {
			pt: "Fecha o pedido. Gera a fatura.",
			en: "Close the order. Get the invoice."
		},
		name: {
			pt: "Nome",
			en: "Name"
		},
		phone: {
			pt: "Telefone / WhatsApp",
			en: "Phone / WhatsApp"
		},
		address: {
			pt: "Morada / zona",
			en: "Address / area"
		},
		notes: {
			pt: "Notas (opcional)",
			en: "Notes (optional)"
		},
		pay: {
			pt: "Pagamento",
			en: "Payment"
		},
		receipt: {
			pt: "Comprovativo PDF",
			en: "PDF receipt"
		},
		receiptHint: {
			pt: "O ficheiro não viaja automaticamente. Anexa-o de seguida na conversa WhatsApp.",
			en: "The file does not travel automatically. Attach it next in the WhatsApp chat."
		},
		send: {
			pt: "Gerar fatura",
			en: "Create invoice"
		},
		hint: {
			pt: "Escolhe o pagamento, geras a fatura, e envias o resumo no WhatsApp. Hashi incluídos em todos os pratos. Confirmamos frescura, tempo e zona.",
			en: "Choose payment, get the invoice, send the summary on WhatsApp. Chopsticks included with every dish. We confirm freshness, timing and area."
		},
		sent: {
			pt: "Fatura pronta.",
			en: "Invoice ready."
		},
		sentBody: {
			pt: "Imprime ou guarda em PDF. Depois envia o pedido no WhatsApp — e o comprovativo, se for transferência.",
			en: "Print or save as PDF. Then send the order on WhatsApp — and the receipt, if you paid by transfer."
		},
		print: {
			pt: "Imprimir / PDF",
			en: "Print / PDF"
		},
		again: {
			pt: "Abrir WhatsApp",
			en: "Open WhatsApp"
		},
		newOrder: {
			pt: "Novo pedido",
			en: "New order"
		},
		hours: {
			pt: "Todos os dias, 12h – 22h",
			en: "Every day, 12:00 – 22:00"
		},
		zone: {
			pt: "Entrega em Luanda. Diz a zona — confirmamos tempo e taxa.",
			en: "Delivery across Luanda. Tell us the area — we confirm time and fee."
		}
	},
	ticket: {
		kicker: {
			pt: "Fatura",
			en: "Invoice"
		},
		client: {
			pt: "Cliente",
			en: "Customer"
		},
		qty: {
			pt: "Qtd",
			en: "Qty"
		},
		item: {
			pt: "Peça",
			en: "Item"
		},
		total: {
			pt: "Total",
			en: "Total"
		},
		pay: {
			pt: "Pagamento",
			en: "Payment"
		},
		thanks: {
			pt: "Obrigado. Preparação no momento. Hashi incluídos no preço.",
			en: "Thank you. Made to order. Chopsticks included in the price."
		}
	},
	casa: {
		kicker: {
			pt: "A casa",
			en: "The house"
		},
		title: {
			pt: "Duas vezes sete. Um só gesto.",
			en: "Twice seven. A single gesture."
		},
		body: {
			pt: "Sete Sete nasceu para trazer sushi de precisão a Luanda — sem cerimónia a mais, sem qualidade a menos. O nome é um espelho: 77, duas curvas que se encontram. O sabor e o sorriso. O peixe e o arroz. Tu e o WhatsApp.",
			en: "Sete Sete exists to bring precise sushi to Luanda — no extra ceremony, no less quality. The name is a mirror: 77, two curves that meet. Taste and smile. Fish and rice. You and WhatsApp."
		},
		kitchen: {
			pt: "A cozinha",
			en: "The kitchen"
		},
		kitchenBody: {
			pt: "Peixe à temperatura certa, arroz no ponto, nori crocante. Nada é montado à espera.",
			en: "Fish at the right temperature, rice on the grain, nori still crisp. Nothing is assembled waiting."
		},
		catalog: {
			pt: "O catálogo",
			en: "The catalogue"
		},
		catalogBody: {
			pt: "Catorze colecções, sessenta e cinco itens — o mesmo cardápio no WhatsApp, na MANO e no ecrã. Preços em Kwanzas. Hashi incluídos.",
			en: "Fourteen collections, sixty-five items — the same menu on WhatsApp, MANO and the screen. Priced in Kwanzas. Chopsticks included."
		}
	},
	footer: { tag: {
		pt: "Sushi no teu WhatsApp",
		en: "Sushi on your WhatsApp"
	} },
	flags: {
		chef: {
			pt: "Do chef",
			en: "Chef's pick"
		},
		signature: {
			pt: "Assinatura",
			en: "Signature"
		},
		popular: {
			pt: "Mais pedido",
			en: "Most ordered"
		},
		highlight: {
			pt: "Destaque",
			en: "Featured"
		},
		new: {
			pt: "Novo",
			en: "New"
		},
		veg: {
			pt: "Vegetariano",
			en: "Vegetarian"
		}
	},
	pieces: {
		pt: "peças",
		en: "pieces"
	},
	min: {
		pt: "min",
		en: "min"
	},
	hashi: {
		pt: "Hashi incluídos no preço.",
		en: "Chopsticks included in the price."
	},
	notFound: {
		title: {
			pt: "Esta página não existe.",
			en: "This page does not exist."
		},
		back: {
			pt: "Voltar ao início",
			en: "Back home"
		}
	}
};
function t(dict, lang) {
	return dict[lang];
}
/** Source: Cardápio Mestre — 14 colecções, 65 SKUs. Hashi incluídos em todos os preços. */
var CATEGORIES = [
	{
		id: "entradas",
		name: {
			pt: "Entradas",
			en: "Starters"
		},
		ja: "前菜",
		blurb: {
			pt: "O primeiro gesto. Fritos precisos, gyozas, edamame.",
			en: "The first gesture. Precise fried bites, gyoza, edamame."
		},
		image: "/photos/tempura.jpg"
	},
	{
		id: "combinados-ouro",
		name: {
			pt: "Combinados Ouro",
			en: "Gold sets"
		},
		ja: "特選",
		blurb: {
			pt: "Só salmão. A linha premium da casa.",
			en: "Salmon only. The house premium line."
		},
		image: "/photos/hero-capa.jpg"
	},
	{
		id: "combinados-mesa",
		name: {
			pt: "Combinados Mesa",
			en: "Table sets"
		},
		ja: "盛り合わせ",
		blurb: {
			pt: "Mix do dia. Melhor custo para partilhar.",
			en: "The day's mix. Best value for sharing."
		},
		image: "/photos/combinado.jpg"
	},
	{
		id: "assinatura",
		name: {
			pt: "Assinatura Luanda",
			en: "Luanda signatures"
		},
		ja: "署名",
		blurb: {
			pt: "77, Ilha, Talatona, Família Domingo.",
			en: "77, Ilha, Talatona, Sunday family."
		},
		image: "/photos/combinado-close.jpg"
	},
	{
		id: "temakis",
		name: {
			pt: "Temakis",
			en: "Temaki"
		},
		ja: "手巻",
		blurb: {
			pt: "Um cone, uma mão, comer já.",
			en: "One cone, one hand, eat now."
		},
		image: "/photos/temaki.jpg"
	},
	{
		id: "hots",
		name: {
			pt: "Hots",
			en: "Hot rolls"
		},
		ja: "ホット",
		blurb: {
			pt: "Empanados, quentes, o favorito de Luanda.",
			en: "Panko-fried, hot — Luanda's favourite."
		},
		image: "/photos/hot.jpg"
	},
	{
		id: "gunkan",
		name: {
			pt: "Gunkan",
			en: "Gunkan"
		},
		ja: "軍艦",
		blurb: {
			pt: "Barcos pequenos, sabor concentrado.",
			en: "Small boats, concentrated flavour."
		},
		image: "/photos/gunkan.jpg"
	},
	{
		id: "uramaki",
		name: {
			pt: "Uramaki",
			en: "Uramaki"
		},
		ja: "裏巻",
		blurb: {
			pt: "Rolos invertidos, 8 peças.",
			en: "Inside-out rolls, 8 pieces."
		},
		image: "/photos/uramaki.jpg"
	},
	{
		id: "nigiri",
		name: {
			pt: "Nigiri",
			en: "Nigiri"
		},
		ja: "握り",
		blurb: {
			pt: "Duas peças. O corte limpo.",
			en: "Two pieces. The clean cut."
		},
		image: "/photos/nigiri.jpg"
	},
	{
		id: "hosomaki",
		name: {
			pt: "Hosomaki",
			en: "Hosomaki"
		},
		ja: "細巻",
		blurb: {
			pt: "Rolo fino, 8 peças.",
			en: "Thin rolls, 8 pieces."
		},
		image: "/photos/hosomaki.jpg"
	},
	{
		id: "yakissoba",
		name: {
			pt: "Yakissoba",
			en: "Yakisoba"
		},
		ja: "焼そば",
		blurb: {
			pt: "Wok quente. O mais pedido da casa no camarão.",
			en: "Hot wok. Prawn is the house bestseller."
		},
		image: "/photos/cozinha.jpg"
	},
	{
		id: "meio-dia",
		name: {
			pt: "Menu do Meio-Dia",
			en: "Lunch menu"
		},
		ja: "昼",
		blurb: {
			pt: "12h–16h, dias úteis. Escritório e almoço curto.",
			en: "12:00–16:00, weekdays. Office and a short lunch."
		},
		image: "/photos/catalogo.jpg"
	},
	{
		id: "bebidas",
		name: {
			pt: "Bebidas e extras",
			en: "Drinks & extras"
		},
		ja: "飲",
		blurb: {
			pt: "Água, chá, sumos. Hashi já vai no prato.",
			en: "Water, tea, juices. Chopsticks already in the dish."
		},
		image: "/photos/catalogo-mesa.jpg"
	},
	{
		id: "doces",
		name: {
			pt: "Doces",
			en: "Sweets"
		},
		ja: "甘",
		blurb: {
			pt: "Mochi e cheesecake yuzu. Fechar a mesa.",
			en: "Mochi and yuzu cheesecake. Close the table."
		},
		image: "/photos/capa-catalogo.jpg"
	}
];
var CATEGORY_ALIASES = {
	"combinados-premium": "combinados-ouro",
	combinados: "combinados-mesa",
	huramakis: "uramaki",
	gunkas: "gunkan",
	niguiris: "nigiri",
	hosomakis: "hosomaki"
};
function resolveCategory(id) {
	if (!id) return void 0;
	if (CATEGORIES.some((c) => c.id === id)) return id;
	return CATEGORY_ALIASES[id];
}
var PRODUCTS = [
	{
		id: "SS-ENT-01",
		sku: "SS-ENT-01",
		category: "entradas",
		name: {
			pt: "Tempura de Camarão",
			en: "Prawn tempura"
		},
		description: {
			pt: "Camarão fresco em massa leve, dourada até o estalo. O primeiro gesto da mesa.",
			en: "Fresh prawn in a light batter, fried until it snaps. The first gesture of the table."
		},
		ingredients: {
			pt: "Camarão fresco, massa tempura, óleo de fritura, molho tentsuyu",
			en: "Fresh prawn, tempura batter, frying oil, tentsuyu"
		},
		price: 7800,
		pieces: 6,
		prepMin: 9,
		image: "/photos/tempura.jpg"
	},
	{
		id: "SS-ENT-02",
		sku: "SS-ENT-02",
		category: "entradas",
		name: {
			pt: "Rolinhos Primavera",
			en: "Spring rolls"
		},
		description: {
			pt: "Massa fina e crocante, recheio quente de frango, cebola e cenoura.",
			en: "Thin, crisp pastry, hot filling of chicken, onion and carrot."
		},
		ingredients: {
			pt: "Massa de rolinho, frango desfiado, cebola, cenoura, alho, gengibre",
			en: "Spring-roll pastry, shredded chicken, onion, carrot, garlic, ginger"
		},
		price: 5500,
		pieces: 4,
		prepMin: 9,
		image: "/photos/tempura.jpg"
	},
	{
		id: "SS-ENT-03",
		sku: "SS-ENT-03",
		category: "entradas",
		name: {
			pt: "Coxinha de Camarão",
			en: "Prawn coxinha"
		},
		description: {
			pt: "Três coxinhas douradas, recheio cremoso de camarão e Philadelphia.",
			en: "Three golden coxinhas, creamy prawn and Philadelphia filling."
		},
		ingredients: {
			pt: "Massa de coxinha, camarão, queijo Philadelphia",
			en: "Coxinha dough, prawn, Philadelphia cheese"
		},
		price: 4500,
		pieces: 3,
		prepMin: 10,
		image: "/photos/tempura.jpg"
	},
	{
		id: "SS-ENT-04",
		sku: "SS-ENT-04",
		category: "entradas",
		name: {
			pt: "Croquetes de Alheira",
			en: "Alheira croquettes"
		},
		description: {
			pt: "Alheira, cebola e ovo numa crosta que parte no primeiro dente.",
			en: "Alheira, onion and egg in a crust that breaks at the first bite."
		},
		ingredients: {
			pt: "Massa de croquete, alheira, cebola, ovo",
			en: "Croquette mix, alheira, onion, egg"
		},
		price: 4500,
		pieces: 3,
		prepMin: 10,
		image: "/photos/tempura.jpg"
	},
	{
		id: "SS-ENT-05",
		sku: "SS-ENT-05",
		category: "entradas",
		name: {
			pt: "Tempura de Legumes",
			en: "Vegetable tempura"
		},
		description: {
			pt: "Curgete, cenoura, cogumelo e pimento numa tempura quase transparente.",
			en: "Courgette, carrot, mushroom and pepper in an almost transparent tempura."
		},
		ingredients: {
			pt: "Curgete, cenoura, cogumelo, pimentos, massa tempura, molho tentsuyu",
			en: "Courgette, carrot, mushroom, peppers, tempura batter, tentsuyu"
		},
		price: 6e3,
		pieces: 4,
		prepMin: 15,
		image: "/photos/legumes.jpg",
		flags: ["veg"]
	},
	{
		id: "SS-ENT-06",
		sku: "SS-ENT-06",
		category: "entradas",
		name: {
			pt: "Edamame com Flor de Sal",
			en: "Edamame with fleur de sel"
		},
		description: {
			pt: "Vagens quentes, sal em flor. O aperitivo que abre o apetite sem pesar.",
			en: "Hot pods, fleur de sel. The starter that opens the appetite without weighing."
		},
		ingredients: {
			pt: "Edamame, flor de sal, azeite de sésamo",
			en: "Edamame, fleur de sel, sesame oil"
		},
		price: 3500,
		prepMin: 6,
		image: "/photos/legumes.jpg",
		flags: ["new"]
	},
	{
		id: "SS-ENT-07",
		sku: "SS-ENT-07",
		category: "entradas",
		name: {
			pt: "Gyozas de Camarão",
			en: "Prawn gyoza"
		},
		description: {
			pt: "Cinco gyozas seladas na chapa, suculentas por dentro, douradas na base.",
			en: "Five pan-seared gyoza, juicy inside, golden on the base."
		},
		ingredients: {
			pt: "Massa gyoza, camarão, alho-francês, gengibre, molho ponzu",
			en: "Gyoza pastry, prawn, leek, ginger, ponzu"
		},
		price: 6500,
		pieces: 5,
		prepMin: 12,
		image: "/photos/tempura.jpg",
		flags: ["new"]
	},
	{
		id: "SS-OUR-16",
		sku: "SS-OUR-16",
		category: "combinados-ouro",
		name: {
			pt: "Combinado Ouro 16",
			en: "Gold set 16"
		},
		description: {
			pt: "Só salmão. Makis e niguiris numa caixa precisa para dois.",
			en: "Salmon only. Maki and nigiri in a precise box for two."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
			en: "Fresh salmon, sushi rice, nori, cream cheese"
		},
		price: 24e3,
		pieces: 16,
		prepMin: 15,
		image: "/photos/combinado-close.jpg",
		flags: ["highlight"]
	},
	{
		id: "SS-OUR-26",
		sku: "SS-OUR-26",
		category: "combinados-ouro",
		name: {
			pt: "Combinado Ouro 26",
			en: "Gold set 26"
		},
		description: {
			pt: "A escala intermédia do salmão Sete Sete. Generosa, ainda íntima.",
			en: "The mid-scale of Sete Sete salmon. Generous, still intimate."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
			en: "Fresh salmon, sushi rice, nori, cream cheese"
		},
		price: 39e3,
		pieces: 26,
		prepMin: 20,
		image: "/photos/hero-capa.jpg",
		flags: ["highlight"]
	},
	{
		id: "SS-OUR-32",
		sku: "SS-OUR-32",
		category: "combinados-ouro",
		name: {
			pt: "Combinado Ouro 32",
			en: "Gold set 32"
		},
		description: {
			pt: "Sushi, sashimi e makis de salmão. A mesa completa sem excesso.",
			en: "Salmon sushi, sashimi and maki. The complete table without excess."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, abacate",
			en: "Fresh salmon, sushi rice, nori, avocado"
		},
		price: 48e3,
		pieces: 32,
		prepMin: 25,
		image: "/photos/combinado-close.jpg",
		flags: ["highlight"]
	},
	{
		id: "SS-OUR-45",
		sku: "SS-OUR-45",
		category: "combinados-ouro",
		name: {
			pt: "Combinado Ouro Chef 45",
			en: "Chef's Gold 45"
		},
		description: {
			pt: "O combinado definitivo da casa. Recomendado pelo chef. Salmão no centro.",
			en: "The house's definitive set. Chef's recommendation. Salmon at the centre."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme, abacate",
			en: "Fresh salmon, sushi rice, nori, cream cheese, avocado"
		},
		price: 67500,
		pieces: 45,
		prepMin: 35,
		image: "/photos/hero-capa.jpg",
		flags: ["chef"]
	},
	{
		id: "SS-MES-16",
		sku: "SS-MES-16",
		category: "combinados-mesa",
		name: {
			pt: "Combinado Mesa 16",
			en: "Table set 16"
		},
		description: {
			pt: "Mix equilibrado: até 6 peças de salmão, peixe do dia, makis e niguiris.",
			en: "A balanced mix: up to 6 salmon pieces, fish of the day, maki and nigiri."
		},
		ingredients: {
			pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
			en: "Salmon, fish of the day, sushi rice, nori"
		},
		price: 18e3,
		pieces: 16,
		prepMin: 15,
		image: "/photos/combinado.jpg"
	},
	{
		id: "SS-MES-26",
		sku: "SS-MES-26",
		category: "combinados-mesa",
		name: {
			pt: "Combinado Mesa 26",
			en: "Table set 26"
		},
		description: {
			pt: "Até 12 peças de salmão. O melhor custo-benefício para partilhar.",
			en: "Up to 12 salmon pieces. The best value for sharing."
		},
		ingredients: {
			pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
			en: "Salmon, fish of the day, sushi rice, nori"
		},
		price: 29500,
		pieces: 26,
		prepMin: 20,
		image: "/photos/combinado.jpg"
	},
	{
		id: "SS-MES-32",
		sku: "SS-MES-32",
		category: "combinados-mesa",
		name: {
			pt: "Combinado Mesa 32",
			en: "Table set 32"
		},
		description: {
			pt: "Até 18 peças de salmão. Festival de texturas para a mesa do meio.",
			en: "Up to 18 salmon pieces. A festival of textures for the middle table."
		},
		ingredients: {
			pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
			en: "Salmon, fish of the day, sushi rice, nori"
		},
		price: 36e3,
		pieces: 32,
		prepMin: 25,
		image: "/photos/combinado.jpg"
	},
	{
		id: "SS-MES-45",
		sku: "SS-MES-45",
		category: "combinados-mesa",
		name: {
			pt: "Combinado Mesa 45",
			en: "Table set 45"
		},
		description: {
			pt: "Até 25 peças de salmão. Para encontros longos e noites especiais.",
			en: "Up to 25 salmon pieces. For long gatherings and special nights."
		},
		ingredients: {
			pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
			en: "Salmon, fish of the day, sushi rice, nori"
		},
		price: 5e4,
		pieces: 45,
		prepMin: 35,
		image: "/photos/combinado.jpg"
	},
	{
		id: "SS-ASN-77",
		sku: "SS-ASN-77",
		category: "assinatura",
		name: {
			pt: "Combinado 77",
			en: "Combinado 77"
		},
		description: {
			pt: "Vinte e quatro peças pensadas pelo chef: salmão, ebi, atum e o toque da casa.",
			en: "Twenty-four pieces thought by the chef: salmon, ebi, tuna and the house touch."
		},
		ingredients: {
			pt: "Salmão, atum, camarão, arroz de sushi, alga nori, queijo creme, molho 77",
			en: "Salmon, tuna, prawn, sushi rice, nori, cream cheese, sauce 77"
		},
		price: 42e3,
		pieces: 24,
		prepMin: 22,
		image: "/photos/combinado-close.jpg",
		flags: ["chef", "signature"]
	},
	{
		id: "SS-ASN-IL",
		sku: "SS-ASN-IL",
		category: "assinatura",
		name: {
			pt: "Combinado Ilha",
			en: "Ilha set"
		},
		description: {
			pt: "Salmão, camarão e manga madura. O brisa da Ilha numa caixa.",
			en: "Salmon, prawn and ripe mango. The Ilha breeze in a box."
		},
		ingredients: {
			pt: "Salmão fresco, camarão, manga, arroz de sushi, alga nori, toque cítrico",
			en: "Fresh salmon, prawn, mango, sushi rice, nori, citrus finish"
		},
		price: 28e3,
		pieces: 20,
		prepMin: 18,
		image: "/photos/salmon.jpg",
		flags: ["new"]
	},
	{
		id: "SS-ASN-TL",
		sku: "SS-ASN-TL",
		category: "assinatura",
		name: {
			pt: "Combinado Talatona",
			en: "Talatona set"
		},
		description: {
			pt: "O combinado corporativo: elegante, variado, fácil de partilhar no escritório.",
			en: "The corporate set: elegant, varied, easy to share at the office."
		},
		ingredients: {
			pt: "Salmão, atum, california, hot filadélfia, niguiris, arroz, nori",
			en: "Salmon, tuna, California, hot Philadelphia, nigiri, rice, nori"
		},
		price: 44e3,
		pieces: 30,
		prepMin: 24,
		image: "/photos/catalogo.jpg",
		flags: ["new"]
	},
	{
		id: "SS-ASN-FM",
		sku: "SS-ASN-FM",
		category: "assinatura",
		name: {
			pt: "Combinado Família Domingo",
			en: "Sunday family set"
		},
		description: {
			pt: "Sessenta peças para a mesa grande. Salmão, hots, uramakis e niguiris.",
			en: "Sixty pieces for the big table. Salmon, hots, uramaki and nigiri."
		},
		ingredients: {
			pt: "Salmão, peixe do dia, camarão, arroz, nori, queijo creme, panko",
			en: "Salmon, fish of the day, prawn, rice, nori, cream cheese, panko"
		},
		price: 85e3,
		pieces: 60,
		prepMin: 45,
		image: "/photos/combinado.jpg",
		flags: ["new"]
	},
	{
		id: "SS-TMK-SL",
		sku: "SS-TMK-SL",
		category: "temakis",
		name: {
			pt: "Temaki de Salmão",
			en: "Salmon temaki"
		},
		description: {
			pt: "Cone de nori, arroz temperado, salmão fresco cortado na hora.",
			en: "Nori cone, seasoned rice, fresh salmon cut to order."
		},
		ingredients: {
			pt: "Alga nori, arroz de sushi, salmão fresco",
			en: "Nori, sushi rice, fresh salmon"
		},
		price: 4500,
		pieces: 1,
		prepMin: 6,
		image: "/photos/temaki.jpg"
	},
	{
		id: "SS-TMK-AT",
		sku: "SS-TMK-AT",
		category: "temakis",
		name: {
			pt: "Temaki de Atum",
			en: "Tuna temaki"
		},
		description: {
			pt: "Atum fresco e pepino crocante no cone que se segura com uma mão.",
			en: "Fresh tuna and crisp cucumber in the cone you hold with one hand."
		},
		ingredients: {
			pt: "Alga nori, arroz de sushi, atum fresco, pepino",
			en: "Nori, sushi rice, fresh tuna, cucumber"
		},
		price: 4500,
		pieces: 1,
		prepMin: 6,
		image: "/photos/temaki.jpg"
	},
	{
		id: "SS-TMK-77",
		sku: "SS-TMK-77",
		category: "temakis",
		name: {
			pt: "Temaki Sete Sete",
			en: "Sete Sete temaki"
		},
		description: {
			pt: "Mix de peixes nobres, cream cheese e molho 77. O temaki da casa.",
			en: "Noble fish mix, cream cheese and sauce 77. The house temaki."
		},
		ingredients: {
			pt: "Nori, arroz, salmão, atum, queijo creme, molho 77 (unagi + toque cítrico)",
			en: "Nori, rice, salmon, tuna, cream cheese, sauce 77 (unagi + citrus)"
		},
		price: 5500,
		pieces: 1,
		prepMin: 7,
		image: "/photos/temaki.jpg",
		flags: ["chef", "signature"]
	},
	{
		id: "SS-TMK-MG",
		sku: "SS-TMK-MG",
		category: "temakis",
		name: {
			pt: "Temaki Manga-Piri",
			en: "Mango-piri temaki"
		},
		description: {
			pt: "Salmão, manga e um fio de piri-piri doce. Angola no cone.",
			en: "Salmon, mango and a thread of sweet piri-piri. Angola in a cone."
		},
		ingredients: {
			pt: "Nori, arroz, salmão, manga, piri-piri doce da casa, gergelim",
			en: "Nori, rice, salmon, mango, house sweet piri-piri, sesame"
		},
		price: 5500,
		pieces: 1,
		prepMin: 7,
		image: "/photos/temaki.jpg",
		flags: ["new"]
	},
	{
		id: "SS-TMK-CR",
		sku: "SS-TMK-CR",
		category: "temakis",
		name: {
			pt: "Temaki Crocante",
			en: "Crunchy temaki"
		},
		description: {
			pt: "Salmão, cream cheese e cebola crispy. Quente por fora, fresco por dentro.",
			en: "Salmon, cream cheese and crispy onion. Hot outside, fresh inside."
		},
		ingredients: {
			pt: "Nori, arroz, salmão, queijo creme, cebola crispy, panko",
			en: "Nori, rice, salmon, cream cheese, crispy onion, panko"
		},
		price: 5800,
		pieces: 1,
		prepMin: 8,
		image: "/photos/temaki.jpg",
		flags: ["new"]
	},
	{
		id: "SS-HOT-FL",
		sku: "SS-HOT-FL",
		category: "hots",
		name: {
			pt: "Hot Filadélfia",
			en: "Hot Philadelphia"
		},
		description: {
			pt: "Oito peças empanadas. Salmão fresco e a cremosidade do Philadelphia.",
			en: "Eight panko pieces. Fresh salmon and the cream of Philadelphia."
		},
		ingredients: {
			pt: "Salmão fresco, queijo creme, arroz, nori, panko",
			en: "Fresh salmon, cream cheese, rice, nori, panko"
		},
		price: 11e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg"
	},
	{
		id: "SS-HOT-GS",
		sku: "SS-HOT-GS",
		category: "hots",
		name: {
			pt: "Hot Gasai",
			en: "Hot Gasai"
		},
		description: {
			pt: "Salmão, cream cheese, cebola crispy e teriyaki sob crosta de panko.",
			en: "Salmon, cream cheese, crispy onion and teriyaki under a panko crust."
		},
		ingredients: {
			pt: "Salmão, queijo creme, cebola crispy, molho teriyaki, arroz, nori, panko",
			en: "Salmon, cream cheese, crispy onion, teriyaki, rice, nori, panko"
		},
		price: 12e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg",
		flags: ["highlight"]
	},
	{
		id: "SS-HOT-FR",
		sku: "SS-HOT-FR",
		category: "hots",
		name: {
			pt: "Hot Fray",
			en: "Hot Fray"
		},
		description: {
			pt: "Frango desfiado, cream cheese e pepino. Quente, suave, equilibrado.",
			en: "Shredded chicken, cream cheese and cucumber. Hot, gentle, balanced."
		},
		ingredients: {
			pt: "Frango, queijo creme, pepino, arroz, nori, panko",
			en: "Chicken, cream cheese, cucumber, rice, nori, panko"
		},
		price: 9500,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg"
	},
	{
		id: "SS-HOT-ST",
		sku: "SS-HOT-ST",
		category: "hots",
		name: {
			pt: "Hot Spicy Tuna",
			en: "Hot spicy tuna"
		},
		description: {
			pt: "Atum picante sob crosta estaladiça. Calor certo, sem agressão.",
			en: "Spicy tuna under a shatteringly crisp crust. Heat without aggression."
		},
		ingredients: {
			pt: "Atum, molho picante da casa, arroz, nori, panko",
			en: "Tuna, house spicy sauce, rice, nori, panko"
		},
		price: 9e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg"
	},
	{
		id: "SS-HOT-CF",
		sku: "SS-HOT-CF",
		category: "hots",
		name: {
			pt: "Hot do Chefe",
			en: "Chef's hot roll"
		},
		description: {
			pt: "Salmão flamejado, molho unagi e gergelim. A peça quente da assinatura.",
			en: "Flamed salmon, unagi sauce and sesame. The hot piece of the signature."
		},
		ingredients: {
			pt: "Salmão flamejado, molho unagi, gergelim, arroz, nori, panko",
			en: "Flamed salmon, unagi sauce, sesame, rice, nori, panko"
		},
		price: 12e3,
		pieces: 8,
		prepMin: 13,
		image: "/photos/hot.jpg",
		flags: ["chef"]
	},
	{
		id: "SS-HOT-LD",
		sku: "SS-HOT-LD",
		category: "hots",
		name: {
			pt: "Hot Luanda",
			en: "Hot Luanda"
		},
		description: {
			pt: "Camarão, manga e piri-piri doce. Crocante, tropical, da cidade.",
			en: "Prawn, mango and sweet piri-piri. Crisp, tropical, of the city."
		},
		ingredients: {
			pt: "Camarão, manga, piri-piri doce, queijo creme, arroz, nori, panko",
			en: "Prawn, mango, sweet piri-piri, cream cheese, rice, nori, panko"
		},
		price: 11500,
		pieces: 8,
		prepMin: 13,
		image: "/photos/hot.jpg",
		flags: ["new", "signature"]
	},
	{
		id: "SS-GNK-77",
		sku: "SS-GNK-77",
		category: "gunkan",
		name: {
			pt: "Torrinhas Sete Sete",
			en: "Sete Sete crisps"
		},
		description: {
			pt: "Seis torrinhas de arroz crocante com tartar de salmão e cream cheese.",
			en: "Six crisp rice toasts with salmon tartare and cream cheese."
		},
		ingredients: {
			pt: "Arroz crocante, salmão picado, queijo creme, cebolinho, molho 77",
			en: "Crisp rice, minced salmon, cream cheese, chives, sauce 77"
		},
		price: 12e3,
		pieces: 6,
		prepMin: 10,
		image: "/photos/gunkan.jpg",
		flags: ["chef", "signature"]
	},
	{
		id: "SS-GNK-SL",
		sku: "SS-GNK-SL",
		category: "gunkan",
		name: {
			pt: "Gunkan Fusão Salmão",
			en: "Fusion gunkan · salmon"
		},
		description: {
			pt: "Quatro gunkan de salmão fresco com o tempero do chef.",
			en: "Four gunkan of fresh salmon with the chef's seasoning."
		},
		ingredients: {
			pt: "Arroz, nori, salmão fresco, azeite de sésamo, cebolinho",
			en: "Rice, nori, fresh salmon, sesame oil, chives"
		},
		price: 6500,
		pieces: 4,
		prepMin: 8,
		image: "/photos/gunkan.jpg"
	},
	{
		id: "SS-GNK-AT",
		sku: "SS-GNK-AT",
		category: "gunkan",
		name: {
			pt: "Gunkan Fusão Atum",
			en: "Fusion gunkan · tuna"
		},
		description: {
			pt: "Atum picado, tempero da casa, nori e arroz. Preço alinhado à linha.",
			en: "Minced tuna, house seasoning, nori and rice. Price aligned with the line."
		},
		ingredients: {
			pt: "Arroz, nori, atum fresco, tempero da casa",
			en: "Rice, nori, fresh tuna, house seasoning"
		},
		price: 6e3,
		pieces: 4,
		prepMin: 8,
		image: "/photos/gunkan.jpg"
	},
	{
		id: "SS-GNK-SP",
		sku: "SS-GNK-SP",
		category: "gunkan",
		name: {
			pt: "Gunkan Spicy",
			en: "Spicy gunkan"
		},
		description: {
			pt: "Base de atum ou salmão com spicy mayo e crispy. Antes Chitaka.",
			en: "Tuna or salmon base with spicy mayo and crispy. Formerly Chitaka."
		},
		ingredients: {
			pt: "Arroz, nori, atum ou salmão, spicy mayo, cebola crispy",
			en: "Rice, nori, tuna or salmon, spicy mayo, crispy onion"
		},
		price: 5500,
		pieces: 4,
		prepMin: 8,
		image: "/photos/gunkan.jpg"
	},
	{
		id: "SS-GNK-EB",
		sku: "SS-GNK-EB",
		category: "gunkan",
		name: {
			pt: "Gunkan Ebi",
			en: "Ebi gunkan"
		},
		description: {
			pt: "Camarão fresco, toque de limão e maionese de sriracha suave.",
			en: "Fresh prawn, a touch of lemon and a gentle sriracha mayo."
		},
		ingredients: {
			pt: "Arroz, nori, camarão fresco, limão, maionese sriracha",
			en: "Rice, nori, fresh prawn, lemon, sriracha mayo"
		},
		price: 7e3,
		pieces: 4,
		prepMin: 9,
		image: "/photos/gunkan.jpg",
		flags: ["highlight"]
	},
	{
		id: "SS-URA-CA",
		sku: "SS-URA-CA",
		category: "uramaki",
		name: {
			pt: "Uramaki Califórnia",
			en: "California uramaki"
		},
		description: {
			pt: "Kani, abacate e pepino. O clássico tropical que nunca falha.",
			en: "Kani, avocado and cucumber. The tropical classic that never fails."
		},
		ingredients: {
			pt: "Kani, abacate, pepino, arroz, nori",
			en: "Kani crab, avocado, cucumber, rice, nori"
		},
		price: 10300,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg"
	},
	{
		id: "SS-URA-TN",
		sku: "SS-URA-TN",
		category: "uramaki",
		name: {
			pt: "Uramaki Tuna",
			en: "Tuna uramaki"
		},
		description: {
			pt: "Rolo invertido centrado no atum fresco.",
			en: "An inside-out roll centred on fresh tuna."
		},
		ingredients: {
			pt: "Atum fresco, arroz, nori",
			en: "Fresh tuna, rice, nori"
		},
		price: 10100,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg"
	},
	{
		id: "SS-URA-EB",
		sku: "SS-URA-EB",
		category: "uramaki",
		name: {
			pt: "Uramaki Ebi",
			en: "Ebi uramaki"
		},
		description: {
			pt: "Camarão e o toque suave do chef — limão e gergelim.",
			en: "Prawn and the chef's gentle finish — lemon and sesame."
		},
		ingredients: {
			pt: "Camarão, arroz, nori, limão, gergelim",
			en: "Prawn, rice, nori, lemon, sesame"
		},
		price: 10500,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg"
	},
	{
		id: "SS-URA-FL",
		sku: "SS-URA-FL",
		category: "uramaki",
		name: {
			pt: "Uramaki Filadélfia",
			en: "Philadelphia uramaki"
		},
		description: {
			pt: "Salmão e Philadelphia. O clássico cremoso, invertido.",
			en: "Salmon and Philadelphia. The creamy classic, inverted."
		},
		ingredients: {
			pt: "Salmão fresco, queijo creme, arroz, nori",
			en: "Fresh salmon, cream cheese, rice, nori"
		},
		price: 10300,
		pieces: 8,
		prepMin: 10,
		image: "/photos/hero-capa.jpg"
	},
	{
		id: "SS-URA-77",
		sku: "SS-URA-77",
		category: "uramaki",
		name: {
			pt: "Uramaki Sete Sete",
			en: "Sete Sete uramaki"
		},
		description: {
			pt: "Salmão, camarão, cream cheese, crispy e molho 77. A explosão da casa.",
			en: "Salmon, prawn, cream cheese, crispy and sauce 77. The house explosion."
		},
		ingredients: {
			pt: "Salmão, camarão, queijo creme, cebola crispy, molho 77, arroz, nori",
			en: "Salmon, prawn, cream cheese, crispy onion, sauce 77, rice, nori"
		},
		price: 13e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/uramaki.jpg",
		flags: ["chef", "signature"]
	},
	{
		id: "SS-URA-MG",
		sku: "SS-URA-MG",
		category: "uramaki",
		name: {
			pt: "Uramaki Manga",
			en: "Mango uramaki"
		},
		description: {
			pt: "Salmão, manga e cream cheese. Doce curto, gordura certa.",
			en: "Salmon, mango and cream cheese. A short sweetness, the right fat."
		},
		ingredients: {
			pt: "Salmão, manga, queijo creme, arroz, nori",
			en: "Salmon, mango, cream cheese, rice, nori"
		},
		price: 10800,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg",
		flags: ["new"]
	},
	{
		id: "SS-URA-CC",
		sku: "SS-URA-CC",
		category: "uramaki",
		name: {
			pt: "Uramaki Coco-Camarão",
			en: "Coconut-prawn uramaki"
		},
		description: {
			pt: "Camarão, coco ralado tostado e cream cheese. Costa de Luanda.",
			en: "Prawn, toasted grated coconut and cream cheese. The Luanda coast."
		},
		ingredients: {
			pt: "Camarão, coco tostado, queijo creme, arroz, nori",
			en: "Prawn, toasted coconut, cream cheese, rice, nori"
		},
		price: 11200,
		pieces: 8,
		prepMin: 11,
		image: "/photos/uramaki.jpg",
		flags: ["new"]
	},
	{
		id: "SS-NIG-SL",
		sku: "SS-NIG-SL",
		category: "nigiri",
		name: {
			pt: "Nigiri de Salmão",
			en: "Salmon nigiri"
		},
		description: {
			pt: "Duas peças. Arroz moldado, salmão fresco a cobrir.",
			en: "Two pieces. Hand-pressed rice, fresh salmon covering it."
		},
		ingredients: {
			pt: "Arroz de sushi, salmão fresco",
			en: "Sushi rice, fresh salmon"
		},
		price: 3500,
		pieces: 2,
		prepMin: 5,
		image: "/photos/salmon.jpg"
	},
	{
		id: "SS-NIG-AT",
		sku: "SS-NIG-AT",
		category: "nigiri",
		name: {
			pt: "Nigiri de Atum",
			en: "Tuna nigiri"
		},
		description: {
			pt: "Duas peças de atum no ponto, sobre arroz quente.",
			en: "Two pieces of tuna at the right point, on warm rice."
		},
		ingredients: {
			pt: "Arroz de sushi, atum fresco",
			en: "Sushi rice, fresh tuna"
		},
		price: 3800,
		pieces: 2,
		prepMin: 5,
		image: "/photos/nigiri.jpg"
	},
	{
		id: "SS-NIG-EB",
		sku: "SS-NIG-EB",
		category: "nigiri",
		name: {
			pt: "Nigiri de Camarão",
			en: "Prawn nigiri"
		},
		description: {
			pt: "Camarão cozido, aberto, pousado no arroz.",
			en: "Cooked prawn, opened, resting on the rice."
		},
		ingredients: {
			pt: "Arroz de sushi, camarão cozido",
			en: "Sushi rice, cooked prawn"
		},
		price: 4e3,
		pieces: 2,
		prepMin: 5,
		image: "/photos/nigiri.jpg"
	},
	{
		id: "SS-NIG-UN",
		sku: "SS-NIG-UN",
		category: "nigiri",
		name: {
			pt: "Nigiri de Enguia",
			en: "Unagi nigiri"
		},
		description: {
			pt: "Unagi glaceada, doce-salgado, duas peças.",
			en: "Glazed unagi, sweet-salty, two pieces."
		},
		ingredients: {
			pt: "Arroz de sushi, enguia, molho unagi",
			en: "Sushi rice, eel, unagi sauce"
		},
		price: 4500,
		pieces: 2,
		prepMin: 6,
		image: "/photos/nigiri.jpg",
		flags: ["new"]
	},
	{
		id: "SS-HOS-SL",
		sku: "SS-HOS-SL",
		category: "hosomaki",
		name: {
			pt: "Hosomaki Salmão",
			en: "Salmon hosomaki"
		},
		description: {
			pt: "Oito peças de rolo fino. Só salmão e arroz.",
			en: "Eight thin-roll pieces. Only salmon and rice."
		},
		ingredients: {
			pt: "Arroz, nori, salmão fresco",
			en: "Rice, nori, fresh salmon"
		},
		price: 6500,
		pieces: 8,
		prepMin: 7,
		image: "/photos/hosomaki.jpg"
	},
	{
		id: "SS-HOS-AT",
		sku: "SS-HOS-AT",
		category: "hosomaki",
		name: {
			pt: "Hosomaki Atum",
			en: "Tuna hosomaki"
		},
		description: {
			pt: "Rolo fino de atum. Limpo, directo.",
			en: "A thin tuna roll. Clean, direct."
		},
		ingredients: {
			pt: "Arroz, nori, atum fresco",
			en: "Rice, nori, fresh tuna"
		},
		price: 6800,
		pieces: 8,
		prepMin: 7,
		image: "/photos/hosomaki.jpg"
	},
	{
		id: "SS-HOS-PP",
		sku: "SS-HOS-PP",
		category: "hosomaki",
		name: {
			pt: "Hosomaki Pepino",
			en: "Cucumber hosomaki"
		},
		description: {
			pt: "Oito peças vegetarianas. Pepino crocante, arroz, nori.",
			en: "Eight vegetarian pieces. Crisp cucumber, rice, nori."
		},
		ingredients: {
			pt: "Arroz, nori, pepino",
			en: "Rice, nori, cucumber"
		},
		price: 4500,
		pieces: 8,
		prepMin: 6,
		image: "/photos/hosomaki.jpg",
		flags: ["veg"]
	},
	{
		id: "SS-HOS-MG",
		sku: "SS-HOS-MG",
		category: "hosomaki",
		name: {
			pt: "Hosomaki Manga",
			en: "Mango hosomaki"
		},
		description: {
			pt: "Manga no ponto, rolo fino. Leve e fresco.",
			en: "Mango at the right point, a thin roll. Light and fresh."
		},
		ingredients: {
			pt: "Arroz, nori, manga",
			en: "Rice, nori, mango"
		},
		price: 5e3,
		pieces: 8,
		prepMin: 6,
		image: "/photos/hosomaki.jpg",
		flags: ["new"]
	},
	{
		id: "SS-YAK-EB",
		sku: "SS-YAK-EB",
		category: "yakissoba",
		name: {
			pt: "Yakissoba de Camarão",
			en: "Prawn yakisoba"
		},
		description: {
			pt: "Macarrão salteado, camarão fresco, legumes da estação. O mais pedido.",
			en: "Wok noodles, fresh prawn, seasonal vegetables. The most ordered."
		},
		ingredients: {
			pt: "Macarrão, camarão fresco, legumes da estação, molho shoyu",
			en: "Noodles, fresh prawn, seasonal vegetables, shoyu"
		},
		price: 1e4,
		prepMin: 14,
		image: "/photos/cozinha.jpg",
		flags: ["popular"]
	},
	{
		id: "SS-YAK-CR",
		sku: "SS-YAK-CR",
		category: "yakissoba",
		name: {
			pt: "Yakissoba de Carne",
			en: "Beef yakisoba"
		},
		description: {
			pt: "Carne tenra, legumes, shoyu. Quente e generoso.",
			en: "Tender beef, vegetables, shoyu. Hot and generous."
		},
		ingredients: {
			pt: "Macarrão, carne bovina, legumes, molho shoyu",
			en: "Noodles, beef, vegetables, shoyu"
		},
		price: 9500,
		prepMin: 14,
		image: "/photos/cozinha.jpg"
	},
	{
		id: "SS-YAK-FR",
		sku: "SS-YAK-FR",
		category: "yakissoba",
		name: {
			pt: "Yakissoba de Frango",
			en: "Chicken yakisoba"
		},
		description: {
			pt: "Frango grelhado e legumes variados no wok.",
			en: "Grilled chicken and mixed vegetables in the wok."
		},
		ingredients: {
			pt: "Macarrão, frango grelhado, legumes, molho shoyu",
			en: "Noodles, grilled chicken, vegetables, shoyu"
		},
		price: 8500,
		prepMin: 13,
		image: "/photos/cozinha.jpg"
	},
	{
		id: "SS-YAK-MX",
		sku: "SS-YAK-MX",
		category: "yakissoba",
		name: {
			pt: "Yakissoba Misto 77",
			en: "Mixed 77 yakisoba"
		},
		description: {
			pt: "Camarão, carne e frango no mesmo wok. Para quem não quer escolher.",
			en: "Prawn, beef and chicken in the same wok. For those who will not choose."
		},
		ingredients: {
			pt: "Macarrão, camarão, carne, frango, legumes, molho shoyu",
			en: "Noodles, prawn, beef, chicken, vegetables, shoyu"
		},
		price: 11e3,
		prepMin: 15,
		image: "/photos/cozinha.jpg",
		flags: ["new"]
	},
	{
		id: "SS-MID-SL",
		sku: "SS-MID-SL",
		category: "meio-dia",
		name: {
			pt: "Executivo Salmão",
			en: "Salmon lunch set"
		},
		description: {
			pt: "8 peças de salmão + yakissoba curto ou miso. Segunda a sexta, 12h–16h.",
			en: "8 salmon pieces + a short yakisoba or miso. Monday to Friday, 12:00–16:00."
		},
		ingredients: {
			pt: "Salmão, arroz, nori, yakissoba ou sopa miso",
			en: "Salmon, rice, nori, yakisoba or miso soup"
		},
		price: 14500,
		prepMin: 16,
		image: "/photos/catalogo.jpg",
		flags: ["new"]
	},
	{
		id: "SS-MID-FR",
		sku: "SS-MID-FR",
		category: "meio-dia",
		name: {
			pt: "Executivo Frango",
			en: "Chicken lunch set"
		},
		description: {
			pt: "Hot Fray 8 peças + yakissoba de frango em dose curta. 12h–16h.",
			en: "Hot Fray 8 pieces + a short chicken yakisoba. 12:00–16:00."
		},
		ingredients: {
			pt: "Frango, queijo creme, panko, macarrão, legumes",
			en: "Chicken, cream cheese, panko, noodles, vegetables"
		},
		price: 12500,
		prepMin: 15,
		image: "/photos/hot.jpg",
		flags: ["new"]
	},
	{
		id: "SS-MID-BX",
		sku: "SS-MID-BX",
		category: "meio-dia",
		name: {
			pt: "Box Escritório 2",
			en: "Office box for 2"
		},
		description: {
			pt: "16 peças mistas + 2 yakissobas curtos. Reunião resolvida.",
			en: "16 mixed pieces + 2 short yakisoba. Meeting solved."
		},
		ingredients: {
			pt: "Mix salmão/california/hot, dois yakissobas curtos",
			en: "Salmon/California/hot mix, two short yakisoba"
		},
		price: 22e3,
		prepMin: 18,
		image: "/photos/catalogo-mesa.jpg",
		flags: ["new"]
	},
	{
		id: "SS-BEB-AG",
		sku: "SS-BEB-AG",
		category: "bebidas",
		name: {
			pt: "Água 50cl",
			en: "Still water 50cl"
		},
		description: {
			pt: "Água de mesa, fria.",
			en: "Still table water, cold."
		},
		ingredients: {
			pt: "Água 50cl",
			en: "Still water 50cl"
		},
		price: 1e3,
		prepMin: 0,
		image: "/photos/catalogo-mesa.jpg",
		flags: ["new"]
	},
	{
		id: "SS-BEB-RF",
		sku: "SS-BEB-RF",
		category: "bebidas",
		name: {
			pt: "Refrigerante lata",
			en: "Soft drink (can)"
		},
		description: {
			pt: "Lata fria. Cola, cola zero ou ginger ale — indicar no pedido.",
			en: "A cold can. Cola, cola zero or ginger ale — say so in the order."
		},
		ingredients: {
			pt: "Refrigerante lata 33cl",
			en: "Soft-drink can 33cl"
		},
		price: 1500,
		prepMin: 0,
		image: "/photos/catalogo-mesa.jpg",
		flags: ["new"]
	},
	{
		id: "SS-BEB-CH",
		sku: "SS-BEB-CH",
		category: "bebidas",
		name: {
			pt: "Chá Verde Gelado",
			en: "Iced green tea"
		},
		description: {
			pt: "Sencha frio, limão, sem açúcar a mais.",
			en: "Cold sencha, lemon, no extra sugar."
		},
		ingredients: {
			pt: "Chá verde, limão, gelo",
			en: "Green tea, lemon, ice"
		},
		price: 2e3,
		prepMin: 3,
		image: "/photos/rice.jpg",
		flags: ["new"]
	},
	{
		id: "SS-BEB-GJ",
		sku: "SS-BEB-GJ",
		category: "bebidas",
		name: {
			pt: "Limonada de Gengibre",
			en: "Ginger lemonade"
		},
		description: {
			pt: "Limão, gengibre fresco, um fio de mel.",
			en: "Lemon, fresh ginger, a thread of honey."
		},
		ingredients: {
			pt: "Limão, gengibre, mel, água, gelo",
			en: "Lemon, ginger, honey, water, ice"
		},
		price: 2500,
		prepMin: 4,
		image: "/photos/catalogo-mesa.jpg",
		flags: ["new"]
	},
	{
		id: "SS-BEB-SJ",
		sku: "SS-BEB-SJ",
		category: "bebidas",
		name: {
			pt: "Sumo Natural do Dia",
			en: "Juice of the day"
		},
		description: {
			pt: "Manga, maracujá ou ananás — conforme a fruta no ponto.",
			en: "Mango, passion fruit or pineapple — as the fruit is at the point."
		},
		ingredients: {
			pt: "Fruta da estação",
			en: "Seasonal fruit"
		},
		price: 2500,
		prepMin: 4,
		image: "/photos/catalogo-mesa.jpg",
		flags: ["new"]
	},
	{
		id: "SS-EXT-XS",
		sku: "SS-EXT-XS",
		category: "bebidas",
		name: {
			pt: "Kit extra shoyu e gari",
			en: "Extra soy & gari kit"
		},
		description: {
			pt: "Saquetas extra de shoyu, gari e wasabi. O hashi já vai no pedido.",
			en: "Extra packets of soy, gari and wasabi. Chopsticks already come with the order."
		},
		ingredients: {
			pt: "Shoyu, gari, wasabi",
			en: "Soy, gari, wasabi"
		},
		price: 800,
		prepMin: 1,
		image: "/photos/catalogo-mesa.jpg",
		flags: ["new"]
	},
	{
		id: "SS-DOC-MO",
		sku: "SS-DOC-MO",
		category: "doces",
		name: {
			pt: "Mochi do Dia",
			en: "Mochi of the day"
		},
		description: {
			pt: "Dois mochi. Recheio do dia: manga, matcha ou coco.",
			en: "Two mochi. Filling of the day: mango, matcha or coconut."
		},
		ingredients: {
			pt: "Massa mochi, recheio do dia",
			en: "Mochi dough, filling of the day"
		},
		price: 4e3,
		pieces: 2,
		prepMin: 0,
		image: "/photos/rice.jpg",
		flags: ["new"]
	},
	{
		id: "SS-DOC-CZ",
		sku: "SS-DOC-CZ",
		category: "doces",
		name: {
			pt: "Cheesecake Yuzu",
			en: "Yuzu cheesecake"
		},
		description: {
			pt: "Fatia fria, cítrica, leve depois do salmão.",
			en: "A cold slice, citrus, light after the salmon."
		},
		ingredients: {
			pt: "Cream cheese, yuzu, base de bolacha",
			en: "Cream cheese, yuzu, biscuit base"
		},
		price: 5500,
		prepMin: 0,
		image: "/photos/capa-catalogo.jpg",
		flags: ["new"]
	}
];
function productById(id) {
	return PRODUCTS.find((p) => p.id === id);
}
function productsByCategory(id) {
	return PRODUCTS.filter((p) => p.category === id);
}
var useCart = create()(persist((set, get) => ({
	lines: [],
	open: false,
	setOpen: (open) => set({ open }),
	add: (id, qty = 1) => {
		const lines = [...get().lines];
		const i = lines.findIndex((l) => l.id === id);
		if (i >= 0) lines[i] = {
			id,
			qty: lines[i].qty + qty
		};
		else lines.push({
			id,
			qty
		});
		set({
			lines,
			open: true
		});
	},
	setQty: (id, qty) => {
		if (qty <= 0) {
			set({ lines: get().lines.filter((l) => l.id !== id) });
			return;
		}
		set({ lines: get().lines.map((l) => l.id === id ? {
			...l,
			qty
		} : l) });
	},
	remove: (id) => set({ lines: get().lines.filter((l) => l.id !== id) }),
	clear: () => set({ lines: [] }),
	count: () => get().lines.reduce((n, l) => n + l.qty, 0),
	total: () => get().lines.reduce((n, l) => {
		const p = PRODUCTS.find((x) => x.id === l.id);
		return n + (p ? p.price * l.qty : 0);
	}, 0)
}), {
	name: "setesete-cart-v2",
	partialize: (s) => ({ lines: s.lines }),
	skipHydration: true
}));
var useLang = create()(persist((set) => ({
	lang: "pt",
	setLang: (lang) => set({ lang })
}), {
	name: "setesete-lang",
	skipHydration: true
}));
function CartDrawer() {
	const lang = useLang((s) => s.lang);
	const { lines, open, setOpen, setQty, remove, total } = useCart();
	const empty = lines.length === 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("fixed inset-0 z-50 bg-ink/40 transition-opacity duration-200 print:hidden", open ? "opacity-100" : "pointer-events-none opacity-0"),
		onClick: () => setOpen(false),
		"aria-hidden": true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-rice-warm shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] print:hidden", open ? "translate-x-0" : "translate-x-full"),
		"aria-hidden": !open,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-ink/8 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl",
					children: t(copy.cart.title, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					className: "grid size-11 place-items-center rounded-full hover:bg-ink/5",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto px-5 py-4",
				children: empty ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex h-full flex-col items-center justify-center text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-stone",
						children: t(copy.cart.empty, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/menu",
						onClick: () => setOpen(false),
						className: "mt-4 inline-flex min-h-11 items-center rounded-full bg-kaki px-5 text-sm font-semibold text-rice",
						children: t(copy.cart.emptyCta, lang)
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-4",
					children: lines.map((line) => {
						const p = productById(line.id);
						if (!p) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: p.image,
								alt: p.name[lang],
								className: "size-20 shrink-0 rounded-md object-cover"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-medium",
										children: p.name[lang]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-0.5 text-sm text-kaki tabular-nums",
										children: formatKz(p.price * line.qty)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-2 flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "grid size-9 place-items-center rounded-full border border-ink/10",
												onClick: () => setQty(line.id, line.qty - 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 text-center text-sm tabular-nums",
												children: line.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												className: "grid size-9 place-items-center rounded-full border border-ink/10",
												onClick: () => setQty(line.id, line.qty + 1),
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => remove(line.id),
												className: "ml-auto text-xs text-stone underline-offset-2 hover:underline",
												children: lang === "pt" ? "Retirar" : "Remove"
											})
										]
									})
								]
							})]
						}, line.id);
					})
				})
			}),
			!empty && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-ink/8 p-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-baseline justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-stone",
						children: t(copy.cart.total, lang)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-2xl tabular-nums",
						children: formatKz(total())
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/pedir",
					onClick: () => setOpen(false),
					className: "flex min-h-12 items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase hover:bg-kaki-deep",
					children: t(copy.cart.checkout, lang)
				})]
			})
		]
	})] });
}
function InstagramIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "3",
				y: "3",
				width: "18",
				height: "18",
				rx: "5",
				stroke: "currentColor",
				strokeWidth: "1.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "12",
				r: "4",
				stroke: "currentColor",
				strokeWidth: "1.7"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "17.4",
				cy: "6.6",
				r: "1",
				fill: "currentColor"
			})
		]
	});
}
function LinkedInIcon({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "currentColor",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.94 8.5H4.05V20h2.9V8.5zM5.5 3.5A1.7 1.7 0 1 0 5.5 6.9 1.7 1.7 0 0 0 5.5 3.5zM20 20h-2.9v-6.05c0-1.44-.03-3.29-2-3.29-2 0-2.31 1.56-2.31 3.18V20H10V8.5h2.78v1.57h.04c.39-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.44V20z" })
	});
}
function Footer() {
	const lang = useLang((s) => s.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ink/8 bg-nori text-rice print:hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
							className: "size-14",
							alt: "Sete Sete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-display text-3xl tracking-tight",
							children: "Sete Sete"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm tracking-[0.2em] text-kaki-soft uppercase",
							children: t(copy.footer.tag, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-sm text-sm leading-relaxed text-stone",
							children: lang === "pt" ? "Sushi de precisão em Luanda. Pedidos das 12h às 22h, via WhatsApp." : "Precise sushi in Luanda. Orders from 12:00 to 22:00, via WhatsApp."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.22em] text-stone uppercase",
					children: lang === "pt" ? "Casa" : "House"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/casa",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.casa, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/menu",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.menu, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pedir",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.order, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `https://wa.me/${WHATSAPP}`,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-kaki-soft",
							children: WHATSAPP_DISPLAY
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${EMAIL}`,
							className: "hover:text-kaki-soft",
							children: EMAIL
						}) })
					]
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-rice/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-8 px-4 py-8 sm:px-6 md:flex-row md:items-end md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.22em] text-stone uppercase",
						children: lang === "pt" ? "Parceiro" : "Partner"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: MANO_URL,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "mt-3 inline-flex items-center rounded-lg bg-rice px-5 py-4",
						"aria-label": "MANO",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/partners/mano.svg",
							alt: "MANO",
							className: "h-14 w-auto"
						})
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: INSTAGRAM,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "Instagram Sete Sete",
							className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-rice/15 px-4 text-rice transition hover:border-kaki-soft hover:text-kaki-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstagramIcon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tracking-[0.16em] uppercase",
								children: "Instagram"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: LINKEDIN,
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "LinkedIn Sete Sete",
							className: "inline-flex min-h-12 items-center gap-2 rounded-full border border-rice/15 px-4 text-rice transition hover:border-kaki-soft hover:text-kaki-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LinkedInIcon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-medium tracking-[0.16em] uppercase",
								children: "LinkedIn"
							})]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-rice/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 text-xs text-stone sm:flex-row sm:items-center sm:justify-between sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Sete Sete · Luanda, Angola"
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "tracking-[0.18em] uppercase",
						children: "七七"
					})]
				})
			})
		]
	});
}
var LINKS = [
	{
		to: "/",
		key: "home"
	},
	{
		to: "/casa",
		key: "casa"
	},
	{
		to: "/menu",
		key: "menu"
	}
];
function Header() {
	const lang = useLang((s) => s.lang);
	const setLang = useLang((s) => s.setLang);
	const count = useCart((s) => s.lines.reduce((n, l) => n + l.qty, 0));
	const setOpen = useCart((s) => s.setOpen);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [mobile, setMobile] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-ink/8 bg-rice/92 text-ink backdrop-blur-md print:hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-[4.25rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "shrink-0",
					onClick: () => setMobile(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoLockup, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 lg:flex",
					children: LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: cn("text-[13px] font-medium tracking-[0.14em] uppercase transition-opacity hover:opacity-70", pathname === l.to ? "text-kaki opacity-100" : "opacity-55"),
						children: t(copy.nav[l.key], lang)
					}, l.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden items-center rounded-full bg-ink/5 p-0.5 text-[11px] font-semibold tracking-wider sm:flex",
							children: ["pt", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setLang(code),
								className: cn("min-h-8 rounded-full px-2.5 uppercase transition", lang === code ? "bg-ink text-rice" : "opacity-60 hover:opacity-100"),
								children: code
							}, code))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setOpen(true),
							className: "relative inline-flex size-11 items-center justify-center rounded-full hover:bg-ink/5",
							"aria-label": t(copy.cart.title, lang),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, {
								className: "size-5",
								strokeWidth: 1.75
							}), count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-1.5 right-1.5 grid min-w-4 place-items-center rounded-full bg-kaki px-1 text-[10px] font-semibold text-rice tabular-nums",
								children: count
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pedir",
							className: "hidden min-h-11 items-center rounded-full bg-kaki px-4 text-[12px] font-semibold tracking-[0.12em] text-rice uppercase transition hover:bg-kaki-deep sm:inline-flex",
							children: t(copy.nav.order, lang)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-full lg:hidden",
							onClick: () => setMobile((v) => !v),
							"aria-label": "Menu",
							children: mobile ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						})
					]
				})
			]
		}), mobile && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-ink/8 bg-rice px-4 py-4 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-1",
				children: [
					LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						onClick: () => setMobile(false),
						className: "min-h-11 py-2 text-sm tracking-[0.12em] uppercase",
						children: t(copy.nav[l.key], lang)
					}, l.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/pedir",
						onClick: () => setMobile(false),
						className: "mt-2 flex min-h-11 items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.12em] text-rice uppercase",
						children: t(copy.nav.order, lang)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 flex gap-2",
						children: ["pt", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(code),
							className: cn("min-h-11 rounded-full px-4 text-xs font-semibold uppercase", lang === code ? "bg-kaki text-rice" : "bg-ink/8"),
							children: code
						}, code))
					})
				]
			})
		})]
	});
}
function WhatsAppFab() {
	const lang = useLang((s) => s.lang);
	const cartOpen = useCart((s) => s.open);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	if (cartOpen || pathname === "/pedir") return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lang === "pt" ? "Olá Sete Sete! Quero fazer um pedido." : "Hello Sete Sete! I would like to order.")}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": lang === "pt" ? "Falar no WhatsApp" : "Chat on WhatsApp",
		className: "fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-kaki text-rice shadow-[0_12px_32px_-8px_rgba(226,74,23,0.55)] transition hover:bg-kaki-deep print:hidden sm:right-6 sm:bottom-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7",
			fill: "currentColor",
			"aria-hidden": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" })
		})
	});
}
function Shell({ children }) {
	(0, import_react.useEffect)(() => {
		useCart.persist.rehydrate();
		useLang.persist.rehydrate();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-rice text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppFab, {})
		]
	});
}
//#endregion
export { productsByCategory as _, LINKEDIN as a, useCart as b, PRODUCTS as c, WHATSAPP as d, WHATSAPP_DISPLAY as f, productById as g, formatKz as h, INSTAGRAM as i, SITE as l, copy as m, EMAIL as n, Mark as o, cn as p, HOURS as r, PAY_METHODS as s, CATEGORIES as t, Shell as u, resolveCategory as v, useLang as x, t as y };
