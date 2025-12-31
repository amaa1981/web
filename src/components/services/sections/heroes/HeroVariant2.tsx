"use client";

import { useState } from "react";
import ContactDialog from "@/components/layout/ContactDialog";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import heroImg from "@/public/images/it-automation-hero.jpg";
type Props = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink?: string;
  image?: { src: string; alt: string };
};

export default function HeroVariant1({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 w-full h-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="hero-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#hero-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        {/* Text */}
        <div className="mx-auto max-w-2xl lg:mx-0 lg:shrink-0 lg:pt-8">
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            {ctaLink ? (
              <a
                href={ctaLink}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {ctaText}
              </a>
            ) : (
              <button
                onClick={() => setOpen(true)}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {ctaText}
              </button>
            )}
          </div>
        </div>

        {/* Hero Image */}
        {image && (
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
                <img
                  alt={image.alt}
                  src={image.src}
                  className="w-full rounded-md ring-1 shadow-2xl ring-gray-900/10"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Dialog */}
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
