import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function ClientsPage() {
  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#fcfcfb] py-20 md:py-32">
        <Container>
          
          {/* Hero Section */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-5xl">
              Clients
            </h1>
            <p className="mx-auto mt-6 text-base leading-relaxed text-[#6b6b6b] md:text-lg">
              See how businesses use Ovelah to manage their day-to-day operations.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="mx-auto mt-16 max-w-3xl">
            
            {/* Infinity Engineering Card */}
            <Link 
              href="/clients/infinity-engineering-solutions"
              className="group block rounded-2xl border border-[#e7e7e4] bg-white p-8 shadow-sm transition-all hover:border-[#0b1f3a] hover:shadow-md md:p-10"
            >
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div className="flex flex-col gap-3">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                    Engineering & Maintenance
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] transition-colors group-hover:text-[#0b1f3a]">
                    Infinity Engineering Solutions
                  </h2>
                  <p className="max-w-xl text-sm leading-relaxed text-[#6b6b6b] md:text-base">
                    Managing engineering and maintenance operations for KFC Pakistan North with Ovelah.
                  </p>
                </div>
                
                {/* Arrow Icon */}
                <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[#0b1f3a]">
                  View Case Study
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>

          </div>
          
        </Container>
      </main>

      <Footer />
    </>
  );
}