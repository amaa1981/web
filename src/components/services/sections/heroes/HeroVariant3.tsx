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
  image?: { src: string; alt: string };
  images?: { src: string; alt: string }[];
  slots?: number[][];
};

export default function HeroVariant1({
  title,
  subtitle,
  ctaText,
  ctaLink,
  image,
  images,
  slots,
}: Props) {
  const [open, setOpen] = useState(false);
  const heroImage = image || images?.[0];

  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* Background pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            id="hero-pattern"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#hero-pattern)"
          strokeWidth={0}
        />
      </svg>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:px-8 lg:py-40 lg:items-center">
        {/* Text */}
        <div className="max-w-2xl">
          <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            {title}
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
            {subtitle}
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button size="medium" onClick={() => setOpen(true)}>
              {ctaText}
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        {image && (
          <div className="mt-16 lg:mt-0 lg:-mr-16">
            <img
              alt={image.alt}
              src={image.src}
              className="w-full h-full max-h-[700px] object-cover rounded-md"
            />
          </div>
        )}
      </div>

      {/* Contact Dialog */}
      <ContactDialog open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
