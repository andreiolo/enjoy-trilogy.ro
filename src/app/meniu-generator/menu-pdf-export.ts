import type { MenuCategory, MenuItem } from "./menu-data";

const PW = 794;
const PH = 1123;
const HEADER_H = 115;
const AVAIL = PH - 60 - HEADER_H;

type Block =
  | { k: "cat"; name: string; subtitle?: string; h: number }
  | { k: "pair"; left: MenuItem; right?: MenuItem; h: number }
  | { k: "sep"; h: number };

function estItemH(it: MenuItem): number {
  const cpl = 38;
  const lines = it.ingredients ? Math.max(1, Math.ceil(it.ingredients.length / cpl)) : 0;
  return 32 + lines * 15 + 12;
}

function tagEmoji(t: string): string {
  if (t === "vegetarian") return " 🌿";
  if (t === "copii") return " 🐻";
  if (t === "bucătar") return " 🏅";
  return "";
}

function headerHTML(): string {
  return `<div style="text-align:center;height:${HEADER_H}px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
    <div style="display:flex;align-items:center;justify-content:center;width:100%;">
      <div style="flex:1;display:flex;align-items:center;justify-content:flex-end;gap:8px;">
        <span style="font-family:var(--font-montserrat),'Montserrat',sans-serif;font-size:10px;letter-spacing:5px;color:#444;">M A N C A R E</span>
        <div style="width:35px;height:1px;background:#888;"></div>
      </div>
      <img src="/icon-192.png" style="width:65px;height:65px;margin:0 14px;" />
      <div style="flex:1;display:flex;align-items:center;gap:8px;">
        <div style="width:35px;height:1px;background:#888;"></div>
        <span style="font-family:var(--font-montserrat),'Montserrat',sans-serif;font-size:10px;letter-spacing:5px;color:#444;">M E N I U</span>
      </div>
    </div>
    <div style="width:75%;height:1px;background:linear-gradient(to right,transparent,#aaa,transparent);margin-top:8px;"></div>
  </div>`;
}

function catHeaderHTML(name: string, subtitle?: string): string {
  return `<div style="text-align:center;margin:10px 0 8px;">
    <div style="display:flex;align-items:center;gap:8px;">
      <div style="flex:1;height:1px;background:linear-gradient(to right,transparent,#555);"></div>
      <div style="flex:1;height:1px;background:linear-gradient(to left,transparent,#555);"></div>
    </div>
    <div style="font-family:var(--font-playfair),'Playfair Display',serif;font-size:22px;color:#1a1714;letter-spacing:7px;text-transform:uppercase;margin:4px 0 2px;">${name.toUpperCase().replace(/ /g, "   ").replace(/&/g, "&amp;")}</div>
    ${subtitle ? `<div style="font-size:10px;color:#666;font-style:italic;line-height:1.4;">${subtitle}</div>` : ""}
    <div style="display:flex;align-items:center;gap:8px;margin-top:5px;">
      <div style="flex:1;max-width:220px;margin-left:auto;height:1px;background:linear-gradient(to right,transparent,#555);"></div>
      <div style="flex:1;max-width:220px;margin-right:auto;height:1px;background:linear-gradient(to left,transparent,#555);"></div>
    </div>
  </div>`;
}

function itemHTML(item: MenuItem): string {
  const tags = (item.tags || []).filter(t => t !== "sezon").map(tagEmoji).join("");
  const sezon = item.tags?.includes("sezon");
  return `<div style="text-align:center;padding:5px 3px;">
    <div style="font-family:var(--font-montserrat),'Montserrat',sans-serif;font-size:12px;font-weight:800;color:#1a1714;text-transform:uppercase;line-height:1.35;">${item.name.toUpperCase()} ...${item.weight.toUpperCase()}... ${item.price} LEI${tags}</div>
    ${item.ingredients ? `<div style="font-size:10.5px;color:#333;margin-top:2px;line-height:1.45;">${item.ingredients}</div>` : ""}
    ${sezon ? `<div style="font-size:10px;color:#333;margin-top:1px;">--- Produs de Sezon ---</div>` : ""}
  </div>`;
}

function watermarkHTML(): string {
  const c = (t: string, l: string, b: string, r: string) =>
    `position:absolute;width:18px;height:18px;border-${t}:1px solid #c4a962;border-${l}:1px solid #c4a962;${b};${r}`;
  return `<div style="width:${PW}px;height:${PH}px;background:#fff;position:relative;overflow:hidden;">
    <div style="${c("top", "left", "top:22px", "left:16px")}"></div>
    <div style="${c("top", "right", "top:22px", "right:16px")}"></div>
    <div style="${c("bottom", "left", "bottom:22px", "left:16px")}"></div>
    <div style="${c("bottom", "right", "bottom:22px", "right:16px")}"></div>
    <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);color:#c4a962;font-size:9px;">▸</div>
    <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);color:#c4a962;font-size:9px;">◂</div>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);">
      <img src="/images/logo-trilogy.png" style="width:400px;opacity:0.08;" />
    </div>
  </div>`;
}

