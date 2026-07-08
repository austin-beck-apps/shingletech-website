"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { FaPaintBrush, FaAward } from "react-icons/fa";
import { reloadOcWidgets } from "../lib/oc-widget";
import { BUSINESS } from "../lib/business";

/**
 * Owens Corning Design EyeQ roof visualizer — official contractor embed.
 * The #visualizer mount is filled with an auto-resizing iframe by OC's
 * widget.js (see lib/oc-widget.ts).
 */
export default function OwensCorningSection() {
  const visualizerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = reloadOcWidgets([visualizerRef.current]);
    return handle.cleanup;
  }, []);

  return (
    <section className="py-20 bg-white" id="visualizer-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-4 py-2 rounded-full font-semibold text-sm uppercase tracking-wide mb-5">
            <FaAward aria-hidden /> Owens Corning Preferred Contractor
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <FaPaintBrush className="text-3xl text-red-600" aria-hidden />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Try Shingle Colors on Your Own Home
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Upload a photo of your house — or pick a sample home — and see exactly how Owens
            Corning shingle colors and styles will look before you decide. It&apos;s free, and it
            takes about a minute.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div
            id="visualizer"
            data-zip={BUSINESS.address.postalCode}
            ref={visualizerRef}
            className="min-h-[600px] rounded-xl overflow-hidden shadow-lg border border-slate-200 bg-slate-50"
            aria-label="Owens Corning Design EyeQ roof visualizer"
          />
        </div>

        <div className="text-center mt-8">
          <p className="text-lg text-slate-600">
            Found a color you love?{" "}
            <Link href="/contact" className="text-red-600 font-bold hover:text-red-700">
              Get a free estimate
            </Link>{" "}
            and we&apos;ll bring physical samples to your door.
          </p>
        </div>
      </div>
    </section>
  );
}
