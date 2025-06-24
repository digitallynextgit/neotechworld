import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton";
import Image from "next/image";

export interface WhatWeSolvePoint {
  title: string;
  description: string;
  highlight?: string;
  images: string[];
  currentImageIndex: number;
}

interface HeroWhatWeSolveProps {
  whatWeSolveRef: React.RefObject<HTMLDivElement>;
  sectionTitle: string;
  ctaText: string;
  ctaHref: string;
  points: WhatWeSolvePoint[];
  onPointsUpdate?: (points: WhatWeSolvePoint[]) => void;
}

const HeroWhatWeSolve: React.FC<HeroWhatWeSolveProps> = ({
  whatWeSolveRef,
  sectionTitle,
  ctaText,
  ctaHref,
  points,
  onPointsUpdate,
}) => {
  const [localPoints, setLocalPoints] = useState(points);

  const handleImageClick = (idx: number) => {
    const newPoints = [...localPoints];
    newPoints[idx].currentImageIndex = (newPoints[idx].currentImageIndex + 1) % newPoints[idx].images.length;
    setLocalPoints(newPoints);
    onPointsUpdate?.(newPoints);
  };

  return (
  <section
    id="expertise"
    ref={whatWeSolveRef}
    className="relative z-30 -mt-[10vw] flex min-h-[100vh] w-[100vw] flex-col justify-center px-[4vw] py-[8vh] pl-0"
    style={{
      background:
        "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 80%)",
    }}
  >
    <div className="mx-auto w-full max-w-[90vw]">
      <div className="flex flex-row items-center justify-between ">
        <h2 className="mb-[2vh] text-[4vw] sm:text-[5vw] md:text-[6vw] lg:text-[7vw] font-semibold text-black">
          {sectionTitle}
        </h2>
        <div className="flex justify-center">
          <PrimaryButton href={ctaHref} className="bg-red-500">
            {ctaText}
          </PrimaryButton>
        </div>
      </div>
      <div className="mb-[6vh] grid grid-cols-1 gap-[2vw] md:grid-cols-3">
        {points.map((point, idx) => (
          <div key={idx} className="mt-[4vh] text-[2vw] font-semibold text-gray-900">
            <div 
              className="relative mb-4 h-[200px] w-full overflow-hidden rounded-lg cursor-pointer"
              onClick={() => handleImageClick(idx)}
            >
              <Image
                src={localPoints[idx].images[localPoints[idx].currentImageIndex]}
                alt={point.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {point.title}
            <p className="mt-[2vh] text-[1.2vw] font-normal text-gray-700">
              {point.description}
              {point.highlight && (
                <span className="font-semibold"> {point.highlight}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}
export default HeroWhatWeSolve;