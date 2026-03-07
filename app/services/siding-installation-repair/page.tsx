import Link from "next/link";
import { FaWarehouse, FaCheckCircle } from "react-icons/fa";
import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Siding Installation & Repair | ShingleTech - Washington, MO",
  description: "Professional siding installation and repair in Franklin County. Vinyl siding, fiber cement (Hardie Board), color consultation, and weatherproof installation. Free estimates.",
};

export default function SidingInstallationRepairPage() {
  const features = [
    "Vinyl siding installation",
    "Fiber cement siding (Hardie Board)",
    "Siding repair & replacement",
    "Color & style consultation",
    "Energy-efficient options",
    "Weatherproof installation",
  ];

  return (
    <ServiceLandingLayout
      heroTitle="Siding Installation & Repair"
      heroSubtitle="Transform your home's exterior with professional siding installation. Vinyl and fiber cement siding that enhances curb appeal and protects your home in Franklin County."
    >
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600">
            <div className="flex-shrink-0">
              <FaWarehouse className="text-6xl text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Expert Siding for Your Home
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                ShingleTech specializes in vinyl and fiber cement siding that stands up to Missouri weather while boosting your home&apos;s value and curb appeal. From full installation to repair and replacement, we deliver quality workmanship and lasting results.
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
