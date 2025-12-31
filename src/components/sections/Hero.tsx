"use client";

import { Badge, Button } from "@/components/ui";
import { CircleArrowRightIcon } from "@/components/ui/icons";

function ActionButtons() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="large" onClick={() => scrollToSection("services")}>
        Our Services
      </Button>
      <a href="#products">
        {" "}
        <Button size="large" variant="text">
          Our Products
        </Button>
      </a>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative flex w-full items-center justify-center bg-[url('https://tailframes.com/images/squares-bg.webp')] bg-cover bg-center bg-no-repeat"
      id="hero"
    >
      {/* Overlay for better text readability */}
      <div className="m-auto flex max-w-screen-xl grow flex-col items-center justify-start gap-6 py-20 md:gap-12 px-3 sm:px-8 lg:px-16 xl:px-32">
        <s className="size-10" />
        <div className="flex flex-1 flex-col items-center gap-6 text-center">
          <Badge size="large" variant="secondary">
            OpenCode Solutions
          </Badge>
          <div className="flex max-w-2xl flex-col gap-6">
            <h1 className="text-7xl font-semibold text-slate-950 lg:text-6xl  animate-fade-in">
              Your Trusted IT Partner
            </h1>
            <h2 className="text-3xl font-medium text-slate-700 lg:text-4xl  animate-fade-in">
              for AI & IT Automation in Saudi Arabia
            </h2>

            <p className="text-lg font-normal leading-7 text-slate-500">
              OpenCode delivers AI-driven and open-source IT solutions,
              specializing in AI integration, Kubernetes deployment, automation, 
              and IT modernization to help businesses enhance efficiency and reliability.
            </p>
          </div>
          <ActionButtons />
        </div>
        <s className="size-10" />
      </div>
    </section>
  );
}
