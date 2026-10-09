import { menuData } from "./menu-data";

/*
 * Valori nutriționale ESTIMATIVE, calculate din rețete aproximative.
 *
 * Fiecare preparat din menu-data.ts are mai jos o rețetă estimată: ingredientele
 * din descriere, cu gramaje alese astfel încât totalul să corespundă gramajului
 * din meniu (la preparatele cu os — coaste, ciolan — se socotește doar partea comestibilă).
 * Valorile per 100 g ale ingredientelor sunt medii din tabele publice de compoziție
 * a alimentelor, pentru starea în care ajung în farfurie (gătit, prăjit, fiert).
 *
 * Energia se calculează din macronutrienți cu factorii UE (Reg. 1169/2011):
 * grăsimi 9 kcal/g, glucide 4 kcal/g, proteine 4 kcal/g.
 *
 * Ca să corectezi un preparat: modifică gramajele din RECIPES. Ca să adaugi unul nou:
 * adaugă o intrare cu exact același nume ca în menu-data.ts.
 */

// [grăsimi, din care saturate, glucide (fără fibre), din care zaharuri, proteine, sare] per 100 g
type Per100 = [number, number, number, number, number, number];

const I = {
  // carne & pește (gătite)
  pui_gratar: [3.6, 1.0, 0, 0, 31, 0.6],
  pui_crispy: [13, 2.0, 15, 1.0, 20, 1.2],
  snitel_pui: [12, 1.8, 13, 0.8, 22, 1.0],
  snitel_porc: [15, 3.5, 12, 0.6, 22, 1.0],
  ceafa_porc: [19, 7, 0, 0, 25, 0.6],
  cotlet_porc: [13, 4.5, 0, 0, 28, 0.5],
  carne_porc: [15, 5.5, 0, 0, 25, 0.6],
  coaste_porc: [22, 8, 0, 0, 22, 0.8],
  ciolan_afumat: [17, 6, 0, 0, 24, 2.2],
  ficat_pui: [6.5, 2.1, 1, 0, 25, 0.5],
  vita_muschi: [8, 3.2, 0, 0, 29, 0.4],
  vita_cruda: [5, 2, 0, 0, 22, 0.15],
  vita_burger: [17, 6.8, 0, 0, 25, 0.6],
  bacon: [35, 12.5, 1, 0, 20, 3.0],
  carnati_afumati: [26, 9.5, 2, 1, 14, 2.4],
  sunca_praga: [4.5, 1.5, 1.5, 1, 17, 2.3],
  salam_porc: [35, 13, 1.5, 1, 20, 4.0],
  chorizo: [38, 14, 2, 1, 24, 4.0],
  prosciutto: [15, 5.5, 0, 0, 28, 5.5],
  pasta_jumari: [50, 18, 3, 0.5, 22, 1.5],
  somon: [12.5, 2.5, 0, 0, 23, 0.4],
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
  sos_sweet_chilli: [0.2, 0, 49, 45, 0.4, 2.5],
  sos_soia: [0.1, 0, 5, 0.5, 8, 14.5],
  sos_rosii: [0.7, 0.1, 8, 5, 1.6, 0.9],
  pasta_tomate: [0.5, 0.1, 19, 12, 4.3, 0.1],
  sos_brun: [2.5, 1, 7, 1, 2, 1.3],
  pesto: [45, 7, 5, 1.5, 5, 2.5],
  tahini: [54, 7.5, 21, 0.5, 17, 0.1],
  // cereale, panificație, garnituri
  paste: [0.9, 0.2, 30.5, 0.6, 5.8, 0.3],
  orez: [0.3, 0.1, 28, 0.1, 2.7, 0.3],
  mamaliga: [0.4, 0.1, 15, 0.2, 1.6, 0.5],
  cartofi_prajiti: [15, 2.3, 37, 0.3, 3.4, 0.6],
  cartofi_prajiti_palmier: [15, 7, 37, 0.3, 3.4, 0.6],
  cartofi_wedges: [10, 4.5, 28, 0.5, 3, 0.6],
  cartofi_fierti: [0.1, 0, 18, 0.9, 1.9, 0.3],
  paine: [3.2, 0.7, 49, 5, 9, 1.2],
  lipie: [1.2, 0.3, 56, 1.5, 9, 1.3],
  chifla: [4.5, 1.2, 50, 6, 9, 1.2],
  blat_pizza: [3.5, 0.5, 50, 2.5, 8.5, 1.2],
  pesmet: [5, 1, 72, 6, 13, 1.2],
  faina: [1, 0.2, 76, 0.3, 10, 0],
  crutoane: [14, 2, 63, 4, 11, 1.6],
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
  papanasi: [16, 3, 33, 9, 11, 0.4],
  lava_cake: [22, 13, 40, 30, 6, 0.3],
  finetti: [31, 10, 57, 56, 6, 0.1],
  topping_ciocolata: [1, 0.5, 65, 55, 2, 0.2],
  dulceata: [0.1, 0, 62, 55, 0.4, 0],
  miere: [0, 0, 82, 82, 0.3, 0],
  zahar: [0, 0, 100, 100, 0, 0],
  coniac: [0, 0, 0, 0, 0, 0],
  vin: [0, 0, 2.6, 1, 0.1, 0],
  sare: [0, 0, 0, 0, 0, 100],
} satisfies Record<string, Per100>;

