"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-15 py-[18px] border-b border-teal/12 backdrop-blur-[16px] transition-colors duration-400 ${
        scrolled ? "bg-site-black/94" : "bg-site-black/35"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="block">
        <div className="h-11 flex items-center">
          <Image
            src="/logo-occan.png"
            alt="The Cove Logo"
            width={80}
            height={40}
            className="object-contain"
          />
        </div>
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-[34px] list-none">
        {[
          { label: "The Property", href: "#about" },
          { label: "Units", href: "#units" },
          { label: "Amenities", href: "#amenities" },
          { label: "For Owners", href: "#owners" },
        ].map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-white/82 no-underline text-[12px] tracking-[.12em] uppercase font-medium hover:text-teal transition-colors duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            className="bg-teal text-site-black no-underline text-[12px] tracking-[.12em] uppercase font-medium px-[22px] py-[10px] rounded-sm hover:bg-[#00d8e3] transition-colors duration-300"
          >
            Book Now
          </a>
        </li>
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-site-black/96 backdrop-blur-lg flex flex-col items-start px-6 py-6 gap-5 md:hidden border-t border-white/10">
          {[
            { label: "The Property", href: "#about" },
            { label: "Units", href: "#units" },
            { label: "Amenities", href: "#amenities" },
            { label: "For Owners", href: "#owners" },
            { label: "Book Now", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 text-[13px] tracking-[.12em] uppercase font-medium hover:text-teal transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
