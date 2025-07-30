"use client"

import React, { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { FaArrowRight, FaPlus } from "react-icons/fa"
import Image from "next/image"

interface Feature {
  title: string
  solution: string
  icon: React.ReactNode
  color: string
}

interface FeatureStepsProps {
  features?: Feature[]
  className?: string
  title?: string
}

export function FeatureSteps({
  features,
  className,
  title = "",
}: FeatureStepsProps) {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  
  // Animation removed as requested

  // Default features with blue and yellow color theme
  const defaultFeatures: Feature[] = [
    {
      title: "Clinical diagnosis",
      solution: "Genetic Answers for Clearer Clinical Decisions",
      icon: <Image src="/icons/note.webp" alt="Precision Diagnostics" width={40} height={40} className="text-[#fdb73e]" />,
      color: "from-[#09173b] to-[#09173b]"
    },
    {
      title: "Pharmacogenomics",
      solution: "Right Drug, Right Dose, right from the Start — Advancing Safer, Smarter, Personalized Care",
      icon: <Image src="/icons/drugs.webp" alt="Pharmacogenomics" width={40} height={40} className="text-[#fdb73e]" />,
      color: "from-[#09173b] to-[#09173b]"
    },
    {
      title: "Research & Development",
      solution: "Research to real world",
      icon: <Image src="/icons/prevent.webp" alt="Clinical R&D" width={40} height={40} className="text-[#fdb73e]" />,
      color: "from-[#09173b] to-[#09173b]"
    },
    {
      title: "Preventive Genomics",
      solution: "Empower Your Health Through Genomic Insights",
      icon: <Image src="/icons/loupe.webp" alt="Preventive Genomics" width={40} height={40} className="text-[#fdb73e]" />,
      color: "from-[#09173b] to-[#09173b]"
    }
  ]

  const featuresToRender = features || defaultFeatures
  
  return (
    <div className={cn("py-16 relative", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-center">
          {title}
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {featuresToRender.map((feature, index) => (
            <div
                key={index}
                className={cn(
                  "feature-card relative overflow-hidden rounded-2xl cursor-pointer",
                  "h-[65vh] transition-all duration-300 border-2 border-[#09173b]",
                  "backdrop-blur-lg bg-white/10 shadow-lg hover:shadow-xl"
                )}
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                {/* Glass Effect Background with Blue Tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#09173b]/10 to-[#09173b]/5 backdrop-filter backdrop-blur-md" />
                
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 text-gray-800">
                  {/* Icon with colored background */}
                  <div className="mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      "bg-white", feature.color, "text-white"
                    )}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-md font-bold mb-2 text-center">
                    {feature.title}
                  </h3>
                  
                  {/* Solution */}
                  <p className="text-center text-gray-600 mb-3 text-[1vw]">{feature.solution}</p>
                  
                  {/* Click Indicator */}
                  <div className="mt-2 flex items-center gap-2 bg-white/40 backdrop-blur-sm px-3 py-1 rounded-full border border-[#fdb73e]">
                    <FaPlus size={10} className="text-[#fdb73e]" />
                    <span className="text-xs font-medium text-[#09173b]">Click to explore</span>
                  </div>
                </div>
                
                {/* Expanded View */}
                {activeFeature === index && (
                  <div 
                    className="absolute inset-0 bg-white/70 backdrop-filter backdrop-blur-lg z-20 flex flex-col border-2 border-[#09173b] rounded-2xl"
                  >
                    {/* Header with blue band */}
                    <div className="h-20 flex items-center justify-between px-4 bg-gradient-to-r from-[#09173b] to-[#09173b]">
                      <div className="flex items-center gap-3">
                        {/* <div className="w-10 h-10 rounded-full  flex items-center justify-center text-white">
                          {feature.icon}
                        </div> */}
                        <h3 className="text-[1vw]  text-white">{feature.title}</h3>
                      </div>
                      <button 
                        className="w-5 h-5 p-3 rounded-full bg-[#fdb73e] flex items-center justify-center text-black"
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveFeature(null)
                        }}
                      >
                        ×
                      </button>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow p-4 overflow-auto">
                      <h4 className="text-sm font-bold mb-3 text-[#09173b]">{feature.solution}</h4>
                      
                      <div className="space-y-3">
                        <div className="p-3 bg-[#09173b]/5 rounded-lg border border-[#09173b]/20">
                          <h5 className="text-[1vw] mb-2 text-[#09173b]">Key Benefits</h5>
                          <ul className="list-disc pl-5 space-y-1 text-[#09173b] text-[.85vw]">
                            <li>Improved patient outcomes</li>
                            <li>Reduced healthcare costs</li>
                            <li>Personalized treatment plans</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    {/* Footer */}
                    <div className="p-3 border-t border-[#09173b]/10">
                      <button 
                        className="w-full py-2 text-white rounded-lg font-medium flex items-center text-[1vw] justify-center gap-2 bg-gradient-to-r from-[#09173b] to-[#09173b] hover:from-[#fdb73e] hover:to-[#fdb73e] transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation()
                          // This would typically link to a more detailed page
                          console.log(`Learn more about ${feature.title}`)
                        }}
                      >
                        Learn more
                        <FaArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
                </div>
          ))}
        </div>
      </div>
    </div>
  )
}
