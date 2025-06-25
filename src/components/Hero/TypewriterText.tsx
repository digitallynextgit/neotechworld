import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

// Register the TextPlugin once
gsap.registerPlugin(TextPlugin);

interface TypewriterTextProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  pauseDuration?: number;
  fadeOutDuration?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  lines,
  className = '',
  typingSpeed = 0.04,
  pauseDuration = 1.5,
  fadeOutDuration = 0.75,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Clean up function to kill the timeline
  const cleanupTimeline = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
      timelineRef.current = null;
    }
  };

  useEffect(() => {
    // Return early if no text element or no lines
    if (!textRef.current || lines.length === 0) return;

    // Clean up any existing timeline
    cleanupTimeline();

    // Create a new timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Move to the next line when the animation completes
        setCurrentLineIndex((prevIndex) => (prevIndex + 1) % lines.length);
      }
    });

    timelineRef.current = tl;

    const line = lines[currentLineIndex];

    // Animation sequence
    tl.set(textRef.current, { text: '', opacity: 1 })
      .to(textRef.current, {
        duration: line.length * typingSpeed,
        text: line,
        ease: 'none'
      })
      .to({}, { duration: pauseDuration }) // Pause to read
      .to(textRef.current, {
        duration: fadeOutDuration,
        opacity: 0,
        ease: 'power2.in'
      });

    // Cleanup on unmount
    return cleanupTimeline;
  }, [currentLineIndex, lines, typingSpeed, pauseDuration, fadeOutDuration]);

  return (
    <div className={className}>
      <div ref={textRef}></div>
    </div>
  );
};

export default TypewriterText;