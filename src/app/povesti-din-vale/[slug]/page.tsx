import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header, Footer, CookiePopup, FadeIn, wrap, playfair } from "../../components/SiteChrome";
import { povestiData } from "../../povesti-data";

export function generateStaticParams() {
  return povestiData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = povestiData.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} · Povești din Vale`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: `https://www.enjoytrilogy.ro${article.coverImage}` }],
      type: "article",
    },
  };
}

export default async function PoveasteArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = povestiData.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `https://www.enjoytrilogy.ro${article.coverImage}`,
    datePublished: article.publishedDate,
    author: { "@type": "Organization", name: "Restaurant Trilogy" },
    publisher: { "@type": "Organization", name: "Restaurant Trilogy" },
    mainEntityOfPage: `https://www.enjoytrilogy.ro/povesti-din-vale/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="pt-[110px] lg:pt-[130px] pb-20 md:pb-28 bg-white min-h-screen">
        <div className={wrap}>
          <FadeIn className="max-w-2xl mx-auto">
            <Link href="/povesti-din-vale" className="inline-flex items-center gap-1.5 text-[11px] text-[#1a1714]/45 hover:text-[var(--color-gold)] transition-colors mb-8 uppercase tracking-wide font-semibold">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
              Povești din Vale
            </Link>

            <p className="text-[10px] tracking-[0.28em] uppercase text-[var(--color-gold)] font-semibold mb-4">Restaurant Trilogy</p>
            <h1 className="text-[26px] sm:text-[32px] md:text-[38px] font-bold text-[#1a1714] leading-[1.15] mb-6" style={{ fontFamily: playfair }}>
              {article.title}
            </h1>

            <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden border border-black/[0.05] shadow-[0_10px_36px_rgba(0,0,0,0.08)] mb-10">
              <Image src={article.coverImage} alt={article.title} fill sizes="(min-width:1024px) 672px, 100vw" priority className="object-cover" />
            </div>

            <p className="text-[15px] sm:text-[16px] text-[#1a1714]/70 leading-[1.9] mb-10">{article.intro}</p>

            <div className="space-y-9">
              {article.sections.map((s, i) => (
                <div key={i}>
                  <h2 className="text-[18px] sm:text-[20px] font-bold text-[#1a1714] mb-3" style={{ fontFamily: playfair }}>
                    {s.heading}
                  </h2>
                  {s.paragraphs.map((p, j) => (
                    <p key={j} className="text-[14px] sm:text-[15px] text-[#1a1714]/55 leading-[1.9] mb-3 last:mb-0">
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {article.closing && (
              <div className="mt-12 pt-8 border-t border-black/[0.06]">
                <p className="text-[14px] sm:text-[15px] text-[#1a1714]/70 leading-[1.9] italic" style={{ fontFamily: playfair }}>
                  {article.closing}{" "}
                  <Link href="/#menu" className="not-italic text-[var(--color-gold)] font-semibold hover:underline">
                    Vezi meniul complet
                  </Link>
                </p>
              </div>
            )}

            <div className="mt-10 pt-6 border-t border-black/[0.06]">
              <p className="text-[10px] uppercase tracking-wide text-[#1a1714]/30 mb-3 font-semibold">Surse</p>
              <ul className="space-y-1.5">
                {article.sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-[12px] text-[#1a1714]/35 hover:text-[var(--color-gold)] transition-colors underline underline-offset-2">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </main>
      <Footer />
      <CookiePopup />
    </>
  );
}
