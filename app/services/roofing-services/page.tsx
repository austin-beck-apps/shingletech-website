import Link from "next/link";
import { FaHome, FaCheckCircle } from "react-icons/fa";
import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Roofing Services | ShingleTech - Washington, MO",
  description: "Full-service roofing in Franklin County: shingle roofing, metal roofing, repairs, storm damage, and commercial flat roofing. Licensed, insured, 24/7 emergency.",
};

const serviceLinks = [
  { href: "/services/shingle-roofing", title: "Shingle Roofing", description: "Asphalt shingle installation and replacement" },
  { href: "/services/metal-roofing", title: "Metal Roofing", description: "Durable metal roofing systems" },
  { href: "/services/roofing-repair-storm-damage", title: "Roof Repair & Storm Damage", description: "Repairs and storm damage restoration" },
];

export default function RoofingServicesPage() {
  const features = [
    "Residential & commercial roofing",
    "New installation & full replacement",
    "Repairs & storm damage",
    "Licensed & insured",
    "Free estimates",
    "24/7 emergency service",
  ];

  return (
    <ServiceLandingLayout
      heroTitle="Roofing Services"
      heroSubtitle="Complete roofing solutions for Washington, MO and Franklin County—from new roofs and replacements to repairs and storm damage."
    >
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600">
            <div className="flex-shrink-0">
              <FaHome className="text-6xl text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Your Local Roofing Experts
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ShingleTech has been serving Franklin County since 2013 with quality roofing—shingle, metal, flat commercial roofs, and more. Whether you need a new roof, replacement, or repair, we deliver professional work and honest communication.
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <FaCheckCircle className="text-red-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Our Roofing Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="block bg-white rounded-xl p-6 shadow-lg hover:shadow-xl border-t-4 border-red-600 transition-all hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600">{s.description}</p>
                  <span className="inline-block mt-3 text-red-600 font-semibold">Learn more →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ServiceLandingLayout>
  );
}
