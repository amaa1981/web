import Image from "next/image";
import {
  Hero,
  AboutUs,
  Services,
  AISolutions,
  Products,
  FAQ,
  Contact
} from '@/components/sections'
import { SITE_CONFIG } from '@/lib/constants'
import { faqs } from '@/lib/data'
import React from 'react';

function getNodeText(node: React.ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString();
  }
  if (node == null || typeof node === 'boolean') {
    return '';
  }
  if (Array.isArray(node)) {
    return node.map(getNodeText).join('');
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return getNodeText(node.props.children);
  }
  return '';
}

export const metadata = {
  title: "OpenCode Solutions",
  description:
    "OpenCode Solutions is a trusted IT partner, helping Saudi businesses modernize their IT through AI, containerization, automation, and secure open-source solutions.",
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: "OpenCode Solutions",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCode Solutions | IT & AI Partner in Saudi",
    description: "Modern IT & AI-driven solutions for businesses in Saudi Arabia.",
  },
};

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": getNodeText(faq.answer)
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <AboutUs />
      {/* I placed AISolutions here so it appears before the divider */}
      <AISolutions />
      <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      <Services />
      <Products />
      <FAQ />
      <Contact />
    </>
  )
}