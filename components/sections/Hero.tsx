import Image from "next/image";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="pb-16 pt-12 md:pb-24 md:pt-20">
      <Container>
        
        {/* HERO TEXT */}
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs font-bold tracking-[0.2em] text-[#0b1f3a]">
            BUSINESS SOFTWARE
          </p>

          <h1 className="text-5xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#0a0a0a] sm:text-6xl md:text-6xl lg:text-7xl">
            Software for businesses
            <br />
            that keep things running.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-[#6b6b6b] md:text-lg">
            Ovelah brings your jobs, quotations, invoices and operations
            into one clear system.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="#product" className="btn-primary">
              Explore Ovelah ERP &rarr;
            </a>

            <a href="/contact" className="btn-secondary">
              Contact Us
            </a>
          </div>
        </div>

        {/* REAL ERP SCREENSHOT (with premium browser frame) */}
        <div id="product" className="mx-auto mt-16 max-w-6xl scroll-mt-28">
          <div className="rounded-2xl border border-[#e7e7e4] bg-[#f7f7f5] p-3 shadow-2xl shadow-black/5">
            <div className="rounded-xl border border-[#d5d5d0] bg-white overflow-hidden">
              
              {/* Subtle Browser Header */}
              <div className="flex h-10 items-center justify-between border-b border-[#e7e7e4] bg-[#fcfcfb] px-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d9d9d6]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d9d9d6]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#d9d9d6]"></span>
                </div>
                <div className="text-xs text-[#a9a9a9] tracking-tight">app.ovelah.com</div>
                <div className="w-10"></div>
              </div>

              {/* Actual Dashboard Image Content */}
              <div className="w-full">
                <Image
                  src="/dashboard.png"
                  alt="Ovelah ERP Dashboard"
                  width={1920}
                  height={1080}
                  className="h-auto w-full"
                  priority
                />
              </div>

            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}