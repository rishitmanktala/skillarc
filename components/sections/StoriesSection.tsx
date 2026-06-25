"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const STORIES = [
  {
    quote: "Being part of SkillARC was super valuable for me. The sessions were really interactive and fun not like classroom learning. I got better at talking to people. Felt more confident sharing my ideas. I learned that being a leader working with a team and growing as a person are really important. The activities and discussions helped me get skills that're useful in school and in life. SkillARC helped me become more confident and a better person. I'm thankful, for everything I learned from SkillARC.",
    author: "Suhasini Gupta",
    role: "Suncity School, Sector-37D, Gurugram",
    initials: "SG",
  },
  {
    quote: "My journey with SkillARC over the past 3 years has been one of the most meaningful experiences of my life. I joined as someone who wanted to contribute, but along the way, SkillARC helped me grow just as much as the students I worked with. Watching a small initiative begin with a handful of students and gradually reach 100+ young minds has been incredibly inspiring. Every session taught me the value of empathy, patience, teamwork, and the power of creating opportunities for others. Being a part of SkillARC has shown me that even small efforts can create a lasting impact. I am grateful to be a part of this mission and contribute towards building a more confident and empowered generation.",
    author: "Ruhaan Sharma",
    role: "Suncity School, Sector-37D, Gurugram",
    initials: "RS",
  },
  {
    quote: "SkillArc gave me the practical communication skills I need for the real world. I learned how to present myself confidently, express my thoughts, and step into leadership roles. It also helped me step out of my comfort zone and gave me a new experience.",
    author: "Twisha Sharma",
    role: "Suncity School, Sector-37D, Gurugram",
    initials: "TS",
  },
];

export default function StoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgPurple text-charcoal overflow-hidden">
      {/* Scattered Pastel Dots Pattern Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px), radial-gradient(var(--accent) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          backgroundPosition: "0 0, 16px 16px",
        }}
      />
      {/* Blur Background blobs */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/15 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Stories in Motion
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Real People, Real Change
          </h2>
        </div>

        {/* Desktop Grid Layout (lg screen and above) - stagger container */}
        <AnimatedSection
          variant="stagger-container"
          className="hidden lg:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto"
        >
          {STORIES.map((story) => (
            <AnimatedSection
              key={story.author}
              variant="stagger-item"
              className="w-full h-full"
            >
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white/75 backdrop-blur-md border border-white/80 relative group transition-all duration-300 h-full cursor-pointer hover:bg-bgPink/80"
              >
                <div>
                  <span className="font-display text-primary text-[80px] absolute -top-1 -left-2 select-none leading-none opacity-40">
                    “
                  </span>
                  <p className="font-body text-base md:text-lg text-charcoal/85 leading-relaxed relative z-10 pt-4 mb-8">
                    {story.quote}
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-accent/20 pt-5 mt-auto">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-charcoal font-body font-bold text-sm">
                    {story.initials}
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-sm text-charcoal">{story.author}</h3>
                    <p className="font-body text-xs text-muted-grey">{story.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </AnimatedSection>

        {/* Mobile / Tablet Carousel Layout (under lg screen) */}
        <div className="lg:hidden max-w-xl mx-auto">
          <div className="relative min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full flex flex-col justify-between p-6 md:p-8 rounded-2xl bg-white/75 backdrop-blur-md border border-white/80 relative hover:bg-bgPink/80 transition-all duration-300"
              >
                <div>
                  <span className="font-display text-primary text-[80px] absolute -top-1 -left-2 select-none leading-none opacity-40">
                    “
                  </span>
                  <p className="font-body text-base md:text-lg text-charcoal/85 leading-relaxed relative z-10 pt-4 mb-8">
                    {STORIES[activeIndex].quote}
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-accent/20 pt-5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-charcoal font-body font-bold text-sm">
                    {STORIES[activeIndex].initials}
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-sm text-charcoal">
                      {STORIES[activeIndex].author}
                    </h3>
                    <p className="font-body text-xs text-muted-grey">
                      {STORIES[activeIndex].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <motion.button
              onClick={handlePrev}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-accent/30 hover:border-accent text-charcoal bg-white/60 transition-colors focus:outline-none cursor-pointer"
              aria-label="Previous story"
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
            <span className="font-body text-xs text-muted-grey select-none">
              {activeIndex + 1} / {STORIES.length}
            </span>
            <motion.button
              onClick={handleNext}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 rounded-full border border-accent/30 hover:border-accent text-charcoal bg-white/60 transition-colors focus:outline-none cursor-pointer"
              aria-label="Next story"
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

      </div>
    </section>
  );
}
