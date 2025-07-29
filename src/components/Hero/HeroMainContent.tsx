import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import TypewriterText from "./TypewriterText";
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
    <div className="relative z-20 mx-auto mt-[-38vw] flex h-[80vh] w-[100vw] flex-col justify-center px-[6vw]">
      <div className="flex h-full w-full flex-wrap items-center justify-center">
        <div className="w-full">
          <div
            className="hero-content wow fadeInUp mx-auto text-center"
            data-wow-delay=".2s"
          >
            <div className="mb-[8vh] mt-[0vw]">
              {/* <h3 className="mb-[2vh] text-[2vw] underline italic leading-[1.1] text-white font-bold ">NMC Genetics</h3> */}
              <div className="mb-[2vh] flex flex-col items-center justify-center text-[4vw] font-normal leading-[1.1] text-white">
                {/* <DnaCanvas modelPath="/dna2.glb" /> */}
                <h1 className="w-[80%]">From Unknowns to Outcomes.</h1>
              </div>
              <div className="mb-[2vh] mt-[-5vw] h-[2vw] font-bold text-white">
                <TypewriterEffect />
              </div>
            </div>
            <p className="mx-auto my-[6vh] mt-[12vw] w-[80vw] rounded-full bg-white/80 p-[1.5vw] text-[1.25vw] font-medium text-red-700">
              Neotech World Lab empowers healthcare systems, doctors, and
              researchers to make every treatment count—by harnessing genomics
              to reduce guesswork, refine diagnosis, and enable truly
              personalized care.
            </p>
            <div className="mb-[2vh] flex w-full flex-col justify-center">
              <div className="relative mb-[6vh] ml-[10vw] h-[0.2vh] w-[70vw] bg-white/40">
                <div
                  className="absolute left-0 top-0 h-full bg-white transition-all duration-200"
                  style={{ width: `${buttonProgress}%` }}
                />
              </div>
              {/* Button Ticker (split layout) */}
              <div className="mx-auto flex w-full max-w-[40vw] flex-row items-center justify-between px-[2vw] pb-[1vh]">
                {/* Left: Empower your mission + left arrow */}
                <div className="flex items-center gap-[1vw]">
                  <Link
                    href="#"
                    className="-ml-[14vw] whitespace-nowrap rounded-full border border-white bg-white/90 px-[2vw] py-[2vh] text-[1vw] font-semibold text-red shadow transition ease-in hover:scale-105  hover:bg-red-500 hover:text-white hover:transition-all"
                    style={{ minWidth: "12vw", textAlign: "center" }}
                  >
                    Empower your mission &rarr;
                  </Link>
                </div>
                {/* Right: Ticker for other buttons */}
                <div className="flex flex-1 flex-col items-end justify-end">
                  {/* Button Content Row */}
                  <div className="mr-[-10vw] flex w-full max-w-[12vw] items-center">
                    <Link
                      href={heroButtons[buttonCurrent].href}
                      className="mr-[1vw] cursor-none whitespace-nowrap rounded-full bg-white px-[2vw] py-[2vh] text-[1vw] font-semibold text-[#FF5C5C] shadow transition hover:bg-white/90"
                      style={{ minWidth: "12vw", textAlign: "center" }}
                    >
                      {heroButtons[buttonCurrent].label}
                    </Link>
                    <button
                      onClick={() =>
                        setButtonCurrent(
                          (buttonCurrent + 1) % heroButtons.length,
                        )
                      }
                      className="ml-2 rounded-full bg-white/20 p-3 transition hover:bg-white/40"
                      aria-label="Next button"
                    >
                      <FaArrowRight size={"1vw"} color="white" />
                    </button>
                    <button
                      onClick={() =>
                        setButtonCurrent(
                          (buttonCurrent - 1 + heroButtons.length) %
                            heroButtons.length,
                        )
                      }
                      className="ml-2 rounded-full bg-white/20 p-3 transition hover:bg-white/40"
                      aria-label="Previous button"
                    >
                      <FaArrowLeft size={"1vw"} color="white" />
                    </button>
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
