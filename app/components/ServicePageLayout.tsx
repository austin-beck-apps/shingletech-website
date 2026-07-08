import Link from "next/link";
import { FaCheckCircle, FaPhone } from "react-icons/fa";
import Breadcrumbs from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import FaqSection, { type FaqItem } from "./FaqSection";
import { BUSINESS } from "../lib/business";

export interface ContentSection {
  heading: string;
  body: string[];
  bullets?: string[];
}

interface ServicePageLayoutProps {
  slug: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  features: string[];
  sections: ContentSection[];
  faqs: FaqItem[];
  children?: React.ReactNode;
}

export default function ServicePageLayout({
  slug,
  title,
  heroTitle,
  heroSubtitle,
  features,
  sections,
  faqs,
  children,
}: ServicePageLayoutProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType: title,
    provider: { "@id": `${BUSINESS.url}/#business` },
    areaServed: "Washington, MO and surrounding communities",
    url: `${BUSINESS.url}/services/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: title, href: `/services/${slug}` },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-5">{heroTitle}</h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">{heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg text-center"
              >
                Get a Free Estimate
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <FaPhone className="text-red-600" aria-hidden />
                {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-slate-700 font-medium">
                <FaCheckCircle className="text-red-600 flex-shrink-0" aria-hidden />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section) => (
            <div key={section.heading} className="bg-white rounded-2xl shadow-md p-8 md:p-10 border border-slate-100">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{section.heading}</h2>
              {section.body.map((p, i) => (
                <p key={i} className="text-lg text-slate-600 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
              {section.bullets && (
                <ul className="grid sm:grid-cols-2 gap-3 mt-5">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-slate-700">
                      <FaCheckCircle className="text-red-600 mt-1 flex-shrink-0" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {children}

      <FaqSection title={`${title} FAQs`} items={faqs} />

      <CtaBand
        title={`Get a Free ${title} Estimate`}
        subtitle="Honest advice and clear written pricing from a local team — no pressure, no obligation."
      />
    </>
  );
}
