"use client";

import { useState } from "react";
import { FaUserDoctor } from "react-icons/fa6";

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
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  return (
    <section
      id="works"
      className="z-10 overflow-hidden bg-white"
    >
      <div>
        <div className="flex flex-col items-center gap-8 md:flex-row">
          {/* Left side content (60%) */}
          <div className="flex w-full md:w-[50%] flex-col items-center justify-between md:pl-[14vw] px-4">
            <div className="text-[16vw] md:text-[7vw] leading-[1] uppercase text-[#09173b] font-medium lg:text-center text-left">
              HOW
              <br /> NEOTECH WORKS
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-0 justify-between md:mt-[-1vw] md:ml-[-4vw]">
              {/* Single Step Display */}
              <div className="my-6 w-full">
                <div className="flex items-center justify-center">
                  <div
                    key={currentStepIndex}
                    className="step flex flex-col items-center"
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
                className="flex h-[40px] w-full items-center justify-center"
              >
                <div
                  key={currentFeatureIndex}
                  className="flex w-full items-center rounded-full border-2 border-[#09173b] text-[#09173b] p-3 text-[14px] md:text-[1vw] shadow-sm"
                >
                  <div className="mr-4  lg:text-[1.5vw] text-[5vw]">✓</div>
                  {features[currentFeatureIndex]}
                </div>
              </div>
            </div>
            {/* Step Navigation Arrows */}
            <div className="mb-0 flex justify-center space-x-2 ml-[-8vw] mt-[10vw]">
              <button
                onClick={() => setCurrentStepIndex((prev) => (prev - 1 + steps.length) % steps.length)}
                className="rounded-full bg-white/20 border border-[#09173b] p-5 lg:text-[1.25vw] text-[6vw] text-[#09173b]"
              >
                ←
              </button>
              <button
                onClick={() => setCurrentStepIndex((prev) => (prev + 1) % steps.length)}
                className="rounded-full bg-white/20 border border-[#09173b] p-5 lg:text-[1.25vw] text-[6vw] text-[#09173b]"
              >
                →
              </button>
            </div>
          </div>
          {/* Right side video (40%) */}
          <div className="w-full md:w-[50%] mt-8 md:mt-0">
            <div className="relative overflow-hidden">
              <video
                className="h-full w-full"
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
