import { FaStar, FaAward, FaShieldAlt, FaSearchPlus } from "react-icons/fa";
import { TRUST } from "../lib/business";

/**
 * Credential strip — every item here is verified against public sources
 * (Google, BBB, the Owens Corning contractor directory).
 */
export default function TrustBar() {
  const items = [
    {
      icon: <FaStar className="text-yellow-400 text-2xl" aria-hidden />,
      title: `${TRUST.googleRating}★ Google Rating`,
      subtitle: `${TRUST.googleReviewCount} customer reviews`,
    },
    {
      icon: <FaAward className="text-red-500 text-2xl" aria-hidden />,
      title: "Owens Corning",
      subtitle: "Preferred Contractor",
    },
    {
      icon: <FaShieldAlt className="text-red-500 text-2xl" aria-hidden />,
      title: `BBB ${TRUST.bbbRating} Rating`,
      subtitle: "Since 2013",
    },
    {
      icon: <FaSearchPlus className="text-red-500 text-2xl" aria-hidden />,
      title: "HAAG Certified",
      subtitle: "Storm damage inspection",
    },
  ];

  return (
    <section className="bg-slate-900 border-t border-slate-800" aria-label="Credentials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex items-center gap-3 justify-center lg:justify-start">
              {item.icon}
              <div>
                <div className="text-white font-bold text-sm sm:text-base leading-tight">{item.title}</div>
                <div className="text-slate-400 text-xs sm:text-sm">{item.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
