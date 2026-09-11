import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Fraunces, Playfair_Display, Poppins, Great_Vibes, IM_Fell_English_SC, Montserrat } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const imFell = IM_Fell_English_SC({
  variable: "--font-im-fell",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Trilogy · Restaurant & Events · Vulcan",
  description:
    "Restaurant Trilogy — The perfect Trilogy of Taste. Mâncare gătită cu pasiune în Valea Jiului.",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Trilogy · Restaurant & Events · Vulcan",
    description:
      "Restaurant Trilogy — The perfect Trilogy of Taste. Mâncare gătită cu pasiune în Valea Jiului.",
    url: "https://www.enjoytrilogy.ro",
    siteName: "Restaurant Trilogy",
    images: [
      {
        url: "https://www.enjoytrilogy.ro/icon-512.png",
        width: 512,
        height: 512,
        alt: "Restaurant Trilogy Logo",
      },
    ],
    locale: "ro_RO",
    type: "website",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Restaurant Trilogy",
  image: "https://www.enjoytrilogy.ro/icon-512.png",
  url: "https://www.enjoytrilogy.ro",
  telephone: "+40728385754",
  email: "enjoy.trilogy@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mihai Viteazu nr. 26, Bl. 18, Parter",
    addressLocality: "Vulcan",
    addressRegion: "Hunedoara",
    addressCountry: "RO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:30",
      closes: "22:00",
    },
  ],
  servesCuisine: "Romanian",
  priceRange: "$$",
  menu: "https://www.enjoytrilogy.ro/meniu.pdf",
  sameAs: [
    "https://www.facebook.com/TrilogyVulcan",
    "https://www.instagram.com/TrilogyVulcan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ro"
      className={`${fraunces.variable} ${mono.variable} ${playfair.variable} ${poppins.variable} ${greatVibes.variable} ${imFell.variable} ${montserrat.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
