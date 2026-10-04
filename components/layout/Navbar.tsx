"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu when clicking a link
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#e7e7e4] bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm" 
            onClick={closeMenu}
          >
            <Image 
              src="/icon.svg" 
              alt="Ovelah Logo" 
              width={32} 
              height={32} 
              className="shrink-0"
            />
            <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">Ovelah</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link href="/platform" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Platform
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Solutions
            </Link>
            <Link href="/industries" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Industries
            </Link>
            <Link href="/customers" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Customers
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Blog
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Company
            </Link>
          </div>

          {/* CTAs & Mobile Hamburger Button */}
          <div className="flex items-center gap-3 md:gap-4">
            <Link 
              href="/contact" 
              className="hidden text-sm font-semibold text-[#0b1f3a] transition-colors hover:text-blue-700 lg:flex items-center min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm"
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="min-h-[44px] flex items-center justify-center rounded-md bg-[#0b1f3a] px-4 py-2 md:px-5 md:py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a]"
              onClick={closeMenu}
            >
              Request Demo
            </Link>
            
            {/* Hamburger Button (Mobile Only) */}
            <button 
              className="flex items-center justify-center min-h-[44px] min-w-[44px] text-[#0a0a0a] md:hidden outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // X (Close) Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger Icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 w-full border-b border-[#e7e7e4] bg-white px-6 py-8 shadow-xl md:hidden">
          <div className="flex flex-col gap-6">
            <Link href="/platform" onClick={closeMenu} className="text-lg font-medium text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Platform
            </Link>
            <Link href="/solutions" onClick={closeMenu} className="text-lg font-medium text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Solutions
            </Link>
            <Link href="/industries" onClick={closeMenu} className="text-lg font-medium text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Industries
            </Link>
            <Link href="/customers" onClick={closeMenu} className="text-lg font-medium text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Customers
            </Link>
            <Link href="/pricing" onClick={closeMenu} className="text-lg font-medium text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Pricing
            </Link>
            <Link href="/blog" onClick={closeMenu} className="text-lg font-medium text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Blog
            </Link>
            <Link href="/about" onClick={closeMenu} className="text-lg font-medium text-[#0a0a0a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Company
            </Link>
            <div className="my-2 h-px w-full bg-[#e7e7e4]"></div>
            <Link href="/contact" onClick={closeMenu} className="text-lg font-medium text-[#0b1f3a] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] rounded-sm">
              Contact Sales
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}