interface PostTemplate {
  type: "early_morning" | "mid_morning" | "late_push";
  label: string;
  time: string;
  hook: string;
  body: string;
  closing: string;
  tagline: string;
  dayHint?: string[];
}

const EARLY: PostTemplate[] = [
  // ── Nostalgie ──
  {
    type: "early_morning", label: "Dimineață — Nostalgie", time: "06:15",
    hook: "☀️ Îți mai aduci aminte gustul de {main_short} de la bunica?",
    body: "Când veneai de la școală și mirosea toată casa. Azi facem fix așa — {main}, ca pe vremuri.\n\nFără bazaconii, fără E-uri. Cu mult suflet și ingrediente simple, cum trebuie.\n\nIar înainte de asta, o {soup_lower} care te încălzește din prima lingură. 🍲\n\nMâncare adevărată. Ca acasă. Ca atunci.",
    closing: "Hai la masă. 🍽️",
    tagline: "Începe ziua cu gust de acasă. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Nostalgie", time: "06:15",
    hook: "☀️ Știi momentul ăla când intri în casă și mirosul te duce înapoi în copilărie?",
    body: "Azi am gătit {main} — rețetă simplă, fără figuri, cum se făcea pe vremuri.\n\nÎnainte de asta, {soup_lower}. Caldă, reconfortantă.\n\nNoi gătim cu grijă, cu ingrediente curate, fără prafuri și fără grabă.",
    closing: "Azi merită să mănânci ceva bun.",
    tagline: "Gust de casă, livrat la tine. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Nostalgie", time: "06:15",
    hook: "☀️ Unele gusturi nu se uită niciodată.",
    body: "Azi am pregătit {main} — gătit cu răbdare, din ingrediente alese cu grijă.\n\nPlus {soup_lower}, caldă și reconfortantă, exact cum ai nevoie.\n\nFiecare meniu e preparat proaspăt, în ziua livrării. Fără shortcuts, fără compromisuri.",
    closing: "Vă așteptăm cu drag. ☺️",
    tagline: "Mâncare cu suflet, zi de zi. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Nostalgie", time: "06:15",
    hook: "☀️ Când mâncarea e simplă și bună, nu mai ai nevoie de nimic altceva.",
    body: "Azi la Trilogy Box: {main}.\n\nRețetă clasică, ingrediente curate, gust sincer.\n\nÎnainte, o {soup_lower} care te pune pe picioare.\n\nToate astea în cutia ta, gata de livrare.",
    closing: "Sperăm să vă placă. 🤗",
    tagline: "Simplitate cu gust. 💛",
  },

  // ── Întrebare retorică ──
  {
    type: "early_morning", label: "Dimineață — Întrebare", time: "06:15",
    hook: "☀️ Citește meniul de azi și spune-ne că nu ți s-a făcut foame.",
    body: "Începem cu {soup_lower} — caldă, reconfortantă, exact ce trebuie.\n\nPe urmă, {main}. Gătit cu grijă, din ingrediente proaspete.\n\nTotul vine împreună: {note_lower}.\n\nNoi gătim ca pentru familia noastră, pentru că asta și sunteți.",
    closing: "Comandați și spuneți-ne ce ziceți. 😊",
    tagline: "Azi mâncăm bine. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Întrebare", time: "06:15",
    hook: "☀️ Ce-ar fi să nu mai stai pe gânduri cu prânzul de azi?",
    body: "Am pregătit un meniu care merită: {soup_lower} și {main}.\n\nTotul gătit proaspăt, cu ingrediente curate, fără prafuri.\n\n{note_cap}.\n\nUn prânz complet, livrat direct la tine.",
    closing: "Sună-ne și gata. 📞",
    tagline: "Prânzul tău, grija noastră. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Întrebare", time: "06:15",
    hook: "☀️ Dacă ai putea mânca orice la prânz, ce ai alege?",
    body: "Noi avem o sugestie: {main}.\n\nPlus o {soup_lower} care te pune pe picioare.\n\nMeniu complet, pregătit cu grijă, gata de livrare.\n\n{note_cap}.",
    closing: "Hai că e simplu — un telefon și gata.",
    tagline: "Alegerea bună e cea simplă. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Întrebare", time: "06:15",
    hook: "☀️ Tu ce mănânci azi la prânz?",
    body: "Noi am pregătit: {soup_lower} și {main}.\n\nIngrediente simple, rețete de casă, porții generoase.\n\n{note_cap}.\n\nTotul vine într-o singură cutie, gata de livrare.",
    closing: "Vă mulțumim că ne apreciați. 🙏",
    tagline: "De la noi, cu drag. 💛",
  },

  // ── Senzorial ──
  {
    type: "early_morning", label: "Dimineață — Senzorial", time: "06:15",
    hook: "☀️ Parcă simți deja aroma de {main_short} venind dinspre bucătărie.",
    body: "Azi am pus suflet în fiecare detaliu: {main}, pregătit cu răbdare.\n\nÎnainte, o {soup_lower} care te încălzește din interior.\n\nIngrediente curate, gust sincer, fără artificii.",
    closing: "Comandă și gustă singur. 😋",
    tagline: "Bucătăria Trilogy, la tine acasă. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Senzorial", time: "06:15",
    hook: "☀️ În bucătăria noastră deja miroase a {soup_short}.",
    body: "Am început dimineața devreme ca tu să ai un prânz pe cinste.\n\n{main} — gătit cu grijă, cu ingrediente alese.\n\nPlus {soup_lower}, caldă și reconfortantă.\n\n{note_cap}.",
    closing: "Sperăm să vă aducă zâmbetul. ☺️",
    tagline: "Gust care te face să revii. 💛",
  },

  // ── Empatic / Luni ──
  {
    type: "early_morning", label: "Dimineață — Empatic", time: "06:15",
    hook: "☀️ Lunea se vindecă cu mâncare bună.",
    body: "Începem săptămâna cu {main} — simplu, gustos, reconfortant.\n\nÎnainte de asta, {soup_lower}.\n\nFiecare meniu e preparat proaspăt, în ziua livrării.\n\n{note_cap}.",
    closing: "Săptămâna asta o luăm frumos.",
    tagline: "Energie pentru toată săptămâna. 💛",
    dayHint: ["Luni"],
  },
  {
    type: "early_morning", label: "Dimineață — Empatic", time: "06:15",
    hook: "☀️ După un weekend încărcat, azi mergem pe ceva bun.",
    body: "Am pregătit {main} — mâncare care te pune pe picioare.\n\nPlus {soup_lower}, caldă și bună.\n\nIngrediente curate, porții generoase.\n\n{note_cap}.",
    closing: "Hai la drum cu energie. 💪",
    tagline: "Lunea nu mai e grea. 💛",
    dayHint: ["Luni"],
  },

  // ── Marți ──
  {
    type: "early_morning", label: "Dimineață — Energie", time: "06:15",
    hook: "☀️ Marți cu gust, marți cu energie.",
    body: "Am pregătit un meniu care te ține pe picioare toată ziua: {main}.\n\nÎnainte, {soup_lower} — caldă și reconfortantă.\n\nTotul gătit proaspăt, cu grijă.\n\n{note_cap}.",
    closing: "Ziua merge mai bine cu un prânz bun. 😊",
    tagline: "Mâncare care dă putere. 💛",
    dayHint: ["Marți"],
  },

  // ── Miercuri ──
  {
    type: "early_morning", label: "Dimineață — Jumătate", time: "06:15",
    hook: "☀️ Jumătatea săptămânii merită un meniu pe cinste.",
    body: "Azi avem: {main}. Gătit cu răbdare, din ingrediente proaspete.\n\nPlus {soup_lower}, caldă și bună.\n\n{note_cap}.\n\nMiercurea se trece mai ușor cu burta plină.",
    closing: "Hai la masă. 🍽️",
    tagline: "La jumătate de drum, cu gust întreg. 💛",
    dayHint: ["Miercuri"],
  },

  // ── Joi ──
  {
    type: "early_morning", label: "Dimineață — Aproape weekend", time: "06:15",
    hook: "☀️ Mai o zi și vine weekendul. Azi te răsplătești.",
    body: "Am pregătit ceva special: {main}.\n\nÎnainte, {soup_lower} — reconfortantă, caldă.\n\nGătit proaspăt, cu ingrediente curate.\n\n{note_cap}.",
    closing: "Meriți un prânz bun. 😊",
    tagline: "Joiul are gust bun. 💛",
    dayHint: ["Joi"],
  },

  // ── Vineri ──
  {
    type: "early_morning", label: "Dimineață — Răsfăț", time: "06:15",
    hook: "☀️ E vineri. Zi de răsfăț.",
    body: "Ai muncit toată săptămâna, azi meriți ceva bun: {main}.\n\nPlus {soup_lower}, caldă și reconfortantă.\n\n{note_cap}.\n\nÎncheiem săptămâna frumos, cu mâncare gătită cu drag.",
    closing: "Weekend plăcut! 🎉",
    tagline: "Vinerea, ne răsfățăm. 💛",
    dayHint: ["Vineri"],
  },
  {
    type: "early_morning", label: "Dimineață — Răsfăț", time: "06:15",
    hook: "☀️ Ultima zi de muncă merită un prânz pe cinste.",
    body: "Am pregătit {main} — simplu, gustos, fără figuri.\n\nÎnainte, {soup_lower}.\n\nIngrediente curate, gătit cu grijă, ca pentru familia noastră.\n\n{note_cap}.",
    closing: "Hai să încheiem săptămâna cu un zâmbet. ☺️",
    tagline: "Vineri cu gust de bine. 💛",
    dayHint: ["Vineri"],
  },

  // ── Generic (orice zi) ──
  {
    type: "early_morning", label: "Dimineață — Simplu", time: "06:15",
    hook: "☀️ Azi la Trilogy Box, meniul e exact ce trebuie.",
    body: "{main} — gătit cu grijă, cu ingrediente proaspete.\n\nÎnainte, {soup_lower}, caldă și reconfortantă.\n\n{note_cap}.\n\nFiecare meniu e preparat în ziua livrării, fără compromisuri.",
    closing: "Vă așteptăm cu drag la comandă.",
    tagline: "Mâncare curată, zi de zi. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Grijă", time: "06:15",
    hook: "☀️ Gătim ca pentru familia noastră. Pentru că asta și sunteți.",
    body: "Azi am pregătit: {main}.\n\nÎnainte, {soup_lower} — caldă, bună, sinceră.\n\nFără prafuri, fără bazaconii, fără E-uri.\n\n{note_cap}.\n\nMâncare adevărată, livrată la ușa ta.",
    closing: "Mulțumim că sunteți alături de noi. 🙏",
    tagline: "Cu grijă, cu drag, cu gust. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Proaspăt", time: "06:15",
    hook: "☀️ Dimineața a început devreme în bucătăria Trilogy.",
    body: "Am pus totul la punct pentru meniul de azi: {main}.\n\nPlus {soup_lower}, caldă și gustoasă.\n\nTotul pregătit proaspăt, din ingrediente curate.\n\n{note_cap}.",
    closing: "Un prânz complet, gata de livrare. 📦",
    tagline: "Proaspăt gătit, proaspăt livrat. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Valoare", time: "06:15",
    hook: "☀️ Un meniu complet, 30 de lei, livrat la tine.",
    body: "Azi avem: {soup_lower} și {main}.\n\n{note_cap}.\n\nTotul pregătit proaspăt, cu ingrediente curate, fără artificii.\n\nNoi punem suflet. Voi puneți pofta.",
    closing: "Comandă acum, livrăm noi. 🚗",
    tagline: "Prânzul care merită. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Recunoștință", time: "06:15",
    hook: "☀️ Vă mulțumim că ne alegeți în fiecare zi.",
    body: "Azi am pregătit cu și mai multă grijă: {main}.\n\nPlus {soup_lower}, caldă și reconfortantă.\n\n{note_cap}.\n\nFiecare comandă ne bucură și ne motivează să fim mai buni.",
    closing: "Voi ne faceți mai buni. ☺️",
    tagline: "Mulțumim și poftă bună! 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Pâine", time: "06:15",
    hook: "☀️ Știați că pâinea noastră e făcută de mână, în fiecare zi?",
    body: "Nu din plic, nu din praf — pâine de casă adevărată.\n\nAzi vine alături de: {main} și {soup_lower}.\n\nMeniu complet, ingrediente curate, porții generoase.",
    closing: "Comandați și gustați diferența. 😊",
    tagline: "Pâine caldă, mâncare cu suflet. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Piure", time: "06:15",
    hook: "☀️ Piureul nostru e din cartofi adevărați. Nu din plic, nu din praf.",
    body: "Azi la Trilogy Box: {main}.\n\nPlus {soup_lower}, caldă și bună.\n\n{note_cap}.\n\nFiecare detaliu contează. De la ingrediente până la livrare.",
    closing: "Sperăm să simțiți diferența. 🥔",
    tagline: "Detaliile fac gustul. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Invitație", time: "06:15",
    hook: "☀️ Hai la prânz cu noi azi.",
    body: "Am pregătit: {main} — simplu și bun, ca la mama acasă.\n\nPlus {soup_lower}, caldă, reconfortantă.\n\n{note_cap}.\n\nTotul vine într-o cutie, gata de livrare în Vulcan și Petroșani.",
    closing: "Un singur telefon și gata. 📞",
    tagline: "La Trilogy, ești mereu binevenit. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Ingrediente", time: "06:15",
    hook: "☀️ Ingrediente simple. Gust adevărat.",
    body: "Azi am gătit {main} — fără bazaconii, fără E-uri.\n\nÎnainte, {soup_lower}.\n\nTotul proaspăt, totul curat, totul cu grijă.\n\n{note_cap}.",
    closing: "Asta înseamnă Trilogy Box. 📦",
    tagline: "Curat, simplu, bun. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Dorință", time: "06:15",
    hook: "☀️ Azi ai chef de ceva bun?",
    body: "Avem exact ce trebuie: {main}.\n\nÎnainte, {soup_lower} — caldă, gustoasă.\n\n{note_cap}.\n\nMeniu complet, livrat la tine între 11 și 15.",
    closing: "Sună-ne și pregătim cutia ta. 📦",
    tagline: "Chef de bine, chef de gust. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Cutie", time: "06:15",
    hook: "☀️ O cutie plină cu mâncare bună, livrată la ușa ta.",
    body: "Azi în Trilogy Box: {soup_lower} și {main}.\n\n{note_cap}.\n\nPregătit proaspăt, din ingrediente curate.\n\nPorții generoase, ca la noi acasă.",
    closing: "Vă așteptăm la comandă. ☺️",
    tagline: "Cutia cu gust de acasă. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Răbdare", time: "06:15",
    hook: "☀️ Mâncarea bună cere răbdare. Noi avem.",
    body: "Azi am gătit {main} — lent, cu grijă, cum trebuie.\n\nPlus {soup_lower}, la fel de bună.\n\n{note_cap}.\n\nNu ne grăbim. Gustul vostru e pe primul loc.",
    closing: "Comandați cu încredere. 😊",
    tagline: "Răbdare în gătit, bucurie la masă. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Tradiție", time: "06:15",
    hook: "☀️ Rețete vechi, gust nou în fiecare zi.",
    body: "Azi: {main} — rețetă clasică, ingrediente proaspete.\n\nÎnainte, {soup_lower}.\n\nNoi păstrăm tradițiile, dar le gătim proaspăt în fiecare dimineață.\n\n{note_cap}.",
    closing: "Tradiția are gust bun. 🍽️",
    tagline: "Vechi în suflet, proaspăt în farfurie. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Ploaie", time: "06:15",
    hook: "☀️ Afară e cum e. Dar mâncarea de azi te încălzește.",
    body: "Am pregătit {main} și {soup_lower} — exact ce trebuie într-o zi ca asta.\n\nMâncare caldă, gustoasă, livrată direct la tine.\n\n{note_cap}.\n\nNu mai trebuie să ieși din casă pentru un prânz bun.",
    closing: "Noi livrăm, tu savurezi. 🚗",
    tagline: "Caldură în cutie. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Echipă", time: "06:15",
    hook: "☀️ Echipa Trilogy s-a trezit devreme azi.",
    body: "Am pus totul la punct: {main}, gătit cu drag.\n\nPlus {soup_lower}, caldă și bună.\n\n{note_cap}.\n\nSuntem o echipă mică, dar gătim cu inimă mare.",
    closing: "Vă mulțumim pentru fiecare comandă. 🙏",
    tagline: "O echipă mică, cu gust mare. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Provocare", time: "06:15",
    hook: "☀️ Provocare: citește meniul și nu comanda.",
    body: "{soup} și {main}.\n\n{note_cap}.\n\nTotul proaspăt, totul cu grijă, totul la 30 de lei.\n\nSpoiler: nimeni nu rezistă. 😄",
    closing: "Te așteptăm cu un telefon.",
    tagline: "Provocarea zilei: poftă bună! 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Vecinul", time: "06:15",
    hook: "☀️ Bună dimineața, vecine! Azi gătim ceva bun.",
    body: "{main} — simplu, gustos, ca la tine acasă.\n\nPlus {soup_lower}, caldă și reconfortantă.\n\n{note_cap}.\n\nNoi suntem aici, în Valea Jiului, și gătim pentru voi în fiecare zi.",
    closing: "Hai la prânz! 😊",
    tagline: "Vecini buni, mâncare bună. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Dimineață", time: "06:15",
    hook: "☀️ Bună dimineața! Meniul de azi e gata.",
    body: "Am pregătit: {main}.\n\nPlus {soup_lower} — caldă, gustoasă.\n\n{note_cap}.\n\nIngrediente curate, gătit proaspăt, livrat cu grijă.",
    closing: "O zi frumoasă și poftă bună!",
    tagline: "Dimineața bună începe cu un plan de prânz. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Sincer", time: "06:15",
    hook: "☀️ Sincer? Meniul de azi e exact cum trebuie.",
    body: "{main} — fără figuri, fără exagerări.\n\nPlus {soup_lower}.\n\n{note_cap}.\n\nGătit cu grijă, din ingrediente simple și curate.\n\nMâncare sinceră, ca oamenii din Valea Jiului.",
    closing: "Poftă bună! 🍽️",
    tagline: "Sincer și gustos. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Copilărie", time: "06:15",
    hook: "☀️ Mâncarea bună te duce înapoi. Acasă, la bunica, la copilărie.",
    body: "Azi am pregătit {main} — rețetă simplă, gust de altădată.\n\nPlus {soup_lower}, caldă.\n\n{note_cap}.\n\nNu reinventăm nimic. Gătim ca pe vremuri, cu ingrediente adevărate.",
    closing: "Vă așteptăm. ☺️",
    tagline: "Gust de copilărie, livrat azi. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Surpriză", time: "06:15",
    hook: "☀️ Azi avem o surpriză frumoasă în meniu.",
    body: "{main} — gătit cu un strop de inspirație și multă grijă.\n\nPlus {soup_lower}.\n\n{note_cap}.\n\nSperăm să vă placă la fel de mult cât ne-a plăcut nouă.",
    closing: "Spuneți-ne ce ziceți! 😊",
    tagline: "Surprize bune la prânz. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Grătar", time: "06:15",
    hook: "☀️ Grătarul e aprins, meniul de azi prinde formă.",
    body: "Am pregătit {main} — cu multă grijă și ingrediente proaspete.\n\nÎnainte, {soup_lower}.\n\n{note_cap}.\n\nMeniu complet, 30 de lei, livrat în Vulcan și Petroșani.",
    closing: "Sună-ne și pregătim cutia ta.",
    tagline: "Din bucătăria noastră, la tine. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Zâmbet", time: "06:15",
    hook: "☀️ Un prânz bun aduce un zâmbet. Garantat de noi. 😊",
    body: "Azi: {main}.\n\nPlus {soup_lower}, caldă și reconfortantă.\n\n{note_cap}.\n\nGătit proaspăt, cu ingrediente curate, livrat cu drag.",
    closing: "Zâmbiți și comandați!",
    tagline: "Zâmbete la prânz, zi de zi. 💛",
  },
  {
    type: "early_morning", label: "Dimineață — Calm", time: "06:15",
    hook: "☀️ Ia-o ușor azi. Prânzul e rezolvat.",
    body: "Am pregătit totul pentru tine: {main} și {soup_lower}.\n\n{note_cap}.\n\nTu te ocupi de restul zilei, noi ne ocupăm de prânz.\n\nIngrediente curate, porții generoase.",
    closing: "Un lucru mai puțin de care să-ți faci griji. ☺️",
    tagline: "Prânzul rezolvat, ziua salvată. 💛",
  },
];

