import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function EngineeringMaintenancePage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* 1. HERO */}
        <section className="pb-20 md:pb-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Ovelah For Engineering & Maintenance
              </p>
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Centralize your engineering operations.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Manage ongoing service contracts, dispatch specialized field teams, and track complex technical documentation across long-term client engagements without losing operational context.
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
                  The challenge with distributed field teams.
                </h2>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0b1f3a]">Disconnected Workflows</h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    When engineers are deployed to the field, relying on WhatsApp threads or paper notes leads to lost service details, undocumented labor hours, and zero operational visibility for management.
                  </p>
                </div>
                <div>
                  <h3 className="mb-3 text-lg font-semibold text-[#0b1f3a]">Unverified Service Delivery</h3>
                  <p className="text-[#6b6b6b] leading-relaxed">
                    Without a clear chain of custody, proving that specific maintenance tasks were completed to the client's exact standard becomes a constant friction point during the billing cycle.
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
                Built for technical accountability.
              </h2>
            </div>

            <div className="flex flex-col gap-24">
              {/* Workflow 1 */}
              <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
                <div className="lg:w-1/2">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                    End-to-End Job Tracking
                  </h3>
                  <p className="text-lg leading-relaxed text-[#6b6b6b]">
                    Every maintenance request becomes a trackable entity. Assign specific engineers, detail the technical requirements, and monitor the job status from dispatch to completion in one centralized database.
                  </p>
                </div>
                <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-sm">
                  <Image src="/ui-jobs.png" alt="Ovelah Jobs Interface" fill className="object-cover" />
                </div>
              </div>

              {/* Workflow 2 */}
              <div className="flex flex-col items-center gap-12 lg:flex-row">
                <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-sm">
                  <Image src="/ui-quotes_2.png" alt="Ovelah Service and Billing Interface" fill className="object-cover" />
                </div>
                <div className="lg:w-1/2 lg:pl-12">
                  <h3 className="mb-4 text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                    Verified Proof of Work
                  </h3>
                  <p className="text-lg leading-relaxed text-[#6b6b6b]">
                    Service reports transition seamlessly into final invoices. By tying the documented engineering work directly to the financial billing, you eliminate manual data entry errors and accelerate the cash conversion cycle.
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
                  "Infinity Engineering Solutions uses Ovelah to manage jobs, quotations, invoicing and operational workflows across its commercial engineering and maintenance operations."
                </p>
                <Link href="/clients/infinity-engineering-solutions" className="inline-flex items-center text-sm font-semibold text-white transition-colors hover:text-white/70">
                  Read the Case Study <span className="ml-2">→</span>
                </Link>
              </div>
              <div className="lg:w-5/12 relative aspect-square w-full rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                <Image src="/dash-hero.png" alt="Ovelah in action" fill className="object-cover opacity-80 mix-blend-luminosity" />
              </div>
            </div>
          </Container>
        </section>

        {/* 5. CTA */}
        <section className="py-24 text-center md:py-32">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-8 text-[#0a0a0a]">
              Standardize your engineering workflows.
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