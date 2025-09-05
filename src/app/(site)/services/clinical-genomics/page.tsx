"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Dna,
  Heart,
  Brain,
  Activity,
  Microscope,
  FileText,
  Clock,
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  Building2,
  Stethoscope,
  Pill,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: <Dna className="h-8 w-8" />,
    title: "Whole Genome Sequencing",
    description:
      "Complete analysis of an individual's entire DNA sequence, providing comprehensive genomic insights for complex conditions.",
    features: [
      "30x coverage depth",
      "99.9% accuracy",
      "Structural variants detection",
      "CNV analysis",
    ],
  },
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Whole Exome Sequencing",
    description:
      "Focused sequencing of protein-coding regions, ideal for identifying disease-causing variants in known genes.",
    features: [
      "20,000+ genes covered",
      "Cost-effective solution",
      "Rapid turnaround",
      "High sensitivity",
    ],
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: "Targeted Panels",
    description:
      "Customized gene panels designed for specific medical conditions, offering focused and efficient genetic testing.",
    features: [
      "Disease-specific panels",
      "Custom panel design",
      "High throughput",
      "Actionable results",
    ],
  },
  {
    icon: <FileText className="h-8 w-8" />,
    title: "Clinical Interpretation & Reporting",
    description:
      "Expert analysis and comprehensive reporting by certified genetic counselors and clinical geneticists.",
    features: [
      "ACMG guidelines",
      "Variant classification",
      "Clinical correlation",
      "Actionable recommendations",
    ],
  },
];

const specialties = [
  {
    icon: <Heart className="h-12 w-12" />,
    title: "Cardiology Panels",
    description:
      "Comprehensive genetic testing for inherited cardiovascular conditions including cardiomyopathies, arrhythmias, and aortopathies.",
    tests: [
      "Hypertrophic Cardiomyopathy",
      "Dilated Cardiomyopathy",
      "Arrhythmogenic Right Ventricular Cardiomyopathy",
      "Long QT Syndrome",
      "Brugada Syndrome",
    ],
    color: "from-red-500 to-pink-500",
    stats: { genes: "200+", conditions: "25+", accuracy: "99.9%" },
  },
  {
    icon: <Brain className="h-12 w-12" />,
    title: "Neurology Panels",
    description:
      "Advanced genetic testing for neurological disorders including epilepsy, neurodevelopmental disorders, and neurodegenerative diseases.",
    tests: [
      "Epilepsy Panels",
      "Intellectual Disability",
      "Autism Spectrum Disorders",
      "Alzheimer's Disease",
      "Parkinson's Disease",
    ],
    color: "from-blue-500 to-cyan-500",
    stats: { genes: "300+", conditions: "30+", accuracy: "99.8%" },
  },
  {
    icon: <Activity className="h-12 w-12" />,
    title: "Oncology Panels",
    description:
      "Comprehensive cancer genetic testing for hereditary cancer syndromes and tumor profiling for personalized treatment.",
    tests: [
      "Hereditary Breast & Ovarian Cancer",
      "Lynch Syndrome",
      "Li-Fraumeni Syndrome",
      "Tumor Profiling",
      "Liquid Biopsy",
    ],
    color: "from-purple-500 to-indigo-500",
    stats: { genes: "150+", conditions: "40+", accuracy: "99.9%" },
  },
  {
    icon: <Stethoscope className="h-12 w-12" />,
    title: "Rare Disease Diagnosis",
    description:
      "Comprehensive genetic testing for rare and undiagnosed conditions using advanced sequencing technologies.",
    tests: [
      "Whole Exome Sequencing",
      "Whole Genome Sequencing",
      "Mitochondrial Disorders",
      "Metabolic Disorders",
      "Skeletal Dysplasias",
    ],
    color: "from-green-500 to-teal-500",
    stats: { genes: "22,000+", conditions: "100+", accuracy: "99.7%" },
  },
];