const MID: PostTemplate[] = [
  // ── Honest tasting ──
  {
    type: "mid_morning", label: "Mid-morning — Honest", time: "10:00",
    hook: "‼️ Am gustat meniul de azi.",
    body: "Sincer? E cum trebuie.\n\n{soup} care miroase a bucătărie de acasă și {main_lower}, exact cum am vrut.\n\nMâncare curată, fără bazaconii, cu gust adevărat.\n\nDacă nu ați comandat încă, mai aveți timp. 😉",
    closing: "Comandați acum, livrăm noi.",
    tagline: "Am gustat. Aprobat. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Honest", time: "10:00",
    hook: "‼️ Am verificat meniul de azi personal.",
    body: "Nu exagerez — {main_lower} e exact ce trebuie.\n\nPlus {soup_lower} care te pune pe picioare.\n\nGătit proaspăt, ingrediente curate.\n\nSună acum, că mai avem locuri.",
    closing: "Poftă bună!",
    tagline: "Verificat și aprobat. ✅",
  },
  {
    type: "mid_morning", label: "Mid-morning — Honest", time: "10:00",
    hook: "‼️ Am trecut pe la bucătărie.",
    body: "{main} arată și miroase exact cum trebuie.\n\nPlus {soup_lower} — caldă, gustoasă.\n\n{note_cap}.\n\nNu spun mai mult. Comandați și judecați singuri. 😊",
    closing: "Sună-ne sau scrie pe WhatsApp.",
    tagline: "Bucătăria a vorbit. 🔥",
  },

  // ── Referință la poză ──
  {
    type: "mid_morning", label: "Mid-morning — Poză", time: "10:00",
    hook: "‼️ Dați zoom pe poză. 👀",
    body: "Asta e meniul de azi: {main}.\n\nCe vedeți în poză e ce primiți în cutie.\n\nPlus {soup_lower}, caldă și bună.\n\n{note_cap}.",
    closing: "Sună acum sau scrie pe WhatsApp. 📲",
    tagline: "Poza vorbește. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Poză", time: "10:00",
    hook: "‼️ Uite cum arată meniul de azi.",
    body: "{main} — proaspăt gătit, gata de livrare.\n\nPlus {soup_lower}.\n\n{note_cap}.\n\nNu mai stați pe gânduri, comandați acum.",
    closing: "📲 Un telefon și gata.",
    tagline: "Ce vezi, aia primești. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Poză", time: "10:00",
    hook: "‼️ Poza asta miroase. Serios.",
    body: "{main} — gata de pus în cutie.\n\nÎnainte de el, {soup_lower}.\n\n{note_cap}.\n\nMai aveți timp să comandați. Nu mult, dar aveți. 😉",
    closing: "Sună-ne sau scrie pe WhatsApp.",
    tagline: "Dacă te-a convins poza, imaginează-ți gustul. 🔥",
  },

  // ── FOMO ușor ──
  {
    type: "mid_morning", label: "Mid-morning — FOMO", time: "10:00",
    hook: "‼️ Meniul de azi se comandă bine.",
    body: "Și pe bună dreptate: {main}.\n\nPlus {soup_lower}, caldă și gustoasă.\n\n{note_cap}.\n\nDacă n-ați sunat încă, acum e momentul.",
    closing: "Noi suntem pregătiți. Voi? 😊",
    tagline: "Nu lăsa prânzul pe mâine. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — FOMO", time: "10:00",
    hook: "‼️ Telefoanele au început deja să sune.",
    body: "Meniul de azi: {main} și {soup_lower}.\n\n{note_cap}.\n\nGătit proaspăt, livrat între 11 și 15.\n\nDacă nu ați comandat, mai aveți timp — dar nu mult.",
    closing: "Sună acum. 📞",
    tagline: "Azi mâncăm bine. 🔥",
  },

  // ── CTA direct ──
  {
    type: "mid_morning", label: "Mid-morning — Direct", time: "10:00",
    hook: "‼️ Prânzul e gata. Tu ai comandat?",
    body: "{main} și {soup_lower} — totul proaspăt, totul cu grijă.\n\n{note_cap}.\n\n30 de lei, meniu complet, livrat la tine.",
    closing: "Sună sau scrie pe WhatsApp. 📲",
    tagline: "Simplu: suni, mănânci bine. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Direct", time: "10:00",
    hook: "‼️ Meniul e gătit, cutiile se pregătesc.",
    body: "Azi livrăm: {main} și {soup_lower}.\n\n{note_cap}.\n\nIngrediente curate, porții generoase.\n\nSună-ne și îți pregătim cutia.",
    closing: "Livrăm în Vulcan și Petroșani. 🚗",
    tagline: "De la bucătărie, la tine. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Aromă", time: "10:00",
    hook: "‼️ Bucătăria noastră miroase incredibil acum.",
    body: "{main} e aproape gata.\n\n{soup} stă caldă, pregătită.\n\n{note_cap}.\n\nMai aveți puțin timp să comandați.",
    closing: "📲 Sună sau scrie pe WhatsApp.",
    tagline: "Aroma nu minte. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Feedback", time: "10:00",
    hook: "‼️ Ieri am primit cele mai frumoase mesaje.",
    body: "Vă mulțumim! Azi am pregătit cu și mai multă grijă: {main}.\n\nPlus {soup_lower}.\n\n{note_cap}.\n\nComandați și spuneți-ne ce ziceți. 😊",
    closing: "Sună-ne sau scrie pe WhatsApp.",
    tagline: "Feedback-ul vostru ne face mai buni. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Energie", time: "10:00",
    hook: "‼️ Energia de la prânz contează.",
    body: "De asta am pregătit un meniu care te ține pe picioare: {main}.\n\nÎnainte, {soup_lower}.\n\n{note_cap}.\n\nMâncare adevărată, nu fast food.",
    closing: "Comandă acum, mâncarea e gata. 📞",
    tagline: "Energie curată, din mâncare curată. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Simplu", time: "10:00",
    hook: "‼️ Azi e simplu: mâncare bună, livrată la tine.",
    body: "{main} și {soup_lower}.\n\n{note_cap}.\n\n30 de lei, meniu complet.\n\nGătit proaspăt, livrat între 11 și 15.",
    closing: "Sună-ne. 📞",
    tagline: "Simplu și bun. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Pauză", time: "10:00",
    hook: "‼️ Pauza de prânz se apropie.",
    body: "Nu mai sta pe gânduri: {main} și {soup_lower}.\n\n{note_cap}.\n\nTotul gătit proaspăt, din ingrediente curate.\n\nSună acum și noi livrăm.",
    closing: "Un prânz bun face toată diferența. 😊",
    tagline: "Pauza merită un meniu pe cinste. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Clasic", time: "10:00",
    hook: "‼️ Clasic, bun, fără figuri.",
    body: "Azi livrăm: {main}.\n\nPlus {soup_lower}.\n\n{note_cap}.\n\nMâncare de casă, nu fast food. Ingrediente curate, porții generoase.",
    closing: "Sună sau scrie pe WhatsApp. 📲",
    tagline: "Clasicul bate orice trend. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Gata", time: "10:00",
    hook: "‼️ Totul e gata. Mai lipsești doar tu.",
    body: "{main} — proaspăt gătit.\n\n{soup} — caldă, așteptând.\n\n{note_cap}.\n\nSună-ne și îți pregătim cutia.",
    closing: "Te așteptăm cu un telefon. 📞",
    tagline: "Gata de livrare. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Întrebare", time: "10:00",
    hook: "‼️ Tu ce mănânci azi la prânz?",
    body: "Noi propunem: {main} și {soup_lower}.\n\n{note_cap}.\n\nMeniu complet, 30 de lei, livrat la ușa ta.\n\nGătit proaspăt, cu ingrediente curate.",
    closing: "Sună-ne și te convingi. 😊",
    tagline: "Alege bine, mănâncă bine. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Descriere", time: "10:00",
    hook: "‼️ Azi în Trilogy Box:",
    body: "{soup} — caldă, reconfortantă.\n{main} — gătit cu grijă.\n\n{note_cap}.\n\nTotul vine împreună, meniu complet, 30 de lei.\n\nSună sau scrie pe WhatsApp.",
    closing: "Poftă bună! 🍽️",
    tagline: "Tot ce trebuie, într-o cutie. 🔥",
  },
  {
    type: "mid_morning", label: "Mid-morning — Mulțumire", time: "10:00",
    hook: "‼️ Mulțumim celor care au comandat deja!",
    body: "Pentru restul: mai aveți timp. 😊\n\nMeniul de azi: {main} și {soup_lower}.\n\n{note_cap}.\n\nSună-ne sau scrie pe WhatsApp.",
    closing: "Vă așteptăm!",
    tagline: "Fiecare comandă contează. 🔥",
  },
];

