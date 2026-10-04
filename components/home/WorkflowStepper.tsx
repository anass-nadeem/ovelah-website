"use client";

import { useState } from "react";
import Image from "next/image";

const steps = [
  { id: "client", title: "Client", desc: "A job inherits its client.", img: "/dash-hero.png" },
  { id: "location", title: "Location", desc: "A job inherits its location.", img: "/ui-locations.png" },
  { id: "job", title: "Job", desc: "Tracked from request to completion.", img: "/ui-jobs.png" },
  { id: "quotation", title: "Quotation", desc: "A quotation is built from the job.", img: "/ui-quotes_1.png" },
  { id: "work", title: "Work", desc: "Field teams execute the requirements.", img: "/dash-hero.png" },
  { id: "invoice", title: "Invoice", desc: "An invoice follows the completed work. Nothing is typed twice.", img: "/ui-quotes_2.png" },
];

export default function WorkflowStepper() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full">
      {/* Desktop View: Horizontal Tabs */}
      <div className="hidden md:block">
        <div 
          role="tablist" 
          aria-label="Operational Workflow"
          className="flex justify-between border-b border-[#e7e7e4] mb-8"
        >
          {steps.map((step, idx) => (
            <button
              key={step.id}
              role="tab"
              aria-selected={activeStep === idx}
              aria-controls={`panel-${step.id}`}
              id={`tab-${step.id}`}
              onClick={() => setActiveStep(idx)}
              className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors outline-none focus-visible:ring-2 focus-visible:ring-[#0b1f3a] focus-visible:ring-offset-4 min-h-[44px] ${
                activeStep === idx 
                  ? "text-[#0b1f3a] border-b-2 border-[#0b1f3a]" 
                  : "text-[#6b6b6b] hover:text-[#0a0a0a]"
              }`}
            >
              {idx + 1}. {step.title}
            </button>
          ))}
        </div>
        
        <div 
          id={`panel-${steps[activeStep].id}`}
          role="tabpanel"
          aria-labelledby={`tab-${steps[activeStep].id}`}
          className="animate-in fade-in slide-in-from-bottom-2 duration-500"
        >
          <p className="text-xl text-[#0a0a0a] font-medium mb-8 text-center">
            {steps[activeStep].desc}
          </p>
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-xl border border-[#e7e7e4] bg-[#f7f7f5] overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 border-b border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
            </div>
            <div className="relative w-full h-[calc(100%-41px)]">
              <Image 
                src={steps[activeStep].img} 
                alt={`Ovelah ${steps[activeStep].title} interface`}
                fill 
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View: Vertical Accordion */}
      <div className="flex flex-col gap-4 md:hidden">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          return (
            <div key={step.id} className="border border-[#e7e7e4] rounded-xl overflow-hidden bg-white">
              <button
                onClick={() => setActiveStep(isActive ? -1 : idx)}
                aria-expanded={isActive}
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-[#0a0a0a] min-h-[44px] outline-none focus-visible:bg-[#f7f7f5]"
              >
                <span>{idx + 1}. {step.title}</span>
                <svg className={`w-5 h-5 transition-transform ${isActive ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {isActive && (
                <div className="p-5 pt-0 animate-in fade-in duration-300">
                  <p className="text-[#6b6b6b] mb-6">{step.desc}</p>
                  <div className="relative aspect-video w-full rounded-lg border border-[#e7e7e4] overflow-hidden bg-[#f7f7f5]">
                    <Image 
                      src={step.img} 
                      alt={`Ovelah ${step.title} interface`}
                      fill 
                      sizes="100vw"
                      className="object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}