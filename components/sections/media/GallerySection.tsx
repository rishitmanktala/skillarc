"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, X, ArrowLeft, ArrowRight } from "lucide-react";

const TABS = ["Workshops", "Events", "Campaigns", "Volunteers", "Community"];

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  src: string;
  description: string;
}

const GALLERY_DATA: Record<string, GalleryItem[]> = {
  Workshops: [
    {
      id: "workshop-1",
      title: "Interactive Hygiene Session",
      subtitle: "Workshops — April 2026",
      src: "/images/media/workshops/dental-hygiene-61.jpg",
      description: "Adolescent students learning basic oral and dental hygiene rules through interactive diagrams and models.",
    },
    {
      id: "workshop-2",
      title: "Dental Hygiene Workshop",
      subtitle: "Workshops — April 2026",
      src: "/images/media/workshops/dental-hygiene-9.jpg",
      description: "Adolescents actively demonstrating teeth brushing techniques on learning aids during an interactive session.",
    },
    {
      id: "workshop-3",
      title: "Dental Health Awareness",
      subtitle: "Workshops — April 2026",
      src: "/images/media/workshops/dental-hygiene-19.jpg",
      description: "Interactive dental care workshop helping young students overcome fear of dental checkups and build healthy habits.",
    },
    {
      id: "workshop-4",
      title: "Financial Literacy Module",
      subtitle: "Workshops — March 2026",
      src: "/images/media/workshops/financial-literacy-5.jpg",
      description: "Learning the fundamentals of savings, budgeting, and financial planning through gameplay and roleplays.",
    },
  ],
  Events: [
    {
      id: "event-1",
      title: "Interactive Session at Govt College",
      subtitle: "Events — May 2026",
      src: "/images/media/events/govt-college-4.jpg",
      description: "SkillARC's team conducting a large-group interaction on life choices, career planning, and peer-to-peer respect.",
    },
    {
      id: "event-2",
      title: "Life Skills Special Event",
      subtitle: "Events — May 2026",
      src: "/images/media/events/life-skills-lessons.jpg",
      description: "A major session where students share their personal reflection journals and celebrate small changes together.",
    },
    {
      id: "event-3",
      title: "Dental Hygiene Screening Event",
      subtitle: "Events — April 2026",
      src: "/images/media/events/dental-hygiene-5.jpg",
      description: "A community checkup drive organized in collaboration with local medical volunteers.",
    },
    {
      id: "event-4",
      title: "Oral Health Camp",
      subtitle: "Events — April 2026",
      src: "/images/media/events/dental-hygiene-3.jpg",
      description: "Providing personalized advice and kits to children at a local community center.",
    },
  ],
  Campaigns: [
    {
      id: "campaign-1",
      title: "Self Awareness Campaign",
      subtitle: "Campaigns — June 2026",
      src: "/images/media/campaigns/self-awareness-1.jpg",
      description: "Encouraging teenagers to define their core values and identify strengths, building a strong self-identity.",
    },
    {
      id: "campaign-2",
      title: "Hygiene & Wellness Campaign",
      subtitle: "Campaigns — May 2026",
      src: "/images/media/campaigns/dental-hygiene-36.jpg",
      description: "Sensitizing local children and parents about preventive health habits and community sanitation.",
    },
    {
      id: "campaign-3",
      title: "STEM Outreach Drive",
      subtitle: "Campaigns — May 2026",
      src: "/images/media/campaigns/durtagni-collab-stem-3.jpg",
      description: "A volunteer campaign promoting science education and creative hands-on projects for underrepresented young girls.",
    },
    {
      id: "campaign-4",
      title: "Seva Community Mobilization",
      subtitle: "Campaigns — April 2026",
      src: "/images/media/campaigns/seva-19.jpg",
      description: "Empowering college youth to lead community service initiatives and build empathy for civic challenges.",
    },
  ],
  Volunteers: [
    {
      id: "volunteer-1",
      title: "Durtagni STEM Collaboration",
      subtitle: "Volunteers — June 2026",
      src: "/images/media/volunteers/durtagni-collab-stem-76.jpg",
      description: "Volunteers mentoring students during a hands-on physics and engineering experimental workshop.",
    },
    {
      id: "volunteer-2",
      title: "Gentleman in Making - Session 1",
      subtitle: "Volunteers — June 2026",
      src: "/images/media/volunteers/gentleman-in-making-session-1-101.jpg",
      description: "Mentors facilitating sessions for young boys on gender equality, emotional expression, and character building.",
    },
    {
      id: "volunteer-3",
      title: "STEM Experiment Group",
      subtitle: "Volunteers — May 2026",
      src: "/images/media/volunteers/durtagni-collab-stem-72.jpg",
      description: "Mentoring children as they build simple circuits and robotic modules, sparking curiosities.",
    },
    {
      id: "volunteer-4",
      title: "Youth Mentorship Workshop",
      subtitle: "Volunteers — May 2026",
      src: "/images/media/volunteers/mentorship-workshop-4.jpg",
      description: "Building strong bonds between volunteers and teenagers, sharing guidance on navigation of modern life hurdles.",
    },
  ],
  Community: [
    {
      id: "community-1",
      title: "Community Dental Outreach",
      subtitle: "Community — June 2026",
      src: "/images/media/community/dental-hygiene-61.jpg",
      description: "Local families participating in a health sensitization meeting conducted in the local community hall.",
    },
    {
      id: "community-2",
      title: "Community Life Skills Lesson",
      subtitle: "Community — June 2026",
      src: "/images/media/community/life-skills-lessons.jpg",
      description: "Outdoor peer circle discussing local issues, collective action steps, and daily reflection practices.",
    },
    {
      id: "community-3",
      title: "Self-Awareness Community Meet",
      subtitle: "Community — May 2026",
      src: "/images/media/community/self-awareness-1.jpg",
      description: "Facilitators involving community elders and youth in dialogues regarding positive self-concept.",
    },
    {
      id: "community-4",
      title: "Community Health Drive",
      subtitle: "Community — May 2026",
      src: "/images/media/community/dental-hygiene-3.jpg",
      description: "Distributing wellness guides and hygiene kits to families, promoting preventative health practices.",
    },
  ],
};

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("Workshops");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items = GALLERY_DATA[activeTab] || [];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === 0 ? items.length - 1 : prev! - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev === items.length - 1 ? 0 : prev! + 1));
  };

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-none">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3">
            Visual Archives
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Our Photo Gallery
          </h2>
        </div>
        
        {/* Tab Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 select-none">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <motion.button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setLightboxIndex(null);
                }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`font-body font-semibold text-xs md:text-sm px-6 py-3 rounded-full border transition-all duration-300 relative z-0 cursor-pointer ${
                  isActive
                    ? "text-white border-transparent"
                    : "bg-background-custom text-charcoal border-charcoal/5 hover:border-charcoal/20"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBgMedia"
                    className="absolute inset-0 bg-charcoal rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </motion.button>
            );
          })}
        </div>

        {/* Grid of Actual Images */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 select-none"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.03, y: -6 }}
                whileTap={{ scale: 0.97 }}
                transition={{ 
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                  duration: 0.3 
                }}
                onClick={() => setLightboxIndex(index)}
                className="cursor-pointer w-full aspect-square rounded-2xl border border-[#2D2D2D]/5 shadow-[0_4px_20px_-4px_rgba(45,45,45,0.03)] hover:shadow-[0_12px_30px_-6px_rgba(45,45,45,0.08)] transition-all duration-300 relative overflow-hidden group bg-charcoal"
              >
                {/* Actual Image */}
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-75"
                />

                {/* Sleek Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end text-left opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-body text-[10px] font-bold text-[#89c5d7] uppercase tracking-wider block mb-1">
                      {item.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-sm md:text-base text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxIndex(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer hidden md:block"
                aria-label="Previous Image"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              {/* Content Panel */}
              <motion.div
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-2xl w-full aspect-[4/3] rounded-[2rem] bg-charcoal border border-white/10 flex flex-col justify-end overflow-hidden relative shadow-2xl"
              >
                <img
                  src={items[lightboxIndex].src}
                  alt={items[lightboxIndex].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Text overlay at bottom of lightbox */}
                <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/50 to-transparent p-6 md:p-8 pt-20 text-left">
                  <span className="font-body text-xs font-semibold text-[#89c5d7] uppercase tracking-widest block mb-2">
                    {items[lightboxIndex].subtitle}
                  </span>
                  <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">
                    {items[lightboxIndex].title}
                  </h3>
                  <p className="font-body text-xs md:text-sm text-white/80 leading-relaxed max-w-xl">
                    {items[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-6 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none cursor-pointer hidden md:block"
                aria-label="Next Image"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
