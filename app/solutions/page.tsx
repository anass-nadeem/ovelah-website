import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Multi-Location Operations",
      problem: "Managing a single client who has dozens of disparate branch locations leads to scheduling chaos and lost historical maintenance data.",
      solution: "Ovelah structurally separates the 'Client' entity from the 'Location' entity. This allows you to attach jobs, assets, and service history to specific geographic sites while rolling all financial billing up to the parent client account."
    },
    {
      title: "Job & Service Management",
      problem: "Field technicians rely on fragmented WhatsApp messages to receive dispatch instructions and report completed work.",
      solution: "Every service request becomes a trackable Job in Ovelah. Dispatchers provide clear requirements, and the system maintains an unbroken chain of custody until the job is resolved, providing irrefutable proof of work."
    },
    {
      title: "Quotation & Billing Leakage",
      problem: "Parts and labor hours expended in the field are forgotten by the time the back office generates the final invoice.",
      solution: "Ovelah tightly couples operational execution with financial documentation. Final invoices are generated directly against the approved quotation and the verified service report, ensuring every billable item is captured."
    },
    {
      title: "Business Reporting",
      problem: "Management makes scheduling and financial decisions in a vacuum because operational costs are tracked in completely different software than revenue.",
      solution: "By tracking physical assets, job-specific expenses, and outstanding customer balances in the same database, Ovelah provides a holistic, real-time view of your company's operational profitability."
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
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Solutions built for the real world.
              </h1>
              <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Ovelah doesn't just digitize paperwork. It structurally organizes your data to solve the most common bottlenecks in service and maintenance operations.
              </p>
            </div>
          </Container>
        </section>

        {/* SOLUTIONS LIST */}
        <section className="bg-white border-y border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <div className="flex flex-col gap-24">
              {solutions.map((item, index) => (
                <div key={index} className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
                  {/* Title Column */}
                  <div className="lg:w-1/3">
                    <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] md:text-3xl">
                      {item.title}
                    </h2>
                  </div>
                  
                  {/* Problem/Solution Column */}
                  <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <div className="rounded-xl bg-[#f7f7f5] p-8 border border-[#e7e7e4]">
                      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#6b6b6b]">The Problem</h3>
                      <p className="text-[#0a0a0a] leading-relaxed">{item.problem}</p>
                    </div>
                    <div>
                      <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">How Ovelah Solves It</h3>
                      <p className="text-[#6b6b6b] leading-relaxed">{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA */}
        <section className="py-24 text-center md:py-32">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl mb-8 text-[#0a0a0a]">
              See how we can solve your operational bottlenecks.
            </h2>
            <Link href="/contact" className="inline-block rounded-md bg-[#0b1f3a] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526]">
              Request a Demo
            </Link>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}