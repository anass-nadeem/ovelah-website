import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function ERPPage() {
  
  // Data for the ERP modules grid
  const modules = [
    {
      title: "Clients",
      desc: "Maintain a centralized database of your customer accounts, contact details, and historical relationships without relying on fragmented spreadsheets.",
      img: "/ui-clients.png" 
    },
    {
      title: "Locations",
      desc: "Map customer accounts to their specific geographic sites. Give your field teams exact coordinates and site-specific operational requirements.",
      img: "/ui-locations.png"
    },
    {
      title: "Jobs",
      desc: "Track service requests and assigned maintenance work from inception to resolution, creating an unbroken chain of custody for every task.",
      img: "/ui-jobs.png"
    },
    {
      title: "Quotations",
      desc: "Generate accurate, professional cost estimates against specific job parameters prior to client approval to standardize your commercial workflow.",
      img: "/ui-quotes_1.png"
    },
    {
      title: "Invoices",
      desc: "Prevent revenue leakage by seamlessly generating final billing documentation based on the approved quotation and completed operational work.",
      img: "/ui-invoice.png" 
    },
    {
      title: "Expenses & Assets",
      desc: "Track the internal overhead of doing business. Log physical equipment assets, fleet details, and out-of-pocket expenses tied to specific jobs.",
      img: "/ui-assets.png" 
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* HERO */}
        <section className="pb-20 md:pb-32 text-center">
          <Container>
            <div className="mx-auto max-w-4xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Flagship Product
              </p>
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Run your operations with Ovelah ERP.
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                A unified system designed specifically for service and maintenance businesses. Everything you need to manage the lifecycle of a job.
              </p>
              <div className="flex justify-center">
                <Link href="/contact" className="rounded-md bg-[#0b1f3a] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526] w-full sm:w-auto">
                  Request a Demo
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* DASHBOARD PREVIEW */}
        <section className="bg-white border-y border-[#e7e7e4] py-24">
          <Container>
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              <div className="lg:w-1/3">
                <h2 className="mb-4 text-3xl font-semibold tracking-tight text-[#0a0a0a]">
                  Command Central.
                </h2>
                <p className="text-lg leading-relaxed text-[#6b6b6b]">
                  The Ovelah ERP dashboard provides immediate operational visibility. See outstanding balances, active jobs, and recent quotations the second you log in.
                </p>
              </div>
              <div className="lg:w-2/3 relative aspect-video w-full rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-lg">
                <Image src="/dash-hero.png" alt="Ovelah ERP Dashboard" fill className="object-cover" priority />
              </div>
            </div>
          </Container>
        </section>

        {/* THE MODULES GRID */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">Core Capabilities</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {modules.map((module, index) => (
                <div key={index} className="flex flex-col">
                  {/* Image Placeholder - scales perfectly on mobile */}
                  <div className="relative aspect-video w-full rounded-lg border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden mb-6">
                    <Image src={module.img} alt={`${module.title} Interface`} fill className="object-cover" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">{module.title}</h3>
                  <p className="text-[#6b6b6b] leading-relaxed">{module.desc}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA BOTTOM */}
        <section className="bg-[#0b1f3a] py-24 text-center text-white md:py-32">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl mb-8">
              Ready to standardize your operations?
            </h2>
            <Link href="/contact" className="inline-block rounded-md bg-white px-8 py-3.5 text-sm font-medium text-[#0b1f3a] transition-colors hover:bg-gray-100">
              Request a Demo
            </Link>
          </Container>
        </section>

      </main>
      
      <Footer />
    </>
  );
}