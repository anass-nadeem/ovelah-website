import Link from "next/link";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#e7e7e4] bg-[#fcfcfb] py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          
          {/* Brand Logo Component */}
          <Logo />
          
          <div className="flex gap-8 text-sm font-medium text-[#6b6b6b]">
            <Link href="/contact" className="transition-colors hover:text-[#0b1f3a]">
              Contact
            </Link>
            <a href="mailto:contact@ovelah.com" className="transition-colors hover:text-[#0b1f3a]">
              contact@ovelah.com
            </a>
          </div>

          <p className="text-sm text-[#a3a3a3]">
            © {currentYear} Ovelah. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}