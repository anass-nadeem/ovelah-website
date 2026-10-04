import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service | Ovelah",
  description: "Terms of Service and user agreements for the Ovelah business operations platform.",
  url: "https://ovelah.com/terms",
});

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-slate prose-lg text-[#6b6b6b]">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">Terms of Service</h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0a0a0a]">Last Updated: [ADD DATE]</p>
            
            <p className="mt-8 text-lg">
              Welcome to Ovelah. These Terms of Service govern your use of the Ovelah platform and website. By accessing or using our business operations software, you agree to be bound by these terms.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">1. Use of the Platform</h2>
            <p>
              Ovelah provides a B2B software platform for managing service and maintenance operations. You agree to use the platform only for its intended business purposes and in compliance with all applicable laws in [ADD JURISDICTION].
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">2. Client Data & Ownership</h2>
            <p>
              You retain all rights and ownership to the operational data (clients, locations, jobs, invoices) you enter into Ovelah. You grant us a limited license to host and process this data solely to provide the service to you.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">3. Service Availability & Limitations</h2>
            <p>
              While we strive for maximum uptime, Ovelah is provided on an "as is" and "as available" basis. We are not liable for business interruptions, loss of profits, or data loss arising from the use or inability to use the platform.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">4. Governing Law</h2>
            <p>
              These Terms shall be governed by the laws of [ADD JURISDICTION], without regard to its conflict of law provisions.
            </p>

            <div className="mt-16 rounded-lg bg-[#f7f7f5] p-6 border border-[#e7e7e4] text-sm">
              <strong>Note:</strong> These terms of service are currently pending final legal review. Please contact contact@ovelah.com with any specific licensing inquiries.
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}