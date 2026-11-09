import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Software for MEP Contractors | Ovelah",
  description: "Keep MEP project and maintenance work organised: clients, sites, jobs, quotations, expenses and invoices in one system.",
  url: "https://ovelah.com/industries/mep-contractors",
});

export default function MepContractorsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32 selection:bg-[#0b1f3a] selection:text-white">
        
        {/* HERO */}
        <section className="pb-16 md:pb-24">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                MEP Contractors
              </p>
              <h1 className="mb-6 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0a0a0a] leading-[1.1]">
                Job and cost control for MEP contractors.
              </h1>
              <p className="text-lg leading-relaxed text-[#6b6b6b]">
                MEP work spans mechanical, electrical and plumbing trades across many sites. Ovelah keeps each job, quotation, cost and invoice linked to the right client and site.
              </p>
            </div>
            
            <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-xl border border-[#e7e7e4] bg-white overflow-hidden shadow-2xl shadow-black/5">
              <div className="flex items-center gap-2 border-b border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3">
                <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
                <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
              </div>
              <div className="relative h-[calc(100%-41px)] w-full">
                <Image 
                  src="/ui-jobs.png" 
                  alt="Ovelah job control for MEP contractors" 
                  fill 
                  sizes="(max-width: 1024px) 100vw, 900px" 
                  className="object-cover object-top" 
                  priority 
                />
              </div>
            </div>
          </Container>
        </section>

        {/* THE PROBLEM */}
        <section className="py-24 border-t border-[#e7e7e4] bg-white">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] mb-12 text-center">
              The Problem
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="rounded-xl border border-[#e7e7e4] bg-[#fcfcfb] p-8">
                <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">Costs that don't reach the invoice</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Job costs sit in different files from the quotation, so billing is slow and margins are unclear.</p>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-[#fcfcfb] p-8">
                <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">Work scattered across sites</h3>
                <p className="text-[#6b6b6b] leading-relaxed">With several clients and sites, job details end up across messages, spreadsheets and paper.</p>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-[#fcfcfb] p-8">
                <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">Quotes that don't match the job</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Quotations are rebuilt by hand from the job details, which takes time and invites mistakes.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* HOW OVELAH HELPS */}
        <section className="py-24 border-t border-[#e7e7e4] bg-[#f7f7f5]">
          <Container>
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] mb-12 text-center">
                How Ovelah helps
              </h2>
              <div className="flex flex-col gap-6">
                {[
                  "Jobs tied to clients and sites",
                  "Quotations built from the job",
                  "Expenses recorded against the job",
                  "Invoices from completed work, with balances visible"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl border border-[#e7e7e4] bg-white p-6 shadow-sm">
                    <svg className="w-6 h-6 text-[#0b1f3a] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-lg font-medium text-[#0a0a0a]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#fcfcfb] py-32 text-center border-t border-[#e7e7e4]">
          <Container>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
              See how Ovelah fits your operations.
            </h2>
            <div className="flex justify-center">
              <Link href="/contact" className="min-h-[44px] inline-flex items-center justify-center rounded-md bg-[#0b1f3a] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a]">
                Book a demo
              </Link>
            </div>
          </Container>
        </section>
        
      </main>
      <Footer />
    </>
  );
}