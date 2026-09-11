export type Lang = "pt" | "en";

export type CategoryId =
  | "entradas"
  | "combinados-ouro"
  | "combinados-mesa"
  | "assinatura"
  | "temakis"
  | "hots"
  | "gunkan"
  | "uramaki"
  | "nigiri"
  | "hosomaki"
  | "yakissoba"
  | "meio-dia"
  | "bebidas"
  | "doces";

export type Flag = "chef" | "signature" | "popular" | "highlight" | "new" | "veg";

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
  sku: string;
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

/** Source: Cardápio Mestre — 14 colecções, 65 SKUs. Hashi incluídos em todos os preços. */
export const CATEGORIES: Category[] = [
  {
    id: "entradas",
    name: { pt: "Entradas", en: "Starters" },
    ja: "前菜",
    blurb: {
      pt: "O primeiro gesto. Fritos precisos, gyozas, edamame.",
      en: "The first gesture. Precise fried bites, gyoza, edamame.",
    },
    image: "/photos/tempura.jpg",
  },
  {
    id: "combinados-ouro",
    name: { pt: "Combinados Ouro", en: "Gold sets" },
    ja: "特選",
    blurb: {
      pt: "Só salmão. A linha premium da casa.",
      en: "Salmon only. The house premium line.",
    },
    image: "/photos/hero-capa.jpg",
  },
  {
    id: "combinados-mesa",
    name: { pt: "Combinados Mesa", en: "Table sets" },
    ja: "盛り合わせ",
    blurb: {
      pt: "Mix do dia. Melhor custo para partilhar.",
      en: "The day's mix. Best value for sharing.",
    },
    image: "/photos/combinado.jpg",
  },
  {
    id: "assinatura",
    name: { pt: "Assinatura Luanda", en: "Luanda signatures" },
    ja: "署名",
    blurb: {
      pt: "77, Ilha, Talatona, Família Domingo.",
      en: "77, Ilha, Talatona, Sunday family.",
    },
    image: "/photos/combinado-close.jpg",
  },
  {
    id: "temakis",
    name: { pt: "Temakis", en: "Temaki" },
    ja: "手巻",
    blurb: {
      pt: "Um cone, uma mão, comer já.",
      en: "One cone, one hand, eat now.",
    },
    image: "/photos/temaki.jpg",
  },
  {
    id: "hots",
    name: { pt: "Hots", en: "Hot rolls" },
    ja: "ホット",
    blurb: {
      pt: "Empanados, quentes, o favorito de Luanda.",
      en: "Panko-fried, hot — Luanda's favourite.",
    },
    image: "/photos/hot.jpg",
  },
  {
    id: "gunkan",
    name: { pt: "Gunkan", en: "Gunkan" },
    ja: "軍艦",
    blurb: {
      pt: "Barcos pequenos, sabor concentrado.",
      en: "Small boats, concentrated flavour.",
    },
    image: "/photos/gunkan.jpg",
  },
  {
    id: "uramaki",
    name: { pt: "Uramaki", en: "Uramaki" },
    ja: "裏巻",
    blurb: {
      pt: "Rolos invertidos, 8 peças.",
      en: "Inside-out rolls, 8 pieces.",
    },
    image: "/photos/uramaki.jpg",
  },
  {
    id: "nigiri",
    name: { pt: "Nigiri", en: "Nigiri" },
    ja: "握り",
    blurb: {
      pt: "Duas peças. O corte limpo.",
      en: "Two pieces. The clean cut.",
    },
    image: "/photos/nigiri.jpg",
  },
  {
    id: "hosomaki",
    name: { pt: "Hosomaki", en: "Hosomaki" },
    ja: "細巻",
    blurb: {
      pt: "Rolo fino, 8 peças.",
      en: "Thin rolls, 8 pieces.",
    },
    image: "/photos/hosomaki.jpg",
  },
  {
    id: "yakissoba",
    name: { pt: "Yakissoba", en: "Yakisoba" },
    ja: "焼そば",
    blurb: {
      pt: "Wok quente. O mais pedido da casa no camarão.",
      en: "Hot wok. Prawn is the house bestseller.",
    },
    image: "/photos/cozinha.jpg",
  },
  {
    id: "meio-dia",
    name: { pt: "Menu do Meio-Dia", en: "Lunch menu" },
    ja: "昼",
    blurb: {
      pt: "12h–16h, dias úteis. Escritório e almoço curto.",
      en: "12:00–16:00, weekdays. Office and a short lunch.",
    },
    image: "/photos/catalogo.jpg",
  },
  {
    id: "bebidas",
    name: { pt: "Bebidas e extras", en: "Drinks & extras" },
    ja: "飲",
    blurb: {
      pt: "Água, chá, sumos. Hashi já vai no prato.",
      en: "Water, tea, juices. Chopsticks already in the dish.",
    },
    image: "/photos/catalogo-mesa.jpg",
  },
  {
    id: "doces",
    name: { pt: "Doces", en: "Sweets" },
    ja: "甘",
    blurb: {
      pt: "Mochi e cheesecake yuzu. Fechar a mesa.",
      en: "Mochi and yuzu cheesecake. Close the table.",
    },
    image: "/photos/capa-catalogo.jpg",
  },
];

export const CATEGORY_ALIASES: Record<string, CategoryId> = {
  "combinados-premium": "combinados-ouro",
  combinados: "combinados-mesa",
  huramakis: "uramaki",
  gunkas: "gunkan",
  niguiris: "nigiri",
  hosomakis: "hosomaki",
};

export function resolveCategory(id: string | undefined): CategoryId | undefined {
  if (!id) return undefined;
  if (CATEGORIES.some((c) => c.id === id)) return id as CategoryId;
  return CATEGORY_ALIASES[id];
}

