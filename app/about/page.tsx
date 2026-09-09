import Container from "../ui/Container";

export default function About() {
  return (
    <section id="about" className="border-t border-[#e7e7e4] bg-white py-20 md:py-32">
      <Container>
        
        {/* Story Section */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0b1f3a]">
            Our Story
          </p>
          <h2 className="mb-10 text-3xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-5xl leading-tight">
            Built for operations, not presentations.
          </h2>
          
          <div className="flex flex-col gap-8 text-left text-base leading-relaxed text-[#6b6b6b] md:text-lg">
            <p>
              Most software is built in boardrooms by people who have never had to track a missing purchase request across three different job sites. Ovelah was built differently.
            </p>
            <p>
              It was forged on the ground, designed specifically to solve the exact operational bottlenecks faced by real engineering, HVAC, and maintenance teams. We saw firsthand how scattered spreadsheets, delayed quotations, and disconnected invoices were actively holding back great service businesses.
            </p>
            <p>
              We didn't set out to build a generic tool for everyone. We set out to build the absolute best system for businesses that actually manage jobs, track assets, and handle field operations daily.
            </p>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="mx-auto mt-20 grid max-w-4xl gap-10 border-t border-[#e7e7e4] pt-16 sm:grid-cols-3">
          
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b1f3a]">
              No Fluff
            </h3>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              We don't do empty buzzwords. Every feature in Ovelah exists because it solves a real operational problem.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b1f3a]">
              Built for Work
            </h3>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              Fast, responsive, and designed to get out of your way so you can focus on running your business, not managing software.
            </p>
          </div>
          
          <div className="flex flex-col gap-3 text-center sm:text-left">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#0b1f3a]">
              Clarity First
            </h3>
            <p className="text-sm leading-relaxed text-[#6b6b6b]">
              From initial job tracking to final invoicing, we turn chaotic daily operations into a single, clean, readable workflow.
            </p>
          </div>

        </div>
      </Container>
    </section>
  );
}