import Link from "next/link";
import {
  FaPhone,
  FaCheckCircle,
  FaStar,
  FaTools,
  FaHome,
  FaShieldAlt,
  FaWarehouse,
  FaIndustry,
  FaBuilding,
  FaClipboardCheck,
  FaFileSignature,
  FaHammer,
  FaBroom,
  FaHeart,
  FaMapMarkerAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import GoogleReviewsSection from "./components/GoogleReviewsSection";
import OwensCorningSection from "./components/OwensCorningSection";
import FaqSection from "./components/FaqSection";
import TrustBar from "./components/TrustBar";
import { BUSINESS, SERVICE_AREAS, YEARS_IN_BUSINESS } from "./lib/business";

const HOME_FAQS = [
  {
    question: "How much does a new roof cost in Washington, MO?",
    answer:
      "It depends on your roof's size, pitch, and the materials you choose. Rather than ballpark ranges, we give every homeowner a free, written, itemized estimate — so you know exactly what you're paying for before any work begins.",
  },
  {
    question: "Do you offer free roof inspections?",
    answer:
      "Yes. Every inspection and estimate is completely free with no obligation. We document what we find with photos and give you an honest recommendation — even when the answer is 'your roof is fine.'",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes. ShingleTech is fully licensed and insured, and we've been serving the Washington, MO area continuously since 2013.",
  },
  {
    question: "Do you help with insurance claims for storm damage?",
    answer:
      "Absolutely. We document storm damage thoroughly, meet with your adjuster on-site when needed, and guide you through the claim from first inspection to finished roof.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Union, MO and serve the surrounding communities including Washington, Pacific, Sullivan, St. Clair, New Haven, and Gray Summit — see our Service Areas page for details.",
  },
];

const SERVICES_GRID = [
  {
    href: "/services/shingle-roofing",
    icon: FaHome,
    title: "Shingle Roofing",
    description: "Premium Owens Corning shingle systems installed to spec — from tear-off to ridge cap.",
  },
  {
    href: "/services/metal-roofing",
    icon: FaIndustry,
    title: "Metal Roofing",
    description: "Standing seam systems that last 50+ years and stand up to Missouri hail and wind.",
  },
  {
    href: "/services/roofing-repair-storm-damage",
    icon: FaTools,
    title: "Repair & Storm Damage",
    description: "24/7 emergency response, honest inspections, and insurance claim help.",
  },
  {
    href: "/services/siding-installation-repair",
    icon: FaWarehouse,
    title: "Siding",
    description: "Vinyl and fiber cement siding that protects your home and transforms its curb appeal.",
  },
  {
    href: "/services/commercial-roofing",
    icon: FaBuilding,
    title: "Commercial Roofing",
    description: "TPO, EPDM, and roof coatings for business properties — scheduled around your operations.",
  },
];

const PROCESS_STEPS = [
  {
    icon: FaClipboardCheck,
    title: "1. Free Inspection",
    description: "We inspect your roof, document everything with photos, and give you an honest assessment.",
  },
  {
    icon: FaFileSignature,
    title: "2. Clear Written Quote",
    description: "Itemized pricing covering materials, labor, and timeline. No surprises, no pressure.",
  },
  {
    icon: FaHammer,
    title: "3. Expert Installation",
    description: "Our local crew installs to manufacturer spec — most homes are done in 1–2 days.",
  },
  {
    icon: FaBroom,
    title: "4. Spotless Cleanup",
    description: "Magnetic nail sweep, full haul-away, and a final walkthrough with you.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-25" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 to-transparent" aria-hidden />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-6">
              <FaMapMarkerAlt className="text-red-400" aria-hidden />
              Locally Owned &amp; Operated in Union, MO
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-red-500">Trusted</span> Roofing Experts,
              <br className="hidden sm:block" /> Right Here at Home
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
              Quality roofing and siding for your home or business — from a local team that&apos;s
              been protecting this community since {BUSINESS.founded}.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-xl text-center"
              >
                Get Your Free Estimate
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-xl flex items-center justify-center gap-2"
              >
                <FaPhone className="text-red-600" aria-hidden /> {BUSINESS.phone}
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { icon: FaClock, text: "24/7 Emergency" },
                { icon: FaShieldAlt, text: "Licensed & Insured" },
                { icon: FaStar, text: `${YEARS_IN_BUSINESS}+ Years Local` },
                { icon: FaCheckCircle, text: "Free Estimates" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/15 text-center"
                  >
                    <Icon className="text-red-400 text-2xl mb-2 mx-auto" aria-hidden />
                    <div className="text-sm font-semibold">{item.text}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Roofing &amp; Siding <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Complete exterior solutions, delivered by one local, licensed team
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES_GRID.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl border border-slate-100 transition-all"
                >
                  <div className="bg-red-50 rounded-xl w-14 h-14 flex items-center justify-center mb-5">
                    <Icon className="text-2xl text-red-600" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                    Learn more <FaArrowRight className="text-sm" aria-hidden />
                  </span>
                </Link>
              );
            })}

            {/* Community card in the grid */}
            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-md flex flex-col justify-center">
              <FaHeart className="text-red-500 text-3xl mb-4" aria-hidden />
              <h3 className="text-xl font-bold mb-2">Rooted in the Community</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                We&apos;re your neighbors — locally owned, hiring locally, and giving back to the
                community that&apos;s trusted us since {BUSINESS.founded}.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300">
                Our story <FaArrowRight className="text-sm" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Owens Corning tools */}
      <OwensCorningSection />

      {/* Emergency band */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Storm Damage or Active Leak?</h2>
              <p className="text-xl text-red-100">
                We&apos;re available 24/7 — call now and talk to a real local person.
              </p>
            </div>
            <a
              href={BUSINESS.phoneHref}
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-5 rounded-lg text-xl font-bold transition-colors shadow-xl flex items-center gap-3 whitespace-nowrap"
            >
              <FaPhone className="text-2xl" aria-hidden />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              A Simple, Honest <span className="text-red-600">Process</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From first call to final walkthrough, you always know what&apos;s happening and what it costs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.title} className="text-center">
                  <div className="bg-red-50 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-5">
                    <Icon className="text-red-600 text-3xl" aria-hidden />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <GoogleReviewsSection />

      {/* Why choose us + community */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Your Neighbors Choose <span className="text-red-600">ShingleTech</span>
            </h2>
            <p className="text-xl text-slate-600">A local roofing partner you can actually count on</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {[
              {
                title: `${YEARS_IN_BUSINESS}+ Years of Local Experience`,
                description: `Since ${BUSINESS.founded}, we've protected homes and businesses across the Washington area — and we're not going anywhere.`,
              },
              {
                title: "You Talk to the Owner",
                description: "Call us and you'll reach Nic, the owner — not a call center. Licensed, fully insured, and BBB A+ rated.",
              },
              {
                title: "24/7 Emergency Response",
                description: "Storm damage doesn't wait for business hours. Neither do we — call anytime.",
              },
              {
                title: "Owens Corning Preferred Contractor",
                description: "We install complete Owens Corning roofing systems to spec, with access to enhanced warranty options most roofers can't offer.",
              },
              {
                title: "Free, No-Obligation Estimates",
                description: "Written, itemized quotes at no cost. No pressure — just honest pricing.",
              },
              {
                title: "We Invest in Our Community",
                description: "We hire locally, buy from area lumberyards, and are proud members of the Washington Area Chamber of Commerce.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <FaCheckCircle className="text-red-600 text-2xl mt-1 flex-shrink-0" aria-hidden />
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Proudly Serving <span className="text-red-600">Washington, MO</span> &amp; Surrounding Communities
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Local crews, fast response, and a reputation built one neighborhood at a time
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="bg-white px-5 py-2.5 rounded-lg shadow-sm border border-slate-100 text-slate-700 font-semibold hover:text-red-600 hover:border-red-200 transition-colors"
              >
                {area.city}, {area.state}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="bg-slate-900 text-white px-5 py-2.5 rounded-lg shadow-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        title="Common Roofing Questions"
        subtitle="Straight answers from a local roofer"
        items={HOME_FAQS}
      />

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Free Estimate</h2>
            <p className="text-xl text-slate-300">
              Fill out the form below or call us at{" "}
              <a href={BUSINESS.phoneHref} className="text-red-400 font-bold hover:text-red-300">
                {BUSINESS.phone}
              </a>
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
