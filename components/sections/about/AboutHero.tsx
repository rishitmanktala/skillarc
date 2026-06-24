"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/30 via-primary/10 to-background-custom overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-accent/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            variants={itemVariants}
            className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-4 select-none"
          >
            About Us
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal leading-[1.15] mb-6 max-w-3xl"
          >
            Our Story Begins With a{" "}
            <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10">Purpose</span>
              {/* Animated underline */}
              <motion.svg
                className="absolute left-0 -bottom-1 w-full h-[12px] -z-0"
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
                  transition={{ duration: 0.8, ease: "easeOut" as const, delay: 0.6 }}
                />
              </motion.svg>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base md:text-lg lg:text-xl text-muted-grey leading-relaxed max-w-2xl"
          >
            SkillARC was founded by a group of passionate volunteers who saw a gap in standard education: the lack of critical life skills, leadership training, and confidence building for youth to drive grassroots community impact.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
