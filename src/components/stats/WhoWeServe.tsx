"use client";

import { useCallback, useEffect, useRef, useState } from "react";
// Removed lucide-react import
import {
  Buildings,
  Users,
  FirstAidKit,
  Briefcase,
  Heart,
  Flask,
  CaretLeft,
  CaretRight,
  Calculator,
} from "@phosphor-icons/react";
import ScrollFloat from "../reactbits/ScrollFloat";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    icon: <Buildings weight="thin" className="h-12 w-12 text-white" />,
    title: "Government & Administrators",
    description:
      "Slash subsidy waste. Build real-time registries. Deploy genomics at population scale.",
    images: [
      "https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg",
      "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg",
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    ],
    currentImageIndex: 0,
  },
  {
    icon: <FirstAidKit weight="thin" className="h-12 w-12 text-white" />,
    title: "Hospitals & Clinics",
    description: "Improve accuracy, reduce OPD volume, enhance care.",
    images: [
      "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
      "https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg",
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg"
    ],
    currentImageIndex: 0,
  },
  {
    icon: <Flask weight="thin" className="h-12 w-12 text-white" />,
    title: "Pharma & Biotech",
    description:
      "Enable drug discovery, companion diagnostics, and patient-genotype analysis.",
    images: [
      "https://images.pexels.com/photos/954585/pexels-photo-954585.jpeg",
      "https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg",
      "https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg"
    ],
    currentImageIndex: 0,
  },
  {
    icon: <Users weight="thin" className="h-12 w-12 text-white" />,
    title: "Diagnostic Labs",
    description:
      "Add PGx and wellness panels to your portfolio with white-labeled support.",
    images: [
      "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
      "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg",
      "https://images.pexels.com/photos/4226262/pexels-photo-4226262.jpeg"
    ],
    currentImageIndex: 0,
  },
  {
    icon: <Briefcase weight="thin" className="h-12 w-12 text-white" />,
    title: "Corporates & CSR Teams",
    description:
      "Drive health equity through DNA-based wellness and targeted screening.",
    images: [
      "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
      "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg"
    ],
    currentImageIndex: 0,
  },
  {
    icon: <Heart weight="thin" className="h-12 w-12 text-white" />,
    title: "Patients & Communities",
    description:
      "Understand risks, personalize prevention, and improve outcomes across life stages.",
    images: [
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
      "https://images.pexels.com/photos/7088530/pexels-photo-7088530.jpeg",
      "https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg"
    ],
    currentImageIndex: 0,
  },
];

