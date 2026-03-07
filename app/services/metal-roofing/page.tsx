import Link from "next/link";
import { FaIndustry, FaCheckCircle } from "react-icons/fa";
import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Metal Roofing | ShingleTech - Washington, MO",
  description: "Metal roofing installation in Franklin County—standing seam, energy-efficient, 50+ year lifespan. Fire and weather resistant. Free estimates.",
};

export default function MetalRoofingPage() {
  const features = [
    "Standing seam metal roofs",
    "Energy-efficient materials",
    "50+ year lifespan",
    "Low maintenance requirements",
    "Weather & fire resistant",
    "Modern, attractive aesthetics",
  ];

  return (
    <ServiceLandingLayout
      heroTitle="Metal Roofing"
      heroSubtitle="Durable, energy-efficient metal roofing that protects your home for decades. Standing seam and more—built to last in Missouri weather."
    >
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600">
            <div className="flex-shrink-0">
              <FaIndustry className="text-6xl text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Metal Roofs Built to Last
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Metal roofing from ShingleTech offers long-lasting protection, improved energy efficiency, and a clean, modern look. Ideal for residential and commercial properties throughout Franklin County—we install standing seam and other quality metal systems you can count on.
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
        </div>
      </section>
    </ServiceLandingLayout>
  );
}
