import Container from "../ui/Container";

const features = [
  "Clients",
  "Locations",
  "Jobs",
  "Quotations",
  "Invoices",
  "Expenses",
  "Assets",
  "Reporting",
];

export default function Features() {
  return (
    <section className="bg-[#0a0a0a] py-24 text-white md:py-32">

      <Container>

        <div className="flex flex-col justify-between gap-10 md:flex-row">

          <div className="max-w-xl">

            <p className="text-xs font-semibold tracking-[0.16em] text-[#9eafc3]">
              OVELAH ERP
            </p>

            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              The tools your operations actually need.
            </h2>

          </div>

          <p className="max-w-sm text-base leading-relaxed text-[#a9a9a9]">
            Everything is designed to work together, helping your business
            move from scattered information to a connected workflow.
          </p>

        </div>

        <div className="mt-16 grid grid-cols-2 border-t border-[#333] sm:grid-cols-4">

          {features.map((feature, index) => (

            <div
              key={feature}
              className="border-b border-r border-[#333] p-5 md:p-7"
            >

              <p className="text-xs text-[#777]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-4 text-lg font-medium">
                {feature}
              </h3>

            </div>

          ))}

        </div>

      </Container>

    </section>
  );
}