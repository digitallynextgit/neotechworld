import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Genomics",
  description:
    "Advanced genetic testing—whole genome and exome sequencing, targeted panels and clinical interpretation—for oncology, cardiology, neurology and rare diseases. Precision diagnosis for better patient outcomes.",
};

export default function ClinicalGenomicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
