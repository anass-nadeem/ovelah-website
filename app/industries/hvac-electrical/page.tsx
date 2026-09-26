import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function HvacElectricalPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* 1. HERO */}
        <section className="pb-20 md:pb-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Ovelah For HVAC & Electrical
              </p>
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Manage complex maintenance workflows in one system.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Track physical equipment assets, manage recurring inspection schedules, and generate accurate quotations for highly technical installations without dropping the ball.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. THE INDUSTRY PROBLEM */}
        <section className="bg-white border-y border-[#e7e7e4] py-24">
          <Container>
            <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-24">
              <div className="lg:w-1/3">
                <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] md:text-3xl">
                  The challenge with technical fieldwork.
                </h2>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0b1f3a]">Scattered Site Histories</h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    When technicians arrive at a commercial HVAC unit or electrical panel, they often lack the historical context of previous repairs, leading to redundant troubleshooting and wasted labor hours.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0b1f3a]">Lost Parts & Expenses</h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    High-value parts and specialized equipment consumed in the field frequently go undocumented, meaning they are left off the final customer invoice.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. HOW OVELAH FITS (Product Workflows) */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                Built for technical operations.
              </h2>
            </div>

            <div className="flex flex-col gap-24">
              {/* Workflow 1 */}
              <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                <div className="lg:w-1/2">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                    Site-Specific Context
                  </h3>
                  <p className="text-lg leading-relaxed text-[#6b6b6b]">
                    Ovelah maps your clients directly to their geographic locations. When an electrical fault or HVAC maintenance job is dispatched, your technicians see exact site coordinates and historical service data before they step out of the truck.
                  </p>
                </div>
                <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-sm">
                  <Image src="/ui-locations.png" alt="Ovelah Locations Interface" fill className="object-cover" />
                </div>
              </div>

              {/* Workflow 2 */}
              <div className="flex flex-col items-center gap-12 lg:flex-row">
                <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-sm">
                  <Image src="/ui-quotes_1.png" alt="Ovelah Quotations Interface" fill className="object-cover" />
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                    Accurate Technical Quotations
                  </h3>
                  <p className="text-lg leading-relaxed text-[#6b6b6b]">
                    Commercial installations require precise estimating. Build professional quotations directly against the job requirements, capturing specialized labor rates and necessary electrical or HVAC components prior to client approval.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. REAL CUSTOMER PROOF */}
        <section className="bg-[#0b1f3a] py-24 md:py-32 text-white">
          <Container>
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="lg:w-1/2">
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-white/50">
                  Real Customer Operations
                </p>
                <div className="mb-8 relative h-[60px] w-[180px]">
                  <Image src="/infinity-logo.png" alt="Infinity Logo" fill className="object-contain object-left brightness-0 invert" />
                </div>
                <p className="mb-8 text-xl leading-relaxed text-white/90">
                  "Infinity Engineering Solutions uses Ovelah to manage jobs, quotations, invoicing and operational workflows across its commercial HVAC and electrical maintenance operations, including multi-branch networks like KFC Pakistan North."
                </p>
                <Link href="/clients/infinity-engineering-solutions" className="inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-white/70">
                  Read the Case Study <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="lg:w-5/12 relative aspect-square w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                 {/* Optional: Add a real photo of an HVAC unit, electrical panel, or just reuse the dashboard if no photo exists */}
                <Image src="/dash-hero.png" alt="Ovelah in action" fill className="object-cover opacity-80 mix-blend-luminosity" />
              </div>
            </div>
          </Container>
        </section>

        {/* 5. CTA */}
        <section className="py-24 text-center md:py-32">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-8 text-[#0a0a0a]">
              Upgrade your maintenance operations.
            </h2>
            <Link href="/contact" className="inline-block rounded-md bg-[#0b1f3a] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526]">
              Request a Demo
            </Link>
          </Container>
        </section>

      </main>
      
      <Footer />
    </>
  );
}