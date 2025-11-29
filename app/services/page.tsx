import Link from "next/link";
import Image from "next/image";
import { FaHome, FaIndustry, FaTools, FaPaintBrush, FaCheckCircle, FaPhone, FaEnvelope, FaClock, FaWarehouse } from "react-icons/fa";

export const metadata = {
  title: "Roofing & Siding Services | ShingleTech - Washington, MO",
  description: "Expert roofing and siding services including shingle roofing, siding installation, metal roofing, commercial flat roofing, and roof coatings in Franklin County, Missouri.",
};

export default function Services() {
  const services = [
    {
      icon: <FaHome className="text-6xl text-red-600" />,
      title: "Shingle Roofing",
      description: "Professional asphalt shingle roofing installation and repair services for residential properties. We use only premium materials from trusted manufacturers.",
      features: [
        "High-quality asphalt shingles",
        "Expert installation techniques",
        "Storm damage repairs",
        "Complete re-roofing services",
        "Free estimates & consultations",
        "Warranty-backed workmanship"
      ]
    },
    {
      icon: <FaWarehouse className="text-6xl text-red-600" />,
      title: "Siding Installation & Repair",
      description: "Transform your home's exterior with professional siding installation. We specialize in vinyl and fiber cement siding that enhances curb appeal while protecting your home.",
      features: [
        "Vinyl siding installation",
        "Fiber cement siding (Hardie Board)",
        "Siding repair & replacement",
        "Color & style consultation",
        "Energy-efficient options",
        "Weatherproof installation"
      ]
    },
    {
      icon: <FaIndustry className="text-6xl text-red-600" />,
      title: "Metal Roofing",
      description: "Durable, energy-efficient metal roofing solutions that provide long-lasting protection for your home or business.",
      features: [
        "Standing seam metal roofs",
        "Energy-efficient materials",
        "50+ year lifespan",
        "Low maintenance requirements",
        "Weather & fire resistant",
        "Modern, attractive aesthetics"
      ]
    },
    {
      icon: <FaTools className="text-6xl text-red-600" />,
      title: "Commercial Flat Roofing",
      description: "Specialized TPO and EPDM flat roofing systems designed specifically for commercial buildings and business properties.",
      features: [
        "TPO roofing systems",
        "EPDM rubber roofing",
        "Commercial repairs & maintenance",
        "Preventive maintenance programs",
        "24/7 emergency services",
        "Licensed commercial contractors"
      ]
    },
    {
      icon: <FaPaintBrush className="text-6xl text-red-600" />,
      title: "Commercial Roof Coatings",
      description: "Professional roof coating services to extend the life of your commercial roof, improve energy efficiency, and prevent leaks.",
      features: [
        "Reflective roof coatings",
        "Leak prevention & sealing",
        "Energy cost savings",
        "Cost-effective alternative",
        "Extended roof lifespan",
        "Environmentally friendly options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
            <div className="flex items-center gap-4">
              <a href="tel:636-221-7284" className="flex items-center gap-2 hover:text-red-100">
                <FaPhone className="text-xs" />
                <span className="font-semibold">(636) 221-7284</span>
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:nic@shingletech.com" className="flex items-center gap-2 hover:text-red-100">
                <FaEnvelope className="text-xs" />
                <span>nic@shingletech.com</span>
              </a>
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <FaClock />
              <span>24/7 Emergency Service Available</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="ShingleTech Logo"
                width={60}
                height={60}
                className="w-12 h-12 sm:w-16 sm:h-16"
              />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-slate-900">ShingleTech</div>
                <div className="text-xs sm:text-sm text-red-600 font-semibold">Roofing Excellence Since 2013</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-slate-700 hover:text-red-600 font-semibold transition-colors">
                Home
              </Link>
              <Link href="/services" className="text-red-600 font-semibold">
                Services
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-red-600 font-semibold transition-colors">
                About
              </Link>
              <Link
                href="/#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center gap-2">
              <Link href="/" className="text-slate-700 hover:text-red-600 font-semibold text-sm">
                Home
              </Link>
              <Link
                href="/#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm"
              >
                Free Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header/Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-red-500">Roofing & Siding Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8">
              Comprehensive roofing and siding solutions for residential and commercial properties in Franklin County
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-lg"
            >
              Get Your Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center bg-white rounded-2xl shadow-xl p-8 md:p-12 border-t-4 border-red-600`}
              >
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center gap-2">
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
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                24/7 Emergency Roofing Services
              </h2>
              <p className="text-xl text-red-100">
                Storm damage? Leak? We&apos;re here to help anytime, day or night.
              </p>
            </div>
            <a
              href="tel:636-221-7284"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-5 rounded-lg text-xl font-bold transition-all transform hover:scale-105 shadow-xl flex items-center gap-3 whitespace-nowrap"
            >
              <FaPhone className="text-2xl" />
              <span>(636) 221-7284</span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-red-600">ShingleTech</span>?
            </h2>
            <p className="text-xl text-slate-600">
              Quality workmanship backed by years of experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Licensed & Insured",
                description: "Fully licensed and insured for your protection"
              },
              {
                title: "Quality Materials",
                description: "We use only premium roofing materials"
              },
              {
                title: "Expert Team",
                description: "Experienced professionals you can trust"
              },
              {
                title: "Free Estimates",
                description: "No-obligation quotes for all services"
              }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <FaCheckCircle className="text-red-600 text-5xl mx-auto mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free estimate on your roofing project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:636-221-7284"
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg"
            >
              Call (636) 221-7284
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.png"
                  alt="ShingleTech Logo"
                  width={50}
                  height={50}
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="text-2xl font-bold">ShingleTech</h3>
                  <p className="text-red-500 text-sm font-semibold">Roofing Excellence Since 2013</p>
                </div>
              </div>
              <p className="text-slate-400 mb-4">
                Professional roofing services for residential and commercial properties in Franklin County, Missouri.
              </p>
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <FaClock />
                <span>24/7 Emergency Service</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-red-500">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/#contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4 text-red-500">Contact Info</h4>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-start gap-2">
                  <FaHome className="mt-1 flex-shrink-0" />
                  <span>Washington, MO 63090</span>
                </li>
                <li>
                  <a href="tel:636-221-7284" className="flex items-center gap-2 hover:text-white">
                    <FaPhone />
                    <span>(636) 221-7284</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:nic@shingletech.com" className="flex items-center gap-2 hover:text-white break-all">
                    <FaEnvelope />
                    <span>nic@shingletech.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} ShingleTech. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
