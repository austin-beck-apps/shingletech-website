import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Metal Roofing in Washington, MO — Standing Seam & Metal Roof Installation",
  description:
    "Durable, energy-efficient metal roofing installation in Washington, MO. Standing seam systems with 50+ year lifespans, expert local installation, free estimates.",
  alternates: { canonical: "/services/metal-roofing" },
};

export default function MetalRoofingPage() {
  return (
    <ServicePageLayout
      slug="metal-roofing"
      title="Metal Roofing"
      heroTitle="Metal Roofing in Washington, MO"
      heroSubtitle="Standing seam and metal roofing systems that outlast shingles, shrug off Missouri weather, and cut cooling costs — installed by a local crew that does it right."
      features={[
        "Standing seam systems",
        "50+ year lifespan",
        "Energy-efficient finishes",
        "Wind, hail & fire resistant",
        "Free estimates",
        "Licensed & insured",
      ]}
      sections={[
        {
          heading: "Why Missouri Homeowners Are Switching to Metal",
          body: [
            "Metal roofing has become one of the most requested upgrades in the Washington area — and for good reason. A quality metal roof lasts 50 years or more, stands up to the wind and hail that regularly damage shingle roofs, and reflects summer heat instead of absorbing it, which can noticeably lower cooling bills.",
            "We install concealed-fastener standing seam systems as well as high-quality exposed-fastener panels, in a wide range of colors and profiles that suit everything from farmhouses to modern builds.",
          ],
          bullets: [
            "Standing seam (concealed fastener) panels",
            "Ribbed & corrugated metal panels",
            "Wide selection of colors & finishes",
            "Energy-reflective coatings",
            "Snow and ice shedding design",
            "Class A fire rating",
          ],
        },
        {
          heading: "Installation Quality Matters More With Metal",
          body: [
            "A metal roof is only as good as its installation. Panel alignment, fastening, expansion allowance, and flashing details all determine whether a metal roof lasts five decades or leaks in five years. Our crews are experienced specifically with metal systems, and we stand behind the workmanship in writing.",
            "We'll walk you through the trade-offs between metal and shingle honestly — including cost — so you can make the right call for your home and budget. Sometimes shingles are the smarter choice, and we'll tell you when that's the case.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Is a metal roof worth the extra cost?",
          answer:
            "For many homeowners, yes. A metal roof costs more upfront than shingles but typically lasts two to three times longer, resists storm damage better, and can lower cooling costs. If you plan to stay in your home long-term, the lifetime cost often favors metal.",
        },
        {
          question: "Is a metal roof loud when it rains?",
          answer:
            "Not on a modern installation. Metal roofing installed over solid decking and underlayment is about as quiet as an asphalt shingle roof — the 'loud barn roof' effect only happens with metal installed over open framing.",
        },
        {
          question: "Can you install metal over my existing shingles?",
          answer:
            "In some cases, yes — but we usually recommend a full tear-off so we can inspect the deck and start with a clean, flat surface. We'll assess your specific roof during your free estimate and explain the options.",
        },
        {
          question: "How does metal hold up to hail?",
          answer:
            "Very well. Metal panels resist puncture from most hail, and many carry Class 4 impact ratings — the highest available. Large hail can cosmetically dent panels, but the roof's protection is rarely compromised the way shingles can be.",
        },
      ]}
    />
  );
}
