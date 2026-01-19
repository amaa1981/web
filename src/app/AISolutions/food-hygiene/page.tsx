"use client";
import React from 'react';
import Image from 'next/image';
import { ShieldCheck, ArrowRight, Camera } from 'lucide-react';
import Link from 'next/link';

export default function FoodHygienePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link href="/#ai-solutions" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#13787F]">
          ← Back to Solutions
        </Link>
      </div>

      {/* 2. HERO SECTION */}
      <section className="pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Automated <br />
              <span className="text-[#13787F]">Hygiene Compliance</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
              Advanced computer vision and IoT integration designed to automate safety protocols 
              for Saudi Arabia's leading food and beverage providers.
            </p>
            <button className="px-8 py-4 bg-[#13787F] text-white rounded-xl font-bold flex items-center gap-2">
                Book a Technical Demo <ArrowRight size={18} />
            </button>
          </div>
          
          {/* THE IMAGE BOX */}
          <div className="relative w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
             {/* This will only show if the file exists in /public/images/food-hygiene-hero.png */}
             <Image 
              src="/images/food-hygiene-hero.png" 
              alt="Food Hygiene AI"
              fill
              className="object-cover"
              priority
             />
             
             {/* This is the "Live Analysis" label you asked about - it sits ON TOP of the photo */}
             <div className="absolute top-6 left-6 flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">Live AI Analysis</span>
             </div>
          </div>
        </div>
      </section>

      {/* 3. THE FULL WIDTH TEXT BOX */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
            
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Staff Safety Gear Verification</h3>
            
            <div className="w-full space-y-8">
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed text-justify">
                Achieve <strong>100% regulatory compliance</strong> with zero human oversight. 
                Utilizing advanced object detection and neural networks, our system monitors staff 
                movements in real-time to ensure that <strong>hairnets, gloves, and face protection</strong> 
                are correctly worn before any individual is granted access to sterile food preparation environments.
              </p>
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed text-justify">
                The AI analyzes the quality of the fit and alerts supervisors the moment a violation occurs. 
                This proactive approach eliminates human error, drastically reduces the risk of cross-contamination, 
                and provides a verifiable digital audit trail that satisfies the strictest international and 
                local <strong>Saudi health standards (SFDA & Balady).</strong> By automating the surveillance of sanitary 
                protocols, businesses can maintain an unblemished reputation while ensuring the safety of every 
                customer through rigorous, non-stop technological enforcement.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t mt-12 pt-10">
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <div className="w-3 h-3 rounded-full bg-[#13787F] animate-pulse" /> Hairnet Check
                </div>
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <div className="w-3 h-3 rounded-full bg-[#13787F] animate-pulse" /> Glove Check
                </div>
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <div className="w-3 h-3 rounded-full bg-[#13787F] animate-pulse" /> Mask Check
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}