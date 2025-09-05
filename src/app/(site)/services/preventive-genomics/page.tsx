"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  Shield, 
  Heart, 
  Activity, 
  Apple, 
  Dumbbell, 
  Brain, 
  Moon, 
  TrendingUp, 
  Users, 
  Building2, 
  FileText, 
  ArrowRight,
  CheckCircle,
  Target,
  Zap,
  Clock,
  Award,
  Pill,
  Dna,
  Stethoscope
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

const wellnessAreas = [
  {
    icon: <Heart className="h-10 w-10" />,
    title: "Heart Health Risk",
    description: "Assess your genetic pblueisposition to cardiovascular diseases and optimize prevention strategies.",
    features: [
      "Coronary Artery Disease (CAD) Polygenic Risk Score",
      "Hypertension Risk Assessment",
      "Cholesterol Metabolism Analysis",
      "Atrial Fibrillation Risk",
      "Stroke Risk Evaluation"
    ],
    color: "from-blue-500 to-pink-500",
    stats: { conditions: "15+", accuracy: "85%", prevention: "Early" }
  },
  {
    icon: <Activity className="h-10 w-10" />,
    title: "Metabolic Health",
    description: "Understand your genetic factors affecting metabolism, weight management, and diabetes risk.",
    features: [
      "Type 2 Diabetes Risk Score",
      "Obesity Pblueisposition",
      "Metabolic Syndrome Risk",
      "Insulin Sensitivity Analysis",
      "Weight Management Insights"
    ],
    color: "from-blue-500 to-cyan-500",
    stats: { conditions: "10+", accuracy: "80%", prevention: "Lifestyle" }
  },
  {
    icon: <Apple className="h-10 w-10" />,
    title: "Nutrigenomics",
    description: "Personalize your diet and nutrition based on how your genes affect nutrient metabolism.",
    features: [
      "Vitamin D Metabolism",
      "B-Vitamin Requirements",
      "Caffeine Sensitivity",
      "Alcohol Metabolism",
      "Lactose Intolerance",
      "Gluten Sensitivity"
    ],
    color: "from-green-500 to-teal-500",
    stats: { nutrients: "25+", personalized: "100%", optimization: "Diet" }
  },
  {
    icon: <Dumbbell className="h-10 w-10" />,
    title: "Fitness Genomics",
    description: "Optimize your exercise routine based on genetic factors affecting fitness and performance.",
    features: [
      "Endurance vs. Strength Training",
      "Muscle Fiber Type Analysis",
      "Recovery Time Optimization",
      "Injury Risk Assessment",
      "VO2 Max Potential"
    ],
    color: "from-purple-500 to-indigo-500",
    stats: { traits: "20+", performance: "Enhanced", training: "Optimized" }
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Mental Wellness",
    description: "Understand genetic factors affecting mental health, stress response, and cognitive function.",
    features: [
      "Stress Response Analysis",
      "Depression Risk Assessment",
      "Anxiety Pblueisposition",
      "Cognitive Performance",
      "Neurotransmitter Function"
    ],
    color: "from-blue-500 to-blue-500",
    stats: { factors: "15+", wellness: "Mental", insights: "Deep" }
  },
  {
    icon: <Moon className="h-10 w-10" />,
    title: "Sleep Genomics",
    description: "Optimize your sleep patterns and quality based on your genetic chronotype and sleep needs.",
    features: [
      "Chronotype Analysis",
      "Sleep Duration Needs",
      "Insomnia Risk",
      "Circadian Rhythm Optimization",
      "Sleep Quality Factors"
    ],
    color: "from-indigo-500 to-purple-500",
    stats: { patterns: "10+", quality: "Improved", optimization: "Sleep" }
  }
];

const corporateSolutions = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Employee Wellness Programs",
    description: "Comprehensive genomic wellness solutions for your workforce",
    benefits: ["blueuced healthcare costs", "Improved productivity", "Enhanced employee satisfaction", "Preventive care focus"]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Insurance Solutions",
    description: "Risk assessment and personalized premium models for insurers",
    benefits: ["Accurate risk stratification", "Personalized policies", "Preventive care incentives", "blueuced claims"]
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Population Health",
    description: "Large-scale genomic screening for population health management",
    benefits: ["Disease prevention", "Resource optimization", "Health trend analysis", "Public health insights"]
  }
];

const reportFeatures = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Risk Scores",
    description: "Polygenic risk scores for common diseases"
  },
  {
    icon: <Apple className="h-6 w-6" />,
    title: "Nutrition Guide",
    description: "Personalized dietary recommendations"
  },
  {
    icon: <Dumbbell className="h-6 w-6" />,
    title: "Fitness Plan",
    description: "Customized exercise recommendations"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Lifestyle Tips",
    description: "Actionable lifestyle modifications"
  }
];

