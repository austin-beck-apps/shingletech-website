import { FaChevronDown } from "react-icons/fa";

export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
  className?: string;
}

/**
 * Server-rendered FAQ accordion using native <details> (no JS needed),
 * with FAQPage structured data for rich results.
 */
export default function FaqSection({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  className = "bg-white",
}: FaqSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`py-20 ${className}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-slate-600">{subtitle}</p>}
        </div>
        <div className="space-y-4">
          {items.map((item, idx) => (
            <details
              key={idx}
              className="group bg-slate-50 rounded-xl border border-slate-200 open:bg-white open:shadow-md transition-all"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-semibold text-slate-900 text-lg [&::-webkit-details-marker]:hidden">
                {item.question}
                <FaChevronDown
                  className="flex-shrink-0 text-red-600 transition-transform group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <div className="px-6 pb-6 text-slate-600 leading-relaxed">{item.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
