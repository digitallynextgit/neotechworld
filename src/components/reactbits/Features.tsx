"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { FaBrain, FaDna, FaTools, FaSearch, FaArrowRight, FaPlus } from "react-icons/fa"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

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
  
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)
    
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll('.feature-card')
      
      // Create GSAP animation for each card
      cards.forEach((card, index) => {
        gsap.fromTo(card, 
          { y: 100, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.8, 
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              end: "bottom top",
              toggleActions: "play reverse restart reverse", // Play animation every time element enters viewport
              scrub: false, // Don't tie animation progress to scroll position
              markers: false, // Set to true for debugging
              once: false // Allow animation to play multiple times
            }
          }
        )
      })
    }
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  // Default features with red color theme
  const defaultFeatures: Feature[] = [
    {
      title: "Precision Diagnostics",
      solution: "Treating More with Less",
      icon: <FaBrain className="text-3xl" />,
      color: "from-red-400 to-red-600"
    },
    {
      title: "Pharmacogenomics",
      solution: "Right Drug. Right Dose.",
      icon: <FaDna className="text-3xl" />,
      color: "from-red-400 to-red-600"
    },
    {
      title: "Clinical R&D",
      solution: "Research to Real-World",
      icon: <FaTools className="text-3xl" />,
      color: "from-red-400 to-red-600"
    },
    {
      title: "Preventive Genomics",
      solution: "Prevention That Pays",
      icon: <FaSearch className="text-3xl" />,
      color: "from-red-400 to-red-600"
    }
  ]

  const featuresToRender = features || defaultFeatures
  
  return (
    <div className={cn("py-16 relative", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
          {title}
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresToRender.map((feature, index) => (
            <div
                key={index}
                className={cn(
                  "feature-card relative overflow-hidden rounded-2xl cursor-pointer",
                  "h-[320px] transition-all duration-300 border-2 border-red-700",
                  "backdrop-blur-lg bg-white/10 shadow-lg hover:shadow-xl"
                )}
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
              >
                {/* Glass Effect Background with Red Tint */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-100/30 to-red-50/20 backdrop-filter backdrop-blur-md" />
                
                {/* Card Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-gray-800">
                  {/* Icon with colored background */}
                  <div className="mb-6">
                    <div className={cn(
                      "w-20 h-20 rounded-full flex items-center justify-center",
                      "bg-red-700", feature.color, "text-[#C8AA6A]"
                    )}>
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {feature.title}
                  </h3>
                  
                  {/* Solution */}
                  <p className="text-center text-gray-600 mb-4">{feature.solution}</p>
                  
                  {/* Click Indicator */}
                  <div className="mt-4 flex items-center gap-2 bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-red-700">
                    <FaPlus size={12} className="text-red-700" />
                    <span className="text-sm font-medium text-red-700">Click to explore</span>
                  </div>
                </div>
                
                {/* Expanded View */}
                <AnimatePresence>
                  {activeFeature === index && (
                    <motion.div 
                      className="absolute inset-0 bg-white/70 backdrop-filter backdrop-blur-lg z-20 flex flex-col border-2 border-red-700 rounded-2xl"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                      {/* Header with red band */}
                      <div className="h-24 flex items-center justify-between px-6 bg-gradient-to-r from-red-500 to-red-700">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                        </div>
                        <button 
                          className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white"
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveFeature(null)
                          }}
                        >
                          ×
                        </button>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-grow p-6 overflow-auto">
                        <h4 className="text-xl font-bold mb-4 text-red-700">{feature.solution}</h4>
                        
                        <div className="space-y-4">
                          <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                            <h5 className="font-medium mb-2 text-red-700">Key Benefits</h5>
                            <ul className="list-disc pl-5 space-y-1 text-red-700">
                              <li>Improved patient outcomes</li>
                              <li>Reduced healthcare costs</li>
                              <li>Personalized treatment plans</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="p-4 border-t border-red-100">
                        <button 
                          className="w-full py-3 text-white rounded-lg font-medium flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-700"
                          onClick={(e) => {
                            e.stopPropagation()
                            // This would typically link to a more detailed page
                            console.log(`Learn more about ${feature.title}`)
                          }}
                        >
                          Learn more
                          <FaArrowRight />
                        </button>
                      </div>
                    </motion.div>
                      )}
                </AnimatePresence>
                </div>
          ))}
        </div>
      </div>
    </div>
  )
}
