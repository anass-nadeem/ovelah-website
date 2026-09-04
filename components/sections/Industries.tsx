import Container from "../ui/Container";

export default function Industries() {
  const industries = [
    "Manufacturing",
    "Engineering & Maintenance",
    "Construction & Contracting",
    "Logistics & Supply Chain",
    "Wholesale Distribution",
    "Professional Services",
  ];

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#0b1f3a]">
            Built For Your Industry
          </p>
          <h2 className="mb-12 text-3xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-5xl">
            Adaptable to any workflow.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="cursor-default rounded-full border border-[#e7e7e4] bg-[#fcfcfb] px-6 py-3 text-sm font-medium text-[#6b6b6b] transition-all hover:border-[#0b1f3a] hover:text-[#0b1f3a] md:text-base"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}