import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaCheckCircle, FaMapMarkerAlt, FaBolt, FaHandshake } from "react-icons/fa";
import Breadcrumbs from "../../components/Breadcrumbs";
import CtaBand from "../../components/CtaBand";
import FaqSection from "../../components/FaqSection";
import { BUSINESS, SERVICE_AREAS, SERVICES } from "../../lib/business";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return SERVICE_AREAS.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) return {};
  return {
    title: `Roofing Contractor in ${area.city}, ${area.state} — Local Roof Replacement & Repair`,
    description: `Looking for a roofer in ${area.city}, ${area.state}? ShingleTech is a locally owned roofing contractor serving ${area.city} with roof replacement, repair, storm damage restoration & siding. Free estimates: ${BUSINESS.phone}.`,
    alternates: { canonical: `/service-areas/${slug}` },
  };
}

export default async function ServiceAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = SERVICE_AREAS.find((a) => a.slug === slug);
  if (!area) notFound();

  const faqs = [
    {
      question: `Do you offer free roofing estimates in ${area.city}?`,
      answer: `Yes — every estimate in ${area.city} is completely free with no obligation. We'll inspect your roof, explain what we find in plain language, and give you clear written pricing.`,
    },
    {
      question: `How fast can you respond to storm damage in ${area.city}, ${area.state}?`,
      answer: `We offer 24/7 emergency response throughout the ${area.city} area. If you have an active leak or storm damage, call ${BUSINESS.phone} any time, day or night.`,
    },
    {
      question: `Are you licensed and insured to work in ${area.city}?`,
      answer: `Yes. ShingleTech is fully licensed and insured, and we've been serving ${area.city} and the surrounding communities since ${BUSINESS.founded}.`,
    },
  ];

  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Service Areas", href: "/service-areas" },
          { label: `${area.city}, ${area.state}`, href: `/service-areas/${area.slug}` },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-red-400 font-semibold mb-4">
              <FaMapMarkerAlt aria-hidden />
              <span>
                {area.city}, {area.state}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Your Local Roofing Contractor in {area.city}, {area.state}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">{area.blurb}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg text-center"
              >
                Get a Free Estimate
              </Link>
              <a
                href={BUSINESS.phoneHref}
                className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg text-lg font-bold transition-colors shadow-lg text-center"
              >
                Call {BUSINESS.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center mb-4">
            Roofing &amp; Siding Services in {area.city}
          </h2>
          <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto mb-12">
            The same complete services we offer everywhere, delivered by a crew that knows{" "}
            {area.city} homes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="bg-white rounded-xl p-7 shadow-md hover:shadow-xl border border-slate-100 transition-all"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-600 mb-3">{s.short}</p>
                <span className="text-red-600 font-semibold">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why local matters */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaMapMarkerAlt className="text-3xl text-red-600" aria-hidden />,
                title: "We're Actually Local",
                text: `We're based in Washington, MO — minutes from ${area.city}. No storm chasers, no out-of-state crews. When the job is done, we're still here.`,
              },
              {
                icon: <FaBolt className="text-3xl text-red-600" aria-hidden />,
                title: "Fast Response",
                text: `Because ${area.city} is in our backyard, we respond quickly — for estimates, repairs, and 24/7 storm emergencies.`,
              },
              {
                icon: <FaHandshake className="text-3xl text-red-600" aria-hidden />,
                title: "Neighbors First",
                text: "We've built our reputation on referrals from local homeowners. We give back to the community because it's our community too.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {area.landmarks.length > 0 && (
            <div className="mt-12 text-center">
              <p className="text-slate-600">
                Serving all of {area.city} including the{" "}
                {area.landmarks.map((l, i) => (
                  <span key={l}>
                    <span className="font-semibold text-slate-800">{l}</span>
                    {i < area.landmarks.length - 2 ? ", " : i === area.landmarks.length - 2 ? " and " : ""}
                  </span>
                ))}{" "}
                areas.
              </p>
            </div>
          )}
        </div>
      </section>

      <FaqSection
        title={`Roofing Questions from ${area.city} Homeowners`}
        items={faqs}
        className="bg-slate-50"
      />

      {/* Checklist strip */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {["Licensed & Insured", "Free Estimates", "24/7 Emergency Service", "Locally Owned Since 2013"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2 text-slate-700 font-semibold">
                  <FaCheckCircle className="text-red-600" aria-hidden />
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need a Roofer in ${area.city}?`}
        subtitle="Get a free inspection and estimate from a local team your neighbors already trust."
      />
    </>
  );
}
