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
      
      <main className="bg-[#fcfcfb] pb-24 pt-32 md:pb-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-slate prose-lg text-[#6b6b6b]">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
              Privacy Policy
            </h1>
            
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0a0a0a]">
              Effective date: [15 July, 2026] | Last Updated: [05 October, 2026]
            </p>
            
            <div className="mt-8 rounded-lg border border-[#e7e7e4] bg-[#f7f7f5] p-6 text-sm text-[#0a0a0a]">
              <strong>Note:</strong> Draft for legal review. Items in [SQUARE BRACKETS] must be completed or confirmed before publishing.
            </div>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">1. Introduction and Scope</h2>
            <p>
              Ovelah ("Ovelah", "we", "us", "our") provides business operations software that helps companies manage clients, locations, jobs, quotations, invoices, expenses, assets and reporting. This Privacy Policy explains how we collect, use, store, share and protect information when you:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>visit our website at ovelah.com ("Website");</li>
              <li>request a demo, contact us, or start a free trial; and</li>
              <li>use the Ovelah software, including the Ovelah ERP platform ("Services").</li>
            </ul>
            <p>
              By using the Website or the Services, you acknowledge that you have read this Policy. If you do not agree with it, please do not use them.
            </p>
            <p>
              This Policy applies to information about our visitors, prospects, and customer account holders and their authorized users. It does not cover information held by third-party websites we may link to.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">2. Who We Are and Our Role</h2>
            <p>
              Ovelah<br />
              Islamabad, Pakistan<br />
              Operated by [ADD OWNER / OPERATOR FULL NAME]. Business registration is currently pending. [UPDATE WITH LEGAL ENTITY NAME AND REGISTRATION NUMBER ONCE REGISTERED]<br />
              Email: <a href="mailto:contact@ovelah.com" className="text-blue-600 transition-colors hover:text-blue-800 hover:underline">contact@ovelah.com</a>
            </p>
            <p>We act in two different roles, depending on the data involved:</p>
            <ol className="list-[lower-alpha] space-y-2 pl-6">
              <li><strong>As a data controller</strong>, for information about our own website visitors, prospects, customer account holders and billing contacts. We decide why and how this information is used.</li>
              <li><strong>As a data processor (service provider)</strong>, for the business data our customers store in the Services, such as their own clients' names, addresses, job details, quotations and invoices ("Customer Content"). Our customer decides what is stored and why. We process Customer Content only to provide the Services, following the customer's instructions and our agreement with them.</li>
            </ol>
            <p>
              If you are a client of one of our customers, that business is responsible for how your information is collected and used. Please contact them directly for requests about your data.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">3. Information We Collect</h2>
            
            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">3.1 Information you give us directly</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Account and profile information:</strong> name, work email address, phone number, company name, job title, role, and login credentials.</li>
              <li><strong>Demo, contact and trial requests:</strong> the details you enter in our forms and anything you write in your message.</li>
              <li><strong>Billing information:</strong> billing name, billing address, tax or registration numbers, subscription plan, and payment status. No payment card details are required to start a free trial. [CONFIRM HOW PAID SUBSCRIPTIONS ARE COLLECTED, e.g., bank transfer or invoice. If a card or payment processor is introduced later, this Policy will be updated and the processor added to Section 7.1.]</li>
              <li><strong>Communications:</strong> emails, support requests, feedback and survey responses you send us.</li>
            </ul>

            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">3.2 Customer Content</h3>
            <p>
              Customer Content is information that customers and their authorized users enter into the Services. Depending on how the customer uses Ovelah, it may include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>client and contact records (names, phone numbers, email addresses);</li>
              <li>site and location details, including addresses and map coordinates;</li>
              <li>jobs, work notes, schedules and technical documentation;</li>
              <li>quotations, invoices, balances, expenses and asset records;</li>
              <li>uploaded files or attachments. [CONFIRM IF FILE UPLOAD EXISTS]</li>
            </ul>
            <p>Customer Content is stored in encrypted form. See Section 4.</p>

            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">3.3 Information collected automatically</h3>
            <p>
              When you use the Website or the Services, our systems and our infrastructure provider may automatically record limited technical data, such as:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>IP address and approximate location derived from it;</li>
              <li>browser type, device type and operating system;</li>
              <li>pages visited, referring page, and date and time of requests;</li>
              <li>security and error logs, and diagnostic information.</li>
            </ul>
            <p>We use this to keep the Services secure, diagnose problems and understand basic usage.</p>

            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">3.4 Cookies and similar technologies</h3>
            <p>
              At the time of this Policy, our Website does not use cookies for advertising, analytics or tracking. If that changes, we will update this Policy and, where required by law, ask for your consent first. See Section 9.
            </p>

            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">3.5 Information we do not intentionally collect</h3>
            <p>
              We do not ask for sensitive personal data such as health information, biometric data, political or religious beliefs, or national identity numbers. Please do not enter this kind of information into the Services unless it is genuinely necessary for your business and lawful for you to do so. We do not knowingly collect information from anyone under 18 (see Section 14).
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">4. Encryption of Customer Content</h2>
            <p>
              We designed the Services so that Customer Content is stored in encrypted form, and Ovelah staff cannot read it in the ordinary course of providing the Services.
            </p>
            <p>To be transparent about what this means and where its limits are:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>What is protected:</strong> the content of your business records (Section 3.2) is encrypted before it is stored. [CONFIRM THE TECHNICAL DESIGN: whether encryption is end-to-end or client-side, who holds the keys, and which fields are encrypted.]</li>
              <li><strong>What is not covered:</strong> certain operational data must remain readable by our systems for the Services to work, such as account email addresses, subscription and billing status, and technical logs. This data is handled under the rest of this Policy.</li>
              <li><strong>Access:</strong> we do not access Customer Content except where (i) the customer gives us explicit permission to troubleshoot an issue, (ii) it is strictly required to maintain the security or integrity of the Services, or (iii) we are legally compelled to do so. Because of the encryption design, we may be technically unable to provide readable Customer Content even if asked. [CONFIRM]</li>
              <li><strong>Lost access:</strong> if encryption credentials or keys controlled by a customer are lost, Ovelah may be unable to recover the data. [CONFIRM AND CROSS-CHECK WITH TERMS OF SERVICE]</li>
            </ul>
            <p>No system is completely secure, and we cannot promise absolute security, but we take the protection of Customer Content seriously.</p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">5. How We Use Information</h2>
            <p>We use information for the following purposes:</p>
            
            <div className="overflow-x-auto mt-6 mb-6">
              <table className="min-w-full text-left text-sm border-collapse border border-[#e7e7e4]">
                <thead className="bg-[#f7f7f5]">
                  <tr>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">Purpose</th>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">Examples</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7e7e4]">
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Provide the Services</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Create and manage accounts, host and process Customer Content, enable features</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Onboarding and support</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Run demos and trials, respond to questions, troubleshoot</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Billing</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Manage subscriptions, invoices, refunds and taxes</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Security and fraud prevention</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Detect abuse, protect accounts, investigate incidents</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Improve the Services</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Fix bugs, plan features, analyze aggregated, non-content usage</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Communications</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Service notices, security alerts, policy updates, and (where permitted) product updates</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Legal compliance</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Meet legal, tax and regulatory duties, and respond to lawful requests</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              We do not sell personal information. We do not use Customer Content for advertising, and we do not use it to train AI models. [CONFIRM]
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">6. Legal Bases for Processing</h2>
            <p>Where applicable data protection laws require a legal basis (for example, the GDPR or UK GDPR for users in those regions), we rely on:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Contract:</strong> processing needed to deliver the Services you signed up for;</li>
              <li><strong>Legitimate interests:</strong> securing and improving the Services, preventing fraud, and communicating with business contacts, balanced against your rights;</li>
              <li><strong>Legal obligation:</strong> compliance with tax, accounting and other laws; and</li>
              <li><strong>Consent:</strong> where required, for example optional marketing or non-essential cookies, which you can withdraw at any time.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">7. How We Share Information</h2>
            <p>We share information only as described below.</p>
            
            <h3 className="mb-2 mt-6 text-xl font-semibold text-[#0a0a0a]">7.1 Service providers (sub-processors)</h3>
            <p>We use trusted third parties to operate the Services. They may process data only on our instructions and under confidentiality and security obligations.</p>
            
            <div className="overflow-x-auto mt-4 mb-4">
              <table className="min-w-full text-left text-sm border-collapse border border-[#e7e7e4]">
                <thead className="bg-[#f7f7f5]">
                  <tr>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">Provider</th>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">Purpose</th>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">Data involved</th>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7e7e4]">
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Cloudflare, Inc.</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Hosting, content delivery, network security, data storage</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Encrypted Customer Content, account data, technical logs</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Japan (Asia region)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p>
              Cloudflare is currently the only third-party platform that hosts or processes our data. We do not currently use separate providers for analytics, advertising, payment processing or error tracking. If we add a provider in the future, we will add it to this list and notify customers of material changes. [NOTE: Emails you send to contact@ovelah.com are also handled by whichever email service hosts that mailbox. ADD IT HERE IF IT IS A THIRD PARTY.]
            </p>

            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">7.2 Legal and safety reasons</h3>
            <p>
              We may disclose information if we believe in good faith that it is required by law, court order or government request, or necessary to protect the rights, property or safety of Ovelah, our customers or others. Where we receive such a request for Customer Content, we will, where lawful, direct the requester to the relevant customer, and note that readable access may not be technically possible (Section 4).
            </p>

            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">7.3 Business transfers</h3>
            <p>
              If Ovelah is involved in a merger, acquisition, financing or sale of assets, information may be transferred as part of that transaction. We will give notice before personal information becomes subject to a materially different privacy policy.
            </p>

            <h3 className="mb-2 mt-8 text-xl font-semibold text-[#0a0a0a]">7.4 With your consent</h3>
            <p>We may share information for other purposes when you ask us to or give consent.</p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">8. Data Hosting and International Transfers</h2>
            <p>
              Our data is hosted on Cloudflare infrastructure in Japan, within the Asia region. We chose an Asian hosting region to serve our customers in Pakistan and the wider region with good performance.
            </p>
            <p>
              Ovelah is based in Pakistan, and our customers may be located in Pakistan or in other countries. This means your information may be transferred to, stored in, and accessed from countries other than your own, including Pakistan and Japan, which may have different data protection laws than your country.
            </p>
            <p>
              Where required by law, we use appropriate safeguards for international transfers, such as contractual protections with our providers. [ADD: standard contractual clauses or equivalent mechanisms if you serve EU/UK customers.]
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">9. Cookies and Similar Technologies</h2>
            <p>
              Our Website currently does not set cookies for analytics, advertising or tracking. Our infrastructure provider may use security-related or technically necessary mechanisms (such as those used to protect against attacks), and the Services may use strictly necessary browser storage to keep you signed in. [CONFIRM]
            </p>
            <p>
              If we introduce analytics or other non-essential cookies, we will update this Policy and, where legally required, request your consent through a clear banner before setting them.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">10. Data Retention and Deletion</h2>
            
            <div className="overflow-x-auto mt-6 mb-6">
              <table className="min-w-full text-left text-sm border-collapse border border-[#e7e7e4]">
                <thead className="bg-[#f7f7f5]">
                  <tr>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">Data</th>
                    <th className="border border-[#e7e7e4] px-4 py-2 font-semibold text-[#0a0a0a]">How long we keep it</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e7e7e4]">
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Customer Content</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">While the account is active. After cancellation or termination, it remains stored but locked and inaccessible for 30 days, giving the customer time to reactivate or request export. After that, it is permanently deleted.</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Account and billing records</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">While the account is active and afterward for as long as needed for tax, accounting and legal requirements [ADD PERIOD, e.g., 6 years]</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Demo and contact requests</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Up to [ADD PERIOD, e.g., 24 months] from the last interaction, unless you become a customer</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Security and technical logs</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">[ADD PERIOD, e.g., 90 days]</td>
                  </tr>
                  <tr>
                    <td className="border border-[#e7e7e4] px-4 py-2 font-medium text-[#0a0a0a]">Backups</td>
                    <td className="border border-[#e7e7e4] px-4 py-2">Deleted copies may persist in backups for up to [ADD PERIOD, e.g., 30 days] before being overwritten</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              Free trial accounts that are not converted to a paid plan are handled in the same way as cancelled accounts. We may keep anonymized or aggregated information that can no longer identify a person.
            </p>
            <p>
              If a customer needs an export of their data, they should ask us before the 30-day period ends. [CONFIRM EXPORT PROCESS]
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">11. Security</h2>
            <p>We use technical and organizational measures designed to protect information, including:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>encryption of Customer Content at rest [CONFIRM], and encryption of data in transit using TLS;</li>
              <li>access controls and the principle of least privilege for our team;</li>
              <li>infrastructure-level protections provided by Cloudflare;</li>
              <li>monitoring for suspicious activity; and</li>
              <li>confidentiality commitments from our personnel and providers.</li>
            </ul>
            <p>
              You also play a part: keep your password and any encryption credentials confidential, use strong unique passwords, and tell us immediately if you suspect unauthorized access.
            </p>
            <p>
              <strong>Data breaches:</strong> If we become aware of a breach affecting personal information, we will investigate promptly, take steps to contain it, and notify affected customers and, where legally required, authorities, without undue delay. [CONFIRM TARGET NOTIFICATION TIME, e.g., within 72 hours of confirmation]
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">12. Your Rights and Choices</h2>
            <p>Depending on where you live and the law that applies, you may have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access the personal information we hold about you;</li>
              <li>Correct inaccurate or incomplete information;</li>
              <li>Delete your information, subject to legal retention duties;</li>
              <li>Restrict or object to certain processing;</li>
              <li>Data portability, meaning receive your data in a usable format;</li>
              <li>Withdraw consent where processing is based on consent; and</li>
              <li>Complain to a data protection authority in your country.</li>
            </ul>
            <p>
              <strong>How to exercise them:</strong> email contact@ovelah.com with the subject "Privacy Request". We may need to verify your identity. We aim to respond within 30 days, and will let you know if we need more time. We will not charge a fee unless requests are clearly excessive or repetitive.
            </p>
            <p>
              <strong>Customer Content:</strong> if your request concerns information that a customer of ours stored about you, we will redirect you to that customer, because they control that data.
            </p>
            <p>
              <strong>Marketing:</strong> you can unsubscribe from marketing emails at any time using the link in the message or by contacting us. We will still send essential service notices.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">13. Customer Responsibilities for Customer Content</h2>
            <p>Customers that use the Services to store information about their own clients and staff are responsible for:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>having a lawful basis and any required consents or notices to collect and use that information;</li>
              <li>ensuring it is accurate and used lawfully; and</li>
              <li>responding to requests from the people whose data they hold.</li>
            </ul>
            <p>
              Our Terms of Service describe these responsibilities in more detail. Customers that need a data processing agreement can request one at contact@ovelah.com.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">14. Children's Privacy</h2>
            <p>
              The Website and Services are for businesses and are intended for people 18 years of age or older. We do not knowingly collect personal information from anyone under 18. If you believe a minor has provided us with information, contact us and we will delete it.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">15. Third-Party Links</h2>
            <p>
              The Website may link to other sites, including social platforms. We do not control them and are not responsible for their privacy practices. Please read their policies.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">16. Changes to This Policy</h2>
            <p>
              We may update this Policy from time to time. We will post the new version here with a new "Last updated" date. For material changes, we will give notice, for example by email to account holders or a notice on the Website, before the change takes effect where practicable. Continued use after the effective date means you accept the updated Policy.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">17. Governing Law</h2>
            <p>
              This Policy is governed by the laws of Pakistan, without limiting any mandatory data protection rights you have under the laws of your own country.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">18. Contact Us</h2>
            <p>
              Ovelah<br />
              Islamabad, Pakistan<br />
              Email: <a href="mailto:contact@ovelah.com" className="text-blue-600 transition-colors hover:text-blue-800 hover:underline">contact@ovelah.com</a>
            </p>
            <p>For privacy questions, requests or complaints, write to the email above with the subject line "Privacy".</p>

          </div>
        </Container>
      </main>
      
      <Footer />
    </>
  );
}