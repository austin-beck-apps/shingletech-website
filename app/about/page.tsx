import type { Metadata } from "next";
import Link from "next/link";
import { FaCheckCircle, FaAward, FaUsers, FaClock, FaHeart, FaHandsHelping, FaHome } from "react-icons/fa";
import Breadcrumbs from "../components/Breadcrumbs";
import CtaBand from "../components/CtaBand";
import { BUSINESS, YEARS_IN_BUSINESS } from "../lib/business";

export const metadata: Metadata = {
  title: "About Us — Locally Owned Roofing Company in Union, MO",
  description:
    "ShingleTech is a locally owned and operated roofing company in Union, MO, serving Missouri homeowners since 2013. Meet the local team that treats your roof like their own.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Local Roots. <span className="text-red-500">Lasting Roofs.</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
            Your trusted roofing partner in Missouri since {BUSINESS.founded} — locally owned,
            community driven.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-3">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  ShingleTech was founded in {BUSINESS.founded} by owner {BUSINESS.owner} with a
                  simple mission: give our neighbors the highest quality roofing at honest prices.
                  What started as a small local operation has grown into one of the most trusted
                  names in roofing in Union, Washington, and the surrounding communities — with a 4.9
                  star Google rating built almost entirely on referrals from homeowners and
                  business owners we&apos;ve served.
                </p>
                <p>
                  We&apos;re not a franchise, and we&apos;re not a storm-chasing crew that
                  disappears when the work is done. When you call, you talk directly to Nic — the
                  owner — not a call center. We live here, and our reputation walks around town
                  with us. That&apos;s why every project, from a small leak repair to a complete
                  roof replacement, gets the same care we&apos;d put into our own homes.
                </p>
                <p>
                  Our team brings decades of combined experience across residential and commercial
                  roofing: traditional asphalt shingles, modern metal systems, siding, and
                  commercial flat roofing. As an Owens Corning Preferred Contractor with
                  HAAG-certified storm damage inspection training, we bring credentials to the
                  table that most local roofers can&apos;t.
                </p>
              </div>
            </div>
            <div className="md:col-span-2 space-y-4">
              {[
                { stat: `${YEARS_IN_BUSINESS}+`, label: "Years serving the area" },
                { stat: "4.9★", label: "Google rating, 100+ reviews" },
                { stat: "A+", label: "BBB rating" },
                { stat: "24/7", label: "Emergency response" },
              ].map((item) => (
                <div key={item.label} className="bg-slate-50 border border-slate-100 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold text-red-600 mb-1">{item.stat}</div>
                  <div className="text-slate-600 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community commitment */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-5">
              <FaHeart aria-hidden /> Giving Back
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Committed to the Community We Call Home
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Being a local business isn&apos;t just where we work — it&apos;s who we are. A roof
              over your head matters, and so does the town underneath it.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaHandsHelping className="text-3xl text-red-500" aria-hidden />,
                title: "Supporting Local",
                text: "We hire locally, buy materials from area lumberyards, and keep our dollars working in the community that supports us. We're proud members of the Washington Area Chamber of Commerce.",
              },
              {
                icon: <FaUsers className="text-3xl text-red-500" aria-hidden />,
                title: "Neighbors Helping Neighbors",
                text: "When storms hit, we prioritize our community — honest HAAG-certified inspections, fair insurance guidance, and no storm-chaser games. The owner has even sealed up a roof on Easter Sunday.",
              },
              {
                icon: <FaHome className="text-3xl text-red-500" aria-hidden />,
                title: "Invested for the Long Haul",
                text: "We stand behind every roof we install for the long term, because we'll still be right here, years down the road.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800/60 rounded-xl p-8 border border-slate-700">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">What guides every job we take on</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaCheckCircle className="text-red-600 text-3xl" aria-hidden />,
                title: "Quality First",
                text: "We never compromise on materials or workmanship — period.",
              },
              {
                icon: <FaAward className="text-red-600 text-3xl" aria-hidden />,
                title: "Integrity",
                text: "Honest assessments, transparent pricing, and reliable service.",
              },
              {
                icon: <FaUsers className="text-red-600 text-3xl" aria-hidden />,
                title: "Customer Focus",
                text: "Your satisfaction is the measure of every project we finish.",
              },
              {
                icon: <FaClock className="text-red-600 text-3xl" aria-hidden />,
                title: "Reliability",
                text: "We show up on time and finish when we say we will.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center bg-slate-50 rounded-xl p-8 border border-slate-100">
                <div className="bg-red-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Homeowners Choose ShingleTech
            </h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
              {[
                {
                  title: `${YEARS_IN_BUSINESS}+ Years of Experience`,
                  description: "Over a decade of protecting area homes and businesses",
                },
                {
                  title: "Licensed, Insured & BBB A+ Rated",
                  description: "Fully licensed and insured, with an A+ rating from the Better Business Bureau",
                },
                {
                  title: "24/7 Emergency Service",
                  description: "Around-the-clock response for storm damage and leaks",
                },
                {
                  title: "Owens Corning Preferred Contractor",
                  description: "A manufacturer credential that unlocks enhanced warranty options for your roof",
                },
                {
                  title: "Expert Local Team",
                  description: "Skilled professionals who take pride in their craft",
                },
                {
                  title: "Free Estimates",
                  description: "No-obligation quotes with clear, written pricing",
                },
                {
                  title: "Warranty Backed",
                  description: "Workmanship you can count on, backed in writing",
                },
                {
                  title: "Truly Local",
                  description: "Locally owned and operated — we answer to our neighbors",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 items-start">
                  <FaCheckCircle className="text-red-600 text-2xl flex-shrink-0 mt-1" aria-hidden />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="text-center mt-10 text-lg text-slate-600">
            Want to see where we work?{" "}
            <Link href="/service-areas" className="text-red-600 font-semibold hover:text-red-700">
              View our service areas →
            </Link>
          </p>
        </div>
      </section>

      <CtaBand
        title="Let's Talk About Your Roof"
        subtitle="Free estimates, honest answers, and a local team that stands behind its work."
      />
    </>
  );
}
