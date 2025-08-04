import React from "react";

export default function ComingSoon({ pageName = "" }: { pageName?: string }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#09173b]">
        {pageName ? `${pageName} Coming Soon` : "Coming Soon"}
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8">This page is coming soon. Stay tuned!</p>
      <span className="text-5xl animate-bounce">🚧</span>
    </div>
  );
} 