"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/config/placeholders";

export default function PricingCard() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div className="mx-auto max-w-2xl text-center">
      
      {/* The Toggle */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <span className={`text-sm font-medium transition-colors ${!isAnnual ? "text-[#0a0a0a]" : "text-[#6b6b6b]"}`}>
          Monthly
        </span>
        <button
          role="switch"
          aria-checked={isAnnual}
          aria-label="Toggle annual billing"
          onClick={() => setIsAnnual(!isAnnual)}
          className="relative inline-flex h-7 w-12 items-center rounded-full bg-[#e7e7e4] transition-colors hover:bg-[#d1d1d1] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a] min-h-[44px] min-w-[44px]"
        >
          <span
            className={`inline-block h-5 w-5 transform rounded-full bg-[#0b1f3a] transition-transform ${
              isAnnual ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
        <span className={`text-sm font-medium transition-colors flex items-center gap-2 ${isAnnual ? "text-[#0a0a0a]" : "text-[#6b6b6b]"}`}>
          Annual
          {siteConfig.pricing.annualDiscountPercent && isAnnual && (
            <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-semibold text-green-700 border border-green-200">
              Save {siteConfig.pricing.annualDiscountPercent}
            </span>
          )}
        </span>
      </div>

      {/* The Main Card */}
      <div className="rounded-2xl border border-[#e7e7e4] bg-white p-8 md:p-12 shadow-[0_0_40px_rgba(11,31,58,0.06)] text-left relative">
        <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-10 pb-10 border-b border-[#e7e7e4]">
          <div>
            <h2 className="text-xl font-semibold text-[#0a0a0a] mb-2">Ovelah Platform</h2>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-semibold tracking-tight text-[#0a0a0a]">$100</span>
              <span className="text-lg text-[#6b6b6b] font-medium">/month</span>
            </div>
            <p className="text-sm text-[#6b6b6b] mt-2">
              {isAnnual ? "Billed annually." : "Billed monthly."} Final price confirmed in a custom quote. Taxes extra.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0 md:w-56">
            <Link href="/contact?interest=pricing" className="flex items-center justify-center min-h-[44px] w-full rounded-md bg-[#0b1f3a] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#0a1526] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a]">
              Request a Custom Quote
            </Link>
            <Link href="/contact" className="flex items-center justify-center min-h-[44px] w-full rounded-md border border-[#e7e7e4] bg-white px-6 text-sm font-semibold text-[#0a0a0a] transition-colors hover:bg-[#f7f7f5] outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0b1f3a]">
              Start free trial
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-[15px] text-[#0a0a0a]">
          {[
            "Clients & Locations",
            "Job management",
            "Quotation & invoice engine",
            "Expenses & asset tracking",
            "Reporting",
            "Encrypted data hosted in the Asia region",
            "Support 24/7 upon request",
            siteConfig.pricing.includedUsers,
            siteConfig.pricing.includedLocations
          ].map((feature, i) => feature ? (
            <div key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              <span>{feature}</span>
            </div>
          ) : null)}
        </div>
        
        {siteConfig.pricing.localPkrBilling && (
          <div className="mt-8 pt-6 border-t border-[#e7e7e4]">
            <p className="text-sm text-[#6b6b6b] flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Local PKR billing and invoicing available for businesses registered in Pakistan.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}