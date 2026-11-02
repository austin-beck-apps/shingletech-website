# ShingleTech Website

Professional marketing site for ShingleTech, a locally owned roofing & siding contractor in Washington, MO. Built with Next.js 16 (App Router), TypeScript, and Tailwind CSS 4.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, trust bar, services, Owens Corning visualizer, process, reviews, FAQ, contact form |
| `/services` | Services overview |
| `/services/shingle-roofing` | Shingle roofing + OC color explorer & warranty tiers |
| `/services/metal-roofing` | Metal roofing |
| `/services/roofing-repair-storm-damage` | Repair & storm damage |
| `/services/siding-installation-repair` | Siding |
| `/services/commercial-roofing` | Commercial (TPO/EPDM/coatings) |
| `/services/roofing-services` | Legacy general landing page (kept for existing Google Ads links) |
| `/service-areas` + `/service-areas/[city]` | Local-SEO city pages (Washington, Union, Pacific, Sullivan, St. Clair, New Haven, Gray Summit) |
| `/about` | Story, community commitment, credentials |
| `/contact` | Estimate form + contact info |

## Architecture Notes

- **`app/lib/business.ts`** is the single source of truth for the business name, phone, email, service areas, services, and verified trust signals (Google rating, BBB, certifications). Edit there; it propagates everywhere including schema markup.
- **Header/Footer** are shared components rendered from `app/layout.tsx` (with a real mobile hamburger menu).
- **SEO**: `app/sitemap.ts` and `app/robots.ts` are auto-generated routes. JSON-LD structured data lives in `LocalBusinessSchema` (site-wide RoofingContractor), `Breadcrumbs` (BreadcrumbList), `FaqSection` (FAQPage), and `ServicePageLayout` (Service).
- **Owens Corning widgets** (official, free — docs at owenscorning.com/en-us/roofing/widgets):
  - Design EyeQ visualizer on the home page (`OwensCorningSection`)
  - Duration shingle color explorer on the shingle page (`OcShingleWidgets`)
  - `app/lib/oc-widget.ts` handles re-loading OC's `widget.js` across client-side navigations, and rewrites injected iframe URLs to `/en-us/` to dodge an X-Frame-Options block on OC's locale redirect. Don't remove that rewrite.
  - OC's warranty widget (`oc_warranty`) rendered blank when tested (July 2026) — replaced with static warranty content.
- **Contact form** submits client-side to Web3Forms and fires a Google Ads conversion (`ContactForm.tsx`).
- **Analytics**: GA4 + Google Ads tags are in `app/layout.tsx`.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint
```

No environment variables are required for the current site (the old Resend email flow was removed in favor of Web3Forms).

## Deployment

Push to GitHub and deploy on Vercel (or any Node host). Build command `npm run build`, output `.next`.

## Brand

- Primary accent: red-600 (`#dc2626`), dark: slate-900. Defined in `app/globals.css`.
- Typeface: Geist (loaded via `next/font`).

## Before-launch checklist

- [ ] Confirm the Google reviews link in `GoogleReviewsSection.tsx` points at the live Google Business Profile.
- [x] Review quotes approved (sourced verbatim from public GuildQuality/BBB reviews).
- [x] Street address published: 313 Franklin Ave, Union, MO 63084 (footer, contact page, schema). Keep it identical to the Google Business Profile listing — update GBP, BBB, and other directory listings to the new address so NAP citations stay consistent.
- [ ] Submit `https://shingletech.com/sitemap.xml` in Google Search Console after deploy.
