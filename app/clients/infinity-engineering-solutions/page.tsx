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
    "Client", "Location", "Job", "Quote", "Service Report", "Invoice", "Payment"
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pb-20 pt-24 md:pb-32 md:pt-32">
        <Container>
          
          {/* Premium Hero Section */}
          <div className="mx-auto max-w-4xl text-center">
            {/* Case Study Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e7e7e4] bg-white px-4 py-1.5 shadow-sm">
              <div className="h-2 w-2 rounded-full bg-[#0b1f3a]"></div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0a0a0a]">
                Case Study
              </span>
            </div>
            
            <h1 className="mb-8 text-4xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-6xl leading-[1.1]">
              Infinity Engineering Solutions
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl md:leading-loose">
              Managing engineering, HVAC, and maintenance work for multiple organizations by keeping clients, locations, jobs, and financial records connected in one absolute truth.
            </p>
          </div>

          {/* Editorial Client List (Replacing clunky pills) */}
          <div className="mx-auto mt-24 max-w-5xl border-y border-[#e7e7e4] py-12 text-center">
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-[#a3a3a3]">
              Clients Managed Through Ovelah
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {clients.map((client) => (
                <span key={client} className="text-sm font-semibold text-[#6b6b6b] transition-colors hover:text-[#0b1f3a] md:text-base">
                  {client}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Box Grid - How Infinity uses Ovelah */}
          <div className="mx-auto mt-32 max-w-5xl">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                The Operational Engine
              </h2>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              
              {/* Row 1 */}
              <div className="group flex flex-col justify-between rounded-3xl bg-[#f7f7f5] p-8 transition-colors hover:bg-[#f0f0ed] md:col-span-2 md:p-10">
                <h4 className="mb-4 text-xl font-semibold text-[#0b1f3a]">Jobs & Service Reports</h4>
                <p className="max-w-md text-base leading-relaxed text-[#6b6b6b]">Service requests, assigned work, and completed jobs are tracked from start to finish without letting a single status slip through the cracks.</p>
              </div>
              
              <div className="group flex flex-col justify-between rounded-3xl bg-[#f7f7f5] p-8 transition-colors hover:bg-[#f0f0ed] md:col-span-1 md:p-10">
                <h4 className="mb-4 text-xl font-semibold text-[#0b1f3a]">Clients & Locations</h4>
                <p className="text-base leading-relaxed text-[#6b6b6b]">All customers and their individual sites and branches organized natively.</p>
              </div>
              
              {/* Row 2 */}
              <div className="group flex flex-col justify-between rounded-3xl bg-[#f7f7f5] p-8 transition-colors hover:bg-[#f0f0ed] md:col-span-1 md:p-10">
                <h4 className="mb-4 text-xl font-semibold text-[#0b1f3a]">Quotes & Invoicing</h4>
                <p className="text-base leading-relaxed text-[#6b6b6b]">Quotations created against work, followed by service documentation and final billing.</p>
              </div>
              
              <div className="group flex flex-col justify-between rounded-3xl bg-[#f7f7f5] p-8 transition-colors hover:bg-[#f0f0ed] md:col-span-1 md:p-10">
                <h4 className="mb-4 text-xl font-semibold text-[#0b1f3a]">Expenses & Assets</h4>
                <p className="text-base leading-relaxed text-[#6b6b6b]">Job-related expenses and physical equipment are tracked seamlessly.</p>
              </div>
              
              <div className="group flex flex-col justify-between rounded-3xl bg-[#f7f7f5] p-8 transition-colors hover:bg-[#f0f0ed] md:col-span-1 md:p-10">
                <h4 className="mb-4 text-xl font-semibold text-[#0b1f3a]">Balance & Credit</h4>
                <p className="text-base leading-relaxed text-[#6b6b6b]">Live visibility into outstanding customer balances and exact payment positions.</p>
              </div>

            </div>
          </div>

          {/* Premium Pipeline UI - The Workflow */}
          <div className="mx-auto mt-32 max-w-5xl overflow-hidden rounded-[2rem] bg-[#0b1f3a] p-10 shadow-2xl md:p-20">
            <h3 className="mb-16 text-center text-xs font-bold uppercase tracking-[0.2em] text-[#8fa3ba]">
              The Lifecycle Workflow
            </h3>
            
            {/* Visual Pipeline */}
            <div className="relative mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 md:flex-row md:items-center md:gap-0">
              
              {/* Connecting Background Line (Desktop only) */}
              <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-[#1e3a5f] md:block"></div>

              {workflowSteps.map((step, index) => (
                <div key={step} className="relative z-10 flex flex-row items-center gap-4 md:flex-col md:gap-4">
                  {/* Pipeline Node */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#0b1f3a] bg-[#38bdf8] shadow-[0_0_0_4px_rgba(11,31,58,1)] transition-transform hover:scale-110 md:h-6 md:w-6"></div>
                  {/* Label */}
                  <span className="text-sm font-semibold text-white md:absolute md:-bottom-10 md:whitespace-nowrap">{step}</span>
                  
                  {/* Mobile Connecting Line */}
                  {index !== workflowSteps.length - 1 && (
                    <div className="absolute left-5 top-10 h-full w-0.5 bg-[#1e3a5f] md:hidden"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mx-auto mt-16 max-w-2xl border-t border-[#1e3a5f] pt-10 text-center md:mt-28">
              <p className="text-sm leading-relaxed text-[#8fa3ba] md:text-base md:leading-loose">
                While <span className="font-semibold text-white">Expenses, Assets, Balance & Credit</span> give management the financial and operational picture wrapped entirely around that workflow.
              </p>
            </div>
          </div>

        </Container>
      </main>

      {/* The Closing Statement */}
      <section className="border-t border-[#e7e7e4] bg-white py-32 text-center">
        <Container>
          <h2 className="text-4xl font-semibold tracking-[-0.02em] text-[#0a0a0a] md:text-6xl leading-[1.1]">
            One business. <br className="hidden md:block" />
            <span className="text-[#6b6b6b]">Multiple clients.</span> <br />
            One connected system.
          </h2>
        </Container>
      </section>

      <Footer />
    </>
  );
}