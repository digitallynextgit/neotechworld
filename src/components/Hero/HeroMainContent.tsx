import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import TypewriterText from "./TypewriterText";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TypewriterEffect from "../Typewritter/TypewriterEffect";
import DnaCanvas from "./DnaModel";

interface HeroMainContentProps {
  buttonProgress: number;
  heroButtons: { label: string; href: string }[];
  buttonCurrent: number;
  setButtonCurrent: (idx: number) => void;
  scrollToNextSection: () => void;
}

const HeroMainContent: React.FC<HeroMainContentProps> = ({
  buttonProgress,
  heroButtons,
  buttonCurrent,
  setButtonCurrent,
  scrollToNextSection,
}) => {
  return (
    <div className="relative z-20 mx-auto flex flex-col justify-center px-[6vw] py-10 bg-black/20 rounded-full max-w-7xl lg:h-[80vh] h-[50vh] lg:mt-0 mt-[12vh]">
      
      <div className="flex h-full w-full flex-wrap items-center justify-center ">
        
        <div className="w-full">
          <div
            className="hero-content wow fadeInUp mx-auto text-center"
            data-wow-delay=".2s"
          >
            
            <div className="">
              
              {/* <h3 className="mb-[2vh] text-[2vw] underline italic leading-[1.1] text-white font-bold ">NMC Genetics</h3> */}
              <div className="mb-[2vh] flex flex-col items-center justify-center text-[4vw] font-normal leading-[1.1] text-white">
                {/* <DnaCanvas modelPath="/dna2.glb" /> */}

                <h1 className="w-[80%] font-heading font-thin text-white lg:text-[4vw] text-[12vw]">From Unknowns to Outcomes.</h1>
              </div>
              <div className="mb-[2vh] mt-[-5vw] h-[2vw] font-heading font-semibold text-white">
                <TypewriterEffect />
              </div>
            </div>
            {/* <DotLottieReact src="/dnaloader.lottie" loop autoplay className="mt-[-10vw]"/> */}
            {/* <p className="mx-auto my-[6vh] mt-[12vw] w-[20vw] h-[40vh] rounded-full bg-transparent p-[1.5vw] text-[1.25vw] font-medium text-red-700">
              Neotech World Lab empowers healthcare systems, doctors, and
              researchers to make every treatment count—by harnessing genomics
              to reduce guesswork, refine diagnosis, and enable truly
              personalized care.
            </p> */}
            <div className="mb-[2vh] flex w-full flex-col justify-center mt-[20vh]">
              
              <div className="mx-auto flex w-full flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 px-4 sm:px-[2vw] py-[1vh]">
                {/* Left: Empower your mission + left arrow */}
                <div className="flex items-center w-full sm:w-auto">
                  <Link
                    href="#"
                    className="w-full sm:w-auto whitespace-nowrap rounded-full border border-white bg-white px-6 sm:px-[2vw] py-3 sm:py-[2vh] text-base sm:text-[1.5vw] lg:text-[1vw] font-semibold text-black shadow transition ease-in hover:scale-105 hover:bg-red-500 hover:text-white hover:transition-all text-center"
                  >
                    Empower your mission &rarr;
                  </Link>
                </div>
                {/* Right: Ticker for other buttons */}
                <div className="flex w-full sm:w-auto sm:flex-1 flex-col items-center sm:items-end justify-end">
                  {/* Button Content Row */}
                  <div className="flex w-full sm:max-w-[20vw] items-center justify-center sm:justify-end gap-2 sm:gap-4">
                    <Link
                      href={heroButtons[buttonCurrent].href}
                      className="flex-grow sm:flex-grow-0 text-center whitespace-nowrap rounded-full bg-[#fe5d66] px-6 sm:px-[2vw] py-3 sm:py-[2vh] text-base sm:text-[1.5vw] lg:text-[1vw] font-semibold text-white shadow transition"
                    >
                      {heroButtons[buttonCurrent].label}
                    </Link>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setButtonCurrent(
                            (buttonCurrent + 1) % heroButtons.length,
                          )
                        }
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center transition hover:bg-white/40"
                        aria-label="Next button"
                      >
                        <FaArrowRight className="w-4 h-4 sm:w-[1vw] sm:h-[1vw]" color="white" />
                      </button>
                      <button
                        onClick={() =>
                          setButtonCurrent(
                            (buttonCurrent - 1 + heroButtons.length) %
                              heroButtons.length,
                          )
                        }
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center transition hover:bg-white/40"
                        aria-label="Previous button"
                      >
                        <FaArrowLeft className="w-4 h-4 sm:w-[1vw] sm:h-[1vw]" color="white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMainContent;
