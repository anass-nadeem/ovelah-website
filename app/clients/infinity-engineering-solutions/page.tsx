import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Image from "next/image";

export default function InfinityCaseStudy() {
  const clients = [
    "KFC Pakistan North",
    "Transworld",
    "National Police Academy",
    "Gubloo Technologies",
    "Cosmesurge Hospital",
    "FIA Academy",
    "NACTA Head office Islamabad"
  ];

  const workflowSteps = [
    { 
      title: "Client & Location", 
      desc: "A new job is initiated, categorized by client account, and precisely mapped to a specific geographic customer site or branch." 
    },
    { 
      title: "Job Creation", 
      desc: "Technical requirements, required materials, and timelines are detailed before being dispatched to the appropriate field engineering team." 
    },
    { 
      title: "Quotation", 
      desc: "Accurate cost estimates are generated against the specific job parameters, ensuring all anticipated labor and parts are accounted for prior to client approval." 
    },
    { 
      title: "Service Report", 
      desc: "Upon completion, field teams submit detailed documentation—including tasks performed, issues resolved, and materials consumed—directly into the system as proof of work." 
    },
    { 
      title: "Invoice", 
      desc: "Billing is rapidly generated based on the approved quotation and the verified service report, eliminating manual data entry errors." 
    },
    { 
      title: "Payment", 
      desc: "Receivables are tracked, and customer balances are automatically updated to close the operational loop and secure cash flow." 
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pb-24 pt-20 md:pb-32 md:pt-24">
        <Container>
          
          {/* Executive Header */}
          <div className="flex flex-col-reverse justify-between gap-10 border-b border-[#e7e7e4] pb-12 md:flex-row md:items-start md:pb-16">
            
            {/* Left: Text Content */}
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                Client Case Study
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl lg:text-6xl">
                Infinity Engineering Solutions
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#0b1f3a] md:text-2xl">
                Managing engineering, HVAC, and maintenance operations by keeping clients, locations, jobs, and financial records connected in a single system.
              </p>
            </div>

            {/* Right: Logo & Visit Button */}
            <div className="flex shrink-0 flex-col items-start gap-4 md:items-center md:gap-6">
              <div className="relative h-[120px] w-[260px] md:h-[160px] md:w-[320px] lg:h-[180px] lg:w-[360px]">
                <Image
                  src="/infinity-logo.png"
                  alt="Infinity Engineering Solutions Logo"
                  fill
                  className="object-contain object-left md:object-center"
                  priority
                />
              </div>
              <a 
                href="https://www.infinityies.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-semibold text-blue-600 underline underline-offset-4 transition-colors hover:text-blue-800 md:rounded-md md:border md:border-[#0b1f3a] md:px-6 md:py-2 md:text-[#0b1f3a] md:no-underline md:hover:bg-[#0b1f3a] md:hover:text-white"
              >
                Visit Infinity
              </a>
            </div>
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
                      <li key={client} className="flex items-center gap-3 text-sm font-medium text-[#0b1f3a]">
                        <svg className="h-2 w-2 shrink-0 fill-[#6b6b6b]" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="4" />
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
                    <p className="text-base leading-relaxed">Rather than relying on disconnected spreadsheets or fragmented WhatsApp threads, all customers and their individual geographic sites are organized natively in one centralized database. For a company managing operations across multiple KFC branches or hospital wings, this means field teams always have exact coordinates, site-specific requirements, and historical maintenance data at their fingertips before they even arrive on-site.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Jobs & Service Reports</h3>
                    <p className="text-base leading-relaxed">Service requests, assigned maintenance work, and completed jobs are tracked from inception to resolution. This creates an unbroken chain of custody for every task. Management never has to guess the status of a deployment, and technicians can log specific interventions, parts used, and hours worked. The result is a transparent system that guarantees accountability and provides irrefutable proof of work for the client.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Quotations & Invoices</h3>
                    <p className="text-base leading-relaxed">Financial documentation is generated directly against the specific scope of work performed. Once a job is marked complete, the service documentation directly informs the final invoicing process. By tightly coupling the operational work with the financial billing, Ovelah prevents revenue leakage from forgotten parts or undocumented labor, drastically accelerating the cash conversion cycle.</p>
                  </div>

                  <div>
                    <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Assets, Expenses & Credit</h3>
                    <p className="text-base leading-relaxed">Running a maintenance operation involves significant overhead beyond just labor. Physical equipment assets, fleet vehicles, and job-specific out-of-pocket expenses are tracked seamlessly within the platform. Furthermore, outstanding customer balances and real-time credit positions remain completely visible to management. This ensures that scheduling and financial decisions are never made in a vacuum, providing a holistic view of the company's profitability.</p>
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

                  <div className="mt-12 rounded-lg border border-[#e7e7e4] bg-[#f7f7f5] p-6">
                    <p className="text-sm font-medium leading-relaxed text-[#0a0a0a]">
                      While this workflow moves a job forward, <span className="font-bold text-[#0b1f3a]">Expenses, Assets, Balance & Credit</span> run in parallel to give management the complete financial picture around every deployment.
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