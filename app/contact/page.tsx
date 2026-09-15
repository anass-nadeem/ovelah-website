"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // 1. CRITICAL: This stops the browser from doing a default HTML refresh
    e.preventDefault(); 
    setStatus("loading");

    // 2. Package the form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // 3. Send the data to your exact API route
      // NOTE: If your backend file is at app/api/send/route.ts, change this to "/api/send"
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-[#fcfcfb] py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-xl">
            
            <div className="mb-12 text-center">
              <h1 className="text-3xl font-semibold tracking-tight text-[#0a0a0a] md:text-4xl">
                Start your 1-month free trial
              </h1>
              <p className="mt-4 text-base text-[#6b6b6b]">
                Get full access to Ovelah for 30 days. Fill out the details below and we will set up your operational workspace.
              </p>
            </div>

            {status === "success" ? (
              <div className="rounded-2xl border border-[#e7e7e4] bg-[#f7f7f5] p-10 text-center">
                <h3 className="mb-2 text-xl font-semibold text-[#0b1f3a]">Request Sent Successfully</h3>
                <p className="text-[#6b6b6b]">We have received your details and will be in touch shortly to set up your workspace.</p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit} 
                className="flex flex-col gap-6 rounded-2xl border border-[#e7e7e4] bg-white p-8 shadow-sm md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[#0b1f3a]">Full Name</label>
                    <input type="text" name="name" id="name" required className="rounded-lg border border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#0b1f3a]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[#0b1f3a]">Work Email</label>
                    <input type="email" name="email" id="email" required className="rounded-lg border border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#0b1f3a]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-sm font-semibold text-[#0b1f3a]">Company Name</label>
                  <input type="text" name="company" id="company" required className="rounded-lg border border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#0b1f3a]" />
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="industry" className="text-sm font-semibold text-[#0b1f3a]">Industry</label>
                    <input type="text" name="industry" id="industry" required placeholder="e.g. HVAC, Engineering" className="rounded-lg border border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#0b1f3a]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="teamSize" className="text-sm font-semibold text-[#0b1f3a]">Team Size</label>
                    <select name="teamSize" id="teamSize" required className="rounded-lg border border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#0b1f3a]">
                      <option value="">Select size...</option>
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="200+">200+ employees</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[#0b1f3a]">Current Operations (Optional)</label>
                  <textarea name="message" id="message" rows={3} className="resize-none rounded-lg border border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3 text-sm text-[#0a0a0a] outline-none transition-colors focus:border-[#0b1f3a]" placeholder="How are you currently managing your jobs?"></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="mt-4 rounded-xl bg-[#0b1f3a] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1a3057] disabled:opacity-70"
                >
                  {status === "loading" ? "Processing..." : "Start 1 Month Free Trial"}
                </button>

                {status === "error" && (
                  <p className="text-center text-sm font-medium text-red-500">Something went wrong. Please try again.</p>
                )}
              </form>
            )}

          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}