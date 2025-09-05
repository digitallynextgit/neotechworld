"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  TestTube,
  Shield,
  ArrowRight,
  Dna,
  Pill,
  Activity,
  Users,
  Building2,
  Stethoscope,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "clinical-genomics",
    title: "Clinical Genomics",
    subtitle: "Precision Diagnosis. Better Patient Outcomes.",
    description:
      "Advanced genetic testing for oncology, cardiology, neurology, rare diseases, and more. Empowering healthcare providers with actionable genomic insights.",
    icon: <Dna className="h-12 w-12" />,
    features: [
      "Whole Genome Sequencing",
      "Whole Exome Sequencing",
      "Targeted Panels",
      "Clinical Interpretation",
    ],
    color: "from-blue-600 to-purple-600",
    href: "/services/clinical-genomics",
    stats: { tests: "10,000+", accuracy: "99.9%", turnaround: "7-14 days" },
  },
  {
    id: "pharmacogenomics",
    title: "Pharmacogenomics",
    subtitle: "Right Drug. Right Dose. Right Time.",
    description:
      "Personalizing prescriptions through your genetic profile. Reduce adverse reactions and improve treatment outcomes with precision medicine.",
    icon: <Pill className="h-12 w-12" />,
    features: [
      "Drug-Gene Interactions",
      "Dosage Optimization",
      "Adverse Reaction Prevention",
      "Therapy Personalization",
    ],
    color: "from-green-600 to-teal-600",
    href: "/services/pharmacogenomics",
    stats: { drugs: "200+", reactions: "85% Reduced", outcomes: "40% Better" },
  },
  {
    id: "preventive-genomics",
    title: "Preventive Genomics",
    subtitle: "Your DNA. Your Blueprint for a Healthier Life.",
    description:
      "Understand your risks. Personalize your wellness. Early risk assessment and lifestyle planning for optimal health outcomes.",
    icon: <Shield className="h-12 w-12" />,
    features: [
      "Risk Assessment",
      "Lifestyle Planning",
      "Nutrigenomics",
      "Fitness Genomics",
    ],
    color: "from-orange-600 to-red-600",
    href: "/services/preventive-genomics",
    stats: {
      risks: "50+ Conditions",
      prevention: "Early Detection",
      wellness: "Personalized",
    },
  },
];

const specialties = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Cardiology",
    count: "25+ Tests",
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Neurology",
    count: "30+ Tests",
  },
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Oncology",
    count: "40+ Tests",
  },
  {
    icon: <Stethoscope className="h-8 w-8" />,
    title: "Rare Diseases",
    count: "100+ Tests",
  },
];

