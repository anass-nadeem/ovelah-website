import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Security & Compliance | Ovelah",
  description: "How Ovelah secures your operational data, manages access control, and ensures compliance for your business operations.",
  url: "https://ovelah.com/security",
});

export default function SecurityPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-slate prose-lg text-[#6b6b6b]">
            <h1 className="mb-4 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">Security & Compliance</h1>
            <p className="text-xl text-[#0b1f3a] mb-12">Your operational data is your business. We treat it accordingly.</p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">Data Storage & Encryption</h2>
            <p>All Customer Content—including client details, locations, quotations, and invoices—is encrypted both in transit and at rest. We utilize industry-standard AES-256 encryption for data at rest and TLS 1.2+ for all data in transit between your devices and our servers.</p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">Infrastructure & Hosting</h2>
            <p>Ovelah's infrastructure is hosted on enterprise-grade cloud providers (including Cloudflare) in the Asia region to ensure low latency and high availability for our primary customer base. Our infrastructure partners maintain strict physical and logical security compliance.</p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">Access Control & Authentication</h2>
            <p>Access to the Ovelah platform requires secure authentication. We employ role-based access control (RBAC), ensuring that your field technicians, dispatchers, and management only have access to the data necessary for their specific roles. Ovelah support personnel do not access your readable Customer Content without explicit, time-bound permission for troubleshooting.</p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-8 mb-4">Backups & Resilience</h2>
            <p>We perform automated, routine backups of our database infrastructure to prevent data loss in the event of hardware failure. Backups are encrypted and stored redundantly. [CONFIRM BACKUP FREQUENCY, e.g., Daily backups retained for 30 days].</p>

            <div className="mt-12 rounded-lg bg-[#f7f7f5] p-8 border border-[#e7e7e4]">
              <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">Report a Security Vulnerability</h3>
              <p className="text-sm m-0">If you are a security researcher and have discovered a vulnerability in the Ovelah platform, please disclose it responsibly by emailing <a href="mailto:security@ovelah.com" className="text-blue-600 hover:underline">security@ovelah.com</a>.</p>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}