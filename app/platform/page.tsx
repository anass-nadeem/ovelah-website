import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function PlatformPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* HERO */}
        <section className="pb-20 md:pb-32 text-center">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                One platform for your business operations.
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Ovelah connects the physical work happening in the field with the commercial data required in the office. No more fragmented spreadsheets or lost context.
              </p>
            </div>
          </Container>
        </section>

        {/* ARCHITECTURE DIAGRAM */}
        <section className="bg-[#0b1f3a] py-24 text-white">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Designed around connected workflows.</h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                When an operational entity (like a Job) is created, it natively inherits the context of the Client and Location. When a Quotation is built, it pulls directly from the Job. Data flows sequentially.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:flex-wrap text-sm font-semibold tracking-widest uppercase">
              <div className="flex items-center gap-4 flex-col md:flex-row w-full md:w-auto">
                <span className="bg-white/10 px-6 py-3 rounded-full w-48 text-center md:w-auto">Clients</span>
                <span className="text-white/40 hidden md:block">→</span>
                <span className="text-white/40 md:hidden">↓</span>
              </div>
              <div className="flex items-center gap-4 flex-col md:flex-row w-full md:w-auto">
                <span className="bg-white/10 px-6 py-3 rounded-full w-48 text-center md:w-auto">Locations</span>
                <span className="text-white/40 hidden md:block">→</span>
                <span className="text-white/40 md:hidden">↓</span>
              </div>
              <div className="flex items-center gap-4 flex-col md:flex-row w-full md:w-auto">
                <span className="bg-white/10 px-6 py-3 rounded-full w-48 text-center md:w-auto">Jobs</span>
                <span className="text-white/40 hidden md:block">→</span>
                <span className="text-white/40 md:hidden">↓</span>
              </div>
              <div className="flex items-center gap-4 flex-col md:flex-row w-full md:w-auto">
                <span className="bg-white/10 px-6 py-3 rounded-full w-48 text-center md:w-auto">Quotations</span>
                <span className="text-white/40 hidden md:block">→</span>
                <span className="text-white/40 md:hidden">↓</span>
              </div>
              <div className="flex items-center gap-4 flex-col md:flex-row w-full md:w-auto">
                <span className="bg-[#0055FF] px-6 py-3 rounded-full w-48 text-center md:w-auto">Work Execution</span>
                <span className="text-white/40 hidden md:block">→</span>
                <span className="text-white/40 md:hidden">↓</span>
              </div>
              <div className="flex items-center gap-4 flex-col md:flex-row w-full md:w-auto">
                <span className="bg-white/10 px-6 py-3 rounded-full w-48 text-center md:w-auto">Invoices</span>
              </div>
            </div>
          </Container>
        </section>

        {/* PLATFORM PILLARS (Alternating Layout) */}
        <section className="bg-white py-24 md:py-32">
          <Container>
            
            {/* Operations */}
            <div className="flex flex-col-reverse items-center gap-12 lg:flex-row mb-32">
              <div className="lg:w-1/2">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">Operations</h2>
                <h3 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                  Manage the physical reality of your business.
                </h3>
                <p className="text-lg leading-relaxed text-[#6b6b6b] mb-8">
                  Ovelah acts as your source of truth for where work happens and who it is for. Every job is tied to a specific client and a precise geographic location, ensuring field teams always arrive with the right context.
                </p>
                <Link href="/erp" className="text-sm font-semibold text-[#0b1f3a] hover:underline underline-offset-4">
                  Explore Ovelah ERP →
                </Link>
              </div>
              <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden">
                <Image src="/ui-jobs.png" alt="Operations UI" fill className="object-cover" />
              </div>
            </div>

            {/* Commercial */}
            <div className="flex flex-col items-center gap-12 lg:flex-row mb-32">
              <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden">
                <Image src="/ui-quotes_2.png" alt="Commercial UI" fill className="object-cover" />
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">Commercial</h2>
                <h3 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                  Turn completed work into revenue.
                </h3>
                <p className="text-lg leading-relaxed text-[#6b6b6b]">
                  Seamlessly transition from operational execution to financial documentation. Generate professional quotations from job requirements, and convert completed service reports directly into structured invoices.
                </p>
              </div>
            </div>

            {/* Resources & Reporting */}
            <div className="flex flex-col-reverse items-center gap-12 lg:flex-row">
              <div className="lg:w-1/2">
                <h2 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">Resources & Reporting</h2>
                <h3 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                  Maintain complete visibility.
                </h3>
                <p className="text-lg leading-relaxed text-[#6b6b6b]">
                  Track the internal costs of doing business. Monitor physical equipment assets and log job-specific expenses alongside customer balances to get a clear, reporting-driven view of your operational profitability.
                </p>
              </div>
              <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden">
                <Image src="/dash-hero.png" alt="Reporting UI" fill className="object-cover" />
              </div>
            </div>

          </Container>
        </section>

      </main>
      
      <Footer />
    </>
  );
}