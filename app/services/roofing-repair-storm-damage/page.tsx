import Link from "next/link";
import { FaTools, FaCheckCircle } from "react-icons/fa";
import ServiceLandingLayout from "../../components/ServiceLandingLayout";

export const metadata = {
  title: "Roofing Repair & Storm Damage | ShingleTech - Washington, MO",
  description: "24/7 roof repair and storm damage restoration in Franklin County, MO. Leak repair, shingle replacement, insurance claims, and emergency roofing. Free inspections.",
};

export default function RoofingRepairStormDamagePage() {
  const features = [
    "Storm damage inspection & repair",
    "Leak detection and repair",
    "Shingle replacement & patching",
    "Insurance claim assistance",
    "24/7 emergency response",
    "Free estimates & inspections",
  ];

  return (
    <ServiceLandingLayout
      heroTitle="Roofing Repair & Storm Damage"
      heroSubtitle="Fast, reliable roof repair and storm damage restoration. We're here 24/7 when you need us—Washington, MO and all of Franklin County."
    >
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600">
            <div className="flex-shrink-0">
              <FaTools className="text-6xl text-red-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                When Storms Hit, We Respond
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Hail, wind, and severe weather can leave your roof damaged and your home at risk. ShingleTech provides thorough inspections, honest assessments, and quality repairs—and we work with your insurance so you can focus on getting back to normal.
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
