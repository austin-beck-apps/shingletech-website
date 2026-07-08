"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaShieldAlt, FaCheckCircle, FaAward } from "react-icons/fa";
import { reloadOcWidgets } from "../lib/oc-widget";

/**
 * Owens Corning shingle color explorer — official contractor embed filled
 * by OC's widget.js — plus a warranty overview tied to our Preferred
 * Contractor status. Rendered on the shingle roofing service page.
 */
export default function OcShingleWidgets() {
  const shingleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = reloadOcWidgets([shingleRef.current]);
    return handle.cleanup;
  }, []);

  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Owens Corning Duration<sup>®</sup> Colors
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Browse the TruDefinition<sup>®</sup> Duration<sup>®</sup> line — one of the most
              popular shingles we install — and see every color on a full house view.
            </p>
          </div>
          <div
            className="oc_shingle_view rounded-xl overflow-hidden shadow-md border border-slate-200 bg-slate-50 min-h-[400px]"
            data-shingle="trudefinition-duration"
            data-view="house"
            data-layout="row"
            data-style="default"
            data-allowed-colors=""
            ref={shingleRef}
            aria-label="Owens Corning shingle color explorer"
          />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-50 rounded-xl p-3">
                <FaAward className="text-2xl text-red-600" aria-hidden />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Warranty Coverage That Comes With Our Credentials
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Any roofer can install shingles. But as an{" "}
              <strong className="text-slate-800">Owens Corning Preferred Contractor</strong>, we
              can register enhanced Owens Corning system warranties that standard installers
              can&apos;t offer — coverage that protects both the materials and the workmanship
              behind them.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Standard Coverage",
                  text: "Material warranty on your shingles — what every installation includes.",
                },
                {
                  title: "System Coverage",
                  text: "Extended protection when we install a complete Owens Corning roofing system, from underlayment to ridge cap.",
                },
                {
                  title: "Preferred Protection",
                  text: "Enhanced coverage available only through Owens Corning Preferred Contractors like ShingleTech — including workmanship coverage.",
                },
              ].map((tier, idx) => (
                <div
                  key={tier.title}
                  className={`rounded-xl p-6 border ${
                    idx === 2 ? "border-red-200 bg-red-50" : "border-slate-100 bg-slate-50"
                  }`}
                >
                  <FaShieldAlt
                    className={`text-2xl mb-3 ${idx === 2 ? "text-red-600" : "text-slate-400"}`}
                    aria-hidden
                  />
                  <h3 className="font-bold text-slate-900 mb-2">{tier.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{tier.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded-lg font-bold transition-colors shadow-sm w-full sm:w-auto text-center"
              >
                Ask About Warranty Options
              </Link>
              <p className="text-sm text-slate-500 flex items-center gap-2">
                <FaCheckCircle className="text-red-600" aria-hidden />
                We&apos;ll explain exactly what coverage applies to your project — in writing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