export default function WhoWeServe() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [services, setServices] = useState(servicesData);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % services.length);
  }, [services.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + services.length) % services.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  const handleImageClick = () => {
    setServices(prevServices => {
      const newServices = [...prevServices];
      const service = newServices[active];
      service.currentImageIndex = (service.currentImageIndex + 1) % service.images.length;
      return newServices;
    });
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    // Create a timeline for the section animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: false,
        toggleActions: "play none none reset", // Play on enter, reset on leave
      },
    });

    // Animate the title
    const title = sectionRef.current.querySelector(".title-container");
    if (title) {
      tl.fromTo(
        title,
        {
          y: -50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        },
        0,
      );
    }

    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Auto-rotate through services
  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section
      id="who"
      ref={sectionRef}
      className="w-full  py-20"
      style={{
       
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-5xl mx-auto px-4 bg-black/20 rounded-3xl p-10">
        <div className="title-container lg:mb-16">
          <div className="flex flex-col lg:flex-row justify-between gap-2">
            <ScrollFloat
              containerClassName=""
              textClassName="lg:text-[5.15vw] text-[12vw] lg:leading-[1] text-white font-medium text-left "
            >
             WHO WE SERVE
            </ScrollFloat>
            <Link
              href={"/"}
              className="hover:scale-60 relative lg:-mr-[8vw] flex scale-50 items-center gap-3 rounded-full bg-white px-16 py-6 lg:text-[2vw] text-[6vw] duration-200 hover:bg-[#fe5d66] hover:text-white mt-[-10vw] lg:mt-0"
            >
              <span className="rounded-full border border-white bg-[#fe5d66] p-4 text-white hover:scale-110 hover:border-2 ">
                <Calculator weight="thin" className="h-10 w-10" />
              </span>
              Find your Solutions{" "}
            </Link>
          </div>
          <div className="my-10 w-[80vw] rotate-180 border-[.05vw] border-gray-200" />
           
        </div>
        <div className="flex gap-4 lg:hidden ">
                  <button
                    onClick={handlePrev}
                    className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#fe5d66] "
                  >
                    <CaretLeft
                      weight="thin"
                      className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:rotate-12"
                    />
                  </button>
                  <button
                    onClick={handleNext}
                    className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#fe5d66] "
                  >
                    <CaretRight
                      weight="thin"
                      className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:-rotate-12"
                    />
                  </button>
                </div>
        

        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8 lg:px-12">
          <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
            {/* Left side - Image */}
            <div>
              <div className="relative h-80 w-full">
                <AnimatePresence>
                  {servicesData.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        scale: 0.9,
                        z: -100,
                        rotate: Math.floor(Math.random() * 21) - 10,
                      }}
                      animate={{
                        opacity: isActive(index) ? 1 : 0.7,
                        scale: isActive(index) ? 1 : 0.95,
                        z: isActive(index) ? 0 : -100,
                        rotate: isActive(index)
                          ? 0
                          : Math.floor(Math.random() * 21) - 10,
                        zIndex: isActive(index)
                          ? 999
                          : servicesData.length + 2 - index,
                        y: isActive(index) ? [0, -80, 0] : 0,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.9,
                        z: 100,
                        rotate: Math.floor(Math.random() * 21) - 10,
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 origin-bottom"
                    >
                      <Image
                        src={service.images[service.currentImageIndex]}
                        alt="images"
                        width={500}
                        height={500}
                        draggable={false}
                        className="h-full w-full rounded-3xl object-cover object-center cursor-pointer"
                        onClick={handleImageClick}
                      />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="flex flex-col justify-between py-4">
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full text-[#fe5d66] p-3">
                    {servicesData[active].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {servicesData[active].title}
                  </h3>
                </div>
                <motion.p className="my-4 text-lg text-white">
                  {servicesData[active].description
                    .split(" ")
                    .map((word, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          filter: "blur(10px)",
                          opacity: 0,
                          y: 5,
                        }}
                        animate={{
                          filter: "blur(0px)",
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.2,
                          ease: "easeInOut",
                          delay: 0.02 * index,
                        }}
                        className="inline-block"
                      >
                        {word}&nbsp;
                      </motion.span>
                    ))}
                </motion.p>
              </motion.div>

              <div className="flex flex-col gap-4 pt-12 md:pt-0">
                <div className="flex flex-wrap gap-2">
                  {servicesData.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActive(index)}
                      className={cn(
                        "rounded-full px-4 py-2 text-sm transition-all duration-300",
                        isActive(index)
                          ? "bg-[#fe5d66] text-white "
                          : "bg-red-700 bg-opacity-20 text-white hover:bg-opacity-40"
                      )}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
                <div className="lg:flex gap-4 hidden ">
                  <button
                    onClick={handlePrev}
                    className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#fe5d66] "
                  >
                    <CaretLeft
                      weight="thin"
                      className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:rotate-12"
                    />
                  </button>
                  <button
                    onClick={handleNext}
                    className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-[#fe5d66] "
                  >
                    <CaretRight
                      weight="thin"
                      className="h-6 w-6 text-white transition-transform duration-300 group-hover/button:-rotate-12"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 flex justify-center gap-4">
          <button className="flex items-center gap-3 rounded-full border border-[#fe5d66] bg-transparent px-6 py-3 text-[1vw] text-[#fe5d66] transition-colors duration-300 hover:scale-110 hover:border-2 hover:border-white hover:bg-[#fe5d66] hover:text-white">
            Find Your Solution
          </button>
          <button className="flex items-center gap-3 rounded-full border border-white bg-transparent px-6 py-3 text-[1vw] text-white transition-colors duration-300 hover:scale-110 hover:border-2 hover:bg-white hover:text-black">
            Partner With Us
          </button>
          <button className="flex items-center gap-3 rounded-full border border-white bg-transparent px-6 py-3 text-[1vw] text-white transition-colors duration-300 hover:scale-110 hover:border-2 hover:bg-white hover:text-black">
            Refer a Patient
          </button>
        </div> */}
      </div>
    </section>
  );
}
