import Image from "next/image";
import {
  Hero,
  AboutUs,
  // Services,
  AISolutions,
  // Products,
  FAQ,
  Contact,
  // LogoCloud // <--- Option A: If you exported it from the 'sections' index file
} from '@/components/sections'

// Option B: Import directly if you haven't updated the @/components/sections/index.ts file yet
// import LogoCloud from '@/components/sections/LogoCloud'; // <--- NEW (Uncomment this and use your actual component name)

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
  title: "OpenCode AI | Advanced AI Solutions",
  description:
    "OpenCode Solutions is your premier partner for AI Integration, Large Language Models (LLM), and intelligent automation in Saudi Arabia.",
  openGraph: {
    title: "OpenCode AI | Advanced AI Solutions",
    description: "Leading the AI transformation for businesses in Saudi Arabia with LLMs and Automation.",
    url: SITE_CONFIG.url,
    siteName: "OpenCode AI",
    locale: "en_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenCode AI | AI & Automation Partner",
    description: "Specialized AI, LLM, and Automation solutions for Saudi enterprises.",
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
      
      {/* --- NEW SECTION PLACEMENT --- */}
      {/* <LogoCloud /> */}  {/* <--- Uncomment this line and match the name of your import */}
      
      {/* --- HIDDEN SECTIONS START --- */}
      
      <AboutUs />
      
      <AISolutions />

      {/* Divider is hidden because it separated sections that are now gone */}
      {/* <div className="my-8 h-[1px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div> */}
      
      {/* <Services /> */}
      
      {/* <Products /> */}
      
      {/* --- HIDDEN SECTIONS END --- */}

      <FAQ />
      <Contact />
    </>
  )
}