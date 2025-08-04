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

const DESKTOP_VISIBLE_COUNT = 6; // How many cards shown at once on desktop
const MOBILE_VISIBLE_COUNT = 1; // Show one card at a time on mobile

const HeroStatsSection: React.FC<HeroStatsSectionProps> = ({ statsData }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cardsLength = statsData.length;
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    // Calculate percentage based on viewport
    const visibleCount = isMobile ? MOBILE_VISIBLE_COUNT : DESKTOP_VISIBLE_COUNT;
    return `-${activeCardIndex * (100 / visibleCount)}%`;
  };

  return (
    <main id="result" className="relative z-20 mx-auto max-w-5xl bg-black/20 rounded-3xl lg:p-10 p-4">
      <h2 className="lg:text-[4vw] text-[12vw] text-white font-thin font-heading mb-4">
        Results That Speak for Themselves
      </h2>
      <p className="mb-6 lg:mb-10 lg:text-[1.5vw] text-[4vw] text-white">
        When care is guided by genomic and data insight, outcomes improve—
        for individuals, systems, and society.
      </p>
            {/* Navigation arrows - position top right for better visibility */}
      <div className="absolute right-[10vw] lg:top-[14vw] top-[95vw] flex items-center gap-4 z-20">
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
            width: `${(cardsLength / (isMobile ? MOBILE_VISIBLE_COUNT : DESKTOP_VISIBLE_COUNT)) * 100}%`,
            transform: `translateX(${getTranslate()})`,
          }}
        >
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full lg:w-1/3 px-2 lg:px-4" // full width on mobile, w-1/3 on desktop
            >
              <div className="flex flex-col justify-between h-full gap-2 lg:gap-0 rounded-md border lg:border-[#fe5d66] border-transparent bg-transparent p-4 lg:p-6">
                <div className="text-[#fe5d66]">
                  {stat.icon}
                </div>
                <h2 className="font-regular flex flex-row items-end gap-2 text-left text-[8vw] lg:text-[4vw] tracking-tighter text-white">
                  {stat.prefix && (
                    <span className="text-[4vw] lg:text-[2vw] text-[#fe5d66]">{stat.prefix}</span>
                  )}
                  {stat.isText ? (
                    <span className="text-[6vw] lg:text-[2.5vw] text-white">
                      {stat.value}
                    </span>
                  ) : stat.isDecrease ? (
                    <>
                      <span className="text-white">{stat.value}</span>
                      <span className="text-[4vw] lg:text-[2vw] text-[#fe5d66]">{stat.suffix}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-white">{stat.value}{stat.suffix}</span>
                    </>
                  )}
                </h2>
                <p className="text-left text-[3vw] lg:text-[1.25vw] leading-relaxed tracking-tight text-[#fe5d66]">
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
