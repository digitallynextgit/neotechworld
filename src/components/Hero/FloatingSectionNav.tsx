import React, { useState, useRef, useEffect, useCallback } from "react";

const sectionNav = [
  { id: "result", label: "Outcomes" },
  { id: "expertise", label: "Specialization" },
  { id: "works", label: "Works" },
  { id: "who", label: "Who" },
  { id: "blogs", label: "Blogs" },
  { id: "contact", label: "Contact Us" },
];

function FloatingSectionNav() {
  const [active, setActive] = useState(sectionNav[0].id);
  const observer = useRef<IntersectionObserver | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [isOnWhiteBg, setIsOnWhiteBg] = useState(false);

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    };
    observer.current = new window.IntersectionObserver(handleIntersect, {
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    });
    sectionNav.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.current?.observe(el);
    });
    return () => observer.current?.disconnect();
  }, []);

  // Observe white sections for nav color
  useEffect(() => {
    const whiteSections = [
      document.getElementById("expertise"),
      document.getElementById("offering")
    ].filter(Boolean);
    
    if (whiteSections.length === 0 || !navRef.current) return;
    
    const handleWhiteBgIntersection = (entries: IntersectionObserverEntry[]) => {
      const isAnyWhiteSectionVisible = entries.some(entry => entry.isIntersecting);
      setIsOnWhiteBg(isAnyWhiteSectionVisible);
      
      // Apply color change to logo in header
      // We're now using a glass background for the header, so we don't need to change the logo color
      // The logo will always be white and visible against the glass background
      
      // Debug logging to help identify issues
      console.log('White sections intersection:', 
        entries.map(e => ({ id: e.target.id, isIntersecting: e.isIntersecting })));
    };
    
    const colorObserver = new window.IntersectionObserver(
      handleWhiteBgIntersection,
      { 
        root: null, 
        threshold: 0.1,
        rootMargin: "-10% 0px -10% 0px" // Adjust rootMargin to be more sensitive
      },
    );
    
    whiteSections.forEach(section => {
      if (section) {
        console.log('Observing white section:', section.id);
        colorObserver.observe(section);
      }
    });
    
    return () => colorObserver.disconnect();
  }, []);

  const handleClick = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <nav
      ref={navRef}
      // className={`fixed left-8 top-1/2 z-40 flex -translate-y-1/2 flex-col items-start gap-4 bg-red-200/10 p-4  transition-colors duration-300 ${isOnWhiteBg ? "text-gray-900" : "text-white"}`}
       className="fixed left-8 top-1/2 z-40 flex -translate-y-1/2 flex-col items-start gap-4   transition-colors duration-300 text-[#fe5d66]"
    >
      {sectionNav.map((item) => (
        <button
          key={item.id}
          onClick={() => handleClick(item.id)}
          // className={`flex items-center gap-2 text-[1.25vw] font-bold transition ${active === item.id ? (isOnWhiteBg ? "font-bold text-gray-900" : "font-bold text-white") : isOnWhiteBg ? "text-white" : "text-white/80"}`}
          className={`flex items-center gap-2 text-[1vw] font-bold transition text-[#fe5d66]`}
          style={{ outline: "none" }}
        >
          <span
            // className={`h-2 w-2 rounded-full transition-all duration-200 ${active === item.id ? (isOnWhiteBg ? "bg-gray-900" : "bg-white/80") : isOnWhiteBg ? "bg-gray-300" : "bg-white/30"}`}
            className={`h-2 w-2 rounded-full transition-all duration-200 ${active === item.id ? "bg-[#fe5d66]" : "bg-white/30"}`}
          ></span>
          <span>{item.label}</span>
        </button>
      ))}
    </nav>
  );
}

// FloatingSectionNav will only be visible after the hero section is out of view
function FloatingSectionNavAfterHero() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("hero-main-section");
    if (!hero) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  if (!show) return null;
  return <FloatingSectionNav />;
}

export { FloatingSectionNav, FloatingSectionNavAfterHero };