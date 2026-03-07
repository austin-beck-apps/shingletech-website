import Link from "next/link";
import { FaHome, FaCheckCircle } from "react-icons/fa";
import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Shingle Roofing | ShingleTech - Washington, MO",
  description: "Professional asphalt shingle roofing installation and repair in Franklin County. Premium materials, expert installation, storm damage repair, re-roofing. Free estimates.",
};

export default function ShingleRoofingPage() {
  const features = [
    "High-quality asphalt shingles",
    "Expert installation techniques",
    "Storm damage repairs",
    "Complete re-roofing services",
    "Free estimates & consultations",
    "Warranty-backed workmanship",
  ];

  return (
    <ServiceLandingLayout
      heroTitle="Shingle Roofing"
      heroSubtitle="Professional asphalt shingle roofing for your home. Premium materials, expert installation, and lasting results across Franklin County."
    >
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600">
            <div className="flex-shrink-0">
              <FaHome className="text-6xl text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Quality Shingle Roofs You Can Trust
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ShingleTech installs and repairs asphalt shingle roofs using only premium materials from trusted manufacturers. From full re-roofs to storm damage repair, we deliver workmanship that stands up to Missouri weather and comes with the backing you expect.
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
