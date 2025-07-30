import React, { useState, useEffect, useCallback } from 'react';
import { CaretLeft, CaretRight } from '@phosphor-icons/react';

interface Stat {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
  isText?: boolean;
  isDecrease?: boolean;
}

interface HeroStatsSectionProps {
  statsData: Stat[];
}

const VISIBLE_COUNT = 6; // How many cards shown at once

const HeroStatsSection: React.FC<HeroStatsSectionProps> = ({ statsData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardsLength = statsData.length;

  // Slide next/prev index
  const nextCard = useCallback(() => {
    setActiveCardIndex(prev => (prev + 1) % cardsLength);
  }, [cardsLength]);

  const prevCard = useCallback(() => {
    setActiveCardIndex(prev => (prev - 1 + cardsLength) % cardsLength);
  }, [cardsLength]);

  // Auto-rotation disabled as per user request
  // useEffect(() => {
  //   const interval = setInterval(nextCard, 2000);
  //   return () => clearInterval(interval);
  // }, [nextCard]);

  // Calculate actual sliding position (in %) to ensure proper window, handle wrapping
  const getTranslate = () => {
    // Each card is 100/3 = 33.333...% of the container width
    return `-${activeCardIndex * (100 / VISIBLE_COUNT)}%`;
  };

  return (
    <main id="result" className="relative z-20 mx-auto lg:pl-[20vw]">
      <h2 className="text-[4vw] text-white font-thin font-heading mb-4">
        Results That Speak for Themselves
      </h2>
      <p className="mb-10 text-[1.5vw] text-white">
        When care is guided by genomic and data insight, outcomes improve—
        for individuals, systems, and society.
      </p>
            {/* Navigation arrows - position top right for better visibility */}
      <div className="absolute right-0 top-[11vw] flex items-center gap-4 z-20">
        <button
          onClick={prevCard}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent border-2 border-[#fe5d66] text-[#fe5d66] hover:bg-[#fe5d66] hover:text-white transition-colors duration-300"
          aria-label="Previous slide"
        >
          <CaretLeft weight="bold" className="h-3 w-3" />
        </button>
        <button
          onClick={nextCard}
          className="flex h-6 w-6 items-center justify-center rounded-full bg-transparent border-2 border-[#fe5d66] text-[#fe5d66] hover:bg-[#fe5d66] hover:text-white transition-colors duration-300"
          aria-label="Next slide"
        >
          <CaretRight weight="bold" className="h-3 w-3" />
        </button>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Interactive sliding row */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${(cardsLength /7) * 100}%`,
            transform: `translateX(${getTranslate()})`,
          }}
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-1/3 px-4" // w-1/3 since we want 3 visible at once
            >
              <div className="flex flex-col justify-between h-full gap-0 rounded-md border border-[#fe5d66] bg-transparent p-4">
                <div className="text-[#fe5d66]">
                  {stat.icon}
                </div>
                <h2 className="font-regular flex flex-row items-end gap-2 text-left text-[4vw] tracking-tighter text-white">
                  {stat.prefix && (
                    <span className="text-[2vw] text-[#fe5d66]">{stat.prefix}</span>
                  )}
                  {stat.isText ? (
                    <span className="text-[2.5vw] text-white">
                      {stat.value}
                    </span>
                  ) : stat.isDecrease ? (
                    <>
                      <span className="text-white">{stat.value}</span>
                      <span className="text-[2vw] text-[#fe5d66]">{stat.suffix}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white">{stat.value}{stat.suffix}</span>
                    </>
                  )}
                </h2>
                <p className="text-left text-[1.25vw] leading-relaxed tracking-tight text-[#fe5d66]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </main>
  );
};

export default HeroStatsSection;
