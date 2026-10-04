import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32 min-h-[70vh] flex flex-col items-center justify-center text-center">
        <Container>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#0b1f3a]">Error 404</p>
          <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl">
            Page not found.
          </h1>
          <p className="mx-auto mb-10 max-w-lg text-lg text-[#6b6b6b]">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="inline-block rounded-md bg-[#0b1f3a] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526]">
            Return Home
          </Link>
        </Container>
      </main>
      <Footer />
    </>
  );
}