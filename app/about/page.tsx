import Link from "next/link";
import Image from "next/image";
import { FaCheckCircle, FaAward, FaUsers, FaClock, FaPhone, FaEnvelope, FaHome } from "react-icons/fa";

export const metadata = {
  title: "About Us | ShingleTech - Roofing Experts in Washington, MO",
  description: "Learn about ShingleTech, Franklin County's trusted roofing company since 2013. Licensed, insured, and committed to quality workmanship.",
};

export default function About() {
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
              <Link href="/services" className="text-slate-700 hover:text-red-600 font-semibold transition-colors">
                Services
              </Link>
              <Link href="/about" className="text-red-600 font-semibold">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About ShingleTech
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              Your trusted roofing partner in Franklin County since 2013
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-slate-600">
              <p className="mb-4">
                ShingleTech was founded in 2013 with a simple mission: to provide Franklin County
                with the highest quality roofing services at fair prices. What started as a small
                local operation has grown into one of the most trusted names in roofing throughout
                Washington, MO and the surrounding areas.
              </p>
              <p className="mb-4">
                Our team brings decades of combined experience in residential and commercial roofing.
                We specialize in everything from traditional shingle roofing to modern metal systems
                and commercial flat roofing solutions. Every project we undertake is treated with
                the same level of care and attention to detail, whether it&apos;s a small repair or a
                complete roof replacement.
              </p>
              <p>
                We&apos;re proud to serve our community and build lasting relationships with our customers.
                Many of our clients come to us through referrals from satisfied homeowners and business
                owners who trust us to protect their most valuable investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-slate-600">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaCheckCircle className="text-red-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Quality First
              </h3>
              <p className="text-slate-600">
                We never compromise on the quality of our materials or workmanship
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-red-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Integrity
              </h3>
              <p className="text-slate-600">
                Honest assessments, transparent pricing, and reliable service
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-red-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Customer Focus
              </h3>
              <p className="text-slate-600">
                Your satisfaction is our top priority on every project
              </p>
            </div>

            <div className="text-center">
              <div className="bg-red-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <FaClock className="text-red-600 text-4xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Reliability
              </h3>
              <p className="text-slate-600">
                We show up on time and complete projects when promised
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why Choose ShingleTech?
            </h2>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              {[
                {
                  title: "10+ Years of Experience",
                  description: "Over a decade of serving Franklin County with expert roofing solutions"
                },
                {
                  title: "Licensed & Insured",
                  description: "Fully licensed and insured for your protection and peace of mind"
                },
                {
                  title: "24/7 Emergency Service",
                  description: "Available around the clock for emergency repairs and storm damage"
                },
                {
                  title: "Quality Materials",
                  description: "We use only premium materials from trusted manufacturers"
                },
                {
                  title: "Expert Team",
                  description: "Skilled professionals who take pride in their craftsmanship"
                },
                {
                  title: "Free Estimates",
                  description: "No-obligation quotes with transparent pricing"
                },
                {
                  title: "Warranty Backed",
                  description: "Our work is backed by comprehensive warranties"
                },
                {
                  title: "Local Company",
                  description: "Proud to be a part of the Franklin County community"
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <FaCheckCircle className="text-red-600 text-2xl flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Service Area
            </h2>
            <p className="text-xl text-slate-600 mb-6">
              Proudly serving Franklin County and surrounding areas including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-slate-700">
              <div>Washington, MO</div>
              <div>Union, MO</div>
              <div>Pacific, MO</div>
              <div>Sullivan, MO</div>
              <div>St. Clair, MO</div>
              <div>Gray Summit, MO</div>
              <div>New Haven, MO</div>
              <div>And surrounding areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free estimate on your roofing project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-white text-red-600 hover:bg-slate-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:636-221-7284"
              className="bg-red-800 hover:bg-red-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
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
