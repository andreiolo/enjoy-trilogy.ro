export interface MenuItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  ingredients: string;
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: string;
  subtitle: string;
  items: MenuItem[];
}

let _nextId = 1;
function id() { return `item_${_nextId++}`; }

export const DEFAULT_MENU: MenuCategory[] = [
  {
    id: "gustul-trilogy",
    name: "Gustul Trilogy",
    subtitle: "Cele mai iubite și reprezentative preparate ale casei",
    items: [
      { id: id(), name: "Pui Crispy Trilogy", weight: "350g", price: 42, ingredients: "Piept de pui - 200g, Cartofi prăjiți - 120g, Ulei de floarea soarelui, Sos Rose Trilogy - 50ml, Ou - 50g, Susan alb, Fulgi de porumb, Panko, Salată", tags: ["copii"] },
      { id: id(), name: "Coaste Porc Trilogy", weight: "750g", price: 65, ingredients: "Coaste de porc - 500g, Cartofi prăjiți - 200g, Salată (poate conține Gluten, Muștar, Sulfiți) - 120g, Sos sweet chilli - 60ml, Sare, Piper negru, Boia" },
      { id: id(), name: "Salată Trilogy cu Pui", weight: "300g", price: 39, ingredients: "Piept de pui - 180g, Salată iceberg - 100g, Roșii cherry - 30g, Ou - 50g, Lipie - 50g, Măsline - 30g" },
      { id: id(), name: "Omletă Trilogy", weight: "250g", price: 30, ingredients: "Ou - 150g, Roșii - 50g, Bacon - 50g, Brânză brie - 30g, Ulei de floarea soarelui, Unt 65% grasime, Pătrunjel, Sare" },
      { id: id(), name: "Penne Trilogy al Forno", weight: "300g", price: 45, ingredients: "Paste făinoase Penne - 180g, Cremă de gătit - 60g, Bacon - 50g, Gorgonzola - 50g, Ou - 50g, Parmezan - 36g, Sare, Sos Pizza" },
      { id: id(), name: "Pizza Trilogy", weight: "600g", price: 45, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Cașcaval - 60g, Roșii - 60g, Șuncă Praga - 48g, Salam de porc - 48g, Porumb, Bacon - 36g, Ardei, Brânză dură" },
      { id: id(), name: "Burger Trilogy", weight: "360g", price: 50, ingredients: "Cartofi prăjiți - 180g, Antricot de vită - 180g, Chiflă - 80g, Sos Rose Trilogy - 50ml, Ceapă - 48g, Bacon - 48g, Roșii - 36g, Brânză cheddar - 36g, Salată iceberg - 24g, Maioneză (Conține Ouă, Muștar) - 24g, Ketchup dulce - 24g, Castraveți murați - 24g, Pesmet, Muștar" },
      { id: id(), name: "Paste Trilogy", weight: "300g", price: 44, ingredients: "Paste făinoase Tagliatelle - 200g, Cremă de gătit - 50g, Bacon - 50g, Parmezan, Gorgonzola, Sare, Piper negru" },
      { id: id(), name: "Bruschete Trilogy", weight: "300g", price: 32, ingredients: "Pâine prăjită - 150g, Pastă jumări - 100g, Telemea - 60g, Ceapă roșie - 50g, Sare, Piper negru" },
      { id: id(), name: "Clătite cu Gutui", weight: "300g", price: 32, ingredients: "Ou - 100g, Lapte - 60g, Dulceață de gutui - 60g, Făină de grâu dur, Zahăr, Înghețată", tags: ["sezon"] },
    ],
  },
  {
    id: "hituri-bucatarie",
    name: "Hituri de Bucătărie",
    subtitle: "Bucate cu energie, texturi surprinzătoare și gust desăvârșit",
    items: [
      { id: id(), name: "Penne Formaggi", weight: "300g", price: 43, ingredients: "Paste făinoase Penne rigate - 180g, Brânză brie - 50g, Gorgonzola - 50g, Mozzarella - 50g, Parmezan - 50g, Cremă de gătit - 50g, Cașcaval - 24g, Sare, Piper negru", tags: ["vegetarian"] },
      { id: id(), name: "Paste Supreme", weight: "300g", price: 49, ingredients: "Paste făinoase Tagliatelle - 180g, Cremă de gătit - 60g, Bacon - 50g, Parmezan - 50g, Gorgonzola - 36g, Ulei extravirgin cu aroma de trufe, Sare, Piper negru" },
      { id: id(), name: "Pizza Italian Devil", weight: "600g", price: 43, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Salam Chorizo picant - 60g, Gorgonzola - 36g, Brânză dură - 36g, Ardei iute" },
      { id: id(), name: "Cartofi Gratinați", weight: "200g", price: 22, ingredients: "Cartofi - 150g, Lapte - 10g, Mozzarella - 40g, Ou - 50g, Unt 65% grasime, Sare, Piper negru", tags: ["vegetarian", "copii"] },
      { id: id(), name: "Papanași cu Finetti", weight: "300g", price: 30, ingredients: "Finetti (Conține Soia) - 120g, Brânză de vaci - 96g, Făină de grâu dur, Ou - 50g, zahăr vanilat - 24g" },
      { id: id(), name: "Salată Caesar", weight: "200g", price: 39, ingredients: "Salată iceberg - 250g, Piept de pui - 150g, Parmezan - 60g, Maioneză - 40g, Crutoane - 35g, Suc Lămâie - 20ml, Anșoa - 15g, Capere - 15g", tags: ["bucătar"] },
      { id: id(), name: "Tigaie Picantă Pui", weight: "350g", price: 45, ingredients: "Piept de pui - 200g, Ulei de floarea soarelui, Zucchini - 30g, Ardei - 30g, Ceapă - 30g, Vânătă - 30g, Sos sweet chilli - 20ml, Sos de soia - 10ml, Ardei iute" },
      { id: id(), name: "Tigaie Picantă Vită", weight: "350g", price: 62, ingredients: "Mușchi de vită - 200g, Ulei de floarea soarelui, Zucchini - 30g, Ardei - 30g, Ceapă - 30g, Vânătă - 30g, Sos de soia, Sos sweet chilli, Ardei iute" },
      { id: id(), name: "Burger de Pui", weight: "350g", price: 44, ingredients: "Șnițel de pui - 180g, Cartofi prăjiți - 180g, Salată iceberg, Chiflă - 80g, Sos Rose Trilogy - 50ml, Bacon - 48g, Roșii - 36g, Brânză cheddar - 36g, Castraveți murați - 24g, Zahăr" },
      { id: id(), name: "Șnițel Parmigiana", weight: "250g", price: 39, ingredients: "Șnițel de pui - 200g, Mozzarella - 50g, Ulei de floarea soarelui, Sos roșii - 50g, Ou - 50g, Brânză dură - 20g, Sare, Piper negru" },
    ],
  },
  {
    id: "arome-de-foc",
    name: "Arome de Foc Trilogy",
    subtitle: "Carne, pește și preparate calde gătite pe grătar, plită sau în tigaie",
    items: [
      { id: id(), name: "Piept de Pui la Grătar", weight: "200g", price: 29, ingredients: "Piept de pui - 200g, Sare, Piper negru" },
      { id: id(), name: "Ceafă la Grătar", weight: "250g", price: 37, ingredients: "Ceafă de porc - 250g, Ulei de floarea soarelui, Piper negru, Sare" },
      { id: id(), name: "Cotlet la Grătar", weight: "250g", price: 33, ingredients: "Cotlet de porc - 300g, Ulei de floarea soarelui, Sare, Piper negru" },
      { id: id(), name: "Mușchi Vită la Grătar", weight: "200g", price: 59, ingredients: "Mușchi de vită - 200g, Ulei de floarea soarelui, Sare, Piper negru, Unt, Piper rosu" },
      { id: id(), name: "Burger de Pui (Grill)", weight: "350g", price: 44, ingredients: "Șnițel de pui - 180g, Cartofi prăjiți - 180g, Salată iceberg, Chiflă - 80g, Sos Rose Trilogy - 50ml, Bacon - 48g, Roșii - 36g, Brânză cheddar - 36g, Castraveți murați - 24g" },
      { id: id(), name: "Burger Trilogy (Grill)", weight: "360g", price: 50, ingredients: "Cartofi prăjiți - 180g, Antricot de vită - 180g, Chiflă - 80g, Sos Rose Trilogy - 50ml, Ceapă - 48g, Bacon - 48g, Roșii - 36g, Brânză cheddar - 36g, Salată iceberg - 24g, Maioneză - 24g, Ketchup dulce - 24g, Castraveți murați - 24g, Sare, Piper" },
      { id: id(), name: "Burger Suprem", weight: "380g", price: 50, ingredients: "Antricot de vită - 180g, Cartofi prăjiți - 180g, Salată iceberg, Chiflă - 80g, Ciuperci - 60g, Cremă de gătit - 60g, Sos Rose Trilogy - 50ml, Ou prăjit - 50g, Bacon - 48g, Ceapă - 36g, Gorgonzola - 36g, Brânză cheddar - 36g, Roșii - 36g, Castraveți murați - 24g, Pesmet, Muștar", tags: ["bucătar"] },
      { id: id(), name: "Pui Crispy Trilogy (Grill)", weight: "350g", price: 42, ingredients: "Piept de pui - 200g, Cartofi prăjiți - 120g, Sos Rose Trilogy - 50ml, Ou - 50g, Susan alb, Fulgi de porumb, Panko" },
      { id: id(), name: "Bucket Picant&Crocant", weight: "350g", price: 42, ingredients: "Crispy din piept de pui cu fulgi de porumb - 250g, Ulei de floarea soarelui, Cartofi prăjiți - 180g, Sos Rose Trilogy - 50ml, Chilli fulgi, Boia" },
      { id: id(), name: "Piept de Pui Suprem", weight: "300g", price: 47, ingredients: "Piept de pui - 200g, Hribi* - 60g, Ulei de floarea soarelui, Gorgonzola - 40g, Ulei extravirgin cu aroma de trufe" },
      { id: id(), name: "Piept de Pui Gorgonzola", weight: "300g", price: 39, ingredients: "Piept de pui - 200g, Cremă de gătit - 240g, Gorgonzola - 60g, Piper negru, Sare" },
      { id: id(), name: "Polo a la King", weight: "350g", price: 46, ingredients: "Piept de pui - 200g, Cremă de gătit - 120g, Broccoli* - 120g, Ciuperci - 60g, Mozzarella - 48g, Gorgonzola - 36g, Usturoi, Lipie", tags: ["bucătar"] },
      { id: id(), name: "Tigaie Picantă Pui (Grill)", weight: "350g", price: 45, ingredients: "Piept de pui - 200g, Ulei de floarea soarelui, Zucchini - 30g, Ardei - 30g, Ceapă - 30g, Vânătă - 30g, Sos sweet chilli - 20ml, Sos de soia - 10ml, Ardei iute" },
      { id: id(), name: "Șnițel Pui în Crustă", weight: "200g", price: 37, ingredients: "Piept de pui - 200g, Ulei de floarea soarelui, Cașcaval - 60g, Ou - 50g, Sare, Piper negru" },
      { id: id(), name: "Șnițel Parmigiana (Grill)", weight: "250g", price: 39, ingredients: "Piept de pui - 200g, Mozzarella - 50g, Ulei de floarea soarelui, Sos roșii - 50g, Ou - 50g, Brânză dură - 20g, Sare, Piper" },
      { id: id(), name: "Șnițel de Pui", weight: "200g", price: 32, ingredients: "Piept de pui - 200g, Ulei de floarea soarelui, Făină de grâu dur - 120g, Ou - 50g, Sare, Piper negru", tags: ["copii"] },
      { id: id(), name: "Shaorma la Farfurie", weight: "450g", price: 39, ingredients: "Piept de pui - 180g, Cartofi prăjiți - 150g, Sos Rose Trilogy - 100ml, Castraveți murați - 50g, Varză - 50g, Lipie - 50g, Roșii - 36g, Salată verde, Piper, Boia" },
      { id: id(), name: "Cotoletă a la Bolognese", weight: "350g", price: 44, ingredients: "Cotlet de porc - 240g, Cremă de gătit - 120g, Cașcaval - 60g, Sos pizza - 60ml, Șuncă Praga - 60g, Ou - 50g, Pesmet - 36g, Sare, Piper" },
      { id: id(), name: "Tochitura cu Mămăliguță", weight: "250g", price: 53, ingredients: "Carne de porc - 80g, Bacon - 60g, Mălai - 40g, Brânză telemea - 30g, Cârnați afumați - 30g, Ou ochi - 50g, Vin alb sec - 10ml, Unt - 5g, Sare, Usturoi, Boia dulce, Piper" },
      { id: id(), name: "Pomana Porcului", weight: "250g", price: 53, ingredients: "Carne de porc - 100g, Bacon - 60g, Mălai - 40g, Untură - 10g, Vin alb sec - 10ml, Usturoi - 1 cățel, Sare, Piper" },
      { id: id(), name: "Ciolan cu Iahnie", weight: "900g", price: 64, ingredients: "Ciolan afumat cu os - 700g, Fasole - 150g, Ceapă Roșie - 100g, Ceapă - 30g, Ardei - 20g, Sos roșii - 24ml, Sare, Pastă de tomate, Morcov", tags: ["bucătar"] },
      { id: id(), name: "Coaste Porc Trilogy (Grill)", weight: "750g", price: 65, ingredients: "Coaste de porc - 500g, Cartofi prăjiți - 200g, Salată - 120g, Sos sweet chilli - 60ml, Sare, Piper negru, Boia" },
      { id: id(), name: "Mușchi Suprem", weight: "300g", price: 69, ingredients: "Mușchi de vită - 200g, Cremă de gătit - 50g, Ulei extravirgin cu aroma de trufe, Hribi* - 50g, Gorgonzola, Piper verde, Sare, Piper negru" },
      { id: id(), name: "Tigaie Picantă de Vită", weight: "350g", price: 62, ingredients: "Mușchi de vită - 200g, Ulei de floarea soarelui, Zucchini - 30g, Ardei - 30g, Ceapă - 30g, Vânătă - 30g, Sos de soia, Sos sweet chilli, Ardei iute" },
      { id: id(), name: "Mușchi Vită în Sos de Piper Verde", weight: "300g", price: 69, ingredients: "Mușchi de vită - 200g, Cremă de gătit - 90g, Piper verde, Sare, Piper negru" },
      { id: id(), name: "Mușchi în Sos Brun", weight: "250g", price: 69, ingredients: "Mușchi de vită - 200g, Ulei de floarea soarelui, Sos brun spaniol - 50ml, Sare, Piper negru" },
      { id: id(), name: "Mușchi Vită Gorgonzola", weight: "250g", price: 69, ingredients: "Mușchi de vită - 200g, Smântână de gătit - 50g, Gorgonzola - 50g, Sare, Piper negru" },
      { id: id(), name: "Mușchi de Vită în Coniac", weight: "200g", price: 69, ingredients: "Mușchi de vită - 200g, Unt - 50g, Coniac - 50ml, Rozmarin - 10g, Piper verde - 5g, Sare" },
      { id: id(), name: "Șnițel Vienez de Vită", weight: "150g", price: 61, ingredients: "Mușchi de vită - 150g, Ou - 50g, Panko - 50g, Sare, Piper negru" },
      { id: id(), name: "Somon Grill", weight: "200g", price: 57, ingredients: "Somon* - 200g, Piper negru, Sare", tags: ["copii"] },
      { id: id(), name: "Somon Lemon", weight: "240g", price: 61, ingredients: "Somon* - 200g, Roșii cherry - 40g, Usturoi, Sare, Piper negru", tags: ["bucătar"] },
    ],
  },
  {
    id: "gusturi-romanesti",
    name: "Gusturi Românești",
    subtitle: "Rețete românești cu gustul de altădată, gătite cu suflet",
    items: [
      { id: id(), name: "Ciulama Ardelenească", weight: "350g", price: 43, ingredients: "Piept de pui - 200g, Mămăligă (Mălai - 180g, Apă) - 100g, Ciuperci - 50g, Usturoi - 20g, Cremă de gătit" },
      { id: id(), name: "Ficăței în Sos", weight: "300g", price: 33, ingredients: "Ficat de pui - 250g, Ulei de floarea soarelui, Unt 65% grasime, Sos brun spaniol - 20ml, Usturoi, Sare, Piper negru" },
      { id: id(), name: "Escalop Ardelenesc", weight: "300g", price: 38, ingredients: "Cotlet de porc - 200g, Cremă de gătit - 50g, Ciuperci - 50g, Ulei de floarea soarelui, Usturoi, Sare, Piper negru" },
      { id: id(), name: "Ceafă Haiducească", weight: "350g", price: 43, ingredients: "Ceafă de porc - 240g, Făină de grâu dur, Ciuperci - 80g, Unt 65% grasime, Ulei de floarea soarelui, Sos brun spaniol - 30ml, Usturoi, Piper, Sare" },
      { id: id(), name: "Ceafă la Cuptor cu Cartofi cu Rozmarin", weight: "300g", price: 46, ingredients: "Ceafă de porc - 200g, Cartofi wedges - 150g, Ulei de floarea soarelui, Rozmarin, Sare, Piper negru" },
      { id: id(), name: "Șnițel de Porc", weight: "200g", price: 33, ingredients: "Cotlet de porc - 200g, Ulei de floarea soarelui, Făină de grâu dur, Ou - 50g, Piper negru, Sare", tags: ["bucătar"] },
      { id: id(), name: "Mix Grill 1 Persoană", weight: "550g", price: 55, ingredients: "Cotlet de porc - 100g, Cartofi prăjiți - 150g, Ceafă de porc - 100g, Piept de pui - 100g, Cârnați afumat - 50g, Kaizer 50g, Boia" },
      { id: id(), name: "Mix Grill 2 Persoane", weight: "1100g", price: 98, ingredients: "Cotlet de porc - 200g, Ceafă de porc - 200g, Cartofi prăjiți - 300g, Piept de pui - 200g, Cârnați afumat - 100g, Kaizer - 100g, Boia" },
      { id: id(), name: "Mămăligă în Straturi", weight: "300g", price: 35, ingredients: "Mămăligă 180g (Mălai - 60g, Apa), Smântână - 40g, Bacon - 30g, Cârnați afumat la rece - 30g, Telemea vacă (Conține Lapte) - 30g, Unt 65% grasime, Sare" },
      { id: id(), name: "Cașcaval Pane", weight: "250g", price: 37, ingredients: "Cașcaval - 220g, Ou - 50g, Pesmet - 30g, Ulei de floarea soarelui", tags: ["copii", "vegetarian"] },
      { id: id(), name: "Mămăligă cu Brânză și Smântână", weight: "250g", price: 25, ingredients: "Mămăligă 180g (Mălai - 60g, Apa), Smântână - 35g, Telemea vacă - 35g, Unt 65% grasime, Sare", tags: ["copii", "vegetarian"] },
    ],
  },
  {
    id: "paste-pizza",
    name: "Paste & Pizza",
    subtitle: "Gusturi italiene pe care le-am adus mai aproape de pofta românească",
    items: [
      { id: id(), name: "Paste Somon Fume", weight: "300g", price: 43, ingredients: "Paste făinoase Spaghetti - 180g, File de somon afumat - 100g, Cremă de gătit - 50g, Zucchini - 50g, Roșii cherry - 50g, Sare, Piper negru, Pătrunjel" },
      { id: id(), name: "Penne Trilogy al Forno", weight: "300g", price: 45, ingredients: "Paste făinoase Penne rigate - 180g, Cremă de gătit - 60g, Bacon - 50g, Gorgonzola - 50g, Ou - 50g, Parmezan - 36g, Sare, Piper negru, Sos Pizza" },
      { id: id(), name: "Penne Arabiata", weight: "300g", price: 33, ingredients: "Paste făinoase Penne rigate - 180g, Parmezan - 50g, Ardei iute, Usturoi, Sare, Piper negru, Sos Pizza", tags: ["vegetarian"] },
      { id: id(), name: "Penne Formaggi", weight: "300g", price: 43, ingredients: "Paste făinoase Penne rigate - 180g, Brânză brie - 50g, Gorgonzola - 50g, Mozzarella - 50g, Parmezan - 50g, Cremă de gătit - 50g, Cașcaval - 24g, Sare, Piper", tags: ["vegetarian"] },
      { id: id(), name: "Paste Supreme", weight: "300g", price: 49, ingredients: "Paste făinoase Tagliatelle - 180g, Cremă de gătit - 60g, Bacon - 50g, Parmezan - 50g, Gorgonzola - 36g, Ulei extravirgin cu aroma de trufe, Sare, Piper negru" },
      { id: id(), name: "Penne Amatriciana", weight: "300g", price: 33, ingredients: "Paste făinoase Penne rigate - 180g, Sos pizza - 60ml, Bacon - 50g, Ardei - 50g, Ceapă - 36g, Parmezan - 30g, Sare, Piper negru" },
      { id: id(), name: "Paste cu Broccoli și Piept de Pui", weight: "450g", price: 44, ingredients: "Penne - 180g, Cremă de gătit - 150ml, Piept de pui - 100g, Broccoli - 100g, Sare, Piper negru" },
      { id: id(), name: "Paste Trilogy", weight: "300g", price: 44, ingredients: "Paste făinoase Tagliatelle - 200g, Cremă de gătit - 50g, Bacon - 50g, Parmezan, Gorgonzola, Sare, Piper negru" },
      { id: id(), name: "Spaghetti Oglio Peperoni", weight: "300g", price: 33, ingredients: "Paste făinoase Spaghetti - 180g, Parmezan - 36g, Ulei de măsline, Ardei iute, Usturoi, Sare, Piper negru, Pătrunjel", tags: ["vegetarian"] },
      { id: id(), name: "Paste Milanese", weight: "300g", price: 43, ingredients: "Paste făinoase Spaghetti - 180g, Bacon - 60g, Parmezan - 50g, Cremă de gătit - 50g, Sos Roșii - 30ml, Piper negru, Sare" },
      { id: id(), name: "Carbonara Sos Alb", weight: "300g", price: 43, ingredients: "Paste făinoase Spaghetti - 180g, Bacon - 60g, Parmezan (Conține Lapte) - 50g, Ou - 50g, Cremă de gătit - 30g, Sare, Piper negru" },
      { id: id(), name: "Carbonara Clasice", weight: "300g", price: 43, ingredients: "Paste făinoase Spaghetti - 180g, Bacon - 60g, Parmezan - 50g, Ou - 50g, Gălbenuș - 30ml, Piper negru, Sare", tags: ["bucătar"] },
      { id: id(), name: "Penne al Forno Sos Alb", weight: "300g", price: 43, ingredients: "Paste făinoase Penne rigate - 180g, Șuncă Praga (Conține Lapte) - 60g, Ciuperci - 60g, Cremă de gătit - 50g, Mozzarella - 50g, Parmezan - 50g, Sare, Piper negru" },
      { id: id(), name: "Penne al Forno", weight: "300g", price: 43, ingredients: "Paste făinoase Penne rigate - 180g, Ciuperci - 60g, Șuncă Praga - 60g, Cremă de gătit - 50g, Mozzarella - 50g, Parmezan - 50g, Sos Roșii - 30ml, Sare, Piper negru", tags: ["bucătar"] },
      { id: id(), name: "Pizza Capriciosa", weight: "550g", price: 41, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Roșii - 60g, Salam de porc (Conține Lapte, Țelină, Muștar) - 60g, Șuncă Praga (Conține Lapte) - 60g, Cașcaval - 60g, Ciuperci mixte - 48g, Ardei - 36g, Măsline - 36g, Sos Pesto" },
      { id: id(), name: "Pizza Americană", weight: "550g", price: 41, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Roșii - 60g, Șuncă Praga (Conține Lapte) - 60g, Cașcaval - 60g, Cartofi prăjiți - 60g, Bacon - 60g" },
      { id: id(), name: "Pizza Formaggi", weight: "600g", price: 43, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Cașcaval - 60g, Brânză brie - 48g, Brânză cheddar - 48g, Brânză de burduf - 48g, Gorgonzola - 48g" },
      { id: id(), name: "Pizza Vegetariană", weight: "550g", price: 39, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Zucchini - 60g, Roșii - 60g, Cașcaval - 60g, Ciuperci - 48g, Porumb - 36g, Măsline - 36g, Brânză dură - 36g", tags: ["vegetarian"] },
      { id: id(), name: "Pizza Carbonara", weight: "450g", price: 43, ingredients: "Blat pizza - 300g, Mozzarella - 150g, Bacon - 150g, Ou - 50g, Cremă de gătit, Sare, Piper negru" },
      { id: id(), name: "Pizza Trilogy", weight: "600g", price: 45, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Cașcaval - 60g, Roșii - 60g, Șuncă Praga - 48g, Salam de porc (Conține Lapte, Țelină, Muștar) - 48g, Porumb - 36g, Bacon - 36g, Ardei - 36g, Brânză dură - 36g, Măsline" },
      { id: id(), name: "Pizza Prosciutto", weight: "550g", price: 39, ingredients: "Blat Pizza Trilogy - 250g, Șuncă Praga (Conține Lapte) - 120g, Mozzarella - 120g, Sos pizza - 72ml, Roșii - 60g, Cașcaval - 60g, Brânză dură - 36g" },
      { id: id(), name: "Pizza Italian Devil", weight: "600g", price: 43, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Salam Chorizo picant - 60g, Gorgonzola - 36g, Brânză dură - 36g, Cârnați, Ardei iute", tags: ["bucătar"] },
      { id: id(), name: "Pizza Margherita", weight: "550g", price: 33, ingredients: "Blat Pizza Trilogy - 250g, Mozzarella - 120g, Sos pizza - 72ml, Cașcaval - 60g, Brânză dură - 36g, Busuioc", tags: ["copii"] },
      { id: id(), name: "Focaccia Cașcaval", weight: "250g", price: 25, ingredients: "Mozzarella - 100g, Făină de grâu - 96g, Ulei de floarea soarelui, Sare" },
    ],
  },
  {
    id: "salate-garnituri",
    name: "Salate & Garnituri",
    subtitle: "Fresh sau calde — perfecte ca bază, acompaniament sau masă ușoară",
    items: [
      { id: id(), name: "Salată Trilogy cu Pui", weight: "300g", price: 39, ingredients: "Piept de pui - 180g, Salată iceberg - 100g, Roșii cherry - 30g, Ou - 50g, Lipie - 50g, Măsline - 30g" },
      { id: id(), name: "Salată Bulgărească", weight: "300g", price: 35, ingredients: "Telemea vacă - 100g, Șuncă Praga (Conține Lapte) - 50g, Ou - 50g, Roșii - 50g, Castraveți proaspeți - 50g, Măsline - 25g, Ardei - 25g" },
      { id: id(), name: "Salată Somon Fume", weight: "300g", price: 43, ingredients: "Salată iceberg - 100g, File de somon afumat - 100g, Castraveți proaspeți - 100g, Ceapă - 60g, Suc de Lămâie / Suc de lime - 60ml, Ulei de măsline - 36ml, Pătrunjel, Piper negru, Sare" },
      { id: id(), name: "Salată Grecească", weight: "300g", price: 34, ingredients: "Brânză Telemea - 120g, Salată iceberg - 100g, Roșii - 60g, Castraveți - 60g, Măsline - 40g, Ceapă - 40g, Ulei de măsline, Oregano, Sare, Piper negru", tags: ["vegetarian"] },
      { id: id(), name: "Salată Cobb", weight: "350g", price: 39, ingredients: "Piept de pui - 150g, Salată iceberg - 100g, Roșii - 40g, Gorgonzola - 40g, Bacon - 40g, Ou - 50g, Ulei de măsline, Sare, Piper negru" },
      { id: id(), name: "Salată Tabbouleh", weight: "200g", price: 24, ingredients: "Năut - 100g, Castraveți - 40g, Roșii - 40g, Suc de Lămâie / Suc de lime, Ceapă - 30g, Ardei - 30g, Ulei de floarea soarelui, Pătrunjel", tags: ["vegetarian"] },
      { id: id(), name: "Salată Caesar", weight: "200g", price: 39, ingredients: "Salată iceberg - 250g, Piept de pui - 150g, Parmezan - 60g, Maioneză - 40g, Crutoane - 35g, Suc Lămâie - 20ml, Anșoa - 15g, Capere - 15g", tags: ["bucătar"] },
      { id: id(), name: "Salată Coleslaw", weight: "150g", price: 20, ingredients: "Varză albă - 80g, Morcov - 30g, Ceapă albă - 30g, Maioneză - 20g, Sare, Piper, Zeamă de lămâie" },
      { id: id(), name: "Salată Bucătarului", weight: "250g", price: 20, ingredients: "Roșii cherry - 130g, Mozzarella - 60g, Telemea vacă - 60g, Busuioc, Oregano, Piper rosu, Ulei de Măsline" },
      { id: id(), name: "Salată Ardei Copți", weight: "200g", price: 15, ingredients: "Ardei capia copt și decojit - 200g" },
      { id: id(), name: "Salată Asortată", weight: "200g", price: 15, ingredients: "Ardei - 50g, Roșii - 50g, Castraveți - 50g, Ceapă - 50g", tags: ["vegetarian"] },
      { id: id(), name: "Castraveți Murați", weight: "200g", price: 15, ingredients: "Castraveți murați (Conține Gluten, Muștar, Sulfiți) - 200g" },
      { id: id(), name: "Sfeclă Roșie", weight: "200g", price: 15, ingredients: "Sfeclă Roșie - 200g", tags: ["vegetarian"] },
      { id: id(), name: "Salată Verde", weight: "250g", price: 15, ingredients: "Salată iceberg - 250g, Suc de Lămâie / Suc de lime", tags: ["vegetarian"] },
      { id: id(), name: "Salată Murături Asortate", weight: "200g", price: 15, ingredients: "Sfeclă Roșie - 70g, Castraveți murați (Conține Gluten, Muștar, Sulfiți) - 65g, Ardei capia copt și decojit - 65g" },
      { id: id(), name: "Salată Varză Albă", weight: "200g", price: 12, ingredients: "Varză - 190g, Morcov - 10g, Oțet de mere / Oțet de vin, Sare, Piper negru", tags: ["vegetarian"] },
      { id: id(), name: "Cartofi Pai", weight: "200g", price: 12, ingredients: "Cartofi prăjiți - 200g, Ulei de palmier" },
      { id: id(), name: "Cartofi Domnești", weight: "200g", price: 22, ingredients: "Cartofi - 150g, Cașcaval - 50g, Ulei de floarea soarelui, Usturoi, Piper negru, Sare", tags: ["bucătar"] },
      { id: id(), name: "Cartofi Wedges", weight: "200g", price: 20, ingredients: "Cartofi prăjiți - 200g, Ulei de palmier, Rozmarin, Piper negru, boia dulce (Conține Gluten)" },
      { id: id(), name: "Cartofi Haiducești", weight: "200g", price: 20, ingredients: "Cartofi - 150g, Ceapă - 10g, Bacon - 40g, Ulei de floarea soarelui, boia dulce (Conține Muștar, Gluten, Ouă, Soia, Susan), Sare, Piper negru" },
      { id: id(), name: "Cartofi Gratinați", weight: "200g", price: 22, ingredients: "Cartofi - 150g, Lapte - 10g, Făină de grâu dur, Mozzarella - 40g, Ou - 50g, Unt 65% grasime, Sare, Piper negru", tags: ["copii"] },
      { id: id(), name: "Legume la Grătar", weight: "250g", price: 22, ingredients: "Dovlecel - 60g, Vânătă - 60g, Roșii - 60g, Ceapă - 30g, Ardei - 30g, Ardei iute - 10g, Ulei de floarea soarelui, Piper negru, Sare", tags: ["vegetarian"] },
      { id: id(), name: "Orez cu Legume", weight: "200g", price: 15, ingredients: "Orez - 150g, Morcov - 16g, Ceapă - 16g, Ardei - 16g, Unt 65% grasime, Ulei de floarea soarelui, Pătrunjel, Turmeric", tags: ["vegetarian"] },
      { id: id(), name: "Broccoli Sote", weight: "200g", price: 20, ingredients: "Broccoli* - 200g, Unt 65% grasime, Piper negru, Sare", tags: ["vegetarian"] },
      { id: id(), name: "Ciuperci Gorgonzola", weight: "200g", price: 20, ingredients: "Ciuperci - 150g, Ulei de floarea soarelui, Gorgonzola - 25g, Cremă de gătit - 25g, Sare, Piper negru" },
      { id: id(), name: "Ciuperci Sote", weight: "200g", price: 15, ingredients: "Ciuperci - 150g, Unt 65% grasime, Usturoi, Piper negru, Sare", tags: ["vegetarian"] },
      { id: id(), name: "Cartofi Aurii", weight: "300g", price: 20, ingredients: "Cartofi - 200g, Ulei de floarea soarelui - 100g, Sare" },
      { id: id(), name: "Ciuperci în Panko", weight: "250g", price: 28, ingredients: "Ciuperci - 200g, Ou - 50g, Ulei de floarea soarelui - 50g, Panko - 10g" },
      { id: id(), name: "Mămăligă", weight: "200g", price: 15, ingredients: "Făină de mălai - 80g, Apă, Sare", tags: ["vegetarian"] },
      { id: id(), name: "Cartofi Răntăliți", weight: "250g", price: 22, ingredients: "Cartofi - 200g, Ceapă albă - 50g, Ulei de floarea soarelui - 50ml, Boia - 5g, Sare, Piper negru" },
    ],
  },
  {
    id: "mic-dejun",
    name: "Mic Dejun & Brunch",
    subtitle: "Mic dejun cu gust, pentru dimineți în care ai chef de ceva bun",
    items: [
      { id: id(), name: "Mic Dejun American", weight: "350g", price: 35, ingredients: "Antricot de vită - 150g, Ou prăjit - 100g, Cartofi prăjiți - 100g, Castraveți murați (Conține Gluten, Muștar, Sulfiți) - 50g, Bacon - 40g, Ceapă - 30g, Cheddar - 30g, Muștar, Piper negru, Boia", tags: ["bucătar"] },
      { id: id(), name: "Mic Dejun Englezesc", weight: "350g", price: 35, ingredients: "Fasole - 180g, Ulei de floarea soarelui, Telemea vacă - 100g, Ou prăjit - 100g, Roșii proaspete - 60g, Bacon - 40g, Piper negru" },
      { id: id(), name: "Omletă cu Șuncă și Cașcaval", weight: "250g", price: 25, ingredients: "Ou - 150g, Roșii - 100g, Șuncă Praga (Conține Lapte) - 50g, Cașcaval - 50g, Ulei de floarea soarelui, Sare" },
      { id: id(), name: "Omletă Țărănească", weight: "230g", price: 25, ingredients: "Ou - 150g, Roșii proaspete - 100g, Bacon - 50g, Telemea vacă - 50g, Ceapă - 36g, Ardei - 36g, Ulei de floarea soarelui, Sare" },
      { id: id(), name: "Ochiuri la Capac", weight: "200g", price: 25, ingredients: "Roșii - 100g, Ou - 100g, Cașcaval - 50g, Șuncă Praga (Conține Lapte) - 50g, Ulei de floarea soarelui, Sare" },
      { id: id(), name: "Omletă Brânză și Mărar", weight: "220g", price: 25, ingredients: "Ou - 150g, Roșii - 100g, Telemea vacă - 40g, Ulei de floarea soarelui, Mărar - 10g, Sare" },
      { id: id(), name: "Cotto Panini", weight: "250g", price: 27, ingredients: "Panini, Salată iceberg - 240g, Mozzarella - 120g, Șuncă Praga (Conține Lapte) - 120g, Roșii - 50g, Ulei de măsline, Oregano, Sare" },
      { id: id(), name: "Prosciutto Panini", weight: "250g", price: 27, ingredients: "Panini, Mozzarella - 120g, Rucola - 60g, Prosciutto crudo - 60g, Roșii - 50g, Parmezan - 24g, Ulei de floarea soarelui, Ulei de măsline, Oregano, Sare" },
      { id: id(), name: "Shakshuka", weight: "300g", price: 30, ingredients: "Ouă - 150g, Roșii - 100g, Ardei - 60g, Ceapă - 50g, Usturoi - 5g, Chimen - 5g, Sare, Piper negru", tags: ["vegetarian"] },
      { id: id(), name: "Omletă Trilogy", weight: "250g", price: 30, ingredients: "Ou - 150g, Roșii - 50g, Bacon - 50g, Brânză brie - 30g, Ulei de floarea soarelui, Unt 65% grasime, Pătrunjel, Sare" },
      { id: id(), name: "Spănac cu Ochiuri", weight: "300g", price: 22, ingredients: "Spănac* - 240g, Cremă de gătit - 120g, Ou prăjit - 100g, Usturoi, Piper negru, Sare" },
      { id: id(), name: "Plăcinte de Cartofi", weight: "200g", price: 26, ingredients: "Cartofi - 180g, Ulei de floarea soarelui, Telemea vacă - 60g, Ou - 50g, Parmezan - 50g, Făină de grâu - 36g, Piper, Sare" },
      { id: id(), name: "Caprese", weight: "200g", price: 22, ingredients: "Mozzarella - 120g, Roșii - 120g, Ulei de măsline, Busuioc, Piper negru, Sare, Oregano", tags: ["vegetarian"] },
      { id: id(), name: "Humus cu Pui", weight: "260g", price: 30, ingredients: "Năut - 150g, Piept de pui - 50g, Pastă din semințe de susan - 36g, Ulei de măsline, Usturoi" },
      { id: id(), name: "Humus cu Vită", weight: "260g", price: 35, ingredients: "Năut - 150g, Mușchi de vită - 50g, Pastă din semințe de susan - 36g, Ulei de măsline, Usturoi" },
      { id: id(), name: "Humus", weight: "260g", price: 25, ingredients: "Năut - 150g, Pastă din semințe de susan - 36g, Ulei de măsline, Usturoi", tags: ["vegetarian"] },
      { id: id(), name: "Humus cu Muguri de Pin", weight: "260g", price: 30, ingredients: "Năut - 150g, Pastă din semințe de susan - 36g, Muguri de pin - 10g, Ulei de măsline, Usturoi" },
      { id: id(), name: "Humus cu Ardei Copt", weight: "350g", price: 25, ingredients: "Năut - 260g, Ardei copt - 60g, Tahini - 50g, Ulei măsline - 10ml, Usturoi - 5g, Sare, Piper negru" },
      { id: id(), name: "Humus cu Usturoi Caramelizat", weight: "350g", price: 25, ingredients: "Năut - 260g, Tahini - 50g, Usturoi - 10g, Ulei măsline - 10ml, Zahăr - 5g, Sare, Piper negru" },
      { id: id(), name: "Carpaccio Somon", weight: "300g", price: 45, ingredients: "Somon fume - 150g, Rucola - 100g, Lămâie - 50g, Ulei de Măsline - 20ml, Sare, Piper negru" },
      { id: id(), name: "Carpaccio de Vită", weight: "250g", price: 45, ingredients: "Mușchi de vită - 180g, Suc de Lămâie - 60ml, Rucola - 60g, Brânză dură - 60g, Ulei de măsline, Piper negru" },
      { id: id(), name: "Vinete Umplute", weight: "200g", price: 30, ingredients: "Vânătă - 240g, Mozzarella - 100g, Roșii - 50g, Dovlecel - 50g, Ardei - 50g, Ceapă - 30g, Cașcaval - 20g", tags: ["vegetarian"] },
      { id: id(), name: "Bruschete Vită", weight: "300g", price: 55, ingredients: "Pâine prăjită - 150g, Mușchi de vită - 200g, Parmezan - 50g, Ulei de floarea soarelui, Zahăr, Sos tartar (ou fiert, castraveți murați, maioneză, ceapă), salată iceberg" },
      { id: id(), name: "Bruschete cu Roșii", weight: "300g", price: 30, ingredients: "Pâine prăjită - 150g, Roșii - 180g, Parmezan - 50g, Ulei de floarea soarelui, Busuioc, Oregano, Ulei de măsline, Usturoi, Sare, Piper", tags: ["vegetarian"] },
      { id: id(), name: "Bruschete Mixte", weight: "300g", price: 45, ingredients: "Pâine prăjită - 150g, Roșii - 240g, Parmezan - 40g, File de somon afumat - 36g, Prosciutto crudo - 36g, Ulei de floarea soarelui, Ulei de măsline, Usturoi, Sare, Piper" },
      { id: id(), name: "Bruschete Trilogy", weight: "300g", price: 32, ingredients: "Pâine prăjită - 150g, Pastă jumări - 100g, Telemea - 60g, Ceapă roșie - 50g, Sare, Piper negru" },
    ],
  },
  {
    id: "deserturi",
    name: "Deserturi Trilogy",
    subtitle: "Dulciuri cu gust, pentru final de masă sau răsfăț",
    items: [
      { id: id(), name: "Lava Cake", weight: "200g", price: 25, ingredients: "Înghețată de vanilie - 50g, Lava cake 150g (Ou - 50g, Unt 82% grasime, Făină de grâu dur, Ciocolată, zahăr vanilat)" },
      { id: id(), name: "Papanași cu Finetti", weight: "300g", price: 30, ingredients: "Finetti (Conține Soia) - 120g, Brânză de vaci - 96g, Făină de grâu dur, Ou - 50g, Zahăr vanilat - 24g" },
      { id: id(), name: "Papanași cu Dulceață", weight: "300g", price: 33, ingredients: "Smântână - 120g, Brânză de vaci - 96g, Dulceață de afine - 96g, Făină de grâu dur, Ou - 50g, Zahăr pudră", tags: ["copii"] },
      { id: id(), name: "Clătite cu Finetti", weight: "200g", price: 25, ingredients: "Ou - 100g, Lapte - 60g, Finetti (Conține Soia) - 40g, Făină de grâu dur, Zahăr, Topping Ciocolată" },
      { id: id(), name: "Clătite cu Finetti și Banane", weight: "250g", price: 26, ingredients: "Clătite (ouă, făină, lapte, unt, zahăr) - 100g, Banane - 50g, Finetti (Conține Soia) - 50g, Înghețată de vanilie - 50g, Topping Ciocolată" },
      { id: id(), name: "Clătite cu Nucă și Miere", weight: "200g", price: 26, ingredients: "Clătite (ouă, făină, lapte, unt, zahăr) - 100g, Miere - 60g, Nuci - 60g" },
      { id: id(), name: "Clătite cu Dulceață", weight: "200g", price: 26, ingredients: "Clătite (ouă, făină, lapte, unt, zahăr) - 100g, Dulceață de afine - 60g" },
      { id: id(), name: "Crepes Suzette", weight: "150g", price: 26, ingredients: "Clătite (ouă, făină, lapte, unt, zahăr) - 100g, Suc de portocale - 30g, Coniac - 20g, Unt - 10g, Zahăr - 10g, Coajă de portocală - 5g", tags: ["bucătar"] },
      { id: id(), name: "Gelatto", weight: "200g", price: 18, ingredients: "Înghețată de vanilie (Conține Ouă, Lapte) - 200g" },
    ],
  },
  {
    id: "extra-toppings",
    name: "Extra & Toppings",
    subtitle: "Sosuri, toppinguri, adaosuri și ecotaxe ambalaj",
    items: [
      { id: id(), name: "Brânză", weight: "120g", price: 6, ingredients: "Brânză" },
      { id: id(), name: "Mozzarella", weight: "60g", price: 6, ingredients: "Mozzarella" },
      { id: id(), name: "Salam", weight: "60g", price: 6, ingredients: "Salam" },
      { id: id(), name: "Porumb", weight: "60g", price: 6, ingredients: "Porumb" },
      { id: id(), name: "Ciuperci", weight: "60g", price: 6, ingredients: "Ciuperci" },
      { id: id(), name: "Sos Gorgonzola", weight: "60g", price: 6, ingredients: "Sos Gorgonzola" },
      { id: id(), name: "Șuncă", weight: "60g", price: 6, ingredients: "Șuncă" },
      { id: id(), name: "Rucola", weight: "60g", price: 6, ingredients: "Rucola" },
      { id: id(), name: "Prosciutto", weight: "60g", price: 8, ingredients: "Prosciutto" },
      { id: id(), name: "Sos Extra", weight: "60g", price: 6, ingredients: "Sos" },
      { id: id(), name: "Miere Plic", weight: "15g", price: 2, ingredients: "Miere" },
      { id: id(), name: "Pâine", weight: "50g", price: 2, ingredients: "Pâine" },
      { id: id(), name: "Ambalaj Mic", weight: "", price: 3, ingredients: "Ambalaj" },
      { id: id(), name: "Ambalaj Mare", weight: "", price: 6, ingredients: "Ambalaj" },
    ],
  },
];

const STORAGE_KEY = "trilogy_menu_data_v1";

export function loadMenu(): MenuCategory[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return structuredClone(DEFAULT_MENU);
}

export function saveMenu(menu: MenuCategory[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
  } catch {}
}

export function resetMenu(): MenuCategory[] {
  try { localStorage.removeItem(STORAGE_KEY); } catch {}
  return structuredClone(DEFAULT_MENU);
}
