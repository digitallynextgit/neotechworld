"use client";
import { signOut, useSession } from "next-auth/react";
import { IoSearch } from "react-icons/io5";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { FiX } from "react-icons/fi";

import menuData from "./menuData";


const Header = () => {
  const { data: session } = useSession();

  const pathUrl = usePathname();
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 20) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: any) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const { theme, setTheme } = useTheme();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const leftBoxRef = useRef<HTMLDivElement>(null);
  const rightBoxRef = useRef<HTMLDivElement>(null);

  // GSAP animation for menu overlay
  useEffect(() => {
    if (menuOpen) {
      gsap.fromTo(
        leftBoxRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.45, ease: "power1.out" }
      );
      gsap.fromTo(
        rightBoxRef.current,
        { y: "100%" },
        { y: "0%", duration: 0.45, ease: "power1.out" }
      );
    } else {
      gsap.to(leftBoxRef.current, { y: "-100%", duration: 0.45, ease: "power1.in" });
      gsap.to(rightBoxRef.current, { y: "100%", duration: 0.45, ease: "power1.in" });
    }
  }, [menuOpen]);

  // GSAP hover animation for menu items
  const menuItemRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const handleMenuHover = (idx: number) => {
    gsap.to(menuItemRefs.current[idx], { x: 24, duration: 0.1, ease: "power2.out" });
    gsap.to(lineRefs.current[idx], { scaleX: 1, transformOrigin: '0% 25%', duration: 0.1, ease: "power2.out" });
  };
  const handleMenuLeave = (idx: number) => {
    gsap.to(menuItemRefs.current[idx], { x: 0, duration: 0.1, ease: "power2.in" });
    gsap.to(lineRefs.current[idx], { scaleX: 0, transformOrigin: '0% 25%', duration: 0.1, ease: "power2.in" });
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Open menu handler
  const openMenu = () => {
    setShowMenuOverlay(true);
    setMenuOpen(true);
  };
  // Close menu handler
  const closeMenu = () => {
    setMenuOpen(false);
    setTimeout(() => setShowMenuOverlay(false), 450); // match GSAP duration
  };

  // Handle navigation with preloader
  const handleNavigation = (href: string) => {
    if (href && href !== '#' && href !== pathUrl) {
      setIsLoading(true);
      closeMenu();
      
      // Simulate loading time and navigate
      setTimeout(() => {
        router.push(href);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      }, 300);
    } else {
      closeMenu();
    }
  };

  return (
    <>
      {/* Header Bar */}
      <header className={`fixed left-0 top-0 z-50 w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 py-2 transition-all duration-300 ${sticky ? 'bg-black/30 backdrop-blur-md shadow-lg' : ''}`}>
        {/* Logo and Brand */}
        <Link className="flex items-center gap-3 text-white hover:text-white" href={"/"}>
          <Image src="/mainlogo.webp" alt="Logo" width={1200} height={64} className="w-[36vw] h-full max-w-[180px] min-w-[100px] sm:w-[18vw] md:w-[11vw]"/>
          {/* <span className="text-white text-2xl font-semibold">Hematogenix</span> */}
        </Link>
        {/* Right Icons */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Search Icon */}
          <button aria-label="Search" className="focus:outline-none">
            <IoSearch className="text-[#fe5d66] text-2xl sm:text-[3vw]"/>
          </button>
          {/* Hamburger Button */}
          <button
            aria-label="Open Menu"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg focus:outline-none"
            onClick={openMenu}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect x="7" y="11" width="18" height="2.5" rx="1.25" fill="#222" />
              <rect x="7" y="18.5" width="18" height="2.5" rx="1.25" fill="#222" />
            </svg>
          </button>
        </div>
      </header>

      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 z-[9999] bg-[#091534] flex items-center justify-center">
          <div className="text-center">
            {/* DNA Helix Animation */}
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 border-4 border-[#fe5d66]/20 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-[#fe5d66]/40 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
              <div className="absolute inset-4 border-4 border-[#fe5d66] rounded-full animate-spin" style={{animationDuration: '2s'}}></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-[#fe5d66] rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Loading Text */}
            <div className="text-white text-xl font-light mb-4">Loading...</div>
            
            {/* Progress Bar */}
            <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#fe5d66] to-orange-400 rounded-full animate-pulse" style={{width: '100%', animation: 'loading 2s ease-in-out infinite'}}></div>
            </div>
            
            {/* DNA Particles */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#fe5d66] rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
          </div>
        </div>
      )}

      {/* Overlay Menu */}
      {menuOpen && (
        <>
          {/* Left box: logo, Made by Büro, slides from top */}
          <div
            ref={leftBoxRef}
            className="fixed top-0 left-0 h-1/4 w-full min-h-[25vh] sm:h-full sm:w-1/4 sm:min-w-[25vw] bg-[#091534] z-[1001]"
            style={{ transform: 'translateY(-100%)' }}
          >
            <div className="p-6 w-full flex items-start">
              <span onClick={() => handleNavigation('/')} className="cursor-pointer">
                <Image src="/mainlogo.webp" alt="Logo" width={1200} height={64} className="w-[120px] h-full sm:w-[200px]"/>
              </span>
            </div>
            <div className="absolute bottom-0 left-0 p-6 w-full flex flex-col items-start gap-2">
              <div className="flex flex-col gap-1 text-white text-sm">
                <Link href="#" className="hover:underline">Terms of use</Link>
                <Link href="#" className="hover:underline">Privacy Policy & Cookies</Link>
                <Link href="#" className="hover:underline">HIPAA Notice</Link>
              </div>
            </div>
          </div>
          {/* Right box: menu, slides from bottom */}
          <div
            ref={rightBoxRef}
            className="fixed bottom-0 right-0 h-3/4 w-full min-h-[75vh] sm:h-full sm:w-3/4 sm:min-w-[75vw] bg-[#09173b] z-[1002]"
            style={{ transform: 'translateY(100%)' }}
          >
            {/* Top right: dropdown and close button */}
            <div className="w-full flex justify-end items-start p-4 sm:p-8 gap-2 sm:gap-4">
              <button
                aria-label="Close Menu"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={28} color="#222" className="sm:w-8 sm:h-8" />
              </button>
            </div>
            {/* Center: menu items, animated in with staggered fade/slide */}
            <div className="flex flex-col sm:flex-row w-full h-full">
              <ul className="flex flex-col items-start justify-center flex-1 gap-4 sm:gap-6 pl-6 sm:pl-12 py-2 mt-0 sm:mt-[-10vw] mb-8 sm:mb-0">
                {menuData.map((item, idx) => (
                  <li
                    key={item.id}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => handleMenuHover(idx)}
                    onMouseLeave={() => handleMenuLeave(idx)}
                  >
                    <div className="flex flex-row items-center gap-2 sm:gap-4">
                      <span
                        ref={el => { lineRefs.current[idx] = el!; }}
                        className="block h-[3px] sm:h-[5px] w-8 sm:w-12 mt-2 sm:mt-[1vw] bg-white origin-left scale-x-0"
                        style={{ display: 'block', transform: 'scaleX(0)' }}
                      />
                      <span
                        ref={el => { menuItemRefs.current[idx] = el!; }}
                        className={`text-white text-2xl sm:text-5xl font-light transition-all duration-300 opacity-0 translate-y-8
                          ${menuOpen ? `opacity-100 translate-y-0 delay-[${200 + idx * 100}ms]` : ''}`}
                        style={{ transitionDelay: menuOpen ? `${200 + idx * 100}ms` : '0ms' }}
                      >
                        <span onClick={() => handleNavigation(item.path || '#')}>
                          {item.title}
                        </span>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Right vertical links */}
              <div className="flex flex-row sm:flex-col items-end justify-center gap-4 sm:gap-6 pr-6 sm:pr-16 py-6 sm:py-12 w-full sm:w-auto">
                <span onClick={() => handleNavigation('/careers')} className="text-white text-xl sm:text-4xl font-light cursor-pointer">Careers</span>
                <span onClick={() => handleNavigation('/resources')} className="text-white text-xl sm:text-4xl font-light cursor-pointer">News and Events</span>
                {/* <span onClick={() => handleNavigation('/contact')} className="text-white text-xl sm:text-4xl font-light cursor-pointer hidden lg:block">Contacts</span> */}
              </div>
            </div>
            {/* Bottom right: sound, 4K icon */}
            <div className="w-full flex flex-col items-end p-4 sm:p-8 gap-2">
              <div className="flex gap-2 items-center mt-2">
                {/* Sound Icon */}
                <button className="w-8 h-8 flex items-center justify-center bg-white/20 rounded-full">
                  <svg width="20" height="20" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 20 20">
                    <path d="M3 8v4h4l5 5V3l-5 5H3z" />
                  </svg>
                </button>
                {/* 4K Icon */}
                <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-bold">4K</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
