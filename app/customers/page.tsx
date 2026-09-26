import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function CustomersPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* HERO */}
        <section className="pb-20 md:pb-32 text-center">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                See Ovelah in real business operations.
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Discover how service and maintenance companies use our platform to connect their workflows and gain operational clarity.
              </p>
            </div>
          </Container>
        </section>

        {/* CUSTOMER STORY FEATURE */}
        <section className="bg-white border-y border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <Link 
              href="/clients/infinity-engineering-solutions" 
              className="group block overflow-hidden rounded-2xl border border-[#e7e7e4] bg-[#f7f7f5] transition-all hover:shadow-xl hover:shadow-black/5"
            >
              <div className="flex flex-col lg:flex-row">
                
                {/* Visual Half */}
                <div className="relative aspect-video lg:w-1/2 lg:aspect-auto border-b lg:border-b-0 lg:border-r border-[#e7e7e4] bg-white p-12 flex items-center justify-center">
                  <div className="relative h-[120px] w-[260px] md:h-[160px] md:w-[320px] transition-transform duration-500 group-hover:scale-105">
                    <Image
                      src="/infinity-logo.png"
                      alt="Infinity Engineering Solutions"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Content Half */}
                <div className="flex flex-col justify-center p-10 md:p-16 lg:w-1/2 bg-white">
                  <div className="mb-6 flex items-center gap-3">
                    <span className="rounded-full bg-[#f7f7f5] border border-[#e7e7e4] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">
                      Case Study
                    </span>
                    <span className="text-sm font-medium text-[#6b6b6b]">HVAC & Electrical</span>
                  </div>
                  <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                    How Infinity Engineering Solutions manages maintenance operations with Ovelah.
                  </h2>
                  <p className="mb-10 text-lg leading-relaxed text-[#6b6b6b]">
                    Learn how Infinity moved away from fragmented spreadsheets to natively organize customers, locations, jobs, and financial records in one centralized database.
                  </p>
                  <div className="inline-flex items-center text-sm font-semibold text-[#0b1f3a] transition-colors group-hover:text-blue-600">
                    Read Customer Story <span className="ml-2">→</span>
                  </div>
                </div>

              </div>
            </Link>
          </Container>
        </section>

      </main>
      
      <Footer />
    </>
  );
}