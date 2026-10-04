import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import type { Organization, SoftwareApplication, FAQPage } from "schema-dts";
import WorkflowStepper from "@/components/home/WorkflowStepper";
import FaqAccordion from "@/components/home/FaqAccordion";
import { siteConfig } from "@/lib/config/placeholders";

export const metadata = constructMetadata({
  title: "Ovelah | Job, Quotation & Invoice Software",
  description: "Ovelah connects clients, locations, jobs, quotations and invoices in one system for service and contracting businesses. Start your 1-month free trial.",
  url: "https://ovelah.com/",
});

export default function Home() {
  
  const orgSchema: Organization = {
    "@type": "Organization",
    name: "Ovelah",
    url: "https://ovelah.com",
    logo: "https://ovelah.com/icon.svg",
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@ovelah.com",
      contactType: "customer service"
    }
  };

  const softwareSchema: SoftwareApplication = {
    "@type": "SoftwareApplication",
    name: "Ovelah",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "100",
      priceCurrency: "USD"
    }
  };

  // Compile valid FAQs only
  const rawFaqs = [
    { question: "What is Ovelah?", answer: "Ovelah is a business operations platform that connects clients, locations, jobs, quotations, and invoices into one seamless workflow." },
    { question: "Who is it for?", answer: "Service, maintenance, and contracting businesses—including HVAC, electrical, and facility management—that dispatch teams to physical locations." },
    { question: "How is it different from spreadsheets or a big ERP?", answer: "Spreadsheets disconnect your data. Traditional ERPs take months to implement. Ovelah offers the data structure of an ERP with the immediate usability of modern software." },
    { question: "Can I try it first?", answer: "Yes. We offer a 1-month free trial with no payment card required." },
    { question: "How is pricing calculated?", answer: "Pricing scales with your operational volume and user count. Subscriptions are billed monthly or annually, with taxes applied on top of the base fee." },
    { question: "Is my data secure and where is it hosted?", answer: "All customer records and invoices are encrypted. Data is securely hosted on Cloudflare infrastructure in the Asia region (Japan) to ensure high performance." },
    { question: "Can I export my data?", answer: siteConfig.faqs.exportData }
  ].filter(faq => faq.answer !== null);

  const faqSchema: FAQPage = {
    "@type": "FAQPage",
    mainEntity: rawFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer as string
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40 selection:bg-[#0b1f3a] selection:text-white">
        
        {/* 2. HERO */}
        <section className="relative overflow-hidden pb-20 md:pb-32">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Business Operations Software
              </p>
              <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-tight text-[#0a0a0a] leading-[1.1]">
                Run every job, quote and invoice from one connected system.
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Ovelah links your clients, locations, jobs, quotations and invoices, so field teams and the office always work from the same facts.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/contact" className="min-h-[44px] w-full rounded-md bg-[#0b1f3a] px-8 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto">
                  Request a Demo
                </Link>
                <Link href="/contact" className="min-h-[44px] w-full rounded-md border border-[#e7e7e4] bg-white px-8 py-3 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#f7f7f5] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto">
                  Start free trial
                </Link>
              </div>
              <p className="mt-4 text-xs text-[#6b6b6b]">1 month free. No card required.</p>
            </div>

            {/* Hero Visual */}
            <div className="mt-16 md:mt-24 relative max-w-5xl mx-auto">
              <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0b1f3a]/5 to-transparent blur-3xl rounded-full translate-y-12"></div>
              <div className="overflow-hidden rounded-xl border border-[#e7e7e4] bg-white shadow-2xl shadow-black/5">
                <div className="flex items-center gap-2 border-b border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
                </div>
                <div className="relative aspect-[16/9] w-full bg-white">
                  <Image 
                    src="/dash-hero.png" 
                    alt="Ovelah software dashboard showing active jobs and financial records" 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1000px"
                    className="object-cover object-top" 
                    priority 
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. TRUST STRIP */}
        <section className="border-y border-[#e7e7e4] bg-white py-12">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
              <p className="text-sm font-medium text-[#6b6b6b]">In daily use at</p>
              <div className="relative w-32 h-10">
                <Image src="/infinity-logo.png" alt="Infinity Engineering Solutions" fill sizes="128px" className="object-contain" loading="lazy" />
              </div>
              <p className="text-sm font-medium text-[#6b6b6b] border-l border-[#e7e7e4] pl-6 hidden md:block">HVAC & Electrical maintenance</p>
              <Link href="/clients/infinity-engineering-solutions" className="text-sm font-semibold text-[#0b1f3a] hover:underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] rounded-sm md:ml-4">
                View Case Study →
              </Link>
            </div>
          </Container>
        </section>

        {/* 4. THE PROBLEM */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                Operations shouldn't live in disconnected systems.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="rounded-2xl border border-[#e7e7e4] bg-white p-8">
                <svg className="w-6 h-6 text-[#6b6b6b] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">Dispatch in chat threads</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Jobs are assigned in messaging apps and the vital details are lost in the daily scroll.</p>
              </div>
              <div className="rounded-2xl border border-[#e7e7e4] bg-white p-8">
                <svg className="w-6 h-6 text-[#6b6b6b] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">History in spreadsheets</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Site configurations and equipment histories are scattered across fragmented files.</p>
              </div>
              <div className="rounded-2xl border border-[#e7e7e4] bg-white p-8">
                <svg className="w-6 h-6 text-[#6b6b6b] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="mb-3 text-lg font-semibold text-[#0a0a0a]">Invoices that wait</h3>
                <p className="text-[#6b6b6b] leading-relaxed">Completed work is billed late because the parts and labor details are hard to gather.</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-medium text-[#0a0a0a]">Ovelah replaces all three with one chain.</p>
            </div>
          </Container>
        </section>

        {/* 5. THE WORKFLOW */}
        <section className="bg-white border-y border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl mb-4">
                One connected workflow.
              </h2>
            </div>
            <WorkflowStepper />
          </Container>
        </section>

        {/* 6. FEATURE GRID (BENTO) */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Clients & Locations (Large) */}
              <div className="md:col-span-8 rounded-2xl border border-[#e7e7e4] bg-white p-8 sm:p-12 overflow-hidden flex flex-col justify-between group transition-shadow hover:shadow-md">
                <div className="mb-12">
                  <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">Clients & Locations</h3>
                  <p className="text-[#6b6b6b]">Every client with every site, mapped, with history attached.</p>
                </div>
                <div className="relative aspect-video w-full rounded-t-lg border border-[#e7e7e4] border-b-0 shadow-sm translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                  <Image src="/ui-locations.png" alt="Ovelah Locations Interface" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-top" loading="lazy" />
                </div>
              </div>

              {/* Jobs (Small) */}
              <div className="md:col-span-4 rounded-2xl border border-[#e7e7e4] bg-white p-8 sm:p-12 transition-shadow hover:shadow-md">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">Jobs</h3>
                <p className="text-[#6b6b6b]">Track each job from request to completion.</p>
              </div>

              {/* Quotations (Small) */}
              <div className="md:col-span-4 rounded-2xl border border-[#e7e7e4] bg-white p-8 sm:p-12 transition-shadow hover:shadow-md">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">Quotations</h3>
                <p className="text-[#6b6b6b]">Estimate labor and parts against the actual job.</p>
              </div>

              {/* Invoices (Large) */}
              <div className="md:col-span-8 rounded-2xl border border-[#e7e7e4] bg-white p-8 sm:p-12 overflow-hidden flex flex-col justify-between group transition-shadow hover:shadow-md">
                <div className="mb-12">
                  <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">Invoices & Balances</h3>
                  <p className="text-[#6b6b6b]">Bill from completed work and see what is outstanding.</p>
                </div>
                <div className="relative aspect-video w-full rounded-t-lg border border-[#e7e7e4] border-b-0 shadow-sm translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                  <Image src="/ui-quotes_2.png" alt="Ovelah Invoicing Interface" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover object-top" loading="lazy" />
                </div>
              </div>

              {/* Expenses (Medium) */}
              <div className="md:col-span-6 rounded-2xl border border-[#e7e7e4] bg-white p-8 sm:p-12 transition-shadow hover:shadow-md">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">Expenses & Assets</h3>
                <p className="text-[#6b6b6b]">Log job costs and the equipment you service.</p>
              </div>

              {/* Reporting (Medium) */}
              <div className="md:col-span-6 rounded-2xl border border-[#e7e7e4] bg-white p-8 sm:p-12 transition-shadow hover:shadow-md">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-2">Reporting</h3>
                <p className="text-[#6b6b6b]">A clear view of operations and profitability.</p>
              </div>

            </div>
          </Container>
        </section>

        {/* 7. INDUSTRIES */}
        <section className="bg-white border-y border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl mb-12 text-center">
              Built for teams that work on site.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Engineering & Maintenance", desc: "Manage service contracts without the chaos.", link: "/industries/engineering-maintenance" },
                { title: "HVAC & Electrical", desc: "Track equipment and quote accurately.", link: "/industries/hvac-electrical" },
                { title: "Facility Management", desc: "Organize requests across multi-building campuses.", link: "/industries/facility-management" },
                { title: "Construction", desc: "Keep project expenses tied to the job site.", link: "/industries/construction" }
              ].map((ind, i) => (
                <div key={i} className="rounded-xl border border-[#e7e7e4] p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-[#0a0a0a] mb-2">{ind.title}</h3>
                    <p className="text-sm text-[#6b6b6b] mb-6">{ind.desc}</p>
                  </div>
                  <Link href={ind.link} className="text-sm font-semibold text-[#0b1f3a] hover:underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] rounded-sm w-max">
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 8. CUSTOMER PROOF */}
        <section className="py-24 md:py-32">
          <Container>
            <div className="rounded-2xl border border-[#e7e7e4] bg-white p-8 md:p-16 shadow-sm">
              <div className="flex flex-col lg:flex-row gap-12 lg:items-center">
                <div className="lg:w-1/2">
                  <div className="relative w-40 h-12 mb-6">
                    <Image src="/infinity-logo.png" alt="Infinity Engineering Solutions" fill sizes="160px" className="object-contain object-left" loading="lazy" />
                  </div>
                  <p className="text-xl text-[#0a0a0a] leading-relaxed mb-8 font-medium">
                    Infinity Engineering Solutions uses Ovelah to manage jobs, quotations, and invoicing across multi-site maintenance operations.
                  </p>
                  <Link href="/clients/infinity-engineering-solutions" className="min-h-[44px] inline-flex items-center justify-center rounded-md bg-[#0b1f3a] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a]">
                    Read the case study
                  </Link>
                </div>
                
                {/* Conditionally Rendered Metrics/Quote via siteConfig */}
                <div className="lg:w-1/2 lg:pl-12 lg:border-l border-[#e7e7e4]">
                  {siteConfig.metrics.hoursSaved && siteConfig.metrics.daysFasterInvoicing && siteConfig.metrics.percentFewerUnbilled && (
                    <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-[#e7e7e4]">
                      <div>
                        <p className="text-3xl font-bold text-[#0a0a0a]">{siteConfig.metrics.hoursSaved}</p>
                        <p className="text-xs text-[#6b6b6b] mt-1">Hours saved/wk</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[#0a0a0a]">{siteConfig.metrics.daysFasterInvoicing}</p>
                        <p className="text-xs text-[#6b6b6b] mt-1">Days faster invoicing</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-[#0a0a0a]">{siteConfig.metrics.percentFewerUnbilled}%</p>
                        <p className="text-xs text-[#6b6b6b] mt-1">Fewer unbilled parts</p>
                      </div>
                    </div>
                  )}
                  {siteConfig.testimonials.infinityQuote && (
                    <blockquote>
                      <p className="text-lg italic text-[#6b6b6b] mb-4">"{siteConfig.testimonials.infinityQuote}"</p>
                      <footer className="text-sm font-semibold text-[#0a0a0a]">
                        {siteConfig.testimonials.infinityAuthorName}, {siteConfig.testimonials.infinityAuthorTitle}
                      </footer>
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 9. WHY OVELAH */}
        <section className="bg-white border-y border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                Practical software, not enterprise complexity.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-xl bg-[#f7f7f5] border border-[#e7e7e4]">
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Connected by design</h3>
                <p className="text-[#6b6b6b]">Clients, locations, jobs and invoices share one continuous record.</p>
              </div>
              <div className="p-8 rounded-xl bg-[#f7f7f5] border border-[#e7e7e4]">
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Clear for the field and the office</h3>
                <p className="text-[#6b6b6b]">One unified view of what is happening, preventing miscommunication.</p>
              </div>
              <div className="p-8 rounded-xl bg-[#f7f7f5] border border-[#e7e7e4]">
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Built around site work</h3>
                <p className="text-[#6b6b6b]">Made expressly for teams that dispatch, inspect, repair, and bill.</p>
              </div>
              <div className="p-8 rounded-xl bg-[#f7f7f5] border border-[#e7e7e4]">
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Quick to learn</h3>
                <p className="text-[#6b6b6b]">A clean interface that avoids months of expensive enterprise training.</p>
              </div>
            </div>
          </Container>
        </section>

        {/* 10. SECURITY SNAPSHOT */}
        <section className="py-12 border-b border-[#e7e7e4]">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm font-medium text-[#6b6b6b]">
              {siteConfig.security.encryptedData && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Encrypted data
                </div>
              )}
              {siteConfig.security.roleBasedAccess && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
                  Role-based access
                </div>
              )}
              {siteConfig.security.hostedInAsia && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
                  Hosted in the Asia region (Cloudflare)
                </div>
              )}
              {siteConfig.security.soc2Certified && (
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  SOC 2 Certified
                </div>
              )}
              <Link href="/security" className="text-[#0b1f3a] hover:underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] rounded-sm">
                Security Details →
              </Link>
            </div>
          </Container>
        </section>

        {/* 11. PRICING TEASER */}
        <section className="bg-white py-12 border-b border-[#e7e7e4]">
          <Container>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto bg-[#f7f7f5] border border-[#e7e7e4] rounded-xl p-6 md:p-8">
              <div>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-1">Pricing that scales with your operations.</h3>
                <p className="text-sm text-[#6b6b6b]">Custom monthly and annual plans. 1-month free trial, no card required.</p>
              </div>
              <Link href="/pricing" className="min-h-[44px] shrink-0 inline-flex items-center justify-center rounded-md bg-white border border-[#e7e7e4] px-6 py-2 text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-gray-50 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a]">
                See pricing
              </Link>
            </div>
          </Container>
        </section>

        {/* 12. FAQ SECTION */}
        <section className="py-24 md:py-32 border-b border-[#e7e7e4]">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="mb-12 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl text-center">
                Frequently Asked Questions
              </h2>
              <FaqAccordion faqs={rawFaqs.map(f => ({ question: f.question, answer: f.answer as string }))} />
            </div>
          </Container>
        </section>

        {/* 13. FINAL CTA */}
        <section className="bg-[#fcfcfb] py-32 text-center">
          <Container>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
              Tell us how your business works.
            </h2>
            <p className="mx-auto mb-10 max-w-xl text-lg text-[#6b6b6b]">
              We'll show you how Ovelah fits.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="min-h-[44px] w-full rounded-md bg-[#0b1f3a] px-8 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto">
                Request a Demo
              </Link>
              <Link href="/contact" className="min-h-[44px] w-full rounded-md border border-[#e7e7e4] bg-white px-8 py-3 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#f7f7f5] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto">
                Start free trial
              </Link>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}