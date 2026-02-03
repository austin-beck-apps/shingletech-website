import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ChatWidget from "./components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://shingletech.com'),
  title: {
    default: "ShingleTech | Professional Roofing Services in Washington, MO",
    template: "%s | ShingleTech"
  },
  description: "Expert roofing and siding services in Franklin County, MO since 2013. Specializing in shingle roofing, siding installation, metal roofing, commercial flat roofing, and roof coatings. Licensed, insured, and available 24/7 for emergency service.",
  keywords: [
    "roofing",
    "siding",
    "siding installation",
    "vinyl siding",
    "roof repair",
    "Washington MO",
    "Franklin County",
    "shingle roofing",
    "metal roofing",
    "commercial roofing",
    "emergency roofing",
    "roof replacement",
    "TPO roofing",
    "EPDM roofing",
    "fiber cement siding"
  ],
  authors: [{ name: "ShingleTech" }],
  openGraph: {
    title: "ShingleTech | Professional Roofing Services in Washington, MO",
    description: "Expert roofing and siding services in Franklin County, MO since 2013. Licensed, insured, and available 24/7 for emergency service.",
    url: "https://shingletech.com",
    siteName: "ShingleTech",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShingleTech | Professional Roofing Services",
    description: "Expert roofing and siding services in Franklin County, MO since 2013.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
