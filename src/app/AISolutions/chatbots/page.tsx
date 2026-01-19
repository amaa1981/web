"use client";
import React from 'react';
import Image from 'next/image';
import { MessageSquare, ArrowRight, Bot, Sparkles, Languages } from 'lucide-react';
import Link from 'next/link';

export default function ChatbotPage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      {/* 1. NAVIGATION */}
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <Link href="/#ai-solutions" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#13787F]">
          ← Back to Solutions
        </Link>
      </div>

        {/* HERO SECTION */}
        <section className="pt-12 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            
            {/* TEXT CONTENT */}
            <div>
            <div className="flex items-center gap-2 text-[#13787F] mb-6">
                <Bot size={20} />
                <span className="text-sm font-bold uppercase tracking-widest">Generative AI</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.1]">
                Next-Gen <br />
                <span className="text-[#13787F]">Virtual Assistants</span>
            </h1>
            <p className="text-xl text-slate-500 mb-10 leading-relaxed">
                Custom-trained LLMs designed for Saudi enterprises. Automate customer support, 
                internal workflows, and multilingual inquiries with human-like precision.
            </p>
            </div>
            
            {/* THE IMAGE CONTAINER - COMPLETELY EDGELESS */}
            <div className="relative w-full h-[500px] flex justify-center items-center">
            <Image 
                src="/images/chatbot-image.png" 
                alt="AI Chatbot"
                fill
                className="object-contain" // This ensures the image keeps its natural shape
                priority
            />
            </div>
        </div>
        </section>

      {/* 3. CORE CAPABILITIES */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white p-10 lg:p-16 rounded-[3rem] border border-slate-100 shadow-sm">
            
            <h3 className="text-4xl font-bold text-slate-900 mb-8">Intelligent</h3>
            
            <div className="w-full space-y-8">
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed text-justify">
              Our chatbots are engineered with advanced cognitive capabilities, allowing them to understand complex intent and provide human-like reasoning. 
              Unlike standard automated systems, they adapt to the specific context of your business, ensuring every interaction is natural, intuitive, and sophisticated.
              </p>
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed text-justify">
                Built with advanced <strong>Retrieval-Augmented Generation (RAG)</strong>, the chatbot only 
                provides answers based on your company's verified documentation, eliminating "AI hallucinations" 
                and ensuring 100% factual accuracy in every interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t mt-12 pt-10">
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <Languages className="text-[#13787F]" /> Cognitive Understanding
                </div>
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <Sparkles className="text-[#13787F]" /> Verified Accuracy
                </div>
                <div className="flex items-center gap-4 text-base font-bold text-slate-800">
                  <MessageSquare className="text-[#13787F]" /> Contextual Logic
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}