import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#e7e7e4] bg-[#fcfcfb] pb-12 pt-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <Image src="/icon.svg" alt="Ovelah Logo" width={28} height={28} />
              <span className="text-lg font-bold tracking-tight text-[#0a0a0a]">Ovelah</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-[#6b6b6b]">
              Business software for companies that run on real operations. Bringing customers, locations, jobs, and financial records into one connected system.
            </p>
          </div>

          {/* Product & Solutions */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0a0a0a]">Product</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/erp" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Ovelah ERP</Link></li>
              <li><Link href="/platform" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Platform Overview</Link></li>
              <li><Link href="/solutions" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Job Management</Link></li>
              <li><Link href="/solutions" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Quotation & Billing</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0a0a0a]">Industries</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/industries/engineering-maintenance" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Engineering & Maintenance</Link></li>
              <li><Link href="/industries/hvac-electrical" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">HVAC & Electrical</Link></li>
              <li><Link href="/industries/facility-management" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Facility Management</Link></li>
              <li><Link href="/industries/construction" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Construction</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#0a0a0a]">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/about" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">About Ovelah</Link></li>
              <li><Link href="/customers" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Customer Stories</Link></li>
              <li><Link href="/contact" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Contact</Link></li>
              <li><a href="mailto:contact@ovelah.com" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">contact@ovelah.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between border-t border-[#e7e7e4] pt-8 md:flex-row">
          <p className="text-sm text-[#6b6b6b]">© {new Date().getFullYear()} Ovelah. All rights reserved.</p>
          <div className="mt-4 flex gap-6 md:mt-0">
            <Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Privacy Policy</Link>
            <Link href="#" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a]">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}