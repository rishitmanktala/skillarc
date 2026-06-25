"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const DETAILED_PROGRAMS = [
  {
    num: "01",
    title: "Life Skills Sessions",
    audience: "School Students",
    description: "Empowering adolescents to understand themselves, think critically, and communicate effectively. Through interactive simulations, roleplays, and discussions, we guide students to navigate everyday challenges confidently. Over a series of 12 structured workshops, participants build strong emotional intelligence, resilience, and decision-making capabilities. This program bridges the gap between academic education and real-world interpersonal development.",
    learnList: [
      "Critical self-awareness and emotion regulation",
      "Effective communication and active listening skills",
      "Rational decision-making and cognitive problem-solving",
      "Empathy and healthy peer relationship management",
    ],
    gradient: "from-primary/20 to-accent/20",
    image: "/images/our-work/life-skills-sessions.jpg",
  },
  {
    num: "02",
    title: "Leadership Programs",
    audience: "Youth Changemakers",
    description: "Nurturing active citizenship and grassroots leadership in young minds. We guide participants to analyze social problems in their immediate environment and plan concrete solutions. Through peer collaboration, cohort-based mentorship, and project seed funding, students design and execute real community campaigns. This hands-on process changes how youth perceive their role in shaping their society.",
    learnList: [
      "Grassroots research and social problem analysis",
      "Project planning, budget management, and execution",
      "Public speaking, advocacy, and community mobilization",
      "Collaborative team leadership and feedback structures",
    ],
    gradient: "from-accent/20 to-highlight/20",
    image: "/images/our-work/leadership-programs.jpg",
  },
  {
    num: "03",
    title: "Youth Development Initiatives",
    audience: "College & Employable Youth",
    description: "Equipping young individuals with the career readiness and modern employability skills needed to transition into the professional world. We offer comprehensive modules covering resume writing, interview preparation, digital tools, and business communication. Through guest lectures and corporate mentorship, we connect participants with live industry exposure. Our goal is to unlock employability and open up sustainable career trajectories.",
    learnList: [
      "Professional resume design and digital portfolio building",
      "Mock interview preparation and workplace etiquette training",
      "Essential digital workspace tools and communication systems",
      "Career pathway mapping and professional networking skills",
    ],
    gradient: "from-highlight/20 to-primary/20",
    image: "/images/our-work/youth-development-initiatives.jpg",
  },
  {
    num: "04",
    title: "School & Community Initiatives",
    audience: "Local Communities",
    description: "Creating inclusive safe spaces for adolescent growth by collaborating directly with government schools and community centers. We conduct sensitization workshops covering physical and mental well-being, digital safety, and legal rights. By involving parents and educators, we ensure a supportive environment for adolescent growth. These community hubs foster creativity, creative expression, and mutual support.",
    learnList: [
      "Physical and mental health awareness and self-care",
      "Digital safety, cybersecurity, and media literacy",
      "Basic civic rights, public entitlements, and community safety",
      "Parent-educator engagement and support circles",
    ],
    gradient: "from-primary/25 to-accent/25",
    image: "/images/our-work/school-and-community-initiatives.jpg",
  },
];

export default function ProgramsGrid() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgYellow overflow-hidden">
      <div className="max-w-7xl mx-auto w-full space-y-20 lg:space-y-28">
        {DETAILED_PROGRAMS.map((program, index) => {
          const isEven = index % 2 === 0;

          // Slide in from left or right based on parity
          const cardVariants = {
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring" as const, stiffness: 60, damping: 15 },
            },
          };

          return (
            <motion.div
              key={program.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className={`flex flex-col ${
                isEven ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 lg:gap-8 items-center`}
            >
              
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div
                  className={`w-full aspect-[4/3] rounded-2xl bg-gradient-to-tr ${program.gradient} border border-[#2D2D2D]/5 flex items-center justify-center relative overflow-hidden shadow-sm hover:scale-[1.01] transition-transform duration-500 select-none`}
                >
                  {program.image ? (
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <span className="font-display font-bold text-lg text-charcoal/30">
                        {program.title} Media
                      </span>
                      {/* Floating Blob in Placeholder */}
                      <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/40 blur-xl" />
                    </>
                  )}
                </div>
              </div>

              {/* Text Content Side */}
              <div className="w-full lg:w-1/2 flex flex-col items-start bg-white/65 rounded-2xl border border-white/70 p-6 md:p-8 shadow-[0_8px_24px_-14px_rgba(55,108,122,0.28)]">
                
                {/* Header Row: Badge & Target */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary text-charcoal font-display font-bold text-lg flex items-center justify-center shadow-sm select-none">
                    {program.num}
                  </div>
                  <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full select-none">
                    {program.audience}
                  </span>
                </div>

                {/* Program Title */}
                <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal tracking-tight mb-4">
                  {program.title}
                </h2>

                {/* Description */}
                <p className="font-body text-sm md:text-base text-muted-grey leading-relaxed mb-6">
                  {program.description}
                </p>

                {/* Learning outcomes bullet list */}
                <h3 className="font-body font-bold text-sm text-charcoal uppercase tracking-wider mb-3">
                  What participants learn:
                </h3>
                
                <ul className="space-y-2.5 w-full">
                  {program.learnList.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent-dark shrink-0 mt-0.5" />
                      <span className="font-body text-sm md:text-base text-charcoal/90 leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