function legendsHTML(): string {
  return `<div style="margin-top:24px;text-align:center;font-family:var(--font-montserrat),'Montserrat',sans-serif;">
    <div style="font-size:12px;font-weight:700;color:#1a1714;margin-bottom:10px;line-height:1.5;">
      🐻 &nbsp; RECOMANDAT PENTRU COPII – UȘOR DE IUBIT, PENTRU CEI MICI ȘI MARI DEOPOTRIVĂ.
    </div>
    <div style="font-size:12px;font-weight:700;color:#1a1714;margin-bottom:10px;line-height:1.5;">
      🌿 &nbsp; FĂRĂ CARNE (VEGETARIAN) – PREPARATE GĂTITE CU LEGUME, BRÂNZETURI ȘI AROME PROASPETE.
    </div>
    <div style="font-size:12px;font-weight:700;color:#1a1714;margin-bottom:16px;line-height:1.5;">
      🏅 &nbsp; RECOMANDAREA BUCĂTARULUI – PREPARATE VEDETĂ, ALESE PENTRU GUSTUL LOR DEOSEBIT.
    </div>
    <div style="font-size:11px;color:#cc0000;font-weight:700;margin-bottom:6px;line-height:1.5;">
      Produsele subliniate din meniu conțin sau pot conține alergeni.<br/>Consultă ospătarul dacă ai vreo alergie cunoscută.
    </div>
    <div style="font-size:11px;color:#cc0000;font-weight:700;margin-bottom:20px;">
      *Produsele marcate cu asterix sunt congelate.
    </div>
    <div style="width:60%;height:1px;background:linear-gradient(to right,transparent,#aaa,transparent);margin:0 auto 14px;"></div>
    <div style="font-size:13px;font-weight:800;color:#1a1714;letter-spacing:2px;margin-bottom:6px;">RESTAURANT TRILOGY</div>
    <div style="font-size:11px;color:#333;margin-bottom:4px;">Bd. Mihai Viteazu, nr. 26, bl. 18, Parter, Vulcan, jud. Hunedoara</div>
    <div style="font-size:12px;font-weight:700;color:#1a1714;margin-bottom:6px;">tel : 0728 385 754</div>
    <div style="font-size:11px;color:#333;margin-bottom:2px;">ⓕ TrilogyVulcan</div>
    <div style="font-size:11px;color:#333;">ⓘ Enjoy.Trilogy</div>
  </div>`;
}

function allergenPageHTML(): string {
  return `<div style="width:${PW}px;height:${PH}px;background:#fff;position:relative;overflow:hidden;box-sizing:border-box;padding:60px 50px;font-family:var(--font-montserrat),'Montserrat',sans-serif;">
    <div style="text-align:center;margin-bottom:20px;">
      <div style="font-size:36px;font-weight:900;color:#1a1714;letter-spacing:4px;margin-bottom:8px;">INFO ALERGENI</div>
      <div style="width:60%;height:2px;background:#1a1714;margin:0 auto;"></div>
    </div>
    <div style="font-size:14px;font-weight:700;color:#1a1714;margin-bottom:14px;">Substanțe care cauzează alergii sau intoleranțe:</div>
    <div style="font-size:12px;color:#333;line-height:1.7;">
      <div style="border-top:1px solid #999;margin-bottom:8px;"></div>
      1. Cereale care conțin gluten și anume: grâu, secară, orz, ovăz, grâu spelt, grâu dur, sau hibrizi ai acestora și produse derivate, exceptând:<br/>
      a) siropurile de glucoză obținute din grâu, inclusiv dextroză;<br/>
      b) maltodextrine obținute din grâu;<br/>
      c) siropurile de glucoză obținute din orz;<br/>
      d) cereale utilizate pentru fabricarea distilatelor sau a alcoolului etilic de origine agricolă.<br/>
      2. Crustacee și produse derivate.<br/>
      3. Ouă și produse derivate.<br/>
      4. Pește și produse derivate.<br/>
      5. Arahide și produse derivate.<br/>
      6. Soia și produse derivate.<br/>
      7. Lapte și produse derivate (inclusiv lactoza).<br/>
      8. Fructe cu coajă lemnoasă, adică:<br/>
      a) migdale; b) alune de pădure; c) nuci; d) nuci Caju; e) nuci Pecan; f) nuci de Brazilia; g) fistic; h) nuci de macadamia; i) nuci de Queensland;<br/>
      j) produse derivate, exceptând fructele cu coaja utilizate pentru fabricarea distilatelor sau a alcoolului etilic de origine agricolă.<br/>
      9. Țelină și produse derivate.<br/>
      10. Muștar și produse derivate.<br/>
      11. Semințe de susan și produse derivate.<br/>
      12. Lupin și produse derivate.<br/>
      13. Moluște și produse derivate.
    </div>
    <div style="margin-top:18px;font-size:12px;color:#cc0000;font-weight:600;line-height:1.6;">
      Consumatorii care suferă de anumite alergii sunt sfătuiți să consulte personalul cu privire la produsele/felurile de mâncare/băuturile ce conțin componente alergene.
    </div>
  </div>`;
}

