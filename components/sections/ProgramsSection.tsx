"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Brain, Flag, GraduationCap, School, ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Map index or title to corresponding icons
const getProgramIcon = (index: number) => {
  switch (index) {
    case 0:
      return <Brain className="w-8 h-8 text-primary-dark" />;
    case 1:
      return <Flag className="w-8 h-8 text-accent-dark" />;
    case 2:
      return <GraduationCap className="w-8 h-8 text-highlight-dark" />;
    case 3:
      return <School className="w-8 h-8 text-primary-dark" />;
    default:
      return <Brain className="w-8 h-8 text-primary-dark" />;
  }
};

export default function ProgramsSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      {/* Decorative Blur Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Our Work
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Programs Built for Real Impact
          </h2>
        </div>

        {/* Programs Grid - Stagger parent */}
        <AnimatedSection
          variant="stagger-container"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {PROGRAMS.map((program, index) => (
            <AnimatedSection
              key={program.title}
              variant="stagger-item"
              className="w-full h-full"
            >
              {/* Card wrapper with interactive hover state */}
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col bg-white rounded-2xl border border-[#2D2D2D]/5 shadow-[0_4px_20px_-4px_rgba(45,45,45,0.03)] transition-all duration-300 overflow-hidden group h-full cursor-pointer"
              >
                {/* Pastel Gradient Top Bar */}
                <div className="h-[6px] w-full bg-gradient-to-r from-primary to-accent" />
                
                {/* Card Contents */}
                <div className="p-6 md:p-8 flex flex-col items-start flex-grow">
                  {/* Icon Container */}
                  <div className={`icon-box ${index === 1 ? 'icon-box--accent' : index === 2 ? 'icon-box--highlight' : ''} group-hover:scale-110 transition-transform duration-300`}>
                    {getProgramIcon(index)}
                  </div>

                  {/* Program Title */}
                  <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal mb-4">
                    {program.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-base md:text-lg text-muted-grey leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>

                  {/* Link styled button */}
                  <Link href="/our-work" aria-label={`Learn more about ${program.title}`} className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#89c5d7] hover:text-[#5faabf] transition-colors mt-auto group/btn select-none">
                    Explore {program.title}
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </AnimatedSection>

      </div>
    </section>
  );
}
