import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Engineering & Maintenance",
      desc: "Manage ongoing service contracts, dispatch specialized field teams, and track complex technical documentation across long-term client engagements.",
      slug: "#" // Can link to /industries/engineering-maintenance later
    },
    {
      title: "HVAC & Electrical",
      desc: "Track physical equipment assets, manage recurring inspection schedules, and generate accurate quotations for highly technical installations.",
      slug: "#"
    },
    {
      title: "Facility Management",
      desc: "Centralize requests across massive multi-building campuses. Organize workflows so facility teams arrive at the right wing with the right materials.",
      slug: "#"
    },
    {
      title: "Construction & Contracting",
      desc: "Keep project expenses, labor tracking, and phased invoicing connected to specific job sites to ensure projects remain profitable.",
      slug: "#"
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 md:pt-40">
        <section className="pb-20 md:pb-32">
          <Container>
            <div className="mx-auto max-w-4xl text-center mb-20">
              <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl lg:text-7xl">
                Built for businesses where work happens in the real world.
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6b6b6b] md:text-xl">
                Ovelah isn't generic software. It is structurally designed for service, contracting, and operational businesses.
              </p>
            </div>

            {/* Industry Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((ind, index) => (
                <div key={index} className="group relative flex flex-col justify-between rounded-xl border border-[#e7e7e4] bg-white p-8 md:p-12 transition-shadow hover:shadow-lg">
                  <div>
                    <h2 className="mb-4 text-2xl font-semibold text-[#0a0a0a]">{ind.title}</h2>
                    <p className="text-lg leading-relaxed text-[#6b6b6b] mb-8">{ind.desc}</p>
                  </div>
                  <Link href={ind.slug} className="inline-flex items-center text-sm font-semibold text-[#0b1f3a] group-hover:text-blue-600">
                    Learn more <span className="ml-2">→</span>
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      
      <Footer />
    </>
  );
}