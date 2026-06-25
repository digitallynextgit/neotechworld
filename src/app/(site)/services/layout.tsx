import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Our Services",
    template: "%s | NeoTech World",
  },
  description:
    "Explore NeoTech World's genomic services—clinical genomics, pharmacogenomics and preventive genomics—delivering precision diagnostics and personalized wellness for healthcare providers, researchers and individuals.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
