"use client";

import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";
import { FaVial, FaDna, FaFileMedical, FaUserMd, FaCapsules } from "react-icons/fa";

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

const stepIcons = [
  <FaVial className="text-3xl text-[#09173b]" />,
  <FaDna className="text-3xl text-[#09173b]" />,
  <FaFileMedical className="text-3xl text-[#09173b]" />,
  <FaUserMd className="text-3xl text-[#09173b]" />,
  <FaCapsules className="text-3xl text-[#09173b]" />,
];

export default function HowItWorks() {
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  return (
    <section id="works" className="z-10 overflow-hidden bg-white">
      {/* Mobile version */}
      <div className="block md:hidden px-4 py-10">
        <h2 className="text-3xl font-bold text-[#09173b] mb-6 text-center uppercase tracking-tight">How Neotech Works</h2>
        <div className="flex flex-col items-center gap-6">
          {/* Steps as grid cards with premium icons */}
          <div className="grid grid-cols-2 gap-4 w-full">
            {steps.map((step, idx) => {
              // Center the last card if odd number of steps
              const isLastOdd = steps.length % 2 === 1 && idx === steps.length - 1;
              return (
                <div
                  key={step.id}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border border-[#09173b] bg-white shadow-sm ${isLastOdd ? 'col-span-2 justify-self-center w-1/2' : ''}`}
                >
                  <div className="mb-2">{stepIcons[idx]}</div>
                  <span className="text-xs font-semibold text-[#09173b] text-center">{step.title}</span>
                </div>
              );
            })}
          </div>
          {/* Features as cards */}
          <div className="w-full flex flex-col gap-3 mt-6">
            {features.map((feature, idx) => (
              <div key={feature} className="flex items-center gap-2 p-3 rounded-lg border border-[#09173b] bg-[#f8fafc] shadow-sm">
                <span className="text-green-600 text-lg">✓</span>
                <span className="text-sm text-[#09173b]">{feature}</span>
              </div>
            ))}
          </div>
          {/* Optional: Add a small video or image for mobile */}
          <div className="w-full mt-6 rounded-xl overflow-hidden shadow-md">
            <video className="w-full h-40 object-cover" autoPlay muted loop playsInline>
              <source src="/DNA.mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      {/* Desktop version (unchanged) */}
      <div className="hidden md:block">
        <div>
          <div className="flex flex-col items-center gap-8 md:flex-row">
            {/* Left side content (60%) */}
            <div className="flex w-full md:w-[50%] flex-col items-center justify-between md:pl-[14vw] px-4">
              <div className="text-[16vw] md:text-[7vw] leading-[1] uppercase text-[#09173b] font-medium  text-left mb-5">
                HOW
                <br /> NEOTECH WORKS
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between md:mt-[-1vw] md:ml-[-4vw]">
                {/* Single Step Display */}
                <div className="my-6 w-full">
                  <div className="flex items-center justify-center">
                    <div key={currentStepIndex} className="step flex flex-col items-center">
                      <h3 className="text-center text-[14px] md:text-[1vw] font-semibold flex flex-row items-center justify-between gap-2 text-[#09173b] bg-white p-4 rounded-full border border-[#09173b]">
                        <span className="bg-[#09173b] text-[14px] md:text-[1vw] text-white p-3 border border-[#09173b] rounded-full"><FaUserDoctor />  </span>{steps[currentStepIndex].title}
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Features */}
                <div className="flex h-[40px] w-full items-center justify-center">
                  <div key={currentFeatureIndex} className="flex w-full items-center rounded-full border-2 border-[#09173b] text-[#09173b] p-3 text-[14px] md:text-[1vw] shadow-sm">
                    <div className="mr-4  lg:text-[1.5vw] text-[5vw]">✓</div>
                    {features[currentFeatureIndex]}
                  </div>
                </div>
              </div>
              {/* Step Navigation Arrows */}
              <div className="mb-0 flex justify-center space-x-2 ml-[-8vw] ">
                <button onClick={() => setCurrentStepIndex((prev) => (prev - 1 + steps.length) % steps.length)} className="rounded-full bg-white/20 border border-[#09173b] p-5 lg:text-[1.25vw] text-[6vw] text-[#09173b]">←</button>
                <button onClick={() => setCurrentStepIndex((prev) => (prev + 1) % steps.length)} className="rounded-full bg-white/20 border border-[#09173b] p-5 lg:text-[1.25vw] text-[6vw] text-[#09173b]">→</button>
              </div>
            </div>
            {/* Right side video (40%) */}
            <div className="w-full md:w-[50%] mt-8 md:mt-0">
              <video className="h-full w-full" autoPlay muted loop playsInline>
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
