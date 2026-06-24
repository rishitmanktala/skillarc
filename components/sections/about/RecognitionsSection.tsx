"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Globe, Award, Presentation, Mic } from "lucide-react";

const RECOGNITIONS = [
  {
    title: "Member, World Teen Parliament",
    detail: "Active inclusion in the global forum representing youth voices, civic participation, and educational reform.",
    date: "Ongoing Presence",
    icon: Globe,
    color: "from-primary/20 to-primary/5 border-primary/20 text-primary-dark",
  },
  {
    title: "Youth Ambassador, HundrED.org",
    detail: "Officially recognized on 27 June 2025 for helping scale and advocate for impactful K-12 pedagogical innovations globally.",
    date: "27 June 2025",
    icon: Award,
    color: "from-accent/20 to-accent/5 border-accent/20 text-accent-dark",
  },
  {
    title: "Presented at IIM Ranchi",
    detail: "Showcased SkillARC's grassroots impact and operational sustainability at the Entrepreneurial Boot Camp.",
    date: "Dec 2025",
    icon: Presentation,
    color: "from-highlight/25 to-highlight/5 border-highlight/30 text-highlight-dark",
  },
  {
    title: "Featured on The Yap Company Podcast",
    detail: "Founder Shreya Gupta shared SkillARC's journey in the special episode titled 'Grades, Goals and Good Times'.",
    date: "June 2026",
    icon: Mic,
    color: "from-primary/20 to-primary/5 border-primary/20 text-primary-dark",
  },
];

export default function RecognitionsSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background-custom border-t border-primary/10">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Achievements
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Recognitions & Honors
          </h2>
          <p className="font-body text-sm text-muted-grey mt-4">
            Our commitment to grassroots action and scalable educational curriculum has earned us features and partnerships at prominent institutions.
          </p>
        </div>

        {/* Recognitions Grid */}
        <AnimatedSection
          variant="stagger-container"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {RECOGNITIONS.map((item) => {
            const IconComponent = item.icon;
            
            return (
              <AnimatedSection
                key={item.title}
                variant="stagger-item"
                className="w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className={`card-surface flex gap-5 h-full relative overflow-hidden bg-gradient-to-br ${item.color.split(" ")[0]} ${item.color.split(" ")[1]} border ${item.color.split(" ")[2]} hover:shadow-md transition-shadow duration-300 cursor-pointer`}
                >
                  {/* Decorative background blob */}
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full bg-white/10 blur-xl" />
                  
                  {/* Icon Column */}
                  <div className={`p-3 rounded-xl bg-white shadow-sm h-fit self-start`}>
                    <IconComponent className={`w-6 h-6 ${item.color.split(" ")[3]}`} />
                  </div>

                  {/* Text Column */}
                  <div className="flex flex-col flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="font-display font-bold text-lg text-charcoal leading-tight">
                        {item.title}
                      </h3>
                      <span className="font-body text-[10px] font-bold text-muted-grey bg-charcoal/5 px-2 py-0.5 rounded-md h-fit w-fit select-none">
                        {item.date}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-grey leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              </AnimatedSection>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}

