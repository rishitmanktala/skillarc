"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const MotionLink = motion.create(Link);

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-70px)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden bg-background-custom">
      {/* Background blur blobs with gentle float animations */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 right-10 w-[300px] h-[300px] rounded-full bg-primary/20 blur-3xl -z-10"
      />
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-accent/15 blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Half: Text Content */}
        <AnimatedSection
          variant="stagger-container"
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Eyebrow Label */}
          <AnimatedSection variant="stagger-item" className="mb-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-accent/10 text-accent-dark font-body text-xs md:text-sm font-semibold tracking-wider uppercase">
              Empowering Youth Across India 🇮🇳
            </span>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection variant="stagger-item">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-charcoal tracking-tight mb-6">
              Shaping Futures, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#89c5d7] to-accent">
                One Skill
              </span>{" "}
              at a Time
            </h1>
          </AnimatedSection>

          {/* Subtext */}
          <AnimatedSection variant="stagger-item">
            <p className="font-body text-base md:text-lg text-muted-grey leading-relaxed max-w-xl mb-8">
              SkillARC is a youth-led initiative empowering young individuals with life skills, leadership, and the confidence to create real change in their communities.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection variant="stagger-item" className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <MotionLink
              href="/get-involved"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px -3px rgba(168,213,226,0.4)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full sm:w-auto text-center font-body font-semibold text-sm bg-primary text-charcoal px-6 py-3 rounded-xl shadow-sm hover:bg-primary/80 transition-colors"
            >
              Get Involved
            </MotionLink>
            <MotionLink
              href="/our-work"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px -3px rgba(45,45,45,0.15)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full sm:w-auto text-center font-body font-semibold text-sm border-2 border-charcoal text-charcoal px-6 py-3 rounded-xl hover:bg-charcoal hover:text-background-custom transition-colors"
            >
              Explore Programs
            </MotionLink>
          </AnimatedSection>

          {/* Mini Impact Stats */}
          <AnimatedSection variant="stagger-item" className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-6 border-t border-primary/20 pt-8 w-full text-center sm:text-left">
            <MotionLink 
              href="/about"
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none text-center sm:text-left"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                <GraduationCap className="w-5 h-5 text-primary-dark shrink-0" />
              </div>
              <span className="font-body text-xs sm:text-sm font-semibold text-charcoal leading-tight">
                500+ Students
              </span>
            </MotionLink>
            <div className="h-4 w-px bg-primary/25 hidden sm:block" />
            <MotionLink 
              href="/our-work"
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none text-center sm:text-left"
            >
              <div className="p-2 bg-accent/10 rounded-lg">
                <BookOpen className="w-5 h-5 text-accent-dark shrink-0" />
              </div>
              <span className="font-body text-xs sm:text-sm font-semibold text-charcoal leading-tight">
                15+ Workshops
              </span>
            </MotionLink>
            <div className="h-4 w-px bg-primary/25 hidden sm:block" />
            <MotionLink 
              href="/about#collaborations"
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none text-center sm:text-left"
            >
              <div className="p-2 bg-highlight/10 rounded-lg">
                <Users className="w-5 h-5 text-highlight-dark shrink-0" />
              </div>
              <span className="font-body text-xs sm:text-sm font-semibold text-charcoal leading-tight">
                10+ Communities
              </span>
            </MotionLink>
          </AnimatedSection>
        </AnimatedSection>

        {/* Right Half: Premium AI Generated Illustration */}
        <AnimatedSection
          variant="scale-in"
          delay={0.25}
          className="lg:col-span-5 w-full flex items-center justify-center relative min-h-[300px] lg:min-h-[500px] mt-8 lg:mt-0"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[480px] aspect-square rounded-3xl overflow-hidden shadow-xl border border-primary/20 bg-background-custom flex items-center justify-center p-6 sm:p-8">
            {/* Ambient pulsing background glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 -z-10"
              animate={{ opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <img
              src="/images/hero-illustration.png"
              alt="Youth Empowerment Illustration — SkillARC"
              className="w-full h-full object-contain select-none"
            />
          </div>
        </AnimatedSection>
        
      </div>
    </section>
  );
}