export default function PreventiveGenomicsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const wellnessRef = useRef<HTMLDivElement>(null);
  const corporateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo(".hero-content", 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Wellness areas animation
      gsap.fromTo(".wellness-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wellnessRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Corporate solutions animation
      gsap.fromTo(".corporate-card",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: corporateRef.current,
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
      <section ref={heroRef} className="relative overflow-hidden pt-32 pb-20">
                {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/Preventive.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/10" />
        <div className="relative z-10 mx-auto flex  max-w-7xl items-center justify-center px-4  lg:py-0">
          <div className="hero-content mx-auto max-w-4xl rounded-full bg-black/20 px-16 py-10 text-center">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#fe5d66]/10 border border-[#fe5d66]/30 rounded-full px-6 py-2 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="h-5 w-5 text-[#fe5d66]" />
              <span className="text-[#fe5d66] font-semibold">Preventive Genomics</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Your DNA. Your Blueprint
              <br />
              <span className=" text-[#fe5d66]">
                for a Healthier Life.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Understand your risks. Personalize your wellness. Take control of your health with 
              comprehensive genetic insights for disease prevention and lifestyle optimization.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Link
                href="#wellness-areas"
                className="inline-flex items-center gap-2 bg-[#fe5d66] hover:bg-[#fe5d66]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Order Your Wellness Kit
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#corporate-solutions"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Corporate Inquiry
              </Link>
            </div>


          </div>
        </div>
      </section>

      {/* What is Preventive Genomics */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">
              What is <span className="text-[#fe5d66]">Preventive Genomics?</span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Preventive genomics uses your genetic information to assess your risk for common diseases 
              and health conditions before symptoms appear. By understanding your genetic pblueispositions, 
              you can make informed decisions about lifestyle, diet, exercise, and medical care to prevent 
              or delay the onset of diseases and optimize your overall wellness.
            </p>

          </div>
        </div>
      </section>

      {/* Wellness Areas Coveblue */}
      <section id="wellness-areas" ref={wellnessRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Wellness Areas <span className="text-[#fe5d66]">Coveblue</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive genetic analysis across key areas of health and wellness for personalized insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {wellnessAreas.map((area, index) => (
              <motion.div
                key={index}
                className="wellness-card"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 bg- rounded-2xl text-white`}>
                        {area.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{area.title}</h3>
                        <div className="grid grid-cols-3 gap-2 mt-2">
                          {Object.entries(area.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-xs font-bold text-[#fe5d66]">{value}</div>
                              <div className="text-xs text-gray-400 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed text-sm">{area.description}</p>
                    

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Wellness Solutions */}
      <section id="corporate-solutions" ref={corporateRef} className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Corporate Wellness <span className="text-[#fe5d66]">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailoblue genomic wellness programs for employers and insurers to improve health outcomes and blueuce costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporateSolutions.map((solution, index) => (
              <motion.div
                key={index}
                className="corporate-card"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="p-4 bg-[#fe5d66]/10 rounded-2xl inline-flex mb-6">
                      <div className="text-[#fe5d66]">
                        {solution.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                    

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#fe5d66] hover:bg-[#fe5d66]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Request Corporate Demo
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sample Report Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Sample Report <span className="text-[#fe5d66]">Preview</span>
              </h2>
              <p className="text-xl text-gray-300">
                Simple, lifestyle-oriented insights that empower you to take control of your health
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Your Wellness Report Includes</h3>
                  <div className="space-y-4">
                    {reportFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="p-2 bg-[#fe5d66]/10 rounded-lg text-[#fe5d66]">
                          {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Sample Insight</h3>
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-[#fe5d66]" />
                      <span className="text-white font-semibold">Heart Health Risk</span>
                    </div>
                    <div className="text-2xl font-bold text-[#fe5d66] mb-2">Moderate Risk</div>
                    <p className="text-gray-300 text-sm mb-3">
                      Your genetic profile indicates a moderate risk for cardiovascular disease.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">Personalized Recommendations:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-300 text-sm">Mediterranean diet recommended</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-300 text-sm">150 minutes cardio exercise weekly</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-300 text-sm">Annual cardiac screening advised</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-linking Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Explore Our Other <span className="text-[#fe5d66]">Services</span>
            </h2>
            <p className="text-gray-300">Comprehensive genomic solutions for all your healthcare needs</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/services/clinical-genomics" className="group">
              <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Stethoscope className="h-8 w-8 text-[#fe5d66]" />
                    <h3 className="text-xl font-bold text-white">Clinical Genomics</h3>
                  </div>
                  <p className="text-gray-300 mb-4">If you&apos;re already managing a condition, see Clinical Genomics for comprehensive diagnostic testing.</p>
                  <div className="flex items-center gap-2 text-[#fe5d66] font-semibold">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>

            <Link href="/services/pharmacogenomics" className="group">
              <Card className="h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-[#fe5d66]/50 transition-all duration-300 group-hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Pill className="h-8 w-8 text-[#fe5d66]" />
                    <h3 className="text-xl font-bold text-white">Pharmacogenomics</h3>
                  </div>
                  <p className="text-gray-300 mb-4">Optimize your medications with Pharmacogenomics for safer and more effective drug therapy.</p>
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
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Start Your Wellness Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Take control of your health with personalized genetic insights. Order your wellness kit or inquire about corporate solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#fe5d66] hover:bg-[#fe5d66]/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Order Wellness Kit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Corporate Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}