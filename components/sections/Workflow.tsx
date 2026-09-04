import Container from "../ui/Container";

const steps = [
  {
    number: "01",
    title: "Clients",
    description: "Keep customer information and business relationships organized.",
  },
  {
    number: "02",
    title: "Jobs",
    description: "Create and manage work happening across different locations.",
  },
  {
    number: "03",
    title: "Quotations",
    description: "Prepare professional quotations directly from your operational workflow.",
  },
  {
    number: "04",
    title: "Invoices",
    description: "Move completed work into clear and connected billing.",
  },
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="border-y border-[#e7e7e4] bg-[#f7f7f5] py-24 md:py-32"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.16em] text-[#0b1f3a]">
            HOW IT WORKS
          </p>
          <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-5xl">
            From work request to invoice.
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              
              {/* Subtle connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-2.5 hidden h-[1px] w-[calc(100%-1.5rem)] bg-[#d5d5d0] md:block" />
              )}

              <div className="relative z-10 inline-flex bg-[#f7f7f5] pr-4">
                <p className="text-sm font-semibold text-[#0b1f3a]">
                  {step.number}
                </p>
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#0a0a0a]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#6b6b6b]">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}