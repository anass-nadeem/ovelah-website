import Link from "next/link";
import Image from "next/image";
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
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="#product"
              className="w-full sm:w-auto rounded-md bg-[#0b1f3a] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0b1f3a]/90 shadow-sm"
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

        {/* Real ERP Screenshot Asset */}
        <div className="mx-auto max-w-5xl rounded-xl border border-[#e7e7e4] bg-white p-2 shadow-xl shadow-black/[0.03]">
          <div className="overflow-hidden rounded-lg bg-[#f7f7f5] border border-[#e7e7e4]">
            <Image
              src="/dashboard.png" 
              alt="Ovelah ERP Dashboard Interface"
              width={1920}
              height={1080}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}