export async function exportFullMenuPDF(menuData: MenuCategory[]): Promise<void> {
  const { toPng } = await import("html-to-image");
  const jspdfModule = await import("jspdf");
  const jsPDF = jspdfModule.jsPDF || jspdfModule.default;
  await document.fonts.ready;

  const CAT_H = 85;
  const SEP_H = 25;
  const LEGEND_H = 320;

  const pairH = (a: MenuItem, b?: MenuItem) =>
    Math.max(estItemH(a), b ? estItemH(b) : 0);

  // Paginate
  const pages: Block[][] = [];
  let cur: Block[] = [];
  let used = 0;

  const flush = () => {
    if (cur.length) {
      pages.push(cur);
      cur = [];
      used = 0;
    }
  };

  for (const cat of menuData) {
    if (cat.items.length === 0) continue;

    if (cur.length > 0) {
      if (used + SEP_H + CAT_H > AVAIL) {
        flush();
      } else {
        cur.push({ k: "sep", h: SEP_H });
        used += SEP_H;
      }
    }

    if (used + CAT_H > AVAIL) flush();
    cur.push({ k: "cat", name: cat.name, subtitle: cat.subtitle, h: CAT_H });
    used += CAT_H;

    for (let i = 0; i < cat.items.length; i += 2) {
      const left = cat.items[i];
      const right = cat.items[i + 1];
      const h = pairH(left, right);

      if (used + h > AVAIL) {
        flush();
        cur.push({ k: "cat", name: cat.name, subtitle: cat.subtitle, h: CAT_H });
        used += CAT_H;
      }

      cur.push({ k: "pair", left, right, h });
      used += h;
    }
  }
  flush();

  // Check if legends fit on last page
  const lastPage = pages[pages.length - 1];
  const lastUsed = lastPage.reduce((s, b) => s + b.h, 0);
  const legendsFitOnLast = lastUsed + LEGEND_H <= AVAIL;

  // Render
  const container = document.createElement("div");
  container.style.cssText = "position:absolute;left:-9999px;top:0;";
  document.body.appendChild(container);

  const imgs: string[] = [];

  const capture = async (el: HTMLElement) => {
    container.appendChild(el);
    const img = await toPng(el, { width: PW, height: PH, pixelRatio: 2, cacheBust: true });
    imgs.push(img);
  };

  for (let pi = 0; pi < pages.length; pi++) {
    const pg = document.createElement("div");
    pg.style.cssText = `width:${PW}px;height:${PH}px;background:#fff;box-sizing:border-box;padding:30px 40px;position:relative;overflow:hidden;font-family:var(--font-poppins),'Poppins',sans-serif;`;

    pg.innerHTML = headerHTML();

    for (const b of pages[pi]) {
      const d = document.createElement("div");
      if (b.k === "cat") {
        d.innerHTML = catHeaderHTML(b.name, b.subtitle);
      } else if (b.k === "sep") {
        d.style.cssText = `height:${b.h}px;display:flex;align-items:center;`;
        d.innerHTML = `<div style="flex:1;height:1px;background:linear-gradient(to right,transparent,#888,transparent);"></div>`;
      } else if (b.k === "pair") {
        d.style.cssText = "display:grid;grid-template-columns:1fr 1fr;gap:6px;";
        d.innerHTML = itemHTML(b.left) + (b.right ? itemHTML(b.right) : "<div></div>");
      }
      pg.appendChild(d);
    }

    // Legends on last content page if they fit
    if (pi === pages.length - 1 && legendsFitOnLast) {
      const ld = document.createElement("div");
      ld.innerHTML = legendsHTML();
      pg.appendChild(ld);
    }

    await capture(pg);

    // Watermark page after each content page
    const wm = document.createElement("div");
    wm.innerHTML = watermarkHTML();
    await capture(wm.firstElementChild as HTMLElement);
  }

  // Legends on separate page if didn't fit
  if (!legendsFitOnLast) {
    const lp = document.createElement("div");
    lp.style.cssText = `width:${PW}px;height:${PH}px;background:#fff;box-sizing:border-box;padding:30px 40px;position:relative;overflow:hidden;font-family:var(--font-poppins),'Poppins',sans-serif;`;
    lp.innerHTML = headerHTML() + legendsHTML();
    await capture(lp);

    const wm2 = document.createElement("div");
    wm2.innerHTML = watermarkHTML();
    await capture(wm2.firstElementChild as HTMLElement);
  }

  // Allergen page
  const ap = document.createElement("div");
  ap.innerHTML = allergenPageHTML();
  await capture(ap.firstElementChild as HTMLElement);

  document.body.removeChild(container);

  // Build PDF
  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  for (let i = 0; i < imgs.length; i++) {
    if (i > 0) pdf.addPage();
    pdf.addImage(imgs[i], "PNG", 0, 0, 210, 297, undefined, "FAST");
  }
  pdf.save("meniu_trilogy_complet.pdf");
}
