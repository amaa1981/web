"use client";

import { useState } from "react";
import ContactDialog from "@/components/layout/ContactDialog";
import { Button } from "@/components/ui";

type CtaProps = {
  heading: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
};

export default function Cta({ data }: { data: CtaProps }) {
  const [open, setOpen] = useState(false);
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            {data.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
            {data.subtitle}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              size="medium"
              onClick={() => setOpen(true)}
              className="bg-white text-gray-900 hover:text-white"
            >
              {data.ctaText}
            </Button>
            <ContactDialog open={open} onClose={() => setOpen(false)} />
          </div>

          {/* Decorative gradient blob */}
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#cta-gradient)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="cta-gradient">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#29928F" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
