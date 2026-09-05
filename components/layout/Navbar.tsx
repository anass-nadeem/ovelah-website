import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e7e4]/80 bg-[#fcfcfb]/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight text-[#0a0a0a]">
            Ovelah
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#6b6b6b]">
            <Link href="#product" className="transition-colors hover:text-[#0b1f3a]">
              Product
            </Link>
            <Link href="#about" className="transition-colors hover:text-[#0b1f3a]">
              About
            </Link>
            <Link href="#contact" className="transition-colors hover:text-[#0b1f3a]">
              Contact
            </Link>
          </nav>

          {/* Navbar CTA */}
          <div>
            <a
              href="mailto:contact@ovelah.com?subject=Request%20a%20Demo%20–%20Ovelah%20ERP"
              className="rounded-md bg-[#0b1f3a] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#0b1f3a]/90"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </Container>
    </header>
  );
}