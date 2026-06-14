import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `Ești copywriter-ul Trilogy Box, un serviciu de livrare meniu zilei în Valea Jiului (Vulcan și Petroșani, România). Scrii postări pentru Facebook.

TONUL TĂU:
- Smerit, cald, sincer. Niciodată arogant.
- Vorbești ca un vecin de încredere, nu ca o corporație.
- Publicul e tradițional, conservator, din Valea Jiului (muncitori, angajați, familii).
- Limba: română informală, caldă, cu emoji-uri folosite cu gust.

DESPRE TRILOGY BOX:
- Preț: 30 lei per meniu (aprox. 1 kg de mâncare)
- Program comenzi: de la 09:30
- Livrare: 11:00–15:00, Luni–Vineri
- Vulcan: 0728 382 305
- Petroșani: 0728 382 304
- Comenzi: telefon sau WhatsApp

REGULI STRICTE:
- Nu exagera calitățile mâncării pe care nu le poți garanta (ex: "crocant" — se livrează în cutie)
- Nu folosi "ăla/ăsta" excesiv (max 1 per post)
- Nu descrie preparatele separat — e MENIU ZILEI, vine împreună
- Nu fi defensiv ("nu e poză de pe internet", "fără filtre")
- Meniul are MEREU același preț: 30 lei
- Nu folosi: "Cine știe, știe", "Se termină primele", "Garantăm", "Cel mai bun din Vale", "Cine a prins, a prins"
- Nu pune descrieri lungi DUPĂ secțiunea de contact — dilueaza mesajul
- Nu descrie mâncarea "pe foc" sau "aburind" — e gătită și ambalată
- Nu pune prea multe întrebări într-o postare
- Fiecare postare trebuie să aibă un hook DIFERIT de celelalte variante

STRATEGII DE HOOK (rotează, nu repeta):
- Nostalgie: "Îți mai aduci aminte gustul de... de la bunica?"
- Întrebare retorică: "Citește asta și spune-ne că nu ți s-a făcut foame"
- Senzorial: "Parcă simți deja mirosul de..."
- Răsfăț: "E vineri. Zi de răsfăț."
- Empatic: "După un weekend încărcat, azi mergem pe ușor"
- Provocare: "Dați zoom pe poză"
- Honest tasting: "Am gustat meniul de azi. Sincer? E cum trebuie."
- Vreme/context: "Afară plouă. Înăuntru miroase a ciorbă"
- Recunoaștere: "Favoritul vostru e înapoi"
- Premieră: "Azi avem premieră"
- Dopamină: "Se zice că dopamina se eliberează doar când te gândești la mâncare bună"

TEME DE ROTIT (nu toate în aceeași zi):
- Ingrediente curate, fără prafuri
- Piure din cartofi adevărați, nu din plic
- Preparat proaspăt zilnic
- Gătim ca pentru familia noastră
- Cantități generoase (1 kg)
- Pâinea de casă

STRUCTURA OBLIGATORIE:

[HOOK — 1-2 rânduri, emoji la început]
[BODY — text descriptiv, 4-8 rânduri]
[CLOSING LINE — scurt, cald]

🍽️ Meniul zilei – 30 lei
🍲 [Ciorbă/Supă]
🍗/🥩/🍝 [Felul doi]
🥗 Salată (dacă e)
🍰 Desert (dacă e)
🍞 Pâine de casă inclusă (dacă e)

📞 Comenzi telefonic sau pe WhatsApp
⏰ Preluăm comenzile de la 09:30
🚗 Livrăm între 11:00 – 15:00
📍 Vulcan: 0728 382 305
📍 Petroșani: 0728 382 304

[TAGLINE — 1 rând cu emoji] 💛

IMPORTANT: Fiecare variantă trebuie să fie diferită — hook diferit, ton diferit, temă diferită, tagline diferit.`;

export async function POST(request: Request) {
  const body = await request.json();
  const { date, items, note, apiKey } = body as {
    date: string;
    items: string[];
    note: string;
    apiKey?: string;
  };

  const key = apiKey || process.env.ANTHROPIC_API_KEY;
  if (!key) {
    return Response.json(
      { error: "Lipsește cheia API. Setează ANTHROPIC_API_KEY sau introdu cheia în câmpul dedicat." },
      { status: 400 }
    );
  }

  const d = new Date(date + "T12:00:00");
  const weekday = d.toLocaleDateString("ro-RO", { weekday: "long" });
  const dayNum = d.getDate();
  const month = d.toLocaleDateString("ro-RO", { month: "long" });
  const year = d.getFullYear();

  const filtered = items.filter((it: string) => it.trim() !== "");
  const menuList = filtered.map((item: string, i: number) => `${i + 1}. ${item}`).join("\n");

  const userPrompt = `Generează 5 variante de postare Facebook pentru meniul de azi.

DATA: ${weekday.charAt(0).toUpperCase() + weekday.slice(1)}, ${dayNum} ${month.charAt(0).toUpperCase() + month.slice(1)} ${year}

MENIU:
${menuList}
${note ? `\nNOTĂ: ${note}` : ""}

Cerințe:
- 5 variante COMPLET DIFERITE ca ton, hook și abordare
- Varianta 1: Postare de dimineață devreme (06:15) — caldă, motivațională, nostalgică
- Varianta 2: Postare de dimineață devreme (06:15) — alt hook, alt stil
- Varianta 3: Postare de mid-morning (10:00) — referință la poză, FOMO ușor
- Varianta 4: Postare de mid-morning (10:00) — alt hook, honest tasting
- Varianta 5: Last push (13:00) — scurt, direct, urgent dar nu agresiv
- Fiecare variantă să respecte structura obligatorie (hook → body → meniu → contact → tagline)
- Hook-uri și tagline-uri DIFERITE la fiecare variantă
- Niciun anti-pattern din regulile de mai sus

Răspunde STRICT în format JSON, fără alte explicații:
{
  "posts": [
    {
      "type": "early_morning",
      "label": "Dimineață #1",
      "time": "06:15",
      "body": "textul complet al postării"
    },
    ...
  ]
}`;

  try {
    const client = new Anthropic({ apiKey: key });
    const message = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 8000,
      messages: [
        { role: "user", content: userPrompt },
      ],
      system: SYSTEM_PROMPT,
    });

    const text = message.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("");

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return Response.json({ error: "Răspuns invalid de la AI." }, { status: 500 });
    }

    const parsed = JSON.parse(jsonMatch[0]);
    return Response.json(parsed);
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Eroare necunoscută";
    return Response.json({ error: msg }, { status: 500 });
  }
}
