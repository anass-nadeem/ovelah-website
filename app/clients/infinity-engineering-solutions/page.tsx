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
    { title: "Client & Location", desc: "A new job is initiated and mapped to a specific customer site." },
    { title: "Job Creation", desc: "Work requirements are detailed and assigned to the field team." },
    { title: "Quotation", desc: "Estimates are generated against the specific job parameters." },
    { title: "Service Report", desc: "Field teams submit completion documentation directly into the system." },
    { title: "Invoice", desc: "Billing is automatically generated based on the completed service." },
    { title: "Payment", desc: "Receivables are tracked to close the operational loop." }
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pb-24 pt-20 md:pb-32 md:pt-24">
        <Container>
          
          {/* Executive Header */}
          <div className="border-b border-[#e7e7e4] pb-12 md:pb-16">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
              Client Case Study
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl lg:text-6xl">
              Infinity Engineering Solutions
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[#0b1f3a] md:text-2xl">
              Managing engineering, HVAC, and maintenance operations by keeping clients, locations, jobs, and financial records connected in a single system.
            </p>
          </div>

          {/* Two-Column Editorial Layout */}
          <div className="mt-12 flex flex-col gap-16 md:mt-16 lg:flex-row lg:gap-24">
            
            {/* Left Sidebar (Sticky Metadata) */}
            <aside className="lg:w-1/3">
              <div className="sticky top-24 rounded-xl border border-[#e7e7e4] bg-white p-8 shadow-sm">
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-[#0a0a0a]">
                  Profile Overview
                </h3>
                
                <div className="mb-8">
                  <p className="mb-2 text-xs font-semibold text-[#6b6b6b]">Industry</p>
                  <p className="text-sm font-medium text-[#0b1f3a]">Engineering & Maintenance</p>
                </div>

                <div>
                  <p className="mb-4 text-xs font-semibold text-[#6b6b6b]">Key Clients Managed via Ovelah</p>
                  <ul className="flex flex-col gap-3">
                    {clients.map((client) => (
                      <li key={client} className="flex items-start gap-2 text-sm font-medium text-[#0b1f3a]">
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#6b6b6b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                        {client}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>

            {/* Right Column (Deep Dive Content) */}
            <article className="lg:w-2/3">
              <div className="prose prose-lg max-w-none text-[#6b6b6b]">
                <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#0a0a0a] md:text-3xl">
                  The Operational Engine
                </h2>
                
                <div className="mb-12 flex flex-col gap-8">
                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Clients & Locations</h3>
                    <p className="text-base leading-relaxed">Rather than relying on disconnected spreadsheets, all customers and their individual geographic sites or branches are organized natively in one place, ensuring field teams always have exact coordinates and history.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Jobs & Service Reports</h3>
                    <p className="text-base leading-relaxed">Service requests, assigned maintenance work, and completed jobs are tracked from start to finish. This creates an unbroken chain of custody for every task, meaning management never has to guess the status of a deployment.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Quotations & Invoices</h3>
                    <p className="text-base leading-relaxed">Financial documentation is generated directly against the work performed. Quotations seamlessly transition into service documentation, which directly informs the final invoicing, eliminating redundant data entry.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Assets, Expenses & Credit</h3>
                    <p className="text-base leading-relaxed">A business is more than just jobs. Equipment assets, job-specific expenses, outstanding customer balances, and credit positions remain completely visible alongside the daily workflow.</p>
                  </div>
                </div>

                {/* Vertical Process Timeline */}
                <div className="mt-16 border-t border-[#e7e7e4] pt-16">
                  <h2 className="mb-10 text-2xl font-semibold tracking-tight text-[#0a0a0a] md:text-3xl">
                    The System Workflow
                  </h2>
                  
                  <div className="relative border-l-2 border-[#e7e7e4] pl-8">
                    {workflowSteps.map((step, index) => (
                      <div key={step.title} className="relative mb-10 last:mb-0">
                        {/* Timeline Node */}
                        <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-[#0b1f3a]"></div>
                        
                        <h4 className="text-lg font-semibold text-[#0b1f3a]">{step.title}</h4>
                        <p className="mt-1 text-base text-[#6b6b6b]">{step.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12 rounded-lg bg-[#f7f7f5] p-6 border border-[#e7e7e4]">
                    <p className="text-sm font-medium leading-relaxed text-[#0a0a0a]">
                      While this workflow moves a job forward, <span className="font-bold text-[#0b1f3a]">Expenses, Assets, Balance & Credit</span> run in parallel to give management the complete financial picture.
                    </p>
                  </div>
                </div>

              </div>
            </article>

          </div>
        </Container>
      </main>

      {/* The Closing Statement */}
      <section className="bg-[#0b1f3a] py-24 text-center text-white md:py-32">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            One business. <br className="md:hidden" />Multiple clients. <br className="md:hidden" />One connected system.
          </h2>
        </Container>
      </section>

      <Footer />
    </>
  );
}