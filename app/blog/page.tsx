import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { blogs } from "@/lib/data/blogs";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Blog & Insights | Ovelah",
  description: "Read insights and operational strategies for engineering, HVAC, facility management, and construction businesses.",
  url: "https://ovelah.com/blog",
});

export default function BlogListingPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center mb-20">
            <h1 className="mb-8 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-6xl">
              Insights & Operations
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#6b6b6b]">
              Practical strategies for managing service contracts, dispatched teams, and the commercial workflows that keep your business profitable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-xl border border-[#e7e7e4] bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0b1f3a]">{post.category}</span>
                    <span className="text-xs text-[#6b6b6b]">• {post.readTime}</span>
                  </div>
                  <h2 className="mb-4 text-2xl font-semibold text-[#0a0a0a] group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[#6b6b6b] leading-relaxed mb-8">
                    {post.metaDescription}
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#0b1f3a] group-hover:text-blue-600">
                  Read article <span className="ml-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}