const LATE: PostTemplate[] = [
  {
    type: "late_push", label: "Last push — Urgent", time: "13:00",
    hook: "⏰ Ultimele ore pentru comanda de azi!",
    body: "{main} și {soup_lower}.\n\n{note_cap}.\n\nSună acum — livrăm până la 15:00.",
    closing: "",
    tagline: "Nu rata prânzul. 🔥",
  },
  {
    type: "late_push", label: "Last push — Direct", time: "13:00",
    hook: "⏰ Încă nu ai comandat?",
    body: "Mai ai timp: {main} și {soup_lower}.\n\n{note_cap}.\n\nSună acum, livrăm noi.",
    closing: "",
    tagline: "Un telefon și gata. 📞",
  },
  {
    type: "late_push", label: "Last push — Scurt", time: "13:00",
    hook: "⏰ Prânzul nu așteaptă.",
    body: "Azi: {main}.\n\nMai livrăm până la 15:00.\n\nSună acum.",
    closing: "",
    tagline: "Sună. Mănâncă bine. Gata. 🔥",
  },
  {
    type: "late_push", label: "Last push — Empatic", time: "13:00",
    hook: "⏰ Ziua a fost lungă? Hai să te ajutăm cu prânzul.",
    body: "{main} și {soup_lower}.\n\n{note_cap}.\n\nSună-ne sau scrie pe WhatsApp, mai avem puțin timp.",
    closing: "",
    tagline: "Prânzul rezolvat. 💛",
  },
  {
    type: "late_push", label: "Last push — Glumă", time: "13:00",
    hook: "⏰ Ceasul bate, meniul zâmbește.",
    body: "Dacă n-ai comandat încă, acum e momentul.\n\n{main} și {soup_lower}.\n\nSună-ne, mai avem loc.",
    closing: "",
    tagline: "Ultimul strigăt: poftă bună! 🔥",
  },
  {
    type: "late_push", label: "Last push — Ultim", time: "13:00",
    hook: "⏰ Ultimele comenzi pentru azi!",
    body: "{main}.\n{soup}.\n{note_cap}.\n\nSună acum, livrăm până la 15.",
    closing: "",
    tagline: "Nu lăsa pe mâine ce poți mânca azi. 🔥",
  },
  {
    type: "late_push", label: "Last push — Reminder", time: "13:00",
    hook: "⏰ Reminder: meniul de azi e gata de livrare.",
    body: "Dacă ai uitat să comanzi, mai ai puțin timp.\n\n{main} și {soup_lower}.\n\nSună-ne. 📞",
    closing: "",
    tagline: "Ultimele ore, primele gusturi. 🔥",
  },
  {
    type: "late_push", label: "Last push — Simplu", time: "13:00",
    hook: "⏰ Simplu: suni, mănânci bine.",
    body: "{main}.\n{soup}.\n{note_cap}.\n\nLivrăm până la 15:00.",
    closing: "",
    tagline: "Poftă bună! 💛",
  },
  {
    type: "late_push", label: "Last push — Foame", time: "13:00",
    hook: "⏰ Ți-e foame? Ne-ai sunat?",
    body: "Dacă nu, acum e momentul.\n\n{main} și {soup_lower}.\n\n{note_cap}.\n\nLivrăm în Vulcan și Petroșani.",
    closing: "",
    tagline: "Nu te lăsa flămând. 🔥",
  },
  {
    type: "late_push", label: "Last push — Ceas", time: "13:00",
    hook: "⏰ Mai sunt câteva ore de livrare.",
    body: "{main}.\n{soup}.\n{note_cap}.\n\nSună acum sau scrie pe WhatsApp.",
    closing: "",
    tagline: "Tic-tac, meniul e gata! 🔥",
  },
];

