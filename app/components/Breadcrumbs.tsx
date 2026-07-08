import Link from "next/link";
import { BUSINESS } from "../lib/business";

export interface Crumb {
  label: string;
  href: string;
}

/**
 * Visible breadcrumb trail plus BreadcrumbList structured data.
 * Pass the full trail including the current page (last item is not linked).
 */
export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: crumb.label,
      item: `${BUSINESS.url}${crumb.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center gap-2 text-sm text-slate-500">
        {crumbs.map((crumb, idx) => {
          const isLast = idx === crumbs.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-2">
              {isLast ? (
                <span className="font-semibold text-slate-900" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <>
                  <Link href={crumb.href} className="hover:text-red-600 transition-colors">
                    {crumb.label}
                  </Link>
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
