/**
 * Single source of truth for business info (NAP consistency matters for local SEO).
 * Update here and it propagates to every page, schema block, and footer.
 */

export const BUSINESS = {
  name: "ShingleTech",
  legalName: "Shingle Tech LLC",
  owner: "Nic Nappier",
  tagline: "Roofing Excellence Since 2013",
  phone: "(636) 221-7284",
  phoneHref: "tel:636-221-7284",
  phoneE164: "+16362217284",
  email: "nic@shingletech.com",
  emailHref: "mailto:nic@shingletech.com",
  url: "https://shingletech.com",
  founded: "2013",
  address: {
    street: "313 Franklin Ave",
    locality: "Union",
    region: "MO",
    postalCode: "63084",
    country: "US",
  },
  geo: {
    // Union, MO
    latitude: 38.4501,
    longitude: -91.0085,
  },
} as const;

export const YEARS_IN_BUSINESS = new Date().getFullYear() - Number(BUSINESS.founded);

/**
 * Trust signals verified against public sources (Google/BBB/Owens Corning
 * directory) — keep these accurate if anything changes.
 */
export const TRUST = {
  googleRating: "4.9",
  googleReviewCount: "100+",
  bbbRating: "A+",
  credentials: [
    "Owens Corning Preferred Contractor",
    "HAAG Certified Inspector",
    "BBB A+ Rating",
    "Washington Area Chamber of Commerce Member",
  ],
} as const;

export interface ServiceArea {
  slug: string;
  city: string;
  state: string;
  blurb: string;
  landmarks: string[];
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    slug: "washington-mo",
    city: "Washington",
    state: "MO",
    blurb:
      "Washington is where ShingleTech got its start in 2013. From historic downtown homes near the Missouri River to newer neighborhoods off Highway 100, we've been protecting Washington roofs from day one — and chances are we've already worked on a house on your street.",
    landmarks: ["Downtown Washington", "Washington Riverfront", "Highway 100 corridor", "Phoenix Center"],
  },
  {
    slug: "union-mo",
    city: "Union",
    state: "MO",
    blurb:
      "Union is home base — our shop is right on Franklin Ave. We handle everything from full roof replacements in established neighborhoods to storm damage repairs after the hail and wind events that roll through the area, with the fastest response times anywhere in our service area.",
    landmarks: ["Downtown Union", "East Central College area", "Highway 47 & 50 corridor"],
  },
  {
    slug: "pacific-mo",
    city: "Pacific",
    state: "MO",
    blurb:
      "Pacific homes take a beating from storms moving up the I-44 corridor. We respond quickly to wind and hail damage in Pacific and handle insurance claims, repairs, and complete roof replacements for homes and businesses alike.",
    landmarks: ["Downtown Pacific", "I-44 corridor", "Route 66 area"],
  },
  {
    slug: "sullivan-mo",
    city: "Sullivan",
    state: "MO",
    blurb:
      "We're proud to serve Sullivan homeowners with the same quality and responsiveness we're known for closer to home. From asphalt shingle replacements to metal roofing, our crews regularly work throughout the Sullivan area.",
    landmarks: ["Downtown Sullivan", "I-44 & Highway 185"],
  },
  {
    slug: "st-clair-mo",
    city: "St. Clair",
    state: "MO",
    blurb:
      "St. Clair homeowners call us for honest inspections and straightforward pricing. Whether it's a small leak repair or a full replacement after storm damage, we treat every St. Clair roof like it's on our own house.",
    landmarks: ["Downtown St. Clair", "I-44 & Highway 47"],
  },
  {
    slug: "new-haven-mo",
    city: "New Haven",
    state: "MO",
    blurb:
      "Just up the river from Washington, New Haven is part of our core service area. We provide roofing, siding, and storm damage services for homes throughout New Haven and the surrounding countryside.",
    landmarks: ["Downtown New Haven", "Missouri River bluffs", "Highway 100"],
  },
  {
    slug: "gray-summit-mo",
    city: "Gray Summit",
    state: "MO",
    blurb:
      "From Gray Summit out along Highway 100, we serve homeowners with complete roofing and siding services — quality materials, tidy job sites, and a local crew that shows up when we say we will.",
    landmarks: ["Shaw Nature Reserve area", "Highway 100 & I-44"],
  },
];

export const SERVICES = [
  {
    slug: "shingle-roofing",
    title: "Shingle Roofing",
    short: "Owens Corning asphalt shingle installation and replacement with expert craftsmanship.",
  },
  {
    slug: "metal-roofing",
    title: "Metal Roofing",
    short: "Standing seam and metal roofing systems built to last 50+ years.",
  },
  {
    slug: "roofing-repair-storm-damage",
    title: "Roof Repair & Storm Damage",
    short: "24/7 emergency response, leak repair, and insurance claim assistance.",
  },
  {
    slug: "siding-installation-repair",
    title: "Siding Installation & Repair",
    short: "Vinyl and fiber cement siding that protects and transforms your home.",
  },
  {
    slug: "commercial-roofing",
    title: "Commercial Roofing",
    short: "TPO, EPDM flat roofing systems and roof coatings for commercial buildings.",
  },
] as const;
