import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | Ovelah",
  description: "Learn how Ovelah protects your business data, client records, and operational information. Read our B2B privacy policy.",
  url: "https://ovelah.com/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-slate prose-lg text-[#6b6b6b]">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">Privacy Policy</h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0a0a0a]">Last Updated: [ADD DATE]</p>
            
            <p className="mt-8 text-lg">
              At Ovelah, we build software for businesses that run on real operations. We understand that you are entrusting us with critical business data, including client details, locations, quotations, and financial records. This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">1. Information We Collect</h2>
            <p>We collect information necessary to provide our business operations software:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Name, work email, company name, and industry when you request a demo or register.</li>
              <li><strong>Operational Data:</strong> Client lists, job details, invoices, and assets that you input into the Ovelah platform.</li>
              <li><strong>Usage Data:</strong> System logs and analytics to improve platform performance.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">2. How We Use Your Information</h2>
            <p>Your operational data belongs to you. We use your information exclusively to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve the Ovelah platform.</li>
              <li>Process your transactions and send related information, including invoices.</li>
              <li>Provide customer support and technical assistance.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">3. Data Security</h2>
            <p>
              We implement enterprise-grade security measures to protect your operational data from unauthorized access. [CONFIRM INFRASTRUCTURE: e.g., All data is encrypted at rest and in transit using industry-standard protocols.]
            </p>

            <h2 className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4">4. Contact Us</h2>
            <p>If you have questions regarding this privacy policy or your data, please contact us at:</p>
            <p className="font-medium text-[#0b1f3a]">contact@ovelah.com</p>

            <div className="mt-16 rounded-lg bg-[#f7f7f5] p-6 border border-[#e7e7e4] text-sm">
              <strong>Note:</strong> This privacy policy is currently pending final legal review for compliance in [ADD JURISDICTION].
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}