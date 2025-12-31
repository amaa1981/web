"use client";
// src/components/sections/heroes/HeroVariant1.tsx
import ContactDialog from "@/components/layout/ContactDialog";
import { Button } from "@/components/ui";
import { useState } from "react";

type Props = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  images?: { src: string; alt: string }[];
  slots?: number[][];
};

export default function HeroVariant1({
  title,
  subtitle,
  ctaText,
  ctaLink,
  images,
  slots,
}: Props) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white">
      <main>
        <div className="relative isolate">
          <svg
            aria-hidden="true"
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 left-1/2 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          >
            <div
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
              className="aspect-801/1036 w-[50.0625rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pt-36 pb-32 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                    {title}
                  </h1>
                  <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:max-w-md sm:text-xl/8 lg:max-w-none">
                    {subtitle}
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <Button size="medium" onClick={() => setOpen(true)}>
                      Get started
                    </Button>
                    <ContactDialog open={open} onClose={() => setOpen(false)} />
                  </div>
                </div>
                <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  {slots?.map((slot, slotIndex) => (
                    <div
                      key={slotIndex}
                      className={`w-44 flex-none space-y-8 ${
                        slotIndex === 0
                          ? "ml-auto pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
                          : slotIndex === 1
                            ? "mr-auto sm:mr-0 sm:pt-52 lg:pt-36"
                            : "pt-32 sm:pt-0"
                      }`}
                    >
                      {slot.map((imgIndex, i) =>
                        images && images[imgIndex] ? (
                          <div key={i} className="relative">
                            <img
                              alt={images[imgIndex].alt}
                              src={images[imgIndex].src}
                              className="aspect-2/3 w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                            />
                            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-gray-900/10 ring-inset" />
                          </div>
                        ) : null
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
