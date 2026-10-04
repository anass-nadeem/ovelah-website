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
      
      <main className="bg-[#fcfcfb] pb-24 pt-32 md:pb-32 md:pt-40">
        <Container>
          <div className="mx-auto max-w-3xl prose prose-slate prose-lg text-[#6b6b6b]">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
              Terms of Service
            </h1>
            
            <p className="text-sm font-semibold uppercase tracking-wider text-[#0a0a0a]">
              Effective date: [15 June, 2026] | Last Updated: [05 October, 2026]
            </p>
            
            <div className="mt-8 rounded-lg border border-[#e7e7e4] bg-[#f7f7f5] p-6 text-sm text-[#0a0a0a]">
              <strong>Note:</strong> Draft for legal review. Items in [SQUARE BRACKETS] must be completed or confirmed before publishing.
            </div>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">1. Agreement and Acceptance</h2>
            <p>
              These Terms of Service ("Terms") are a binding agreement between you (and the business you represent, "Customer", "you") and Ovelah, based in Islamabad, Pakistan ("Ovelah", "we", "us"). They govern your access to and use of ovelah.com (the "Website") and the Ovelah software and related services, including Ovelah ERP (together, the "Services").
            </p>
            <p>
              By creating an account, starting a free trial, subscribing, or otherwise using the Services, you agree to these Terms and to our Privacy Policy. If you accept on behalf of a company, you confirm that you have authority to bind that company. If you do not agree, do not use the Services.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">2. Definitions</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Account:</strong> the account created to access the Services.</li>
              <li><strong>Authorized User:</strong> an employee, contractor or other person you permit to use your Account.</li>
              <li><strong>Customer Content:</strong> all data you or your Authorized Users enter into the Services, including client records, locations, jobs, quotations, invoices, expenses, assets and attachments.</li>
              <li><strong>Subscription:</strong> the paid plan (monthly or annual) that gives access to the Services.</li>
              <li><strong>Trial:</strong> the free evaluation period described in Section 6.</li>
              <li><strong>Documentation:</strong> guides and instructions we provide about the Services.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">3. Eligibility</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>You must be at least 18 years old and legally able to enter a contract.</li>
              <li>The Services are intended for business use only, not personal, family or household use.</li>
              <li>You must not be barred from using the Services under applicable law, including sanctions and export control laws.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">4. Accounts and Security</h2>
            <ol className="list-decimal space-y-2 pl-6">
              <li>You must provide accurate, current and complete registration information and keep it updated.</li>
              <li>You are responsible for all activity under your Account, including by Authorized Users.</li>
              <li>Keep credentials confidential. Do not share logins between people. Tell us immediately at contact@ovelah.com if you suspect unauthorized access.</li>
              <li>We may rely on instructions from anyone using valid credentials as being authorized by you.</li>
            </ol>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">5. The Services</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>5.1</strong> We provide a platform to manage clients, locations, jobs, quotations, invoices, expenses, assets and reporting, as described on the Website and in the Documentation.</li>
              <li><strong>5.2</strong> We may improve, modify, add or remove features. If we make a change that materially reduces core functionality of a paid Subscription, we will give reasonable notice and, where appropriate, a pro-rata refund option.</li>
              <li><strong>5.3</strong> The Services are tools. They do not provide legal, tax, accounting or engineering advice. You are responsible for the content, accuracy and legal compliance of the quotations, invoices and other documents you produce with them.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">6. Free Trial</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>6.1</strong> New customers may be eligible for a one (1) month free trial. No payment card or payment details are required to start the trial.</li>
              <li><strong>6.2</strong> One trial per business. We may refuse or end a trial if we suspect abuse, such as repeated sign-ups.</li>
              <li><strong>6.3</strong> No automatic charge. Because no payment details are collected for the trial, you will not be charged automatically when it ends. To continue using the Services, you must choose a paid plan. If you do not, your Account will be treated as cancelled and Section 9.3 applies.</li>
              <li><strong>6.4</strong> Trial features, limits and availability may differ from paid plans. During a trial, the Services are provided "as is" and any data not converted to a paid Subscription is handled under Section 10.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">7. Subscriptions, Fees and Payment</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>7.1 Plans.</strong> Subscriptions are available on a monthly or annual basis. Current plans and prices are shown on the Website, in your order, or in a written quote. [ADD PRICING REFERENCE]</li>
              <li><strong>7.2 Billing.</strong> Fees are charged in advance for each billing period. By subscribing, you agree to pay the applicable fees using the payment methods we make available. [CONFIRM ACCEPTED PAYMENT METHODS, e.g., bank transfer or invoice]</li>
              <li><strong>7.3 Automatic renewal.</strong> Subscriptions renew automatically for successive periods of the same length (monthly or annual) until cancelled in accordance with Section 9.</li>
              <li><strong>7.4 Taxes.</strong> All fees are stated exclusive of taxes, duties and levies (such as sales tax, VAT or similar charges). You are responsible for paying all applicable taxes on your Subscription, in addition to the fees. If you are required by law to withhold tax from a payment, you must tell us in advance, pay the withheld amount to the relevant authority, and give us the receipt, so that Ovelah receives the full fee amount. Ovelah is responsible only for taxes on its own income. [CONFIRM CURRENCY AND WITHHOLDING-TAX TREATMENT WITH AN ACCOUNTANT]</li>
              <li><strong>7.5 Price changes.</strong> We may change prices for future periods by giving at least [30] days' notice. The change applies from your next renewal. If you do not agree, you may cancel before it takes effect.</li>
              <li><strong>7.6 Late or failed payment.</strong> If payment fails, we may retry, notify you, and, after reasonable notice, suspend access until the balance is paid. You remain liable for unpaid fees.</li>
              <li><strong>7.7 No set-off.</strong> Except where the law says otherwise, fees are non-cancellable and non-refundable, apart from Section 8.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">8. Refunds</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>8.1 Seven-day refund.</strong> If you request a refund within seven (7) days of a payment for a new Subscription or renewal, we will refund that payment. Contact contact@ovelah.com with your Account details.</li>
              <li><strong>8.2</strong> Refund requests after seven days are not guaranteed. Partial-period refunds are not provided for early cancellation, except where required by law or stated in Section 5.2.</li>
              <li><strong>8.3</strong> Refunds are issued to the original payment method where possible and may take [ADD DAYS] to appear.</li>
              <li><strong>8.4</strong> We may decline a refund where we reasonably find abuse, such as repeated subscribe-and-refund cycles or breach of these Terms.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">9. Cancellation, Suspension and Termination</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>9.1 By you.</strong> You may cancel at any time from your Account settings or by contacting contact@ovelah.com. Cancellation takes effect at the end of the current paid period, and you keep access until then, subject to Section 8.</li>
              <li><strong>9.2 By us.</strong> We may suspend or terminate your access if you materially breach these Terms, fail to pay, use the Services unlawfully or in a way that threatens security or other customers, or if required by law. Where reasonable, we will give prior notice and an opportunity to fix the issue.</li>
              <li><strong>9.3 Effect of termination.</strong> When your Account is cancelled or terminated:
                <ul className="mb-2 mt-2 list-disc space-y-2 pl-6">
                  <li>your right to use the Services ends;</li>
                  <li>your Customer Content is retained in a locked state for 30 days, during which you cannot access it but may ask us to reactivate the Account or arrange an export; and</li>
                  <li>after the 30 days, Customer Content is permanently deleted and cannot be recovered. Copies in backups are overwritten within [ADD PERIOD].</li>
                </ul>
              </li>
              <li><strong>9.4 Export.</strong> Because of the encryption design (Section 10.4), exports may depend on credentials or keys you hold. Please export what you need before cancelling. [CONFIRM EXPORT TOOL AND PROCESS]</li>
              <li><strong>9.5</strong> Sections that by nature should survive termination (such as fees owed, intellectual property, disclaimers, liability limits and governing law) will survive.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">10. Customer Content and Data</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>10.1 Ownership.</strong> You own your Customer Content. We claim no ownership of it.</li>
              <li><strong>10.2 License to us.</strong> You grant Ovelah a limited, non-exclusive, worldwide license to host, store, process, transmit and display Customer Content solely as needed to provide, secure and support the Services, and as required by law.</li>
              <li><strong>10.3 Your responsibility.</strong> You are solely responsible for Customer Content, including its accuracy, legality, and for having all necessary rights, notices and consents, including from your own clients and staff, to put it in the Services. You must not upload content you have no right to use.</li>
              <li><strong>10.4 Encryption and access.</strong> Customer Content is stored in encrypted form and Ovelah personnel cannot ordinarily read it. [CONFIRM THE TECHNICAL MODEL.] You understand and agree that:
                <ul className="mb-2 mt-2 list-disc space-y-2 pl-6">
                  <li>we generally cannot view, recover, reset or restore readable Customer Content on your behalf;</li>
                  <li>if you lose required credentials or keys, your data may be permanently unrecoverable, and Ovelah is not liable for that loss; and</li>
                  <li>some operational data (such as account details, billing status and technical logs) is not covered by this encryption and is handled under our Privacy Policy.</li>
                </ul>
              </li>
              <li><strong>10.5 Backups.</strong> You are encouraged to maintain your own backups or exports of critical data. [CONFIRM: describe any backups Ovelah maintains, or state that none are guaranteed.]</li>
              <li><strong>10.6 Data protection roles.</strong> For personal information within Customer Content, you are the controller (or equivalent) and Ovelah is the processor (service provider), acting on your documented instructions. Our Privacy Policy sets out how we process data. If you need a data processing agreement, request one at contact@ovelah.com.</li>
              <li><strong>10.7 Hosting.</strong> Data is hosted on Cloudflare infrastructure in Japan (Asia region), and you consent to this hosting and to the use of the sub-processors listed in our Privacy Policy. Cloudflare is currently our only sub-processor, and we will update the Privacy Policy if that changes.</li>
              <li><strong>10.8 Aggregated data.</strong> We may use anonymized, aggregated usage statistics that do not identify you or include Customer Content to operate and improve the Services.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">11. Acceptable Use</h2>
            <p>You and your Authorized Users must not:</p>
            <ol className="mb-4 list-decimal space-y-2 pl-6">
              <li>use the Services for anything unlawful, fraudulent, deceptive or harmful, including issuing fake or misleading invoices or quotations;</li>
              <li>upload malware, or interfere with or disrupt the Services, servers or networks;</li>
              <li>attempt to gain unauthorized access to the Services, other Accounts or data;</li>
              <li>probe, scan or test vulnerabilities without our written permission;</li>
              <li>copy, modify, reverse engineer, decompile or create derivative works of the Services, except where law allows;</li>
              <li>resell, sublicense or provide the Services to third parties as a competing service, unless we agree in writing;</li>
              <li>use automated means (bots, scrapers) to access the Services beyond documented interfaces;</li>
              <li>exceed reasonable usage limits or use the Services in a way that degrades performance for others;</li>
              <li>infringe any intellectual property, privacy or other rights; or</li>
              <li>misrepresent your identity or affiliation.</li>
            </ol>
            <p>We may investigate suspected violations and take action under Section 9.</p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">12. Customer Compliance Responsibilities</h2>
            <p>You are responsible for complying with all laws that apply to your business and your use of the Services, including:</p>
            <ul className="mb-4 list-disc space-y-2 pl-6">
              <li>tax, invoicing and record-keeping rules in your country [e.g., sales tax and invoicing requirements in Pakistan];</li>
              <li>data protection and privacy laws about the information of your clients and staff;</li>
              <li>employment, safety and industry regulations; and</li>
              <li>laws governing electronic communications and e-commerce.</li>
            </ul>
            <p>Documents generated through the Services (quotations, invoices and reports) are your documents. Review them before sending.</p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">13. Intellectual Property</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>13.1</strong> The Services, Website, software, design, logos, trademarks, Documentation and all related intellectual property are owned by Ovelah or its licensors. Except for the limited rights in these Terms, no rights are transferred.</li>
              <li><strong>13.2</strong> Subject to these Terms, we grant you a limited, non-exclusive, non-transferable, revocable right to access and use the Services during your Subscription or Trial for your internal business purposes.</li>
              <li><strong>13.3</strong> You may not use the Ovelah name or logo without our written permission. If you wish to be named as a customer, we will ask first. [CONFIRM POLICY ON CUSTOMER LOGOS/CASE STUDIES]</li>
              <li><strong>13.4 Feedback.</strong> If you give us suggestions or feedback, you grant us a free, perpetual, worldwide right to use them without obligation, as long as we do not identify you as the source or disclose your Customer Content.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">14. Third-Party Services</h2>
            <p>
              The Services rely on third-party infrastructure and may link to or integrate with third-party products. Those are governed by their own terms, and we are not responsible for them. Failure of a third-party provider outside our reasonable control may affect the Services.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">15. Availability, Support and Maintenance</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>15.1</strong> We aim to keep the Services available and reliable, but we provide them on a commercially reasonable efforts basis. We do not guarantee uninterrupted or error-free service, and no uptime commitment (SLA) applies unless agreed in a separate written contract. [ADD SLA IF OFFERED]</li>
              <li><strong>15.2</strong> We may carry out scheduled or emergency maintenance, and will try to give advance notice where practical.</li>
              <li><strong>15.3</strong> Support is available 24/7 upon request by contacting contact@ovelah.com. Requests are handled on a reasonable-efforts basis, and we do not guarantee a specific response or resolution time unless agreed in a separate written contract.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">16. Confidentiality</h2>
            <p>
              Each party may receive non-public information from the other that is marked or reasonably understood to be confidential. The receiving party will use it only for the purposes of these Terms, protect it with reasonable care, and not disclose it except to personnel and advisors who need to know and are bound by confidentiality, or as required by law. This does not apply to information that is public through no fault of the recipient, already known, independently developed, or lawfully received from another source. Obligations continue for [3] years after termination, and longer for trade secrets.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">17. Warranties and Disclaimers</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>17.1</strong> Each party confirms it has authority to enter into these Terms.</li>
              <li><strong>17.2</strong> To the fullest extent permitted by law, the Services are provided "as is" and "as available". Ovelah disclaims all other warranties, express or implied, including merchantability, fitness for a particular purpose, non-infringement, accuracy, and that the Services will be uninterrupted, secure or free from errors, loss or unauthorized access.</li>
              <li><strong>17.3</strong> Nothing in these Terms excludes warranties or consumer rights that cannot be excluded under applicable law.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">18. Limitation of Liability</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>18.1</strong> To the fullest extent permitted by law, Ovelah will not be liable for any indirect, incidental, special, consequential or punitive damages, or for loss of profits, revenue, business, goodwill, or data, arising from or related to the Services or these Terms, even if advised of the possibility.</li>
              <li><strong>18.2</strong> To the fullest extent permitted by law, Ovelah's total aggregate liability for all claims arising out of or related to the Services or these Terms is limited to the fees you paid to Ovelah in the twelve (12) months before the event giving rise to the claim. [CONFIRM CAP WITH LAWYER]</li>
              <li><strong>18.3</strong> These limits apply regardless of the legal theory (contract, tort, negligence or otherwise). They do not limit liability that cannot be limited by law, such as for fraud or intentional misconduct.</li>
              <li><strong>18.4</strong> Without limiting the above, Ovelah is not responsible for losses caused by your loss of credentials or encryption keys, your own errors in documents or data, or your failure to keep backups.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">19. Indemnification</h2>
            <p>
              You agree to defend, indemnify and hold harmless Ovelah, its owners, officers, employees and contractors from claims, damages, liabilities, costs and expenses (including reasonable legal fees) arising from: (a) your Customer Content; (b) your breach of these Terms or applicable law; (c) your violation of any third party's rights, including the privacy rights of your clients and staff; or (d) disputes between you and your clients or users. We will notify you promptly of any claim and reasonably cooperate at your expense.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">20. Force Majeure</h2>
            <p>
              Neither party is liable for failure or delay caused by events beyond its reasonable control, including natural disasters, war, terrorism, strikes, government action, power or internet outages, cyberattacks, or failures of third-party infrastructure providers. Payment obligations for services already received are not excused.
            </p>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">21. Governing Law and Dispute Resolution</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>21.1</strong> These Terms are governed by the laws of Pakistan, without regard to conflict-of-law rules.</li>
              <li><strong>21.2</strong> The parties will first try to resolve any dispute in good faith by written notice to the other party, allowing [30] days for negotiation.</li>
              <li><strong>21.3</strong> If not resolved, disputes will be submitted to the exclusive jurisdiction of the courts of Islamabad, Pakistan. [OPTIONAL: Alternatively, specify arbitration, such as arbitration seated in Islamabad under the Arbitration Act, with the number of arbitrators, language and rules to be set. Ask your lawyer which suits international customers better.]</li>
              <li><strong>21.4</strong> Either party may seek urgent injunctive relief from a competent court to protect intellectual property or confidential information.</li>
              <li><strong>21.5</strong> Mandatory consumer or data protection rights in your own country are not affected where they apply by law.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">22. General Terms</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Entire agreement:</strong> these Terms, the Privacy Policy, any order form or written quote, and any signed data processing agreement form the whole agreement and replace earlier discussions. If they conflict, the signed agreement or order form prevails.</li>
              <li><strong>Changes:</strong> we may update these Terms. For material changes we will give at least [30] days' notice by email or on the Website. If you keep using the Services after the effective date, you accept the changes. If you object, you may cancel before the date.</li>
              <li><strong>Notices:</strong> to us at contact@ovelah.com; to you at the email on your Account or via in-product notice.</li>
              <li><strong>Assignment:</strong> you may not assign these Terms without our consent. We may assign them in connection with a merger, acquisition or sale of assets.</li>
              <li><strong>Severability:</strong> if any provision is unenforceable, the rest remains in effect.</li>
              <li><strong>No waiver:</strong> failure to enforce a right is not a waiver.</li>
              <li><strong>No agency:</strong> no partnership, joint venture or employment relationship is created.</li>
              <li><strong>Third parties:</strong> no one other than the parties has rights under these Terms.</li>
              <li><strong>Export and sanctions:</strong> you will not use the Services in violation of applicable export control or sanctions laws.</li>
              <li><strong>Language:</strong> the English version controls if translations differ.</li>
              <li><strong>Electronic acceptance:</strong> you agree that electronic acceptance (such as clicking "I agree" or using the Services) is a valid signature and binding agreement.</li>
            </ul>

            <h2 className="mb-4 mt-12 text-2xl font-semibold text-[#0a0a0a]">23. Contact</h2>
            <p>
              Ovelah<br />
              Islamabad, Pakistan<br />
              Operated by [ADD OWNER / OPERATOR FULL NAME]. Business registration is currently pending. [UPDATE WITH LEGAL ENTITY NAME AND REGISTRATION NUMBER ONCE REGISTERED]<br />
              Email: <a href="mailto:contact@ovelah.com" className="text-blue-600 transition-colors hover:text-blue-800 hover:underline">contact@ovelah.com</a>
            </p>

          </div>
        </Container>
      </main>
      
      <Footer />
    </>
  );
}