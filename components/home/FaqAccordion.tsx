"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-[#e7e7e4] pb-2">
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between py-4 text-left font-semibold text-[#0a0a0a] min-h-[44px] outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] focus-visible:ring-offset-2 rounded-sm"
            >
              <span className="pr-8">{faq.question}</span>
              <svg className={`w-5 h-5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            <div 
              className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-4" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="text-[#6b6b6b] leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}