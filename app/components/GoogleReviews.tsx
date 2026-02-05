"use client";

import { FaStar } from "react-icons/fa";

export default function GoogleReviews() {
  return (
    <div className="w-full">
      {/* Placeholder for Google Reviews Widget */}
      {/* To complete setup: Visit https://embedsocial.com/free-google-reviews-widget/ or similar service */}
      {/* Get your embed code and replace this placeholder */}

      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar key={star} className="text-yellow-400 text-3xl" />
            ))}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            See What Our Customers Say About Us
          </h3>
          <p className="text-slate-600 mb-6">
            We're proud of the quality work we deliver and the relationships we build with our customers.
          </p>
        </div>

        <a
          href="https://www.google.com/search?q=shingletech+washington+mo#lrd=0x87dcb6f8c8e8e8e8:0x1234567890abcdef,1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
        >
          <FaStar className="text-yellow-300" />
          View Our Google Reviews
        </a>

        <p className="mt-6 text-sm text-slate-500">
          Click to read authentic reviews from our customers on Google
        </p>
      </div>

      {/* Note: Replace this component with actual embed code from:
          - EmbedSocial (https://embedsocial.com/free-google-reviews-widget/)
          - Elfsight (https://elfsight.com/google-reviews-widget/)
          - Or another preferred Google Reviews widget service
      */}
    </div>
  );
}
