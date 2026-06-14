"use client";

import { useState, useEffect, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BASE = "/dl-Z6TcSg1Wp-n49oj9";
const PASS = "trilogy2026";
const KEY = "trilogy_ok";

const NAV: [string, string][] = [
  [`${BASE}`, "Sumar"],
  [`${BASE}/abc`, "ABC / Pareto"],
  [`${BASE}/matrice`, "Matrice"],
  [`${BASE}/categorii`, "Categorii"],
  [`${BASE}/recomandari`, "Recomandări"],
  [`${BASE}/metoda`, "Metodă"],
  [`${BASE}/simulator`, "Simulator"],
  [`${BASE}/retete`, "Rețetare"],
  [`${BASE}/rapoarte`, "Rapoarte"],
  [`${BASE}/plan`, "Plan"],
  [`${BASE}/fise`, "Fișe"],
];

function Gate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(false);
  const [ready, setReady] = useState(false);
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");

  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY) === "1") setOk(true);
    } catch {}
    setReady(true);
  }, []);

  if (!ready) return null;
  if (ok) return <>{children}</>;

  function submit() {
    if (pw === PASS) {
      try { sessionStorage.setItem(KEY, "1"); } catch {}
      setOk(true);
    } else {
      setErr("Parolă greșită.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white border border-[var(--color-line)] rounded-xl p-8 w-80 text-center">
        <h2 className="font-bold text-xl mb-2" style={{ fontFamily: "var(--font-fraunces), Fraunces, serif" }}>
          Trilogy
        </h2>
        <p className="text-[var(--color-ink-soft)] text-xs mb-6">
          Raport intern de analiză a meniului. Introdu parola pentru acces.
        </p>
        <input
          type="password"
          value={pw}
          placeholder="parolă"
          onChange={(e) => { setPw(e.target.value); setErr(""); }}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          autoFocus
          className="w-full border border-[var(--color-line)] rounded-lg px-3 py-2 text-sm outline-none focus:border-[var(--color-olive)] mb-3"
        />
        <button
          onClick={submit}
          className="w-full bg-[var(--color-ink)] text-[var(--color-paper)] rounded-lg py-2 text-xs uppercase tracking-wider cursor-pointer hover:opacity-90"
        >
          Intră
        </button>
        {err && <p className="text-[var(--color-paprika)] text-xs mt-3">{err}</p>}
      </div>
    </div>
  );
}

function Nav() {
  const pathname = usePathname() || BASE;
  const clean = (p: string) => (p.length > 1 ? p.replace(/\/$/, "") : p);

  return (
    <nav className="flex gap-1.5 flex-wrap ml-auto">
      {NAV.map(([href, label]) => (
        <Link
          key={href}
          href={href}
          className={`text-[11px] tracking-wider uppercase no-underline px-2.5 py-1 rounded-md transition-all ${
            clean(href) === clean(pathname)
              ? "bg-[var(--color-ink)] text-[var(--color-paper)]"
              : "text-[var(--color-ink-soft)] hover:bg-[var(--color-line)]"
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}

export default function AnalysisLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "var(--color-paper)",
        color: "var(--color-ink)",
        fontFamily: "var(--font-mono), 'IBM Plex Mono', monospace",
        fontSize: 13,
        lineHeight: 1.6,
      }}
    >
      <Gate>
        <header className="border-b border-[var(--color-line)] py-3.5 sticky top-0 bg-[var(--color-paper)] z-50">
          <div className="max-w-[1100px] mx-auto px-6 flex items-center gap-5">
            <Link
              href={BASE}
              className="no-underline text-[var(--color-ink)] flex items-center gap-1.5"
              style={{ fontFamily: "var(--font-fraunces), Fraunces, serif", fontWeight: 700, fontSize: 18 }}
            >
              <span className="w-2 h-2 rounded-full bg-[var(--color-olive)] inline-block" />
              Trilogy
              <small className="text-[9px] tracking-wider uppercase text-[var(--color-muted)] ml-1.5" style={{ fontFamily: "var(--font-mono), monospace" }}>
                Analiză meniu
              </small>
            </Link>
            <Nav />
          </div>
        </header>
        <main className="py-10 pb-16">
          <div className="max-w-[1100px] mx-auto px-6">{children}</div>
        </main>
        <footer className="border-t border-[var(--color-line)] py-5 text-center text-[10px] text-[var(--color-muted)] uppercase tracking-wider">
          Analiză meniu · ENJOY TRILOGY S.R.L. · Iunie 2026 · Document intern
        </footer>
      </Gate>
    </div>
  );
}
