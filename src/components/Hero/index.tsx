"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ScrollFloat from "@/components/reactbits/ScrollFloat";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrimaryButton from "../PrimaryButton";
import DnaCanvas from "./DnaModel";
import {
  // FloatingSectionNav,
  FloatingSectionNavAfterHero,
} from "./FloatingSectionNav";
import HeroStatsSection from "@/components/Hero/HeroStatsSection";
import HeroMainContent from "./HeroMainContent";
import Features from "../Features";
import { FeatureSteps } from "../reactbits/Features";
import { statsData } from "@/data/statsData";
import TypewriterEffect from "../Typewritter/TypewriterEffect";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "lucide-react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { clientsData } from '../Clients/clientsData';
gsap.registerPlugin(ScrollTrigger);

type Blog = {
  id?: number;
  title?: string;
  slug?: string;
  excerpt?: string;
  coverImage?: string;
  date: string;
};

type HeroProps = {
  posts?: Blog[];
};

const BLOG_TICKER_INTERVAL = 6000; // ms
const BUTTON_TICKER_INTERVAL = 5000; // ms

const features = [
  {
    step: "Step 1",
    title: "Treating More with Less",
    content:
      "Chronic care in India often means 4–6 drugs per patient. Many are redundant or ineffective, creating a financial and operational burden. NeoTech helps simplify treatment at scale.",
    images: [
      "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
      "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg",
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg",
    ],
    currentImageIndex: 0,
  },
  {
    step: "Step 2",
    title: "Right Drug. Right Dose. First Time.",
    content:
      "Trial-and-error prescriptions aren't just risky—they're costly. We eliminate the mismatch through pharmacogenomics.",
    images: [
      "https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg",
      "https://images.pexels.com/photos/4210611/pexels-photo-4210611.jpeg",
      "https://images.pexels.com/photos/3683102/pexels-photo-3683102.jpeg",
    ],
    currentImageIndex: 0,
  },
  {
    step: "Step 3",
    title: "From Research to Real-World Use",
    content:
      "India leads in scientific discovery, but lags in implementation. NeoTech bridges this gap with clinical-ready tools that doctors and health departments can use every day.",
    images: [
      "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
      "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
      "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg",
    ],
    currentImageIndex: 0,
  },
];

