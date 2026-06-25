import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles from NeoTech World on genomics, precision medicine and personalized healthcare.",
};

export default function BlogDetailsPage() {
  return <ComingSoon pageName="Blog Details" />;
}
