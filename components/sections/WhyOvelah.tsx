import Container from "../ui/Container";

const points = [
  {
    title: "Built from experience",
    description: "Designed around real operational workflows rather than generic business theory.",
  },
  {
    title: "Focused on clarity",
    description: "Clear workflows and organized information without unnecessary complexity.",
  },
  {
    title: "Built to grow",
    description: "A foundation designed to support businesses as their operations expand.",
  },
];

export default function WhyOvelah() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          
          <div>
            <p className="text-xs font-bold tracking-[0.16em] text-[#0b1f3a]">
              WHY OVELAH
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] text-[#0a0a0a] md:text-5xl lg:text-6xl">
              Software should make work feel simpler.
            </h2>
          </div>

          <div className="divide-y divide-[#e7e7e4] border-t border-[#e7e7e4] lg:border-t-0 lg:pt-2">
            {points.map((point, index) => (
              <div key={point.title} className="py-8 first:pt-0 lg:first:pt-0">
                
                <p className="text-xs font-semibold text-[#0b1f3a]">
                  0{index + 1}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[#0a0a0a]">
                  {point.title}
                </h3>
                <p className="mt-3 max-w-lg text-base leading-relaxed text-[#6b6b6b]">
                  {point.description}
                </p>
                
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}