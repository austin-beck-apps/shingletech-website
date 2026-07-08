import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Siding Installation & Repair in Washington, MO — Vinyl & Fiber Cement",
  description:
    "Professional siding installation and repair in Washington, MO. Vinyl and fiber cement (James Hardie) siding, expert weatherproof installation, free estimates.",
  alternates: { canonical: "/services/siding-installation-repair" },
};

export default function SidingPage() {
  return (
    <ServicePageLayout
      slug="siding-installation-repair"
      title="Siding Installation & Repair"
      heroTitle="Siding Installation & Repair in Washington, MO"
      heroSubtitle="Transform your home's exterior — and protect it for decades — with professionally installed vinyl or fiber cement siding from a local crew that sweats the details."
      features={[
        "Vinyl siding installation",
        "Fiber cement (Hardie) siding",
        "Siding repair & replacement",
        "Color & style consultation",
        "Energy-efficient options",
        "Free estimates",
      ]}
      sections={[
        {
          heading: "Siding That Protects and Transforms",
          body: [
            "New siding is one of the most dramatic upgrades you can make to your home — and one of the most protective. Beyond curb appeal, properly installed siding shields your home from moisture, wind, and temperature swings while improving energy efficiency.",
            "We install premium vinyl siding and fiber cement products, each with full trim, soffit, and fascia work so the finished exterior looks complete and stays weathertight.",
          ],
          bullets: [
            "Insulated & standard vinyl siding",
            "Fiber cement lap and panel siding",
            "Soffit, fascia & trim work",
            "House wrap & moisture barriers",
            "Wide range of colors & profiles",
            "Full tear-off and disposal",
          ],
        },
        {
          heading: "Vinyl or Fiber Cement? We'll Help You Choose",
          body: [
            "Vinyl siding offers excellent value, low maintenance, and a huge color selection. Fiber cement costs more but delivers exceptional durability, a premium painted-wood look, and outstanding fire and impact resistance. During your free consultation we'll show you samples of both, talk through maintenance and budget honestly, and help you pick what actually fits your home.",
          ],
        },
        {
          heading: "Repairs and Storm Damage Too",
          body: [
            "Cracked panels, wind-lifted sections, hail-pocked siding — we handle repairs of all sizes, and we can match existing siding in many cases. If your siding was storm damaged, we'll document it and help with your insurance claim, just like we do with roofs.",
          ],
        },
      ]}
      faqs={[
        {
          question: "How long does siding installation take?",
          answer:
            "Most homes take three to five days depending on size and complexity. We'll give you a clear timeline with your written estimate and keep the site tidy throughout.",
        },
        {
          question: "Which is better: vinyl or fiber cement siding?",
          answer:
            "It depends on your priorities. Vinyl is more affordable and nearly maintenance-free. Fiber cement is tougher, holds paint beautifully, and has a premium look, but costs more. We install both and will give you an honest comparison for your home and budget.",
        },
        {
          question: "Can you repair just one damaged section of siding?",
          answer:
            "Often, yes. We can replace individual panels or sections, and in many cases match the existing color and profile. If your siding is older and weathered, we'll show you what a match will look like before committing.",
        },
        {
          question: "Does new siding help with energy bills?",
          answer:
            "It can. Insulated vinyl siding and proper house wrap installation reduce air infiltration and add insulation value, which many homeowners notice in their heating and cooling costs.",
        },
      ]}
    />
  );
}
