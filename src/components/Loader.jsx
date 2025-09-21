import React from "react";
export default function Loader({ size = "md", message = "Loading Meals...", ariaLabel = "Meal Map is loading" }) {
  const sizes = {
    sm: {
      wrapper: "w-20 h-20",
      svg: "w-10 h-10",
      text: "text-sm",
    },
    md: {
      wrapper: "w-28 h-28",
      svg: "w-14 h-14",
      text: "text-base",
    },
    lg: {
      wrapper: "w-40 h-40",
      svg: "w-20 h-20",
      text: "text-lg",
    },
  };
  const s = sizes[size] || sizes.md;

  return (
    <div role="status" aria-live="polite" aria-label={ariaLabel} className="flex flex-col items-center justify-center gap-3 mt-10">
      <div className={`relative ${s.wrapper} flex items-center justify-center`}> 
        {/* Map pin + plate combo */}
        <div className="absolute -bottom-2 flex flex-col items-center">
          <div className={`rounded-full ${s.svg} flex items-center justify-center bg-white/90 shadow-lg border border-white/30`}> 
            {/* plate with utensils (spinning) */}
            <svg viewBox="0 0 64 64" className="inline-block" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <g transform="translate(32,32)">
                {/* plate (pulsing) */}
                <circle r="16" className="fill-current text-slate-100 dark:text-slate-800 animate-pulse" />
                {/* fork (spinning) */}
                <g className="transform-gpu animate-spin" style={{ transformOrigin: '32px 32px' }}>
                  <path d="M-2 -10 L0 -10 L0 6 L-2 6 Z" className="fill-current text-amber-600" />
                  <rect x="2" y="-10" width="3" height="16" rx="1" className="fill-current text-amber-600" />
                </g>
                {/* knife (bouncing) */}
                <g className="translate-y-[-4px] animate-bounce-slow">
                  <rect x="6" y="-12" width="3" height="18" rx="1" className="fill-current text-rose-500" />
                </g>
              </g>
            </svg>
          </div>
        </div>

        {/* Pin shadow and marker */}
        <svg viewBox="0 0 24 24" className={`${s.svg} opacity-90`} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 2C8.686 2 6 4.686 6 8c0 4.418 6 12 6 12s6-7.582 6-12c0-3.314-2.686-6-6-6z" className="fill-current text-emerald-500 shadow-lg drop-shadow-lg animate-bounce-slow" />
          <circle cx="12" cy="8" r="2.8" className="fill-current text-white" />
        </svg>

        {/* subtle pulse under the pin */}
        <span className="absolute -bottom-6 block w-6 h-1 rounded-full bg-emerald-400 opacity-30 blur-sm animate-pulse" />
      </div>

      {/* Brand/text with subtle shimmer */}
      <div className="flex flex-col items-center">
        <div className={`${s.text} font-semibold tracking-wide bg-gradient-to-r from-amber-500 via-rose-500 to-emerald-500 bg-clip-text text-transparent animate-shimmer`}>Meal Map</div>
        {message && <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{message}</div>}
      </div>

      {/* Small inline styles for animations that Tailwind may not provide by default */}
      <style>{`
        @keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }
        .animate-spin { animation: spin 1.4s linear infinite; }

        @keyframes bounce-slow { 0%, 100% { transform: translateY(0) } 50% { transform: translateY(-6%) } }
        .animate-bounce-slow { animation: bounce-slow 1.6s infinite ease-in-out; }

        @keyframes shimmer { 0% { background-position: -100% 0 } 100% { background-position: 200% 0 } }
        .animate-shimmer { background-size: 200% 100%; animation: shimmer 2.5s linear infinite; }
      `}</style>
    </div>
  );
}