export const PRODUCTS: Product[] = [
  {
    id: "SS-ENT-01",
    sku: "SS-ENT-01",
    category: "entradas",
    name: { pt: "Tempura de Camarão", en: "Prawn tempura" },
    description: {
      pt: "Camarão fresco em massa leve, dourada até o estalo. O primeiro gesto da mesa.",
      en: "Fresh prawn in a light batter, fried until it snaps. The first gesture of the table.",
    },
    ingredients: {
      pt: "Camarão fresco, massa tempura, óleo de fritura, molho tentsuyu",
      en: "Fresh prawn, tempura batter, frying oil, tentsuyu",
    },
    price: 7800,
    pieces: 6,
    prepMin: 9,
    image: "/photos/tempura.jpg",
  },
  {
    id: "SS-ENT-02",
    sku: "SS-ENT-02",
    category: "entradas",
    name: { pt: "Rolinhos Primavera", en: "Spring rolls" },
    description: {
      pt: "Massa fina e crocante, recheio quente de frango, cebola e cenoura.",
      en: "Thin, crisp pastry, hot filling of chicken, onion and carrot.",
    },
    ingredients: {
      pt: "Massa de rolinho, frango desfiado, cebola, cenoura, alho, gengibre",
      en: "Spring-roll pastry, shredded chicken, onion, carrot, garlic, ginger",
    },
    price: 5500,
    pieces: 4,
    prepMin: 9,
    image: "/photos/tempura.jpg",
  },
  {
    id: "SS-ENT-03",
    sku: "SS-ENT-03",
    category: "entradas",
    name: { pt: "Coxinha de Camarão", en: "Prawn coxinha" },
    description: {
      pt: "Três coxinhas douradas, recheio cremoso de camarão e Philadelphia.",
      en: "Three golden coxinhas, creamy prawn and Philadelphia filling.",
    },
    ingredients: {
      pt: "Massa de coxinha, camarão, queijo Philadelphia",
      en: "Coxinha dough, prawn, Philadelphia cheese",
    },
    price: 4500,
    pieces: 3,
    prepMin: 10,
    image: "/photos/tempura.jpg",
  },
  {
    id: "SS-ENT-04",
    sku: "SS-ENT-04",
    category: "entradas",
    name: { pt: "Croquetes de Alheira", en: "Alheira croquettes" },
    description: {
      pt: "Alheira, cebola e ovo numa crosta que parte no primeiro dente.",
      en: "Alheira, onion and egg in a crust that breaks at the first bite.",
    },
    ingredients: {
      pt: "Massa de croquete, alheira, cebola, ovo",
      en: "Croquette mix, alheira, onion, egg",
    },
    price: 4500,
    pieces: 3,
    prepMin: 10,
    image: "/photos/tempura.jpg",
  },
  {
    id: "SS-ENT-05",
    sku: "SS-ENT-05",
    category: "entradas",
    name: { pt: "Tempura de Legumes", en: "Vegetable tempura" },
    description: {
      pt: "Curgete, cenoura, cogumelo e pimento numa tempura quase transparente.",
      en: "Courgette, carrot, mushroom and pepper in an almost transparent tempura.",
    },
    ingredients: {
      pt: "Curgete, cenoura, cogumelo, pimentos, massa tempura, molho tentsuyu",
      en: "Courgette, carrot, mushroom, peppers, tempura batter, tentsuyu",
    },
    price: 6000,
    pieces: 4,
    prepMin: 15,
    image: "/photos/legumes.jpg",
    flags: ["veg"],
  },
  {
    id: "SS-ENT-06",
    sku: "SS-ENT-06",
    category: "entradas",
    name: { pt: "Edamame com Flor de Sal", en: "Edamame with fleur de sel" },
    description: {
      pt: "Vagens quentes, sal em flor. O aperitivo que abre o apetite sem pesar.",
      en: "Hot pods, fleur de sel. The starter that opens the appetite without weighing.",
    },
    ingredients: {
      pt: "Edamame, flor de sal, azeite de sésamo",
      en: "Edamame, fleur de sel, sesame oil",
    },
    price: 3500,
    prepMin: 6,
    image: "/photos/legumes.jpg",
    flags: ["new"],
  },
  {
    id: "SS-ENT-07",
    sku: "SS-ENT-07",
    category: "entradas",
    name: { pt: "Gyozas de Camarão", en: "Prawn gyoza" },
    description: {
      pt: "Cinco gyozas seladas na chapa, suculentas por dentro, douradas na base.",
      en: "Five pan-seared gyoza, juicy inside, golden on the base.",
    },
    ingredients: {
      pt: "Massa gyoza, camarão, alho-francês, gengibre, molho ponzu",
      en: "Gyoza pastry, prawn, leek, ginger, ponzu",
    },
    price: 6500,
    pieces: 5,
    prepMin: 12,
    image: "/photos/tempura.jpg",
    flags: ["new"],
  },
  {
    id: "SS-OUR-16",
    sku: "SS-OUR-16",
    category: "combinados-ouro",
    name: { pt: "Combinado Ouro 16", en: "Gold set 16" },
    description: {
      pt: "Só salmão. Makis e niguiris numa caixa precisa para dois.",
      en: "Salmon only. Maki and nigiri in a precise box for two.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
      en: "Fresh salmon, sushi rice, nori, cream cheese",
    },
    price: 24000,
    pieces: 16,
    prepMin: 15,
    image: "/photos/combinado-close.jpg",
    flags: ["highlight"],
  },
  {
    id: "SS-OUR-26",
    sku: "SS-OUR-26",
    category: "combinados-ouro",
    name: { pt: "Combinado Ouro 26", en: "Gold set 26" },
    description: {
      pt: "A escala intermédia do salmão Sete Sete. Generosa, ainda íntima.",
      en: "The mid-scale of Sete Sete salmon. Generous, still intimate.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme",
      en: "Fresh salmon, sushi rice, nori, cream cheese",
    },
    price: 39000,
    pieces: 26,
    prepMin: 20,
    image: "/photos/hero-capa.jpg",
    flags: ["highlight"],
  },
  {
    id: "SS-OUR-32",
    sku: "SS-OUR-32",
    category: "combinados-ouro",
    name: { pt: "Combinado Ouro 32", en: "Gold set 32" },
    description: {
      pt: "Sushi, sashimi e makis de salmão. A mesa completa sem excesso.",
      en: "Salmon sushi, sashimi and maki. The complete table without excess.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, abacate",
      en: "Fresh salmon, sushi rice, nori, avocado",
    },
    price: 48000,
    pieces: 32,
    prepMin: 25,
    image: "/photos/combinado-close.jpg",
    flags: ["highlight"],
  },
  {
    id: "SS-OUR-45",
    sku: "SS-OUR-45",
    category: "combinados-ouro",
    name: { pt: "Combinado Ouro Chef 45", en: "Chef's Gold 45" },
    description: {
      pt: "O combinado definitivo da casa. Recomendado pelo chef. Salmão no centro.",
      en: "The house's definitive set. Chef's recommendation. Salmon at the centre.",
    },
    ingredients: {
      pt: "Salmão fresco, arroz de sushi, alga nori, queijo creme, abacate",
      en: "Fresh salmon, sushi rice, nori, cream cheese, avocado",
    },
    price: 67500,
    pieces: 45,
    prepMin: 35,
    image: "/photos/hero-capa.jpg",
    flags: ["chef"],
  },
  {
    id: "SS-MES-16",
    sku: "SS-MES-16",
    category: "combinados-mesa",
    name: { pt: "Combinado Mesa 16", en: "Table set 16" },
    description: {
      pt: "Mix equilibrado: até 6 peças de salmão, peixe do dia, makis e niguiris.",
      en: "A balanced mix: up to 6 salmon pieces, fish of the day, maki and nigiri.",
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
    id: "SS-MES-26",
    sku: "SS-MES-26",
    category: "combinados-mesa",
    name: { pt: "Combinado Mesa 26", en: "Table set 26" },
    description: {
      pt: "Até 12 peças de salmão. O melhor custo-benefício para partilhar.",
      en: "Up to 12 salmon pieces. The best value for sharing.",
    },
    ingredients: {
      pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
      en: "Salmon, fish of the day, sushi rice, nori",
    },
    price: 29500,
    pieces: 26,
    prepMin: 20,
    image: "/photos/combinado.jpg",
  },
  {
    id: "SS-MES-32",
    sku: "SS-MES-32",
    category: "combinados-mesa",
    name: { pt: "Combinado Mesa 32", en: "Table set 32" },
    description: {
      pt: "Até 18 peças de salmão. Festival de texturas para a mesa do meio.",
      en: "Up to 18 salmon pieces. A festival of textures for the middle table.",
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
    id: "SS-MES-45",
    sku: "SS-MES-45",
    category: "combinados-mesa",
    name: { pt: "Combinado Mesa 45", en: "Table set 45" },
    description: {
      pt: "Até 25 peças de salmão. Para encontros longos e noites especiais.",
      en: "Up to 25 salmon pieces. For long gatherings and special nights.",
    },
    ingredients: {
      pt: "Salmão, peixe do dia, arroz de sushi, alga nori",
      en: "Salmon, fish of the day, sushi rice, nori",
    },
    price: 50000,
    pieces: 45,
    prepMin: 35,
    image: "/photos/combinado.jpg",
  },
  {
    id: "SS-ASN-77",
    sku: "SS-ASN-77",
    category: "assinatura",
    name: { pt: "Combinado 77", en: "Combinado 77" },
    description: {
      pt: "Vinte e quatro peças pensadas pelo chef: salmão, ebi, atum e o toque da casa.",
      en: "Twenty-four pieces thought by the chef: salmon, ebi, tuna and the house touch.",
    },
    ingredients: {
      pt: "Salmão, atum, camarão, arroz de sushi, alga nori, queijo creme, molho 77",
      en: "Salmon, tuna, prawn, sushi rice, nori, cream cheese, sauce 77",
    },
    price: 42000,
    pieces: 24,
    prepMin: 22,
    image: "/photos/combinado-close.jpg",
    flags: ["chef", "signature"],
  },
  {
    id: "SS-ASN-IL",
    sku: "SS-ASN-IL",
    category: "assinatura",
    name: { pt: "Combinado Ilha", en: "Ilha set" },
    description: {
      pt: "Salmão, camarão e manga madura. O brisa da Ilha numa caixa.",
      en: "Salmon, prawn and ripe mango. The Ilha breeze in a box.",
    },
    ingredients: {
      pt: "Salmão fresco, camarão, manga, arroz de sushi, alga nori, toque cítrico",
      en: "Fresh salmon, prawn, mango, sushi rice, nori, citrus finish",
    },
    price: 28000,
    pieces: 20,
    prepMin: 18,
    image: "/photos/salmon.jpg",
    flags: ["new"],
  },
  {
    id: "SS-ASN-TL",
    sku: "SS-ASN-TL",
    category: "assinatura",
    name: { pt: "Combinado Talatona", en: "Talatona set" },
    description: {
      pt: "O combinado corporativo: elegante, variado, fácil de partilhar no escritório.",
      en: "The corporate set: elegant, varied, easy to share at the office.",
    },
    ingredients: {
      pt: "Salmão, atum, california, hot filadélfia, niguiris, arroz, nori",
      en: "Salmon, tuna, California, hot Philadelphia, nigiri, rice, nori",
    },
    price: 44000,
    pieces: 30,
    prepMin: 24,
    image: "/photos/catalogo.jpg",
    flags: ["new"],
  },
  {
    id: "SS-ASN-FM",
    sku: "SS-ASN-FM",
    category: "assinatura",
    name: { pt: "Combinado Família Domingo", en: "Sunday family set" },
    description: {
      pt: "Sessenta peças para a mesa grande. Salmão, hots, uramakis e niguiris.",
      en: "Sixty pieces for the big table. Salmon, hots, uramaki and nigiri.",
    },
    ingredients: {
      pt: "Salmão, peixe do dia, camarão, arroz, nori, queijo creme, panko",
      en: "Salmon, fish of the day, prawn, rice, nori, cream cheese, panko",
    },
    price: 85000,
    pieces: 60,
    prepMin: 45,
    image: "/photos/combinado.jpg",
    flags: ["new"],
  },
  {
    id: "SS-TMK-SL",
    sku: "SS-TMK-SL",
    category: "temakis",
    name: { pt: "Temaki de Salmão", en: "Salmon temaki" },
    description: {
      pt: "Cone de nori, arroz temperado, salmão fresco cortado na hora.",
      en: "Nori cone, seasoned rice, fresh salmon cut to order.",
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
    id: "SS-TMK-AT",
    sku: "SS-TMK-AT",
    category: "temakis",
    name: { pt: "Temaki de Atum", en: "Tuna temaki" },
    description: {
      pt: "Atum fresco e pepino crocante no cone que se segura com uma mão.",
      en: "Fresh tuna and crisp cucumber in the cone you hold with one hand.",
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
    id: "SS-TMK-77",
    sku: "SS-TMK-77",
    category: "temakis",
    name: { pt: "Temaki Sete Sete", en: "Sete Sete temaki" },
    description: {
      pt: "Mix de peixes nobres, cream cheese e molho 77. O temaki da casa.",
      en: "Noble fish mix, cream cheese and sauce 77. The house temaki.",
    },
    ingredients: {
      pt: "Nori, arroz, salmão, atum, queijo creme, molho 77 (unagi + toque cítrico)",
      en: "Nori, rice, salmon, tuna, cream cheese, sauce 77 (unagi + citrus)",
    },
    price: 5500,
    pieces: 1,
    prepMin: 7,
    image: "/photos/temaki.jpg",
    flags: ["chef", "signature"],
  },
  {
    id: "SS-TMK-MG",
    sku: "SS-TMK-MG",
    category: "temakis",
    name: { pt: "Temaki Manga-Piri", en: "Mango-piri temaki" },
    description: {
      pt: "Salmão, manga e um fio de piri-piri doce. Angola no cone.",
      en: "Salmon, mango and a thread of sweet piri-piri. Angola in a cone.",
    },
    ingredients: {
      pt: "Nori, arroz, salmão, manga, piri-piri doce da casa, gergelim",
      en: "Nori, rice, salmon, mango, house sweet piri-piri, sesame",
    },
    price: 5500,
    pieces: 1,
    prepMin: 7,
    image: "/photos/temaki.jpg",
    flags: ["new"],
  },
  {
    id: "SS-TMK-CR",
    sku: "SS-TMK-CR",
    category: "temakis",
    name: { pt: "Temaki Crocante", en: "Crunchy temaki" },
    description: {
      pt: "Salmão, cream cheese e cebola crispy. Quente por fora, fresco por dentro.",
      en: "Salmon, cream cheese and crispy onion. Hot outside, fresh inside.",
    },
    ingredients: {
      pt: "Nori, arroz, salmão, queijo creme, cebola crispy, panko",
      en: "Nori, rice, salmon, cream cheese, crispy onion, panko",
    },
    price: 5800,
    pieces: 1,
    prepMin: 8,
    image: "/photos/temaki.jpg",
    flags: ["new"],
  },
  {
    id: "SS-HOT-FL",
    sku: "SS-HOT-FL",
    category: "hots",
    name: { pt: "Hot Filadélfia", en: "Hot Philadelphia" },
    description: {
      pt: "Oito peças empanadas. Salmão fresco e a cremosidade do Philadelphia.",
      en: "Eight panko pieces. Fresh salmon and the cream of Philadelphia.",
    },
    ingredients: {
      pt: "Salmão fresco, queijo creme, arroz, nori, panko",
      en: "Fresh salmon, cream cheese, rice, nori, panko",
    },
    price: 11000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
  },
  {
    id: "SS-HOT-GS",
    sku: "SS-HOT-GS",
    category: "hots",
    name: { pt: "Hot Gasai", en: "Hot Gasai" },
    description: {
      pt: "Salmão, cream cheese, cebola crispy e teriyaki sob crosta de panko.",
      en: "Salmon, cream cheese, crispy onion and teriyaki under a panko crust.",
    },
    ingredients: {
      pt: "Salmão, queijo creme, cebola crispy, molho teriyaki, arroz, nori, panko",
      en: "Salmon, cream cheese, crispy onion, teriyaki, rice, nori, panko",
    },
    price: 12000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
    flags: ["highlight"],
  },
  {
    id: "SS-HOT-FR",
    sku: "SS-HOT-FR",
    category: "hots",
    name: { pt: "Hot Fray", en: "Hot Fray" },
    description: {
      pt: "Frango desfiado, cream cheese e pepino. Quente, suave, equilibrado.",
      en: "Shredded chicken, cream cheese and cucumber. Hot, gentle, balanced.",
    },
    ingredients: {
      pt: "Frango, queijo creme, pepino, arroz, nori, panko",
      en: "Chicken, cream cheese, cucumber, rice, nori, panko",
    },
    price: 9500,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
  },
  {
    id: "SS-HOT-ST",
    sku: "SS-HOT-ST",
    category: "hots",
    name: { pt: "Hot Spicy Tuna", en: "Hot spicy tuna" },
    description: {
      pt: "Atum picante sob crosta estaladiça. Calor certo, sem agressão.",
      en: "Spicy tuna under a shatteringly crisp crust. Heat without aggression.",
    },
    ingredients: {
      pt: "Atum, molho picante da casa, arroz, nori, panko",
      en: "Tuna, house spicy sauce, rice, nori, panko",
    },
    price: 9000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/hot.jpg",
  },
  {
    id: "SS-HOT-CF",
    sku: "SS-HOT-CF",
    category: "hots",
    name: { pt: "Hot do Chefe", en: "Chef's hot roll" },
    description: {
      pt: "Salmão flamejado, molho unagi e gergelim. A peça quente da assinatura.",
      en: "Flamed salmon, unagi sauce and sesame. The hot piece of the signature.",
    },
    ingredients: {
      pt: "Salmão flamejado, molho unagi, gergelim, arroz, nori, panko",
      en: "Flamed salmon, unagi sauce, sesame, rice, nori, panko",
    },
    price: 12000,
    pieces: 8,
    prepMin: 13,
    image: "/photos/hot.jpg",
    flags: ["chef"],
  },
  {
    id: "SS-HOT-LD",
    sku: "SS-HOT-LD",
    category: "hots",
    name: { pt: "Hot Luanda", en: "Hot Luanda" },
    description: {
      pt: "Camarão, manga e piri-piri doce. Crocante, tropical, da cidade.",
      en: "Prawn, mango and sweet piri-piri. Crisp, tropical, of the city.",
    },
    ingredients: {
      pt: "Camarão, manga, piri-piri doce, queijo creme, arroz, nori, panko",
      en: "Prawn, mango, sweet piri-piri, cream cheese, rice, nori, panko",
    },
    price: 11500,
    pieces: 8,
    prepMin: 13,
    image: "/photos/hot.jpg",
    flags: ["new", "signature"],
  },
  {
    id: "SS-GNK-77",
    sku: "SS-GNK-77",
    category: "gunkan",
    name: { pt: "Torrinhas Sete Sete", en: "Sete Sete crisps" },
    description: {
      pt: "Seis torrinhas de arroz crocante com tartar de salmão e cream cheese.",
      en: "Six crisp rice toasts with salmon tartare and cream cheese.",
    },
    ingredients: {
      pt: "Arroz crocante, salmão picado, queijo creme, cebolinho, molho 77",
      en: "Crisp rice, minced salmon, cream cheese, chives, sauce 77",
    },
    price: 12000,
    pieces: 6,
    prepMin: 10,
    image: "/photos/gunkan.jpg",
    flags: ["chef", "signature"],
  },
  {
    id: "SS-GNK-SL",
    sku: "SS-GNK-SL",
    category: "gunkan",
    name: { pt: "Gunkan Fusão Salmão", en: "Fusion gunkan · salmon" },
    description: {
      pt: "Quatro gunkan de salmão fresco com o tempero do chef.",
      en: "Four gunkan of fresh salmon with the chef's seasoning.",
    },
    ingredients: {
      pt: "Arroz, nori, salmão fresco, azeite de sésamo, cebolinho",
      en: "Rice, nori, fresh salmon, sesame oil, chives",
    },
    price: 6500,
    pieces: 4,
    prepMin: 8,
    image: "/photos/gunkan.jpg",
  },
  {
    id: "SS-GNK-AT",
    sku: "SS-GNK-AT",
    category: "gunkan",
    name: { pt: "Gunkan Fusão Atum", en: "Fusion gunkan · tuna" },
    description: {
      pt: "Atum picado, tempero da casa, nori e arroz. Preço alinhado à linha.",
      en: "Minced tuna, house seasoning, nori and rice. Price aligned with the line.",
    },
    ingredients: {
      pt: "Arroz, nori, atum fresco, tempero da casa",
      en: "Rice, nori, fresh tuna, house seasoning",
    },
    price: 6000,
    pieces: 4,
    prepMin: 8,
    image: "/photos/gunkan.jpg",
  },
  {
    id: "SS-GNK-SP",
    sku: "SS-GNK-SP",
    category: "gunkan",
    name: { pt: "Gunkan Spicy", en: "Spicy gunkan" },
    description: {
      pt: "Base de atum ou salmão com spicy mayo e crispy. Antes Chitaka.",
      en: "Tuna or salmon base with spicy mayo and crispy. Formerly Chitaka.",
    },
    ingredients: {
      pt: "Arroz, nori, atum ou salmão, spicy mayo, cebola crispy",
      en: "Rice, nori, tuna or salmon, spicy mayo, crispy onion",
    },
    price: 5500,
    pieces: 4,
    prepMin: 8,
    image: "/photos/gunkan.jpg",
  },
  {
    id: "SS-GNK-EB",
    sku: "SS-GNK-EB",
    category: "gunkan",
    name: { pt: "Gunkan Ebi", en: "Ebi gunkan" },
    description: {
      pt: "Camarão fresco, toque de limão e maionese de sriracha suave.",
      en: "Fresh prawn, a touch of lemon and a gentle sriracha mayo.",
    },
    ingredients: {
      pt: "Arroz, nori, camarão fresco, limão, maionese sriracha",
      en: "Rice, nori, fresh prawn, lemon, sriracha mayo",
    },
    price: 7000,
    pieces: 4,
    prepMin: 9,
    image: "/photos/gunkan.jpg",
    flags: ["highlight"],
  },
  {
    id: "SS-URA-CA",
    sku: "SS-URA-CA",
    category: "uramaki",
    name: { pt: "Uramaki Califórnia", en: "California uramaki" },
    description: {
      pt: "Kani, abacate e pepino. O clássico tropical que nunca falha.",
      en: "Kani, avocado and cucumber. The tropical classic that never fails.",
    },
    ingredients: {
      pt: "Kani, abacate, pepino, arroz, nori",
      en: "Kani crab, avocado, cucumber, rice, nori",
    },
    price: 10300,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
  },
  {
    id: "SS-URA-TN",
    sku: "SS-URA-TN",
    category: "uramaki",
    name: { pt: "Uramaki Tuna", en: "Tuna uramaki" },
    description: {
      pt: "Rolo invertido centrado no atum fresco.",
      en: "An inside-out roll centred on fresh tuna.",
    },
    ingredients: {
      pt: "Atum fresco, arroz, nori",
      en: "Fresh tuna, rice, nori",
    },
    price: 10100,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
  },
  {
    id: "SS-URA-EB",
    sku: "SS-URA-EB",
    category: "uramaki",
    name: { pt: "Uramaki Ebi", en: "Ebi uramaki" },
    description: {
      pt: "Camarão e o toque suave do chef — limão e gergelim.",
      en: "Prawn and the chef's gentle finish — lemon and sesame.",
    },
    ingredients: {
      pt: "Camarão, arroz, nori, limão, gergelim",
      en: "Prawn, rice, nori, lemon, sesame",
    },
    price: 10500,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
  },
  {
    id: "SS-URA-FL",
    sku: "SS-URA-FL",
    category: "uramaki",
    name: { pt: "Uramaki Filadélfia", en: "Philadelphia uramaki" },
    description: {
      pt: "Salmão e Philadelphia. O clássico cremoso, invertido.",
      en: "Salmon and Philadelphia. The creamy classic, inverted.",
    },
    ingredients: {
      pt: "Salmão fresco, queijo creme, arroz, nori",
      en: "Fresh salmon, cream cheese, rice, nori",
    },
    price: 10300,
    pieces: 8,
    prepMin: 10,
    image: "/photos/hero-capa.jpg",
  },
  {
    id: "SS-URA-77",
    sku: "SS-URA-77",
    category: "uramaki",
    name: { pt: "Uramaki Sete Sete", en: "Sete Sete uramaki" },
    description: {
      pt: "Salmão, camarão, cream cheese, crispy e molho 77. A explosão da casa.",
      en: "Salmon, prawn, cream cheese, crispy and sauce 77. The house explosion.",
    },
    ingredients: {
      pt: "Salmão, camarão, queijo creme, cebola crispy, molho 77, arroz, nori",
      en: "Salmon, prawn, cream cheese, crispy onion, sauce 77, rice, nori",
    },
    price: 13000,
    pieces: 8,
    prepMin: 12,
    image: "/photos/uramaki.jpg",
    flags: ["chef", "signature"],
  },
  {
    id: "SS-URA-MG",
    sku: "SS-URA-MG",
    category: "uramaki",
    name: { pt: "Uramaki Manga", en: "Mango uramaki" },
    description: {
      pt: "Salmão, manga e cream cheese. Doce curto, gordura certa.",
      en: "Salmon, mango and cream cheese. A short sweetness, the right fat.",
    },
    ingredients: {
      pt: "Salmão, manga, queijo creme, arroz, nori",
      en: "Salmon, mango, cream cheese, rice, nori",
    },
    price: 10800,
    pieces: 8,
    prepMin: 10,
    image: "/photos/uramaki.jpg",
    flags: ["new"],
  },
  {
    id: "SS-URA-CC",
    sku: "SS-URA-CC",
    category: "uramaki",
    name: { pt: "Uramaki Coco-Camarão", en: "Coconut-prawn uramaki" },
    description: {
      pt: "Camarão, coco ralado tostado e cream cheese. Costa de Luanda.",
      en: "Prawn, toasted grated coconut and cream cheese. The Luanda coast.",
    },
    ingredients: {
      pt: "Camarão, coco tostado, queijo creme, arroz, nori",
      en: "Prawn, toasted coconut, cream cheese, rice, nori",
    },
    price: 11200,
    pieces: 8,
    prepMin: 11,
    image: "/photos/uramaki.jpg",
    flags: ["new"],
  },
  {
    id: "SS-NIG-SL",
    sku: "SS-NIG-SL",
    category: "nigiri",
    name: { pt: "Nigiri de Salmão", en: "Salmon nigiri" },
    description: {
      pt: "Duas peças. Arroz moldado, salmão fresco a cobrir.",
      en: "Two pieces. Hand-pressed rice, fresh salmon covering it.",
    },
    ingredients: {
      pt: "Arroz de sushi, salmão fresco",
      en: "Sushi rice, fresh salmon",
    },
    price: 3500,
    pieces: 2,
    prepMin: 5,
    image: "/photos/salmon.jpg",
  },
  {
    id: "SS-NIG-AT",
    sku: "SS-NIG-AT",
    category: "nigiri",
    name: { pt: "Nigiri de Atum", en: "Tuna nigiri" },
    description: {
      pt: "Duas peças de atum no ponto, sobre arroz quente.",
      en: "Two pieces of tuna at the right point, on warm rice.",
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
    id: "SS-NIG-EB",
    sku: "SS-NIG-EB",
    category: "nigiri",
    name: { pt: "Nigiri de Camarão", en: "Prawn nigiri" },
    description: {
      pt: "Camarão cozido, aberto, pousado no arroz.",
      en: "Cooked prawn, opened, resting on the rice.",
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
    id: "SS-NIG-UN",
    sku: "SS-NIG-UN",
    category: "nigiri",
    name: { pt: "Nigiri de Enguia", en: "Unagi nigiri" },
    description: {
      pt: "Unagi glaceada, doce-salgado, duas peças.",
      en: "Glazed unagi, sweet-salty, two pieces.",
    },
    ingredients: {
      pt: "Arroz de sushi, enguia, molho unagi",
      en: "Sushi rice, eel, unagi sauce",
    },
    price: 4500,
    pieces: 2,
    prepMin: 6,
    image: "/photos/nigiri.jpg",
    flags: ["new"],
  },
  {
    id: "SS-HOS-SL",
    sku: "SS-HOS-SL",
    category: "hosomaki",
    name: { pt: "Hosomaki Salmão", en: "Salmon hosomaki" },
    description: {
      pt: "Oito peças de rolo fino. Só salmão e arroz.",
      en: "Eight thin-roll pieces. Only salmon and rice.",
    },
    ingredients: {
      pt: "Arroz, nori, salmão fresco",
      en: "Rice, nori, fresh salmon",
    },
    price: 6500,
    pieces: 8,
    prepMin: 7,
    image: "/photos/hosomaki.jpg",
  },
  {
    id: "SS-HOS-AT",
    sku: "SS-HOS-AT",
    category: "hosomaki",
    name: { pt: "Hosomaki Atum", en: "Tuna hosomaki" },
    description: {
      pt: "Rolo fino de atum. Limpo, directo.",
      en: "A thin tuna roll. Clean, direct.",
    },
    ingredients: {
      pt: "Arroz, nori, atum fresco",
      en: "Rice, nori, fresh tuna",
    },
    price: 6800,
    pieces: 8,
    prepMin: 7,
    image: "/photos/hosomaki.jpg",
  },
  {
    id: "SS-HOS-PP",
    sku: "SS-HOS-PP",
    category: "hosomaki",
    name: { pt: "Hosomaki Pepino", en: "Cucumber hosomaki" },
    description: {
      pt: "Oito peças vegetarianas. Pepino crocante, arroz, nori.",
      en: "Eight vegetarian pieces. Crisp cucumber, rice, nori.",
    },
    ingredients: {
      pt: "Arroz, nori, pepino",
      en: "Rice, nori, cucumber",
    },
    price: 4500,
    pieces: 8,
    prepMin: 6,
    image: "/photos/hosomaki.jpg",
    flags: ["veg"],
  },
  {
    id: "SS-HOS-MG",
    sku: "SS-HOS-MG",
    category: "hosomaki",
    name: { pt: "Hosomaki Manga", en: "Mango hosomaki" },
    description: {
      pt: "Manga no ponto, rolo fino. Leve e fresco.",
      en: "Mango at the right point, a thin roll. Light and fresh.",
    },
    ingredients: {
      pt: "Arroz, nori, manga",
      en: "Rice, nori, mango",
    },
    price: 5000,
    pieces: 8,
    prepMin: 6,
    image: "/photos/hosomaki.jpg",
    flags: ["new"],
  },
  {
    id: "SS-YAK-EB",
    sku: "SS-YAK-EB",
    category: "yakissoba",
    name: { pt: "Yakissoba de Camarão", en: "Prawn yakisoba" },
    description: {
      pt: "Macarrão salteado, camarão fresco, legumes da estação. O mais pedido.",
      en: "Wok noodles, fresh prawn, seasonal vegetables. The most ordered.",
    },
    ingredients: {
      pt: "Macarrão, camarão fresco, legumes da estação, molho shoyu",
      en: "Noodles, fresh prawn, seasonal vegetables, shoyu",
    },
    price: 10000,
    prepMin: 14,
    image: "/photos/cozinha.jpg",
    flags: ["popular"],
  },
  {
    id: "SS-YAK-CR",
    sku: "SS-YAK-CR",
    category: "yakissoba",
    name: { pt: "Yakissoba de Carne", en: "Beef yakisoba" },
    description: {
      pt: "Carne tenra, legumes, shoyu. Quente e generoso.",
      en: "Tender beef, vegetables, shoyu. Hot and generous.",
    },
    ingredients: {
      pt: "Macarrão, carne bovina, legumes, molho shoyu",
      en: "Noodles, beef, vegetables, shoyu",
    },
    price: 9500,
    prepMin: 14,
    image: "/photos/cozinha.jpg",
  },
  {
    id: "SS-YAK-FR",
    sku: "SS-YAK-FR",
    category: "yakissoba",
    name: { pt: "Yakissoba de Frango", en: "Chicken yakisoba" },
    description: {
      pt: "Frango grelhado e legumes variados no wok.",
      en: "Grilled chicken and mixed vegetables in the wok.",
    },
    ingredients: {
      pt: "Macarrão, frango grelhado, legumes, molho shoyu",
      en: "Noodles, grilled chicken, vegetables, shoyu",
    },
    price: 8500,
    prepMin: 13,
    image: "/photos/cozinha.jpg",
  },
  {
    id: "SS-YAK-MX",
    sku: "SS-YAK-MX",
    category: "yakissoba",
    name: { pt: "Yakissoba Misto 77", en: "Mixed 77 yakisoba" },
    description: {
      pt: "Camarão, carne e frango no mesmo wok. Para quem não quer escolher.",
      en: "Prawn, beef and chicken in the same wok. For those who will not choose.",
    },
    ingredients: {
      pt: "Macarrão, camarão, carne, frango, legumes, molho shoyu",
      en: "Noodles, prawn, beef, chicken, vegetables, shoyu",
    },
    price: 11000,
    prepMin: 15,
    image: "/photos/cozinha.jpg",
    flags: ["new"],
  },
  {
    id: "SS-MID-SL",
    sku: "SS-MID-SL",
    category: "meio-dia",
    name: { pt: "Executivo Salmão", en: "Salmon lunch set" },
    description: {
      pt: "8 peças de salmão + yakissoba curto ou miso. Segunda a sexta, 12h–16h.",
      en: "8 salmon pieces + a short yakisoba or miso. Monday to Friday, 12:00–16:00.",
    },
    ingredients: {
      pt: "Salmão, arroz, nori, yakissoba ou sopa miso",
      en: "Salmon, rice, nori, yakisoba or miso soup",
    },
    price: 14500,
    prepMin: 16,
    image: "/photos/catalogo.jpg",
    flags: ["new"],
  },
  {
    id: "SS-MID-FR",
    sku: "SS-MID-FR",
    category: "meio-dia",
    name: { pt: "Executivo Frango", en: "Chicken lunch set" },
    description: {
      pt: "Hot Fray 8 peças + yakissoba de frango em dose curta. 12h–16h.",
      en: "Hot Fray 8 pieces + a short chicken yakisoba. 12:00–16:00.",
    },
    ingredients: {
      pt: "Frango, queijo creme, panko, macarrão, legumes",
      en: "Chicken, cream cheese, panko, noodles, vegetables",
    },
    price: 12500,
    prepMin: 15,
    image: "/photos/hot.jpg",
    flags: ["new"],
  },
  {
    id: "SS-MID-BX",
    sku: "SS-MID-BX",
    category: "meio-dia",
    name: { pt: "Box Escritório 2", en: "Office box for 2" },
    description: {
      pt: "16 peças mistas + 2 yakissobas curtos. Reunião resolvida.",
      en: "16 mixed pieces + 2 short yakisoba. Meeting solved.",
    },
    ingredients: {
      pt: "Mix salmão/california/hot, dois yakissobas curtos",
      en: "Salmon/California/hot mix, two short yakisoba",
    },
    price: 22000,
    prepMin: 18,
    image: "/photos/catalogo-mesa.jpg",
    flags: ["new"],
  },
  {
    id: "SS-BEB-AG",
    sku: "SS-BEB-AG",
    category: "bebidas",
    name: { pt: "Água 50cl", en: "Still water 50cl" },
    description: {
      pt: "Água de mesa, fria.",
      en: "Still table water, cold.",
    },
    ingredients: {
      pt: "Água 50cl",
      en: "Still water 50cl",
    },
    price: 1000,
    prepMin: 0,
    image: "/photos/catalogo-mesa.jpg",
    flags: ["new"],
  },
  {
    id: "SS-BEB-RF",
    sku: "SS-BEB-RF",
    category: "bebidas",
    name: { pt: "Refrigerante lata", en: "Soft drink (can)" },
    description: {
      pt: "Lata fria. Cola, cola zero ou ginger ale — indicar no pedido.",
      en: "A cold can. Cola, cola zero or ginger ale — say so in the order.",
    },
    ingredients: {
      pt: "Refrigerante lata 33cl",
      en: "Soft-drink can 33cl",
    },
    price: 1500,
    prepMin: 0,
    image: "/photos/catalogo-mesa.jpg",
    flags: ["new"],
  },
  {
    id: "SS-BEB-CH",
    sku: "SS-BEB-CH",
    category: "bebidas",
    name: { pt: "Chá Verde Gelado", en: "Iced green tea" },
    description: {
      pt: "Sencha frio, limão, sem açúcar a mais.",
      en: "Cold sencha, lemon, no extra sugar.",
    },
    ingredients: {
      pt: "Chá verde, limão, gelo",
      en: "Green tea, lemon, ice",
    },
    price: 2000,
    prepMin: 3,
    image: "/photos/rice.jpg",
    flags: ["new"],
  },
  {
    id: "SS-BEB-GJ",
    sku: "SS-BEB-GJ",
    category: "bebidas",
    name: { pt: "Limonada de Gengibre", en: "Ginger lemonade" },
    description: {
      pt: "Limão, gengibre fresco, um fio de mel.",
      en: "Lemon, fresh ginger, a thread of honey.",
    },
    ingredients: {
      pt: "Limão, gengibre, mel, água, gelo",
      en: "Lemon, ginger, honey, water, ice",
    },
    price: 2500,
    prepMin: 4,
    image: "/photos/catalogo-mesa.jpg",
    flags: ["new"],
  },
  {
    id: "SS-BEB-SJ",
    sku: "SS-BEB-SJ",
    category: "bebidas",
    name: { pt: "Sumo Natural do Dia", en: "Juice of the day" },
    description: {
      pt: "Manga, maracujá ou ananás — conforme a fruta no ponto.",
      en: "Mango, passion fruit or pineapple — as the fruit is at the point.",
    },
    ingredients: {
      pt: "Fruta da estação",
      en: "Seasonal fruit",
    },
    price: 2500,
    prepMin: 4,
    image: "/photos/catalogo-mesa.jpg",
    flags: ["new"],
  },
  {
    id: "SS-EXT-XS",
    sku: "SS-EXT-XS",
    category: "bebidas",
    name: { pt: "Kit extra shoyu e gari", en: "Extra soy & gari kit" },
    description: {
      pt: "Saquetas extra de shoyu, gari e wasabi. O hashi já vai no pedido.",
      en: "Extra packets of soy, gari and wasabi. Chopsticks already come with the order.",
    },
    ingredients: {
      pt: "Shoyu, gari, wasabi",
      en: "Soy, gari, wasabi",
    },
    price: 800,
    prepMin: 1,
    image: "/photos/catalogo-mesa.jpg",
    flags: ["new"],
  },
  {
    id: "SS-DOC-MO",
    sku: "SS-DOC-MO",
    category: "doces",
    name: { pt: "Mochi do Dia", en: "Mochi of the day" },
    description: {
      pt: "Dois mochi. Recheio do dia: manga, matcha ou coco.",
      en: "Two mochi. Filling of the day: mango, matcha or coconut.",
    },
    ingredients: {
      pt: "Massa mochi, recheio do dia",
      en: "Mochi dough, filling of the day",
    },
    price: 4000,
    pieces: 2,
    prepMin: 0,
    image: "/photos/rice.jpg",
    flags: ["new"],
  },
  {
    id: "SS-DOC-CZ",
    sku: "SS-DOC-CZ",
    category: "doces",
    name: { pt: "Cheesecake Yuzu", en: "Yuzu cheesecake" },
    description: {
      pt: "Fatia fria, cítrica, leve depois do salmão.",
      en: "A cold slice, citrus, light after the salmon.",
    },
    ingredients: {
      pt: "Cream cheese, yuzu, base de bolacha",
      en: "Cream cheese, yuzu, biscuit base",
    },
    price: 5500,
    prepMin: 0,
    image: "/photos/capa-catalogo.jpg",
    flags: ["new"],
  },
];

export function productById(id: string) {
  return PRODUCTS.find((p) => p.id === id);
}

export function productsByCategory(id: CategoryId) {
  return PRODUCTS.filter((p) => p.category === id);
}

