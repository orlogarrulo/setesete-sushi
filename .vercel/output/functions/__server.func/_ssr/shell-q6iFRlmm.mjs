import { i as __toESM } from "../_runtime.mjs";
import { b as require_jsx_runtime, d as useRouterState, v as Link, z as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Minus, i as Plus, o as Menu, r as ShoppingBag, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-q6iFRlmm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
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
		identity: {
			pt: "Identidade",
			en: "Identity"
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
			pt: "Peixe escolhido com rigor, arroz temperado no ponto, combinados para a mesa. Pedido directo — sem filas, sem aplicações extra.",
			en: "Carefully chosen fish, rice seasoned to the grain, sets for the table. Order directly — no queues, no extra apps."
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
			pt: "Um menu extenso",
			en: "An extensive menu"
		},
		title: {
			pt: "Mais de 40 peças. Combinados, hots, temakis, niguiris.",
			en: "More than 40 pieces. Sets, hot rolls, temaki, nigiri."
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
			pt: "Confirma",
			en: "Confirm"
		},
		s2: {
			pt: "Nome, morada, notas — enviamos tudo no WhatsApp.",
			en: "Name, address, notes — we send it all on WhatsApp."
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
			pt: "Enviar no WhatsApp",
			en: "Send on WhatsApp"
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
			pt: "Fecha o pedido no WhatsApp.",
			en: "Close the order on WhatsApp."
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
		send: {
			pt: "Abrir WhatsApp",
			en: "Open WhatsApp"
		},
		hint: {
			pt: "Abrimos a conversa com o resumo do pedido. Confirmamos frescura, tempo e zona de entrega.",
			en: "We open the chat with your order summary. We confirm freshness, timing and delivery area."
		},
		sent: {
			pt: "A conversa está pronta no WhatsApp.",
			en: "The chat is ready on WhatsApp."
		},
		sentBody: {
			pt: "Se a janela não abriu, usa o botão outra vez. Confirmamos o pedido assim que a mensagem chegar.",
			en: "If the window didn’t open, use the button again. We’ll confirm as soon as the message arrives."
		},
		again: {
			pt: "Reabrir WhatsApp",
			en: "Reopen WhatsApp"
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
			pt: "O mesmo cardápio que chega à mesa — agora no ecrã, com preços em Kwanzas.",
			en: "The same menu that reaches the table — now on screen, priced in Kwanzas."
		}
	},
	footer: {
		tag: {
			pt: "Sushi no teu WhatsApp",
			en: "Sushi on your WhatsApp"
		},
		downloads: {
			pt: "Ficheiros",
			en: "Files"
		},
		identity: {
			pt: "Logotipo + identidade",
			en: "Logo + identity"
		},
		website: {
			pt: "Kit website",
			en: "Website kit"
		}
	},
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
var CATEGORIES = [
	{
		id: "entradas",
		name: {
			pt: "Entradas",
			en: "Starters"
		},
		ja: "前菜",
		blurb: {
			pt: "Crocantes, quentes, para abrir o paladar.",
			en: "Crisp, hot, to open the palate."
		},
		image: "/photos/tempura.jpg"
	},
	{
		id: "combinados-premium",
		name: {
			pt: "Combinados Premium",
			en: "Premium sets"
		},
		ja: "特選",
		blurb: {
			pt: "Selecção focada em salmão fresco.",
			en: "A selection built around fresh salmon."
		},
		image: "/photos/combinado.jpg"
	},
	{
		id: "combinados",
		name: {
			pt: "Combinados",
			en: "Sets"
		},
		ja: "盛り合わせ",
		blurb: {
			pt: "Mix equilibrado com peixes do dia.",
			en: "A balanced mix with the day's fish."
		},
		image: "/photos/combinado.jpg"
	},
	{
		id: "temakis",
		name: {
			pt: "Temakis",
			en: "Temaki"
		},
		ja: "手巻",
		blurb: {
			pt: "Cones de nori para comer à mão.",
			en: "Nori cones, eaten by hand."
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
			pt: "Rolinhos empanados, crosta estaladiça.",
			en: "Panko-fried rolls, shatteringly crisp."
		},
		image: "/photos/hot.jpg"
	},
	{
		id: "gunkas",
		name: {
			pt: "Gunkas",
			en: "Gunkan"
		},
		ja: "軍艦",
		blurb: {
			pt: "Barcos de arroz com cobertura generosa.",
			en: "Rice boats with a generous topping."
		},
		image: "/photos/gunkan.jpg"
	},
	{
		id: "huramakis",
		name: {
			pt: "Huramakis",
			en: "Uramaki"
		},
		ja: "裏巻",
		blurb: {
			pt: "Rolos invertidos da casa.",
			en: "Inside-out rolls, house style."
		},
		image: "/photos/uramaki.jpg"
	},
	{
		id: "niguiris",
		name: {
			pt: "Niguiris",
			en: "Nigiri"
		},
		ja: "握り",
		blurb: {
			pt: "A forma mais pura do sushi.",
			en: "Sushi in its purest form."
		},
		image: "/photos/nigiri.jpg"
	},
	{
		id: "hosomakis",
		name: {
			pt: "Hosomakis",
			en: "Hosomaki"
		},
		ja: "細巻",
		blurb: {
			pt: "Rolos finos, oito peças.",
			en: "Thin rolls, eight pieces."
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
			pt: "Noodles salteados da estação.",
			en: "Wok-tossed noodles of the season."
		},
		image: "/photos/hot.jpg"
	}
];
var PRODUCTS = [
	{
		id: "tempura-camarao",
		category: "entradas",
		name: {
			pt: "Tempura de camarão",
			en: "Prawn tempura"
		},
		description: {
			pt: "Seis camarões frescos em massa tempura dourada.",
			en: "Six fresh prawns in a golden tempura batter."
		},
		ingredients: {
			pt: "Camarão, massa de tempura, óleo para fritura",
			en: "Prawn, tempura batter, frying oil"
		},
		price: 7800,
		pieces: 6,
		prepMin: 9,
		image: "/photos/tempura.jpg"
	},
	{
		id: "rolinhos-primavera",
		category: "entradas",
		name: {
			pt: "Rolinhos primavera",
			en: "Spring rolls"
		},
		description: {
			pt: "Quatro unidades crocantes com recheio de frango ou carne suína, cebola e cenoura.",
			en: "Four crisp rolls filled with chicken or pork, onion and carrot."
		},
		ingredients: {
			pt: "Massa de rolinho, cenoura, cebola, alho, gengibre, frango ou carne suína",
			en: "Spring-roll pastry, carrot, onion, garlic, ginger, chicken or pork"
		},
		price: 5500,
		pieces: 4,
		prepMin: 9,
		image: "/photos/tempura.jpg"
	},
	{
		id: "coxinha-camarao",
		category: "entradas",
		name: {
			pt: "Coxinha de camarão",
			en: "Prawn coxinha"
		},
		description: {
			pt: "Três unidades crocantes com recheio de queijo e camarão.",
			en: "Three crisp coxinhas filled with cheese and prawn."
		},
		ingredients: {
			pt: "Massa de coxinha, queijo Philadelphia, camarão",
			en: "Coxinha dough, cream cheese, prawn"
		},
		price: 4500,
		pieces: 3,
		prepMin: 10,
		image: "/photos/tempura.jpg"
	},
	{
		id: "croquetes",
		category: "entradas",
		name: {
			pt: "Croquetes",
			en: "Croquettes"
		},
		description: {
			pt: "Três unidades crocantes com recheio de alheira, cebola e ovo.",
			en: "Three crisp croquettes filled with alheira, onion and egg."
		},
		ingredients: {
			pt: "Massa de croquetes, alheira, cebola, ovo",
			en: "Croquette mix, alheira sausage, onion, egg"
		},
		price: 4500,
		pieces: 3,
		prepMin: 10,
		image: "/photos/tempura.jpg"
	},
	{
		id: "tempura-legumes",
		category: "entradas",
		name: {
			pt: "Tempura de legumes",
			en: "Vegetable tempura"
		},
		description: {
			pt: "Quatro legumes em massa tempura leve, com molho tentsuyu.",
			en: "Four vegetables in a light tempura batter, with tentsuyu."
		},
		ingredients: {
			pt: "Curgete, cenoura, cogumelo, pimentos, massa tempura, molho tentsuyu",
			en: "Courgette, carrot, mushroom, peppers, tempura batter, tentsuyu"
		},
		price: 6e3,
		pieces: 4,
		prepMin: 15,
		image: "/photos/tempura.jpg"
	},
	{
		id: "comb-16-salmao",
		category: "combinados-premium",
		name: {
			pt: "Combinado 16 peças · salmão",
			en: "16-piece salmon set"
		},
		description: {
			pt: "Selecção exclusiva focada em salmão — makis e niguiris.",
			en: "A salmon-led selection of maki and nigiri."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
			en: "Fresh salmon, sushi rice, nori, cream cheese"
		},
		price: 24e3,
		pieces: 16,
		prepMin: 15,
		image: "/photos/combinado.jpg"
	},
	{
		id: "comb-26-salmao",
		category: "combinados-premium",
		name: {
			pt: "Combinado 26 peças · salmão",
			en: "26-piece salmon set"
		},
		description: {
			pt: "Variedade intermédia, sempre com salmão no centro.",
			en: "A mid-size set, always with salmon at the centre."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
			en: "Fresh salmon, sushi rice, nori, cream cheese"
		},
		price: 39e3,
		pieces: 26,
		prepMin: 20,
		image: "/photos/combinado.jpg"
	},
	{
		id: "comb-32-salmao",
		category: "combinados-premium",
		name: {
			pt: "Combinado 32 peças · salmão",
			en: "32-piece salmon set"
		},
		description: {
			pt: "Variedade completa de sushi, sashimi e makis de salmão.",
			en: "A full spread of salmon sushi, sashimi and maki."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, abacate",
			en: "Fresh salmon, sushi rice, nori, avocado"
		},
		price: 48e3,
		pieces: 32,
		prepMin: 25,
		image: "/photos/combinado.jpg"
	},
	{
		id: "comb-45-salmao",
		category: "combinados-premium",
		name: {
			pt: "Combinado 45 peças · salmão",
			en: "45-piece salmon set"
		},
		description: {
			pt: "O combinado premium definitivo. Recomendado pelo chef.",
			en: "The definitive premium set. Chef's recommendation."
		},
		ingredients: {
			pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme, abacate",
			en: "Fresh salmon, sushi rice, nori, cream cheese, avocado"
		},
		price: 67500,
		pieces: 45,
		prepMin: 35,
		image: "/photos/combinado.jpg",
		flags: ["chef"]
	},
	{
		id: "comb-16-normal",
		category: "combinados",
		name: {
			pt: "Combinado 16 peças",
			en: "16-piece set"
		},
		description: {
			pt: "Até 6 peças de salmão — mix com peixes do dia, makis e niguiris.",
			en: "Up to 6 salmon pieces — a mix of the day's fish, maki and nigiri."
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
		id: "comb-26-normal",
		category: "combinados",
		name: {
			pt: "Combinado 26 peças",
			en: "26-piece set"
		},
		description: {
			pt: "Até 12 peças de salmão — para partilhar.",
			en: "Up to 12 salmon pieces — made for sharing."
		},
		ingredients: {
			pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
			en: "Salmon, fish of the day, sushi rice, nori"
		},
		price: 29250,
		pieces: 26,
		prepMin: 20,
		image: "/photos/combinado.jpg"
	},
	{
		id: "comb-32-normal",
		category: "combinados",
		name: {
			pt: "Combinado 32 peças",
			en: "32-piece set"
		},
		description: {
			pt: "Até 18 peças de salmão — um festival de texturas.",
			en: "Up to 18 salmon pieces — a festival of textures."
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
		id: "comb-45-normal",
		category: "combinados",
		name: {
			pt: "Combinado 45 peças",
			en: "45-piece set"
		},
		description: {
			pt: "Até 25 peças de salmão — para grandes encontros.",
			en: "Up to 25 salmon pieces — for larger tables."
		},
		ingredients: {
			pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
			en: "Salmon, fish of the day, sushi rice, nori"
		},
		price: 50625,
		pieces: 45,
		prepMin: 35,
		image: "/photos/combinado.jpg"
	},
	{
		id: "temaki-salmao",
		category: "temakis",
		name: {
			pt: "Temaki de salmão",
			en: "Salmon temaki"
		},
		description: {
			pt: "Cone de nori com salmão fresco e arroz temperado.",
			en: "A nori cone with fresh salmon and seasoned rice."
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
		id: "temaki-atum",
		category: "temakis",
		name: {
			pt: "Temaki de atum",
			en: "Tuna temaki"
		},
		description: {
			pt: "Cone de nori com atum fresco e pepino crocante.",
			en: "A nori cone with fresh tuna and crisp cucumber."
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
		id: "temaki-especial",
		category: "temakis",
		name: {
			pt: "Temaki especial",
			en: "Special temaki"
		},
		description: {
			pt: "Cone generoso com mix de peixes nobres e molho da casa.",
			en: "A generous cone with noble fish and house sauce."
		},
		ingredients: {
			pt: "Alga nori, arroz de sushi, mix de peixes nobres, molho da casa",
			en: "Nori, sushi rice, noble fish mix, house sauce"
		},
		price: 5200,
		pieces: 1,
		prepMin: 7,
		image: "/photos/temaki.jpg",
		flags: ["highlight"]
	},
	{
		id: "hot-filadelfia",
		category: "hots",
		name: {
			pt: "Hot Filadélfia",
			en: "Hot Philadelphia"
		},
		description: {
			pt: "Oito peças — salmão fresco e cream cheese, crosta de panko.",
			en: "Eight pieces — fresh salmon and cream cheese, panko crust."
		},
		ingredients: {
			pt: "Salmão fresco, queijo creme, arroz de sushi, alga nori, panko",
			en: "Fresh salmon, cream cheese, sushi rice, nori, panko"
		},
		price: 11e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg"
	},
	{
		id: "hot-gasai",
		category: "hots",
		name: {
			pt: "Hot Gasai",
			en: "Hot Gasai"
		},
		description: {
			pt: "Oito peças — combinação quente com crosta crocante e recheio premium.",
			en: "Eight pieces — a hot roll with a crisp crust and premium filling."
		},
		ingredients: {
			pt: "Recheio premium, panko, arroz de sushi, alga nori",
			en: "Premium filling, panko, sushi rice, nori"
		},
		price: 12e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg"
	},
	{
		id: "hot-fray",
		category: "hots",
		name: {
			pt: "Hot Fray",
			en: "Hot Fray"
		},
		description: {
			pt: "Oito peças — frito na perfeição, toque suave e equilibrado.",
			en: "Eight pieces — fried to order, gentle and balanced."
		},
		ingredients: {
			pt: "Recheio da casa, panko, arroz de sushi, alga nori",
			en: "House filling, panko, sushi rice, nori"
		},
		price: 9500,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg"
	},
	{
		id: "hot-spicy-tuna",
		category: "hots",
		name: {
			pt: "Hot spicy tuna",
			en: "Hot spicy tuna"
		},
		description: {
			pt: "Oito peças — atum picante com crosta super estaladiça.",
			en: "Eight pieces — spicy tuna under a shatteringly crisp crust."
		},
		ingredients: {
			pt: "Atum, molho picante, arroz de sushi, alga nori, panko",
			en: "Tuna, spicy sauce, sushi rice, nori, panko"
		},
		price: 9e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/hot.jpg"
	},
	{
		id: "hot-chefe",
		category: "hots",
		name: {
			pt: "Hot do chefe",
			en: "Chef's hot roll"
		},
		description: {
			pt: "Oito peças — combinação exclusiva, frita e finalizada com molho.",
			en: "Eight pieces — an exclusive combination, fried and finished with sauce."
		},
		ingredients: {
			pt: "Recheio especial do chef, molho da casa, panko, arroz de sushi, alga nori",
			en: "Chef's filling, house sauce, panko, sushi rice, nori"
		},
		price: 12e3,
		pieces: 8,
		prepMin: 13,
		image: "/photos/hot.jpg",
		flags: ["chef"]
	},
	{
		id: "torrinhas",
		category: "gunkas",
		name: {
			pt: "Torrinhas Sete Sete",
			en: "Sete Sete crisps"
		},
		description: {
			pt: "Seis torrinhas de arroz crocante com cobertura cremosa da casa.",
			en: "Six crisp rice toasts with the house creamy topping."
		},
		ingredients: {
			pt: "Arroz crocante, cobertura cremosa da casa",
			en: "Crisp rice, house creamy topping"
		},
		price: 12e3,
		pieces: 6,
		prepMin: 10,
		image: "/photos/gunkan.jpg",
		flags: ["signature"]
	},
	{
		id: "gunka-salmao",
		category: "gunkas",
		name: {
			pt: "Gunka fusão · salmão",
			en: "Fusion gunkan · salmon"
		},
		description: {
			pt: "Quatro gunkas de salmão fresco com a combinação do chef.",
			en: "Four salmon gunkan with the chef's combination."
		},
		ingredients: {
			pt: "Arroz de sushi, alga nori, salmão fresco, tempero da casa",
			en: "Sushi rice, nori, fresh salmon, house seasoning"
		},
		price: 6500,
		pieces: 4,
		prepMin: 8,
		image: "/photos/gunkan.jpg"
	},
	{
		id: "gunka-atum",
		category: "gunkas",
		name: {
			pt: "Gunka fusão · atum",
			en: "Fusion gunkan · tuna"
		},
		description: {
			pt: "Quatro peças com atum fresco picado e tempero da casa.",
			en: "Four pieces of minced fresh tuna and house seasoning."
		},
		ingredients: {
			pt: "Arroz de sushi, alga nori, atum fresco, tempero da casa",
			en: "Sushi rice, nori, fresh tuna, house seasoning"
		},
		price: 3500,
		pieces: 4,
		prepMin: 8,
		image: "/photos/gunkan.jpg"
	},
	{
		id: "gunka-chitaka",
		category: "gunkas",
		name: {
			pt: "Gunka fusão · chitaka",
			en: "Fusion gunkan · chitaka"
		},
		description: {
			pt: "Quatro peças — base de atum ou salmão com o sabor marcante da casa.",
			en: "Four pieces — tuna or salmon with the house accent."
		},
		ingredients: {
			pt: "Arroz de sushi, alga nori, atum ou salmão, ingrediente de destaque",
			en: "Sushi rice, nori, tuna or salmon, signature accent"
		},
		price: 4500,
		pieces: 4,
		prepMin: 8,
		image: "/photos/gunkan.jpg"
	},
	{
		id: "gunka-ebi",
		category: "gunkas",
		name: {
			pt: "Gunka ebi",
			en: "Ebi gunkan"
		},
		description: {
			pt: "Quatro gunkas finalizados com camarão fresco.",
			en: "Four gunkan finished with fresh prawn."
		},
		ingredients: {
			pt: "Arroz de sushi, alga nori, camarão fresco, toque da casa",
			en: "Sushi rice, nori, fresh prawn, house finish"
		},
		price: 7e3,
		pieces: 4,
		prepMin: 9,
		image: "/photos/gunkan.jpg"
	},
	{
		id: "maki-california",
		category: "huramakis",
		name: {
			pt: "Maki Califórnia",
			en: "California maki"
		},
		description: {
			pt: "Oito peças — mistura fresca e tropical.",
			en: "Eight pieces — a fresh, tropical mix."
		},
		ingredients: {
			pt: "Kani, abacate, pepino, arroz de sushi, alga nori",
			en: "Kani crab, avocado, cucumber, sushi rice, nori"
		},
		price: 10300,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg"
	},
	{
		id: "maki-tuna",
		category: "huramakis",
		name: {
			pt: "Maki tuna",
			en: "Tuna maki"
		},
		description: {
			pt: "Oito peças — rolo invertido focado no atum fresco.",
			en: "Eight pieces — an inside-out roll built on fresh tuna."
		},
		ingredients: {
			pt: "Atum fresco, arroz de sushi, alga nori",
			en: "Fresh tuna, sushi rice, nori"
		},
		price: 10100,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg"
	},
	{
		id: "maki-ebi",
		category: "huramakis",
		name: {
			pt: "Maki ebi",
			en: "Ebi maki"
		},
		description: {
			pt: "Oito peças — camarão e um toque suave do chef.",
			en: "Eight pieces — prawn with the chef's gentle finish."
		},
		ingredients: {
			pt: "Camarão, arroz de sushi, alga nori, tempero do chef",
			en: "Prawn, sushi rice, nori, chef's seasoning"
		},
		price: 10500,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg"
	},
	{
		id: "maki-filadelfia",
		category: "huramakis",
		name: {
			pt: "Maki Filadélfia",
			en: "Philadelphia maki"
		},
		description: {
			pt: "Oito peças — o clássico com cream cheese.",
			en: "Eight pieces — the classic with cream cheese."
		},
		ingredients: {
			pt: "Salmão fresco, queijo creme, arroz de sushi, alga nori",
			en: "Fresh salmon, cream cheese, sushi rice, nori"
		},
		price: 10300,
		pieces: 8,
		prepMin: 10,
		image: "/photos/uramaki.jpg"
	},
	{
		id: "huramaki-sete-sete",
		category: "huramakis",
		name: {
			pt: "Huramaki Sete Sete",
			en: "Sete Sete uramaki"
		},
		description: {
			pt: "Oito peças — a assinatura da casa. Recomendado pelo chef.",
			en: "Eight pieces — the house signature. Chef's recommendation."
		},
		ingredients: {
			pt: "Selecção premium do chef, arroz de sushi, alga nori",
			en: "Chef's premium selection, sushi rice, nori"
		},
		price: 13e3,
		pieces: 8,
		prepMin: 12,
		image: "/photos/uramaki.jpg",
		flags: ["signature", "chef"]
	},
	{
		id: "nigiri-salmao",
		category: "niguiris",
		name: {
			pt: "Niguiri de salmão",
			en: "Salmon nigiri"
		},
		description: {
			pt: "Duas peças de arroz moldado cobertas com salmão fresco.",
			en: "Two pieces of hand-pressed rice with fresh salmon."
		},
		ingredients: {
			pt: "Arroz de sushi, salmão fresco",
			en: "Sushi rice, fresh salmon"
		},
		price: 3500,
		pieces: 2,
		prepMin: 5,
		image: "/photos/nigiri.jpg"
	},
	{
		id: "nigiri-atum",
		category: "niguiris",
		name: {
			pt: "Niguiri de atum",
			en: "Tuna nigiri"
		},
		description: {
			pt: "Duas peças de arroz moldado cobertas com atum fresco.",
			en: "Two pieces of hand-pressed rice with fresh tuna."
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
		id: "nigiri-camarao",
		category: "niguiris",
		name: {
			pt: "Niguiri de camarão",
			en: "Prawn nigiri"
		},
		description: {
			pt: "Duas peças de arroz moldado cobertas com camarão cozido.",
			en: "Two pieces of hand-pressed rice with cooked prawn."
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
		id: "hoso-salmao",
		category: "hosomakis",
		name: {
			pt: "Hosomaki salmão",
			en: "Salmon hosomaki"
		},
		description: {
			pt: "Oito peças de rolo fino com salmão.",
			en: "Eight thin rolls with salmon."
		},
		ingredients: {
			pt: "Arroz de sushi, alga nori, salmão fresco",
			en: "Sushi rice, nori, fresh salmon"
		},
		price: 6500,
		pieces: 8,
		prepMin: 7,
		image: "/photos/hosomaki.jpg"
	},
	{
		id: "hoso-atum",
		category: "hosomakis",
		name: {
			pt: "Hosomaki atum",
			en: "Tuna hosomaki"
		},
		description: {
			pt: "Oito peças de rolo fino com atum.",
			en: "Eight thin rolls with tuna."
		},
		ingredients: {
			pt: "Arroz de sushi, alga nori, atum fresco",
			en: "Sushi rice, nori, fresh tuna"
		},
		price: 6800,
		pieces: 8,
		prepMin: 7,
		image: "/photos/hosomaki.jpg"
	},
	{
		id: "hoso-pepino",
		category: "hosomakis",
		name: {
			pt: "Hosomaki pepino",
			en: "Cucumber hosomaki"
		},
		description: {
			pt: "Oito peças vegetarianas com pepino crocante.",
			en: "Eight vegetarian pieces with crisp cucumber."
		},
		ingredients: {
			pt: "Arroz de sushi, alga nori, pepino",
			en: "Sushi rice, nori, cucumber"
		},
		price: 4500,
		pieces: 8,
		prepMin: 6,
		image: "/photos/hosomaki.jpg"
	},
	{
		id: "yaki-camarao",
		category: "yakissoba",
		name: {
			pt: "Yakissoba de camarão",
			en: "Prawn yakisoba"
		},
		description: {
			pt: "Macarrão salteado com camarão fresco e legumes da estação.",
			en: "Wok noodles with fresh prawn and seasonal vegetables."
		},
		ingredients: {
			pt: "Macarrão, camarão fresco, legumes da estação, molho shoyu",
			en: "Noodles, fresh prawn, seasonal vegetables, shoyu"
		},
		price: 1e4,
		prepMin: 14,
		image: "/photos/hot.jpg",
		flags: ["popular"]
	},
	{
		id: "yaki-carne",
		category: "yakissoba",
		name: {
			pt: "Yakissoba de carne",
			en: "Beef yakisoba"
		},
		description: {
			pt: "Macarrão salteado com carne tenra e legumes frescos.",
			en: "Wok noodles with tender beef and fresh vegetables."
		},
		ingredients: {
			pt: "Macarrão, carne bovina, legumes frescos, molho shoyu",
			en: "Noodles, beef, fresh vegetables, shoyu"
		},
		price: 9500,
		prepMin: 14,
		image: "/photos/hot.jpg"
	},
	{
		id: "yaki-frango",
		category: "yakissoba",
		name: {
			pt: "Yakissoba de frango",
			en: "Chicken yakisoba"
		},
		description: {
			pt: "Macarrão salteado com frango grelhado e legumes variados.",
			en: "Wok noodles with grilled chicken and mixed vegetables."
		},
		ingredients: {
			pt: "Macarrão, frango grelhado, legumes, molho shoyu",
			en: "Noodles, grilled chicken, vegetables, shoyu"
		},
		price: 8500,
		prepMin: 13,
		image: "/photos/hot.jpg"
	}
];
function productById(id) {
	return PRODUCTS.find((p) => p.id === id);
}
function productsByCategory(id) {
	return PRODUCTS.filter((p) => p.category === id);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function formatKz(value) {
	return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
}
var WHATSAPP = "244945407841";
var WHATSAPP_DISPLAY = "+244 945-407-841";
var EMAIL = "orlog.arrulo@setesete.ao";
var FOUNDER_NAME = "Orlog Arrulo";
var FOUNDER_TITLE = "Founder";
var INSTAGRAM = "https://www.instagram.com/setesete.ao/";
var HOURS = "12h – 22h";
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
	name: "setesete-cart",
	partialize: (s) => ({ lines: s.lines }),
	skipHydration: true
}));
function buildWhatsAppUrl(opts) {
	const { lang, name, phone, address, notes } = opts;
	const rows = useCart.getState().lines.map((l) => {
		const p = productById(l.id);
		if (!p) return null;
		const price = p.price * l.qty;
		return `• ${l.qty}× ${p.name[lang]} — ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} Kz`;
	}).filter(Boolean);
	const totalFmt = useCart.getState().total().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	const body = [
		`*${lang === "pt" ? "Pedido Sete Sete" : "Sete Sete order"}*`,
		name ? lang === "pt" ? `Nome: ${name}` : `Name: ${name}` : null,
		phone ? lang === "pt" ? `Telefone: ${phone}` : `Phone: ${phone}` : null,
		address ? lang === "pt" ? `Morada: ${address}` : `Address: ${address}` : null,
		"",
		...rows,
		"",
		`*Total: ${totalFmt} Kz*`,
		notes ? lang === "pt" ? `Notas: ${notes}` : `Notes: ${notes}` : null
	].filter((x) => x !== null).join("\n");
	return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`;
}
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
		className: cn("fixed inset-0 z-50 bg-ink/40 transition-opacity duration-200", open ? "opacity-100" : "pointer-events-none opacity-0"),
		onClick: () => setOpen(false),
		"aria-hidden": true
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: cn("fixed top-0 right-0 z-50 flex h-full w-full max-w-md flex-col bg-rice-warm shadow-2xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]", open ? "translate-x-0" : "translate-x-full"),
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
								alt: "",
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
var SEVEN_A = "M30 42 Q60 24 84 40 L56 90";
var SEVEN_B = "M90 78 Q60 96 36 80 L64 30";
function Mark({ className, invert = false, line = false }) {
	if (line) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 120 120",
		className: cn("text-kaki", className),
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			stroke: "currentColor",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "60",
					r: "56",
					strokeWidth: "5"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "60",
					cy: "60",
					r: "50",
					strokeWidth: "1.2",
					opacity: "0.35"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
					strokeWidth: "8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: SEVEN_A }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: SEVEN_B })]
				})
			]
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 120 120",
		className,
		"aria-hidden": true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
			cx: "60",
			cy: "60",
			r: "58",
			className: invert ? "fill-rice" : "fill-kaki"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			fill: "none",
			className: invert ? "stroke-kaki" : "stroke-rice",
			strokeWidth: "8",
			strokeLinecap: "round",
			strokeLinejoin: "round",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: SEVEN_A }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: SEVEN_B })]
		})]
	});
}
function LogoLockup({ className, light = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, {
			className: "size-9 shrink-0",
			invert: light
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
function Footer() {
	const lang = useLang((s) => s.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-ink/8 bg-nori text-rice",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "size-12" }),
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-sm text-stone",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-rice",
									children: FOUNDER_NAME
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mx-2 text-kaki",
									children: "·"
								}),
								FOUNDER_TITLE
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
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
							to: "/identidade",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.identity, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/pedir",
							className: "hover:text-kaki-soft",
							children: t(copy.nav.order, lang)
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] tracking-[0.22em] text-stone uppercase",
					children: t(copy.footer.downloads, lang)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/downloads/SeteSete-Identidade-Visual.zip",
							className: "hover:text-kaki-soft",
							download: true,
							children: t(copy.footer.identity, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/downloads/SeteSete-Website.zip",
							className: "hover:text-kaki-soft",
							download: true,
							children: t(copy.footer.website, lang)
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: INSTAGRAM,
							target: "_blank",
							rel: "noreferrer",
							className: "hover:text-kaki-soft",
							children: "Instagram"
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
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
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
		})]
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
	},
	{
		to: "/identidade",
		key: "identity"
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
		className: "sticky top-0 z-40 border-b border-ink/8 bg-rice/92 text-ink backdrop-blur-md",
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
		className: "fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-kaki text-rice shadow-[0_12px_32px_-8px_rgba(226,74,23,0.55)] transition hover:bg-kaki-deep sm:right-6 sm:bottom-6",
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
export { productsByCategory as _, HOURS as a, useLang as b, PRODUCTS as c, WHATSAPP_DISPLAY as d, buildWhatsAppUrl as f, productById as g, formatKz as h, FOUNDER_TITLE as i, Shell as l, copy as m, EMAIL as n, INSTAGRAM as o, cn as p, FOUNDER_NAME as r, Mark as s, CATEGORIES as t, WHATSAPP as u, t as v, useCart as y };
