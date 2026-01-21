"use client";

import { Badge } from "@/components/ui";

export default function Hero() {
  return (
    <section
      // UPDATED: Added 'min-h-screen' to force full height
      className="relative flex w-full min-h-screen items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* --- BACKGROUND VIDEO START --- */}
      <video
        // 'object-cover' ensures the video covers the whole area without distortion
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/AISolutions.mp4" type="video/mp4" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/70"></div>
      {/* --- BACKGROUND VIDEO END --- */}

      {/* Content */}
      <div className="relative z-10 m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 py-20 md:gap-12 px-3 sm:px-8 lg:px-16 xl:px-32">
        <s className="size-10" />
        <div className="flex flex-1 flex-col items-center gap-6 text-center">

          <div className="flex max-w-2xl flex-col gap-6">
            <h1 className="text-7xl font-semibold text-white lg:text-6xl animate-fade-in">
              Your Trusted IT Partner
            </h1>
            <h2 className="text-3xl font-medium text-slate-200 lg:text-4xl animate-fade-in">
              for AI Solutions in Saudi Arabia
            </h2>
          </div>
          
        </div>
        <s className="size-10" />
      </div>
    </section>
  );
}