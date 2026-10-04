import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Job & Service Management Software | Ovelah",
  description: "Track service requests and assigned maintenance work from dispatch to resolution. Maintain an unbroken chain of custody for every task.",
  url: "https://ovelah.com/solutions/job-management",
});

export default function JobManagementSolution() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl">
              Job Management
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6b6b6b]">
              Turn fragmented WhatsApp threads and lost paper tickets into a structured, trackable operational workflow.
            </p>
          </div>
          {/* Minimal placeholder for Task 3 requirement; this will be expanded in Task 7/10 */}
          <div className="rounded-xl border border-[#e7e7e4] bg-white p-12 text-center">
            <p className="text-[#6b6b6b] mb-8">Detailed solution workflow coming soon. [CONFIRM FEATURE SPECIFICS]</p>
            <Link href="/contact" className="rounded-md bg-[#0b1f3a] px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#0a1526]">
              Request a Demo
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}