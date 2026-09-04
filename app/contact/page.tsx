"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <>
      <Navbar />
      
      <main className="py-20 md:py-32">
        <Container>
          
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-6 text-xs font-bold tracking-[0.2em] text-[#0b1f3a]">
              GET IN TOUCH
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#0a0a0a] md:text-5xl">
              Let's talk about your operations.
            </h1>
            <p className="mx-auto mt-6 text-base leading-relaxed text-[#6b6b6b] md:text-lg">
              Fill out the form below or email us directly at <a href="mailto:contact@ovelah.com" className="font-medium text-[#0a0a0a] underline underline-offset-4">contact@ovelah.com</a>.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-xl rounded-2xl border border-[#e7e7e4] bg-[#f7f7f5] p-6 shadow-sm md:p-10">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-[#0a0a0a]">Name</label>
                  <input type="text" id="name" name="name" required disabled={status === "loading"} className="rounded-lg border border-[#d5d5d0] bg-white px-4 py-3 text-sm transition focus:border-[#0b1f3a] focus:outline-none focus:ring-1 focus:ring-[#0b1f3a] disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-[#0a0a0a]">Email</label>
                  <input type="email" id="email" name="email" required disabled={status === "loading"} className="rounded-lg border border-[#d5d5d0] bg-white px-4 py-3 text-sm transition focus:border-[#0b1f3a] focus:outline-none focus:ring-1 focus:ring-[#0b1f3a] disabled:opacity-50" placeholder="john@company.com" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="company" className="text-sm font-medium text-[#0a0a0a]">Company</label>
                <input type="text" id="company" name="company" disabled={status === "loading"} className="rounded-lg border border-[#d5d5d0] bg-white px-4 py-3 text-sm transition focus:border-[#0b1f3a] focus:outline-none focus:ring-1 focus:ring-[#0b1f3a] disabled:opacity-50" placeholder="Company Name" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-[#0a0a0a]">Message</label>
                <textarea id="message" name="message" required rows={4} disabled={status === "loading"} className="rounded-lg border border-[#d5d5d0] bg-white px-4 py-3 text-sm transition focus:border-[#0b1f3a] focus:outline-none focus:ring-1 focus:ring-[#0b1f3a] disabled:opacity-50" placeholder="How can we help you improve your operations?"></textarea>
              </div>

              <button type="submit" disabled={status === "loading" || status === "success"} className="btn-primary mt-2 w-full py-4 text-base disabled:opacity-70">
                {status === "loading" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-center text-sm font-medium text-red-600">Something went wrong. Please try emailing us directly.</p>
              )}
              
            </form>
          </div>

        </Container>
      </main>

      <Footer />
    </>
  );
}