import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Ovelah | Business Operations Software for Service Teams",
  description: "Ovelah brings customers, locations, jobs, quotations, invoices and everyday operations into one connected system for service and maintenance businesses.",
  url: "https://ovelah.com/",
});

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* 1. HERO SECTION */}
        <section className="relative overflow-hidden pb-20 md:pb-32">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Business Operations Software
              </p>
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Business software for companies that run on field operations.
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                The complete job, quotation, and invoice management software for service and contracting businesses. Connect your field operations to your back office in one system.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="w-full rounded-md bg-[#0b1f3a] px-8 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#0a1526] sm:w-auto">
                  Request a Demo →
                </Link>
                <Link href="/platform" className="w-full rounded-md border border-[#e7e7e4] bg-white px-8 py-3.5 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#f7f7f5] sm:w-auto">
                  Explore Ovelah →
                </Link>
              </div>
            </div>

            {/* Hero Product Visual */}
            <div className="mt-16 md:mt-24">
              <div className="overflow-hidden rounded-xl border border-[#e7e7e4] bg-white shadow-2xl shadow-black/5">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 border-b border-[#e7e7e4] bg-[#F7F7F5] px-4 py-3">
                  <div className="h-3 w-3 rounded-full bg-[#e7e7e4]" />
                  <div className="h-3 w-3 rounded-full bg-[#e7e7e4]" />
                  <div className="h-3 w-3 rounded-full bg-[#e7e7e4]" />
                </div>
                {/* Ensure dash-hero.png is in your public/ folder */}
                <div className="relative aspect-[16/9] w-full bg-white">
                  <Image 
                    src="/dash-hero.png" 
                    alt="Ovelah ERP dashboard showing active jobs, locations, and financial overview" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
                    className="object-cover" 
                    priority 
                  />
                </div>
              </div>
            </div>
            
            {/* Why Trust Ovelah Strip (Task 9) */}
            <div className="mt-12 flex flex-col items-center justify-center gap-6 border-t border-[#e7e7e4] pt-8 sm:flex-row sm:gap-12 text-sm font-medium text-[#6b6b6b]">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Tested in Live Commercial Operations
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                Secure Encrypted Architecture
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                No Enterprise Bloat
              </div>
            </div>
          </Container>
        </section>

        {/* 2. ACTIVE CLIENT PROOF */}
        <section className="border-y border-[#e7e7e4] bg-white py-20">
          <Container>
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              <div className="lg:w-1/2">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">Active Client</p>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#0a0a0a]">Infinity Engineering Solutions</h2>
                <p className="mb-6 font-medium text-[#0b1f3a]">HVAC & Electrical Maintenance</p>
                <p className="mb-8 max-w-lg text-lg leading-relaxed text-[#6b6b6b]">
                  Infinity Engineering Solutions uses Ovelah to manage jobs, quotations, invoicing and operational workflows across its maintenance operations.
                </p>
                <Link href="/clients/infinity-engineering-solutions" className="text-sm font-semibold text-[#0b1f3a] hover:underline underline-offset-4">
                  View Customer Story →
                </Link>
              </div>
              <div className="lg:w-1/3">
                <Image 
                  src="/infinity-logo.png" 
                  alt="Infinity Engineering Solutions corporate logo" 
                  width={300} 
                  height={150} 
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-contain" 
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* 3. THE PROBLEM & PLATFORM */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-20">
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
                Business operations shouldn't live in disconnected systems.
              </h2>
              <p className="text-xl text-[#6b6b6b]">
                One system for the work that keeps your business moving.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">Operations</h3>
                <ul className="flex flex-col gap-3 text-[#6b6b6b]">
                  <li>Clients</li>
                  <li>Locations</li>
                  <li>Jobs</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">Commercial</h3>
                <ul className="flex flex-col gap-3 text-[#6b6b6b]">
                  <li>Quotations</li>
                  <li>Invoices</li>
                  <li>Balances</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">Resources</h3>
                <ul className="flex flex-col gap-3 text-[#6b6b6b]">
                  <li>Expenses</li>
                  <li>Assets</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8">
                <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">Insight</h3>
                <ul className="flex flex-col gap-3 text-[#6b6b6b]">
                  <li>Reporting</li>
                  <li>Operational Visibility</li>
                </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* 4. PRODUCT DEEP DIVES */}
        <section className="bg-white py-24 md:py-32 border-t border-[#e7e7e4]">
          <Container>
            
            {/* Deep Dive 1: Jobs */}
            <div className="flex flex-col items-center gap-16 lg:flex-row mb-32">
              <div className="lg:w-1/2">
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                  Know where the work is.
                </h2>
                <p className="text-lg leading-relaxed text-[#6b6b6b]">
                  Manage your client database natively alongside their specific geographic locations. Dispatch teams to the exact coordinates with the exact requirements, tracking every job from inception to completion without ever leaving the platform.
                </p>
              </div>
              <div className="lg:w-1/2 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-lg">
                <Image 
                  src="/ui-jobs.png" 
                  alt="Ovelah Job Management interface showing site coordinates and task lists" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover" 
                  loading="lazy"
                />
              </div>
            </div>

            {/* Deep Dive 2: Quotations (Cascading 2-Image Layout) */}
            <div className="flex flex-col-reverse items-center gap-16 lg:flex-row mb-32">
              <div className="lg:w-1/2 w-full flex flex-col">
                {/* Background image slightly offset to the left */}
                <div className="relative aspect-video w-[85%] rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-sm self-start">
                  <Image 
                    src="/ui-quotes_1.png" 
                    alt="Ovelah Quotation builder interface showing parts and labor estimation" 
                    fill 
                    sizes="(max-width: 768px) 85vw, 40vw"
                    className="object-cover" 
                    loading="lazy"
                  />
                </div>
                {/* Foreground image overlapping and pulled to the right */}
                <div className="relative aspect-video w-[85%] rounded-xl border border-[#e7e7e4] bg-white overflow-hidden shadow-2xl self-end -mt-[20%]">
                  <Image 
                    src="/ui-quotes_2.png" 
                    alt="Generated professional quotation PDF output from Ovelah" 
                    fill 
                    sizes="(max-width: 768px) 85vw, 40vw"
                    className="object-cover" 
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="lg:w-1/2 lg:pl-12">
                <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                  From requirement to quotation.
                </h2>
                <p className="text-lg leading-relaxed text-[#6b6b6b]">
                  Generate accurate cost estimates directly against specific job parameters. Ensure all anticipated labor and parts are accounted for prior to client approval, standardizing your commercial workflow.
                </p>
              </div>
            </div>

          </Container>
        </section>

        {/* 5. WORKFLOW DIAGRAM */}
        <section className="py-24 bg-[#0b1f3a] text-white">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">One connected operational workflow.</h2>
            </div>
            <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold tracking-widest uppercase">
              <span className="bg-white/10 px-6 py-3 rounded-full">1. Client</span>
              <span className="text-white/40 py-3">→</span>
              <span className="bg-white/10 px-6 py-3 rounded-full">2. Location</span>
              <span className="text-white/40 py-3">→</span>
              <span className="bg-white/10 px-6 py-3 rounded-full">3. Job</span>
              <span className="text-white/40 py-3">→</span>
              <span className="bg-white/10 px-6 py-3 rounded-full">4. Quotation</span>
              <span className="text-white/40 py-3">→</span>
              <span className="bg-white/10 px-6 py-3 rounded-full">5. Work</span>
              <span className="text-white/40 py-3">→</span>
              <span className="bg-white/10 px-6 py-3 rounded-full">6. Invoice</span>
            </div>
          </Container>
        </section>

        {/* 6. WHY OVELAH */}
        <section className="py-24 md:py-32 border-b border-[#e7e7e4]">
          <Container>
            <h2 className="mb-16 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl max-w-2xl">
              Software built around how businesses actually operate.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">Quote to Cash in One Flow</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Stop re-entering data. Convert a signed quotation directly into a scheduled job, and a completed service report into an invoice with zero data loss.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">Live Financial Visibility</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Know exactly which projects are profitable. Track real-time labor costs, physical asset deployment, and outstanding invoices before the month ends.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">Site-Specific Context</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Field teams arrive prepared. Every dispatch includes exact map coordinates, historical maintenance records, and required materials for that specific location.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-4">Zero Enterprise Bloat</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Deploy in days, not months. We stripped away the confusing enterprise menus to give you exactly what service businesses need to operate, without the learning curve.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* 7. FINAL CTA */}
        <section className="bg-white py-32 text-center">
          <Container>
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl">
              See Ovelah in action.
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-[#6b6b6b] md:text-xl">
              Tell us how your business works. We'll show you how Ovelah can fit into your workflow.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="w-full rounded-md bg-[#0b1f3a] px-8 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#0a1526] sm:w-auto">
                Request a Demo
              </Link>
              <a href="mailto:contact@ovelah.com" className="text-sm font-semibold text-[#0b1f3a] hover:underline underline-offset-4 ml-4">
                Contact Sales
              </a>
            </div>
          </Container>
        </section>

      </main>
      
      <Footer />
    </>
  );
}