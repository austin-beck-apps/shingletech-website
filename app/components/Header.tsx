"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPhone, FaEnvelope, FaClock, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { BUSINESS, SERVICES } from "../lib/business";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", children: SERVICES.map((s) => ({ href: `/services/${s.slug}`, label: s.title })) },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu on navigation
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Prevent background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility bar */}
      <div className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center gap-5">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2 hover:text-red-400 transition-colors">
                <FaPhone className="text-red-500 text-xs" aria-hidden />
                <span className="font-semibold">{BUSINESS.phone}</span>
              </a>
              <a href={BUSINESS.emailHref} className="hidden sm:flex items-center gap-2 hover:text-red-400 transition-colors">
                <FaEnvelope className="text-red-500 text-xs" aria-hidden />
                <span>{BUSINESS.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-2 font-medium text-slate-300">
              <FaClock className="text-red-500" aria-hidden />
              <span className="hidden xs:inline sm:inline">24/7 Emergency Service</span>
              <span className="sm:hidden">24/7 Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-18 py-3">
            <Link href="/" className="flex items-center gap-3" aria-label="ShingleTech — Home">
              <Image
                src="/logo.png"
                alt="ShingleTech logo"
                width={56}
                height={56}
                className="w-11 h-11 sm:w-14 sm:h-14"
                priority
              />
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-none">
                  ShingleTech
                </div>
                <div className="text-[11px] sm:text-xs text-red-600 font-semibold tracking-wide uppercase mt-0.5">
                  {BUSINESS.tagline}
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-7">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 font-semibold transition-colors py-2 ${
                        isActive(link.href) ? "text-red-600" : "text-slate-700 hover:text-red-600"
                      }`}
                    >
                      {link.label}
                      <FaChevronDown className="text-[10px] mt-0.5 transition-transform group-hover:rotate-180" aria-hidden />
                    </Link>
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150">
                      <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2 w-72">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-5 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-700 font-medium transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-semibold transition-colors py-2 ${
                      isActive(link.href) ? "text-red-600" : "text-slate-700 hover:text-red-600"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-colors shadow-sm"
              >
                Get a Free Estimate
              </Link>
            </div>

            {/* Mobile: call button + hamburger */}
            <div className="flex lg:hidden items-center gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg shadow-sm"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <FaPhone aria-hidden />
              </a>
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="text-slate-900 p-2 -mr-2"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-white border-t border-slate-100 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href}>
                    <div className="flex items-center justify-between">
                      <Link
                        href={link.href}
                        className={`flex-1 py-3 font-semibold text-lg ${
                          isActive(link.href) ? "text-red-600" : "text-slate-800"
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="p-3 text-slate-500"
                        aria-expanded={servicesOpen}
                        aria-label="Toggle services submenu"
                      >
                        <FaChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {servicesOpen && (
                      <div className="pl-4 pb-2 space-y-1 border-l-2 border-red-100 ml-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2.5 text-slate-600 font-medium"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 font-semibold text-lg ${
                      isActive(link.href) ? "text-red-600" : "text-slate-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="pt-3 pb-2 space-y-3">
                <Link
                  href="/contact"
                  className="block bg-red-600 hover:bg-red-700 text-white text-center px-6 py-4 rounded-lg font-bold text-lg shadow-sm"
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={BUSINESS.phoneHref}
                  className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-900 px-6 py-3.5 rounded-lg font-bold text-lg"
                >
                  <FaPhone className="text-red-600" aria-hidden />
                  {BUSINESS.phone}
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
