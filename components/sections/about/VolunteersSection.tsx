"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Music, Brain, Award, Star, User } from "lucide-react";

const VOLUNTEERS = [
  {
    name: "Ruhaan Sharma",
    role: "Drummer & Percussionist",
    credential: "Trinity Grade 4 Certified",
    category: "Creative Arts",
    icon: Music,
    color: "primary",
  },
  {
    name: "Sunil Rai",
    role: "Music Educator",
    credential: "Trinity London Grade 8 Certified, 25 years experience",
    category: "Creative Arts",
    icon: Music,
    color: "primary",
  },
  {
    name: "Ayushi Srivastava",
    role: "Vocalist & Instructor",
    credential: "Ph.D. Vocal Music, Berklee & University of Melbourne certified",
    category: "Creative Arts",
    icon: Music,
    color: "primary",
  },
  {
    name: "Ms. Nitika Kamra",
    role: "Clinical & Child Psychologist",
    credential: "Parenting Coach (June 2026)",
    category: "Mental Well-being",
    icon: Brain,
    color: "accent",
  },
  {
    name: "Dr. Pooja Singh",
    role: "Dental Surgeon",
    credential: "PGIMS Rohtak, 7 years experience (July 2025)",
    category: "Health & Hygiene",
    icon: Award,
    color: "highlight",
  },
  {
    name: "Ms. Neha Jain",
    role: "Financial Literacy Guest",
    credential: "SCBI Certified Professional",
    category: "Financial Literacy",
    icon: Star,
    color: "accent",
  },
  {
    name: "Kabir Gabrani",
    role: "Mentorship Volunteer",
    credential: "BA Psychology, KR Mangalam University",
    category: "Youth Mentorship",
    icon: User,
    color: "primary",
  },
  {
    name: "Prakhar Gupta",
    role: "Mentorship Volunteer",
    credential: "BA Economics, KR Mangalam University",
    category: "Youth Mentorship",
    icon: User,
    color: "primary",
  },
];

export default function VolunteersSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgYellow border-t border-primary/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Our Ecosystem
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Guest Volunteers & Experts
          </h2>
          <p className="font-body text-sm text-muted-grey mt-4">
            Our programs are enriched by certified practitioners, seasoned artists, and student mentors who volunteer their valuable time and deep domain expertise.
          </p>
        </div>

        {/* Volunteers Grid */}
        <AnimatedSection
          variant="stagger-container"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {VOLUNTEERS.map((person) => {
            const IconComponent = person.icon;
            
            // Map colors to matching styling classes
            const iconBgColor = 
              person.color === "primary" ? "bg-primary/10 text-primary-dark" : 
              person.color === "accent" ? "bg-accent/10 text-accent-dark" : 
              "bg-highlight/10 text-highlight-dark";

            const borderHoverColor = 
              person.color === "primary" ? "hover:border-primary/40" : 
              person.color === "accent" ? "hover:border-accent/40" : 
              "hover:border-highlight/40";

            return (
              <AnimatedSection
                key={person.name}
                variant="stagger-item"
                className="w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -6 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className={`card-surface h-full flex flex-col items-start ${borderHoverColor} transition-all duration-300 cursor-pointer`}
                >
                  {/* Icon & Category Pill */}
                  <div className="flex w-full justify-between items-center mb-5">
                    <div className={`p-2 rounded-lg ${iconBgColor}`}>
                      <IconComponent className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="font-body text-[10px] font-bold text-muted-grey uppercase tracking-widest">
                      {person.category}
                    </span>
                  </div>

                  {/* Name and Designation */}
                  <h3 className="font-display font-bold text-lg text-charcoal leading-snug mb-1">
                    {person.name}
                  </h3>
                  <p className="font-body text-xs font-semibold text-charcoal/70 mb-3">
                    {person.role}
                  </p>

                  {/* Credentials / Details */}
                  <p className="font-body text-xs text-muted-grey leading-relaxed mt-auto border-t border-charcoal/5 pt-3 w-full">
                    {person.credential}
                  </p>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
