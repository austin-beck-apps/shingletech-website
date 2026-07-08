import type { Metadata } from "next";
import Link from "next/link";
import ServicePageLayout from "../../components/ServicePageLayout";
import { SERVICES } from "../../lib/business";

export const metadata: Metadata = {
  title: "Roofing Services in Washington, MO — Replacement, Repair & More",
  description:
    "Full-service roofing in Washington, MO: shingle roofing, metal roofing, repairs, storm damage, and commercial flat roofing. Licensed, insured, 24/7 emergency service.",
  alternates: { canonical: "/services/roofing-services" },
};

export default function RoofingServicesPage() {
  return (
    <ServicePageLayout
      slug="roofing-services"
      title="Roofing Services"
      heroTitle="Complete Roofing Services in Washington, MO"
      heroSubtitle="New roofs, replacements, repairs, and storm damage restoration — one local, licensed team for everything over your head."
      features={[
        "Residential & commercial",
        "New installation & replacement",
        "Repairs & storm damage",
        "Licensed & insured",
        "Free estimates",
        "24/7 emergency service",
      ]}
      sections={[
        {
          heading: "Your Local Roofing Experts",
          body: [
            "ShingleTech has served the Washington, MO area since 2013 with complete roofing services — asphalt shingle, metal, and commercial flat roofing systems. Whether you need a brand-new roof, a full replacement, or a fast repair, you get one local point of contact, quality materials, and workmanship we stand behind in writing.",
            "Explore our specific services below, or contact us and we'll point you in the right direction after a free inspection.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Do you handle both residential and commercial roofs?",
          answer:
            "Yes. We install and service residential shingle and metal roofs as well as TPO, EPDM, and coated flat roofing systems for commercial buildings throughout the Washington, MO area.",
        },
        {
          question: "How do I know whether I need a repair or a full replacement?",
          answer:
            "Start with a free inspection. We'll document your roof's condition with photos and give you an honest recommendation — if a repair will serve you well, that's what we'll quote.",
        },
        {
          question: "Are your estimates really free?",
          answer:
            "Always. Every estimate is free, written, and no-obligation, whether it's for a small repair or a complete replacement.",
        },
      ]}
    >
      {/* Links to specific services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Explore Our Roofing &amp; Exterior Services
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-slate-50 rounded-xl p-7 border border-slate-100 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 mb-3">{s.short}</p>
                <span className="text-red-600 font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ServicePageLayout>
  );
}
