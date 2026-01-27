"use client";
import React from 'react';
// import Image from 'next/image'; // Removed unused Image import
import { ArrowRight, ShieldCheck, HardHat, UserCheck, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function IndustrialSafetyPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link href="/#ai-solutions" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#13787F] transition-colors">
          ← Back to Solutions
        </Link>
      </div>

      {/* 2. HERO SECTION */}
      <section className="pt-12 pb-24">
        {/* REVERTED TO EXACT LAYOUT MATCHING HYGIENE PAGE (grid-cols-2) */}
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 text-[#13787F] mb-6">
               <ShieldCheck size={20} />
               <span className="text-sm font-bold uppercase tracking-widest">PPE Compliance AI</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">            
              Industrial <br />
              <span className="text-[#13787F]">Safety & Compliance</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              Ensure every worker on-site is protected. Our Computer Vision technology 
              instantly detects missing helmets, vests, and safety gear, providing 
              real-time alerts to prevent accidents before they happen.
            </p>
          </div>
           
          {/* THE MEDIA BOX */}
          <div className="relative w-full h-81 rounded-3xl overflow-hidden shadow-xl bg-slate-100">
             {/* Switched to Video Component */}
             <video 
               className="w-full h-full object-cover"
               autoPlay 
               loop 
               muted 
               playsInline
             >
               {/* UPDATE THE SRC BELOW TO YOUR ACTUAL VIDEO FILE PATH */}
               <source src="/images/industrial-safety.mp4" type="video/mp4" />
               Your browser does not support the video tag.
             </video>
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
            
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Intelligent Protective Monitoring</h3>
            
            <div className="w-full space-y-8">
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed text-justify">
                Manual safety checks are intermittent and prone to human error. Our AI provides 
                <strong> 24/7 continuous visual auditing</strong>, identifying non-compliance 
                in milliseconds across multiple camera feeds simultaneously.
              </p>
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed text-justify">
                From high-visibility vests to specialized eyewear and footwear, the system 
                can be trained to recognize any site-specific safety equipment, generating 
                detailed compliance logs and instant supervisor notifications for high-risk violations.
              </p>
            </div>

            {/* THREE PILLARS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t mt-12 pt-10">
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <HardHat className="text-[#13787F]" size={24} /> Gear Detection
                </div>
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <UserCheck className="text-[#13787F]" size={24} /> Instant Verification
                </div>
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <AlertCircle className="text-[#13787F]" size={24} /> Zero-Delay Alerts
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}