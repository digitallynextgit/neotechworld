import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharmacogenomics",
  description:
    "Right drug, right dose, right time. NeoTech World personalizes prescriptions through your genetic profile to reduce adverse reactions and avoid trial-and-error prescribing with precision medicine.",
};

export default function PharmacogenomicsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
