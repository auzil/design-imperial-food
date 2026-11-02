/*
  Imperial Pizza — menu data for the c-convert prototype.
  Source: menu.json (photos) + intake.md §4 price table (Wolt, 2026-11-02, regular prices, no promo).
  The owner edits prices here. `showPrices: false` hides every price on the page (hero "od …" included).
  `ingredients.sample: true` = usual composition of the classic, NOT confirmed by the owner (see TODO-OWNER.md).
  Photos: real Wolt listing shots, rights TBC. 32 and 45 cm files are identical, so one photo per pizza.
*/
window.MENU = {
  showPrices: true,
  currency: "Kč",
  priceNote: true, // shows "Ceny se mohou v aplikacích lišit."
  apps: [
    { id: "wolt", name: "Wolt", url: "https://wolt.com/en/cze/prague/restaurant/imperial-pizza-1", confirmed: true },
    { id: "foodora", name: "foodora", url: "", confirmed: false }, // TODO owner: listed? link (button shown but not clickable until url is set)
    { id: "bolt", name: "Bolt Food", url: "", confirmed: false },  // TODO owner: listed? link (button shown but not clickable until url is set)
  ],
  phone: "+420 606 810 671",
  hours: { // 0 = Sunday … 6 = Saturday; close 24 = midnight
    0: [10, 22], 1: [10, 22], 2: [10, 22], 3: [10, 22], 4: [10, 22], 5: [10, 24], 6: [10, 24],
  },
  pizzas: [
    { id: "prosciutto-cotto", name: "Prosciutto Cotto", p32: 229, p45: 329, popular: 1, tags: [], photo: "media/prosciutto-cotto-45cm-2.jpg", hi: "media/prosciutto-cotto-45cm.webp",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, šunka", en: "tomato sauce, mozzarella, ham", ru: "томатный соус, моцарелла, ветчина" } },
    { id: "messicana", name: "Messicana", p32: 239, p45: 339, popular: 2, tags: ["spicy"], photo: "media/messicana-45cm-2.jpg", hi: "media/messicana-45cm.webp", ingredients: null },
    { id: "bbq-pollo", name: "BBQ Pollo", p32: 249, p45: 349, popular: 3, tags: [], photo: "media/bbq-pollo-45cm.jpg", hi: "media/bbq-pollo-45cm-2.webp", ingredients: null },
    { id: "quattro-formaggi", name: "Quattro formaggi", p32: 259, p45: 359, popular: 4, tags: ["veg"], photo: "media/quattro-formaggi-45cm.jpg", hi: "media/quattro-formaggi-45cm-2.webp",
      ingredients: { sample: true, cs: "mozzarella, gorgonzola, parmazán, eidam", en: "mozzarella, gorgonzola, parmesan, edam", ru: "моцарелла, горгонзола, пармезан, эдам" } },
    { id: "vegetariana", name: "Vegetariana", p32: 219, p45: 319, tags: ["veg"], photo: "media/vegetariana-45cm.jpg",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, paprika, kukuřice, cibule", en: "tomato sauce, mozzarella, peppers, sweetcorn, onion", ru: "томатный соус, моцарелла, перец, кукуруза, лук" } },
    { id: "margherita", name: "Margherita", p32: 229, p45: 329, tags: ["veg"], photo: "media/margherita-45cm.jpg", hi: "media/margherita-45cm-2.webp",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, bazalka", en: "tomato sauce, mozzarella, basil", ru: "томатный соус, моцарелла, базилик" } },
    { id: "hawai", name: "Hawai", p32: 239, p45: 339, tags: [], photo: "media/hawai-45cm.jpg",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, šunka, ananas", en: "tomato sauce, mozzarella, ham, pineapple", ru: "томатный соус, моцарелла, ветчина, ананас" } },
    { id: "capricciosa", name: "Capricciosa", p32: 239, p45: 339, tags: [], photo: "media/capricciosa-45cm.jpg",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, šunka, žampiony, olivy", en: "tomato sauce, mozzarella, ham, mushrooms, olives", ru: "томатный соус, моцарелла, ветчина, шампиньоны, оливки" } },
    { id: "salami", name: "Salami", p32: 249, p45: 349, tags: [], photo: "media/salami-45cm.jpg", ingredients: null },
    { id: "diavola", name: "Diavola", p32: 249, p45: 349, tags: [], photo: "media/diavola-45cm.jpg", hi: "media/diavola-45cm-2.webp",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, pikantní salám", en: "tomato sauce, mozzarella, spicy salami", ru: "томатный соус, моцарелла, острая салями" } },
    { id: "pollo", name: "Pollo", p32: 249, p45: 349, tags: [], photo: "media/pollo-45cm.jpg", ingredients: null },
    { id: "champignon", name: "Champignon", p32: 249, p45: 349, tags: ["veg"], photo: "media/champignon-45cm.jpg",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, žampiony", en: "tomato sauce, mozzarella, mushrooms", ru: "томатный соус, моцарелла, шампиньоны" } },
    { id: "pancetta", name: "Pancetta", p32: 259, p45: 359, tags: [], photo: "media/pancetta-45cm.jpg", ingredients: null },
    { id: "franchi", name: "Franchi", p32: 279, p45: 379, tags: [], photo: "media/franchi-45cm.jpg", ingredients: null },
    { id: "don-carlo", name: "Don Carlo", p32: 279, p45: 379, tags: [], photo: "media/don-carlo-45cm.jpg", ingredients: null },
    { id: "tonno", name: "Tonno", p32: 289, p45: 389, tags: [], photo: "media/tonno-45cm.jpg",
      ingredients: { sample: true, cs: "rajčatová omáčka, mozzarella, tuňák, cibule", en: "tomato sauce, mozzarella, tuna, onion", ru: "томатный соус, моцарелла, тунец, лук" } },
    { id: "picante-special", name: "Picante special", p32: 289, p45: 389, tags: [], photo: "media/picante-special-45cm.jpg", ingredients: null },
  ],
  // price: null = owner TODO (never invented); the page shows "cena v aplikaci".
  sides: [
    { id: "americke-brambory", name: "Americké brambory", en: "American potatoes", ru: "Картофель по-американски", price: null, photo: "media/americke-brambory.jpeg" },
    { id: "tatarska-omacka", name: "Tatarská omáčka", en: "Tartar sauce", ru: "Тартарский соус", price: null, photo: "media/tatarska-omacka.jpeg" },
  ],
  drinks: [
    { id: "coca-cola-0-5", name: "Coca-Cola 0,5 l", en: "Coca-Cola 0.5 l", ru: "Coca-Cola 0,5 л", price: null, photo: "media/coca-cola-0-5-l.jpeg" },
    { id: "coca-cola-zero-0-5", name: "Coca-Cola Zero 0,5 l", en: "Coca-Cola Zero 0.5 l", ru: "Coca-Cola Zero 0,5 л", price: null, photo: "media/coca-cola-0-5-l.jpeg" },
    { id: "fanta-0-5", name: "Fanta - pomeranč 0,5 l", en: "Fanta - orange 0.5 l", ru: "Fanta - апельсин 0,5 л", price: null, photo: "media/fanta-pomeranc-0-5-l.jpeg" },
    { id: "sprite-0-5", name: "Sprite 0,5 l", en: "Sprite 0.5 l", ru: "Sprite 0,5 л", price: null, photo: "media/sprite-0-5-l.jpeg" },
    { id: "coca-cola-1-5", name: "Coca-Cola 1,5 l", en: "Coca-Cola 1.5 l", ru: "Coca-Cola 1,5 л", price: null, photo: "media/coca-cola-1-5-l.jpeg" },
    { id: "fanta-1-5", name: "Fanta - pomeranč 1,5 l", en: "Fanta - orange 1.5 l", ru: "Fanta - апельсин 1,5 л", price: null, photo: "media/fanta-pomeranc-1-5-l.jpeg" },
    { id: "sprite-1-5", name: "Sprite 1,5 l", en: "Sprite 1.5 l", ru: "Sprite 1,5 л", price: null, photo: "media/sprite-1-5-l.jpeg" },
    { id: "ice-tea-citron", name: "Ice Tea Lipton - citron 0,5 l", en: "Ice Tea Lipton - lemon 0.5 l", ru: "Ice Tea Lipton - лимон 0,5 л", price: null, photo: "media/ice-tea-lipton-citron-0-5-l.jpeg" },
    { id: "ice-tea-broskev", name: "Ice Tea Lipton - broskev 0,5 l", en: "Ice Tea Lipton - peach 0.5 l", ru: "Ice Tea Lipton - персик 0,5 л", price: null, photo: "media/ice-tea-lipton-broskev-0-5-l.jpeg" },
  ],
};
