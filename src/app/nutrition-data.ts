import { menuData } from "./menu-data";

/*
 * Valori nutriționale ESTIMATIVE, calculate din rețete.
 *
 * Gramajele din RECIPES sunt cele din meniul PDF (public/meniu.pdf, export Canva).
 * Unde PDF-ul nu dă o cantitate (ex. „Cremă de gătit”, „Ulei”, „Sare”), am pus o
 * cantitate standard, marcată cu comentariul „presupus”.
 *
 * Ingredientele pot fi crude (ex. piept de pui 200 g crud, mălai 60 g) sau gata
 * gătite (ex. cartofi prăjiți, paste fierte). Al 7-lea câmp din tabelul de
 * ingrediente — randamentul — spune cât cântărește 1 g de ingredient în farfurie
 * (carnea pierde apă la gătit, mălaiul absoarbe apă). Valorile per porție sunt suma
 * nutrienților; valorile per 100 g se raportează la greutatea gătită a porției.
 *
 * Uleiul de prăjire și făina de tăvălit: se socotește doar partea absorbită /
 * rămasă pe produs, nu toată cantitatea folosită în bucătărie.
 *
 * Valorile per 100 g ale ingredientelor sunt medii din tabele publice de compoziție
 * a alimentelor. Energia se calculează din macronutrienți cu factorii UE
 * (Reg. 1169/2011): grăsimi 9 kcal/g, glucide 4 kcal/g, proteine 4 kcal/g.
 *
 * Ca să corectezi un preparat: modifică gramajele din RECIPES. Ca să adaugi unul nou:
 * adaugă o intrare cu exact același nume ca în menu-data.ts.
 */

// [grăsimi, din care saturate, glucide (fără fibre), din care zaharuri, proteine, sare] per 100 g,
// opțional randamentul la gătire (greutate în farfurie / greutate folosită; implicit 1)
type Ingredient = [number, number, number, number, number, number, number?];

