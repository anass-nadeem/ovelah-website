import Link from "next/link";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e7e4] bg-white/90 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-[1.5px] border-[#0a0a0a]">
              <span className="text-sm font-semibold text-[#0a0a0a]">O</span>
            </div>

            <span className="text-base font-semibold tracking-[0.16em] text-[#0a0a0a]">
              OVELAH
            </span>
          </Link>

          <div className="flex items-center gap-7">
            <a
              href="#product"
              className="hidden text-sm font-medium text-[#6b6b6b] transition hover:text-[#0a0a0a] md:block"
            >
              Product
            </a>

            <a
              href="#about"
              className="hidden text-sm font-medium text-[#6b6b6b] transition hover:text-[#0a0a0a] md:block"
            >
              About
            </a>

            <a href="/contact" className="btn-primary">
              Contact
            </a>
          </div>

        </nav>
      </Container>
    </header>
  );
}