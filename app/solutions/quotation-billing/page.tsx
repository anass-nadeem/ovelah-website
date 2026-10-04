import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Quotation & Billing Software | Ovelah",
  description: "Prevent revenue leakage by connecting field service reports directly to your final invoicing and billing process.",
  url: "https://ovelah.com/solutions/quotation-billing",
});

export default function QuotationBillingSolution() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl">
              Quotation & Billing
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6b6b6b]">
              Seamlessly transition from operational execution to financial documentation without losing billable materials in the gap.
            </p>
          </div>
          {/* Minimal placeholder for Task 3 requirement */}
          <div className="rounded-xl border border-[#e7e7e4] bg-white p-12 text-center">
            <p className="text-[#6b6b6b] mb-8">Detailed commercial workflow coming soon. [CONFIRM FEATURE SPECIFICS]</p>
            <Link href="/contact" className="rounded-md bg-[#0b1f3a] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526]">
              Request a Demo
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}