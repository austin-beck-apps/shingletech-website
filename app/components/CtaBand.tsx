import Link from "next/link";
import { FaPhone } from "react-icons/fa";
import { BUSINESS } from "../lib/business";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
}

export default function CtaBand({
  title = "Ready for a Roof You Can Count On?",
  subtitle = "Get a free, no-obligation estimate from a local team your neighbors already trust.",
}: CtaBandProps) {
  return (
    <section className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
            <p className="text-lg text-slate-300">{subtitle}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg text-center"
            >
              Get a Free Estimate
            </Link>
            <a
              href={BUSINESS.phoneHref}
              className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg flex items-center justify-center gap-2"
            >
              <FaPhone className="text-red-600" aria-hidden />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
