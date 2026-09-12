import type { MetadataRoute } from "next";
import { povestiData } from "./povesti-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.enjoytrilogy.ro",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.enjoytrilogy.ro/povesti-din-vale",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...povestiData.map((a) => ({
      url: `https://www.enjoytrilogy.ro/povesti-din-vale/${a.slug}`,
      lastModified: new Date(a.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
