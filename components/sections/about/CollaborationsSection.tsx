"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Handshake } from "lucide-react";
import Marquee from "@/components/ui/Marquee";

const PARTNERS = [
  { name: "Yatan Youth Foundation", type: "Key Collaborator" },
  { name: "Drutagni", type: "STEM & Sustainability" },
  { name: "Literacy India", type: "Education & Literacy" },
  { name: "Elysium Empressa", type: "Youth Action" },
  { name: "Mitti ki Vardaan", type: "Sustainability & Environment" },
  { name: "Sarbojanin Milan Utsav", type: "Community Engagement" },
  { name: "Mera Parivar", type: "Family & Life Skills" },
  { name: "Mission Sarbat Da Bhala", type: "Mentorship & Education" },
  { name: "The Yap Company", type: "Media & Podcast" },
  { name: "Micro School Ghosala", type: "Alternative Schooling" },
  { name: "Tere Hamsafar", type: "Mental Well-being" },
  { name: "Swyam Mental Health & Wellness Clinic", type: "Psychological Support" },
];

export default function CollaborationsSection() {
  return (
    <section id="collaborations" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgCoral border-t border-primary/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Collaborations
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Our Partners in Growth
          </h2>
          <p className="font-body text-sm text-muted-grey mt-4">
            We collaborate with grassroots foundations, academic institutions, and wellness experts to scale our life skills curriculum across diverse communities.
          </p>
        </div>

        {/* Partners Grid */}
        <AnimatedSection
          variant="stagger-container"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {PARTNERS.map((partner) => (
            <AnimatedSection
              key={partner.name}
              variant="stagger-item"
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.04, y: -4, borderColor: "#F2B5C4" }}
                transition={{ type: "spring", stiffness: 350, damping: 15 }}
                className="card-tile flex flex-col justify-between h-32 p-5 group cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary-dark group-hover:bg-accent/10 group-hover:text-accent-dark transition-colors duration-300">
                    <Handshake className="w-5 h-5 shrink-0" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-charcoal leading-tight group-hover:text-charcoal transition-colors">
                    {partner.name}
                  </h3>
                  <span className="font-body text-[10px] font-bold text-muted-grey tracking-wider uppercase mt-1 block">
                    {partner.type}
                  </span>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </AnimatedSection>

        {/* Partners Marquee Strip */}
        <div className="mt-16 pt-12 border-t border-primary/10">
          <p className="font-body text-xs font-bold text-center tracking-widest text-muted-grey uppercase mb-8 select-none">
            Our Network of Supporters
          </p>
          <Marquee
            items={PARTNERS.map((p) => p.name)}
            speed={25}
          />
        </div>
      </div>
    </section>
  );
}