const clientTypes = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Hospitals & Clinics",
    description: "Comprehensive diagnostic solutions",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Government",
    description: "Population-scale genomics programs",
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Corporates",
    description: "Employee wellness programs",
  },
  {
    icon: <TestTube className="h-8 w-8" />,
    title: "Research Labs",
    description: "Advanced research capabilities",
  },
];

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".hero-title",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" },
      );

      // Services cards animation
      gsap.fromTo(
        ".service-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden ">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/service.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/10" />
        <div className="relative z-10 mx-auto flex h-[100vh] max-w-7xl items-center justify-center px-4">
          <div className="mx-auto max-w-4xl rounded-full bg-black/20 p-16 text-center">
            <motion.h1
              className="hero-title mb-6 text-5xl font-bold text-white md:text-7xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our <span className="text-white">Services</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transforming healthcare through precision genomics. From clinical
              diagnostics to personalized wellness, we deliver cutting-edge
              genetic solutions that improve patient outcomes and advance
              medical science.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-[#fe5d66] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#fe5d66]/90 hover:shadow-lg"
              >
                Explore Services
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900"
              >
                Get Consultation
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating DNA Animation */}
        <div className="absolute right-10 top-20 opacity-20">
          <motion.div
            animate={{
              rotate: 360,
              y: [-20, 20, -20],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Dna className="h-32 w-32 text-[#fe5d66]" />
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" ref={servicesRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Our <span className="text-[#fe5d66]">Genomic Solutions</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Comprehensive genomic services designed to meet the diverse needs
              of healthcare providers, researchers, and individuals seeking
              personalized health insights.
            </p>
          </div>

          <div className="mb-20 grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="service-card group"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm transition-all duration-300 hover:border-[#fe5d66]/50">
                  <CardContent className="p-8">
                    <div
                      className={`inline-flex rounded-2xl bg-gradient-to-r p-4 ${service.color} mb-6`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>

                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="mb-4 font-semibold text-[#fe5d66]">
                      {service.subtitle}
                    </p>
                    <p className="mb-6 leading-relaxed text-gray-300">
                      {service.description}
                    </p>

                    <div className="mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-400"
                        >
                          <div className="h-1.5 w-1.5 rounded-full bg-[#fe5d66]" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Link
                      href={service.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fe5d66] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#fe5d66]/90 group-hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Specialties Section - Diagonal Staggered Layout */}
          <div className="relative mb-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#fe5d66] blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-600 blur-3xl"></div>
            </div>

            {/* Header with Side Alignment */}
            <div className="mb-20 flex flex-col items-start justify-between lg:flex-row">
              <motion.div
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="mb-6 text-5xl font-bold leading-tight text-white lg:text-6xl">
                  Our <span className="text-[#fe5d66]">Specialties</span>
                </h3>
                <div className="mb-6 h-2 w-32 rounded-full bg-gradient-to-r from-[#fe5d66] to-orange-400"></div>
              </motion.div>

              <motion.div
                className="lg:w-1/2 "
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p className="text-xl leading-relaxed text-gray-300">
                  Comprehensive coverage across medical disciplines with
                  cutting-edge genomic solutions that transform patient care and
                  clinical outcomes.
                </p>
              </motion.div>
            </div>

            {/* 2x2 Grid Layout for Cards */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-slate-600/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 transition-all duration-500 hover:scale-105 hover:border-[#fe5d66]/50">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-[#fe5d66] to-orange-400 p-4 text-white">
                      {specialties[0].icon}
                    </div>
                    <div>
                      <h4 className="mb-3 text-2xl font-bold text-white">
                        {specialties[0].title}
                      </h4>
                      <p className="font-medium text-gray-400">
                        {specialties[0].count}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-slate-600/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 transition-all duration-500 hover:scale-105 hover:border-[#fe5d66]/50">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-4 text-white">
                      {specialties[1].icon}
                    </div>
                    <div>
                      <h4 className="mb-3 text-2xl font-bold text-white">
                        {specialties[1].title}
                      </h4>
                      <p className="font-medium text-gray-400">
                        {specialties[1].count}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-slate-600/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 transition-all duration-500 hover:scale-105 hover:border-[#fe5d66]/50">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-400 p-4 text-white">
                      {specialties[2].icon}
                    </div>
                    <div>
                      <h4 className="mb-3 text-2xl font-bold text-white">
                        {specialties[2].title}
                      </h4>
                      <p className="font-medium text-gray-400">
                        {specialties[2].count}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="group relative overflow-hidden rounded-3xl border border-slate-600/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 transition-all duration-500 hover:scale-105 hover:border-[#fe5d66]/50">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 rounded-2xl bg-gradient-to-br from-green-500 to-teal-400 p-4 text-white">
                      {specialties[3].icon}
                    </div>
                    <div>
                      <h4 className="mb-3 text-2xl font-bold text-white">
                        {specialties[3].title}
                      </h4>
                      <p className="font-medium text-gray-400">
                        {specialties[3].count}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Client Types - Hexagonal/Honeycomb Layout */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
                Who We <span className="text-[#fe5d66]">Serve</span>
              </h3>
              <p className="mx-auto mb-12 max-w-2xl text-xl text-gray-300">
                Tailored genomic solutions for diverse healthcare stakeholders
                across the medical ecosystem
              </p>
            </motion.div>

            {/* Honeycomb-inspired Layout */}
            <div className="relative mx-auto max-w-5xl">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {clientTypes.map((client, index) => (
                  <motion.div
                    key={index}
                    className="group relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    {/* Hexagonal Card */}
                    <div className="relative">
                      <div className="rounded-3xl border border-slate-600/50 bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 text-center backdrop-blur-sm transition-all duration-500 hover:border-[#fe5d66]/50 group-hover:shadow-2xl group-hover:shadow-[#fe5d66]/20">
                        {/* Icon Container */}
                        <div className="relative mb-6">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#fe5d66] to-orange-400 transition-transform duration-300 group-hover:scale-110">
                            <div className="text-2xl text-white">
                              {client.icon}
                            </div>
                          </div>
                          {/* Floating Particles */}
                          <div className="absolute -right-2 -top-2 h-3 w-3 rounded-full bg-[#fe5d66] opacity-60 group-hover:animate-pulse"></div>
                          <div className="absolute -bottom-1 -left-1 h-2 w-2 rounded-full bg-blue-400 opacity-40 group-hover:animate-bounce"></div>
                        </div>

                        <h4 className="mb-3 text-lg font-bold text-white transition-colors group-hover:text-[#fe5d66]">
                          {client.title}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-400">
                          {client.description}
                        </p>

                        {/* Connection Lines */}
                        {index < clientTypes.length - 1 && (
                          <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-gradient-to-r from-[#fe5d66]/50 to-transparent lg:block"></div>
                        )}
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-[#fe5d66]/5 to-blue-600/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute left-1/4 top-1/4 -z-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#fe5d66]/10 to-transparent blur-3xl"></div>
              <div className="absolute bottom-1/4 right-1/4 -z-10 h-40 w-40 rounded-full bg-gradient-to-br from-blue-600/10 to-transparent blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#fe5d66]/10 to-purple-600/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Transform Healthcare with Genomics?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Partner with us to unlock the power of precision medicine and
            improve patient outcomes through advanced genomic solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#fe5d66] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#fe5d66]/90 hover:shadow-lg"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