const I = {
  // carne & pește crude (randament după gătire)
  pui_crud: [2.6, 0.6, 0, 0, 22.5, 0.15, 0.75],
  ceafa_cruda: [17, 6, 0, 0, 17, 0.15, 0.72],
  cotlet_crud: [9, 3.2, 0, 0, 20, 0.13, 0.75],
  carne_porc_cruda: [14, 5, 0, 0, 18, 0.15, 0.7],
  coaste_cu_os: [15, 5, 0, 0, 10.5, 0.1, 0.75],
  ciolan_afumat_cu_os: [9.4, 3.3, 0, 0, 13.2, 1.2, 0.85],
  ficat_pui_crud: [4.8, 1.6, 0.7, 0, 17, 0.2, 0.75],
  vita_muschi_crud: [5, 2, 0, 0, 22, 0.15, 0.75],
  vita_carpaccio: [5, 2, 0, 0, 22, 0.15],
  vita_tocata_cruda: [20, 8, 0, 0, 17, 0.2, 0.7],
  somon_crud: [13, 3, 0, 0, 20, 0.15, 0.8],
  bacon_crud: [37, 13, 1.3, 0.5, 14, 2.7, 0.65],
  // carne gata preparată
  pui_crispy: [13, 2.0, 15, 1.0, 20, 1.2],
  snitel_pui: [12, 1.8, 13, 0.8, 22, 1.0],
  carnati_afumati: [26, 9.5, 2, 1, 14, 2.4, 0.9],
  sunca_praga: [4.5, 1.5, 1.5, 1, 17, 2.3],
  salam_porc: [35, 13, 1.5, 1, 20, 4.0],
  chorizo: [38, 14, 2, 1, 24, 4.0],
  prosciutto: [15, 5.5, 0, 0, 28, 5.5],
  pasta_jumari: [50, 18, 3, 0.5, 22, 1.5],
  somon_afumat: [4.3, 0.9, 0, 0, 18.3, 3.0],
  ansoa: [10, 2, 0, 0, 29, 9],
  // ouă & lactate
  ou: [9.5, 3.1, 0.7, 0.4, 12.6, 0.36],
  ou_prajit: [15, 4.3, 0.8, 0.4, 13.6, 0.5],
  galbenus: [26.5, 9.6, 3.6, 0.6, 15.9, 0.12],
  mozzarella: [21, 14, 2.2, 1, 22, 1.2],
  mozzarella_proaspata: [19, 13, 2, 1, 18, 0.5],
  cascaval: [28, 18, 1, 0.5, 26, 2.0],
  telemea: [21, 14, 1, 1, 18, 3.0],
  parmezan: [28, 18, 0, 0, 34, 1.6],
  gorgonzola: [29, 19, 0, 0, 21, 1.8],
  brie: [28, 17, 0.5, 0.5, 21, 1.6],
  cheddar: [33, 21, 1.3, 0.5, 25, 1.7],
  burduf: [24, 15, 2, 1, 20, 3.0],
  branza_vaci: [4, 2.5, 3.5, 3.5, 13, 0.1],
  crema_gatit: [22, 14, 3.5, 3.5, 2.5, 0.1],
  smantana: [20, 12.5, 3.5, 3.5, 2.6, 0.1],
  lapte: [3.2, 2, 4.8, 4.8, 3.2, 0.1],
  unt: [81, 51, 0.1, 0.1, 0.9, 0.02],
  inghetata: [11, 6.8, 23.6, 21, 3.5, 0.2],
  // grăsimi & sosuri
  ulei: [100, 11, 0, 0, 0, 0],
  ulei_masline: [100, 14, 0, 0, 0, 0],
  untura: [100, 39, 0, 0, 0, 0],
  maioneza: [75, 6, 1, 1, 1, 1.2],
  sos_rose: [45, 4, 10, 8, 1, 1.5],
  sos_tartar: [47, 4, 5, 3, 1, 1.5],
  ketchup: [0.1, 0, 24, 22, 1.2, 2.0],
  sos_sweet_chilli: [0.2, 0, 49, 45, 0.4, 2.5],
  sos_soia: [0.1, 0, 5, 0.5, 8, 14.5],
  sos_rosii: [0.7, 0.1, 8, 5, 1.6, 0.9],
  pasta_tomate: [0.5, 0.1, 19, 12, 4.3, 0.1],
  sos_brun: [2.5, 1, 7, 1, 2, 1.3],
  pesto: [45, 7, 5, 1.5, 5, 2.5],
  tahini: [54, 7.5, 21, 0.5, 17, 0.1],
  capere: [0.9, 0.2, 1.7, 0.4, 2.4, 6.7],
  // cereale, panificație, garnituri
  paste: [0.9, 0.2, 30.5, 0.6, 5.8, 0.3],
  orez: [0.3, 0.1, 28, 0.1, 2.7, 0.3],
  malai: [3.9, 0.5, 67, 0.6, 8, 0, 3],
  mamaliga: [0.4, 0.1, 15, 0.2, 1.6, 0.5],
  cartofi_prajiti: [15, 2.3, 37, 0.3, 3.4, 0.6],
  cartofi_prajiti_palmier: [15, 7, 37, 0.3, 3.4, 0.6],
  cartofi_wedges: [10, 4.5, 28, 0.5, 3, 0.6],
  cartofi_cruzi: [0.1, 0, 15.5, 0.8, 2, 0, 0.8],
  paine: [3.2, 0.7, 49, 5, 9, 1.2],
  lipie: [1.2, 0.3, 56, 1.5, 9, 1.3],
  chifla: [4.5, 1.2, 50, 6, 9, 1.2],
  blat_pizza_crud: [2.5, 0.4, 44, 1.5, 7.5, 1.1, 0.85],
  faina_aluat: [1, 0.2, 76, 0.3, 10, 0, 1.4],
  pesmet: [5, 1, 72, 6, 13, 1.2],
  faina: [1, 0.2, 76, 0.3, 10, 0],
  crutoane: [14, 2, 63, 4, 11, 1.6],
  susan: [50, 7, 12, 0.3, 18, 0],
  naut: [2.6, 0.3, 20, 4.8, 8.9, 0.6],
  fasole: [0.5, 0.1, 19, 0.3, 8.5, 0.5],
  fasole_sos: [0.4, 0.1, 13, 5, 5, 0.6],
  // legume & fructe
  ceapa: [0.1, 0, 9, 4.2, 1.1, 0],
  ardei: [0.3, 0, 4.6, 3, 1, 0],
  ardei_copt: [0.3, 0, 5, 4, 1, 0.3],
  rosii: [0.2, 0, 3.2, 2.6, 0.9, 0],
  castraveti: [0.1, 0, 3, 1.7, 0.7, 0],
  castraveti_murati: [0.2, 0, 2, 1.3, 0.5, 2.0],
  salata_verde: [0.1, 0, 2, 1.8, 0.9, 0],
  varza: [0.1, 0, 3.3, 3.2, 1.3, 0],
  morcov: [0.2, 0, 7, 4.7, 0.9, 0.2],
  zucchini: [0.3, 0.1, 2.1, 1.7, 1.2, 0],
  vanata: [0.2, 0, 3, 2.5, 1, 0],
  broccoli: [0.4, 0, 4.4, 1.7, 2.8, 0],
  ciuperci: [0.3, 0, 2.3, 2, 3.1, 0],
  hribi: [0.4, 0, 3, 1, 4, 0],
  spanac: [0.4, 0, 1.4, 0.4, 2.9, 0.2],
  rucola: [0.7, 0.1, 2, 2, 2.6, 0],
  porumb: [1.2, 0.2, 15, 4.5, 2.8, 0.5],
  masline: [11, 1.5, 1, 0, 0.8, 2.0],
  sfecla: [0.1, 0, 14, 12, 1, 0.6],
  usturoi: [0.5, 0, 30, 1, 6.4, 0],
  verdeata: [0.5, 0, 3, 1, 2.5, 0],
  lamaie: [0.2, 0, 7, 2.5, 0.4, 0],
  otet: [0, 0, 1, 0.5, 0, 0],
  banana: [0.3, 0.1, 20, 12, 1.1, 0],
  suc_portocale: [0.2, 0, 10, 8.4, 0.7, 0],
  nuci: [65, 6, 7, 2.6, 15, 0],
  muguri_pin: [68, 4.9, 9.4, 3.6, 13.7, 0],
  // dulciuri
  clatita: [9, 3, 28, 6, 7, 0.4],
  lava_cake: [22, 13, 40, 30, 6, 0.3],
  finetti: [31, 10, 57, 56, 6, 0.1],
  topping_ciocolata: [1, 0.5, 65, 55, 2, 0.2],
  dulceata: [0.1, 0, 62, 55, 0.4, 0],
  miere: [0, 0, 82, 82, 0.3, 0],
  zahar: [0, 0, 100, 100, 0, 0],
  // alcoolul din coniac/vin se evaporă la gătit
  coniac: [0, 0, 0, 0, 0, 0, 0],
  vin: [0, 0, 2.6, 1, 0.1, 0, 0],
  sare: [0, 0, 0, 0, 0, 100],
} satisfies Record<string, Ingredient>;

