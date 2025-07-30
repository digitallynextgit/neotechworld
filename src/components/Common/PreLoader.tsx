import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const PreLoader = () => {
  return (
    <div className="fixed left-0 top-0 z-999999 flex h-screen w-screen items-center justify-center bg-[#09173b]">
      <div className="w-48 h-48 flex flex-col items-center justify-center">
        <DotLottieReact 
          src="/preloader.lottie" 
          loop 
          autoplay 
        />
        <div className="text-white text-lg font-medium mt-4 animate-pulse">Loading...</div>
      </div>
    </div>
  );
};

export default PreLoader;