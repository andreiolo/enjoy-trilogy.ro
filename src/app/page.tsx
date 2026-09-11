"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { menuData } from "./menu-data";

const playfair = "var(--font-playfair), 'Playfair Display', serif";

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

function FadeIn({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useFadeIn();
  return <div ref={ref} className={`fade-section ${className}`}>{children}</div>;
}

/* ─────────────── WRAPPER ─────────────── */
const wrap = "wrap";

/* ─────────────── HEADER ─────────────── */
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    ["#home", "Acasă"],
    ["#restaurant", "Restaurant"],
    ["#menu", "Meniu"],
    ["#box", "Trilogy Box"],
    ["#events", "Evenimente"],
    ["#contact", "Contact"],
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
        <Link href="#home" onClick={() => setOpen(false)} className="flex items-center gap-3 group shrink-0">
          <div className="w-[44px] h-[44px] lg:w-[48px] lg:h-[48px] rounded-full overflow-hidden border border-black/8 group-hover:border-[var(--color-gold)] transition-colors shrink-0">
            <Image src="/images/logo-trilogy.png" alt="Trilogy" width={48} height={48} className="w-full h-full object-cover scale-[1.15]" />
          </div>
          <div className="hidden sm:block">
            <div className={`text-[15px] font-semibold tracking-wide leading-tight transition-colors ${scrolled ? "text-[#1a1714]" : "text-white"}`}>Trilogy</div>
            <div className={`text-[9px] tracking-[0.18em] uppercase transition-colors ${scrolled ? "text-[#1a1714]/40" : "text-white/50"}`}>Restaurant & Events</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
          {links.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className={`text-[11px] tracking-[0.14em] uppercase font-medium transition-colors duration-300 ${
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

/* ─────────────── HERO ─────────────── */
function Hero() {
  return (
    <section id="home" className="relative h-dvh min-h-[640px] max-h-[1000px] flex items-center justify-center overflow-hidden">
      <Image src="/images/trilogy-3.jpg" alt="" fill priority sizes="100vw" className="object-cover brightness-[0.32]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-white/80" />

      <div className="relative z-10 text-center px-6 w-full max-w-lg mx-auto">
        <div className="w-[80px] h-[80px] md:w-[96px] md:h-[96px] mx-auto mb-7 rounded-full overflow-hidden border-2 border-white/25 shadow-[0_0_40px_rgba(255,255,255,0.06)]">
          <Image src="/images/logo-trilogy.png" alt="Trilogy" width={96} height={96} className="w-full h-full object-cover scale-[1.12]" />
        </div>

        <h1 className="text-[52px] md:text-[72px] lg:text-[88px] font-bold tracking-[-0.01em] text-white leading-[0.95] mb-3 uppercase">
          Trilogy
        </h1>

        <p className="text-[12px] md:text-[14px] tracking-[0.35em] uppercase text-white/60 font-medium mb-6">
          Restaurant & Events
        </p>

        <div className="w-10 h-[2px] bg-[var(--color-gold)] mx-auto mb-6" />

        <p className="text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white/40 mb-10">
          Vulcan &middot; Valea Jiului &middot; Din 2019
        </p>

        <a
          href="tel:+40728385754"
          className="inline-block px-10 py-3.5 bg-[var(--color-gold)] text-white text-[11px] font-bold tracking-[0.18em] uppercase rounded-full hover:bg-[#b8913f] transition-all duration-300 shadow-[0_4px_20px_rgba(201,160,80,0.3)]"
        >
          Rezervă o masă
        </a>

        <a
          href="https://www.google.com/maps?cid=8367969335751616068"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex w-fit mx-auto items-center gap-1.5 text-[11px] text-white/45 hover:text-white/75 transition-colors"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--color-gold)"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>
          4,5 pe Google &middot; 904 recenzii
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/25 animate-bounce">
        <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9" /></svg>
      </div>
    </section>
  );
}

/* ─────────────── 3 CARDS ─────────────── */
function CardsSection() {
  const cards = [
    { href: "#restaurant", image: "/images/trilogy-3.jpg", title: "Restaurant", desc: "Mâncare gătită cu pasiune, într-un ambient cald.", cta: "Descoperă" },
    { href: "#menu",       image: "/images/trilogy-2.jpg", title: "Meniu",      desc: "Preparate simple, bine făcute. Gusturi autentice.", cta: "Vezi meniul" },
    { href: "#events",     image: "/images/trilogy-4.jpg", title: "Evenimente", desc: "Cadrul perfect pentru ocazii care contează.",       cta: "Vezi detalii" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className={wrap}>
        <FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {cards.map((c, i) => (
              <a key={i} href={c.href} className="group relative block rounded-2xl overflow-hidden border border-black/[0.05] hover:shadow-[0_10px_36px_rgba(0,0,0,0.1)] transition-all duration-500">
                <div className="relative h-[340px] sm:h-[380px] lg:h-[440px] overflow-hidden">
                  <Image src={c.image} alt={c.title} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 text-center flex flex-col items-center">
                  <h3 className="text-[20px] sm:text-[24px] font-bold text-white uppercase tracking-[0.06em] mb-1.5">{c.title}</h3>
                  <p className="text-[13px] text-white/65 mb-5 leading-relaxed max-w-[240px]">{c.desc}</p>
                  <span className="inline-flex items-center gap-2 px-5 py-2 border border-white/25 text-white text-[10px] tracking-[0.14em] uppercase font-semibold rounded-full group-hover:bg-white group-hover:text-[#1a1714] transition-all duration-300">
                    {c.cta}
                    <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────── DIVIDER ─────────────── */
function Divider({ bg = "bg-white" }: { bg?: string }) {
  return <div className={bg}><div className={`${wrap}`}><div className="h-px bg-black/[0.06]" /></div></div>;
}

/* ─────────────── FEATURE SECTION ─────────────── */
function FeatureSection({
  id, label, title, description, bullets, image, imageAlt, cta, ctaHref, external, reverse, bg = "bg-white",
}: {
  id: string; label: string; title: string; description: string; bullets?: string[];
  image: string; imageAlt: string; cta: string; ctaHref: string; external?: boolean; reverse?: boolean; bg?: string;
}) {
  return (
    <section id={id} className={`${bg} py-16 md:py-24 lg:py-28`}>
      <div className={wrap}>
        <FadeIn>
          <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center`}>
            {/* Image */}
            <div className={reverse ? "lg:order-2" : ""}>
              <div className="rounded-2xl overflow-hidden shadow-[0_6px_32px_rgba(0,0,0,0.08)] border border-black/[0.04]">
                <Image src={image} alt={imageAlt} width={640} height={480} className="w-full h-[280px] sm:h-[340px] md:h-[400px] lg:h-[460px] object-cover" />
              </div>
            </div>

            {/* Text */}
            <div className={`${reverse ? "lg:order-1" : ""} flex flex-col justify-center`}>
              <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--color-gold)] font-semibold mb-4">{label}</p>

              <h2 className="text-[26px] sm:text-[30px] md:text-[34px] lg:text-[38px] font-bold leading-[1.15] text-[#1a1714] uppercase tracking-[0.02em] mb-5" style={{ fontFamily: playfair }}>
                {title}
              </h2>

              <div className="w-10 h-[2px] bg-[var(--color-gold)] mb-5" />

              <p className="text-[14px] sm:text-[15px] text-[#1a1714]/50 leading-[1.8] mb-6 max-w-md">
                {description}
              </p>

              {bullets && (
                <ul className="space-y-2.5 mb-7">
                  {bullets.map((t, i) => (
                    <li key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] text-[#1a1714]/40">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              )}

              <a href={ctaHref} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="inline-flex items-center gap-2 text-[13px] text-[#1a1714]/55 hover:text-[var(--color-gold)] font-medium transition-colors duration-300 group self-start">
                {cta}
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────── PHOTO BANNER ─────────────── */
function PhotoBanner() {
  return (
    <section className="relative h-[320px] sm:h-[400px] md:h-[480px] lg:h-[540px] overflow-hidden">
      <Image src="/images/trilogy-1.jpg" alt="Interior Trilogy" fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-white/20" />
    </section>
  );
}

/* ─────────────── FULL MENU ─────────────── */
const TAG_LABEL: Record<string, string> = { kids: "Copii", vegetarian: "Vegetarian", chef: "Recomandarea bucătarului" };

function FullMenu() {
  const [active, setActive] = useState(0);
  const category = menuData[active];

  return (
    <div className="max-w-3xl mx-auto mb-14 text-left">
      <div className="flex gap-2 overflow-x-auto pb-3 mb-8 -mx-6 px-6 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center scrollbar-none">
        {menuData.map((cat, i) => (
          <button
            key={cat.id}
            onClick={() => setActive(i)}
            className={`shrink-0 px-4 py-2 rounded-full text-[10.5px] font-bold uppercase tracking-[0.08em] whitespace-nowrap transition-all duration-300 cursor-pointer ${
              i === active
                ? "bg-[var(--color-gold)] text-white"
                : "bg-white text-[#1a1714]/45 border border-black/[0.08] hover:border-[var(--color-gold)]/50 hover:text-[#1a1714]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="text-center mb-8">
        <p className="text-[13px] text-[#1a1714]/40 italic max-w-md mx-auto">{category.tagline}</p>
      </div>

      <div className="space-y-6">
        {category.items.map((item, i) => (
          <div key={i}>
            <div className="flex items-baseline gap-2">
              <span className="text-[15px] font-bold text-[#1a1714] uppercase tracking-[0.01em]" style={{ fontFamily: playfair }}>{item.name}</span>
              {item.weight && <span className="text-[11px] text-[#1a1714]/35">{item.weight}</span>}
              {item.tags?.map((t) => (
                <span key={t} title={TAG_LABEL[t]} className="text-[9px] px-1.5 py-0.5 rounded-full border border-[var(--color-gold)]/40 text-[var(--color-gold)] uppercase tracking-wide font-semibold shrink-0">
                  {t === "kids" ? "Copii" : t === "vegetarian" ? "Veg" : "★ Chef"}
                </span>
              ))}
              <span className="flex-1 border-b border-dotted border-black/15 translate-y-[-3px]" />
              <span className="text-[15px] font-bold text-[var(--color-gold)] shrink-0">{item.price} lei</span>
            </div>
            {item.desc && <p className="text-[12.5px] text-[#1a1714]/40 leading-relaxed mt-1">{item.desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── MENU CTA ─────────────── */
function MenuSection() {
  return (
    <section id="menu" className="bg-[#f9f7f3] py-16 md:py-24 lg:py-28">
      <div className={wrap}>
        <FadeIn className="text-center max-w-lg mx-auto">
          <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--color-gold)] font-semibold mb-4">La pachet & Pick-up</p>
          <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1a1714] uppercase tracking-[0.02em] mb-4" style={{ fontFamily: playfair }}>
            Meniu
          </h2>
          <div className="w-10 h-[2px] bg-[var(--color-gold)] mx-auto mb-10" />
        </FadeIn>
        <FadeIn>
          <FullMenu />
        </FadeIn>
        <FadeIn className="text-center max-w-lg mx-auto">
          <p className="text-[14px] sm:text-[15px] text-[#1a1714]/45 leading-[1.8] mb-3">
            Verifici meniul zilei, ne suni, iar noi îți pregătim comanda la pachet.
          </p>
          <p className="text-[14px] sm:text-[15px] text-[#1a1714]/45 leading-[1.8] mb-10">
            Sună la{" "}
            <a href="tel:+40728385754" className="text-[var(--color-gold)] font-semibold hover:underline">0728 385 754</a>
          </p>
          <a
            href="/meniu.pdf"
            target="_blank"
            className="inline-flex items-center gap-3 px-9 py-3.5 bg-[var(--color-gold)] text-white text-[11px] font-bold tracking-[0.16em] uppercase rounded-full hover:bg-[#b8913f] transition-all duration-300 shadow-[0_4px_16px_rgba(201,160,80,0.2)]"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>
            Vezi Meniul Complet
          </a>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────── CONTACT ─────────────── */
function ContactSection() {
  const contactItems = [
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>, label: "Mihai Viteazu nr. 26, Bl. 18, Parter", sub: "Vulcan, Hunedoara" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, label: "0728 385 754", href: "tel:+40728385754" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>, label: "enjoy.trilogy@gmail.com", href: "mailto:enjoy.trilogy@gmail.com" },
    { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>, label: "Zilnic: 09:30 – 22:00" },
  ];

  return (
    <section id="contact" className="bg-white py-16 md:py-24 lg:py-28">
      <div className={wrap}>
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--color-gold)] font-semibold mb-4">Unde ne găsești</p>
            <h2 className="text-[26px] sm:text-[30px] md:text-[36px] font-bold text-[#1a1714] uppercase tracking-[0.02em] mb-4" style={{ fontFamily: playfair }}>
              Locație & Contact
            </h2>
            <div className="w-10 h-[2px] bg-[var(--color-gold)] mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
            {/* Info */}
            <div className="flex flex-col justify-center">
              <div className="flex gap-3 mb-8">
                {[
                  { name: "Facebook", href: "https://www.facebook.com/TrilogyVulcan", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg> },
                  { name: "Instagram", href: "https://www.instagram.com/TrilogyVulcan", svg: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg> },
                ].map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener" aria-label={s.name}
                    className="w-10 h-10 rounded-full border border-black/8 flex items-center justify-center text-[#1a1714]/35 hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-all duration-300">
                    {s.svg}
                  </a>
                ))}
              </div>

              <div className="space-y-5">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/[0.08] flex items-center justify-center text-[var(--color-gold)] shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      {item.href ? (
                        <a href={item.href} className="text-[14px] sm:text-[15px] text-[#1a1714]/65 hover:text-[var(--color-gold)] transition-colors">{item.label}</a>
                      ) : (
                        <p className="text-[14px] sm:text-[15px] text-[#1a1714]/65">{item.label}</p>
                      )}
                      {item.sub && <p className="text-[12px] text-[#1a1714]/30 mt-0.5">{item.sub}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] border border-black/[0.04] min-h-[360px] lg:min-h-[400px]">
              <iframe
                src="https://www.google.com/maps?q=Restaurant+Trilogy,+Mihai+Viteazu+26,+Vulcan,+Romania&z=17&output=embed"
                loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen
                className="border-0 w-full h-full min-h-[360px] lg:min-h-[400px]"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────── FOOTER ─────────────── */
function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => setYear(new Date().getFullYear()), []);

  const footerLinks = [
    ["#home", "Acasă"], ["#restaurant", "Restaurant"], ["#menu", "Meniu"],
    ["#box", "Trilogy Box"], ["#events", "Evenimente"], ["#contact", "Contact"],
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
function CookiePopup() {
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

/* ─────────────── PAGE ─────────────── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CardsSection />

        <Divider />

        <FeatureSection
          id="restaurant" label="Restaurant Trilogy"
          title="Prânz, cină și seri lungi în Vulcan."
          description="Mâncare gătită ca acasă, într-un decor cu aer vintage și postere de film. Fie că vii la prânz sau stai la povești până seara, e genul de loc din care pleci greu de la masă."
          bullets={["Feluri principale consistente, pentru prânz sau cină", "Garnituri, salate și deserturi pe care le tot comanzi", "Mese pentru cupluri sau grupuri mai mari"]}
          image="/images/trilogy-3.jpg" imageAlt="Interior Restaurant Trilogy"
          cta="Descoperă experiența" ctaHref="#box"
        />

        <PhotoBanner />

        <FeatureSection
          id="box" label="Trilogy Box · Always Ready"
          title="Mâncare caldă, gata de livrare."
          description="Gătim zilnic, porționăm, ambalăm și încărcăm în cutiile Trilogy. Când suni, mâncarea este deja pregătită — doar urcă în mașină și pornește spre tine."
          bullets={["Porții gătite zilnic în funcție de cerere", "Caserole gândite să mențină căldura și textura", "Livrare Luni–Vineri, în Vulcan și Petroșani"]}
          image="/images/trilogy-2.jpg" imageAlt="Trilogy Box"
          cta="Comandă acum" ctaHref="tel:+40728385754" reverse bg="bg-[#f9f7f3]"
        />

        <FeatureSection
          id="events" label="Trilogy Events"
          title="Evenimente fără griji."
          description="Tu alegi locul — noi venim cu meniul, logistica și atmosfera. De la cine restrânse până la petreceri mai mari, Trilogy Events se ocupă de tot ce înseamnă mâncare, bar și set-up."
          bullets={["Catering complet pentru evenimente private sau corporate", "Bar, veselă, echipamente și detalii de decor, la cerere", "Consultanță pentru meniuri potrivite evenimentului tău"]}
          image="/images/trilogy-4.jpg" imageAlt="Eveniment Trilogy"
          cta="Contactează-ne pe WhatsApp" ctaHref="https://wa.me/40728385754?text=Bun%C4%83!%20A%C8%99%20vrea%20informa%C8%9Bii%20despre%20organizarea%20unui%20eveniment%20la%20Trilogy." external
        />

        <Divider />
        <MenuSection />
        <ContactSection />
      </main>
      <Footer />
      <CookiePopup />
    </>
  );
}
