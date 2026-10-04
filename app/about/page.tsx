import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import type { Organization } from "schema-dts";
import { siteConfig } from "@/lib/config/placeholders";

export const metadata = constructMetadata({
  title: "About Ovelah | Practical Operations Software",
  description: "Ovelah builds practical software for companies that manage real operational work. Based in Islamabad, Pakistan, we focus on clearing bottlenecks.",
  url: "https://ovelah.com/about",
});

export default function AboutPage() {
  const orgSchema: Organization = {
    "@type": "Organization",
    name: "Ovelah",
    url: "https://ovelah.com",
    email: "contact@ovelah.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Islamabad",
      addressCountry: "PK"
    }
  };

  const { about } = siteConfig;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32 selection:bg-[#0b1f3a] selection:text-white">
        
        {/* 1. HERO */}
        <section className="pb-20 md:pb-24">
          <Container>
            <div className="max-w-3xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#6b6b6b]">
                About Ovelah
              </p>
              <h1 className="mb-8 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-[#0a0a0a] leading-[1.1]">
                Software for businesses that keep things moving.
              </h1>
              <p className="max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                We build practical software for companies that manage real operational work: dispatching teams, quoting jobs and getting paid.
              </p>
            </div>
          </Container>
        </section>

        {/* 2. THE PROBLEM WE SAW */}
        <section className="bg-white border-y border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl leading-tight">
                  Service and maintenance companies are forced to choose between fragmented spreadsheets and enterprise systems that take months to learn.
                </h2>
              </div>
              <div className="lg:col-span-7 prose prose-lg max-w-none text-[#6b6b6b]">
                <p>
                  We saw that the hardest part of service operations isn't the physical work—it's the coordination. A quotation sits in one tool, a job details list in a chat thread, and an invoice is built from memory a week later. 
                </p>
                <p>
                  Ovelah took a third path: understand how these businesses actually work in the real world, then build clearer, faster workflows. By connecting clients, locations, jobs, and invoices into one continuous chain, we eliminate the gaps where margin and time are quietly lost.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 3. OUR ORIGIN (Conditional) */}
        {about.founderStory && (
          <section className="py-24 md:py-32 border-b border-[#e7e7e4]">
            <Container>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#0a0a0a] mb-8">
                  Where We Started
                </h2>
                <div className="prose prose-lg mx-auto text-[#6b6b6b]">
                  <p className="mb-6">
                    Ovelah grew directly alongside a working maintenance company, Infinity Engineering Solutions. We didn't build theoretical features in a vacuum; we built tools to solve actual, daily bottlenecks in scheduling, dispatching, and billing for field teams.
                  </p>
                  <p className="text-xl font-medium text-[#0a0a0a] leading-relaxed">
                    "{about.founderStory}"
                  </p>
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* 4. HOW WE BUILD */}
        <section className="bg-[#f7f7f5] border-b border-[#e7e7e4] py-24 md:py-32">
          <Container>
            <div className="max-w-2xl mb-16">
              <h2 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl mb-4">
                Our approach to software.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8 sm:p-10 transition-shadow hover:shadow-sm">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Product first</h3>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">Credibility comes from real capability and real use.</p>
                <p className="text-sm text-[#0a0a0a] font-medium border-t border-[#e7e7e4] pt-4 mt-auto">
                  We focus on shipping tools that directly process your daily quotes and invoices.
                </p>
              </div>

              {/* Card 2 */}
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8 sm:p-10 transition-shadow hover:shadow-sm">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Built around real work</h3>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">Designed for dispatch, site visits and field documentation.</p>
                <p className="text-sm text-[#0a0a0a] font-medium border-t border-[#e7e7e4] pt-4 mt-auto">
                  Your locations and jobs share one reality, avoiding miscommunication.
                </p>
              </div>

              {/* Card 3 */}
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8 sm:p-10 transition-shadow hover:shadow-sm">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Clear interfaces</h3>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">Software shouldn't need a manual.</p>
                <p className="text-sm text-[#0a0a0a] font-medium border-t border-[#e7e7e4] pt-4 mt-auto">
                  Clean design prevents errors when field teams log complex service data.
                </p>
              </div>

              {/* Card 4 */}
              <div className="rounded-xl border border-[#e7e7e4] bg-white p-8 sm:p-10 transition-shadow hover:shadow-sm">
                <svg className="w-6 h-6 text-[#0b1f3a] mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Practical systems</h3>
                <p className="text-[#6b6b6b] leading-relaxed mb-4">We solve real bottlenecks, not theoretical ones.</p>
                <p className="text-sm text-[#0a0a0a] font-medium border-t border-[#e7e7e4] pt-4 mt-auto">
                  Tying expenses directly to assets prevents quiet revenue loss.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 5. WHAT WE'RE BUILDING TOWARD (Timeline) */}
        {about.timeline && about.timeline.length > 0 && (
          <section className="bg-white border-b border-[#e7e7e4] py-24">
            <Container>
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] mb-12">
                  What we are building toward.
                </h2>
                <div className="relative border-l border-[#e7e7e4] ml-3 space-y-12">
                  {about.timeline.map((item, idx) => (
                    <div key={idx} className="relative pl-8">
                      {/* Timeline Dot */}
                      <div className={`absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full ${item.status === 'completed' ? 'bg-[#0b1f3a]' : 'bg-white border-2 border-[#e7e7e4]'}`}></div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-1">
                        <span className="text-sm font-semibold text-[#6b6b6b]">{item.date}</span>
                        {item.status === 'planned' && (
                          <span className="inline-flex w-max items-center rounded-full bg-[#f7f7f5] border border-[#e7e7e4] px-2.5 py-0.5 text-xs font-semibold text-[#6b6b6b]">
                            Planned
                          </span>
                        )}
                      </div>
                      <h3 className={`text-lg font-medium ${item.status === 'planned' ? 'text-[#6b6b6b]' : 'text-[#0a0a0a]'}`}>
                        {item.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        )}

        {/* 6. PEOPLE (Conditional) */}
        {about.team && about.team.length > 0 && (
          <section className="py-24 border-b border-[#e7e7e4]">
            <Container>
              <div className="max-w-3xl mb-12">
                <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">
                  The Team
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {about.team.map((member: any, idx: number) => (
                  <div key={idx} className="flex flex-col rounded-xl border border-[#e7e7e4] bg-white p-6">
                    <div className="flex items-center gap-4 mb-4">
                      {member.image ? (
                        <div className="relative h-12 w-12 rounded-full overflow-hidden border border-[#e7e7e4]">
                          <Image src={member.image} alt={member.name} fill className="object-cover" />
                        </div>
                      ) : (
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f7f5] border border-[#e7e7e4] text-[#0b1f3a] font-semibold">
                          {member.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h3 className="font-semibold text-[#0a0a0a]">{member.name}</h3>
                        <p className="text-sm text-[#6b6b6b]">{member.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[#6b6b6b] leading-relaxed mb-6">
                      {member.bio}
                    </p>
                    {member.linkedin && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0b1f3a] hover:underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] rounded-sm mt-auto w-max">
                        LinkedIn →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* 7. WHERE WE ARE */}
        <section className="bg-white border-b border-[#e7e7e4] py-24">
          <Container>
            <div className="max-w-xl mx-auto rounded-2xl border border-[#e7e7e4] bg-[#fcfcfb] p-8 sm:p-12 text-center shadow-sm">
              <svg className="w-8 h-8 text-[#0a0a0a] mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
              <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] mb-4">
                Based in Islamabad, Pakistan.
              </h2>
              <p className="text-lg text-[#6b6b6b] mb-8">
                Working with teams locally and internationally. Support available 24/7 upon request.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a href="mailto:contact@ovelah.com" className="text-base font-semibold text-[#0b1f3a] hover:underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] rounded-sm">
                  contact@ovelah.com
                </a>
                {typeof about.contactPhone === "string" && (
                  <a href={`tel:${about.contactPhone.replace(/\s+/g, '')}`} className="text-base font-medium text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] rounded-sm">
                    {about.contactPhone}
                  </a>
                )}
              </div>
            </div>
          </Container>
        </section>

        {/* 8. CLOSING CTA */}
        <section className="bg-[#fcfcfb] py-32 text-center">
          <Container>
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
              See how Ovelah can fit your operations.
            </h2>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/contact" className="min-h-[44px] w-full rounded-md bg-[#0b1f3a] px-8 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto flex items-center justify-center">
                Request a Demo
              </Link>
              <Link href="/contact" className="min-h-[44px] w-full rounded-md border border-[#e7e7e4] bg-white px-8 py-3 text-center text-sm font-medium text-[#0a0a0a] transition-colors hover:bg-[#f7f7f5] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] sm:w-auto flex items-center justify-center">
                Start free trial
              </Link>
            </div>
            <p className="mt-4 text-xs text-[#6b6b6b]">1 month free. No card required.</p>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  );
}