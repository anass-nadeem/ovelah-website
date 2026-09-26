import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function FacilityManagementPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* 1. HERO */}
        <section className="pb-20 md:pb-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Ovelah For Facility Management
              </p>
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Bring order to complex facility management.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Centralize requests across massive multi-building campuses. Organize workflows so your teams always arrive at the exact location with the right materials.
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
                  The challenge with sprawling campuses.
                </h2>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0b1f3a]">Location Ambiguity</h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    Managing maintenance across large facilities or multi-tenant buildings often means technicians waste valuable time just trying to find the exact asset or wing requiring service.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0b1f3a]">Reactive Work Orders</h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    Relying on scattered emails or phone calls creates a chaotic queue where prioritizing urgent repairs and tracking facility expenses becomes nearly impossible.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. HOW OVELAH FITS */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                Built for site-specific clarity.
              </h2>
            </div>

            <div className="flex flex-col gap-24">
              {/* Workflow 1 */}
              <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                <div className="lg:w-1/2">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                    Precise Location Mapping
                  </h3>
                  <p className="text-lg leading-relaxed text-[#6b6b6b]">
                    Separate the parent client from the individual geographic site. Whether it's a specific hospital wing or a retail branch, Ovelah ensures field teams have exact coordinates and historical data before arriving on-site.
                  </p>
                </div>
                <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-sm">
                  <Image src="/ui-locations.png" alt="Ovelah Locations Interface" fill className="object-cover" />
                </div>
              </div>

              {/* Workflow 2 */}
              <div className="flex flex-col items-center gap-12 lg:flex-row">
                <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-sm">
                  <Image src="/dash-hero.png" alt="Ovelah Dashboard Interface" fill className="object-cover" />
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                    Centralized Asset & Expense Visibility
                  </h3>
                  <p className="text-lg leading-relaxed text-[#6b6b6b]">
                    Facility management requires significant overhead. Track physical equipment assets, manage third-party vendor expenses, and monitor outstanding balances natively within your daily operations dashboard.
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
                  "Infinity Engineering Solutions uses Ovelah to map maintenance jobs to exact customer locations, managing multi-branch operations and bringing order to facility maintenance."
                </p>
                <Link href="/clients/infinity-engineering-solutions" className="inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-white/70">
                  Read the Case Study <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="lg:w-5/12 relative aspect-square w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <Image src="/ui-jobs.png" alt="Ovelah in action" fill className="object-cover opacity-80 mix-blend-luminosity" />
              </div>
            </div>
          </Container>
        </section>

        {/* 5. CTA */}
        <section className="py-24 text-center md:py-32">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-8 text-[#0a0a0a]">
              Take control of your facilities.
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