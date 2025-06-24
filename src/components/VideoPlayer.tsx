import React from "react";

const VideoPlayer = () => (
  <div className="relative  pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      src="/images/hero/hero.mp4"
      title="YouTube video player"
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
);

export default VideoPlayer; 