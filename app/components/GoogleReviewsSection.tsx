import { FaStar, FaGoogle, FaQuoteLeft } from "react-icons/fa";
import { TRUST } from "../lib/business";

/**
 * Real customer quotes as published on public review platforms
 * (GuildQuality, BBB, and local review aggregators).
 */
const TESTIMONIALS = [
  {
    quote:
      "Every encounter from Shalene in the office to the last man who inspected the final roof was pleasant and professional.",
    name: "Diane R.",
    source: "Verified GuildQuality review",
  },
  {
    quote:
      "From the very beginning, Nic built Shingle Tech the right way — with honesty, hard work, and treating people with respect.",
    name: "Christopher M.",
    source: "BBB customer review",
  },
  {
    quote:
      "Absolutely wonderful company to work with! Very attentive to our needs and provided outstanding customer service during and after job completion.",
    name: "Francis M.",
    source: "Verified GuildQuality review",
  },
];

const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=Shingle+Tech+Washington+MO+reviews";

export default function GoogleReviewsSection() {
  return (
    <section className="py-20 bg-slate-50" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white rounded-full shadow-sm border border-slate-100 px-6 py-3 mb-6">
            <span className="flex gap-0.5" aria-hidden>
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-yellow-400 text-xl" />
              ))}
            </span>
            <span className="font-bold text-slate-900 text-lg">
              {TRUST.googleRating} on Google
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-600 font-medium">{TRUST.googleReviewCount} reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Your Neighbors
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Most of our work comes from referrals — here&apos;s why local homeowners keep
            recommending us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="bg-white rounded-2xl shadow-md p-8 border border-slate-100 flex flex-col">
              <FaQuoteLeft className="text-red-200 text-3xl mb-4" aria-hidden />
              <blockquote className="text-slate-700 leading-relaxed mb-5 flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-slate-900">{t.name}</span>
                  <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <FaStar key={s} className="text-yellow-400 text-sm" aria-hidden />
                    ))}
                  </span>
                </div>
                <span className="text-sm text-slate-500">{t.source}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-sm"
          >
            <FaGoogle className="text-red-600" aria-hidden />
            Read Our Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
