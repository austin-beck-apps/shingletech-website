import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";
import OcShingleWidgets from "../../components/OcShingleWidgets";

export const metadata: Metadata = {
  title: "Shingle Roofing in Washington, MO — Asphalt Roof Replacement & Installation",
  description:
    "Expert asphalt shingle roof installation and replacement in Washington, MO. Owens Corning shingles, warranty-backed workmanship, free estimates. Locally owned since 2013.",
  alternates: { canonical: "/services/shingle-roofing" },
};

export default function ShingleRoofingPage() {
  return (
    <ServicePageLayout
      slug="shingle-roofing"
      title="Shingle Roofing"
      heroTitle="Shingle Roofing in Washington, MO"
      heroSubtitle="Premium asphalt shingle installation and replacement, built to stand up to Missouri wind, hail, and heat — and backed in writing."
      features={[
        "Owens Corning shingle systems",
        "Complete tear-off & re-roof",
        "Storm damage replacement",
        "Warranty-backed workmanship",
        "Free estimates & inspections",
        "Licensed & insured",
      ]}
      sections={[
        {
          heading: "Quality Shingle Roofs You Can Trust",
          body: [
            "Your roof is your home's first line of defense, and asphalt shingles remain the best combination of durability, appearance, and value for most Missouri homes. ShingleTech installs complete shingle roofing systems — not just shingles, but the underlayment, ice and water barriers, ventilation, and flashing details that determine how long a roof actually lasts.",
            "We install premium architectural shingles from trusted manufacturers like Owens Corning, in a full range of colors and styles. Every installation follows manufacturer specifications so your material warranty stays fully intact.",
          ],
          bullets: [
            "Architectural & dimensional shingles",
            "Full tear-off and deck inspection",
            "Ice & water shield in valleys and eaves",
            "Proper ridge and soffit ventilation",
            "Complete flashing replacement",
            "Magnetic nail sweep and full cleanup",
          ],
        },
        {
          heading: "Roof Replacement, Done Right",
          body: [
            "Most of our shingle projects are complete replacements. We start with a free inspection and an honest answer: if your roof has years of life left, we'll tell you. If it's time, you'll get a clear written quote covering everything — materials, labor, disposal, and timeline — with no surprises mid-project.",
            "Most residential replacements are completed in one to two days. We protect your landscaping, keep the site tidy, and don't consider the job done until the yard is cleaner than we found it.",
          ],
        },
        {
          heading: "Choosing the Right Shingle",
          body: [
            "Color and style change the entire look of your home. We'll bring samples to your estimate, and you can explore Owens Corning shingle colors right on our website to see what suits your home before we ever meet. From classic weathered wood tones to modern black and slate shades, there's a shingle for every style of home in the Washington area.",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long does an asphalt shingle roof last in Missouri?",
          answer:
            "A properly installed architectural shingle roof typically lasts 25–30 years in Missouri's climate. Ventilation, installation quality, and storm exposure all play a role — which is why we install complete roofing systems to manufacturer specifications, not just new shingles.",
        },
        {
          question: "How much does a new shingle roof cost?",
          answer:
            "It depends on your roof's size, pitch, complexity, and the shingle you choose. Every ShingleTech quote is free, written, and itemized, so you know exactly what you're paying for. We're happy to quote multiple shingle options so you can compare.",
        },
        {
          question: "How long does a roof replacement take?",
          answer:
            "Most residential shingle roof replacements are finished in one to two days, weather permitting. Larger or more complex roofs can take longer — we'll give you a clear timeline with your estimate.",
        },
        {
          question: "Do you install Owens Corning shingles?",
          answer:
            "Yes. We install Owens Corning shingle systems, including popular lines like TruDefinition Duration, in the full range of available colors. Use the shingle color explorer on our site to browse options, then ask us for physical samples at your free estimate.",
        },
      ]}
    >
      <OcShingleWidgets />
    </ServicePageLayout>
  );
}
