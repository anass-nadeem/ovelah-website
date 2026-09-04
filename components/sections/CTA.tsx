import Link from "next/link";
import Container from "../ui/Container";

export default function CTA() {
  return (
    <section className="bg-[#0b1f3a] py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
            Ready to streamline your business?
          </h2>
          <p className="mb-10 text-lg text-white/80">
            Stop wrestling with fragmented spreadsheets and scattered data. Get in touch today to see how Ovelah can transform your daily operations.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-md bg-white px-8 py-4 text-sm font-semibold tracking-wide text-[#0b1f3a] transition-all hover:scale-[1.02] hover:bg-gray-100 shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </Container>
    </section>
  );
}