const processSteps = [
  {
    step: "01",
    title: "Sample Collection",
    description:
      "Simple blood draw or saliva collection with our provided kits",
    icon: <Users className="h-6 w-6" />,
  },
  {
    step: "02",
    title: "DNA Extraction & QC",
    description:
      "High-quality DNA extraction with rigorous quality control measures",
    icon: <Microscope className="h-6 w-6" />,
  },
  {
    step: "03",
    title: "Sequencing & Analysis",
    description:
      "Next-generation sequencing with advanced bioinformatics analysis",
    icon: <Dna className="h-6 w-6" />,
  },
  {
    step: "04",
    title: "Clinical Interpretation",
    description:
      "Expert review by certified geneticists and genetic counselors",
    icon: <FileText className="h-6 w-6" />,
  },
  {
    step: "05",
    title: "Report Delivery",
    description:
      "Comprehensive clinical report with actionable recommendations",
    icon: <CheckCircle className="h-6 w-6" />,
  },
];

export default function ClinicalGenomicsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);
  const specialtiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(
        ".hero-content",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      );

      // Capabilities animation
      gsap.fromTo(
        ".capability-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: capabilitiesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );

      // Specialties animation
      gsap.fromTo(
        ".specialty-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: specialtiesRef.current,
            start: "top 80%",
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
            <source src="/clinical-genomics.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/10" />
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 pt-28 lg:py-0">
          <div className="hero-content mx-auto max-w-4xl rounded-full bg-black/20 p-10 text-center">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#fe5d66]/30 bg-[#fe5d66]/10 px-6 py-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Dna className="h-5 w-5 text-[#fe5d66]" />
              <span className="font-semibold text-[#fe5d66]">
                Clinical Genomics
              </span>
            </motion.div>

            <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl">
              Precision Diagnosis.
              <br />
              <span className="text-[#fe5d66] ">Better Patient Outcomes.</span>
            </h1>

            <p className="mb-8 text-xl leading-relaxed text-gray-300 md:text-2xl">
              Advanced genetic testing for oncology, cardiology, neurology, rare
              diseases, and more. Empowering healthcare providers with
              actionable genomic insights for precision medicine.
            </p>

            <div className="mb-12 flex flex-wrap justify-center gap-4">
              <Link
                href="#capabilities"
                className="inline-flex items-center gap-2 rounded-full bg-[#fe5d66] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#fe5d66]/90 hover:shadow-lg"
              >
                View Test Menu
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Clinical Genomics */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-4xl font-bold text-white">
              What is <span className="text-[#fe5d66]">Clinical Genomics?</span>
            </h2>
            <p className="mb-8 text-xl leading-relaxed text-gray-300">
              Clinical genomics is the application of genomic information and
              technologies in clinical care. It involves analyzing a patient's
              DNA to identify genetic variants that may cause disease, influence
              treatment response, or affect disease risk. This field enables
              healthcare providers to make more informed decisions about
              diagnosis, treatment, and prevention strategies.
            </p>
            {/* <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-slate-800/50 p-6">
                <Shield className="mx-auto mb-4 h-8 w-8 text-[#fe5d66]" />
                <h3 className="mb-2 font-semibold text-white">
                  Accurate Diagnosis
                </h3>
                <p className="text-sm text-gray-400">
                  Identify genetic causes of diseases with high precision
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-6">
                <Clock className="mx-auto mb-4 h-8 w-8 text-[#fe5d66]" />
                <h3 className="mb-2 font-semibold text-white">
                  Early Detection
                </h3>
                <p className="text-sm text-gray-400">
                  Detect conditions before symptoms appear
                </p>
              </div>
              <div className="rounded-xl bg-slate-800/50 p-6">
                <Pill className="mx-auto mb-4 h-8 w-8 text-[#fe5d66]" />
                <h3 className="mb-2 font-semibold text-white">
                  Personalized Treatment
                </h3>
                <p className="text-sm text-gray-400">
                  Tailor treatments based on genetic profile
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

<section
  id="capabilities"
  ref={capabilitiesRef}
  className="relative py-20 min-h-screen"
>


  {/* Dark overlay for readability */}
  {/* <div className="absolute inset-0 bg-black/50 -z-10"></div> */}

  {/* Content */}
  <div className="container relative z-10 mx-auto px-4">
    <div className="mb-16 text-center">
      <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
        Our <span className="text-[#fe5d66]">Capabilities</span>
      </h2>
      <p className="mx-auto max-w-3xl text-xl text-gray-300">
        Comprehensive genomic testing solutions powered by cutting-edge
        technology and expert analysis.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-2">
      {capabilities.map((capability, index) => (
        <motion.div
          key={index}
          className="capability-card"
          whileHover={{ scale: 1.02, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="h-full border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 transition-all duration-300 hover:border-[#fe5d66]/50">
            <CardContent className="p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="rounded-xl bg-[#fe5d66]/10 p-3 text-[#fe5d66]">
                  {capability.icon}
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {capability.title}
                </h3>
              </div>
              <p className="mb-6 leading-relaxed text-gray-300">
                {capability.description}
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Key Specialties */}
      <section ref={specialtiesRef} className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Key <span className="text-[#fe5d66]">Specialties</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Specialized genetic testing panels designed for specific medical
              conditions and patient populations.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="specialty-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 transition-all duration-300 hover:border-[#fe5d66]/50">
                  <CardContent className="p-8">
                    <div className="mb-6 flex items-center gap-4">
                      <div className={` rounded-2xl text-white`}>
                        {specialty.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {specialty.title}
                        </h3>
                        <div className="mt-2 grid grid-cols-3 gap-4">
                          {Object.entries(specialty.stats).map(
                            ([key, value]) => (
                              <div key={key} className="text-center">
                                <div className="text-sm font-bold text-[#fe5d66]">
                                  {value}
                                </div>
                                <div className="text-xs capitalize text-gray-400">
                                  {key}
                                </div>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="mb-6 leading-relaxed text-gray-300">
                      {specialty.description}
                    </p>

                    {/* <div className="space-y-2">
                      <h4 className="mb-3 font-semibold text-white">
                        Available Tests:
                      </h4>
                      {specialty.tests.map((test, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#fe5d66]" />
                          <span className="text-sm text-gray-300">{test}</span>
                        </div>
                      ))}
                    </div> */}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-linking Section */}
      <section className="bg-slate-800/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Explore Our Other <span className="text-[#fe5d66]">Services</span>
            </h2>
            <p className="text-gray-300">
              Comprehensive genomic solutions for all your healthcare needs
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
            <Link href="/services/pharmacogenomics" className="group">
              <Card className="h-full border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 transition-all duration-300 hover:border-[#fe5d66]/50 group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Pill className="h-8 w-8 text-[#fe5d66]" />
                    <h3 className="text-xl font-bold text-white">
                      Pharmacogenomics
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-300">
                    Also see Pharmacogenomics for safer prescribing and
                    personalized drug therapy.
                  </p>
                  <div className="flex items-center gap-2 font-semibold text-[#fe5d66]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/preventive-genomics" className="group">
              <Card className="h-full border-slate-700 bg-gradient-to-br from-slate-800/50 to-slate-900/50 transition-all duration-300 hover:border-[#fe5d66]/50 group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <Shield className="h-8 w-8 text-[#fe5d66]" />
                    <h3 className="text-xl font-bold text-white">
                      Preventive Genomics
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-300">
                    Discover Preventive Genomics for early risk assessment and
                    personalized wellness planning.
                  </p>
                  <div className="flex items-center gap-2 font-semibold text-[#fe5d66]">
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-4xl font-bold text-white">
            Ready to Get Started with Clinical Genomics?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Request a test or book a consultation with our genetic experts to
            learn how clinical genomics can improve patient care.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#fe5d66] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#fe5d66]/90 hover:shadow-lg"
            >
              Request Test
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-white hover:text-slate-900"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
