import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function InfinityCaseStudy() {
  const clients = [
    "KFC Pakistan North",
    "Transworld",
    "National Police Academy",
    "Gubloo Technologies",
    "Cosmesurge Hospital"
  ];

  const workflowSteps = [
    "Client", "Location", "Job", "Quotation", "Service Report", "Invoice", "Payment"
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pb-20 pt-20 md:pb-32 md:pt-32">
        <Container>
          
          {/* Hero Section */}
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-5xl leading-tight">
              Infinity Engineering Solutions
            </h1>
            <p className="text-lg font-medium text-[#0b1f3a] md:text-xl">
              Managing engineering & maintenance operations with Ovelah
            </p>
            <p className="mx-auto mt-8 text-base leading-relaxed text-[#6b6b6b] md:text-lg">
              Infinity Engineering Solutions manages engineering, HVAC and maintenance work for multiple organizations through Ovelah, keeping clients, locations, jobs, quotations, service reports, invoices and financial records connected in one system.
            </p>
          </div>

          {/* Managed Clients - Pill Layout */}
          <div className="mx-auto mt-20 max-w-4xl border-t border-[#e7e7e4] pt-16 text-center">
            <h3 className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
              Clients Managed Through Ovelah
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {clients.map((client) => (
                <span key={client} className="rounded-full border border-[#d5d5d0] bg-white px-5 py-2 text-sm font-medium text-[#0a0a0a]">
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* How Infinity uses Ovelah - Grid */}
          <div className="mx-auto mt-24 max-w-5xl">
            <h2 className="mb-12 text-center text-2xl font-semibold tracking-tight text-[#0a0a0a] md:text-3xl">
              How Infinity uses Ovelah
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
              
              <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm border border-[#e7e7e4]">
                <h4 className="font-semibold text-[#0b1f3a]">Clients & Locations</h4>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">All customers and their individual sites/branches are organized in one place.</p>
              </div>
              
              <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm border border-[#e7e7e4]">
                <h4 className="font-semibold text-[#0b1f3a]">Jobs & Service Reports</h4>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">Service requests, assigned work and completed jobs are tracked from start to finish.</p>
              </div>
              
              <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm border border-[#e7e7e4]">
                <h4 className="font-semibold text-[#0b1f3a]">Quotations & Invoices</h4>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">Quotations are created against work, followed by service documentation and invoicing.</p>
              </div>
              
              <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm border border-[#e7e7e4]">
                <h4 className="font-semibold text-[#0b1f3a]">Expenses</h4>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">Business and job-related expenses are recorded and tracked.</p>
              </div>
              
              <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm border border-[#e7e7e4]">
                <h4 className="font-semibold text-[#0b1f3a]">Assets</h4>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">Equipment and business assets can be maintained within the system.</p>
              </div>
              
              <div className="flex flex-col gap-2 rounded-xl bg-white p-6 shadow-sm border border-[#e7e7e4]">
                <h4 className="font-semibold text-[#0b1f3a]">Balance & Credit</h4>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">Outstanding customer balances, credit and payment positions remain visible.</p>
              </div>

            </div>
          </div>

          {/* The Workflow */}
          <div className="mx-auto mt-24 max-w-4xl rounded-2xl bg-[#0b1f3a] p-8 text-center text-white md:p-16">
            <h3 className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-[#a3a3a3]">
              The Workflow
            </h3>
            
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {workflowSteps.map((step, index) => (
                <div key={step} className="flex items-center gap-2 md:gap-4">
                  <span className="font-medium text-[#fcfcfb] md:text-lg">{step}</span>
                  {index !== workflowSteps.length - 1 && (
                    <svg className="h-4 w-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-[#a3a3a3] md:text-base">
              While <span className="font-semibold text-white">Expenses, Assets, Balance & Credit</span> give management the financial and operational picture around that workflow.
            </p>
          </div>

        </Container>
      </main>

      {/* The Closing Statement */}
      <section className="bg-white py-24 text-center">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
            One business. <br className="md:hidden" />Multiple clients. <br className="md:hidden" />One connected system.
          </h2>
        </Container>
      </section>

      <Footer />
    </>
  );
}