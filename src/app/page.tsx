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
import VideoSection from "@/components/VideoSection";

// import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import DnaCanvas from "@/components/Hero/DnaModel";

export const metadata: Metadata = {
  title: {
    absolute: "NeoTech World | Precision Genomics & Personalized Medicine",
  },
  description:
    "NeoTech World brings precision genomics to healthcare—clinical genomics, pharmacogenomics and preventive testing that help doctors prescribe the right drug at the right dose and help people understand their genetic risks for better health outcomes.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main className="relative overflow-x-auto bg-[#09173b]">
      {/* Full-page background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none fixed inset-0 z-0 h-[100vh] w-[100vw] object-cover opacity-60"
        src="/videoplayback.mp4"
      /> 


      {/* <img
  className="pointer-events-none fixed inset-0 z-0 h-[100vh] w-[100vw] object-cover"
  src="/newdna.gif"
  alt="DNA animation"
/> */}

      {/* <Image src="/bgimage.webp" alt="" width={1200} height={100}/> */}
      <div className="relative z-10 overflow-hidden ">
        <div className="absolute inset-0 z-0 h-screen">
           {/* <DnaCanvas modelPath="/dna.glb" /> */}
         </div>
        {/* <ScrollUp /> */}
        <Hero />
        {/* <Offering /> */}
        <HowItWorks />
        <VideoSection />
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
