import type { Lang } from "@/lib/menu";

export const copy = {
  nav: {
    home: { pt: "Início", en: "Home" },
    casa: { pt: "A casa", en: "The house" },
    menu: { pt: "Menu", en: "Menu" },
    order: { pt: "Encomendar", en: "Order" },
    track: { pt: "Seguir", en: "Track" },
  },
  hero: {
    kicker: { pt: "Luanda · 12h – 22h", en: "Luanda · 12:00 – 22:00" },
    title: { pt: "Sete Sete", en: "Sete Sete" },
    lead: {
      pt: "Sushi fresco, no teu WhatsApp.",
      en: "Fresh sushi, on your WhatsApp.",
    },
    sub: {
      pt: "Peixe escolhido com rigor, arroz temperado no ponto, combinados para a mesa. Hashi incluídos. Pedido directo — sem filas, sem aplicações extra.",
      en: "Carefully chosen fish, rice seasoned to the grain, sets for the table. Chopsticks included. Order directly — no queues, no extra apps.",
    },
    ctaMenu: { pt: "Ver o menu", en: "See the menu" },
    ctaOrder: { pt: "Pedir agora", en: "Order now" },
  },
  secret: {
    kicker: { pt: "O segredo do sabor", en: "The secret of the taste" },
    title: {
      pt: "Ingredientes escolhidos pela frescura. Arroz preparado com o mesmo cuidado, do vinagre ao corte.",
      en: "Ingredients chosen for freshness. Rice prepared with the same care, from the vinegar to the cut.",
    },
    body: {
      pt: "Cada peça é feita na hora. A atenção estende-se ao shoyu, ao wasabi, ao nori. Sushi japonês com a clareza de uma casa de Luanda.",
      en: "Each piece is made to order. The same attention runs through the soy, the wasabi, the nori. Japanese sushi with the clarity of a Luanda house.",
    },
    rice: { pt: "Arroz no ponto", en: "Rice, exact" },
    riceBody: {
      pt: "Temperado com vinagre, açúcar e sal — grão a grão.",
      en: "Seasoned with vinegar, sugar and salt — grain by grain.",
    },
    fish: { pt: "Peixe do dia", en: "Fish of the day" },
    fishBody: {
      pt: "Salmão, atum, camarão. Corte limpo, temperatura certa.",
      en: "Salmon, tuna, prawn. A clean cut, the right temperature.",
    },
  },
  menuTeaser: {
    kicker: { pt: "O cardápio", en: "The menu" },
    title: {
      pt: "Sessenta e cinco itens. Ouro, Mesa, assinatura Luanda.",
      en: "Sixty-five items. Gold, Table, Luanda signatures.",
    },
  },
  how: {
    kicker: { pt: "Como pedir", en: "How to order" },
    title: { pt: "Três gestos. O resto é connosco.", en: "Three steps. We do the rest." },
    s1t: { pt: "Escolhe", en: "Choose" },
    s1: {
      pt: "Navega o cardápio e monta o pedido no cesto.",
      en: "Browse the menu and build your basket.",
    },
    s2t: { pt: "Gera a fatura e paga", en: "Invoice, then pay" },
    s2: {
      pt: "A fatura nasce primeiro — ficas com a referência. Depois pagas Multicaixa, transferência ou dinheiro.",
      en: "The invoice comes first — you get the reference. Then you pay by Multicaixa, transfer or cash.",
    },
    s3t: { pt: "Segue", en: "Track" },
    s3: {
      pt: "Recebes um link. Vês a encomenda sair da cozinha até à tua porta.",
      en: "You get a link. Watch the order leave the kitchen to your door.",
    },
  },
  cart: {
    title: { pt: "O teu pedido", en: "Your order" },
    empty: { pt: "O cesto está vazio.", en: "Your basket is empty." },
    emptyCta: { pt: "Abrir o menu", en: "Open the menu" },
    total: { pt: "Total", en: "Total" },
    checkout: { pt: "Fechar pedido", en: "Check out" },
    add: { pt: "Adicionar", en: "Add" },
    added: { pt: "No cesto", en: "In basket" },
  },
  pedir: {
    kicker: { pt: "Encomendar", en: "Order" },
    title: { pt: "Fecha o pedido. Gera a fatura.", en: "Close the order. Get the invoice." },
    name: { pt: "Nome", en: "Name" },
    phone: { pt: "Telefone /whatsapp", en: "Phone /whatsapp" },
    address: { pt: "Morada / referências", en: "Address / landmarks" },
    area: { pt: "Zona", en: "Area" },
    trackCta: { pt: "Seguir a encomenda", en: "Track the order" },
    trackHint: {
      pt: "Partilha este link. A casa actualiza o estado; tu vês o caminho.",
      en: "Share this link. The house updates the status; you see the route.",
    },
    notes: { pt: "Notas (opcional)", en: "Notes (optional)" },
    pay: { pt: "Pagamento", en: "Payment" },
    receipt: { pt: "Comprovativo de pagamento", en: "Payment proof" },
    receiptHint: {
      pt: "Obrigatório. Foto do comprovativo do Multicaixa ou PDF do comprovativo bancário.",
      en: "Required. Photo of the Multicaixa proof or PDF of the bank transfer.",
    },
    send: { pt: "Gerar fatura", en: "Create invoice" },
    hint: {
      pt: "",
      en: "",
    },
    sent: {
      pt: "Fatura pronta.",
      en: "Invoice ready.",
    },
    sentBody: {
      pt: "Usa o número da fatura como referência de pagamento. A mesma fatura foi enviada para o teu WhatsApp.",
      en: "Use the invoice number as the payment reference. The same invoice was sent to your WhatsApp.",
    },
    print: { pt: "Imprimir / PDF", en: "Print / PDF" },
    again: { pt: "Abrir WhatsApp", en: "Open WhatsApp" },
    finish: { pt: "Finalizar", en: "Done" },
    newOrder: { pt: "Nova encomenda", en: "New order" },
    hours: { pt: "Todos os dias, 12h – 22h", en: "Every day, 12:00 – 22:00" },
    zone: {
      pt: "Entrega em Luanda.",
      en: "Delivery across Luanda.",
    },
  },
  ticket: {
    kicker: { pt: "Fatura", en: "Invoice" },
    client: { pt: "Cliente", en: "Customer" },
    qty: { pt: "Qtd", en: "Qty" },
    item: { pt: "Peça", en: "Item" },
    total: { pt: "Total", en: "Total" },
    pay: { pt: "Pagamento", en: "Payment" },
    thanks: {
      pt: "Obrigado. Preparação no momento. Hashi incluídos no preço.",
      en: "Thank you. Made to order. Chopsticks included in the price.",
    },
  },
  casa: {
    kicker: { pt: "A casa", en: "The house" },
    title: {
      pt: "Duas vezes sete. Um só gesto.",
      en: "Twice seven. A single gesture.",
    },
    body: {
      pt: "Sete Sete nasceu para trazer sushi de precisão a Luanda — sem cerimónia a mais, sem qualidade a menos. O nome é um espelho: 77, duas curvas que se encontram. O sabor e o sorriso. O peixe e o arroz. Tu e o WhatsApp.",
      en: "Sete Sete exists to bring precise sushi to Luanda — no extra ceremony, no less quality. The name is a mirror: 77, two curves that meet. Taste and smile. Fish and rice. You and WhatsApp.",
    },
    kitchen: { pt: "A cozinha", en: "The kitchen" },
    kitchenBody: {
      pt: "Peixe à temperatura certa, arroz no ponto, nori crocante. Nada é montado à espera.",
      en: "Fish at the right temperature, rice on the grain, nori still crisp. Nothing is assembled waiting.",
    },
    catalog: { pt: "O catálogo", en: "The catalogue" },
    catalogBody: {
      pt: "Catorze colecções, sessenta e cinco itens — o mesmo cardápio no WhatsApp, na MANO e no ecrã. Preços em Kwanzas. Hashi incluídos.",
      en: "Fourteen collections, sixty-five items — the same menu on WhatsApp, MANO and the screen. Priced in Kwanzas. Chopsticks included.",
    },
  },
  footer: {
    tag: { pt: "Sushi no teu WhatsApp", en: "Sushi on your WhatsApp" },
  },
  flags: {
    chef: { pt: "Do chef", en: "Chef's pick" },
    signature: { pt: "Assinatura", en: "Signature" },
    popular: { pt: "Mais pedido", en: "Most ordered" },
    highlight: { pt: "Destaque", en: "Featured" },
    new: { pt: "Novo", en: "New" },
    veg: { pt: "Vegetariano", en: "Vegetarian" },
  },
  pieces: { pt: "peças", en: "pieces" },
  min: { pt: "min", en: "min" },
  hashi: {
    pt: "Hashi incluídos no preço.",
    en: "Chopsticks included in the price.",
  },
  notFound: {
    title: { pt: "Esta página não existe.", en: "This page does not exist." },
    back: { pt: "Voltar ao início", en: "Back home" },
  },
} as const;

export function t<T extends { pt: string; en: string }>(dict: T, lang: Lang): string {
  return dict[lang];
}
