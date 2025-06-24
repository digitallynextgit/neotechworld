import React, { useEffect, useState } from "react";
import { isSafari } from "@/utils/isSafari";

interface HeroVideoBackgroundProps {
  videoOpacity: number;
}

const HeroVideoBackground: React.FC<HeroVideoBackgroundProps> = ({ videoOpacity }) => {
  const [safari, setSafari] = useState(false);
  useEffect(() => {
    setSafari(isSafari());
  }, []);
  return (
    <div className="relative">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="pointer-events-none fixed inset-0 z-0 h-full w-full object-cover"
        style={{
          opacity: videoOpacity,
          transition: "opacity 0.2s linear",
          ...(safari ? { filter: "brightness(1.2) contrast(1.1)" } : {}),
        }}
      >
        <source src="/images/hero/gradient.webm" type="video/webm" />
        <source src="/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Bottom gradient overlay */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "260px",
          pointerEvents: "none",
          zIndex: 2,
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%)",
        }}
      />
      {/* Top gradient overlay (optional) */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "120px",
          pointerEvents: "none",
          zIndex: 2,
          background:
            "linear-gradient(to top, rgba(255,255,255,0) 0%, #fff 100%)",
        }}
      />
    </div>
  );
};

export default HeroVideoBackground; 