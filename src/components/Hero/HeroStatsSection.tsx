import React, { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import ScrollFloat from "../reactbits/ScrollFloat";
import { Hospital, PiggyBank, Pill, UserCheck } from "lucide-react";
const statsData = [
  {
    icon: (
      <PiggyBank className="mb-6 h-8 w-8 text-white transition-all duration-300 hover:scale-110" />
    ), // Cost savings
    value: 35,
    suffix: "%",
    prefix: "",
    label: "Cost savings in pilot studies",
    start: 28,
    end: 35,
    duration: 1500,
  },
  {
    icon: (
      <Pill className="mb-6 h-8 w-8 text-white  transition-all duration-300 hover:scale-110" />
    ), // Medication adherence
    value: 15,
    suffix: "%",
    prefix: "",
    label: "Better medication adherence",
    start: 0,
    end: 15,
    duration: 1200,
  },
  {
    icon: (
      <Hospital className="mb-6 h-8 w-8 text-white  transition-all duration-300 hover:scale-110" />
    ), // Hospital readmissions
    value: 14,
    suffix: "%",
    prefix: "",
    label: "Drop in hospital readmissions",
    start: 0,
    end: 14,
    duration: 1200,
  },
  {
    icon: (
      <UserCheck className="mb-6 h-8 w-8 text-white transition-all duration-300 hover:scale-110" />
    ), // Patient case
    value: 12,
    suffix: "→ 4",
    prefix: "",
    label:
      "One patient's medication load reduced from 12 to 4 - improving stability and preventing hospitalization",
    start: 12,
    end: 4,
    duration: 1500,
    isDecrease: true,
  },
];
interface Stat {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  start: number;
  end: number;
  duration: number;
  isDecrease?: boolean;
}
// Define useCountUp as a constant arrow function to avoid hook rule violations
const useCountUp = ({
  start,
  end,
  duration,
  shouldStart,
}: {
  start: number;
  end: number;
  duration: number;
  shouldStart: boolean;
}) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!shouldStart) {
      setCount(start);
      return;
    }

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const value = Math.round(start + (end - start) * progress);
      setCount(value);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [start, end, duration, shouldStart]);

  return count;
};

interface HeroStatsSectionProps {
  statsData: Stat[];
  inView: boolean;
  useCountUpBounce: (args: {
    start: number;
    end: number;
    duration: number;
    shouldStart: boolean;
    idx: number;
  }) => number;
  boxRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  iconRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  numberRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  buttonRefs: React.MutableRefObject<(HTMLAnchorElement | null)[]>;
}


const HeroStatsSection: React.FC<HeroStatsSectionProps> = ({
  statsData,
  inView,
  useCountUpBounce,
  boxRefs,
  iconRefs,
  numberRefs,
  buttonRefs,
}) => {
  console.log('HeroStatsSection rendered, inView:', inView);
  console.log('statsData length:', statsData.length);

  const counterRefs = React.useRef<(number | null)[]>(statsData.map(() => null));
  
  // Remove statsData from dependency array as it's an outer scope value
  const counters = React.useMemo(() => statsData.map((stat, index) => ({
    ref: counterRefs,
    start: stat.start,
    end: stat.end,
    duration: stat.duration
  })), [])
  const count0 = useCountUpBounce({
    start: statsData[0].start,
    end: statsData[0].end,
    duration: statsData[0].duration,
    shouldStart: inView,
    idx: 0,
  });

  const count1 = useCountUpBounce({
    start: statsData[1].start,
    end: statsData[1].end,
    duration: statsData[1].duration,
    shouldStart: inView,
    idx: 1,
  });

  const count2 = useCountUpBounce({
    start: statsData[2].start,
    end: statsData[2].end,
    duration: statsData[2].duration,
    shouldStart: inView,
    idx: 2,
  });

  const count3 = useCountUpBounce({
    start: statsData[3].start,
    end: statsData[3].end,
    duration: statsData[3].duration,
    shouldStart: inView,
    idx: 3,
  });

  React.useEffect(() => {
    counterRefs.current[0] = count0;
    counterRefs.current[1] = count1;
    counterRefs.current[2] = count2;
    counterRefs.current[3] = count3;
  }, [count0, count1, count2, count3]);

  return (
  <>
    <main
      id="result"
      className="relative z-20 mx-auto lg:pl-[20vw]"
    >
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
        textClassName="text-[7vw] text-white font-medium"
      >
        Results
      </ScrollFloat>
      <p className="mb-10  text-[2vw] text-white/80 ">
        When care is guided by insight, outcomes improve - for everyone.
      </p>
      <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-4  ">
        {statsData.map((stat, i) => {
          console.log(`Rendering stat ${i}:`, stat);
          const count = counters[i].ref.current[i] || stat.start;
          console.log(`Stat ${i} count:`, count);
          return (
            <div
              ref={(el) => {
                boxRefs.current[i] = el;
                console.log(`Box ref ${i} set:`, !!el);
              }}
              key={i}
              className="flex flex-col justify-between gap-0 rounded-md border border-white bg-transparent p-4 "
            >
              <div className=""
                ref={(el) => {
                  iconRefs.current[i] = el;
                  console.log(`Icon ref ${i} set:`, !!el);
                }}
              >
                {stat.icon}
              </div>
              <h2 className="font-regular flex  flex-row items-end gap-2 text-left text-[4vw] tracking-tighter text-white">
                {stat.isDecrease ? (
                  <>
                    <span
                      ref={(el) => {
                        numberRefs.current[i] = el;
                        console.log(`Number ref ${i} set:`, !!el);
                      }}
                      className="text-white"
                    >
                      {count}
                    </span>
                    <span className="text-[2vw] text-white ">
                      {stat.suffix}
                    </span>
                  </>
                ) : (
                  <>
                    <span
                      ref={(el) => {
                        numberRefs.current[i] = el;
                        console.log(`Number ref ${i} set (non-decrease):`, !!el);
                      }}
                      className="text-white "
                    >
                      {count}
                      {stat.suffix}
                    </span>
                  </>
                )}
              </h2>
              <p className=" text-left text-[1.25vw] leading-relaxed tracking-tight text-white ">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-[6vw] flex flex-wrap justify-center gap-4">
        <PrimaryButton href="#">Book a Pilot Program</PrimaryButton>
        <PrimaryButton href="#">Download Use Case Brief</PrimaryButton>
        <PrimaryButton href="#">Talk to Our Experts</PrimaryButton>
      </div>
    </main>
  </>
  );
};

export default HeroStatsSection;
