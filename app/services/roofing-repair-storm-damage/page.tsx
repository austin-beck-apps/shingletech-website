import type { Metadata } from "next";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Roof Repair & Storm Damage in Washington, MO — 24/7 Emergency Service",
  description:
    "24/7 emergency roof repair and storm damage restoration in Washington, MO. Leak repair, hail & wind damage, insurance claim assistance. Free inspections: (636) 221-7284.",
  alternates: { canonical: "/services/roofing-repair-storm-damage" },
};

export default function RoofRepairPage() {
  return (
    <ServicePageLayout
      slug="roofing-repair-storm-damage"
      title="Roof Repair & Storm Damage"
      heroTitle="Roof Repair & Storm Damage Restoration"
      heroSubtitle="Leak? Missing shingles? Hail damage? We respond 24/7 across the Washington, MO area — and we'll help you navigate the insurance process from start to finish."
      features={[
        "24/7 emergency response",
        "Free storm damage inspections",
        "Insurance claim assistance",
        "Leak detection & repair",
        "Emergency tarping",
        "Licensed & insured",
      ]}
      sections={[
        {
          heading: "When Your Roof Can't Wait",
          body: [
            "Missouri storms don't keep business hours, and neither do we. When wind, hail, or fallen limbs damage your roof, call us any time — day or night. We'll secure your home with emergency tarping if needed, then get you a clear plan for permanent repairs.",
            "Because we're local, we're usually on-site fast. No waiting days for an out-of-town crew while water works its way into your ceiling.",
          ],
          bullets: [
            "Emergency tarping & temporary repairs",
            "Wind & hail damage repair",
            "Missing or damaged shingle replacement",
            "Leak detection & repair",
            "Flashing, vent & chimney repairs",
            "Gutter and fascia storm damage",
          ],
        },
        {
          heading: "Honest Storm Damage Inspections",
          body: [
            "After big storms, out-of-state 'storm chasers' flood local neighborhoods with high-pressure sales tactics and disappear when the work is done. We're the opposite: a local company with a reputation to protect. Our inspections are free, documented with photos, and honest — if your roof doesn't need replacement, we'll say so.",
          ],
        },
        {
          heading: "We Speak Insurance",
          body: [
            "Storm damage claims can be confusing. We've helped homeowners through the process for over a decade: documenting damage properly, meeting your adjuster on-site, and making sure nothing legitimate gets missed. You deal with one local point of contact from first call to final nail.",
          ],
        },
      ]}
      faqs={[
        {
          question: "What should I do right after storm damage?",
          answer:
            "First, stay safe — don't climb on the roof. If water is coming in, move belongings and catch drips, then call us at (636) 221-7284. We can tarp the damage quickly, document everything with photos, and guide you on whether an insurance claim makes sense.",
        },
        {
          question: "Will my insurance cover roof storm damage?",
          answer:
            "Most homeowner policies cover sudden storm damage from wind and hail, subject to your deductible. We document the damage thoroughly and can meet your adjuster on-site to make sure the assessment is fair and complete.",
        },
        {
          question: "How do I know if my roof has hail damage?",
          answer:
            "Hail damage is often invisible from the ground — bruised shingles, cracked mats, and granule loss show up on close inspection. If your neighborhood took hail, get a free inspection. We'll show you photos of exactly what we find, and if there's no damage, we'll tell you that too.",
        },
        {
          question: "Do you charge for emergency calls?",
          answer:
            "Inspections and estimates are always free. If emergency tarping or temporary repairs are needed to protect your home, we'll tell you the cost up front before any work begins.",
        },
      ]}
    />
  );
}
