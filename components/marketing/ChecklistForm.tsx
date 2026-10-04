"use client";

import { useState } from "react";

export default function ChecklistForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const formData = new FormData(e.currentTarget);
    
    // Honeypot check
    if (formData.get("website_url")) {
      setStatus("success"); // Bot trap triggered, silently succeed
      return;
    }

    try {
      // Placeholder endpoint [REPLACE WITH ACTUAL ENDPOINT/RESEND LOGIC LATER]
      await new Promise((resolve) => setTimeout(resolve, 1000)); 
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] p-8 text-center">
        <h4 className="text-lg font-semibold text-[#0a0a0a] mb-2">Checklist Sent!</h4>
        <p className="text-sm text-[#6b6b6b]">Check your inbox. We've sent the PDF guide to your email.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
      {/* Honeypot field (hidden from real users) */}
      <input type="text" name="website_url" className="hidden" tabIndex={-1} autoComplete="off" />
      
      <input 
        type="email" 
        name="email" 
        required 
        placeholder="Enter your work email" 
        className="h-12 w-full flex-1 rounded-md border border-[#d1d1d1] bg-white px-4 text-sm text-[#0a0a0a] shadow-sm outline-none focus:border-[#0b1f3a] focus:ring-1 focus:ring-[#0b1f3a]" 
      />
      <button 
        type="submit" 
        disabled={status === "loading"}
        className="h-12 whitespace-nowrap rounded-md bg-[#0b1f3a] px-6 text-sm font-semibold text-white transition-all hover:bg-[#0a1526] disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Download Checklist"}
      </button>
    </form>
  );
}