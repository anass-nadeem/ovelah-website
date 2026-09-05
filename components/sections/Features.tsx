import Container from "../ui/Container";

export default function Features() {
  const features = [
    {
      title: "Clients",
      description: "Keep customer information organized.",
    },
    {
      title: "Locations",
      description: "Manage multiple customer locations easily.",
    },
    {
      title: "Jobs",
      description: "Track work across customers and locations.",
    },
    {
      title: "Quotations",
      description: "Create and manage quotations efficiently.",
    },
    {
      title: "Invoices",
      description: "Turn approved work into organized billing.",
    },
    {
      title: "Expenses",
      description: "Keep track of business expenses.",
    },
    {
      title: "Assets",
      description: "Manage equipment and business assets.",
    },
    {
      title: "Reporting",
      description: "Understand your operations with clear insights.",
    },
  ];

  return (
    <section id="product" className="border-t border-[#e7e7e4] bg-[#fcfcfb] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#0b1f3a]">
            Core Features
          </p>
          <h2 className="mb-14 text-3xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-4xl">
            Everything you need to run your operations.
          </h2>

          <div className="grid gap-x-10 gap-y-12 border-t border-[#e7e7e4] pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-2">
                <h3 className="text-base font-semibold text-[#0a0a0a]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}