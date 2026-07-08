import type { Metadata } from "next";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt, FaCheckCircle } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import Breadcrumbs from "../components/Breadcrumbs";
import FaqSection from "../components/FaqSection";
import { BUSINESS } from "../lib/business";

export const metadata: Metadata = {
  title: "Contact Us — Free Roofing Estimates in Washington, MO",
  description:
    "Get a free, no-obligation roofing or siding estimate from ShingleTech in Washington, MO. Call (636) 221-7284 or send us a message — 24/7 emergency service available.",
  alternates: { canonical: "/contact" },
};

const CONTACT_FAQS = [
  {
    question: "How much does a roofing estimate cost?",
    answer:
      "Nothing. Every estimate we provide is completely free with no obligation. We'll inspect your roof, walk you through what we find, and give you honest, transparent pricing.",
  },
  {
    question: "How quickly can you come out?",
    answer:
      "For emergencies like active leaks or storm damage, we respond 24/7 — call (636) 221-7284 any time. For standard estimates, we can usually schedule a visit within a few business days.",
  },
  {
    question: "Do you help with insurance claims?",
    answer:
      "Yes. We work with insurance companies regularly on storm damage claims. We'll document the damage, meet with your adjuster if needed, and help make the process as smooth as possible.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-red-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Free Estimate</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Tell us about your project and we&apos;ll get back to you quickly — or just give us a
            call. Real people, straight answers, no pressure.
          </p>
        </div>
      </section>

      {/* Form + contact info */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Free Estimate</h2>
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                <ul className="space-y-6">
                  <li className="flex gap-4">
                    <div className="bg-red-50 rounded-lg p-3 h-fit">
                      <FaPhone className="text-red-600 text-xl" aria-hidden />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Call or Text</div>
                      <a href={BUSINESS.phoneHref} className="text-slate-600 hover:text-red-600 font-semibold text-lg">
                        {BUSINESS.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-red-50 rounded-lg p-3 h-fit">
                      <FaEnvelope className="text-red-600 text-xl" aria-hidden />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Email</div>
                      <a href={BUSINESS.emailHref} className="text-slate-600 hover:text-red-600 break-all">
                        {BUSINESS.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-red-50 rounded-lg p-3 h-fit">
                      <FaMapMarkerAlt className="text-red-600 text-xl" aria-hidden />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Location</div>
                      <p className="text-slate-600">
                        {BUSINESS.address.street}
                        <br />
                        {BUSINESS.address.locality}, {BUSINESS.address.region} {BUSINESS.address.postalCode}
                        <br />
                        Serving Washington &amp; surrounding communities
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="bg-red-50 rounded-lg p-3 h-fit">
                      <FaClock className="text-red-600 text-xl" aria-hidden />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Hours</div>
                      <p className="text-slate-600">24/7 emergency service available</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4">What to Expect</h3>
                <ul className="space-y-3">
                  {[
                    "A prompt response from a real local person",
                    "A thorough inspection and honest assessment",
                    "Clear, written pricing — no surprises",
                    "Zero pressure, ever",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FaCheckCircle className="text-red-500 mt-1 flex-shrink-0" aria-hidden />
                      <span className="text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection items={CONTACT_FAQS} />
    </>
  );
}
