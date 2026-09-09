import Link from "next/link";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-[#fcfcfb]">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0b1f3a]">
            Operations & Service ERP
          </p>
          <h1 className="mb-6 text-4xl font-semibold tracking-[-0.04em] text-[#0a0a0a] sm:text-5xl md:text-6xl leading-[1.1]">
            Designed for businesses that manage jobs, clients and operations.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-base text-[#6b6b6b] md:text-lg leading-relaxed">
            Ovelah brings your daily workflows together into a single, clean system built specifically for service and operations businesses.
          </p>
          
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#product"
              className="w-full sm:w-auto rounded-md bg-[#0b1f3a] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#0b1f3a]/90"
            >
              Explore Ovelah ERP
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-md border border-[#e7e7e4] bg-white px-7 py-3.5 text-sm font-semibold text-[#0a0a0a] transition-all hover:border-[#0b1f3a] hover:text-[#0b1f3a]"
            >
              Request a Demo
            </Link>
          </div>
        </div>

        {/* Realistic Browser Window Wrapper */}
        <div className="mx-auto max-w-5xl overflow-hidden rounded-xl border border-[#e7e7e4] bg-white shadow-2xl shadow-black/[0.08]">
          
          {/* Browser Top Bar (Tabs) */}
          <div className="flex items-end gap-2 sm:gap-3 bg-[#e5e7eb] px-3 sm:px-4 pt-3 overflow-hidden">
            {/* macOS Window Controls */}
            <div className="mb-2.5 flex shrink-0 gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f56]"></div>
              <div className="h-3 w-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="h-3 w-3 rounded-full bg-[#27c93f]"></div>
            </div>
            
            {/* Active Tab */}
            <div className="ml-2 sm:ml-4 flex min-w-0 flex-1 sm:flex-none items-center gap-2 rounded-t-lg bg-white px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-medium text-[#0a0a0a] shadow-sm max-w-[200px]">
              {/* Globe Icon */}
              <svg className="h-3 w-3 shrink-0 text-[#0b1f3a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="truncate whitespace-nowrap">Infinity Dashboard - Ovelah</span>
              {/* Close Tab Icon */}
              <svg className="ml-auto sm:ml-4 h-3 w-3 shrink-0 cursor-pointer text-gray-400 hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>

          {/* Browser Address Bar */}
          <div className="flex items-center gap-3 sm:gap-4 border-b border-[#e7e7e4] bg-white px-3 sm:px-4 py-2 sm:py-2.5 overflow-hidden">
            {/* Navigation Arrows (Hidden on very small screens) */}
            <div className="hidden sm:flex shrink-0 gap-3 text-gray-400">
              <svg className="h-4 w-4 cursor-pointer hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              <svg className="h-4 w-4 cursor-pointer hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              <svg className="h-4 w-4 cursor-pointer hover:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
            </div>

            {/* URL Input */}
            <div className="flex flex-1 min-w-0 items-center gap-2 rounded-md bg-[#f3f4f6] px-3 py-1.5 text-[10px] sm:text-sm text-[#6b6b6b]">
              <svg className="h-3 sm:h-3.5 w-3 sm:w-3.5 shrink-0 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              <span className="truncate whitespace-nowrap">https://app.ovelah.com/dashboard/infinity</span>
            </div>
          </div>

          {/* Dashboard Image */}
          <div className="bg-[#f7f7f5]">
            <img
              src="/dashboard.png" 
              alt="Ovelah ERP Dashboard Interface"
              className="block h-auto w-full"
            />
          </div>
          
        </div>
      </Container>
    </section>
  );
}