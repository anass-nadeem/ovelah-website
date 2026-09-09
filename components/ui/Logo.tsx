import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-90">
      
      {/* The Ovelah 'O' Mark (SVG) */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Top/Right Arc - Dark Navy */}
        <path 
          d="M16 4C22.6274 4 28 9.37258 28 16C28 19.3137 26.6569 22.3137 24.4853 24.4853" 
          stroke="#0b1f3a" 
          strokeWidth="4.5" 
          strokeLinecap="round"
        />
        {/* Bottom/Left Arc - Soft Gray */}
        <path 
          d="M16 28C9.37258 28 4 22.6274 4 16C4 12.6863 5.34315 9.68629 7.51472 7.51472" 
          stroke="#6b6b6b" 
          strokeWidth="4.5" 
          strokeLinecap="round"
        />
        {/* Central Hub Dot */}
        <circle cx="16" cy="16" r="3.5" fill="#0b1f3a"/>
      </svg>

      {/* The Wordmark */}
      <span className="text-xl font-bold tracking-tight text-[#0a0a0a]">
        Ovelah
      </span>
      
    </Link>
  );
}