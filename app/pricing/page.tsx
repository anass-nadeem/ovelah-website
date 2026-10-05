import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";
import type { SoftwareApplication, FAQPage } from "schema-dts";
import PricingCard from "@/components/pricing/PricingCard";
import FaqAccordion from "@/components/home/FaqAccordion";

export const metadata = constructMetadata({
  title: "Pricing | Ovelah",
  description: "Ovelah pricing scales with your operations, starting from $100 per month. Get a custom quote based on your team size and job volume.",
  url: "https://ovelah.com/pricing",
});

export default function PricingPage() {
  
  const softwareSchema: SoftwareApplication = {
    "@type": "SoftwareApplication",
    name: "Ovelah",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "100",
      priceCurrency: "USD"
    }
  };

  const rawFaqs = [
    { question: "Is there a free trial?", answer: "Yes, we offer a one-month free trial with no payment card required to start." },
    { question: "How is the price calculated?", answer: "Pricing is calculated based on three factors: the number of active users, your operational volume (locations and jobs), and any custom implementation or training needs." },
    { question: "Can I pay monthly or annually?", answer: "Yes, you can choose to be billed monthly or annually. We often provide a discount for annual commitments." },
    { question: "Are taxes included?", answer: "No, all fees are stated exclusive of taxes. You are responsible for paying all applicable taxes (such as sales tax or VAT) on your Subscription." },
    { question: "What is the refund policy?", answer: "If you request a refund within seven (7) days of a payment for a new Subscription or renewal, we will refund that payment." },
    { question: "What happens to my data if I cancel?", answer: "Your data is retained in a locked state for 30 days. After 30 days, it is permanently deleted. You should export your data before cancelling." },
    { question: "Do you support teams outside Pakistan?", answer: "Yes, we support businesses internationally. Our data is securely hosted in the Asia region to serve a global customer base." },
    { question: "Is support included?", answer: "Yes, support is available 24/7 upon request for all active customers." }
  ];

  const faqSchema: FAQPage = {
    "@type": "FAQPage",
    mainEntity: rawFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32 selection:bg-[#0b1f3a] selection:text-white">
        
        {/* 1. HERO */}
        <section className="pb-16">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Pricing
              </p>
              <h1 className="mb-6 text-4xl sm:text-5xl font-semibold tracking-tight text-[#0a0a0a] leading-[1.1]">
                Pricing that scales with your operations.
              </h1>
              <p className="text-lg leading-relaxed text-[#6b6b6b]">
                Start at $100 per month. Your final price reflects your team size, job volume and onboarding needs. No arbitrary tiers.
              </p>
              <p className="mt-4 text-sm text-[#6b6b6b] font-medium">1 month free. No card required.</p>
            </div>
          </Container>
        </section>

        {/* 2. MAIN PRICE CARD */}
        <section className="pb-24">
          <Container>
            <PricingCard />
          </Container>
        </section>

        {/* 3. HOW WE CALCULATE YOUR QUOTE */}
        <section className="bg-white border-y border-[#e7e7e4] py-24">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] mb-12 text-center">
                How we calculate your quote
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="flex flex-col">
                  <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                  <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">1. Active users</h3>
                  <p className="text-[#6b6b6b] leading-relaxed text-sm">The number of dispatchers, managers and field technicians who use the system.</p>
                </div>
                <div className="flex flex-col">
                  <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                  <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">2. Operational volume</h3>
                  <p className="text-[#6b6b6b] leading-relaxed text-sm">The scale of your operations, including active locations and monthly job volume.</p>
                </div>
                <div className="flex flex-col">
                  <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">3. Implementation</h3>
                  <p className="text-[#6b6b6b] leading-relaxed text-sm">Data migration and team training, if needed (quoted separately and only when required).</p>
                </div>
              </div>
              <p className="text-center text-sm font-medium text-[#0a0a0a] mt-12 pt-8 border-t border-[#e7e7e4]">
                You will always see the full price before you commit.
              </p>
            </div>
          </Container>
        </section>

        {/* 4. THE PROCESS */}
        <section className="py-24 border-b border-[#e7e7e4]">
          <Container>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="flex flex-col items-center md:items-start">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f7f5] border border-[#e7e7e4] text-xs font-bold text-[#0a0a0a] mb-4">1</span>
                <span className="text-[15px] font-medium text-[#0a0a0a]">Tell us about your operations</span>
              </div>
              <svg className="w-5 h-5 text-[#e7e7e4] rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              <div className="flex flex-col items-center md:items-start">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f7f5] border border-[#e7e7e4] text-xs font-bold text-[#0a0a0a] mb-4">2</span>
                <span className="text-[15px] font-medium text-[#0a0a0a]">Receive a clear quote</span>
              </div>
              <svg className="w-5 h-5 text-[#e7e7e4] rotate-90 md:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              <div className="flex flex-col items-center md:items-start">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0b1f3a] text-xs font-bold text-white mb-4">3</span>
                <span className="text-[15px] font-medium text-[#0a0a0a]">Start your free trial</span>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. WHAT YOU CAN EXPECT (TRUST GRID) */}
        <section className="bg-[#f7f7f5] border-b border-[#e7e7e4] py-24">
          <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-6">
                <h3 className="font-semibold text-[#0a0a0a] mb-2">1-month free trial</h3>
                <p className="text-sm text-[#6b6b6b]">No payment details needed to start your evaluation.</p>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-6">
                <h3 className="font-semibold text-[#0a0a0a] mb-2">7-day refund</h3>
                <p className="text-sm text-[#6b6b6b]">Request a refund within 7 days of a payment if you change your mind.</p>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-6">
                <h3 className="font-semibold text-[#0a0a0a] mb-2">Monthly or annual</h3>
                <p className="text-sm text-[#6b6b6b]">Choose the billing cycle that suits your business cash flow.</p>
              </div>
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-6">
                <h3 className="font-semibold text-[#0a0a0a] mb-2">Your data stays yours</h3>
                <p className="text-sm text-[#6b6b6b]">After cancellation, data is held locked for 30 days, then deleted securely.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* 6. FAQ */}
        <section className="bg-white py-24 border-b border-[#e7e7e4]">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl text-center">
                Pricing & Account FAQ
              </h2>
              <FaqAccordion faqs={rawFaqs} />
            </div>
          </Container>
        </section>

        {/* 7. FINAL CTA */}
        <section className="bg-[#fcfcfb] py-32 text-center">
          <Container>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
              Get a quote in minutes.
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact?interest=pricing" className="min-h-[44px] w-full rounded-md bg-[#0b1f3a] px-8 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto flex items-center justify-center">
                Request a Custom Quote
              </Link>
              <Link href="/contact" className="min-h-[44px] w-full rounded-md border border-[#e7e7e4] bg-white px-8 py-3 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#f7f7f5] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto flex items-center justify-center">
                Book a Demo
              </Link>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}