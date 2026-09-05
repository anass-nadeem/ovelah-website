import Image from "next/image";
import Container from "../ui/Container";

export default function ActiveClients() {
  return (
    <section id="clients" className="border-t border-[#e7e7e4] bg-[#fcfcfb] py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-12 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
            Active Clients
          </p>
          
          <div className="flex flex-col items-center justify-center gap-6">
            {/* Logo Wrapper */}
            <div className="relative h-16 w-56 opacity-90 transition-opacity hover:opacity-100">
              <Image
                src="/infinity-logo.png" 
                alt="Infinity Engineering Solutions Logo"
                fill
                className="object-contain"
              />
            </div>
            
            <h3 className="text-lg font-semibold text-[#0a0a0a]">
              Infinity Engineering Solutions
            </h3>
            
            <p className="max-w-2xl text-sm leading-relaxed text-[#6b6b6b] md:text-base">
              Infinity Engineering Solutions uses Ovelah to manage jobs, quotations, invoicing, expenses, assets, credit, and balances across its maintenance operations.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}