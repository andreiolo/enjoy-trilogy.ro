import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer, CookiePopup, wrap, playfair } from "../components/SiteChrome";
import { getNutritionData } from "../nutrition-data";
import NutritionBrowser from "./NutritionBrowser";

export const metadata: Metadata = {
  title: "Valori nutriționale · Restaurant Trilogy",
  description:
    "Valori nutriționale estimative pentru preparatele din meniul Restaurant Trilogy Vulcan: energie, grăsimi, glucide, zaharuri, proteine și sare, per porție și per 100 g.",
};

export default function ValoriNutritionale() {
  const categories = getNutritionData();

  return (
    <>
      <Header />
      <main className="pt-[110px] lg:pt-[130px] pb-20 md:pb-28 bg-[#f9f7f3] min-h-screen">
        <div className={wrap}>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--color-gold)] font-semibold mb-4">Meniu Trilogy</p>
            <h1 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-[#1a1714] uppercase tracking-[0.02em] mb-4" style={{ fontFamily: playfair }}>
              Valori nutriționale
            </h1>
            <div className="w-10 h-[2px] bg-[var(--color-gold)] mx-auto" />
          </div>

          <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-[var(--color-gold)]/35 bg-white px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[var(--color-gold)] mb-2">Valori estimative</p>
            <p className="text-[13px] sm:text-[14px] text-[#1a1714]/65 leading-relaxed">
              Toate cifrele de pe această pagină sunt <strong className="text-[#1a1714]">estimative</strong>. Le-am calculat pe baza
              ingredientelor din rețete și a valorilor medii din tabelele de compoziție a alimentelor, nu prin analize de laborator.
              Valorile reale pot să difere de la porție la porție, în funcție de gramajul exact al ingredientelor, de metoda de gătire
              și de furnizori. Folosește-le ca orientare, nu ca informație medicală sau dietetică exactă.
            </p>
          </div>

          <NutritionBrowser categories={categories} />

          <div className="max-w-3xl mx-auto mt-14 pt-6 border-t border-black/[0.06] text-center space-y-3">
            <p className="text-[11px] text-[#1a1714]/40 leading-relaxed">
              Valori estimative, calculate din rețete. Pot să difere de la porție la porție. Energia este calculată din grăsimi, glucide și
              proteine (9 / 4 / 4 kcal pe gram). Glucidele nu includ fibrele.
            </p>
            <p className="text-[11px] text-[#1a1714]/40 leading-relaxed">
              Pentru informații despre alergeni, consultă{" "}
              <a href="/meniu.pdf" target="_blank" className="text-[var(--color-gold)] hover:underline">meniul în format PDF</a>
              {" "}sau întreabă ospătarul.{" "}
              <Link href="/#menu" className="text-[var(--color-gold)] hover:underline">Înapoi la meniu</Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <CookiePopup />
    </>
  );
}
