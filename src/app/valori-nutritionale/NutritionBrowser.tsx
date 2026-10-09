"use client";

import { useEffect, useState } from "react";
import { playfair } from "../components/SiteChrome";
import type { NutritionCategory, Nutrients } from "../nutrition-data";

function normalize(s: string) {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const nf0 = new Intl.NumberFormat("ro-RO", { maximumFractionDigits: 0 });
const nf1 = new Intl.NumberFormat("ro-RO", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

// Rotunjire după ghidul UE: sub 10 g cu o zecimală, peste 10 g la gram întreg
function grams(v: number) {
  return `${v >= 10 ? nf0.format(v) : nf1.format(v)} g`;
}

const ROWS: [keyof Nutrients, string, boolean?][] = [
  ["fat", "Grăsimi"],
  ["satFat", "din care saturate", true],
  ["carbs", "Glucide"],
  ["sugars", "din care zaharuri", true],
  ["protein", "Proteine"],
  ["salt", "Sare"],
];

export default function NutritionBrowser({ categories }: { categories: NutritionCategory[] }) {
  const [mode, setMode] = useState<"portion" | "per100">("per100");
  const [query, setQuery] = useState("");
  const q = normalize(query.trim());

  // Link-urile din codurile QR (#pizza, #paste…) trebuie să sară la categorie și după hidratare
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const t = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "instant" }), 50);
    return () => clearTimeout(t);
  }, []);

  const visible = q
    ? categories
        .map((cat) => ({ ...cat, items: cat.items.filter((i) => normalize(i.name).includes(q)) }))
        .filter((cat) => cat.items.length > 0)
    : categories;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="sticky top-[72px] lg:top-[80px] z-30 bg-[#f9f7f3] pt-4 -mx-6 px-6 sm:mx-0 sm:px-0">
        <div className="flex justify-center mb-4">
          <div className="relative max-w-sm w-full">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#1a1714]/30"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Caută un preparat"
              className="w-full pl-10 pr-9 py-2.5 rounded-full border border-black/[0.08] bg-white text-[13px] text-[#1a1714] placeholder:text-[#1a1714]/30 focus:outline-none focus:border-[var(--color-gold)]/50 transition-colors"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Șterge căutarea" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#1a1714]/30 hover:text-[#1a1714] cursor-pointer">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            )}
          </div>
        </div>

        {!q && (
          <div className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none">
            {categories.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(cat.id)?.scrollIntoView({ behavior: "instant" });
                  history.replaceState(null, "", `#${cat.id}`);
                }}
                className="shrink-0 px-4 py-2 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em] whitespace-nowrap bg-white text-[#1a1714]/45 border border-black/[0.08] hover:border-[var(--color-gold)]/50 hover:text-[#1a1714] transition-all duration-300"
              >
                {cat.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {q && visible.length === 0 && (
        <p className="text-center text-[13px] text-[#1a1714]/40 italic pt-10">Niciun rezultat pentru „{query}&rdquo;</p>
      )}

      <div className="space-y-12 pt-6">
        {visible.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-[265px]">
            <h2 className="text-[20px] sm:text-[24px] font-bold text-[#1a1714] uppercase tracking-[0.02em] mb-5 text-center" style={{ fontFamily: playfair }}>
              {cat.label}
            </h2>
            <div className="space-y-3">
              {cat.items.map((item) => {
                const n = mode === "portion" ? item.portion : item.per100;
                return (
                  <article key={item.name} className="rounded-2xl bg-white border border-black/[0.06] px-4 py-4 sm:px-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                          <h3 className="text-[14px] sm:text-[15px] font-bold text-[#1a1714] uppercase tracking-[0.01em]" style={{ fontFamily: playfair }}>{item.name}</h3>
                          {item.weight && <span className="text-[11px] text-[#1a1714]/35">{item.weight}</span>}
                          {item.vegetarian && (
                            <span title="Vegetarian" className="text-[9px] px-1.5 py-0.5 rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold)] uppercase tracking-wide font-semibold">
                              Veg
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-[17px] font-bold text-[var(--color-gold)] leading-none">~{nf0.format(n.kcal)} kcal</div>
                        <div className="text-[10px] text-[#1a1714]/35 mt-1">{nf0.format(n.kj)} kJ · {mode === "portion" ? "per porție" : "per 100 g"}</div>
                      </div>
                    </div>
                    <dl className="grid grid-cols-2 sm:grid-cols-6 gap-x-4 gap-y-2 border-t border-black/[0.05] pt-3">
                      {ROWS.map(([key, label, sub]) => (
                        <div key={key} className="flex sm:block justify-between items-baseline">
                          <dt className={`text-[10px] uppercase tracking-[0.06em] ${sub ? "text-[#1a1714]/30" : "text-[#1a1714]/45 font-semibold"}`}>{label}</dt>
                          <dd className="text-[13px] text-[#1a1714] font-semibold sm:mt-0.5">{grams(n[key])}</dd>
                        </div>
                      ))}
                    </dl>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <p className="text-center text-[11px] text-[#1a1714]/35 mt-12">
        {mode === "per100" ? "Valorile sunt afișate per 100 g." : "Valorile sunt afișate per porție."}{" "}
        <button
          onClick={() => setMode(mode === "per100" ? "portion" : "per100")}
          className="underline underline-offset-2 hover:text-[#1a1714]/60 cursor-pointer"
        >
          {mode === "per100" ? "Vezi per porție" : "Vezi per 100 g"}
        </button>
      </p>
    </div>
  );
}
