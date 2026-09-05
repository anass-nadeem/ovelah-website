import Container from "../ui/Container";
import Link from "next/link";

export default function CTA() {
  return (
    <section id="contact" className="bg-[#0b1f3a] py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
            See how Ovelah fits your workflow.
          </h2>
          <p className="mb-8 text-base text-white/80 leading-relaxed">
            Tell us how your business manages jobs, quotations and invoices today. We'll show you how Ovelah can bring them together.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0b1f3a] transition-all hover:bg-gray-100 shadow-lg"
          >
            Request a Demo
          </Link>
        </div>
      </Container>
    </section>
  );
}