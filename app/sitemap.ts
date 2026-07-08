import type { MetadataRoute } from "next";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "./lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BUSINESS.url, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${BUSINESS.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BUSINESS.url}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BUSINESS.url}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BUSINESS.url}/service-areas`, lastModified, changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    ...SERVICES.map((s) => s.slug),
    "roofing-services", // legacy general landing page kept for existing ads/links
  ].map((slug) => ({
    url: `${BUSINESS.url}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const areaPages: MetadataRoute.Sitemap = SERVICE_AREAS.map((a) => ({
    url: `${BUSINESS.url}/service-areas/${a.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
