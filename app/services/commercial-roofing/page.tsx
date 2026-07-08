import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Commercial Roofing in Washington, MO — TPO, EPDM & Roof Coatings",
  description:
    "Commercial flat roofing in Washington, MO: TPO and EPDM systems, roof coatings, repairs, and maintenance programs for business properties. Licensed commercial contractors.",
  alternates: { canonical: "/services/commercial-roofing" },
};

export default function CommercialRoofingPage() {
  return (
    <ServicePageLayout
      slug="commercial-roofing"
      title="Commercial Roofing"
      heroTitle="Commercial Roofing in Washington, MO"
      heroSubtitle="TPO and EPDM flat roofing systems, restorative coatings, and maintenance programs that keep your business dry — with minimal disruption to your operations."
      features={[
        "TPO roofing systems",
        "EPDM rubber roofing",
        "Restorative roof coatings",
        "Preventive maintenance plans",
        "24/7 emergency service",
        "Licensed commercial contractors",
      ]}
      sections={[
        {
          heading: "Flat Roofing Systems for Local Businesses",
          body: [
            "A commercial roof failure doesn't just mean water damage — it means interrupted business. We install and service single-ply membrane systems (TPO and EPDM) engineered for flat and low-slope commercial buildings, from retail storefronts to warehouses and agricultural buildings.",
            "We plan work around your operating hours where possible, keep the site safe and clean, and document everything so you know exactly what was done and what to expect from your roof going forward.",
          ],
          bullets: [
            "New TPO & EPDM installation",
            "Membrane repairs & re-flashing",
            "Drainage correction",
            "Insulation upgrades",
            "Roof condition reports",
            "Emergency leak response",
          ],
        },
        {
          heading: "Roof Coatings: Restore Instead of Replace",
          body: [
            "If your commercial roof is aging but structurally sound, a restorative coating can add 10–15 years of service life at a fraction of replacement cost. Reflective coatings also lower rooftop temperatures, which can cut summer cooling costs significantly.",
            "We'll assess your roof honestly: if a coating makes sense, we'll quote it. If the roof is past the point where a coating is a good investment, we'll tell you that instead of selling you a short-term fix.",
          ],
        },
        {
          heading: "Preventive Maintenance Programs",
          body: [
            "Most commercial roof failures start as small, cheap-to-fix issues: a lifted seam, a clogged drain, damaged flashing. Our maintenance program catches these early with scheduled inspections and documented reports — protecting your warranty and your budget.",
          ],
        },
      ]}
      faqs={[
        {
          question: "TPO or EPDM — which is right for my building?",
          answer:
            "TPO's white reflective surface excels in buildings where summer cooling costs matter, and it's heat-welded for strong seams. EPDM is a proven, flexible rubber membrane with decades of track record and excellent value. We'll recommend based on your building, budget, and how the roof is used.",
        },
        {
          question: "Can you work around our business hours?",
          answer:
            "Yes. We regularly schedule commercial work to minimize disruption — early mornings, weekends, or phased sections — and we'll coordinate the plan with you before work begins.",
        },
        {
          question: "How long does a commercial flat roof last?",
          answer:
            "A well-installed TPO or EPDM roof typically lasts 20–30 years, and regular maintenance can extend that further. Restorative coatings can add another 10–15 years to a sound existing roof.",
        },
      ]}
    />
  );
}
