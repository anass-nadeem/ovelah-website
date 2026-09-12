import Container from "@/components/ui/Container";

export default function IdealClient() {
  return (
    <section className="bg-[#0b1f3a] py-20 text-white md:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#a3a3a3]">
            Who Is Ovelah For?
          </p>
          
          <div className="relative mx-auto mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm md:p-14">
            
            {/* Decorative Quote Mark */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#0b1f3a] px-4">
              <svg className="h-8 w-8 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <p className="text-lg font-medium leading-relaxed text-[#fcfcfb] md:text-2xl md:leading-loose">
              A company that receives jobs from multiple large clients, sends teams to different locations, prepares quotations, tracks work, submits service and completion documentation, invoices those clients, and waits for payment.
            </p>
            
            <div className="mx-auto mt-10 h-px w-16 bg-white/20"></div>
            
            <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-[#a3a3a3]">
              If this is your workflow, Ovelah is your system.
            </p>
          </div>
          
        </div>
      </Container>
    </section>
  );
}