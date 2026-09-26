import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        
        {/* HERO */}
        <section className="pb-20 md:pb-32">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Software for businesses that keep things moving.
              </h1>
            </div>
          </Container>
        </section>

        {/* EDITORIAL CONTENT */}
        <section className="bg-white border-t border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Column (Sticky Label) */}
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-[#0a0a0a]">
                    The Ovelah Mission
                  </h2>
                </div>
              </div>

              {/* Right Column (Copy) */}
              <div className="lg:w-2/3 prose prose-lg max-w-none text-[#6b6b6b]">
                <p className="text-2xl leading-relaxed text-[#0a0a0a] font-medium mb-12">
                  Ovelah builds practical business software for companies that manage real operational work.
                </p>
                <p>
                  We focus on the workflows businesses depend on every day—customers, locations, jobs, quotations, invoices, and the critical information connecting them.
                </p>
                <p className="mb-16">
                  Too often, service and maintenance companies are forced to choose between fragmented spreadsheets or massive, overly-complex enterprise systems that require months of training. Our approach is simple: understand how these businesses actually work, then build software that makes those workflows clearer, faster, and easier to manage.
                </p>

                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-6">Our Approach</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="rounded-lg bg-[#f7f7f5] p-6 border border-[#e7e7e4]">
                    <h4 className="font-semibold text-[#0a0a0a] mb-2">Product First</h4>
                    <p className="text-base m-0">We believe credibility comes from real product capability and real usage, not marketing buzzwords.</p>
                  </div>
                  <div className="rounded-lg bg-[#f7f7f5] p-6 border border-[#e7e7e4]">
                    <h4 className="font-semibold text-[#0a0a0a] mb-2">Built Around Real Work</h4>
                    <p className="text-base m-0">Our platform is structurally designed to reflect the realities of physical dispatch and fieldwork.</p>
                  </div>
                  <div className="rounded-lg bg-[#f7f7f5] p-6 border border-[#e7e7e4]">
                    <h4 className="font-semibold text-[#0a0a0a] mb-2">Clear Interfaces</h4>
                    <p className="text-base m-0">Software should not require a manual. We prioritize clean typography, whitespace, and logical navigation.</p>
                  </div>
                  <div className="rounded-lg bg-[#f7f7f5] p-6 border border-[#e7e7e4]">
                    <h4 className="font-semibold text-[#0a0a0a] mb-2">Practical Systems</h4>
                    <p className="text-base m-0">We focus on solving actual operational bottlenecks rather than building theoretical enterprise complexity.</p>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </section>

      </main>
      
      <Footer />
    </>
  );
}