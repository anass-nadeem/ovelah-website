import Image from "next/image";
import Container from "../ui/Container";

export default function ActiveClients() {
  return (
    <section id="clients" className="border-t border-[#e7e7e4] bg-[#fcfcfb] py-20 md:py-28">
      <Container>
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-10 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
            Active Clients
          </p>
          
          <div className="flex flex-col items-center justify-center gap-8">
            
            {/* Logo with SaaS-style Grayscale and Blend Mode */}
            <div className="relative h-20 w-64 mix-blend-multiply grayscale opacity-60 transition-all duration-500 hover:grayscale-0 hover:opacity-100">
              <Image
                src="/infinity-logo.png" 
                alt="Infinity Engineering Solutions"
                fill
                className="object-contain"
              />
            </div>
            
            {/* Clean, Premium Typography (Removed the redundant H3 heading) */}
            <p className="max-w-2xl text-base leading-relaxed text-[#6b6b6b] md:text-lg md:leading-loose">
              <span className="font-semibold text-[#0a0a0a]">Infinity Engineering Solutions</span> , a HVAC maintenance services provider operating across KFC Pakistan North locations,  uses Ovelah to manage jobs, quotations, invoicing, expenses, assets, credit and balance across its maintenance operations.
            </p>
            
          </div>
        </div>
      </Container>
    </section>
  );
}