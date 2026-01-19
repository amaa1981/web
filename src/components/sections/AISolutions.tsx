"use client";

import React from 'react';
import Link from "next/link";

type Feature = {
  name: string;
  description: string;
  icon: React.ReactNode;
};

const features: Feature[] = [
  {
    name: "Food Hygiene Monitoring",
    description: "Real-time computer vision to ensure safety compliance, monitoring PPE usage, and kitchen cleanliness standards automatically.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="size-6">
        <path style={{ stroke: '#13787F' }} strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    name: "Chatbots & Virtual Assistants",
    description: "Enhance customer engagement with AI-powered chatbots and virtual assistants tailored to your business needs.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="size-6">
        <path style={{ stroke: '#13787F' }} strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
  {
    name: "Industrial Safety & Security",
    description: "AI-powered surveillance to detect unauthorized access and safety hazards in industrial environments.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="size-6">
        <path style={{ stroke: '#13787F' }} strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286Zm0 0v1.5c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-1.5" />
      </svg>
    ),
  },
  {
    name: "Retail Experience Analytics",
    description: "Analyze footfall traffic and customer dwell time to optimize store layouts and improve service efficiency.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="size-6">
        <path style={{ stroke: '#13787F' }} strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a.515.515 0 00.799-.03l5.85-8.625m-18 8.032v3.107c0 .273.222.495.495.495h18.01a.495.495 0 00.495-.495v-9.43a.495.495 0 00-.495-.495h-1.697m-15.018 6.03l2.844-2.844m1.121-1.121l2.844-2.844" />
      </svg>
    ),
  },
  {
    name: "Car Wash Service Analytics",
    description: "Track vehicle throughput and automate membership recognition using high-speed ALPR and vehicle classification AI.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="size-6">
        <path style={{ stroke: '#13787F' }} strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V14.25M3 14.25l1.35-4.723a1.125 1.125 0 0 1 1.081-.815h11.138a1.125 1.125 0 0 1 1.081.815l1.35 4.723M3 14.25h18M15 4.5l-1.5 1.5m0 0l-1.5-1.5m1.5 1.5V1.5m6 4.5l-1.5 1.5m0 0l-1.5-1.5m1.5 1.5V1.5" />
      </svg>
    ),
  },
  {
    name: "Custom Computer Vision",
    description: "Tailor-made AI models built for your specific environment, including defect detection and specialized classification tasks.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" className="size-6">
        <path style={{ stroke: '#13787F' }} strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15M12 12a3 3 0 110-6 3 3 0 010 6zm0 0v6m-3-3h6" />
      </svg>
    ),
  },
];

export default function AISolutions() {
  return (
    <section className="py-24 bg-white" id="ai-solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            AI Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Specialized intelligence for modern Saudi enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature) => {
            // Logic to determine the correct URL
            const isFoodHygiene = feature.name === "Food Hygiene Monitoring";
            const linkHref = isFoodHygiene 
              ? "/AISolutions/food-hygiene" 
              : `/services/${feature.name.toLowerCase().replace(/ & | /g, "-")}`;

            return (
              <Link
                key={feature.name}
                href={linkHref}
                className="group"
              >
                <div className="h-full bg-[#F3F4F6] rounded-2xl p-8 transition-all duration-300 group-hover:bg-[#13787F] cursor-pointer shadow-sm">
                  
                  {/* Icon Wrapper */}
                  <div className="bg-white rounded-full flex justify-center items-center mb-6 w-12 h-12 transition-all duration-300 group-hover:bg-white/20">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300 group-hover:text-white">
                    {feature.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                    {feature.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}