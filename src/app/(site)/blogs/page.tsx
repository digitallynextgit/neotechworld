import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, research and updates from NeoTech World on genomics, pharmacogenomics, preventive health and precision medicine.",
};

export default function BlogsPage() {
  return <ComingSoon pageName="Blogs" />;
}
