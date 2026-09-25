"use client";

import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#e7e7e4] bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
            <Link href="/platform" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a]">
              Platform
            </Link>
            <Link href="/solutions" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a]">
              Solutions
            </Link>
            <Link href="/industries" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a]">
              Industries
            </Link>
            <Link href="/customers" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a]">
              Customers
            </Link>
            <Link href="/about" className="text-sm font-medium text-[#6b6b6b] transition-colors hover:text-[#0a0a0a]">
              Company
            </Link>
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-4">
            <Link 
              href="/contact" 
              className="hidden text-sm font-semibold text-[#0b1f3a] transition-colors hover:text-blue-700 md:block"
            >
              Contact
            </Link>
            <Link 
              href="/contact" 
              className="rounded-md bg-[#0b1f3a] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}