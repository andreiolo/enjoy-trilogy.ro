export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  image?: { src: string; alt: string };
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
  {
    slug: "povestea-pasului-valcan-batalii-si-momarlani",
    title: "Povestea Pasului Vâlcan: bătălii și Momârlani",
    excerpt:
      "Ce s-a întâmplat în octombrie 1916 la Pasul Vâlcan, cine sunt Momârlanii care trăiesc de secole la poalele acestor munți, și ce e Colindul Pițărăilor.",
    coverImage: "/images/povesti-pitarai.jpg",
    publishedDate: "2026-09-12",
    intro:
      "Pasul Vâlcan nu e doar o trecătoare cu peisaj frumos. E și un loc unde s-a scris, la propriu, o pagină din istoria Primului Război Mondial, și poarta către lumea Momârlanilor, comunitatea care trăiește de secole la poalele acestor munți.",
    sections: [
      {
        heading: "Bătălia de la Pasul Vâlcan, octombrie 1916",
        paragraphs: [
          "Între 23 și 29 octombrie 1916, trupele române au oprit aici încercarea Armatei 9 germane, comandată de generalul Erich von Falkenhayn, de a forța Munții Carpați spre Valea Jiului. De partea română, generalul Ioan Dragalina (care a preluat comanda de la generalul Ioan Culcer chiar în timpul luptelor, pe 25 octombrie) a condus Diviziile 11 și 1 Infanterie, cu 17 batalioane, 2 escadroane de cavalerie și 15 baterii de artilerie. De cealaltă parte, Divizia 11 Infanterie Bavareză, Divizia 6 Cavalerie Germană și o brigadă austriacă, sprijinite de 22 de baterii de artilerie.",
          "Pe 24 octombrie, germanii au reușit inițial să spargă apărarea română, dar contraatacurile lui Dragalina i-au respins înapoi peste graniță în doar trei zile. Trecătoarea a rămas în mâinile românilor în această fază a luptelor.",
        ],
      },
      {
        heading: "Panteonul Eroilor de la cota 1621",
        image: { src: "/images/povesti-panteon.jpg", alt: "Cruce comemorativă de piatră într-o poiană de munte, toamna" },
        paragraphs: [
          "Chiar pe linia frontului din 1916, la cota 1621 din Pasul Vâlcan, a fost ridicat un Panteon al Eroilor. Aici sunt cinstiți cei peste 1.500 de soldați căzuți în zona Straja–Pasul Vâlcan, între august și octombrie 1916. Tranșeele din acea vară și toamnă sunt încă vizibile în zonă, atât de bine păstrate încât au blocat, decenii mai târziu, chiar și un proiect de modernizare a șoselei de munte.",
        ],
      },
      {
        heading: "Momârlanii, oamenii dintotdeauna ai muntelui",
        paragraphs: [
          "Dincolo de istoria militară, Pasul Vâlcan e și pragul spre lumea Momârlanilor, o comunitate de aproximativ 10.000 de oameni care trăiește în Valea Jiului. Originea lor exactă rămâne dezbătută între istorici, unii îi consideră urmași direcți ai populației dacice din zonă, alții văd în ei comunități medievale adaptate de mult timp vieții de munte. Cert e că sunt cei dintâi locuitori ai așezărilor montane din zonă, cu ocupații legate de creșterea animalelor și agricultură, și cu un port tradițional propriu, purtat cu mândrie și azi la sărbători.",
        ],
      },
      {
        heading: "Colindul Pițărăilor",
        paragraphs: [
          "Cea mai cunoscută tradiție a lor e Colindul Pițărăilor, în dimineața de Ajun. Comunitatea îmbrăcată în port tradițional momârlănesc pornește pe ulițe, în frunte cu flăcăi neînsurați care duc steaguri mari, împodobite, urmați de fluierași, femei și copii. Sunt considerați primii vestitori ai Nașterii Domnului, iar obiceiul se păstrează cel mai bine în satele din partea de est a Văii Jiului, cum e Jiețul.",
        ],
      },
    ],
    closing:
      "Și azi, de sărbători, comunitățile din jurul Vulcanului se adună la fel cum o făceau străbunii lor: cu voie bună, cu tradiție, și cu o masă caldă la final. Dacă vreți să simțiți ceva din atmosfera asta, Restaurant Trilogy e locul unde se termină firesc o zi de sărbătoare sau de drumeție pe aceste meleaguri.",
    sources: [
      { label: "Prima bătălie de pe Valea Jiului (1916) — Wikipedia", url: "https://ro.wikipedia.org/wiki/Prima_b%C4%83t%C4%83lie_de_pe_Valea_Jiului_(1916)" },
      { label: "Eroii Primului Război Mondial omagiați în Pasul Vâlcan — adevarul.ro", url: "https://adevarul.ro/stiri-locale/hunedoara/eroii-din-primul-razboi-mondial-sunt-omagiati-in-1886426.html" },
      { label: "Noua șosea blocată de tranșeele din Primul Război Mondial — adevarul.ro", url: "https://adevarul.ro/stiri-locale/hunedoara/noua-sosea-din-munti-s-a-blocat-intr-un-loc-1888306.html" },
      { label: "Momârlanii, urmașii dacilor din Valea Jiului — descopera.ro", url: "https://www.descopera.ro/descopera-in-romania/10144259-momarlanii-urmasii-dacilor-din-valea-jiului" },
      { label: "Momârlani — Wikipedia", url: "https://ro.wikipedia.org/wiki/Mom%C3%A2rlani" },
      { label: "Pițărăii din Valea Jiului — ziare.com", url: "https://ziare.com/social/craciun/pitaraii-din-valea-jiului-primii-vestitori-ai-nasterii-domnului-1064453" },
      { label: "Colindul Pițărăilor — povestea-locurilor.ro", url: "http://povestea-locurilor.ro/2018/11/12/colindul-pitarailor/" },
    ],
  },
  {
    slug: "ghid-vulcan-ce-poti-face",
    title: "Ghid Vulcan: ce poți face în oraș și în jurul lui",
    excerpt:
      "De la istoria minieră și bisericile din centru, la cinci poteci tematice scurte chiar la marginea orașului — tot ce merită văzut fără să pleci departe.",
    coverImage: "/images/povesti-cascada.jpg",
    publishedDate: "2026-09-12",
    intro:
      "Vulcanul nu e doar punctul de plecare spre trecători și munți. Are propria istorie, câteva biserici vechi în centru, și, chiar la marginea orașului, cinci poteci tematice scurte, mult mai accesibile decât drumețiile de o zi întreagă din munți.",
    sections: [
      {
        heading: "De la sat minier la oraș",
        paragraphs: [
          "Povestea Vulcanului începe la mijlocul secolului XIX, când s-au deschis primele exploatări miniere din Valea Jiului. Perioada 1866-1870 a fost una de înflorire, iar orașul a crescut rapid, ajungând la 5.000-6.000 de locuitori la începutul secolului XX.",
          "În anii '80, Vulcanul avea aproape 30.000 de locuitori, majoritatea lucrând în mină. După 1990, închiderea exploatărilor a dus la un declin accentuat, resimțit și azi în aspectul orașului.",
        ],
      },
      {
        heading: "Bisericile din centru",
        paragraphs: [
          "În centrul orașului găsești Biserica Ortodoxă \"Sfântul Nicolae\", cu valoare istorică. Nu departe, Biserica Romano-Catolică \"Adormirea Maicii Domnului\", construită în 1910-1911 după planurile arhitecților Biró Ernő și Giacinto Puttini.",
          "A treia, Biserica Ortodoxă \"Duminica Orbului\" (cunoscută și ca Vulcan II), își are originea într-o comunitate venită din Țara Hațegului la sfârșitul secolului XVIII, prima biserică de lemn fiind ridicată în 1791.",
        ],
      },
      {
        heading: "Poteci scurte, chiar la marginea orașului",
        paragraphs: [
          "Dacă nu ai o zi întreagă pentru munte, în jurul Vulcanului sunt marcate cinci poteci tematice, toate accesibile fără echipament special.",
          "Cetatea Ascunsă (dificultate medie, 6,5 km, aproximativ 3 ore dus-întors): pereți stâncoși care amintesc de zidurile unei cetăți, buni și pentru alpiniști.",
          "Traseul Tunelelor (ușor spre mediu, 6 km, 3-4 ore): Peștera Dracului, Cascada Dracului, izvoarele Pârâului Baleia și construcții hidrotehnice abandonate.",
          "Drumul Lupilor (dificultate medie, 6,5 km): cascade pe pârâul Morișoara, Cascada de la Trecătoarea Lupilor, și două curiozități, Statuia Amerindianului din Carpați și Titanul de pe Valea Morii.",
          "Traseul Ruinelor (dificultate medie, 12 km): Mănăstirea Sfântul Nicolae, schitul din Poiana Muntelui, Cascada Ungurului și formațiunea numită \"Sfinxul din Valea Ungurului\".",
          "Cascada Lupilor (traseu ușor, 30-60 minute): o cascadă de 10 metri, accesibilă în orice sezon.",
        ],
      },
      {
        heading: "O curiozitate: Buzduganul din Pasul Vulcan",
        paragraphs: [
          "Dincolo de istoria minieră și de luptele din Primul Război Mondial (despre care am scris separat), Pasul Vulcan păstrează și o urmă mult mai veche. În 1896 a fost ridicat aici un monument, \"Buzduganul\", în memoria nobililor Kendeffy (Cândea), aliați apropiați ai lui Iancu de Hunedoara în luptele cu otomanii de la mijlocul secolului XV.",
        ],
      },
    ],
    closing:
      "Fie că ai ales o biserică, o cascadă sau doar o plimbare prin centru, o zi în Vulcan se termină bine cu o masă caldă. Restaurant Trilogy e la doar câțiva pași distanță, indiferent din ce parte a orașului vii.",
    sources: [
      { label: "Cinci poteci turistice tematice — GO Hunedoara", url: "https://www.gohunedoara.com/en/cinci-poteci-turistice-tematice-ce-strabat-locuri-de-poveste-deschise-in-zona-vulcan/" },
      { label: "Povestea orașului Vulcan și a exploatărilor miniere — romania-misterioasa.ro", url: "https://romania-misterioasa.ro/povestea-orasului-vulcan-si-a-exploatarilor-miniere/" },
      { label: "Vulcan — Marele centru minier — historia.ro", url: "https://historia.ro/sectiune/actualitate/vulcan-marele-centru-minier-din-romania-2275585.html" },
      { label: "Biserica Vulcan II — crestinortodox.ro", url: "https://www.crestinortodox.ro/biserici-manastiri/biserica-vulcan-ii-67936.html" },
      { label: "Buzduganul lui Ioan de Hunedoara — ziarulnatiunea.ro", url: "https://ziarulnatiunea.ro/2023/11/23/buzduganul-lui-ioan-de-hunedoara-se-ridica-din-nou-in-portile-de-fier-ale-transilvaniei-ca-reper-istoric-si-cultural/" },
    ],
  },
];