type Ing = keyof typeof I;
type Recipe = [Ing, number][];

const RECIPES: Record<string, Recipe> = {
  /* ── Gustul Trilogy ── */
  // ulei absorbit, susan, panko și fulgi de porumb: presupus
  "Pui Crispy Trilogy": [["pui_crud", 200], ["ou", 50], ["pesmet", 30], ["susan", 5], ["ulei", 20], ["cartofi_prajiti", 120], ["sos_rose", 50], ["salata_verde", 30], ["sare", 1.5]],
  "Coaste Porc Trilogy": [["coaste_cu_os", 500], ["cartofi_prajiti", 200], ["salata_verde", 120], ["sos_sweet_chilli", 60], ["sare", 2]],
  "Salată Trilogy cu Pui": [["pui_crud", 180], ["salata_verde", 100], ["rosii", 30], ["ou", 50], ["lipie", 50], ["masline", 30]],
  "Omletă Trilogy": [["ou", 150], ["rosii", 50], ["bacon_crud", 50], ["brie", 30], ["ulei", 5], ["unt", 5], ["verdeata", 3], ["sare", 1]],
  // sos pizza: presupus
  "Penne Trilogy al Forno": [["paste", 180], ["crema_gatit", 60], ["bacon_crud", 50], ["gorgonzola", 50], ["ou", 50], ["parmezan", 36], ["sos_rosii", 30], ["sare", 1]],
  // măsline: presupus
  "Pizza Trilogy": [["blat_pizza_crud", 250], ["mozzarella", 120], ["sos_rosii", 72], ["cascaval", 60], ["rosii", 60], ["sunca_praga", 48], ["salam_porc", 48], ["porumb", 36], ["bacon_crud", 36], ["ardei", 36], ["parmezan", 36], ["masline", 15]],
  "Burger Trilogy": [["cartofi_prajiti", 180], ["vita_tocata_cruda", 180], ["chifla", 80], ["sos_rose", 50], ["ceapa", 48], ["bacon_crud", 48], ["rosii", 36], ["cheddar", 36], ["salata_verde", 24], ["maioneza", 24], ["ketchup", 24], ["castraveti_murati", 24], ["pesmet", 5]],
  // parmezan, gorgonzola: presupus
  "Paste Trilogy": [["paste", 200], ["crema_gatit", 50], ["bacon_crud", 50], ["parmezan", 15], ["gorgonzola", 20], ["sare", 1]],
  "Bruschete Trilogy": [["paine", 150], ["pasta_jumari", 100], ["telemea", 60], ["ceapa", 50], ["sare", 1]],
  // făină, zahăr, înghețată: presupus
  "Clătite cu Gutui": [["ou", 100], ["lapte", 60], ["faina", 50], ["zahar", 10], ["ulei", 5], ["dulceata", 60], ["inghetata", 50]],

  /* ── Hituri de Bucătărie ── */
  "Tigaie Picantă Pui": [["pui_crud", 200], ["ulei", 10], ["zucchini", 30], ["ardei", 30], ["ceapa", 30], ["vanata", 30], ["sos_sweet_chilli", 20], ["sos_soia", 10]],
  "Burger de Pui": [["snitel_pui", 180], ["cartofi_prajiti", 180], ["salata_verde", 20], ["chifla", 80], ["sos_rose", 50], ["bacon_crud", 48], ["rosii", 36], ["cheddar", 36], ["castraveti_murati", 24], ["zahar", 2]],
  // pane: ulei absorbit și făină presupuse
  "Șnitel Parmigiana": [["pui_crud", 200], ["ou", 50], ["faina", 15], ["ulei", 15], ["mozzarella", 50], ["sos_rosii", 50], ["parmezan", 20], ["sare", 1.5]],
  "Paste Supreme": [["paste", 180], ["crema_gatit", 60], ["bacon_crud", 50], ["parmezan", 50], ["gorgonzola", 36], ["ulei_masline", 5], ["sare", 1]],
  "Cartofi Gratinați": [["cartofi_cruzi", 150], ["lapte", 10], ["faina", 5], ["mozzarella", 40], ["ou", 50], ["unt", 10], ["sare", 1]],
  "Salată Caesar": [["salata_verde", 250], ["pui_crud", 150], ["parmezan", 60], ["maioneza", 40], ["crutoane", 35], ["lamaie", 20], ["ansoa", 15], ["capere", 15]],

  /* ── Gusturi Românești ── */
  // mămăligă 100 g, cremă de gătit: presupus
  "Ciulama Ardelenească": [["pui_crud", 200], ["mamaliga", 100], ["ciuperci", 50], ["usturoi", 20], ["crema_gatit", 50], ["sare", 1.5]],
  "Ficăței în Sos": [["ficat_pui_crud", 250], ["ulei", 10], ["unt", 10], ["sos_brun", 20], ["usturoi", 5], ["sare", 1.5]],
  "Escalop Ardelenesc": [["cotlet_crud", 200], ["crema_gatit", 50], ["ciuperci", 50], ["ulei", 10], ["usturoi", 5], ["sare", 1.5]],
  "Ceafă Haiducească": [["ceafa_cruda", 240], ["faina", 10], ["ciuperci", 80], ["unt", 10], ["ulei", 10], ["sos_brun", 30], ["usturoi", 5], ["sare", 1.5]],
  "Ceafă la Cuptor cu Cartofi și Rozmarin": [["ceafa_cruda", 200], ["cartofi_wedges", 150], ["ulei", 10], ["sare", 1.5]],
  // făină rămasă pe produs și ulei absorbit: presupus
  "Șnitel de Porc": [["cotlet_crud", 200], ["faina", 20], ["ou", 50], ["ulei", 20], ["sare", 1.5]],
  "Mix Grill 1 Persoană": [["cotlet_crud", 100], ["ceafa_cruda", 100], ["pui_crud", 100], ["carnati_afumati", 50], ["bacon_crud", 50], ["cartofi_prajiti", 150], ["sare", 1.5]],
  "Mix Grill 2 Persoane": [["cotlet_crud", 200], ["ceafa_cruda", 200], ["pui_crud", 200], ["carnati_afumati", 100], ["bacon_crud", 100], ["cartofi_prajiti", 300], ["sare", 3]],
  "Mămăligă în Straturi": [["malai", 60], ["smantana", 40], ["bacon_crud", 30], ["carnati_afumati", 30], ["telemea", 30], ["unt", 10], ["sare", 1]],
  // ulei absorbit: presupus
  "Cașcaval Pane": [["cascaval", 220], ["ou", 50], ["pesmet", 30], ["ulei", 25]],
  "Mămăligă cu Brânză și Smântână": [["malai", 60], ["smantana", 35], ["telemea", 35], ["unt", 10], ["sare", 1]],

  /* ── Arome de Foc Trilogy ── */
  "Piept de Pui la Grătar": [["pui_crud", 200], ["sare", 1.5]],
  "Ceafă la Grătar": [["ceafa_cruda", 250], ["ulei", 5], ["sare", 1.5]],
  "Cotlet la Grătar": [["cotlet_crud", 300], ["ulei", 5], ["sare", 1.5]],
  "Mușchi Vită la Grătar": [["vita_muschi_crud", 200], ["ulei", 5], ["unt", 10], ["sare", 1.5]],
  "Burger Suprem": [["vita_tocata_cruda", 180], ["cartofi_prajiti", 180], ["salata_verde", 20], ["chifla", 80], ["ciuperci", 60], ["crema_gatit", 60], ["sos_rose", 50], ["ou_prajit", 50], ["bacon_crud", 48], ["ceapa", 36], ["gorgonzola", 36], ["cheddar", 36], ["rosii", 36], ["castraveti_murati", 24], ["pesmet", 5]],
  "Bucket Picant & Crocant": [["pui_crispy", 250], ["cartofi_prajiti", 180], ["sos_rose", 50]],
  // lipie: presupus
  "Polo à la King": [["pui_crud", 200], ["crema_gatit", 120], ["broccoli", 120], ["ciuperci", 60], ["mozzarella", 48], ["gorgonzola", 36], ["usturoi", 5], ["lipie", 50]],
  "Piept de Pui Suprem": [["pui_crud", 200], ["hribi", 60], ["ulei", 10], ["gorgonzola", 40], ["ulei_masline", 5]],
  "Piept de Pui Gorgonzola": [["pui_crud", 200], ["crema_gatit", 240], ["gorgonzola", 60], ["sare", 1.5]],
  "Șnitel Pui în Crustă": [["pui_crud", 200], ["ulei", 15], ["cascaval", 60], ["ou", 50], ["sare", 1.5]],
  "Shaorma la Farfurie": [["pui_crud", 180], ["ulei", 10], ["cartofi_prajiti", 150], ["sos_rose", 100], ["castraveti_murati", 50], ["varza", 50], ["lipie", 50], ["rosii", 36], ["salata_verde", 20]],
  // PDF: făină 120 g — se socotește doar cea rămasă pe șnițel (presupus 20 g); ulei absorbit presupus
  "Șnitel de Pui": [["pui_crud", 200], ["faina", 20], ["ou", 50], ["ulei", 20], ["sare", 1.5]],
  "Cotoletă a la Bolognese": [["cotlet_crud", 240], ["crema_gatit", 120], ["cascaval", 60], ["sos_rosii", 60], ["sunca_praga", 60], ["ou", 50], ["pesmet", 36], ["ulei", 20], ["sare", 1.5]],
  // sos de soia, sweet chilli: presupus
  "Tigaie Picantă Vită": [["vita_muschi_crud", 200], ["ulei", 10], ["zucchini", 30], ["ardei", 30], ["ceapa", 30], ["vanata", 30], ["sos_soia", 10], ["sos_sweet_chilli", 20]],
  "Tochitură cu Mămăliguță": [["carne_porc_cruda", 80], ["bacon_crud", 60], ["malai", 40], ["telemea", 30], ["carnati_afumati", 30], ["ou_prajit", 50], ["vin", 10], ["unt", 5], ["usturoi", 3], ["sare", 1.5]],
  "Pomana Porcului": [["carne_porc_cruda", 100], ["bacon_crud", 60], ["malai", 40], ["untura", 10], ["vin", 10], ["usturoi", 5], ["sare", 1.5]],
  // pastă de tomate, morcov, ulei: presupus
  "Ciolan cu Iahnie": [["ciolan_afumat_cu_os", 700], ["fasole", 150], ["ceapa", 130], ["ardei", 20], ["sos_rosii", 24], ["pasta_tomate", 15], ["morcov", 20], ["ulei", 10], ["sare", 2]],
  // gorgonzola: presupus
  "Mușchi Suprem": [["vita_muschi_crud", 200], ["crema_gatit", 50], ["ulei_masline", 5], ["hribi", 50], ["gorgonzola", 20], ["sare", 1.5]],
  "Mușchi Vită în Sos de Piper Verde": [["vita_muschi_crud", 200], ["crema_gatit", 90], ["sare", 1.5]],
  "Mușchi în Sos Brun": [["vita_muschi_crud", 200], ["ulei", 10], ["sos_brun", 50], ["sare", 1.5]],
  "Mușchi Vită Gorgonzola": [["vita_muschi_crud", 200], ["crema_gatit", 50], ["gorgonzola", 50], ["sare", 1.5]],
  "Mușchi de Vită în Coniac": [["vita_muschi_crud", 200], ["unt", 50], ["coniac", 50], ["verdeata", 15], ["sare", 1.5]],
  // ulei absorbit: presupus
  "Șnitel Vienez de Vită": [["vita_muschi_crud", 150], ["ou", 50], ["pesmet", 50], ["ulei", 20], ["sare", 1.5]],
  "Somon Lemon": [["somon_crud", 200], ["rosii", 40], ["usturoi", 5], ["sare", 1.5]],
  "Somon Grill": [["somon_crud", 200], ["sare", 1.5]],

  /* ── Paste ── (pastele: greutate fiartă) */
  "Carbonara Sos Alb": [["paste", 180], ["bacon_crud", 60], ["parmezan", 50], ["ou", 50], ["crema_gatit", 30], ["sare", 1]],
  "Carbonara Clasice": [["paste", 180], ["bacon_crud", 60], ["parmezan", 50], ["ou", 50], ["galbenus", 30], ["sare", 1]],
  "Penne al Forno Sos Alb": [["paste", 180], ["sunca_praga", 60], ["ciuperci", 60], ["crema_gatit", 50], ["mozzarella", 50], ["parmezan", 50], ["sare", 1]],
  "Penne al Forno": [["paste", 180], ["ciuperci", 60], ["sunca_praga", 60], ["crema_gatit", 50], ["mozzarella", 50], ["parmezan", 50], ["sos_rosii", 30], ["sare", 1]],
  "Paste Somon Fume": [["paste", 180], ["somon_afumat", 100], ["crema_gatit", 50], ["zucchini", 50], ["rosii", 50], ["sare", 1]],
  // sos pizza: presupus
  "Penne Arabiata": [["paste", 180], ["parmezan", 50], ["usturoi", 5], ["sos_rosii", 80], ["sare", 1]],
  // ulei de măsline: presupus
  "Spaghetti Oglio Peperoni": [["paste", 180], ["parmezan", 36], ["ulei_masline", 20], ["usturoi", 5], ["verdeata", 5], ["sare", 1]],
  "Paste Milanese": [["paste", 180], ["bacon_crud", 60], ["parmezan", 50], ["crema_gatit", 50], ["sos_rosii", 30], ["sare", 1]],
  "Penne Formaggi": [["paste", 180], ["brie", 50], ["gorgonzola", 50], ["mozzarella", 50], ["parmezan", 50], ["crema_gatit", 50], ["cascaval", 24], ["sare", 1]],
  "Penne Amatriciana": [["paste", 180], ["sos_rosii", 60], ["bacon_crud", 50], ["ardei", 50], ["ceapa", 36], ["parmezan", 30], ["sare", 1]],
  "Paste cu Broccoli și Piept de Pui": [["paste", 180], ["crema_gatit", 150], ["pui_crud", 100], ["broccoli", 100], ["sare", 1]],

  /* ── Salate & Garnituri ── */
  "Orez cu Legume": [["orez", 150], ["morcov", 16], ["ceapa", 16], ["ardei", 16], ["unt", 5], ["ulei", 5], ["verdeata", 2]],
  "Broccoli Sote": [["broccoli", 200], ["unt", 10], ["sare", 1]],
  "Ciuperci Gorgonzola": [["ciuperci", 150], ["ulei", 5], ["gorgonzola", 25], ["crema_gatit", 25], ["sare", 1]],
  "Ciuperci Sote": [["ciuperci", 150], ["unt", 10], ["usturoi", 5], ["sare", 1]],
  // PDF: ulei 100 g pentru prăjit — absorbit presupus 25 g
  "Cartofi Aurii": [["cartofi_cruzi", 200], ["ulei", 25], ["sare", 1.5]],
  "Ciuperci în Panko": [["ciuperci", 200], ["ou", 50], ["ulei", 25], ["pesmet", 10]],
  "Mămăliga": [["malai", 80], ["sare", 1.5]],
  // PDF: ulei 50 ml — absorbit presupus 20 g
  "Cartofi Rântăliți": [["cartofi_cruzi", 200], ["ceapa", 50], ["ulei", 20], ["sare", 1.5]],
  "Salată Bulgărească": [["telemea", 100], ["sunca_praga", 50], ["ou", 50], ["rosii", 50], ["castraveti", 50], ["masline", 25], ["ardei", 25]],
  "Salată Somon Fume": [["salata_verde", 100], ["somon_afumat", 100], ["castraveti", 100], ["ceapa", 60], ["lamaie", 60], ["ulei_masline", 33], ["verdeata", 5], ["sare", 1]],
  "Salată Grecească": [["telemea", 120], ["salata_verde", 100], ["rosii", 60], ["castraveti", 60], ["masline", 40], ["ceapa", 40], ["ulei_masline", 15], ["sare", 0.5]],
  "Salată Cobb": [["pui_crud", 150], ["salata_verde", 100], ["rosii", 40], ["gorgonzola", 40], ["bacon_crud", 40], ["ou", 50], ["ulei_masline", 10], ["sare", 1]],
  "Salată Tabbouleh": [["naut", 100], ["castraveti", 40], ["rosii", 40], ["lamaie", 10], ["ceapa", 30], ["ardei", 30], ["ulei", 10], ["verdeata", 10]],
  "Salata Coleslaw": [["varza", 80], ["morcov", 30], ["ceapa", 30], ["maioneza", 20], ["lamaie", 5], ["sare", 1]],
  "Salata Bucătarului": [["rosii", 130], ["mozzarella_proaspata", 60], ["telemea", 60], ["ulei_masline", 10], ["verdeata", 3]],
  "Salată Ardei Copți": [["ardei_copt", 200]],
  "Salata Asortată": [["ardei", 50], ["rosii", 50], ["castraveti", 50], ["ceapa", 50]],
  "Salată Verde": [["salata_verde", 250], ["lamaie", 10]],
  "Sfeclă Roșie": [["sfecla", 200]],
  "Salată Varză Albă": [["varza", 190], ["morcov", 10], ["otet", 5], ["sare", 1]],
  "Salată Mărături Asortate": [["sfecla", 70], ["castraveti_murati", 65], ["ardei_copt", 65]],
  "Cartofi Domnești": [["cartofi_cruzi", 150], ["cascaval", 50], ["ulei", 10], ["usturoi", 5], ["sare", 1]],
  "Cartofi Pai": [["cartofi_prajiti_palmier", 200]],
  "Cartofi Haiducești": [["cartofi_cruzi", 150], ["ceapa", 10], ["bacon_crud", 40], ["ulei", 15], ["sare", 1]],
  "Cartofi Wedges": [["cartofi_wedges", 200]],
  "Legume la Grătar": [["zucchini", 60], ["vanata", 60], ["rosii", 60], ["ceapa", 30], ["ardei", 40], ["ulei", 10], ["sare", 1]],

  /* ── Pizza ── (blatul: aluat crud 250 g) */
  "Pizza Capricciosa": [["blat_pizza_crud", 250], ["mozzarella", 120], ["sos_rosii", 72], ["rosii", 60], ["salam_porc", 60], ["sunca_praga", 60], ["cascaval", 60], ["ciuperci", 48], ["ardei", 36], ["masline", 36], ["pesto", 15]],
  // cremă de gătit: presupus
  "Pizza Carbonara": [["blat_pizza_crud", 300], ["mozzarella", 150], ["bacon_crud", 150], ["ou", 50], ["crema_gatit", 40], ["sare", 1]],
  "Pizza Americană": [["blat_pizza_crud", 250], ["mozzarella", 120], ["sos_rosii", 72], ["rosii", 60], ["sunca_praga", 60], ["cascaval", 60], ["cartofi_prajiti", 60], ["bacon_crud", 60]],
  "Pizza Formaggi": [["blat_pizza_crud", 250], ["mozzarella", 120], ["sos_rosii", 72], ["cascaval", 60], ["brie", 48], ["cheddar", 48], ["burduf", 48], ["gorgonzola", 48]],
  "Pizza Prosciutto": [["blat_pizza_crud", 250], ["sunca_praga", 120], ["mozzarella", 120], ["sos_rosii", 72], ["rosii", 60], ["cascaval", 60], ["parmezan", 36]],
  "Pizza Vegetariană": [["blat_pizza_crud", 250], ["mozzarella", 120], ["sos_rosii", 72], ["zucchini", 60], ["rosii", 60], ["cascaval", 60], ["ciuperci", 48], ["porumb", 36], ["masline", 36], ["parmezan", 36]],
  "Pizza Italian Devil": [["blat_pizza_crud", 250], ["mozzarella", 120], ["sos_rosii", 72], ["chorizo", 60], ["gorgonzola", 36], ["parmezan", 36], ["ardei", 10]],
  "Focaccia Cașcaval": [["mozzarella", 100], ["faina_aluat", 96], ["ulei", 10], ["sare", 2]],
  "Pizza Margherita": [["blat_pizza_crud", 250], ["mozzarella", 120], ["sos_rosii", 72], ["cascaval", 60], ["parmezan", 36], ["verdeata", 3]],

  /* ── Mic Dejun & Brunch ── */
  "Mic Dejun American": [["vita_tocata_cruda", 150], ["ou_prajit", 100], ["cartofi_prajiti", 100], ["castraveti_murati", 50], ["bacon_crud", 40], ["ceapa", 30], ["cheddar", 30]],
  "Mic Dejun Englezesc": [["fasole_sos", 180], ["ulei", 5], ["telemea", 100], ["ou_prajit", 100], ["rosii", 60], ["bacon_crud", 40]],
  "Omletă cu Șuncă și Cașcaval": [["ou", 150], ["rosii", 100], ["sunca_praga", 50], ["cascaval", 50], ["ulei", 5], ["sare", 1]],
  "Omletă Țărănească": [["ou", 150], ["rosii", 100], ["bacon_crud", 50], ["telemea", 50], ["ceapa", 36], ["ardei", 36], ["ulei", 5], ["sare", 1]],
  "Ochiuri la Capac": [["rosii", 100], ["ou", 100], ["cascaval", 50], ["sunca_praga", 50], ["ulei", 5], ["sare", 1]],
  "Omletă Brânză și Mărar": [["ou", 150], ["rosii", 100], ["telemea", 40], ["ulei", 5], ["verdeata", 10], ["sare", 1]],
  // pâine panini presupusă 120 g; PDF: iceberg 240 g — probabil 24 g
  "Cotto Panini": [["paine", 120], ["salata_verde", 24], ["mozzarella", 120], ["sunca_praga", 120], ["rosii", 50], ["ulei", 5], ["ulei_masline", 5], ["sare", 1]],
  // pâine panini: presupus
  "Prosciutto Panini": [["paine", 120], ["mozzarella", 120], ["rucola", 60], ["prosciutto", 60], ["rosii", 50], ["parmezan", 24], ["ulei", 5], ["ulei_masline", 5], ["sare", 1]],
  "Shakshuka": [["ou", 150], ["rosii", 100], ["ardei", 60], ["ceapa", 50], ["usturoi", 5], ["verdeata", 5], ["ulei", 5], ["sare", 1]],
  "Spanac cu Ochiuri": [["spanac", 240], ["crema_gatit", 120], ["ulei", 5], ["ou_prajit", 100], ["usturoi", 5], ["sare", 1]],
  // ulei absorbit: presupus
  "Plăcinte de Cartofi": [["cartofi_cruzi", 180], ["ulei", 25], ["telemea", 60], ["ou", 50], ["parmezan", 50], ["faina", 36], ["sare", 1]],
  "Caprese": [["mozzarella_proaspata", 120], ["rosii", 120], ["ulei_masline", 10], ["verdeata", 3], ["sare", 0.5]],
  // ulei de măsline: presupus
  "Humus": [["naut", 150], ["tahini", 36], ["ulei_masline", 20], ["usturoi", 5], ["sare", 1]],
  "Humus cu Pui": [["naut", 150], ["pui_crud", 50], ["tahini", 36], ["ulei_masline", 20], ["usturoi", 5], ["sare", 1]],
  "Humus cu Vită": [["naut", 150], ["vita_muschi_crud", 50], ["tahini", 36], ["ulei_masline", 20], ["usturoi", 5], ["sare", 1]],
  "Humus cu Muguri de Pin": [["naut", 150], ["tahini", 36], ["muguri_pin", 10], ["ulei_masline", 20], ["usturoi", 5], ["sare", 1]],
  "Humus cu Usturoi Caramelizat": [["naut", 260], ["tahini", 50], ["usturoi", 10], ["ulei_masline", 9], ["zahar", 5], ["sare", 1]],
  "Humus cu Ardei Copt": [["naut", 260], ["ardei_copt", 60], ["tahini", 50], ["ulei_masline", 9], ["usturoi", 5], ["sare", 1]],
  "Carpaccio Somon": [["somon_afumat", 150], ["rucola", 100], ["lamaie", 50], ["ulei_masline", 18], ["sare", 0.5]],
  "Carpaccio de Vită": [["vita_carpaccio", 180], ["lamaie", 60], ["rucola", 60], ["parmezan", 60], ["ulei_masline", 10]],
  "Vinete Umplute": [["vanata", 240], ["mozzarella", 100], ["rosii", 50], ["zucchini", 50], ["ardei", 50], ["ceapa", 30], ["cascaval", 20]],
  "Bruschete cu Roșii": [["paine", 150], ["rosii", 180], ["parmezan", 50], ["ulei", 5], ["ulei_masline", 10], ["verdeata", 3], ["usturoi", 5], ["sare", 1]],
  // sos tartar, iceberg: presupus
  "Bruschete Vită": [["paine", 150], ["vita_muschi_crud", 200], ["parmezan", 50], ["ulei", 10], ["zahar", 2], ["sos_tartar", 30], ["salata_verde", 20]],
  "Bruschete Mixte": [["paine", 150], ["rosii", 240], ["parmezan", 40], ["somon_afumat", 36], ["prosciutto", 36], ["ulei", 5], ["ulei_masline", 10], ["usturoi", 5], ["sare", 1]],

  /* ── Deserturi Trilogy ── */
  "Lava Cake": [["lava_cake", 150], ["inghetata", 50]],
  // făină și ulei de prăjit absorbit: presupus
  "Papanași cu Finetti": [["finetti", 120], ["branza_vaci", 96], ["faina", 50], ["ou", 50], ["zahar", 24], ["ulei", 20]],
  "Papanași cu Dulceață": [["smantana", 120], ["branza_vaci", 96], ["dulceata", 96], ["faina", 50], ["ou", 50], ["zahar", 10], ["ulei", 20]],
  // făină, zahăr, topping: presupus
  "Clătite cu Finetti": [["ou", 100], ["lapte", 60], ["faina", 50], ["zahar", 10], ["ulei", 5], ["finetti", 40], ["topping_ciocolata", 15]],
  "Clătite cu Finetti și Banane": [["clatita", 100], ["banana", 50], ["finetti", 50], ["inghetata", 50], ["topping_ciocolata", 15]],
  "Clătite cu Nucă și Miere": [["clatita", 100], ["miere", 60], ["nuci", 60]],
  "Clătite cu Dulceață": [["clatita", 100], ["dulceata", 60]],
  "Crepes Suzette": [["clatita", 100], ["suc_portocale", 30], ["coniac", 20], ["unt", 10], ["zahar", 10], ["lamaie", 5]],
  "Gelatto": [["inghetata", 200]],

  /* ── Extra & Toppings ── */
  "Brânză": [["telemea", 120]],
  "Șuncă": [["sunca_praga", 60]],
  "Mozzarella": [["mozzarella", 60]],
  "Rucola": [["rucola", 60]],
  "Salam": [["salam_porc", 60]],
  "Prosciutto": [["prosciutto", 60]],
  "Porumb": [["porumb", 60]],
  // presupus: sos Rose Trilogy
  "Sos Extra": [["sos_rose", 60]],
  "Ciuperci": [["ciuperci", 60]],
  "Miere Plic": [["miere", 15]],
  "Sos Gorgonzola": [["crema_gatit", 40], ["gorgonzola", 20]],
  "Pâine": [["paine", 50]],
};

