"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
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
      
      <main className="min-h-screen bg-[#fcfcfb] pt-32 pb-24 md:pt-40 md:pb-32">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              
              {/* Left Column (Workday-style Typography & Disclaimers) */}
              <div className="lg:w-5/12 lg:pt-8">
                <h1 className="mb-6 text-4xl font-semibold tracking-tight text-[#0a0a0a] md:text-5xl">
                  Say hello to our sales team.
                </h1>
                
                <p className="text-lg text-[#6b6b6b] mb-12">
                  Want to connect now?<br />
                  <a href="mailto:contact@ovelah.com" className="font-medium text-[#0b1f3a] hover:underline underline-offset-4 transition-all">
                    contact@ovelah.com
                  </a>
                </p>
                
                {/* Enterprise Privacy Text (Hidden on mobile, placed below form on small screens) */}
                <div className="hidden lg:block space-y-6 text-sm text-[#6b6b6b] pr-8">
                  <p>Ovelah will keep you informed with occasional updates about Ovelah products, services and events.</p>
                  <p>If you want to opt-out later, you can unsubscribe at any time.</p>
                  <p>Personal data will be handled in accordance with the Ovelah Privacy Statement.</p>
                </div>
              </div>

              {/* Right Column (The Clean Enterprise Form) */}
              <div className="lg:w-7/12">
                <div className="rounded-xl border border-[#e7e7e4] bg-white p-8 md:p-12 shadow-[0_2px_20px_rgb(0,0,0,0.03)]">
                  
                  {status === "success" ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600 border border-green-100">
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="mb-2 text-2xl font-semibold text-[#0a0a0a]">Request Received</h3>
                      <p className="text-[#6b6b6b]">Thank you for reaching out. Our team will contact you shortly to schedule your demo.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <p className="mb-2 text-sm text-[#6b6b6b]">* All fields are required.</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-sm font-semibold text-[#0a0a0a]">Full Name *</label>
                          <input type="text" name="name" id="name" required className="h-12 w-full rounded-md border border-[#d1d1d1] bg-white px-4 text-sm text-[#0a0a0a] shadow-sm outline-none transition-all focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a]" />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-semibold text-[#0a0a0a]">Business Email *</label>
                          <input type="email" name="email" id="email" required className="h-12 w-full rounded-md border border-[#d1d1d1] bg-white px-4 text-sm text-[#0a0a0a] shadow-sm outline-none transition-all focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a]" />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="company" className="text-sm font-semibold text-[#0a0a0a]">Company Name *</label>
                        <input type="text" name="company" id="company" required className="h-12 w-full rounded-md border border-[#d1d1d1] bg-white px-4 text-sm text-[#0a0a0a] shadow-sm outline-none transition-all focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a]" />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                          <label htmlFor="industry" className="text-sm font-semibold text-[#0a0a0a]">Area of Interest *</label>
                          <select name="industry" id="industry" required className="h-12 w-full rounded-md border border-[#d1d1d1] bg-white px-4 text-sm text-[#0a0a0a] shadow-sm outline-none transition-all focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem] bg-[right_1rem_center] bg-no-repeat appearance-none">
                            <option value="">-- Select area of interest --</option>
                            <option value="Operations Management">Operations Management</option>
                            <option value="Quotation & Billing">Quotation & Billing</option>
                            <option value="Engineering & Maintenance">Engineering & Maintenance</option>
                            <option value="HVAC & Electrical">HVAC & Electrical</option>
                            <option value="Facility Management">Facility Management</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="flex flex-col gap-2">
                          <label htmlFor="teamSize" className="text-sm font-semibold text-[#0a0a0a]">Company Size *</label>
                          <select name="teamSize" id="teamSize" required className="h-12 w-full rounded-md border border-[#d1d1d1] bg-white px-4 text-sm text-[#0a0a0a] shadow-sm outline-none transition-all focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.7rem] bg-[right_1rem_center] bg-no-repeat appearance-none">
                            <option value="">-- Select company size --</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="200+">200+ employees</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm font-semibold text-[#0a0a0a]">How can we help? *</label>
                        <textarea name="message" id="message" required rows={3} className="w-full resize-none rounded-md border border-[#d1d1d1] bg-white p-4 text-sm text-[#0a0a0a] shadow-sm outline-none transition-all focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a]"></textarea>
                      </div>

                      {status === "error" && (
                        <p className="text-sm font-medium text-red-600">Something went wrong. Please try again or email us directly.</p>
                      )}

                      <button 
                        type="submit" 
                        disabled={status === "loading"}
                        className="mt-4 rounded-full bg-[#0b1f3a] px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#0a1526] hover:shadow-md disabled:opacity-70 md:w-max"
                      >
                        {status === "loading" ? "Submitting..." : "Submit"}
                      </button>
                    </form>
                  )}
                </div>

                {/* Mobile Privacy Text */}
                <div className="mt-8 space-y-4 text-sm text-[#6b6b6b] lg:hidden">
                  <p>Ovelah will keep you informed with occasional updates about Ovelah products, services and events. If you want to opt-out later, you can unsubscribe at any time.</p>
                  <p>Personal data will be handled in accordance with the Ovelah Privacy Statement.</p>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </main>
      
      <Footer />
    </>
  );
}