type Ing = keyof typeof I;
type Recipe = [Ing, number][];

const RECIPES: Record<string, Recipe> = {
  /* ── Gustul Trilogy ── */
  "Pui Crispy Trilogy": [["pui_crispy", 180], ["cartofi_prajiti", 100], ["sos_rose", 30], ["salata_verde", 40]],
  "Coaste Porc Trilogy": [["coaste_porc", 380], ["cartofi_prajiti", 150], ["salata_verde", 50], ["sos_sweet_chilli", 40], ["sare", 1]],
  "Salată Trilogy cu Pui": [["pui_gratar", 100], ["salata_verde", 90], ["rosii", 50], ["ou", 30], ["lipie", 20], ["masline", 10]],
  "Omletă Trilogy": [["ou", 150], ["rosii", 40], ["bacon", 30], ["brie", 20], ["ulei", 5], ["unt", 5], ["sare", 1]],
  "Penne Trilogy al Forno": [["paste", 170], ["crema_gatit", 50], ["bacon", 30], ["gorgonzola", 15], ["ou", 10], ["parmezan", 10], ["sos_rosii", 15]],
  "Pizza Trilogy": [["blat_pizza", 250], ["mozzarella", 80], ["sos_rosii", 60], ["cascaval", 40], ["rosii", 40], ["sunca_praga", 35], ["salam_porc", 30], ["porumb", 20], ["bacon", 25], ["ardei", 20]],
  "Burger Trilogy": [["chifla", 80], ["vita_burger", 150], ["sos_rose", 25], ["ceapa", 15], ["bacon", 25], ["rosii", 25], ["cheddar", 20], ["salata_verde", 10], ["castraveti_murati", 10]],
  "Paste Trilogy": [["paste", 190], ["crema_gatit", 60], ["bacon", 30], ["parmezan", 10], ["gorgonzola", 10]],
  "Bruschete Trilogy": [["paine", 150], ["pasta_jumari", 70], ["telemea", 50], ["ceapa", 30]],
  "Clătite cu Gutui": [["clatita", 180], ["dulceata", 60], ["inghetata", 60]],

  /* ── Hituri de Bucătărie ── */
  "Tigaie Picantă Pui": [["pui_gratar", 160], ["zucchini", 50], ["ardei", 40], ["ceapa", 30], ["vanata", 40], ["sos_sweet_chilli", 20], ["sos_soia", 5], ["ulei", 10]],
  "Burger de Pui": [["chifla", 70], ["snitel_pui", 110], ["cartofi_prajiti", 70], ["salata_verde", 10], ["sos_rose", 20], ["bacon", 20], ["rosii", 20], ["cheddar", 20], ["castraveti_murati", 10]],
  "Șnitel Parmigiana": [["snitel_pui", 150], ["mozzarella", 40], ["sos_rosii", 40], ["parmezan", 20]],
  "Paste Supreme": [["paste", 185], ["crema_gatit", 60], ["bacon", 30], ["parmezan", 10], ["gorgonzola", 10], ["ulei_masline", 5]],
  "Cartofi Gratinați": [["cartofi_fierti", 130], ["lapte", 30], ["mozzarella", 30], ["ou", 5], ["unt", 5]],
  "Salată Caesar": [["salata_verde", 80], ["pui_gratar", 70], ["parmezan", 10], ["maioneza", 20], ["crutoane", 15], ["lamaie", 3], ["ansoa", 2]],

  /* ── Gusturi Românești ── */
  "Ciulama Ardelenească": [["pui_gratar", 140], ["mamaliga", 120], ["ciuperci", 40], ["crema_gatit", 45], ["usturoi", 3], ["sare", 1]],
  "Ficăței în Sos": [["ficat_pui", 200], ["unt", 15], ["sos_brun", 80], ["usturoi", 5]],
  "Escalop Ardelenesc": [["cotlet_porc", 170], ["crema_gatit", 70], ["ciuperci", 55], ["usturoi", 5]],
  "Ceafă Haiducească": [["ceafa_porc", 200], ["faina", 5], ["ciuperci", 60], ["unt", 10], ["sos_brun", 70], ["usturoi", 5]],
  "Ceafă la Cuptor cu Cartofi și Rozmarin": [["ceafa_porc", 160], ["cartofi_wedges", 140]],
  "Șnitel de Porc": [["snitel_porc", 200]],
  "Mix Grill 1 Persoană": [["cotlet_porc", 100], ["ceafa_porc", 100], ["pui_gratar", 100], ["carnati_afumati", 80], ["cartofi_prajiti", 140], ["bacon", 30]],
  "Mix Grill 2 Persoane": [["cotlet_porc", 200], ["ceafa_porc", 200], ["pui_gratar", 200], ["carnati_afumati", 160], ["cartofi_prajiti", 280], ["bacon", 60]],
  "Mămăligă în Straturi": [["mamaliga", 170], ["smantana", 50], ["bacon", 25], ["carnati_afumati", 20], ["telemea", 30], ["unt", 5]],
  "Cașcaval Pane": [["cascaval", 180], ["ou", 15], ["pesmet", 30], ["ulei", 25]],
  "Mămăligă cu Brânză și Smântână": [["mamaliga", 150], ["smantana", 50], ["telemea", 40], ["unt", 10]],

  /* ── Arome de Foc Trilogy ── */
  "Piept de Pui la Grătar": [["pui_gratar", 200]],
  "Ceafă la Grătar": [["ceafa_porc", 245], ["ulei", 5]],
  "Cotlet la Grătar": [["cotlet_porc", 245], ["ulei", 5]],
  "Mușchi Vită la Grătar": [["vita_muschi", 192], ["unt", 8]],
  "Burger Suprem": [["chifla", 80], ["vita_burger", 130], ["cartofi_prajiti", 50], ["ciuperci", 20], ["crema_gatit", 15], ["sos_rose", 15], ["ou_prajit", 25], ["bacon", 20], ["gorgonzola", 12], ["cheddar", 13]],
  "Bucket Picant & Crocant": [["pui_crispy", 200], ["cartofi_prajiti", 120], ["sos_rose", 30]],
  "Polo à la King": [["pui_gratar", 140], ["crema_gatit", 70], ["broccoli", 40], ["ciuperci", 30], ["mozzarella", 15], ["gorgonzola", 10], ["usturoi", 3], ["lipie", 42]],
  "Piept de Pui Suprem": [["pui_gratar", 200], ["hribi", 60], ["ulei_masline", 10], ["gorgonzola", 30]],
  "Piept de Pui Gorgonzola": [["pui_gratar", 190], ["crema_gatit", 80], ["gorgonzola", 30]],
  "Șnitel Pui în Crustă": [["pui_gratar", 135], ["cascaval", 40], ["ou", 20], ["ulei", 5]],
  "Shaorma la Farfurie": [["pui_gratar", 155], ["ulei", 5], ["cartofi_prajiti", 110], ["sos_rose", 40], ["castraveti_murati", 20], ["varza", 30], ["lipie", 50], ["rosii", 20], ["salata_verde", 20]],
  "Șnitel de Pui": [["snitel_pui", 200]],
  "Cotoletă a la Bolognese": [["snitel_porc", 170], ["crema_gatit", 60], ["cascaval", 40], ["sos_rosii", 40], ["sunca_praga", 40]],
  "Tigaie Picantă Vită": [["vita_muschi", 160], ["zucchini", 50], ["ardei", 35], ["ceapa", 30], ["vanata", 40], ["sos_soia", 5], ["sos_sweet_chilli", 20], ["ulei", 10]],
  "Tochitură cu Mămăliguță": [["carne_porc", 70], ["bacon", 20], ["mamaliga", 90], ["telemea", 25], ["carnati_afumati", 20], ["ou_prajit", 25]],
  "Pomana Porcului": [["carne_porc", 100], ["bacon", 20], ["mamaliga", 110], ["untura", 10], ["usturoi", 5], ["vin", 5]],
  "Ciolan cu Iahnie": [["ciolan_afumat", 300], ["fasole", 300], ["ceapa", 40], ["ardei", 30], ["sos_rosii", 60], ["pasta_tomate", 15], ["morcov", 30], ["ulei", 15], ["sare", 2]],
  "Mușchi Suprem": [["vita_muschi", 180], ["crema_gatit", 60], ["ulei_masline", 5], ["hribi", 35], ["gorgonzola", 20]],
  "Mușchi Vită în Sos de Piper Verde": [["vita_muschi", 200], ["crema_gatit", 100]],
  "Mușchi în Sos Brun": [["vita_muschi", 180], ["sos_brun", 70]],
  "Mușchi Vită Gorgonzola": [["vita_muschi", 170], ["crema_gatit", 50], ["gorgonzola", 30]],
  "Mușchi de Vită în Coniac": [["vita_muschi", 180], ["unt", 12], ["coniac", 8]],
  "Șnitel Vienez de Vită": [["vita_muschi", 105], ["ou", 12], ["pesmet", 18], ["ulei", 15]],
  "Somon Lemon": [["somon", 180], ["rosii", 50], ["usturoi", 5], ["ulei_masline", 5]],
  "Somon Grill": [["somon", 200]],

  /* ── Paste ── */
  "Carbonara Sos Alb": [["paste", 180], ["bacon", 35], ["parmezan", 15], ["ou", 15], ["crema_gatit", 55]],
  "Carbonara Clasice": [["paste", 210], ["bacon", 40], ["parmezan", 20], ["ou", 15], ["galbenus", 15]],
  "Penne al Forno Sos Alb": [["paste", 170], ["sunca_praga", 35], ["ciuperci", 30], ["crema_gatit", 40], ["mozzarella", 15], ["parmezan", 10]],
  "Penne al Forno": [["paste", 165], ["ciuperci", 25], ["sunca_praga", 30], ["crema_gatit", 30], ["mozzarella", 15], ["parmezan", 10], ["sos_rosii", 25]],
  "Paste Somon Fume": [["paste", 170], ["somon_afumat", 40], ["crema_gatit", 50], ["zucchini", 25], ["rosii", 15]],
  "Penne Arabiata": [["paste", 200], ["parmezan", 10], ["usturoi", 5], ["sos_rosii", 75], ["ulei_masline", 10]],
  "Spaghetti Oglio Peperoni": [["paste", 260], ["parmezan", 15], ["ulei_masline", 20], ["usturoi", 5]],
  "Paste Milanese": [["paste", 180], ["bacon", 30], ["parmezan", 10], ["crema_gatit", 45], ["sos_rosii", 35]],
  "Penne Formaggi": [["paste", 170], ["brie", 15], ["gorgonzola", 15], ["mozzarella", 15], ["parmezan", 10], ["crema_gatit", 60], ["cascaval", 15]],
  "Penne Amatriciana": [["paste", 190], ["sos_rosii", 50], ["bacon", 35], ["ardei", 15], ["parmezan", 10]],
  "Paste cu Broccoli și Piept de Pui": [["paste", 220], ["crema_gatit", 80], ["pui_gratar", 90], ["broccoli", 60]],

  /* ── Salate & Garnituri ── */
  "Orez cu Legume": [["orez", 160], ["morcov", 15], ["ceapa", 10], ["ardei", 10], ["unt", 5]],
  "Broccoli Sote": [["broccoli", 189], ["unt", 10], ["sare", 1]],
  "Ciuperci Gorgonzola": [["ciuperci", 130], ["ulei", 5], ["gorgonzola", 25], ["crema_gatit", 40]],
  "Ciuperci Sote": [["ciuperci", 184], ["unt", 10], ["usturoi", 5], ["sare", 1]],
  "Cartofi Aurii": [["cartofi_fierti", 280], ["ulei", 18], ["sare", 2]],
  "Ciuperci în Panko": [["ciuperci", 160], ["ou", 25], ["ulei", 25], ["pesmet", 40]],
  "Mămăliga": [["mamaliga", 200]],
  "Cartofi Rântăliți": [["cartofi_fierti", 200], ["ceapa", 30], ["ulei", 18], ["sare", 2]],
  "Salată Bulgărească": [["telemea", 60], ["sunca_praga", 40], ["ou", 40], ["rosii", 60], ["castraveti", 50], ["masline", 15], ["ardei", 35]],
  "Salată Somon Fume": [["salata_verde", 150], ["somon_afumat", 70], ["castraveti", 50], ["ceapa", 20], ["lamaie", 10]],
  "Salată Grecească": [["telemea", 70], ["salata_verde", 60], ["rosii", 70], ["castraveti", 55], ["masline", 15], ["ceapa", 15], ["ulei_masline", 15]],
  "Salată Cobb": [["pui_gratar", 90], ["salata_verde", 90], ["rosii", 60], ["gorgonzola", 25], ["bacon", 25], ["ou", 45], ["ulei_masline", 15]],
  "Salată Tabbouleh": [["naut", 80], ["castraveti", 35], ["rosii", 35], ["lamaie", 10], ["ceapa", 15], ["ardei", 15], ["verdeata", 10]],
  "Salata Coleslaw": [["varza", 90], ["morcov", 25], ["ceapa", 5], ["maioneza", 25], ["lamaie", 5]],
  "Salata Bucătarului": [["rosii", 130], ["mozzarella_proaspata", 60], ["telemea", 40], ["ulei_masline", 15], ["verdeata", 5]],
  "Salată Ardei Copți": [["ardei_copt", 200]],
  "Salata Asortată": [["ardei", 50], ["rosii", 70], ["castraveti", 60], ["ceapa", 20]],
  "Salată Verde": [["salata_verde", 240], ["lamaie", 10]],
  "Sfeclă Roșie": [["sfecla", 200]],
  "Salată Varză Albă": [["varza", 170], ["morcov", 25], ["otet", 5]],
  "Salată Mărături Asortate": [["sfecla", 70], ["castraveti_murati", 70], ["ardei_copt", 60]],
  "Cartofi Domnești": [["cartofi_fierti", 150], ["cascaval", 40], ["usturoi", 5], ["unt", 5]],
  "Cartofi Pai": [["cartofi_prajiti_palmier", 200]],
  "Cartofi Haiducești": [["cartofi_fierti", 145], ["ceapa", 20], ["bacon", 20], ["ulei", 13], ["sare", 2]],
  "Cartofi Wedges": [["cartofi_wedges", 200]],
  "Legume la Grătar": [["zucchini", 70], ["vanata", 70], ["rosii", 40], ["ceapa", 25], ["ardei", 35], ["ulei", 10]],

  /* ── Pizza ── */
  "Pizza Capricciosa": [["blat_pizza", 240], ["mozzarella", 70], ["sos_rosii", 55], ["rosii", 30], ["salam_porc", 25], ["sunca_praga", 30], ["cascaval", 30], ["ciuperci", 30], ["ardei", 15], ["masline", 10], ["pesto", 15]],
  "Pizza Carbonara": [["blat_pizza", 240], ["mozzarella", 90], ["bacon", 50], ["ou", 30], ["crema_gatit", 40]],
  "Pizza Americană": [["blat_pizza", 230], ["mozzarella", 70], ["sos_rosii", 50], ["rosii", 25], ["sunca_praga", 35], ["cascaval", 35], ["cartofi_prajiti", 60], ["bacon", 45]],
  "Pizza Formaggi": [["blat_pizza", 250], ["mozzarella", 80], ["sos_rosii", 60], ["cascaval", 45], ["brie", 40], ["cheddar", 40], ["burduf", 40], ["gorgonzola", 45]],
  "Pizza Prosciutto": [["blat_pizza", 240], ["sunca_praga", 80], ["mozzarella", 80], ["sos_rosii", 55], ["rosii", 40], ["cascaval", 40], ["parmezan", 15]],
  "Pizza Vegetariană": [["blat_pizza", 240], ["mozzarella", 70], ["sos_rosii", 55], ["zucchini", 40], ["rosii", 35], ["cascaval", 35], ["ciuperci", 35], ["porumb", 20], ["masline", 10], ["parmezan", 10]],
  "Pizza Italian Devil": [["blat_pizza", 250], ["mozzarella", 110], ["sos_rosii", 65], ["chorizo", 80], ["gorgonzola", 45], ["parmezan", 20], ["ardei", 30]],
  "Focaccia Cașcaval": [["blat_pizza", 160], ["mozzarella", 80], ["ulei", 10]],
  "Pizza Margherita": [["blat_pizza", 260], ["mozzarella", 120], ["sos_rosii", 80], ["cascaval", 70], ["parmezan", 15], ["verdeata", 5]],

  /* ── Mic Dejun & Brunch ── */
  "Mic Dejun American": [["vita_burger", 100], ["ou_prajit", 50], ["cartofi_prajiti", 120], ["castraveti_murati", 20], ["bacon", 30], ["ceapa", 15], ["cheddar", 15]],
  "Mic Dejun Englezesc": [["fasole_sos", 120], ["telemea", 50], ["ou_prajit", 100], ["rosii", 50], ["bacon", 30]],
  "Omletă cu Șuncă și Cașcaval": [["ou", 150], ["rosii", 30], ["sunca_praga", 35], ["cascaval", 30], ["ulei", 5]],
  "Omletă Țărănească": [["ou", 130], ["rosii", 25], ["bacon", 25], ["telemea", 25], ["ceapa", 10], ["ardei", 10], ["ulei", 5]],
  "Ochiuri la Capac": [["rosii", 40], ["ou", 110], ["cascaval", 25], ["sunca_praga", 25]],
  "Omletă Brânză și Mărar": [["ou", 140], ["rosii", 25], ["telemea", 45], ["verdeata", 5], ["ulei", 5]],
  "Cotto Panini": [["paine", 120], ["salata_verde", 20], ["mozzarella", 40], ["sunca_praga", 40], ["rosii", 25], ["ulei_masline", 5]],
  "Prosciutto Panini": [["paine", 120], ["mozzarella", 40], ["rucola", 15], ["prosciutto", 35], ["rosii", 25], ["parmezan", 10], ["ulei_masline", 5]],
  "Shakshuka": [["ou", 110], ["rosii", 120], ["ardei", 35], ["ceapa", 25], ["usturoi", 5], ["ulei", 5], ["sare", 1]],
  "Spanac cu Ochiuri": [["spanac", 170], ["crema_gatit", 50], ["ou_prajit", 75], ["usturoi", 5], ["sare", 1]],
  "Plăcinte de Cartofi": [["cartofi_fierti", 70], ["telemea", 30], ["ou", 20], ["parmezan", 10], ["faina", 40], ["ulei", 30]],
  "Caprese": [["mozzarella_proaspata", 100], ["rosii", 85], ["ulei_masline", 12], ["verdeata", 3]],
  "Humus": [["naut", 180], ["tahini", 35], ["ulei_masline", 30], ["usturoi", 5], ["lamaie", 10]],
  "Humus cu Pui": [["naut", 130], ["pui_gratar", 60], ["tahini", 30], ["ulei_masline", 25], ["usturoi", 5], ["lamaie", 10]],
  "Humus cu Vită": [["naut", 130], ["vita_muschi", 60], ["tahini", 30], ["ulei_masline", 25], ["usturoi", 5], ["lamaie", 10]],
  "Humus cu Muguri de Pin": [["naut", 165], ["tahini", 35], ["muguri_pin", 20], ["ulei_masline", 30], ["lamaie", 10]],
  "Humus cu Usturoi Caramelizat": [["naut", 230], ["tahini", 45], ["usturoi", 25], ["ulei_masline", 40], ["zahar", 10]],
  "Humus cu Ardei Copt": [["naut", 200], ["ardei_copt", 70], ["tahini", 40], ["ulei_masline", 35], ["usturoi", 5]],
  "Carpaccio Somon": [["somon_afumat", 150], ["rucola", 95], ["lamaie", 30], ["ulei_masline", 25]],
  "Carpaccio de Vită": [["vita_cruda", 120], ["lamaie", 10], ["rucola", 80], ["parmezan", 20], ["ulei_masline", 20]],
  "Vinete Umplute": [["vanata", 90], ["mozzarella", 30], ["rosii", 20], ["zucchini", 20], ["ardei", 10], ["ceapa", 10], ["cascaval", 20]],
  "Bruschete cu Roșii": [["paine", 140], ["rosii", 110], ["parmezan", 20], ["verdeata", 5], ["ulei_masline", 20], ["usturoi", 5]],
  "Bruschete Vită": [["paine", 130], ["vita_muschi", 90], ["parmezan", 20], ["sos_tartar", 30], ["salata_verde", 30]],
  "Bruschete Mixte": [["paine", 140], ["rosii", 60], ["parmezan", 15], ["somon_afumat", 35], ["prosciutto", 30], ["ulei_masline", 15], ["usturoi", 5]],

  /* ── Deserturi Trilogy ── */
  "Lava Cake": [["lava_cake", 120], ["inghetata", 80]],
  "Papanași cu Finetti": [["papanasi", 235], ["finetti", 60], ["zahar", 5]],
  "Papanași cu Dulceață": [["papanasi", 200], ["smantana", 50], ["dulceata", 45], ["zahar", 5]],
  "Clătite cu Finetti": [["clatita", 140], ["finetti", 45], ["topping_ciocolata", 15]],
  "Clătite cu Finetti și Banane": [["clatita", 120], ["banana", 50], ["finetti", 35], ["inghetata", 35], ["topping_ciocolata", 10]],
  "Clătite cu Nucă și Miere": [["clatita", 140], ["miere", 30], ["nuci", 30]],
  "Clătite cu Dulceață": [["clatita", 140], ["dulceata", 60]],
  "Crepes Suzette": [["clatita", 100], ["suc_portocale", 25], ["coniac", 5], ["unt", 10], ["zahar", 10]],
  "Gelatto": [["inghetata", 200]],

  /* ── Extra & Toppings ── */
  "Brânză": [["telemea", 120]],
  "Șuncă": [["sunca_praga", 60]],
  "Mozzarella": [["mozzarella", 60]],
  "Rucola": [["rucola", 60]],
  "Salam": [["salam_porc", 60]],
  "Prosciutto": [["prosciutto", 60]],
  "Porumb": [["porumb", 60]],
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
    const [f, s, c, z, p, sa] = I[ing];
    const k = (grams / 100) * scale;
    fat += f * k; satFat += s * k; carbs += c * k; sugars += z * k; protein += p * k; salt += sa * k;
  }
  const kcal = fat * 9 + carbs * 4 + protein * 4;
  return { kcal, kj: kcal * 4.184, fat, satFat, carbs, sugars, protein, salt };
}

export function getNutritionData(): NutritionCategory[] {
  return menuData
    .map((cat) => ({
      id: cat.id,
      label: cat.label,
      items: cat.items.flatMap((item) => {
        const recipe = RECIPES[item.name];
        if (!recipe) return [];
        const grams = recipe.reduce((sum, [, g]) => sum + g, 0);
        return [{
          name: item.name,
          weight: item.weight,
          vegetarian: !!item.tags?.includes("vegetarian"),
          portion: totals(recipe, 1),
          per100: totals(recipe, 100 / grams),
        }];
      }),
    }))
    .filter((cat) => cat.items.length > 0);
}
