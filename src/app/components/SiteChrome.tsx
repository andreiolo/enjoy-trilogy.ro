"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const playfair = "var(--font-playfair), 'Playfair Display', serif";
export const wrap = "wrap";

/* ─────────────── FADE-IN ON SCROLL ─────────────── */
function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("is-visible"); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-section ${className}`}>{children}</div>;
}

/* ─────────────── HEADER ─────────────── */
export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolledState, setScrolledState] = useState(false);
  const [open, setOpen] = useState(false);
  const scrolled = isHome ? scrolledState : true;

  useEffect(() => {
    if (!isHome) return;
    const fn = () => setScrolledState(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, [isHome]);

  const links = [
    ["/#home", "Acasă"],
    ["/#restaurant", "Restaurant"],
    ["/#menu", "Meniu"],
    ["/#box", "Trilogy Box"],
    ["/#events", "Evenimente"],
    ["/povesti-din-vale", "Povești din Vale"],
    ["/#contact", "Contact"],
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className={`${wrap} flex items-center justify-between h-[72px] lg:h-[80px]`}>
        <Link href="/#home" onClick={() => setOpen(false)} className="flex items-center gap-3 group shrink-0">
          <div className="w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] rounded-full overflow-hidden border border-black/8 group-hover:border-[var(--color-gold)] transition-colors shrink-0">
            <Image src="/images/logo-trilogy.png" alt="Trilogy" width={48} height={48} className="w-full h-full object-cover scale-[1.15]" />
          </div>
          <div className="hidden sm:block">
            <div className={`text-[15px] font-semibold tracking-wide leading-tight transition-colors ${scrolled ? "text-[#1a1714]" : "text-white"}`}>Trilogy</div>
            <div className={`text-[9px] tracking-[0.18em] uppercase transition-colors ${scrolled ? "text-[#1a1714]/40" : "text-white/50"}`}>Restaurant & Events</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`text-[11px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 whitespace-nowrap ${
                scrolled ? "text-[#1a1714]/50 hover:text-[var(--color-gold)]" : "text-white/60 hover:text-white"
              }`}
            >
              {label}
            </a>
          ))}
          <a
            href="tel:+40728385754"
            className="ml-1 px-7 py-2.5 bg-[var(--color-gold)] text-white text-[10px] font-bold tracking-[0.16em] uppercase rounded-full hover:bg-[#b8913f] transition-all duration-300 shadow-[0_2px_12px_rgba(201,160,80,0.25)]"
          >
            Rezervă
          </a>
        </nav>

        <button className="lg:hidden w-10 h-10 flex items-center justify-center" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="space-y-[5px]">
            <span className={`block w-[22px] h-[1.5px] transition-all duration-300 origin-center ${scrolled ? "bg-[#1a1714]" : "bg-white"} ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] transition-all duration-300 ${scrolled ? "bg-[#1a1714]" : "bg-white"} ${open ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] transition-all duration-300 origin-center ${scrolled ? "bg-[#1a1714]" : "bg-white"} ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </div>
        </button>
      </div>

      <div className={`lg:hidden transition-all duration-400 overflow-hidden ${open ? "max-h-[520px]" : "max-h-0"}`}>
        <nav className="bg-white/98 backdrop-blur-xl px-5 sm:px-8 pb-6 pt-2 border-t border-black/[0.04] shadow-lg">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="block py-3.5 text-[14px] tracking-[0.04em] text-[#1a1714]/60 hover:text-[var(--color-gold)] border-b border-black/[0.04] last:border-0 transition-colors">
              {label}
            </a>
          ))}
          <a href="tel:+40728385754" onClick={() => setOpen(false)} className="mt-4 block text-center py-3 bg-[var(--color-gold)] text-white text-[11px] font-bold tracking-[0.14em] uppercase rounded-full">
            Rezervă
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ─────────────── FOOTER ─────────────── */
export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const footerLinks = [
    ["/#home", "Acasă"], ["/#restaurant", "Restaurant"], ["/#menu", "Meniu"],
    ["/#box", "Trilogy Box"], ["/#events", "Evenimente"], ["/povesti-din-vale", "Povești din Vale"], ["/#contact", "Contact"],
  ];

  return (
    <footer className="bg-[#1a1714] text-white">
      <div className={wrap}>
        <div className="py-12 md:py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full overflow-hidden border border-white/12">
                <Image src="/images/logo-trilogy.png" alt="Trilogy" width={36} height={36} className="w-full h-full object-cover scale-[1.15]" />
              </div>
              <span className="text-[14px] font-semibold tracking-wide">Trilogy</span>
            </div>
            <p className="text-[12px] text-white/25 leading-relaxed max-w-[240px]">Restaurant, livrări și evenimente în Vulcan, Valea Jiului. Din 2019.</p>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-white/20 mb-4 font-semibold">Navigare</p>
            <div className="space-y-2">
              {footerLinks.map(([href, label]) => (
                <a key={href} href={href} className="block text-[12px] text-white/25 hover:text-[var(--color-gold)] transition-colors">{label}</a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[9px] tracking-[0.25em] uppercase text-white/20 mb-4 font-semibold">Contact</p>
            <div className="space-y-2 text-[12px] text-white/25">
              <p>Mihai Viteazu nr. 26, Vulcan</p>
              <a href="tel:+40728385754" className="block hover:text-[var(--color-gold)] transition-colors">0728 385 754</a>
              <a href="mailto:enjoy.trilogy@gmail.com" className="block hover:text-[var(--color-gold)] transition-colors">enjoy.trilogy@gmail.com</a>
              <p className="pt-1">Zilnic: 09:30 – 22:00</p>
            </div>
          </div>
        </div>

        <div className="py-5 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] text-white/15 tracking-wide">
          <span>&copy; {year} Enjoy Trilogy S.R.L.</span>
          <div className="flex items-center gap-4">
            <span>Restaurant</span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/8" />
            <span>Trilogy Box</span>
            <span className="w-[3px] h-[3px] rounded-full bg-white/8" />
            <span>Events</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────── COOKIE ─────────────── */
export function CookiePopup() {
  const [show, setShow] = useState(false);
  useEffect(() => { try { if (!localStorage.getItem("trilogy_cookie_consent")) setShow(true); } catch {} }, []);
  const accept = (v: string) => { try { localStorage.setItem("trilogy_cookie_consent", v); } catch {} setShow(false); };
  if (!show) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[100] p-4 md:p-6">
      <div className="max-w-sm mx-auto bg-white rounded-2xl p-5 border border-black/[0.06] shadow-[0_-6px_30px_rgba(0,0,0,0.1)]">
        <p className="text-[13px] font-semibold text-[#1a1714] mb-1">Folosim cookie-uri</p>
        <p className="text-[12px] text-[#1a1714]/35 mb-4 leading-relaxed">Cookie-uri esențiale și statistici de bază. Nu vindem datele tale.</p>
        <div className="flex justify-end gap-2">
          <button onClick={() => accept("essential")} className="px-4 py-2 text-[10px] tracking-wider uppercase border border-black/8 rounded-full text-[#1a1714]/35 hover:text-[#1a1714] hover:border-black/15 transition-all cursor-pointer">Doar esențiale</button>
          <button onClick={() => accept("all")} className="px-4 py-2 text-[10px] tracking-wider uppercase bg-[var(--color-gold)] text-white font-bold rounded-full hover:bg-[#b8913f] transition-all cursor-pointer">Accept</button>
        </div>
      </div>
    </div>
  );
}
