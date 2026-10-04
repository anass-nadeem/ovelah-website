import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { blogs, getBlogBySlug } from "@/lib/data/blogs";
import { constructMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};

  return constructMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    url: `https://ovelah.com/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  
  if (!post) {
    notFound();
  }

  // Generate Article JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Ovelah",
      "url": "https://ovelah.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ovelah",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ovelah.com/icon.svg"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
  };

  // Find related posts (excluding current)
  const relatedPosts = blogs.filter((b) => b.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      
      <main className="bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          
          {/* Article Header */}
          <div className="mx-auto max-w-3xl mb-16 text-center">
            <div className="flex justify-center items-center gap-3 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0b1f3a] bg-[#f7f7f5] px-3 py-1 border border-[#e7e7e4] rounded-full">
                {post.category}
              </span>
              <span className="text-sm font-medium text-[#6b6b6b]">{post.readTime}</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl lg:text-6xl mb-8">
              {post.title}
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 border-t border-[#e7e7e4] pt-16">
            
            {/* Left Sidebar: Table of Contents */}
            <aside className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0a0a0a] mb-4">
                  In this article
                </h3>
                <nav className="flex flex-col gap-3 border-l border-[#e7e7e4] pl-4">
                  {post.content.map((section, idx) => (
                    section.heading && (
                      <a key={idx} href={`#section-${idx}`} className="text-sm text-[#6b6b6b] hover:text-[#0b1f3a] transition-colors line-clamp-2">
                        {section.heading}
                      </a>
                    )
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Column: Article Content */}
            <article className="lg:w-2/3 prose prose-lg prose-slate max-w-none text-[#6b6b6b]">
              {post.content.map((section, idx) => (
                <div key={idx} className="mb-10">
                  {section.heading && (
                    <h2 id={`section-${idx}`} className="text-2xl font-semibold text-[#0a0a0a] mt-12 mb-4 scroll-mt-24">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed mb-4">{p}</p>
                  ))}
                  {section.listItems && (
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                      {section.listItems.map((li, liIdx) => (
                        <li key={liIdx}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* In-Content CTA */}
              <div className="mt-16 rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] p-8 text-center">
                <h3 className="text-xl font-semibold text-[#0a0a0a] mb-3">Ready to connect your operations?</h3>
                <p className="text-base mb-6">Stop losing margin in the gaps between the job and the invoice.</p>
                <Link href="/contact" className="inline-block rounded-md bg-[#0b1f3a] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0a1526]">
                  Request a Demo
                </Link>
              </div>
            </article>

          </div>
        </Container>
      </main>

      {/* Related Posts Section */}
      <section className="bg-white py-24 border-t border-[#e7e7e4]">
        <Container>
          <h2 className="text-2xl font-semibold tracking-tight text-[#0a0a0a] mb-12">Related Reading</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((related) => (
              <Link 
                key={related.slug} 
                href={`/blog/${related.slug}`}
                className="group rounded-xl border border-[#e7e7e4] p-8 transition-shadow hover:shadow-lg"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-[#6b6b6b] mb-2 block">{related.category}</span>
                <h3 className="text-xl font-semibold text-[#0a0a0a] group-hover:text-blue-600 transition-colors mb-4">{related.title}</h3>
                <p className="text-sm text-[#6b6b6b] line-clamp-2">{related.metaDescription}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}