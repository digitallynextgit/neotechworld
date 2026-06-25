import type { Metadata } from "next";
import AppShell from "@/components/Layout/AppShell";
import "../styles/index.css";
import "../styles/prism-vsc-dark-plus.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://neotechworldlab.com"),
  title: {
    default: "NeoTech World | Precision Genomics & Personalized Medicine",
    template: "%s | NeoTech World",
  },
  description:
    "NeoTech World delivers clinical genomics, pharmacogenomics and preventive genomic testing—giving hospitals, doctors and individuals actionable genetic insights for precision medicine and better health outcomes.",
  applicationName: "NeoTech World",
  keywords: [
    "NeoTech World",
    "genomics",
    "clinical genomics",
    "pharmacogenomics",
    "preventive genomics",
    "precision medicine",
    "genetic testing",
    "personalized medicine",
    "whole genome sequencing",
    "DNA testing",
  ],
  authors: [{ name: "NeoTech World" }],
  creator: "NeoTech World",
  publisher: "NeoTech World",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "NeoTech World",
    title: "NeoTech World | Precision Genomics & Personalized Medicine",
    description:
      "Clinical genomics, pharmacogenomics and preventive genomic solutions that turn DNA into actionable insights for precision medicine.",
    url: "https://neotechworldlab.com",
    images: [{ url: "/favicon.png", width: 512, height: 512, alt: "NeoTech World" }],
  },
  twitter: {
    card: "summary",
    title: "NeoTech World | Precision Genomics & Personalized Medicine",
    description:
      "Clinical genomics, pharmacogenomics and preventive genomic solutions that turn DNA into actionable insights for precision medicine.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning={true} className="!scroll-smooth" lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
