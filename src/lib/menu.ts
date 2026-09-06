export type Lang = "pt" | "en";

export type CategoryId =
  | "entradas"
  | "combinados-premium"
  | "combinados"
  | "temakis"
  | "hots"
  | "gunkas"
  | "huramakis"
  | "niguiris"
  | "hosomakis"
  | "yakissoba";

export type Flag = "chef" | "signature" | "popular" | "highlight";

export type Copy = { pt: string; en: string };

export type Category = {
  id: CategoryId;
  name: Copy;
  ja: string;
  blurb: Copy;
  image: string;
};

export type Product = {
  id: string;
  category: CategoryId;
  name: Copy;
  description: Copy;
  ingredients: Copy;
  price: number;
  pieces?: number;
  prepMin: number;
  image: string;
  flags?: Flag[];
};

export const CATEGORIES: Category[] = [
  {
    id: "entradas",
    name: { pt: "Entradas", en: "Starters" },
    ja: "前菜",
    blurb: {
      pt: "Crocantes, quentes, para abrir o paladar.",
      en: "Crisp, hot, to open the palate.",
    },
    image: "/photos/tempura.jpg",
  },
  {
    id: "combinados-premium",
    name: { pt: "Combinados Premium", en: "Premium sets" },
    ja: "特選",
    blurb: {
      pt: "Selecção focada em salmão fresco.",
      en: "A selection built around fresh salmon.",
    },
    image: "/photos/combinado.jpg",
  },
  {
    id: "combinados",
    name: { pt: "Combinados", en: "Sets" },
    ja: "盛り合わせ",
    blurb: {
      pt: "Mix equilibrado com peixes do dia.",
      en: "A balanced mix with the day's fish.",
    },
    image: "/photos/combinado.jpg",
  },
  {
    id: "temakis",
    name: { pt: "Temakis", en: "Temaki" },
    ja: "手巻",
    blurb: {
      pt: "Cones de nori para comer à mão.",
      en: "Nori cones, eaten by hand.",
    },
    image: "/photos/temaki.jpg",
  },
  {
    id: "hots",
    name: { pt: "Hots", en: "Hot rolls" },
    ja: "ホット",
    blurb: {
      pt: "Rolinhos empanados, crosta estaladiça.",
      en: "Panko-fried rolls, shatteringly crisp.",
    },
    image: "/photos/hot.jpg",
  },
  {
    id: "gunkas",
    name: { pt: "Gunkas", en: "Gunkan" },
    ja: "軍艦",
    blurb: {
      pt: "Barcos de arroz com cobertura generosa.",
      en: "Rice boats with a generous topping.",
    },
    image: "/photos/gunkan.jpg",
  },
  {
    id: "huramakis",
    name: { pt: "Huramakis", en: "Uramaki" },
    ja: "裏巻",
    blurb: {
      pt: "Rolos invertidos da casa.",
      en: "Inside-out rolls, house style.",
    },
    image: "/photos/uramaki.jpg",
  },
  {
    id: "niguiris",
    name: { pt: "Niguiris", en: "Nigiri" },
    ja: "握り",
    blurb: {
      pt: "A forma mais pura do sushi.",
      en: "Sushi in its purest form.",
    },
    image: "/photos/nigiri.jpg",
  },
  {
    id: "hosomakis",
    name: { pt: "Hosomakis", en: "Hosomaki" },
    ja: "細巻",
    blurb: {
      pt: "Rolos finos, oito peças.",
      en: "Thin rolls, eight pieces.",
    },
    image: "/photos/hosomaki.jpg",
  },
  {
    id: "yakissoba",
    name: { pt: "Yakissoba", en: "Yakisoba" },
    ja: "焼そば",
    blurb: {
      pt: "Noodles salteados da estação.",
      en: "Wok-tossed noodles of the season.",
    },
    image: "/photos/hot.jpg",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "tempura-camarao",
    category: "entradas",
    name: { pt: "Tempura de camarão", en: "Prawn tempura" },
    description: {
      pt: "Seis camarões frescos em massa tempura dourada.",
      en: "Six fresh prawns in a golden tempura batter.",
    },
    ingredients: {
      pt: "Camarão, massa de tempura, óleo para fritura",
      en: "Prawn, tempura batter, frying oil",
    },
    price: 7800,
    pieces: 6,
    prepMin: 9,
    image: "/photos/tempura.jpg",
  },
  {
    id: "rolinhos-primavera",
    category: "entradas",
    name: { pt: "Rolinhos primavera", en: "Spring rolls" },
    description: {
      pt: "Quatro unidades crocantes com recheio de frango ou carne suína, cebola e cenoura.",
      en: "Four crisp rolls filled with chicken or pork, onion and carrot.",
    },
    ingredients: {
      pt: "Massa de rolinho, cenoura, cebola, alho, gengibre, frango ou carne suína",
      en: "Spring-roll pastry, carrot, onion, garlic, ginger, chicken or pork",
    },
    price: 5500,
    pieces: 4,
    prepMin: 9,
    image: "/photos/tempura.jpg",
  },
  {
    id: "coxinha-camarao",
    category: "entradas",
    name: { pt: "Coxinha de camarão", en: "Prawn coxinha" },
    description: {
      pt: "Três unidades crocantes com recheio de queijo e camarão.",
      en: "Three crisp coxinhas filled with cheese and prawn.",
    },
    ingredients: {
      pt: "Massa de coxinha, queijo Philadelphia, camarão",
      en: "Coxinha dough, cream cheese, prawn",
    },
    price: 4500,
    pieces: 3,
    prepMin: 10,
    image: "/photos/tempura.jpg",
  },
  {
    id: "croquetes",
    category: "entradas",
    name: { pt: "Croquetes", en: "Croquettes" },
    description: {
      pt: "Três unidades crocantes com recheio de alheira, cebola e ovo.",
      en: "Three crisp croquettes filled with alheira, onion and egg.",
    },
    ingredients: {
      pt: "Massa de croquetes, alheira, cebola, ovo",
      en: "Croquette mix, alheira sausage, onion, egg",
    },
    price: 4500,
    pieces: 3,
    prepMin: 10,
    image: "/photos/tempura.jpg",
  },
  {
    id: "tempura-legumes",
    category: "entradas",
    name: { pt: "Tempura de legumes", en: "Vegetable tempura" },
    description: {
      pt: "Quatro legumes em massa tempura leve, com molho tentsuyu.",
      en: "Four vegetables in a light tempura batter, with tentsuyu.",
    },
    ingredients: {
      pt: "Curgete, cenoura, cogumelo, pimentos, massa tempura, molho tentsuyu",
      en: "Courgette, carrot, mushroom, peppers, tempura batter, tentsuyu",
    },
    price: 6000,
    pieces: 4,
    prepMin: 15,
    image: "/photos/tempura.jpg",
  },
  {
    id: "comb-16-salmao",
    category: "combinados-premium",
    name: { pt: "Combinado 16 peças · salmão", en: "16-piece salmon set" },
    description: {
      pt: "Selecção exclusiva focada em salmão — makis e niguiris.",
      en: "A salmon-led selection of maki and nigiri.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
      en: "Fresh salmon, sushi rice, nori, cream cheese",
    },
    price: 24000,
    pieces: 16,
    prepMin: 15,
    image: "/photos/combinado.jpg",
  },
  {
    id: "comb-26-salmao",
    category: "combinados-premium",
    name: { pt: "Combinado 26 peças · salmão", en: "26-piece salmon set" },
    description: {
      pt: "Variedade intermédia, sempre com salmão no centro.",
      en: "A mid-size set, always with salmon at the centre.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
      en: "Fresh salmon, sushi rice, nori, cream cheese",
    },
    price: 39000,
    pieces: 26,
    prepMin: 20,
    image: "/photos/combinado.jpg",
  },
  {
    id: "comb-32-salmao",
    category: "combinados-premium",
    name: { pt: "Combinado 32 peças · salmão", en: "32-piece salmon set" },
    description: {
      pt: "Variedade completa de sushi, sashimi e makis de salmão.",
      en: "A full spread of salmon sushi, sashimi and maki.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, abacate",
      en: "Fresh salmon, sushi rice, nori, avocado",
    },
    price: 48000,
    pieces: 32,
    prepMin: 25,
    image: "/photos/combinado.jpg",
  },
  {
    id: "comb-45-salmao",
    category: "combinados-premium",
    name: { pt: "Combinado 45 peças · salmão", en: "45-piece salmon set" },
    description: {
      pt: "O combinado premium definitivo. Recomendado pelo chef.",
      en: "The definitive premium set. Chef's recommendation.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme, abacate",
      en: "Fresh salmon, sushi rice, nori, cream cheese, avocado",
    },
    price: 67500,
    pieces: 45,
    prepMin: 35,
    image: "/photos/combinado.jpg",
    flags: ["chef"],
  },
  {
    id: "comb-16-normal",
    category: "combinados",
    name: { pt: "Combinado 16 peças", en: "16-piece set" },
    description: {
      pt: "Até 6 peças de salmão — mix com peixes do dia, makis e niguiris.",
      en: "Up to 6 salmon pieces — a mix of the day's fish, maki and nigiri.",
    },
    ingredients: {
      pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
      en: "Salmon, fish of the day, sushi rice, nori",
    },
    price: 18000,
    pieces: 16,
    prepMin: 15,
    image: "/photos/combinado.jpg",
  },
  {
    id: "comb-26-normal",
    category: "combinados",
    name: { pt: "Combinado 26 peças", en: "26-piece set" },
    description: {
      pt: "Até 12 peças de salmão — para partilhar.",
      en: "Up to 12 salmon pieces — made for sharing.",
    },
    ingredients: {
      pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
      en: "Salmon, fish of the day, sushi rice, nori",
    },
    price: 29250,
    pieces: 26,
    prepMin: 20,
    image: "/photos/combinado.jpg",
  },
  {
    id: "comb-32-normal",
    category: "combinados",
    name: { pt: "Combinado 32 peças", en: "32-piece set" },
    description: {
      pt: "Até 18 peças de salmão — um festival de texturas.",
      en: "Up to 18 salmon pieces — a festival of textures.",
    },
    ingredients: {
      pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
      en: "Salmon, fish of the day, sushi rice, nori",
    },
    price: 36000,
    pieces: 32,
    prepMin: 25,
    image: "/photos/combinado.jpg",
  },
  {
    id: "comb-45-normal",
    category: "combinados",
    name: { pt: "Combinado 45 peças", en: "45-piece set" },
    description: {
      pt: "Até 25 peças de salmão — para grandes encontros.",
      en: "Up to 25 salmon pieces — for larger tables.",
    },
    ingredients: {
      pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
      en: "Salmon, fish of the day, sushi rice, nori",
    },
    price: 50625,
    pieces: 45,
    prepMin: 35,
    image: "/photos/combinado.jpg",
  },
  {
    id: "temaki-salmao",
    category: "temakis",
    name: { pt: "Temaki de salmão", en: "Salmon temaki" },
    description: {
      pt: "Cone de nori com salmão fresco e arroz temperado.",
      en: "A nori cone with fresh salmon and seasoned rice.",
    },
    ingredients: {
      pt: "Alga nori, arroz de sushi, salmão fresco",
      en: "Nori, sushi rice, fresh salmon",
    },
    price: 4500,
    pieces: 1,
    prepMin: 6,
    image: "/photos/temaki.jpg",
  },
  {
    id: "temaki-atum",
    category: "temakis",
    name: { pt: "Temaki de atum", en: "Tuna temaki" },
    description: {
      pt: "Cone de nori com atum fresco e pepino crocante.",
      en: "A nori cone with fresh tuna and crisp cucumber.",
    },
    ingredients: {
      pt: "Alga nori, arroz de sushi, atum fresco, pepino",
      en: "Nori, sushi rice, fresh tuna, cucumber",
    },
    price: 4500,
    pieces: 1,
    prepMin: 6,
    image: "/photos/temaki.jpg",
  },
  {
    id: "temaki-especial",
    category: "temakis",
    name: { pt: "Temaki especial", en: "Special temaki" },
    description: {
      pt: "Cone generoso com mix de peixes nobres e molho da casa.",
      en: "A generous cone with noble fish and house sauce.",
    },
    ingredients: {
      pt: "Alga nori, arroz de sushi, mix de peixes nobres, molho da casa",
      en: "Nori, sushi rice, noble fish mix, house sauce",
    },
    price: 5200,
    pieces: 1,
    prepMin: 7,
    image: "/photos/temaki.jpg",
    flags: ["highlight"],
  },
  {
    id: "hot-filadelfia",
    category: "hots",
    name: { pt: "Hot Filadélfia", en: "Hot Philadelphia" },
    description: {
      pt: "Oito peças — salmão fresco e cream cheese, crosta de panko.",
      en: "Eight pieces — fresh salmon and cream cheese, panko crust.",
    },
    ingredients: {
      pt: "Salmão fresco, queijo creme, arroz de sushi, alga nori, panko",
      en: "Fresh salmon, cream cheese, sushi rice, nori, panko",
    },
    price: 11000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
  },
  {
    id: "hot-gasai",
    category: "hots",
    name: { pt: "Hot Gasai", en: "Hot Gasai" },
    description: {
      pt: "Oito peças — combinação quente com crosta crocante e recheio premium.",
      en: "Eight pieces — a hot roll with a crisp crust and premium filling.",
    },
    ingredients: {
      pt: "Recheio premium, panko, arroz de sushi, alga nori",
      en: "Premium filling, panko, sushi rice, nori",
    },
    price: 12000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
  },
  {
    id: "hot-fray",
    category: "hots",
    name: { pt: "Hot Fray", en: "Hot Fray" },
    description: {
      pt: "Oito peças — frito na perfeição, toque suave e equilibrado.",
      en: "Eight pieces — fried to order, gentle and balanced.",
    },
    ingredients: {
      pt: "Recheio da casa, panko, arroz de sushi, alga nori",
      en: "House filling, panko, sushi rice, nori",
    },
    price: 9500,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
  },
  {
    id: "hot-spicy-tuna",
    category: "hots",
    name: { pt: "Hot spicy tuna", en: "Hot spicy tuna" },
    description: {
      pt: "Oito peças — atum picante com crosta super estaladiça.",
      en: "Eight pieces — spicy tuna under a shatteringly crisp crust.",
    },
    ingredients: {
      pt: "Atum, molho picante, arroz de sushi, alga nori, panko",
      en: "Tuna, spicy sauce, sushi rice, nori, panko",
    },
    price: 9000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
  },
  {
    id: "hot-chefe",
    category: "hots",
    name: { pt: "Hot do chefe", en: "Chef's hot roll" },
    description: {
      pt: "Oito peças — combinação exclusiva, frita e finalizada com molho.",
      en: "Eight pieces — an exclusive combination, fried and finished with sauce.",
    },
    ingredients: {
      pt: "Recheio especial do chef, molho da casa, panko, arroz de sushi, alga nori",
      en: "Chef's filling, house sauce, panko, sushi rice, nori",
    },
    price: 12000,
    pieces: 8,
    prepMin: 13,
    image: "/photos/hot.jpg",
    flags: ["chef"],
  },
  {
    id: "torrinhas",
    category: "gunkas",
    name: { pt: "Torrinhas Sete Sete", en: "Sete Sete crisps" },
    description: {
      pt: "Seis torrinhas de arroz crocante com cobertura cremosa da casa.",
      en: "Six crisp rice toasts with the house creamy topping.",
    },
    ingredients: {
      pt: "Arroz crocante, cobertura cremosa da casa",
      en: "Crisp rice, house creamy topping",
    },
    price: 12000,
    pieces: 6,
    prepMin: 10,
    image: "/photos/gunkan.jpg",
    flags: ["signature"],
  },
  {
    id: "gunka-salmao",
    category: "gunkas",
    name: { pt: "Gunka fusão · salmão", en: "Fusion gunkan · salmon" },
    description: {
      pt: "Quatro gunkas de salmão fresco com a combinação do chef.",
      en: "Four salmon gunkan with the chef's combination.",
    },
    ingredients: {
      pt: "Arroz de sushi, alga nori, salmão fresco, tempero da casa",
      en: "Sushi rice, nori, fresh salmon, house seasoning",
    },
    price: 6500,
    pieces: 4,
    prepMin: 8,
    image: "/photos/gunkan.jpg",
  },
  {
    id: "gunka-atum",
    category: "gunkas",
    name: { pt: "Gunka fusão · atum", en: "Fusion gunkan · tuna" },
    description: {
      pt: "Quatro peças com atum fresco picado e tempero da casa.",
      en: "Four pieces of minced fresh tuna and house seasoning.",
    },
    ingredients: {
      pt: "Arroz de sushi, alga nori, atum fresco, tempero da casa",
      en: "Sushi rice, nori, fresh tuna, house seasoning",
    },
    price: 3500,
    pieces: 4,
    prepMin: 8,
    image: "/photos/gunkan.jpg",
  },
  {
    id: "gunka-chitaka",
    category: "gunkas",
    name: { pt: "Gunka fusão · chitaka", en: "Fusion gunkan · chitaka" },
    description: {
      pt: "Quatro peças — base de atum ou salmão com o sabor marcante da casa.",
      en: "Four pieces — tuna or salmon with the house accent.",
    },
    ingredients: {
      pt: "Arroz de sushi, alga nori, atum ou salmão, ingrediente de destaque",
      en: "Sushi rice, nori, tuna or salmon, signature accent",
    },
    price: 4500,
    pieces: 4,
    prepMin: 8,
    image: "/photos/gunkan.jpg",
  },
  {
    id: "gunka-ebi",
    category: "gunkas",
    name: { pt: "Gunka ebi", en: "Ebi gunkan" },
    description: {
      pt: "Quatro gunkas finalizados com camarão fresco.",
      en: "Four gunkan finished with fresh prawn.",
    },
    ingredients: {
      pt: "Arroz de sushi, alga nori, camarão fresco, toque da casa",
      en: "Sushi rice, nori, fresh prawn, house finish",
    },
    price: 7000,
    pieces: 4,
    prepMin: 9,
    image: "/photos/gunkan.jpg",
  },
  {
    id: "maki-california",
    category: "huramakis",
    name: { pt: "Maki Califórnia", en: "California maki" },
    description: {
      pt: "Oito peças — mistura fresca e tropical.",
      en: "Eight pieces — a fresh, tropical mix.",
    },
    ingredients: {
      pt: "Kani, abacate, pepino, arroz de sushi, alga nori",
      en: "Kani crab, avocado, cucumber, sushi rice, nori",
    },
    price: 10300,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
  },
  {
    id: "maki-tuna",
    category: "huramakis",
    name: { pt: "Maki tuna", en: "Tuna maki" },
    description: {
      pt: "Oito peças — rolo invertido focado no atum fresco.",
      en: "Eight pieces — an inside-out roll built on fresh tuna.",
    },
    ingredients: {
      pt: "Atum fresco, arroz de sushi, alga nori",
      en: "Fresh tuna, sushi rice, nori",
    },
    price: 10100,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
  },
  {
    id: "maki-ebi",
    category: "huramakis",
    name: { pt: "Maki ebi", en: "Ebi maki" },
    description: {
      pt: "Oito peças — camarão e um toque suave do chef.",
      en: "Eight pieces — prawn with the chef's gentle finish.",
    },
    ingredients: {
      pt: "Camarão, arroz de sushi, alga nori, tempero do chef",
      en: "Prawn, sushi rice, nori, chef's seasoning",
    },
    price: 10500,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
  },
  {
    id: "maki-filadelfia",
    category: "huramakis",
    name: { pt: "Maki Filadélfia", en: "Philadelphia maki" },
    description: {
      pt: "Oito peças — o clássico com cream cheese.",
      en: "Eight pieces — the classic with cream cheese.",
    },
    ingredients: {
      pt: "Salmão fresco, queijo creme, arroz de sushi, alga nori",
      en: "Fresh salmon, cream cheese, sushi rice, nori",
    },
    price: 10300,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
  },
  {
    id: "huramaki-sete-sete",
    category: "huramakis",
    name: { pt: "Huramaki Sete Sete", en: "Sete Sete uramaki" },
    description: {
      pt: "Oito peças — a assinatura da casa. Recomendado pelo chef.",
      en: "Eight pieces — the house signature. Chef's recommendation.",
    },
    ingredients: {
      pt: "Selecção premium do chef, arroz de sushi, alga nori",
      en: "Chef's premium selection, sushi rice, nori",
    },
    price: 13000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/uramaki.jpg",
    flags: ["signature", "chef"],
  },
  {
    id: "nigiri-salmao",
    category: "niguiris",
    name: { pt: "Niguiri de salmão", en: "Salmon nigiri" },
    description: {
      pt: "Duas peças de arroz moldado cobertas com salmão fresco.",
      en: "Two pieces of hand-pressed rice with fresh salmon.",
    },
    ingredients: {
      pt: "Arroz de sushi, salmão fresco",
      en: "Sushi rice, fresh salmon",
    },
    price: 3500,
    pieces: 2,
    prepMin: 5,
    image: "/photos/nigiri.jpg",
  },
  {
    id: "nigiri-atum",
    category: "niguiris",
    name: { pt: "Niguiri de atum", en: "Tuna nigiri" },
    description: {
      pt: "Duas peças de arroz moldado cobertas com atum fresco.",
      en: "Two pieces of hand-pressed rice with fresh tuna.",
    },
    ingredients: {
      pt: "Arroz de sushi, atum fresco",
      en: "Sushi rice, fresh tuna",
    },
    price: 3800,
    pieces: 2,
    prepMin: 5,
    image: "/photos/nigiri.jpg",
  },
  {
    id: "nigiri-camarao",
    category: "niguiris",
    name: { pt: "Niguiri de camarão", en: "Prawn nigiri" },
    description: {
      pt: "Duas peças de arroz moldado cobertas com camarão cozido.",
      en: "Two pieces of hand-pressed rice with cooked prawn.",
    },
    ingredients: {
      pt: "Arroz de sushi, camarão cozido",
      en: "Sushi rice, cooked prawn",
    },
    price: 4000,
    pieces: 2,
    prepMin: 5,
    image: "/photos/nigiri.jpg",
  },
  {
    id: "hoso-salmao",
    category: "hosomakis",
    name: { pt: "Hosomaki salmão", en: "Salmon hosomaki" },
    description: {
      pt: "Oito peças de rolo fino com salmão.",
      en: "Eight thin rolls with salmon.",
    },
    ingredients: {
      pt: "Arroz de sushi, alga nori, salmão fresco",
      en: "Sushi rice, nori, fresh salmon",
    },
    price: 6500,
    pieces: 8,
    prepMin: 7,
    image: "/photos/hosomaki.jpg",
  },
  {
    id: "hoso-atum",
    category: "hosomakis",
    name: { pt: "Hosomaki atum", en: "Tuna hosomaki" },
    description: {
      pt: "Oito peças de rolo fino com atum.",
      en: "Eight thin rolls with tuna.",
    },
    ingredients: {
      pt: "Arroz de sushi, alga nori, atum fresco",
      en: "Sushi rice, nori, fresh tuna",
    },
    price: 6800,
    pieces: 8,
    prepMin: 7,
    image: "/photos/hosomaki.jpg",
  },
  {
    id: "hoso-pepino",
    category: "hosomakis",
    name: { pt: "Hosomaki pepino", en: "Cucumber hosomaki" },
    description: {
      pt: "Oito peças vegetarianas com pepino crocante.",
      en: "Eight vegetarian pieces with crisp cucumber.",
    },
    ingredients: {
      pt: "Arroz de sushi, alga nori, pepino",
      en: "Sushi rice, nori, cucumber",
    },
    price: 4500,
    pieces: 8,
    prepMin: 6,
    image: "/photos/hosomaki.jpg",
  },
  {
    id: "yaki-camarao",
    category: "yakissoba",
    name: { pt: "Yakissoba de camarão", en: "Prawn yakisoba" },
    description: {
      pt: "Macarrão salteado com camarão fresco e legumes da estação.",
      en: "Wok noodles with fresh prawn and seasonal vegetables.",
    },
    ingredients: {
      pt: "Macarrão, camarão fresco, legumes da estação, molho shoyu",
      en: "Noodles, fresh prawn, seasonal vegetables, shoyu",
    },
    price: 10000,
    prepMin: 14,
    image: "/photos/hot.jpg",
    flags: ["popular"],
  },
  {
    id: "yaki-carne",
    category: "yakissoba",
    name: { pt: "Yakissoba de carne", en: "Beef yakisoba" },
    description: {
      pt: "Macarrão salteado com carne tenra e legumes frescos.",
      en: "Wok noodles with tender beef and fresh vegetables.",
    },
    ingredients: {
      pt: "Macarrão, carne bovina, legumes frescos, molho shoyu",
      en: "Noodles, beef, fresh vegetables, shoyu",
    },
    price: 9500,
    prepMin: 14,
    image: "/photos/hot.jpg",
  },
  {
    id: "yaki-frango",
    category: "yakissoba",
    name: { pt: "Yakissoba de frango", en: "Chicken yakisoba" },
    description: {
      pt: "Macarrão salteado com frango grelhado e legumes variados.",
      en: "Wok noodles with grilled chicken and mixed vegetables.",
    },
    ingredients: {
      pt: "Macarrão, frango grelhado, legumes, molho shoyu",
      en: "Noodles, grilled chicken, vegetables, shoyu",
    },
    price: 8500,
    prepMin: 13,
    image: "/photos/hot.jpg",
  },
];

export function productById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function productsByCategory(id: CategoryId) {
  return PRODUCTS.filter((p) => p.category === id);
}
