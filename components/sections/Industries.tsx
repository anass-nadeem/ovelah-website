import Container from "../ui/Container";

export default function Industries() {
  const industries = [
    "Engineering & Maintenance",
    "HVAC & Electrical",
    "Facility Management",
    "Construction & Contracting",
    "Technical Service Providers",
  ];

  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0b1f3a]">
            Built For Your Industry
          </p>
          <h2 className="mb-10 text-3xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-4xl">
            Software built for businesses with work to manage.
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, index) => (
              <span
                key={index}
                className="cursor-default rounded-full border border-[#e7e7e4] bg-[#fcfcfb] px-5 py-2.5 text-sm font-medium text-[#6b6b6b] transition-all hover:border-[#0b1f3a] hover:text-[#0b1f3a]"
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