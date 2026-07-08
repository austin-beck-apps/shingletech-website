import { BUSINESS, SERVICE_AREAS, SERVICES } from "../lib/business";

/**
 * Site-wide RoofingContractor structured data. Rendered once in the root layout
 * so every page carries consistent LocalBusiness signals.
 */
export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    description:
      "Locally owned roofing and siding contractor serving Washington, MO and surrounding communities since 2013. Shingle roofing, metal roofing, siding, storm damage repair, and commercial roofing.",
    url: BUSINESS.url,
    telephone: BUSINESS.phoneE164,
    email: BUSINESS.email,
    logo: `${BUSINESS.url}/logo.png`,
    image: `${BUSINESS.url}/hero-bg.jpg`,
    foundingDate: BUSINESS.founded,
    priceRange: "$$",
    paymentAccepted: ["Cash", "Credit Card", "Check"],
    slogan: BUSINESS.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    areaServed: SERVICE_AREAS.map((a) => ({
      "@type": "City",
      name: `${a.city}, ${a.state}`,
    })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing & Siding Services",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.short,
          url: `${BUSINESS.url}/services/${s.slug}`,
        },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
