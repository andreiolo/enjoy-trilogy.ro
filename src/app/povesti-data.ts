export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Source = { label: string; url: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  publishedDate: string;
  intro: string;
  sections: ArticleSection[];
  closing?: string;
  sources: Source[];
};

export const povestiData: Article[] = [
  {
    slug: "trecatorile-din-jurul-vulcanului",
    title: "Trecătorile din jurul Vulcanului: un ghid rapid prin munții din jur",
    excerpt:
      "Pasul Vâlcan, Straja, Parâng, Dealu Babii și drumul spre Retezat — ce găsești în fiecare direcție, la ce altitudine și cum ajungi acolo.",
    coverImage: "/images/povesti-trecatori.jpg",
    publishedDate: "2026-09-12",
    intro:
      "Vulcanul stă chiar la poalele munților, iar asta înseamnă că, indiferent în ce direcție pornești din oraș, ajungi repede la altitudine. Iată ce găsești în fiecare parte.",
    sections: [
      {
        heading: "Pasul Vâlcan (1.621 m), poarta dintre Ardeal și Oltenia",
        paragraphs: [
          "Cea mai cunoscută trecătoare din zonă. Din Vulcan, drumul județean DJ664 urcă 8 km, asfaltat, până la mica stațiune Pasul Vâlcan, chiar pe granița dintre județele Hunedoara și Gorj.",
          "De aici, drumul continuă spre Schela, în Gorj, încă vreo 10 km, dar rămâne neasfaltat și greu practicabil cu mașina obișnuită. Cei care vor să treacă dincolo, în Oltenia, pe aici, au nevoie de mașină pregătită pentru drum de munte.",
          "E un loc cu istorie grea, despre care vine un articol separat, dar și o belvedere bună pentru popas.",
        ],
      },
      {
        heading: "Straja, cea mai lungă pârtie din România",
        paragraphs: [
          "La aproximativ 8 km de Lupeni, stațiunea Straja urcă până la Vârful Straja (1.868 m), accesibil cu telegondola direct din Lupeni.",
          "Domeniul schiabil are 26 km de pârtii, iar cea mai lungă dintre ele, 8,1 km, de la vârf până aproape de bază, este cea mai lungă pârtie de schi din țară. Chiar și în afara sezonului de schi, drumul cu telegondola merită doar pentru panoramă.",
        ],
      },
      {
        heading: "Parâng, două fețe: una aproape, una departe",
        paragraphs: [
          "Aici merită o precizare, ca să nu se creeze confuzie. Stațiunea Parâng e la doar 5 km de Petroșani, cu telescaun care urcă de la 950 m la 1.650 m, practic la ușă. De acolo pornesc trasee spre Vârful Parângul Mare (2.519 m), cel mai înalt din masiv.",
          "Rânca, în schimb, cealaltă stațiune cunoscută din Parâng, de pe Transalpina, e mult mai departe, în județul Gorj, la peste 1.600 m altitudine, lângă Pasul Urdele (2.145 m), cel mai înalt punct rutier din România. Dacă cineva zice \"mergem în Parâng\", bine e să întrebi care dintre cele două.",
        ],
      },
      {
        heading: "Dealu Babii, plimbarea de după-amiază",
        paragraphs: [
          "E chiar o localitate componentă a Vulcanului, în partea de nord a orașului, pe drumul spre Merișor. Nu e vârf de munte, ci mai degrabă zona de deal de lângă oraș, bună pentru o plimbare scurtă, fără echipament de munte.",
        ],
      },
      {
        heading: "Drumul de munte dintre Merișor și Vulcan, frumos, dar sezonier",
        paragraphs: [
          "Drumul județean care leagă Merișor de Vulcan, prin zona Dealu Babii, se închide de obicei iarna pe porțiunea de munte (sezonul rece, tipic mijlocul lui noiembrie până la sfârșitul lui martie, dar variază de la an la an). Verificați starea lui înainte de drum dacă plecați în sezonul rece.",
        ],
      },
      {
        heading: "Câmpu lui Neag, poarta spre Retezat",
        paragraphs: [
          "Mai spre vest, trecând prin Lupeni și Uricani, ajungi la Câmpu lui Neag, ultimul sat înainte de Parcul Național Retezat, cunoscut și ca satul momârlanilor de la poalele muntelui.",
          "Drumul asfaltat se oprește aici. Mai departe, spre Cabana Buta, e drum forestier, recomandat cu mașină 4x4, ultimii 500 m fiind destul de abrupți. Biletul de intrare în parc costă 10 lei și e valabil 7 zile.",
        ],
      },
    ],
    closing:
      "După o tură pe oricare din aceste trasee, o masă caldă face toată diferența. La coborâre în Vulcan, Restaurant Trilogy e chiar în drum, cu porții generoase și mâncare gătită zilnic — genul potrivit exact pentru o foame de după munte.",
    sources: [
      { label: "Pasul Vâlcan — Wikipedia", url: "https://ro.wikipedia.org/wiki/Pasul_V%C3%A2lcan" },
      { label: "Pasul Valcan, cota 1621m — viziteaza-romania.com", url: "https://viziteaza-romania.com/zona-transilvaniei/judetul-hunedoara/402-pasul-valcan-transvalcan-jud-hunedoara-2022.html" },
      { label: "Domeniul Schiabil Straja — skistraja.ro", url: "https://skistraja.ro/domeniul-schiabil-straja/" },
      { label: "Stațiunea Parâng — itinerant.ro", url: "https://www.itinerant.ro/statiuni/statiunea-parang" },
      { label: "Stațiunea Rânca — itinerant.ro", url: "https://www.itinerant.ro/statiuni/statiunea-ranca" },
      { label: "Munții Parâng — Wikipedia", url: "https://ro.wikipedia.org/wiki/Mun%C8%9Bii_Par%C3%A2ng" },
      { label: "Dealu Babii, Hunedoara — Wikipedia", url: "https://ro.wikipedia.org/wiki/Dealu_Babii,_Hunedoara" },
      { label: "Drumuri închise iarna în Hunedoara — adevarul.ro", url: "https://adevarul.ro/stil-de-viata/calatorii/judetul-unde-27-de-drumuri-raman-inchise-iarna-2401975.html" },
      { label: "Câmpu lui Neag — descoperimromania.ro", url: "https://www.descoperimromania.ro/campu-lui-neag/" },
      { label: "Acces Parcul Național Retezat — retezat.ro", url: "https://www.retezat.ro/puncte-acces-in-parc" },
    ],
  },
];
