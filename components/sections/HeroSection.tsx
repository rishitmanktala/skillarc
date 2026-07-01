"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Users } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useState, useEffect } from "react";

const MotionLink = motion.create(Link);

const SLIDES = [
  { src: "/images/hero-slideshow/slide-1.jpg", pos: "61% 52%" },
  { src: "/images/hero-slideshow/slide-2.jpg", pos: "46% 51%" },
  { src: "/images/hero-slideshow/slide-3.jpg", pos: "9% 59%" },
  { src: "/images/hero-slideshow/slide-4.jpg", pos: "58% 50%" },
  { src: "/images/hero-slideshow/slide-5.jpg", pos: "61% 57%" },
  { src: "/images/hero-slideshow/slide-8.jpg", pos: "60% 48%" },
  { src: "/images/hero-slideshow/slide-9.jpg", pos: "46% 45%" },
  { src: "/images/hero-slideshow/slide-10.jpg", pos: "40% 44%" },
];

const SLIDE_DURATION = 5000; // ms per slide

export default function HeroSection() {
  const [slides, setSlides] = useState({ current: 0, prev: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setSlides((prev) => ({
        prev: prev.current,
        current: (prev.current + 1) % SLIDES.length,
      }));
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (i: number) => {
    setSlides((prev) => ({
      prev: prev.current,
      current: i,
    }));
  };

  return (
    <section className="relative min-h-[calc(100vh-70px)] py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center overflow-hidden">

      {/* ── Fullscreen background slideshow ── */}
      <div className="absolute inset-0 -z-10 bg-charcoal">

        <AnimatePresence initial={false}>
          <motion.div
            key={slides.current}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[slides.current].src}
              alt={`SkillARC — slide ${slides.current + 1}`}
              fill
              priority={slides.current === 0}
              className="object-cover"
              style={{ objectPosition: SLIDES[slides.current].pos }}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark + gradient overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* ── Slide indicator dots ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === slides.current
                ? "w-6 h-2.5 bg-white"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* ── Hero content ── */}
      <div className="max-w-7xl mx-auto w-full">
        <AnimatedSection
          variant="stagger-container"
          className="flex flex-col items-start text-left max-w-2xl"
        >
          {/* Eyebrow Label */}
          <AnimatedSection variant="stagger-item" className="mb-6">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white font-body text-xs md:text-sm font-semibold tracking-wider uppercase border border-white/25">
              Underprivileged Youth Across India
            </span>
          </AnimatedSection>

          {/* Headline */}
          <AnimatedSection variant="stagger-item">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.15] text-white tracking-tight mb-6 drop-shadow-lg">
              Shaping Futures, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A8D5E2] to-[#EDE8F5]">
                One Skill
              </span>{" "}
              at a Time
            </h1>
          </AnimatedSection>

          {/* Subtext */}
          <AnimatedSection variant="stagger-item">
            <p className="font-body text-base md:text-lg text-white/85 leading-relaxed max-w-xl mb-8 drop-shadow">
              SkillARC is a youth-led initiative empowering young individuals with life skills, leadership, and the confidence to create real change in their communities.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection variant="stagger-item" className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <MotionLink
              href="/get-involved"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 20px -3px rgba(168,213,226,0.5)" }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full sm:w-auto text-center font-body font-semibold text-sm bg-[linear-gradient(135deg,#A8D5E2,#EDE8F5)] text-charcoal px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Involved
            </MotionLink>
            <MotionLink
              href="/our-work"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full sm:w-auto text-center font-body font-semibold text-sm border-2 border-white/60 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl hover:bg-white/20 transition-colors"
            >
              Explore Programs
            </MotionLink>
          </AnimatedSection>

          {/* Mini Impact Stats */}
          <AnimatedSection variant="stagger-item" className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:items-center sm:gap-6 border-t border-white/25 pt-8 w-full text-center sm:text-left">
            <MotionLink
              href="/about"
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none text-center sm:text-left"
            >
              <div className="p-2 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">
                <GraduationCap className="w-5 h-5 text-white shrink-0" />
              </div>
              <span className="font-body text-xs sm:text-sm font-semibold text-white leading-tight drop-shadow">
                500+ Students
              </span>
            </MotionLink>
            <div className="h-4 w-px bg-white/30 hidden sm:block" />
            <MotionLink
              href="/our-work"
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none text-center sm:text-left"
            >
              <div className="p-2 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">
                <BookOpen className="w-5 h-5 text-white shrink-0" />
              </div>
              <span className="font-body text-xs sm:text-sm font-semibold text-white leading-tight drop-shadow">
                15+ Workshops
              </span>
            </MotionLink>
            <div className="h-4 w-px bg-white/30 hidden sm:block" />
            <MotionLink
              href="/about#collaborations"
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-2.5 cursor-pointer select-none text-center sm:text-left"
            >
              <div className="p-2 bg-white/15 backdrop-blur-sm rounded-lg border border-white/20">
                <Users className="w-5 h-5 text-white shrink-0" />
              </div>
              <span className="font-body text-xs sm:text-sm font-semibold text-white leading-tight drop-shadow">
                10+ Communities
              </span>
            </MotionLink>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}
