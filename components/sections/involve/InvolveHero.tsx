"use client";

import { motion } from "framer-motion";

export default function InvolveHero() {
  const tabs = [
    { id: "volunteer", label: "Volunteer" },
    { id: "intern", label: "Intern" },
    { id: "partner", label: "Partner" },
    { id: "donate", label: "Donate" },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/30 via-primary/10 to-background-custom overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-4 select-none">
            Get Involved
          </span>

          {/* Headline */}
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-charcoal tracking-tight leading-[1.15] max-w-3xl mb-8">
            Be the Change. Join{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary-dark via-primary to-accent-dark">
                SkillARC.
              </span>
              <motion.svg
                className="absolute left-0 -bottom-1 w-full h-[10px] -z-0"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <motion.path
                  d="M0,5 Q50,1 100,5"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.5 }}
                />
              </motion.svg>
            </span>
          </h1>

          {/* Tab Pills */}
          <div className="grid grid-cols-2 gap-3 w-full max-w-[320px] sm:max-w-none sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 select-none">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className="font-body font-semibold text-sm bg-white hover:bg-primary/20 text-charcoal border border-charcoal/5 px-4 py-2.5 sm:px-6 sm:py-3 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 focus:outline-none w-full sm:w-auto text-center"
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