const CONTACT_BLOCK = `📞 Comenzi telefonic sau pe WhatsApp
⏰ Preluăm comenzile de la 09:30
🚗 Livrăm între 11:00 – 15:00
📍 Vulcan: 0728 382 305
📍 Petroșani: 0728 382 304`;

const CONTACT_BLOCK_SHORT = `📲 Sună acum sau scrie pe WhatsApp
⏰ Preluăm comenzile de la 09:30
🚗 Livrăm între 11:00 – 15:00
📍 Vulcan: 0728 382 305
📍 Petroșani: 0728 382 304`;

function pickRandom<T>(arr: T[], count: number, exclude: Set<number> = new Set()): { items: T[]; indices: number[] } {
  const available = arr.map((item, i) => ({ item, i })).filter(({ i }) => !exclude.has(i));
  const shuffled = available.sort(() => Math.random() - 0.5);
  const picked = shuffled.slice(0, count);
  return { items: picked.map((p) => p.item), indices: picked.map((p) => p.i) };
}

function fillTemplate(tpl: string, vars: Record<string, string>): string {
  return tpl.replace(/\{(\w+)\}/g, (_, key) => vars[key] || "");
}

function buildMenuBlock(items: string[], note: string): string {
  const emojis = ["🍲", "🍗", "🥗", "🍰", "🍝", "🥩"];
  const lines = items
    .filter((it) => it.trim() !== "")
    .map((item, i) => `${emojis[i] || "🍽️"} ${item}`);
  if (note) lines.push(`🍞 ${note}`);
  return `🍽️ Meniul zilei – 30 lei\n${lines.join("\n")}`;
}

