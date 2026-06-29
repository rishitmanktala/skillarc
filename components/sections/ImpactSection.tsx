"use client";

import { useEffect, useRef } from "react";
import { useInView, motion, useMotionValue, useTransform, animate } from "framer-motion";
import { IMPACT_STATS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

// Helper component to handle count-up animation when in view using Framer Motion tracking
function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const cleanNumStr = value.replace(/,/g, "").replace(/\+/g, "");
  const target = parseInt(cleanNumStr, 10);

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formatted = Math.floor(latest).toLocaleString("en-IN");
    return formatted + (value.includes("+") ? "+" : "");
  });

  useEffect(() => {
    if (isInView && !isNaN(target)) {
      const controls = animate(count, target, {
        duration: 2.0,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, target, count]);

  return (
    <motion.span ref={ref} className="font-display font-bold text-4xl md:text-5xl text-charcoal">
      {!isNaN(target) ? rounded : value}
    </motion.span>
  );
}

export default function ImpactSection() {
  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-bgBlue border-b border-primary/10">
      {/* Background blobs for design depth */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Our Impact
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Numbers That Speak for Themselves
          </h2>
        </div>

        {/* Stats Grid - stagger container */}
        <AnimatedSection
          variant="stagger-container"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {IMPACT_STATS.map((stat, index) => (
            <AnimatedSection
              key={stat.label}
              variant="stagger-item"
              className={`flex flex-col items-center justify-center p-6 md:p-8 bg-white/80 rounded-2xl border border-white/70 border-t-4 ${index % 3 === 0 ? 'border-t-accent' : index % 3 === 1 ? 'border-t-primary' : 'border-t-highlight'} shadow-[0_8px_24px_-12px_rgba(55,108,122,0.28)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_14px_30px_-14px_rgba(158,61,82,0.25)] group ${index === 4 ? 'col-span-2 sm:col-span-1' : ''}`}
            >
              <div className="mb-2">
                <Counter value={stat.value} />
              </div>
              <p className="font-body text-sm font-medium text-muted-grey text-center">
                {stat.label}
              </p>
            </AnimatedSection>
          ))}
        </AnimatedSection>

      </div>
    </section>
  );
}
