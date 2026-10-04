import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Pricing | Ovelah",
  description: "Ovelah pricing is tailored to your operational scale. Request a custom quote based on your user count, integrations, and feature requirements.",
  url: "https://ovelah.com/pricing",
});

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl">
              Pricing built for your scale.
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6b6b6b]">
              We do not believe in arbitrary user tiers. Ovelah is priced based on the specific operational complexity and scale of your business.
            </p>
          </div>

          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="rounded-2xl border border-[#e7e7e4] bg-white p-10 shadow-sm">
              <h2 className="text-2xl font-semibold text-[#0a0a0a] mb-2">Custom Licensing</h2>
              <p className="text-[#6b6b6b] mb-8">Designed for service, maintenance, and contracting businesses.</p>
              
              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-start gap-3 text-[#0a0a0a]"><svg className="mt-1 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Full Job & Location Management</li>
                <li className="flex items-start gap-3 text-[#0a0a0a]"><svg className="mt-1 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Quotation & Invoice Engine</li>
                <li className="flex items-start gap-3 text-[#0a0a0a]"><svg className="mt-1 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Expense & Asset Tracking</li>
                <li className="flex items-start gap-3 text-[#0a0a0a]"><svg className="mt-1 h-4 w-4 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Priority Technical Support</li>
              </ul>

              <Link href="/contact" className="block w-full rounded-md bg-[#0b1f3a] px-8 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-[#0a1526]">
                Request a Custom Quote
              </Link>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-xl font-semibold text-[#0a0a0a] mb-6">How we calculate your quote:</h3>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-semibold text-[#0b1f3a] mb-1">1. Active Users</h4>
                  <p className="text-sm text-[#6b6b6b]">The number of dispatchers, managers, and field technicians accessing the system.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1f3a] mb-1">2. Operational Volume</h4>
                  <p className="text-sm text-[#6b6b6b]">The scale of your operations, including active locations and monthly job volume.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0b1f3a] mb-1">3. Implementation Requirements</h4>
                  <p className="text-sm text-[#6b6b6b]">Any specialized data migration or training required to onboard your team successfully.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}