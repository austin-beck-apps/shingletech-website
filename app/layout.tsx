import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LocalBusinessSchema from "./components/LocalBusinessSchema";
import { BUSINESS } from "./lib/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: "ShingleTech | Roofing Contractor in Union & Washington, MO",
    template: "%s | ShingleTech",
  },
  description:
    "ShingleTech is a locally owned roofing and siding contractor in Union, MO, serving Washington and all of Franklin County. Shingle roofing, metal roofing, siding, storm damage repair & commercial roofing. Licensed, insured, 24/7 emergency service. Free estimates: (636) 221-7284.",
  keywords: [
    "roofing contractor Union MO",
    "roofing contractor Washington MO",
    "roofer near me",
    "roof replacement Union MO",
    "roof replacement Washington MO",
    "roof repair Franklin County",
    "shingle roofing",
    "metal roofing Missouri",
    "siding installation Washington MO",
    "storm damage roof repair",
    "commercial roofing",
    "Owens Corning shingles",
    "local roofing company",
  ],
  authors: [{ name: BUSINESS.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "ShingleTech | Roofing Contractor in Union & Washington, MO",
    description:
      "Locally owned roofing & siding contractor in Union, MO, serving Washington and surrounding communities since 2013. Licensed, insured, and available 24/7 for emergency service. Free estimates.",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "ShingleTech roofing crew at work in Washington, MO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShingleTech | Roofing Contractor in Union & Washington, MO",
    description:
      "Locally owned roofing & siding contractor in Union, MO, serving Washington and surrounding communities since 2013. Free estimates: (636) 221-7284.",
    images: ["/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "US-MO",
    "geo.placename": "Union, Missouri",
    "geo.position": `${BUSINESS.geo.latitude};${BUSINESS.geo.longitude}`,
    ICBM: `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K5FXENYCDB"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17928984102"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K5FXENYCDB');
            gtag('config', 'AW-17928984102');
            gtag('config', 'AW-17928984102/EfjUCIWLivIbEKasmuVC', {
              'phone_conversion_number': '(636) 221-7284'
            });
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LocalBusinessSchema />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-2 focus:left-2 focus:bg-white focus:text-slate-900 focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
