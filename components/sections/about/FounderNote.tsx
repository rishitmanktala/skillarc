"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function FounderNote() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgPink overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-none">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3">
            Leadership
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            {"Founder's Message"}
          </h2>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
        >
          
          {/* Left Column: Founder Profile Card */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            {/* Avatar Circle Placeholder with custom gradient */}
            <motion.div
              whileHover={{ rotate: 8, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-full p-2 bg-gradient-to-tr from-primary via-accent to-highlight shadow-md mb-6 cursor-pointer"
            >
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-charcoal/70 font-display text-lg font-bold select-none">
                SG
              </div>
            </motion.div>
            
            <h3 className="font-display font-bold text-xl md:text-2xl text-charcoal">
              Shreya Gupta
            </h3>
            
            <p className="font-body text-xs font-bold text-accent-dark uppercase tracking-widest mt-1">
              Founder
            </p>
          </div>

          {/* Right Column: Handwritten Letter Card */}
          <div className="lg:col-span-8">
            <div className="bg-white/75 border border-white/70 rounded-2xl p-6 md:p-8 shadow-[0_8px_24px_-12px_rgba(158,61,82,0.2)] relative overflow-hidden">
              {/* Top Accent Blob */}
              <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full bg-primary/20 -z-0" />
              
              {/* Quote Pull-out (Pink) */}
              <div className="relative z-10 p-5 mb-8 bg-accent/15 border-l-4 border-accent rounded-r-2xl flex gap-4 items-start">
                <Quote className="w-5 h-5 text-accent-dark shrink-0 mt-1" />
                <p className="font-display italic text-lg text-charcoal font-semibold leading-relaxed">
                  At SkillARC, we believe that every underprivileged individual has the potential to create a better future when given the right guidance, skills, and opportunities.
                </p>
              </div>

              {/* Letter Body */}
              <div className="relative z-10 font-body text-sm md:text-base text-charcoal/90 space-y-5 leading-relaxed">
                <p className="font-semibold text-lg font-display">Dear Friends,</p>
                <p>
                  Our mission is to bridge the gap between potential and possibility by empowering underprivileged students with essential life skills, confidence, leadership abilities, and the mindset needed to navigate real-world challenges.
                </p>
                <p>
                  SkillARC is not just about learning — it is about building individuals who are confident, capable, and ready to make an impact.
                </p>
              </div>

              {/* Signature Line */}
              <div className="relative z-10 border-t border-charcoal/10 mt-8 pt-6 flex flex-col items-start">
                <p className="font-display italic text-2xl text-charcoal/80 mb-2 select-none">
                  Shreya Gupta
                </p>
                <p className="font-body text-xs font-bold text-muted-grey uppercase tracking-wider">
                  Founder, SkillARC Foundation
                </p>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
