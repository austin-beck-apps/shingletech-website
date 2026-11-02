import type { Metadata } from "next";
import Link from "next/link";
import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import Breadcrumbs from "../components/Breadcrumbs";
import CtaBand from "../components/CtaBand";
import { SERVICE_AREAS } from "../lib/business";

export const metadata: Metadata = {
  title: "Service Areas — Roofing Contractor Serving Union, Washington, MO & Beyond",
  description:
    "ShingleTech provides roofing, siding, and storm damage services throughout Washington, Union, Pacific, Sullivan, St. Clair, New Haven, Gray Summit, MO and surrounding communities.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
        ]}
      />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Communities We Serve</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We&apos;re a local crew based in Union, MO — which means when you call, you get
            neighbors, not a call center. Here&apos;s where we work every week.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="group bg-white rounded-xl p-7 shadow-md hover:shadow-xl border border-slate-100 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FaMapMarkerAlt className="text-red-600 text-xl" aria-hidden />
                  <h2 className="text-xl font-bold text-slate-900">
                    {area.city}, {area.state}
                  </h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">{area.blurb}</p>
                <span className="inline-flex items-center gap-2 text-red-600 font-semibold group-hover:gap-3 transition-all">
                  Roofing in {area.city} <FaArrowRight className="text-sm" aria-hidden />
                </span>
              </Link>
            ))}
          </div>
          <p className="text-center text-slate-600 mt-10 text-lg">
            Don&apos;t see your town? We serve the entire surrounding area —{" "}
            <Link href="/contact" className="text-red-600 font-semibold hover:text-red-700">
              reach out
            </Link>{" "}
            and we&apos;ll let you know right away.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
