"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  HiOutlineWrench,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { FiLock, FiShield } from "react-icons/fi";
import { LuRocket } from "react-icons/lu";
import ScrollFloat from "../reactbits/ScrollFloat";
import { FloatingSectionNavAfterHero } from "../Hero/FloatingSectionNav";
import PrimaryButton from "../PrimaryButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Offering() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
  trigger: cardsRef.current,
  start: "top 95%", // start earlier (near bottom of screen)
  end: "bottom 60%", // finish sooner
  toggleActions: "play none none reset",
},
    });

    const cards = cardsRef.current.querySelectorAll(".card-animate");

    tl.fromTo(
      cards,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    cards.forEach((card, index) => {
      const icon = card.querySelector(".card-icon");
      const title = card.querySelector(".card-title");
      const description = card.querySelector(".card-description");

      const cardTl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      if (icon) {
        cardTl.fromTo(
          icon,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          0.2
        );
      }

      if (title) {
        cardTl.fromTo(
          title,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          0.3
        );
      }

      if (description) {
        cardTl.fromTo(
          description,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
          0.4
        );
      }

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.05,
          y: -10,
          boxShadow: "0 20px 30px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
        if (icon) {
          gsap.to(icon, {
            scale: 1.1,
            color: "#ef4444",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          y: 0,
          boxShadow: "none",
          duration: 0.3,
          ease: "power2.out",
        });
        if (icon) {
          gsap.to(icon, {
            scale: 1,
            color: "#374151", // Tailwind gray-700
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const speed = 0.05 + index * 0.02;
          const yOffset = (self.progress - 0.5) * 100 * speed;
          gsap.set(card, { y: yOffset });
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      cards.forEach((card) => {
        card.removeEventListener("mouseenter", () => {});
        card.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="offering"
      className="relative z-10 ml-0 bg-white pb-[16vh] pl-[18vw] pr-[4vw] pt-[8vh]"
    >
      <FloatingSectionNavAfterHero />
      <div className="mx-auto max-w-[90vw] px-[2vw]">
        <div className="flex flex-row items-center justify-between ">
          <ScrollFloat
            containerClassName="mb-6"
            textClassName=" text-[6vw] text-black font-medium "
          >
            Our Core Offerings
          </ScrollFloat>
          <div className="flex justify-center ">
            <PrimaryButton
              href="#"
              className="border border-black bg-red-500 text-red-500 hover:bg-red-500/10"
            >
              Explore Real-World Outcomes
            </PrimaryButton>
          </div>
        </div>
        <p className="mb-[2.5vw] text-[1.25vw]">
          From insight to impact—delivered with clinical precision.
        </p>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-[1vw] md:grid-cols-2"
        >
          <Card className="card-animate flex flex-col items-center justify-center p-[2vh] text-center">
            <HiOutlineWrench className="card-icon text-[6vh] text-gray-700" />
            <h2 className="card-title mt-[1vh] text-[3vh] font-bold">
              Precision Diagnostics
            </h2>
            <p className="card-description mt-[1vh] text-[2vh] font-medium">
              Decode complex, chronic, and lifestyle conditions with
              genome-guided clarity.
            </p>
          </Card>

          <Card className="card-animate flex flex-col items-center justify-center p-[2vh] text-center">
            <FiLock className="card-icon text-[6vh] text-gray-700" />
            <h2 className="card-title mt-[1vh] text-[3vh] font-bold">
              Pharmacogenomics
            </h2>
            <p className="card-description mt-[1vh] text-[2vh] font-medium">
              Tailor every prescription to the patient&apos;s DNA—eliminating
              waste and risk.
            </p>
          </Card>

          <Card className="card-animate flex flex-col items-center justify-center p-[2vh] text-center">
            <LuRocket className="card-icon text-[6vh] text-gray-700" />
            <h2 className="card-title mt-[1vh] text-[3vh] font-bold">
              Preventive Genomics
            </h2>
            <p className="card-description mt-[1vh] text-[2vh] font-medium">
              Experience blazing fast performance across the platform.
            </p>
          </Card>

          <Card className="card-animate flex flex-col items-center justify-center p-[2vh] text-center">
            <FiShield className="card-icon text-[6vh] text-gray-700" />
            <h2 className="card-title mt-[1vh] text-[3vh] font-bold">
              Clinical R&D & Registry Solutions
            </h2>
            <p className="card-description mt-[1vh] text-[2vh] font-medium">
              Turn data into decisions—build national registries, dashboards,
              and publishable insight.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
