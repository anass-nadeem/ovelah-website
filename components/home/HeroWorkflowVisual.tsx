import Image from "next/image";

interface HeroWorkflowVisualProps {
  imageSrc?: string;
}

export default function HeroWorkflowVisual({ imageSrc }: HeroWorkflowVisualProps) {
  if (imageSrc) {
    return (
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl border border-[#e7e7e4] bg-white shadow-2xl shadow-black/5">
        <div className="flex items-center gap-2 border-b border-[#e7e7e4] bg-[#fcfcfb] px-4 py-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#e7e7e4]" />
        </div>
        <div className="relative h-[calc(100%-41px)] w-full">
          <Image
            src={imageSrc}
            alt="Ovelah dashboard"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div
        role="img"
        aria-label="Example of one job becoming a quotation and then an invoice"
        className="flex w-full flex-col items-center lg:flex-row lg:items-stretch lg:justify-between motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000"
      >
        {/* Card 1: Job */}
        <div className="flex w-full flex-col rounded-xl border border-[#e7e7e4] bg-white p-4 shadow-sm lg:w-[30%]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-[#6b6b6b]">Job</span>
            <span className="rounded bg-[#f7f7f5] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0b1f3a]">
              Quotation sent
            </span>
          </div>
          <h3 className="mb-1 font-semibold text-[#0a0a0a]">JOB-1042</h3>
          <p className="mb-4 text-sm font-medium text-[#0a0a0a]">Chiller service and repair</p>
          <div className="mt-auto space-y-2 border-t border-[#e7e7e4] pt-3 text-xs text-[#6b6b6b]">
            <p><span className="font-medium text-[#0a0a0a]">Client:</span> Northgate Retail</p>
            <p><span className="font-medium text-[#0a0a0a]">Site:</span> Manchester – Arndale store</p>
          </div>
        </div>

        {/* Connector 1 */}
        <div className="flex items-center justify-center py-4 lg:w-[5%] lg:py-0">
          {/* Vertical line (Mobile) */}
          <div className="h-6 w-[1px] bg-[#e7e7e4] lg:hidden relative">
             <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#e7e7e4]"></div>
          </div>
          {/* Horizontal line (Desktop) */}
          <div className="hidden h-[1px] w-full bg-[#e7e7e4] lg:block relative">
             <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 -rotate-45 border-b border-r border-[#e7e7e4]"></div>
          </div>
        </div>

        {/* Card 2: Quotation */}
        <div className="flex w-full flex-col rounded-xl border border-[#e7e7e4] bg-white p-4 shadow-sm lg:w-[30%]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-[#6b6b6b]">Quotation</span>
            <span className="rounded bg-[#f7f7f5] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0b1f3a]">
              Approved
            </span>
          </div>
          <h3 className="mb-1 font-semibold text-[#0a0a0a]">QUO-1042</h3>
          <p className="mb-4 text-lg font-semibold tracking-tight text-[#0b1f3a]">£2,480.00</p>
          <div className="mt-auto border-t border-[#e7e7e4] pt-3 text-xs text-[#6b6b6b]">
            <p>Created from JOB-1042</p>
          </div>
        </div>

        {/* Connector 2 */}
        <div className="flex items-center justify-center py-4 lg:w-[5%] lg:py-0">
          {/* Vertical line (Mobile) */}
          <div className="h-6 w-[1px] bg-[#e7e7e4] lg:hidden relative">
             <div className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-[#e7e7e4]"></div>
          </div>
          {/* Horizontal line (Desktop) */}
          <div className="hidden h-[1px] w-full bg-[#e7e7e4] lg:block relative">
             <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 -rotate-45 border-b border-r border-[#e7e7e4]"></div>
          </div>
        </div>

        {/* Card 3: Invoice */}
        <div className="flex w-full flex-col rounded-xl border border-[#e7e7e4] bg-white p-4 shadow-sm lg:w-[30%]">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-bold uppercase text-[#6b6b6b]">Invoice</span>
            <span className="rounded bg-[#f7f7f5] px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#0b1f3a]">
              Awaiting payment
            </span>
          </div>
          <h3 className="mb-1 font-semibold text-[#0a0a0a]">INV-1042</h3>
          <p className="mb-4 text-lg font-semibold tracking-tight text-[#0b1f3a]">£2,480.00</p>
          <div className="mt-auto border-t border-[#e7e7e4] pt-3 text-xs text-[#6b6b6b]">
            <p>Created from QUO-1042</p>
          </div>
        </div>
      </div>
      
      <p className="mt-6 text-xs text-[#6b6b6b]">
        Example data.
      </p>
    </div>
  );
}