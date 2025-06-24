import React from "react";

const HeroBackgroundDots = () => (
  <div
    className="wow fadeInUp relative z-10 mx-auto max-w-7xl"
    data-wow-delay=".25s"
  >
    <div className="mt-16 "></div>
    <div className="absolute -left-9 bottom-0 z-[-1]">
      <svg
        width="134"
        height="106"
        viewBox="0 0 134 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left SVG Dots */}
        {/* ... SVG circles code ... */}
        {/* (Paste all left-side SVG <circle> elements here) */}
      </svg>
    </div>
    <div className="absolute -right-6 -top-6 z-[-1]">
      <svg
        width="134"
        height="106"
        viewBox="0 0 134 106"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Right SVG Dots */}
        {/* ... SVG circles code ... */}
        {/* (Paste all right-side SVG <circle> elements here) */}
      </svg>
    </div>
  </div>
);

export default HeroBackgroundDots; 