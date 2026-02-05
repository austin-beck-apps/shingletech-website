import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaClock, FaCheckCircle, FaStar, FaTools, FaHome, FaShieldAlt, FaWarehouse, FaPaintBrush } from "react-icons/fa";
import ContactForm from "./components/ContactForm";
import DesignEyeQ from "./components/DesignEyeQ";
import GoogleReviews from "./components/GoogleReviews";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "ShingleTech",
    "description": "Professional roofing and siding services in Franklin County, MO since 2013",
    "url": "https://shingletech.com",
    "telephone": "+1-636-221-7284",
    "email": "nic@shingletech.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Washington",
      "addressRegion": "MO",
      "postalCode": "63090",
      "addressCountry": "US"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.5578,
        "longitude": -91.0126
      },
      "geoRadius": "50000"
    },
    "openingHours": "Mo-Su 00:00-24:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Check"],
    "foundingDate": "2013",
    "slogan": "Premium Roofing Services in Franklin County, Missouri",
    "serviceArea": [
      "Washington, MO",
      "Union, MO",
      "Pacific, MO",
      "Sullivan, MO",
      "Franklin County, MO"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Shingle Roofing",
            "description": "Professional asphalt shingle roofing installation and repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Siding Installation",
            "description": "Vinyl and fiber cement siding installation and repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Metal Roofing",
            "description": "Durable metal roofing solutions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Flat Roofing",
            "description": "TPO and EPDM flat roofing systems"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Coatings",
            "description": "Commercial roof coating services"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

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
              <Link href="/services" className="text-slate-700 hover:text-red-600 font-semibold transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-red-600 font-semibold transition-colors">
                About
              </Link>
              <Link
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105 shadow-lg"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile CTA */}
            <Link
              href="#contact"
              className="md:hidden bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold text-sm"
            >
              Free Quote
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white overflow-hidden">
        {/* Background Image - Your Actual Roofing Work */}
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-30"></div>

        {/* Red Overlay Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Franklin County's <span className="text-red-500">Trusted</span> Roofing Experts
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-slate-200">
              Professional Roofing & Siding Solutions for Residential & Commercial Properties
            </p>
            <p className="text-lg md:text-xl mb-8 text-slate-300">
              Serving Washington, MO and surrounding areas since 2013 with expert roofing and siding services,
              quality craftsmanship, honest service, and competitive pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href="#contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-5 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl text-center"
              >
                Get Your Free Estimate Today
              </Link>
              <a
                href="tel:636-221-7284"
                className="bg-white hover:bg-slate-100 text-red-600 px-8 py-5 rounded-lg text-lg font-bold transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Now
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { icon: <FaClock />, text: "24/7 Emergency" },
                { icon: <FaShieldAlt />, text: "Licensed & Insured" },
                { icon: <FaStar />, text: "10+ Years" },
                { icon: <FaCheckCircle />, text: "Free Estimates" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                  <div className="text-red-400 text-3xl mb-2 flex justify-center">{item.icon}</div>
                  <div className="text-sm font-semibold">{item.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our Roofing & Siding <span className="text-red-600">Services</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Complete roofing and siding solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                title: "Shingle Roofing",
                description: "Premium asphalt shingle installation and repair for residential properties. Quality materials, expert installation.",
                icon: <FaHome className="text-5xl text-red-600" />
              },
              {
                title: "Siding Installation",
                description: "Professional vinyl and fiber cement siding installation. Transform your home's exterior with durable, beautiful siding.",
                icon: <FaWarehouse className="text-5xl text-red-600" />
              },
              {
                title: "Metal Roofing",
                description: "Long-lasting metal roofing systems. Energy-efficient, durable, and backed by our quality guarantee.",
                icon: <FaTools className="text-5xl text-red-600" />
              },
              {
                title: "Commercial Roofing",
                description: "TPO and EPDM flat roofing for commercial buildings. Professional service for business properties.",
                icon: <FaShieldAlt className="text-5xl text-red-600" />
              },
              {
                title: "Roof Coatings",
                description: "Extend your roof's life with professional coating services. Cost-effective maintenance solution.",
                icon: <FaStar className="text-5xl text-red-600" />
              }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border-t-4 border-red-600"
              >
                <div className="mb-4 flex justify-center">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-center mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="block text-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold transition-colors text-lg shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Roof Color Visualizer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaPaintBrush className="text-4xl text-red-600" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Visualize Your New <span className="text-red-600">Roof</span>
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Try on different shingle colors and styles before you buy! Upload a photo of your home or use our sample images to see how Owens Corning roofing shingles will look on your property.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <DesignEyeQ />
          </div>
          <div className="text-center mt-8">
            <p className="text-slate-600">
              Like what you see?{" "}
              <a href="#contact" className="text-red-600 font-bold hover:text-red-700">
                Get a free estimate
              </a>
              {" "}to make it a reality!
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="py-12 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Emergency Roof Repair?
              </h2>
              <p className="text-xl text-red-100">
                Storm damage or leak? We're available 24/7 to help!
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

      {/* Google Reviews */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaStar className="text-4xl text-yellow-500" />
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Hear From Our <span className="text-red-600">Happy Customers</span>
              </h2>
            </div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - see what your neighbors have to say about our roofing services
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* Why Choose ShingleTech */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Why Choose <span className="text-red-600">ShingleTech</span>?
            </h2>
            <p className="text-xl text-slate-600">
              Your local roofing partner you can trust
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Over 10 Years of Experience",
                description: "Since 2013, we've been protecting homes and businesses in Franklin County with expert roofing solutions."
              },
              {
                title: "Licensed & Fully Insured",
                description: "Complete peace of mind with proper licensing and comprehensive insurance coverage."
              },
              {
                title: "24/7 Emergency Response",
                description: "Storm damage doesn't wait for business hours. Neither do we. Call us anytime."
              },
              {
                title: "Quality Materials Only",
                description: "We use premium roofing materials from trusted manufacturers for lasting results."
              },
              {
                title: "Free, No-Obligation Estimates",
                description: "Get a detailed quote for your project at no cost. No pressure, just honest pricing."
              },
              {
                title: "Local Family Business",
                description: "We're part of your community. Your neighbors trust us, and we'll earn your trust too."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <FaCheckCircle className="text-red-600 text-3xl mt-1" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Proudly Serving <span className="text-red-600">Franklin County</span> & Surrounding Areas
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Professional roofing services throughout the region
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-slate-700 font-semibold">
              {["Washington", "Union", "Pacific", "Sullivan", "St. Clair", "Gray Summit", "New Haven", "& Surrounding Areas"].map((city, idx) => (
                <span key={idx} className="bg-white px-4 py-2 rounded-lg shadow">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-xl text-red-100">
              Fill out the form below or call us at <a href="tel:636-221-7284" className="underline font-bold">(636) 221-7284</a>
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <ContactForm />

              <div className="mt-8 pt-8 border-t border-slate-200">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <FaPhone className="text-red-600 text-4xl mx-auto mb-3" />
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Call Us</h3>
                    <a href="tel:636-221-7284" className="text-slate-600 hover:text-red-600 text-lg font-semibold">
                      (636) 221-7284
                    </a>
                  </div>
                  <div>
                    <FaEnvelope className="text-red-600 text-4xl mx-auto mb-3" />
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Email Us</h3>
                    <a href="mailto:nic@shingletech.com" className="text-slate-600 hover:text-red-600 break-all">
                      nic@shingletech.com
                    </a>
                  </div>
                  <div>
                    <FaClock className="text-red-600 text-4xl mx-auto mb-3" />
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">Available</h3>
                    <p className="text-slate-600 font-semibold">24/7 Emergency Service</p>
                  </div>
                </div>
              </div>
            </div>
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
                Professional roofing services for residential and commercial properties
                in Franklin County, Missouri. Licensed, insured, and committed to quality.
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
                <li><Link href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
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