export function generatePosts(
  date: string,
  items: string[],
  note: string,
  weekday: string
): { type: string; label: string; time: string; body: string }[] {
  const filtered = items.filter((it) => it.trim() !== "");
  if (filtered.length === 0) return [];

  const soup = filtered[0] || "";
  const main = filtered[1] || filtered[0] || "";

  const vars: Record<string, string> = {
    soup,
    soup_lower: soup.charAt(0).toLowerCase() + soup.slice(1),
    soup_short: soup.split(" ").slice(0, 3).join(" "),
    main,
    main_lower: main.charAt(0).toLowerCase() + main.slice(1),
    main_short: main.split(" ").slice(0, 3).join(" "),
    note_lower: note ? note.charAt(0).toLowerCase() + note.slice(1) : "",
    note_cap: note || "",
  };

  const menuBlock = buildMenuBlock(filtered, note);

  const dayFiltered = EARLY.filter(
    (t) => !t.dayHint || t.dayHint.includes(weekday)
  );
  const daySpecific = EARLY.filter(
    (t) => t.dayHint && t.dayHint.includes(weekday)
  );

  const results: { type: string; label: string; time: string; body: string }[] = [];
  const usedEarly = new Set<number>();

  // Pick 2 early morning — prefer day-specific if available
  if (daySpecific.length > 0) {
    const dsIdx = EARLY.indexOf(daySpecific[Math.floor(Math.random() * daySpecific.length)]);
    usedEarly.add(dsIdx);
    const tpl = EARLY[dsIdx];
    const hook = fillTemplate(tpl.hook, vars);
    const body = fillTemplate(tpl.body, vars);
    const closing = fillTemplate(tpl.closing, vars);
    const tagline = fillTemplate(tpl.tagline, vars);
    const contactBlock = CONTACT_BLOCK;
    results.push({
      type: tpl.type, label: tpl.label, time: tpl.time,
      body: [hook, "", body, "", closing, "", menuBlock, "", contactBlock, "", tagline].filter((l) => l !== undefined).join("\n"),
    });
  }

  while (results.filter((r) => r.type === "early_morning").length < 2) {
    const generic = EARLY.filter((_, i) => !usedEarly.has(i) && (!EARLY[i].dayHint || EARLY[i].dayHint!.includes(weekday)));
    if (generic.length === 0) break;
    const idx = EARLY.indexOf(generic[Math.floor(Math.random() * generic.length)]);
    usedEarly.add(idx);
    const tpl = EARLY[idx];
    const hook = fillTemplate(tpl.hook, vars);
    const body = fillTemplate(tpl.body, vars);
    const closing = fillTemplate(tpl.closing, vars);
    const tagline = fillTemplate(tpl.tagline, vars);
    results.push({
      type: tpl.type, label: tpl.label, time: tpl.time,
      body: [hook, "", body, "", closing, "", menuBlock, "", CONTACT_BLOCK, "", tagline].join("\n"),
    });
  }

  // Pick 2 mid-morning
  const { items: midPicks } = pickRandom(MID, 2);
  for (const tpl of midPicks) {
    const hook = fillTemplate(tpl.hook, vars);
    const body = fillTemplate(tpl.body, vars);
    const closing = fillTemplate(tpl.closing, vars);
    const tagline = fillTemplate(tpl.tagline, vars);
    results.push({
      type: tpl.type, label: tpl.label, time: tpl.time,
      body: [hook, "", body, "", closing, "", menuBlock, "", CONTACT_BLOCK_SHORT, "", tagline].join("\n"),
    });
  }

  // Pick 1 late push
  const { items: latePicks } = pickRandom(LATE, 1);
  for (const tpl of latePicks) {
    const hook = fillTemplate(tpl.hook, vars);
    const body = fillTemplate(tpl.body, vars);
    const tagline = fillTemplate(tpl.tagline, vars);
    results.push({
      type: tpl.type, label: tpl.label, time: tpl.time,
      body: [hook, "", body, "", menuBlock, "", CONTACT_BLOCK_SHORT, "", tagline].join("\n"),
    });
  }

  return results;
}
