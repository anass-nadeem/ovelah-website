import Container from "../ui/Container";

export default function Product() {
  return (
    <section id="product" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-[#0b1f3a]">
              ONE SYSTEM
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#0a0a0a] md:text-5xl lg:text-6xl">
              One place for the work that keeps your business moving.
            </h2>
          </div>

          <div className="pt-2 lg:pt-4">
            <p className="text-lg leading-relaxed text-[#6b6b6b]">
              Running a service or maintenance business means managing
              customers, locations, jobs, quotations and invoices every day.
            </p>
            <p className="mt-5 text-lg leading-relaxed text-[#6b6b6b]">
              Ovelah ERP connects those operations into one clear system,
              giving your team a better view of what is happening across
              your business.
            </p>

            <a href="#workflow" className="btn-secondary mt-10">
              See how it works &darr;
            </a>
          </div>

        </div>
      </Container>
    </section>
  );
}