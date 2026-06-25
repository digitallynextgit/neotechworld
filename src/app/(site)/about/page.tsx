import ComingSoon from "@/components/ComingSoon";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about NeoTech World's mission to make precision genomics accessible—bridging cutting-edge genetic research and everyday clinical care to improve patient outcomes.",
};

export default function AboutPage() {
  return <ComingSoon pageName="About" />;
}