export type Nutrients = {
  kcal: number;
  kj: number;
  fat: number;
  satFat: number;
  carbs: number;
  sugars: number;
  protein: number;
  salt: number;
};

export type NutritionRow = {
  name: string;
  weight: string;
  vegetarian: boolean;
  portion: Nutrients;
  per100: Nutrients;
};

export type NutritionCategory = {
  id: string;
  label: string;
  items: NutritionRow[];
};

function totals(recipe: Recipe, scale: number): Nutrients {
  let fat = 0, satFat = 0, carbs = 0, sugars = 0, protein = 0, salt = 0;
  for (const [ing, grams] of recipe) {
    const [f, s, c, z, p, sa] = I[ing] as Ingredient;
    const k = (grams / 100) * scale;
    fat += f * k; satFat += s * k; carbs += c * k; sugars += z * k; protein += p * k; salt += sa * k;
  }
  const kcal = fat * 9 + carbs * 4 + protein * 4;
  return { kcal, kj: kcal * 4.184, fat, satFat, carbs, sugars, protein, salt };
}

// Greutatea porției în farfurie, după gătire
function servedGrams(recipe: Recipe) {
  return recipe.reduce((sum, [ing, g]) => sum + g * ((I[ing] as Ingredient)[6] ?? 1), 0);
}

export function getNutritionData(): NutritionCategory[] {
  return menuData
    .map((cat) => ({
      id: cat.id,
      label: cat.label,
      items: cat.items.flatMap((item) => {
        const recipe = RECIPES[item.name];
        if (!recipe) return [];
        return [{
          name: item.name,
          weight: item.weight,
          vegetarian: !!item.tags?.includes("vegetarian"),
          portion: totals(recipe, 1),
          per100: totals(recipe, 100 / servedGrams(recipe)),
        }];
      }),
    }))
    .filter((cat) => cat.items.length > 0);
}

