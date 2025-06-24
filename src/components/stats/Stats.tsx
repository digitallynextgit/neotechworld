"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { PiggyBank, Pill, Hospital, UserCheck, RefreshCw } from "lucide-react";

const statsData = [
  {
    icon: <PiggyBank className="w-8 h-8 mb-6 text-newblue" />,
    suffix: "%",
    label: "Cost savings in pilot studies",
    start: 28,
    end: 35,
    duration: 1500,
  },
  {
    icon: <Pill className="w-8 h-8 mb-6 text-newblue" />,
    suffix: "%",
    label: "Better medication adherence",
    start: 0,
    end: 15,
    duration: 1200,
  },
  {
    icon: <Hospital className="w-8 h-8 mb-6 text-newblue" />,
    suffix: "%",
    label: "Drop in hospital readmissions",
    start: 0,
    end: 14,
    duration: 1200,
  },
  {
    icon: <UserCheck className="w-8 h-8 mb-6 text-newblue" />,
    suffix: "→4",
    label: "One patient's medication load reduced from 12 to 4—improving stability and preventing hospitalization",
    start: 12,
    end: 4,
    duration: 1500,
    isDecrease: true,
  },
];

// Custom hook to animate count
function useCountUp({ start, end, duration, shouldStart }: {
  start: number;
  end: number;
  duration: number;
  shouldStart: boolean;
}) {
  const [count, setCount] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!shouldStart) return;

    setIsAnimating(true);
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.round(start + (end - start) * progress);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration, shouldStart]);

  return { count, isAnimating };
}

function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [forceReset, setForceReset] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Observe when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Manually apply hook for each stat (don't loop through statsData for hooks)
  const counter0 = useCountUp({ ...statsData[0], shouldStart: inView || forceReset });
  const counter1 = useCountUp({ ...statsData[1], shouldStart: inView || forceReset });
  const counter2 = useCountUp({ ...statsData[2], shouldStart: inView || forceReset });
  const counter3 = useCountUp({ ...statsData[3], shouldStart: inView || forceReset });

  const allCounters = [counter0, counter1, counter2, counter3];

  // Reset loading state after all animations finish
  useEffect(() => {
    const allDone = allCounters.every((c) => !c.isAnimating);
    if (allDone && (inView || forceReset)) {
      setIsLoading(false);
      setForceReset(false);
    }
  }, [allCounters, inView, forceReset]);

  const handleReset = useCallback(() => {
    setIsLoading(true);
    setForceReset(true);
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-20 lg:py-10 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl md:text-6xl font-semibold mb-2 text-newblue">
            RESULTS THAT MATTER
          </h2>
          <p className="text-lg md:text-xl text-black mb-4">
            When care is guided by insight, outcomes improve—for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {statsData.map((stat, i) => {
            const count = allCounters[i].count;
            return (
              <div
                key={i}
                className="flex flex-col justify-between p-6 border border-newblue rounded-md bg-white dark:bg-dark-2"
              >
                {stat.icon}
                <h2 className="text-4xl tracking-tighter text-left font-regular flex gap-2 items-end text-primary">
                  {stat.isDecrease ? (
                    <>
                      <span>{count}</span>
                      <span className="text-2xl text-newblue">{stat.suffix}</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {count}
                        {stat.suffix}
                      </span>
                    </>
                  )}
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-newblue">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-10">
          <a
            href="#"
            className="rounded-lg bg-transparent px-6 py-3 text-base font-medium text-newblue border-newblue border duration-300 ease-in-out hover:bg-newblue hover:text-white"
          >
            Book a Pilot Program
          </a>
          <a
            href="#"
            className="rounded-lg bg-newblue px-6 py-3 text-base font-medium text-white duration-300 ease-in-out hover:bg-[#0a1e3b]"
          >
            Download Use Case Brief
          </a>
          <a
            href="#"
            className="rounded-lg bg-transparent px-6 py-3 text-base font-medium text-newblue border-newblue border duration-300 ease-in-out hover:bg-newblue hover:text-white"
          >
            Talk to Our Experts
          </a>
          <button
            onClick={handleReset}
            className="flex items-center gap-2 rounded-lg bg-transparent px-6 py-3 text-base font-medium text-newblue border-newblue border duration-300 ease-in-out hover:bg-newblue hover:text-white"
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
            Reset Stats
          </button>
        </div>
      </div>
    </div>
  );
}

export { Stats };
