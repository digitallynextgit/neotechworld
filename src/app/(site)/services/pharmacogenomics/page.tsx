"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Pill, 
  Heart, 
  Brain, 
  Activity, 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Users,
  Microscope,
  Clock,
  Target,
  Dna,
  Stethoscope
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const whyItMatters = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Reduce Adverse Drug Reactions",
    description: "Prevent harmful side effects by identifying genetic variants that affect drug metabolism and response.",
    stat: "85% Reduction",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Avoid Trial-and-Error Prescribing",
    description: "Get the right medication and dosage from the start, reducing time to effective treatment.",
    stat: "60% Faster",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Improve Treatment Outcomes",
    description: "Optimize therapeutic efficacy by personalizing drug selection based on genetic profile.",
    stat: "40% Better",
    color: "from-blue-500 to-purple-500"
  }
];

const focusAreas = [
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Cardiology Drugs",
    description: "Optimize cardiovascular medications for better patient outcomes and reduced side effects.",
    drugs: [
      { name: "Clopidogrel", gene: "CYP2C19", impact: "Antiplatelet efficacy" },
      { name: "Warfarin", gene: "CYP2C9, VKORC1", impact: "Bleeding risk & dosing" },
      { name: "Statins", gene: "SLCO1B1", impact: "Myopathy risk" },
      { name: "Beta-blockers", gene: "CYP2D6", impact: "Metabolism rate" }
    ],
    color: "from-red-500 to-pink-500"
  },
  {
    icon: <Activity className="h-10 w-10" />,
    title: "Diabetes Drugs",
    description: "Personalize diabetes treatment to improve glycemic control and minimize adverse effects.",
    drugs: [
      { name: "Metformin", gene: "SLC22A1, SLC47A1", impact: "Efficacy & GI tolerance" },
      { name: "Sulfonylureas", gene: "CYP2C9", impact: "Hypoglycemia risk" },
      { name: "Thiazolidinediones", gene: "PPARG", impact: "Response variability" },
      { name: "SGLT2 Inhibitors", gene: "SLC5A2", impact: "Efficacy variation" }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Psychiatry & Neurology",
    description: "Optimize psychiatric and neurological medications for improved efficacy and tolerability.",
    drugs: [
      { name: "Risperidone", gene: "CYP2D6", impact: "Side effects & efficacy" },
      { name: "Valproate", gene: "UGT1A6, UGT2B7", impact: "Metabolism & toxicity" },
      { name: "Antidepressants", gene: "CYP2D6, CYP2C19", impact: "Response & side effects" },
      { name: "Antiepileptics", gene: "HLA-B*5701", impact: "Severe skin reactions" }
    ],
    color: "from-purple-500 to-indigo-500"
  },
  {
    icon: <Pill className="h-10 w-10" />,
    title: "Other Specialties",
    description: "Comprehensive pharmacogenomic testing across multiple therapeutic areas.",
    drugs: [
      { name: "Oncology Drugs", gene: "DPYD, UGT1A1", impact: "Toxicity prevention" },
      { name: "Pain Medications", gene: "CYP2D6, OPRM1", impact: "Efficacy & addiction risk" },
      { name: "Immunosuppressants", gene: "TPMT, NUDT15", impact: "Toxicity & efficacy" },
      { name: "Antibiotics", gene: "NAT2, G6PD", impact: "Adverse reactions" }
    ],
    color: "from-blue-500 to-purple-500"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Sample Collection",
    description: "Simple blood draw or buccal swab collection",
    icon: <Users className="h-6 w-6" />
  },
  {
    step: "02",
    title: "DNA Analysis",
    description: "Comprehensive genotyping of pharmacogenomic variants",
    icon: <Microscope className="h-6 w-6" />
  },
  {
    step: "03",
    title: "Personalized Report",
    description: "Clinical interpretation with drug-specific recommendations",
    icon: <FileText className="h-6 w-6" />
  },
  {
    step: "04",
    title: "Therapy Optimization",
    description: "Implementation of personalized prescribing guidelines",
    icon: <Target className="h-6 w-6" />
  }
];

