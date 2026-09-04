import Container from "../ui/Container";

export default function Problem() {
  return (
    <section className="bg-[#0a0a0a] py-24 text-white md:py-32">
      <Container>
        <div className="max-w-5xl">
          <p className="text-sm font-medium tracking-[0.15em] text-[#aab7c8]">
            THE PROBLEM
          </p>

          <h2 className="mt-6 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
            Business moves fast.
            <br />
            Your systems should keep up.
          </h2>

          <div className="mt-16 max-w-3xl space-y-5 text-xl leading-relaxed text-[#b8b8b8] md:text-2xl">
            <p>Jobs shouldn&apos;t live across WhatsApp messages.</p>
            <p>Quotations shouldn&apos;t disappear into spreadsheets.</p>
            <p>Business information shouldn&apos;t be scattered everywhere.</p>
          </div>

          <p className="mt-16 text-xl font-medium text-white md:text-2xl">
            Ovelah brings your operations together.
          </p>
        </div>
      </Container>
    </section>
  );
}