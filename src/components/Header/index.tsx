"use client";
import { signOut, useSession } from "next-auth/react";
import { IoSearch } from "react-icons/io5";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { FiX } from "react-icons/fi";

import menuData from "./menuData";

const OVERLAY_COLOR = "#FF5C5C";

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

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuOverlay, setShowMenuOverlay] = useState(false);
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

  return (
    <>
      {/* Header Bar */}
      <header className={`fixed left-0 top-0 z-50 w-full flex items-center justify-between px-20 py-2 transition-all duration-300 ${sticky ? 'bg-black/30 backdrop-blur-md shadow-lg' : ''}`}>
        {/* Logo and Brand */}
        <Link className="flex items-center gap-3 text-white hover:text-white" href={"/"}>
          <Image src="/logo.webp" alt="Logo" width={1200} height={64} className="w-[11vw] h-full"/>
          {/* <span className="text-white text-2xl font-semibold">Hematogenix</span> */}
        </Link>
        {/* Right Icons */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <button aria-label="Search" className="focus:outline-none">
            <IoSearch className="text-[#fe5d66] text-[3vw]"/>
          </button>
          {/* Hamburger Button */}
          <button
            aria-label="Open Menu"
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg focus:outline-none"
            onClick={openMenu}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="7" y="11" width="18" height="2.5" rx="1.25" fill="#222" />
              <rect x="7" y="18.5" width="18" height="2.5" rx="1.25" fill="#222" />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay Menu */}
      {menuOpen && (
        <>
          {/* Left box: logo, Made by Büro, slides from top */}
          <div
            ref={leftBoxRef}
            className="fixed top-0 left-0 h-full w-1/4 min-w-[25vw] bg-[#091534] z-[1001]"
            style={{ transform: 'translateY(-100%)' }}
          >
            <div className="p-6 w-full flex items-start">
              <Image src="/logo.webp" alt="Logo" width={1200} height={64} className="w-[200px] h-full"/>
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
            className="fixed bottom-0 right-0 h-full w-3/4 min-w-[75vw] bg-[#09173b] z-[1002]"
            style={{ transform: 'translateY(100%)' }}
          >
            {/* Top right: dropdown and close button */}
            <div className="w-full flex justify-end items-start p-8 gap-4">
              <button
                aria-label="Close Menu"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                <FiX size={32} color="#222" />
              </button>
            </div>
            {/* Center: menu items, animated in with staggered fade/slide */}
            <div className="flex flex-row w-full h-full">
              <ul className="flex flex-col items-start justify-center flex-1 gap-6 pl-12 py-2 mt-[-10vw]">
                {menuData.map((item, idx) => (
                  <li
                    key={item.id}
                    className="relative group cursor-pointer"
                    onMouseEnter={() => handleMenuHover(idx)}
                    onMouseLeave={() => handleMenuLeave(idx)}
                  >
                    <div className="flex flex-row items-center gap-4">
                      <span
                        ref={el => { lineRefs.current[idx] = el!; }}
                        className="block h-[5px] w-12 mt-[1vw]  bg-white origin-left scale-x-0"
                        style={{ display: 'block', transform: 'scaleX(0)' }}
                      />
                      <span
                        ref={el => { menuItemRefs.current[idx] = el!; }}
                        className={`text-white text-5xl font-light transition-all duration-300 opacity-0 translate-y-8
                          ${menuOpen ? `opacity-100 translate-y-0 delay-[${200 + idx * 100}ms]` : ''}`}
                        style={{ transitionDelay: menuOpen ? `${200 + idx * 100}ms` : '0ms' }}
                      >
                        <Link href={item.path || '#'} onClick={() => setMenuOpen(false)}>
                          {item.title}
                        </Link>
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Right vertical links */}
              <div className="flex flex-col items-end justify-center gap-6 pr-16 py-12">
                <Link href="/careers"> <span className="text-white text-4xl font-light cursor-pointer">Careers</span></Link>
                <Link href="/resources"> <span className="text-white text-4xl font-light cursor-pointer">News and Events</span></Link>
               <Link href="/contacts">  <span className="text-white text-4xl font-light cursor-pointer">Contacts</span></Link>
              </div>
            </div>
            {/* Bottom right: sound, 4K icon */}
            <div className="w-full flex flex-col items-end p-8 gap-2">
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
