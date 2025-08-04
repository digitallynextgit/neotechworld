"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollFloat from "../reactbits/ScrollFloat";
import { FaUserDoctor } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { id: "step1", title: "Sample Collection", icon: "🧬" },
  { id: "step2", title: "DNA Sequencing", icon: "🧪" },
  { id: "step3", title: "Report Generation", icon: "📊" },
  { id: "step4", title: "Doctor Support", icon: "👨‍⚕️" },
  { id: "step5", title: "Optimized Treatment", icon: "💊" },
];

const features = [
  "Seamlessly integrates into EMR & HIMS",
  "Built for national registry compatibility",
  "Data-secure, consent-driven, and clinically supported",
];

const FEATURE_DISPLAY_TIME = 3000; // 3 seconds per feature

const STEP_DISPLAY_TIME = 3000; // 3 seconds per step

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const flowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const featureIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const stepIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Feature rotation effect
    featureIntervalRef.current = setInterval(() => {
      setCurrentFeatureIndex((prevIndex) => (prevIndex + 1) % features.length);
    }, FEATURE_DISPLAY_TIME);

    // Step rotation effect
    stepIntervalRef.current = setInterval(() => {
      setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
    }, STEP_DISPLAY_TIME);

    return () => {
      if (featureIntervalRef.current) clearInterval(featureIntervalRef.current);
      if (stepIntervalRef.current) clearInterval(stepIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Don't run animations on mobile

    // Create a timeline for the section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });

    // Animate the title from center to left
    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        {
          x: "50%",
          opacity: 0,
          translateX: "-50%",
        },
        {
          x: 0,
          opacity: 1,
          translateX: 0,
          duration: 1,
        },
        0,
      );
    }

    // Animate the flow steps
    if (flowRef.current) {
      const steps = flowRef.current.querySelectorAll(".step");
      tl.fromTo(
        steps,
        {
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
        },
        0.3,
      );
    }

    // Animate the features
    if (featuresRef.current) {
      // Target the div directly instead of looking for li elements
      tl.fromTo(
        featuresRef.current,
        {
          y: 0,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
        },
        0.5,
      );
    }

    // Animate the video
    if (videoRef.current) {
      tl.fromTo(
        videoRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
        },
        0.3,
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
      id="works"
      className=" z-10 overflow-hidden  bg-white "
    >
      <div className=" ">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Left side content (60%) */}
          <div className="flex w-full md:w-[50%] flex-col items-center justify-between md:pl-[14vw] px-4">
            <div ref={titleRef} className="">
              <ScrollFloat
                containerClassName=""
                textClassName="text-[16vw] md:text-[7vw] leading-[1] uppercase text-[#09173b] font-medium lg:text-center text-left"
              >
                HOW
                <br /> NEOTECH WORKS
              </ScrollFloat>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between md:mt-[-1vw] md:ml-[-4vw]">
              {/* Single Step Display */}
              <div ref={flowRef} className="my-6 w-full">
                <div className="flex items-center justify-center">
                  <div
                    key={currentStepIndex}
                    className="step flex animate-[fadeIn_0.5s_ease-in-out_forwards] flex-col items-center opacity-0 transition-all duration-500 ease-in-out"
                  >
                
                    {/* <div className="mb-0 text-[2vw]">
                      {steps[currentStepIndex].icon}
                    </div> */}
                    <h3 className="text-center text-[14px] md:text-[1vw] font-semibold flex flex-row items-center justify-between gap-2 text-[#09173b] bg-white p-4 rounded-full border border-[#09173b]">
                        <span className="bg-[#09173b] text-[14px] md:text-[1vw] text-white p-3 border border-[#09173b] rounded-full"><FaUserDoctor />  </span>{steps[currentStepIndex].title}
                    </h3>
                  </div>
                </div>

                {/* Step Progress Indicators */}
                {/* <div className="mt-6 flex justify-center space-x-2">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`h-[.5vw] w-[.5vw] rounded-full transition-all duration-300 ${index === currentStepIndex ? "scale-125 bg-white" : "bg-white/30"}`}
                    />
                  ))}
                </div> */}
              </div>
              {/* Features */}
              <div
                ref={featuresRef}
                className="flex h-[40px] w-full items-center justify-center"
              >
                <div
                  key={currentFeatureIndex}
                  className="flex w-full md:animate-[fadeIn_.25s_ease-in-out_forwards] items-center rounded-full border-2 border-[#09173b] text-[#09173b] p-3 text-[14px] md:text-[1vw]
                          md:opacity-0 shadow-sm transition-all duration-200 ease-in-out"
                >
                  <div className="mr-4  lg:text-[1.5vw] text-[5vw]">✓</div>
                  {features[currentFeatureIndex]}
                </div>
              </div>
            </div>
            {/* Step Navigation Arrows */}
            <div className="mb-0 flex justify-center space-x-2 ml-[-8vw] mt-[10vw]">
              <button
                onClick={() => {
                  if (stepIntervalRef.current) {
                    clearInterval(stepIntervalRef.current);
                  }
                  setCurrentStepIndex(
                    (prev) => (prev - 1 + steps.length) % steps.length,
                  );
                }}
                className="transform rounded-full bg-white/20 border border-[#09173b] p-5 lg:text-[1.25vw] text-[6vw] text-[#09173b] transition-colors duration-200 ease-in-out hover:scale-110 hover:bg-white/30"
              >
                ←
              </button>
              <button
                onClick={() => {
                  if (stepIntervalRef.current) {
                    clearInterval(stepIntervalRef.current);
                  }
                  setCurrentStepIndex((prev) => (prev + 1) % steps.length);
                }}
                className="transform rounded-full bg-white/20 border border-[#09173b] p-5 lg:text-[1.25vw] text-[6vw] text-[#09173b] transition-colors duration-200 ease-in-out hover:scale-110 hover:bg-white/30"
              >
                →
              </button>
            </div>
          </div>
          {/* Right side video (40%) */}
          <div className="w-full md:w-[50%] mt-8 md:mt-0">
            <div className="relative overflow-hidden">
              <video
                ref={videoRef}
                className="h-full w-full "
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="/DNA.mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
