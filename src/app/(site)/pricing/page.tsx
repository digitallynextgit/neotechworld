import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore NeoTech World pricing for clinical genomics, pharmacogenomics and preventive genomic testing services.",
};

export default function PricingPage() {
  return <ComingSoon pageName="Pricing" />;
}
