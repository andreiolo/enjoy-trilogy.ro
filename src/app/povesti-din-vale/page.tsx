import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Header, Footer, CookiePopup, FadeIn, wrap, playfair } from "../components/SiteChrome";
import { povestiData } from "../povesti-data";

export const metadata: Metadata = {
  title: "Povești din Vale · Restaurant Trilogy",
  description:
    "Ghiduri și povești despre Vulcan și Valea Jiului — munți, trecători, istorie locală și tot ce merită știut înainte să pornești la drum.",
};

export default function PovestiDinVale() {
  return (
    <>
      <Header />
      <main className="pt-[110px] lg:pt-[130px] pb-20 md:pb-28 bg-white min-h-screen">
        <div className={wrap}>
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--color-gold)] font-semibold mb-4">Restaurant Trilogy</p>
            <h1 className="text-[30px] sm:text-[38px] md:text-[44px] font-bold text-[#1a1714] uppercase tracking-[0.02em] mb-4" style={{ fontFamily: playfair }}>
              Povești din Vale
            </h1>
            <div className="w-10 h-[2px] bg-[var(--color-gold)] mx-auto mb-6" />
            <p className="text-[14px] sm:text-[15px] text-[#1a1714]/50 leading-[1.8]">
              Munți, trecători, istorie locală și tot ce merită știut despre Vulcan și Valea Jiului — scrise de noi, din locul unde trăim.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {povestiData.map((a) => (
                <Link
                  key={a.slug}
                  href={`/povesti-din-vale/${a.slug}`}
                  className="group block rounded-2xl overflow-hidden border border-black/[0.06] hover:shadow-[0_10px_36px_rgba(0,0,0,0.1)] transition-all duration-500"
                >
                  <div className="relative h-[200px] overflow-hidden">
                    <Image
                      src={a.coverImage}
                      alt={a.title}
                      fill
                      sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5">
                    <h2 className="text-[16px] font-bold text-[#1a1714] leading-snug mb-2" style={{ fontFamily: playfair }}>
                      {a.title}
                    </h2>
                    <p className="text-[13px] text-[#1a1714]/45 leading-relaxed mb-3">{a.excerpt}</p>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-gold)] font-semibold uppercase tracking-wide">
                      Citește
                      <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" className="transition-transform group-hover:translate-x-1"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
      <CookiePopup />
    </>
  );
}