const Hero = ({ posts }: HeroProps) => {
  // Placeholder blog data if none provided
  const fallbackPosts: Blog[] = [];
  const blogPosts = posts && posts.length > 0 ? posts : fallbackPosts;
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef<NodeJS.Timeout | null>(null);

  const heroButtons = [
    { label: "For Government", href: "#" },
    { label: "For Hospitals", href: "#" },
    { label: "For Doctors", href: "#" },
    { label: "For Diagnostics", href: "#" },
    { label: "For Pharma", href: "#" },
    { label: "For Corporates", href: "#" },
  ];
  const [buttonCurrent, setButtonCurrent] = useState(0);
  const [buttonProgress, setButtonProgress] = useState(0);
  const buttonProgressRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true); // Start with true to ensure animations begin immediately

  // Move refs inside the component
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const iconRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  // Progress bar and auto-advance logic
  useEffect(() => {
    setProgress(0);
    if (progressRef.current) clearInterval(progressRef.current);
    let start = Date.now();
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min(100, (elapsed / BLOG_TICKER_INTERVAL) * 100));
      if (elapsed >= BLOG_TICKER_INTERVAL) {
        setCurrent((prev) => (prev + 1) % blogPosts.length);
        start = Date.now();
      }
    }, 30);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
    // eslint-disable-next-line
  }, [current, blogPosts.length]);

  // Progress bar and auto-advance logic for button ticker
  useEffect(() => {
    setButtonProgress(0);
    if (buttonProgressRef.current) clearInterval(buttonProgressRef.current);
    let start = Date.now();
    buttonProgressRef.current = setInterval(() => {
      const elapsed = Date.now() - start;
      setButtonProgress(
        Math.min(100, (elapsed / BUTTON_TICKER_INTERVAL) * 100),
      );
      if (elapsed >= BUTTON_TICKER_INTERVAL) {
        setButtonCurrent((prev) => (prev + 1) % heroButtons.length);
        start = Date.now();
      }
    }, 30);
    return () => {
      if (buttonProgressRef.current) clearInterval(buttonProgressRef.current);
    };
  }, [buttonCurrent, heroButtons.length]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        console.log("Stats section intersection:", entry.isIntersecting);
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }, // Lower threshold and negative rootMargin to trigger earlier
    );
    if (sectionRef.current) {
      console.log("Observing stats section");
      observer.observe(sectionRef.current);
    } else {
      console.error("Stats section ref not available");
    }
    return () => observer.disconnect();
  }, []);

  // Scroll to next section
  const scrollToNextSection = () => {
    const statsSection = document.getElementById("stats");
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Parallax and entrance animations for stats
  useEffect(() => {
    boxRefs.current.forEach((box, i) => {
      if (!box) return;
      gsap.fromTo(
        box,
        { y: 80 + i * 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: box,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 0.5,
          },
        },
      );
    });
    iconRefs.current.forEach((icon, i) => {
      if (!icon) return;
      gsap.fromTo(
        icon,
        { scale: 0.5, opacity: 0, rotate: -30 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.7,
          delay: 0.1 * i,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: icon,
            start: "top 85%",
          },
        },
      );
    });
    buttonRefs.current.forEach((btn, i) => {
      if (!btn) return;
      gsap.fromTo(
        btn,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          delay: 0.1 * i,
          ease: "power2.out",
          scrollTrigger: {
            trigger: btn,
            start: "top 90%",
          },
        },
      );
    });
  }, []);

  // Custom hook for the Hero component to use
  const useCountUpBounceForHero = ({
    start,
    end,
    duration,
    shouldStart,
    idx,
  }: {
    start: number;
    end: number;
    duration: number;
    shouldStart: boolean;
    idx: number;
  }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
      console.log(
        `Counter ${idx} - shouldStart:`,
        shouldStart,
        "start:",
        start,
        "end:",
        end,
      );
      if (!shouldStart) {
        setCount(start); // Reset to start when not in view
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
        } else {
          // Bounce effect on finish
          if (numberRefs.current[idx]) {
            console.log(`Counter ${idx} finished animation`);
            gsap.fromTo(
              numberRefs.current[idx],
              { scale: 1.2 },
              { scale: 1, duration: 0.3, ease: "bounce.out" },
            );
          }
        }
      };

      animationFrameId = requestAnimationFrame(step);

      // Cleanup function
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [start, end, duration, shouldStart, idx]);

    return count;
  };

  const [showWhiteTransition, setShowWhiteTransition] = useState(false);
  const whatWeSolveRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero Content */}
      <main id="hero-main-section">
       
        <div className="relative z-10 flex w-full items-center justify-center mt-[7vw]">
        <HeroMainContent
          buttonProgress={buttonProgress}
          heroButtons={heroButtons}
          buttonCurrent={buttonCurrent}
          setButtonCurrent={setButtonCurrent}
          scrollToNextSection={scrollToNextSection}
        />
        </div>
        {/* Content */}

      </main>
      
      {/* DNA Model positioned below hero section */}
   
      {/* Floating section nav appears after hero section is out of view */}
      {/* <FloatingSectionNavAfterHero /> */}
      {/* Section 1 */}
      <section
        id="home"
        ref={sectionRef}
        className="relative overflow-hidden py-[20vh] "
      >
        <HeroStatsSection
          statsData={statsData}
        />
      </section>
      {/* What We Solve Section */}
      <section
        id="expertise"
        ref={whatWeSolveRef}
        className="relative z-30 -mt-[18vw] flex  w-full flex-col justify-center pb-[5vw] pt-[15vw] "
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 80%)",
        }}
      >
        <div className=" w-full max-w-5xl mx-auto">
          {/* Large heading at the top */}
          <div className="flex flex-row items-center justify-between ">
            <ScrollFloat
              containerClassName="mb-6"
              textClassName=" text-[4.5vw] text-white font-medium "
            >
              WHAT WE SOLVE AND HOW
            </ScrollFloat>
            {/* CTA Button centered below columns */}
          </div>

          <div className=" w-[68vw] rotate-180 border-[.02vw] border-white" />
          <FeatureSteps
          // features={features}
          // title="Your Journey Starts Here"
          // autoPlayInterval={4000}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