export default function PharmacogenomicsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const whyItMattersRef = useRef<HTMLDivElement>(null);
  const focusAreasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(".hero-content", 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Why it matters animation
      gsap.fromTo(".matter-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: whyItMattersRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Focus areas animation
      gsap.fromTo(".focus-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: focusAreasRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
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
            <source src="/pharmacogenomics.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/10" />
        <div className="relative z-10 mx-auto flex h-[100vh] max-w-7xl items-center justify-center px-4">
          <div className="mx-auto max-w-4xl rounded-full bg-black/20 p-10 text-center">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#fe5d66]/10 border border-[#fe5d66]/30 rounded-full px-6 py-2 mb-6 mt-32 lg:mt-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Pill className="h-5 w-5 text-[#fe5d66]" />
              <span className="text-[#fe5d66] font-semibold">Pharmacogenomics</span>
            </motion.div>
            
            <h1 className="text-3xl md:text-7xl font-bold text-white mb-6">
              Right Drug. Right Dose.
              <br />
              <span className="bg-gradient-to-r from-[#fe5d66] to-orange-400 bg-clip-text text-transparent">
                Right Time.
              </span>
            </h1>
            
            <p className="text-base md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Personalizing prescriptions through your genetic profile. Reduce adverse reactions, 
              avoid trial-and-error prescribing, and improve treatment outcomes with precision medicine.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="#why-it-matters"
                className="inline-flex items-center gap-2 bg-[#fe5d66] hover:bg-[#fe5d66]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Explore PGx Tests
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Started
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* What is Pharmacogenomics */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              What is <span className="text-[#fe5d66]">Pharmacogenomics?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Pharmacogenomics (PGx) is the study of how your genes affect your response to medications. 
              By analyzing specific genetic variants, we can predict how you'll metabolize certain drugs, 
              helping healthcare providers choose the most effective medications and dosages while minimizing 
              adverse reactions. This personalized approach to prescribing is revolutionizing medicine.
            </p>

          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section id="why-it-matters" ref={whyItMattersRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why It <span className="text-[#fe5d66]">Matters</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pharmacogenomics transforms healthcare by making drug therapy safer, more effective, and more personalized.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyItMatters.map((matter, index) => (
              <motion.div
                key={index}
                className="matter-card"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`inline-flex p-4 rounded-2xl bg-[#fe5d66] mb-6`}>
                      <div className="text-white">
                        {matter.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{matter.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{matter.description}</p>
                    
                 
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section ref={focusAreasRef} className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Key Focus <span className="text-[#fe5d66]">Areas</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive pharmacogenomic testing across major therapeutic areas for optimal drug therapy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                className="focus-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4  rounded-2xl text-white`}>
                        {area.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{area.title}</h3>
                        <p className="text-gray-400">{area.drugs.length} Key Medications</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">{area.description}</p>
                    

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Example */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-white mb-6">
                Real-World <span className="text-[#fe5d66]">Case Example</span>
              </h2>
              <p className="text-xl text-gray-300">
                How pharmacogenomics prevents adverse events and saves lives
              </p>
            </div>

            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Clopidogrel & CYP2C19</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="text-[#fe5d66] font-semibold mb-2">The Problem</h4>
                        <p className="text-gray-300 text-sm">
                          Patient with recent heart attack prescribed Clopidogrel (Plavix) for blood clot prevention.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="text-[#fe5d66] font-semibold mb-2">Genetic Finding</h4>
                        <p className="text-gray-300 text-sm">
                          CYP2C19 poor metabolizer - cannot effectively convert Clopidogrel to its active form.
                        </p>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="text-[#fe5d66] font-semibold mb-2">Solution</h4>
                        <p className="text-gray-300 text-sm">
                          Switch to alternative antiplatelet therapy (Prasugrel or Ticagrelor) that doesn't depend on CYP2C19.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 mx-auto flex items-center justify-center mb-6 relative">
                        {/* Animated Heart */}
                        <div className="relative">
                          <Heart 
                            className="h-20 w-20 text-[#fe5d66] animate-pulse" 
                            fill="currentColor"
                          />
                          {/* Heartbeat Animation Rings */}
                          <div className="absolute inset-0 rounded-full border-2 border-[#fe5d66]/30 animate-ping"></div>
                          <div className="absolute inset-2 rounded-full border border-[#fe5d66]/20 animate-pulse"></div>
                          {/* Floating Particles */}
                          <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#fe5d66] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
                          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                          <div className="absolute top-1 -right-3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
                        </div>
                      </div>
                      <h4 className="text-white font-bold text-xl mb-2">Outcome</h4>
                      <p className="text-[#fe5d66] font-semibold mb-2">Heart Attack Prevented</p>
                      <p className="text-gray-400 text-sm">
                        Effective antiplatelet therapy based on genetic profile prevents recurrent cardiovascular events.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Cross-linking Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-white mb-4">
              Explore Our Other <span className="text-[#fe5d66]">Services</span>
            </h2>
            <p className="text-gray-300">Comprehensive genomic solutions for all your healthcare needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/services/clinical-genomics" className="group">
              <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Dna className="h-8 w-8 text-[#fe5d66]" />
                    <h3 className="text-xl font-bold text-white">Clinical Genomics</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Discover Clinical Genomics for comprehensive genetic testing and precision diagnosis.</p>
                  <div className="flex items-center gap-2 text-[#fe5d66] font-semibold">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/preventive-genomics" className="group">
              <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Shield className="h-8 w-8 text-[#fe5d66]" />
                    <h3 className="text-xl font-bold text-white">Preventive Genomics</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Pair with Preventive Genomics for long-term health planning and wellness optimization.</p>
                  <div className="flex items-center gap-2 text-[#fe5d66] font-semibold">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#fe5d66]/10 to-blue-600/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Personalize Your Prescriptions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Start your pharmacogenomic journey today and experience safer, more effective medication therapy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#fe5d66] hover:bg-[#fe5d66]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Started Today
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Consult Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}