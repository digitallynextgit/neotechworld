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
  <div className="relative z-20 mx-auto w-[100vw] h-[80vh] flex flex-col justify-center mt-[-45vw] px-[6vw]">
    <div className="flex flex-wrap items-center justify-center w-full h-full">
      <div className="w-full">
        <div
          className="hero-content wow fadeInUp mx-auto text-center"
          data-wow-delay=".2s"
        >
          <div className="mt-[-8vw] mb-[8vh]">
            {/* <h3 className="mb-[2vh] text-[2vw] underline italic leading-[1.1] text-white font-bold ">NMC Genetics</h3> */}
          <div className="mb-[2vh] text-[4vw] font-normal leading-[1.1] text-white flex flex-col justify-center items-center">
                 {/* <DnaCanvas modelPath="/dna2.glb" /> */}
            <h1 className="w-[80%]">From Unknowns to Outcomes.</h1>
       
          </div>
          <div className="h-[2vw] mb-[2vh] mt-[-5vw] text-white font-bold">
          <TypewriterEffect />
          </div>
          </div>
          <p className="mx-auto my-[6vh] w-[80vw] mt-[12vw] rounded-full bg-white/80 p-[1.5vw] text-[1.25vw] font-medium text-red-700">
            NeoTech World Lab empowers healthcare systems, doctors,
            researchers, and institutions to make every treatment
            count - through genomics that reduce guesswork, cut cost, and
            unlock population-wide precision.
          </p>
          <div className="mb-[2vh] flex w-full flex-col justify-center">
            <div className="relative mb-[6vh] ml-[10vw] h-[0.2vh] w-[70vw] bg-white/40">
              <div
                className="absolute left-0 top-0 h-full bg-[#C8AA6A] transition-all duration-200"
                style={{ width: `${buttonProgress}%` }}
              />
            </div>
            {/* Button Ticker (split layout) */}
            <div className="mx-auto flex w-full max-w-[40vw] flex-row items-center justify-between px-[2vw] pb-[1vh]">
              {/* Left: Empower your mission + left arrow */}
              <div className="flex items-center gap-[1vw]">
                <Link
                  href="#"
                  className="whitespace-nowrap rounded-full border border-white bg-white/90 px-[2vw] py-[2vh] text-[1vw] -ml-[14vw] font-semibold text-red shadow transition hover:bg-red-500 hover:text-white  hover:scale-105 hover:transition-all ease-in"
                  style={{ minWidth: "12vw", textAlign: "center" }}
                >
                  Empower your mission &rarr;
                </Link>
              </div>
              {/* Right: Ticker for other buttons */}
              <div className="flex flex-1 flex-col items-end justify-end">
                {/* Button Content Row */}
                <div className="flex w-full max-w-[12vw] items-center mr-[-10vw]">
                  <Link
                    href={heroButtons[buttonCurrent].href}
                    className="mr-[1vw] whitespace-nowrap rounded-full cursor-none bg-white px-[2vw] py-[2vh] text-[1vw] font-semibold text-[#FF5C5C] shadow transition hover:bg-white/90"
                    style={{ minWidth: "12vw", textAlign: "center" }}
                  >
                    {heroButtons[buttonCurrent].label}
                  </Link>
                  <button
                    onClick={() =>
                      setButtonCurrent((buttonCurrent + 1) % heroButtons.length)
                    }
                    className="ml-2 rounded-full bg-white/20 p-3 transition hover:bg-white/40"
                    aria-label="Next button"
                  >
                    <FaArrowRight size={"1vw"} color="white" />
                  </button>
                  <button
                    onClick={() =>
                      setButtonCurrent(
                        (buttonCurrent - 1 + heroButtons.length) % heroButtons.length,
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