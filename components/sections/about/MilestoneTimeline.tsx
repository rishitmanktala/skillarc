"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const MILESTONES = [
  {
    year: "Dec 2024",
    title: "Beginning of SkillARC",
    description: "Founded with the vision of empowering young underprivileged minds through life skills education. First collaboration with Yatan Youth Foundation.",
  },
  {
    year: "Dec 2024",
    title: "First Workshop",
    description: "Hygiene & Good Manners Workshop for 50 underprivileged students (Grades 1–5) at Yatan Youth Foundation.",
  },
  {
    year: "June 2025",
    title: "Drutagni X SkillARC",
    description: "STEM Racing & Sustainability collaboration — plantation drive + toy car building activity with students at Yatan Youth Foundation.",
  },
  {
    year: "July–Aug 2025",
    title: "Oral Hygiene Workshop",
    description: "Conducted at Literacy India Youth Foundation with Dr. Pooja Singh as guest speaker.",
  },
  {
    year: "Aug 2025",
    title: "Self Awareness & Growth Workshop",
    description: "Conducted at Yatan Youth Foundation; collaborations with Elysium Empressa & Mitti ki Vardaan.",
  },
  {
    year: "Sep 2025",
    title: "SkillARC × Sarbojanin Milan Utsav",
    description: "Durga Pooja collaboration celebrating community and youth engagement.",
  },
  {
    year: "Oct 2025",
    title: "Financial Literacy Workshop",
    description: "Conducted at Mera Parivar Youth Foundation (Money Jar Game, 50-30-20 budgeting rule, guest Ms. Neha Jain).",
  },
  {
    year: "Oct 2025",
    title: "Yatan Youth Foundation Annual Showcase",
    description: "Annual Cultural Showcase 2025 (co-hosted with Suncity School 37-D).",
  },
  {
    year: "Dec 2025",
    title: "Mission Sarbat Da Bhala",
    description: "Mentorship Collaboration begins with KR Mangalam University student mentors.",
  },
  {
    year: "Dec 2025",
    title: "IIM Ranchi Boot Camp",
    description: "SkillARC presented at the IIM Ranchi Entrepreneurial Boot Camp.",
  },
  {
    year: "31 Dec 2025",
    title: "🎉 1 Year Milestone!",
    description: "Completed one full year of SkillARC, bringing real change to adolescent lives.",
  },
  {
    year: "May 2026",
    title: "The Yap Company Podcast",
    description: "Featured on the podcast ('Grades, Goals and Good Times') — Founder Shreya Gupta shared SkillARC's journey.",
  },
  {
    year: "June 2026",
    title: "Musical Bootcamp 1",
    description: "5-day summer music bootcamp at Micro School, Ghosala for underprivileged students (rhythm, drums, vocals).",
  },
  {
    year: "June 2026",
    title: "New Collaborations",
    description: "Partnerships launched with Tere Hamsafar & Swyam Mental Health and Wellness Clinic.",
  },
];

export default function MilestoneTimeline() {
  const spineRef = useRef(null);
  const isSpineInView = useInView(spineRef, { once: true, amount: 0.1 });

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background-custom overflow-hidden">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Our Journey
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Milestones of Real Change
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Timeline Vertical Spine (Scale down height scaling origin top) */}
          <motion.div
            ref={spineRef}
            initial={{ scaleY: 0 }}
            animate={isSpineInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 1, 0.5, 1] }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-primary via-accent to-highlight origin-top -translate-x-1/2"
          />

          {/* Milestones List */}
          <div className="space-y-12 md:space-y-16">
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const delay = index * 0.12;

              return (
                <div
                  key={index}
                  className="relative flex flex-col md:flex-row items-start md:items-center w-full"
                >
                  {/* Timeline Badge (Circle centered on spine) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-white border-4 border-primary flex items-center justify-center shadow-sm select-none">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  </div>

                  {/* Left Spacer for desktop layout (Odd milestons slide left-to-right: fade-right) */}
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 hidden md:block">
                    {!isEven && (
                      <AnimatedSection
                        variant="fade-right"
                        delay={delay}
                        className="card-surface text-right flex flex-col items-end"
                      >
                        <span className="font-display font-bold text-sm text-primary-dark bg-primary/10 px-4.5 py-1 rounded-full mb-3 select-none">
                          {milestone.year}
                        </span>
                        <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                          {milestone.title}
                        </h3>
                        <p className="font-body text-sm text-muted-grey leading-relaxed">
                          {milestone.description}
                        </p>
                      </AnimatedSection>
                    )}
                  </div>

                  {/* Right Content for desktop, Main Content for mobile (Even milestones slide right-to-left: fade-left) */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-12">
                    {isEven && (
                      <AnimatedSection
                        variant="fade-left"
                        delay={delay}
                        className="card-surface"
                      >
                        <span className="font-display font-bold text-sm text-primary-dark bg-primary/10 px-4.5 py-1 rounded-full mb-3 inline-block select-none">
                          {milestone.year}
                        </span>
                        <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                          {milestone.title}
                        </h3>
                        <p className="font-body text-sm text-muted-grey leading-relaxed">
                          {milestone.description}
                        </p>
                      </AnimatedSection>
                    )}
                    
                    {/* Render odd milestones on mobile inside this container */}
                    {!isEven && (
                      <div className="block md:hidden">
                        <AnimatedSection
                          variant="fade-left"
                          delay={delay}
                          className="card-surface"
                        >
                          <span className="font-display font-bold text-sm text-primary-dark bg-primary/10 px-4.5 py-1 rounded-full mb-3 inline-block select-none">
                            {milestone.year}
                          </span>
                          <h3 className="font-display font-bold text-lg text-charcoal mb-2">
                            {milestone.title}
                          </h3>
                          <p className="font-body text-sm text-muted-grey leading-relaxed">
                            {milestone.description}
                          </p>
                        </AnimatedSection>
                      </div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
