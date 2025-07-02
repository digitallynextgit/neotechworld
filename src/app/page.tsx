// import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
// import Clients from "@/components/Clients";
// import ScrollUp from "@/components/Common/ScrollUp";
// import Contact from "@/components/Contact";
// import Faq from "@/components/Faq";
import Image from "next/image";

import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
// import { Offering } from "@/components/Offering";
// import Pricing from "@/components/Pricing";
// import Team from "@/components/Team";
// import ProofStats from "@/components/stats/ProofStats";
import WhoWeServe from "@/components/stats/WhoWeServe";

// import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeoTech",
  description:
    "A NextJS website.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="relative overflow-x-auto">
      {/* Full-page background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
        src="/bg5.mp4"
      />
      {/* <Image src="/bgimage.webp" alt="" width={1200} height={100}/> */}
      <div className="relative z-10 overflow-hidden ">
        {/* <ScrollUp /> */}
        <Hero />
        {/* <Offering /> */}
        <HowItWorks />
        {/* <ProofStats /> */}
        <WhoWeServe />
 
        {/* <Testimonials /> */}
        {/* <Faq /> */}
        {/* <Team /> */}
        <HomeBlogSection posts={posts} />
        {/* <Contact /> */}
        <CallToAction />
        {/* <Clients /> */}
      </div>
    </main>
  );
}
