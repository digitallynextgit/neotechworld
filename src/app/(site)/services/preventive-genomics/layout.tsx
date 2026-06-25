import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preventive Genomics",
  description:
    "Your DNA, your blueprint for a healthier life. Understand genetic risks and personalize wellness with NeoTech World's preventive genomic testing—from disease risk assessment to nutrigenomics and fitness genomics.",
};

export default function PreventiveGenomicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
