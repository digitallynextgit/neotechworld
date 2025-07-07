"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Calculator } from "lucide-react";
import { PiTestTubeThin, PiPulseThin, PiHeartHalfThin } from "react-icons/pi";
import { GiMoneyStack } from "react-icons/gi";
import { CiMapPin } from "react-icons/ci";
import ScrollFloat from "../reactbits/ScrollFloat";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    icon: <GiMoneyStack className="mb-4 h-12 w-12 text-black" />,
    value: "28–35%",
    label: "cost savings in pilot rollouts",
  },
  {
    icon: <PiPulseThin className="mb-4 h-12 w-12 text-black" />,
    value: "14%",
    label: "drop in re-hospitalization",
  },
  {
    icon: <PiTestTubeThin className="mb-4 h-12 w-12 text-black" />,
    value: "15%",
    label: "boost in long-term medication adherence",
  },
  {
    icon: <PiHeartHalfThin className="mb-4 h-12 w-12 text-black" />,
    value: "42%",
    label: "rise in PGx adoption globally",
  },
  {
    icon: <CiMapPin className="mb-4 h-12 w-12 text-black" />,
    value: "100+",
    label: "public health pilots influenced by Neotech-level genomics",
  },
];

export default function ProofStats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create a timeline for the section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
        toggleActions: "play none none reset", // Play on enter, reset on leave
      },
    });

    // Animate the image from left with stronger effect
    if (imageRef.current) {
      tl.fromTo(
        imageRef.current,
        {
          x: -200, // Increased distance for more noticeable effect
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0,
      );
    }

    // Animate the content from right with stronger effect
    if (contentRef.current) {
      tl.fromTo(
        contentRef.current,
        {
          x: 200, // Increased distance for more noticeable effect
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        0.2,
      );

      // Animate the stat cards with staggered effect
      const statCards = contentRef.current.querySelectorAll(".stat-card");
      tl.fromTo(
        statCards,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        0.5,
      );
    }

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="numbers"
      className="relative w-full bg-white pt-32"
      style={{}}
    >
      <div className="">
        <div className="mb-[4vw] ml-[12vw]">
          <ScrollFloat
            containerClassName=""
            textClassName="text-[6vw] leading-[1] text-black font-medium text-left "
          >
            The Numbers that prove it
          </ScrollFloat>
          <div className="my-10 w-[80vw] rotate-180 border-[.05vw] border-gray-200" />
          <p className="mb-20 max-w-[80vw] text-[1.5vw]">
            The future of healthcare is being reshaped by data-driven
            innovation—and the evidence is impossible to ignore. From cost
            efficiency to better patient outcomes, cutting-edge genomic
            solutions are driving measurable improvements across the board.
            Below is a snapshot of the real-world impact these technologies are
            already making, offering a glimpse into how precision medicine is
            transforming care at every level.
          </p>
        </div>

        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-start">
          {/* Left side - Image */}
          <div className="mb-12 h-full w-[50%] lg:mb-0 ">
            <div className="overflow-hidden">
              <Image
                ref={imageRef}
                src="/number.webp"
                alt="Medical Statistics"
                className="h-[80vh] w-full object-cover"
                width={1200}
                height={100}
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div
            ref={contentRef}
            className="h-[80vh] w-[50%] bg-[#FFE5E2] p-2 px-[5.45vw] "
          >
            <ScrollFloat
              containerClassName=""
              textClassName="text-[4.5vw] leading-[1] text-black font-medium text-left mb-5"
            >
              At a Glance
            </ScrollFloat>

            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="stat-card flex flex-col ">
                  <div className="flex flex-row items-center justify-between gap-5 p-2">
                    <div className="text-[1vw]">{stat.icon}</div>
                    <span className="text-[2vw] font-medium text-gray-900">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-center text-[1.15vw] text-black">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <button className="ml-[21.5vw] mt-[-6vw] flex items-center gap-3 rounded-full border border-red-500 bg-white px-6 py-3 text-[1vw] text-red-500 transition-colors duration-300 hover:scale-110 hover:border-2 hover:border-white hover:bg-red-500 hover:text-white hover:transition-all ">
              <span className="rounded-full border border-white bg-red-500 p-2 text-white hover:scale-110 hover:border-2">
                {" "}
                <Calculator className=" h-5 w-5" />
              </span>
              View More Results
            </button>
          </div>
        </div>
        <div className="mt-8"></div>
      </div>
    </section>
  );
}
