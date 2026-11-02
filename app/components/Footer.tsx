import Link from "next/link";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import { BUSINESS, SERVICES, SERVICE_AREAS } from "../lib/business";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="ShingleTech logo" width={48} height={48} className="w-12 h-12" />
              <div>
                <div className="text-xl font-bold tracking-tight">ShingleTech</div>
                <div className="text-red-500 text-xs font-semibold uppercase tracking-wide">
                  {BUSINESS.tagline}
                </div>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              A locally owned and operated roofing and siding company in Union, MO, serving Washington and
              the surrounding communities since {BUSINESS.founded}. Licensed, insured, and proud
              to give back to the community we call home.
            </p>
            <div className="flex items-center gap-2 text-red-500 font-semibold text-sm">
              <FaClock aria-hidden />
              <span>24/7 Emergency Service</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-slate-400 hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                  All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Areas We Serve</h3>
            <ul className="space-y-2.5">
              {SERVICE_AREAS.slice(0, 6).map((a) => (
                <li key={a.slug}>
                  <Link href={`/service-areas/${a.slug}`} className="text-slate-400 hover:text-white transition-colors">
                    Roofing in {a.city}, {a.state}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/service-areas" className="text-red-500 hover:text-red-400 font-semibold transition-colors">
                  All Service Areas →
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4">Contact Us</h3>
            <ul className="space-y-3.5 text-slate-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-red-500 flex-shrink-0" aria-hidden />
                <span>
                  {BUSINESS.address.street}
                  <br />
                  {BUSINESS.address.locality}, {BUSINESS.address.region} {BUSINESS.address.postalCode}
                </span>
              </li>
              <li>
                <a href={BUSINESS.phoneHref} className="flex items-center gap-3 hover:text-white transition-colors">
                  <FaPhone className="text-red-500 flex-shrink-0" aria-hidden />
                  <span className="font-semibold">{BUSINESS.phone}</span>
                </a>
              </li>
              <li>
                <a href={BUSINESS.emailHref} className="flex items-center gap-3 hover:text-white transition-colors break-all">
                  <FaEnvelope className="text-red-500 flex-shrink-0" aria-hidden />
                  <span>{BUSINESS.email}</span>
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} {BUSINESS.name}. All rights reserved. Licensed &amp; Insured.
          </p>
          <p className="flex items-center gap-1.5">
            Locally owned <FaHeart className="text-red-600" aria-hidden /> proudly serving our community
          </p>
        </div>
      </div>
    </footer>
  );
}
