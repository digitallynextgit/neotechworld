import React from "react";
import ScrollFloat from "../reactbits/ScrollFloat";
import { Stat } from "@/data/statsData";

interface HeroStatsSectionProps {
  statsData: Stat[];
  inView: boolean;
  getCounterValue: (args: {
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
  getCounterValue,
  boxRefs,
  iconRefs,
  numberRefs,
  buttonRefs,
}) => {
  console.log('HeroStatsSection rendered, inView:', inView);
  console.log('statsData length:', statsData.length);

  // const counterRefs = React.useRef<(number | null)[]>(statsData.map(() => null));
  
  // Create counters for each stat that needs counting animation
  const counters = statsData.map((stat, index) => {
    if (stat.isText) return { value: stat.value };
    
    // Call the function prop to get the counter value
    const counterValue = getCounterValue({
      start: stat.start,
      end: stat.end,
      duration: stat.duration,
      shouldStart: inView,
      idx: index,
    });
    
    return { value: counterValue };
  });

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
        textClassName="text-[4vw] text-white font-medium "
      >
         Results That Speak for Themselves
      </ScrollFloat>
      <p className="mb-10 text-[1.5vw] text-white ">
       When care is guided by genomic insight, outcomes improve—for individuals, systems, and society.
      </p>
      <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 sm:gap-6 md:gap-8 lg:grid-cols-3">
        {statsData.map((stat, i) => {
          console.log(`Rendering stat ${i}:`, stat);
          const count = stat.isText ? stat.value : counters[i].value;
          console.log(`Stat ${i} count:`, count);
          return (
            <div
              ref={(el) => {
                boxRefs.current[i] = el;
                console.log(`Box ref ${i} set:`, !!el);
              }}
              key={i}
              className="flex flex-col justify-between gap-0 rounded-md border border-white bg-transparent p-4"
            >
              <div className="text-[]"
                ref={(el) => {
                  iconRefs.current[i] = el;
                  console.log(`Icon ref ${i} set:`, !!el);
                }}
              >
                {stat.icon}
              </div>
              <h2 className="font-regular flex flex-row items-end gap-2 text-left text-[4vw] tracking-tighter text-white">
                {stat.prefix && (
                  <span className="text-[2vw] text-white">{stat.prefix}</span>
                )}
                {stat.isText ? (
                  <span
                    ref={(el) => {
                      numberRefs.current[i] = el;
                      console.log(`Text ref ${i} set:`, !!el);
                    }}
                    className="text-white text-[2.5vw]"
                  >
                    {count}
                  </span>
                ) : stat.isDecrease ? (
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
                    <span className="text-[2vw] text-white">
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
                      className="text-white"
                    >
                      {count}
                      {stat.suffix}
                    </span>
                  </>
                )}
              </h2>
              <p className="text-left text-[1.25vw] leading-relaxed tracking-tight text-white">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-[6vw] flex flex-wrap justify-center gap-4">
        {/* <PrimaryButton className="text-red-500" href="#">Book a Pilot Program</PrimaryButton> */}
        {/* <PrimaryButton className="text-red-500" href="#">Download Use Case Brief</PrimaryButton> */}
        {/* <PrimaryButton className="text-red-500" href="#">Talk to Our Experts</PrimaryButton> */}
      </div>
    </main>
  </>
  );
};

export default HeroStatsSection;
