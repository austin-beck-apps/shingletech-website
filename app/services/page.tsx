import type { Metadata } from "next";
import Link from "next/link";
import {
  FaHome,
  FaIndustry,
  FaTools,
  FaWarehouse,
  FaBuilding,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";
import Breadcrumbs from "../components/Breadcrumbs";
import CtaBand from "../components/CtaBand";
import FaqSection from "../components/FaqSection";

export const metadata: Metadata = {
  title: "Roofing & Siding Services in Washington, MO",
  description:
    "Complete roofing and siding services in Washington, MO: shingle roofing, metal roofing, roof repair & storm damage, siding installation, and commercial flat roofing. Free estimates.",
  alternates: { canonical: "/services" },
};

const SERVICES_DETAIL = [
  {
    href: "/services/shingle-roofing",
    icon: FaHome,
    title: "Shingle Roofing",
    description:
      "Premium asphalt shingle installation and replacement using complete Owens Corning roofing systems — underlayment to ridge cap, installed to spec so your warranty holds.",
    features: ["Architectural shingles", "Full tear-off & re-roof", "Complete roofing systems", "Warranty-backed work"],
  },
  {
    href: "/services/metal-roofing",
    icon: FaIndustry,
    title: "Metal Roofing",
    description:
      "Standing seam and metal panel systems that last 50+ years, resist Missouri hail and wind, and cut summer cooling costs.",
    features: ["Standing seam systems", "50+ year lifespan", "Class 4 impact options", "Energy-efficient finishes"],
  },
  {
    href: "/services/roofing-repair-storm-damage",
    icon: FaTools,
    title: "Roof Repair & Storm Damage",
    description:
      "24/7 emergency response for leaks and storm damage, with free documented inspections and start-to-finish insurance claim help.",
    features: ["24/7 emergency response", "Free inspections", "Insurance assistance", "Emergency tarping"],
  },
  {
    href: "/services/siding-installation-repair",
    icon: FaWarehouse,
    title: "Siding Installation & Repair",
    description:
      "Vinyl and fiber cement siding with full trim, soffit, and fascia work — protection and curb appeal in one project.",
    features: ["Vinyl & fiber cement", "Soffit, fascia & trim", "Storm damage repair", "Color consultation"],
  },
  {
    href: "/services/commercial-roofing",
    icon: FaBuilding,
    title: "Commercial Roofing",
    description:
      "TPO and EPDM flat roofing, restorative coatings, and maintenance programs for business properties — scheduled around your operations.",
    features: ["TPO & EPDM systems", "Roof coatings", "Maintenance programs", "Minimal disruption"],
  },
];

const SERVICES_FAQS = [
  {
    question: "Which roofing service do I need?",
    answer:
      "If you're not sure, start with a free inspection. We'll assess your roof's condition, show you photos of what we find, and recommend the most cost-effective path — whether that's a repair, a coating, or a replacement.",
  },
  {
    question: "Do you offer warranties?",
    answer:
      "Yes. Our workmanship is backed in writing, and because we install manufacturer systems to specification, your material warranties stay fully intact.",
  },
  {
    question: "How soon can you start my project?",
    answer:
      "Emergencies get same-day response, 24/7. For planned projects, scheduling depends on the season — we'll give you a realistic start date with your estimate and stick to it.",
  },
];

export default function Services() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing &amp; Siding Services</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Complete exterior solutions for homes and businesses in Washington, MO and the
            surrounding communities — from one local, licensed, and insured team.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
          >
            Get a Free Estimate
          </Link>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {SERVICES_DETAIL.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-xl border border-slate-100 p-8 md:p-10 transition-all flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-red-50 rounded-xl p-4">
                      <Icon className="text-3xl text-red-600" aria-hidden />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{service.title}</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-5">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-2.5 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <FaCheckCircle className="text-red-600 flex-shrink-0" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 text-red-600 font-bold group-hover:gap-3 transition-all">
                    Explore {service.title} <FaArrowRight className="text-sm" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection items={SERVICES_FAQS} />

      <CtaBand />
    </>
  );
}
