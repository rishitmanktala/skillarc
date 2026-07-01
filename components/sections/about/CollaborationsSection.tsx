"use client";

import { motion } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { Handshake } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import Image from "next/image";

const PARTNERS = [
  { name: "Yatan Youth Foundation", type: "Key Collaborator", logo: "/images/partners/yatan.png" },
  { name: "Drutagni", type: "STEM & Sustainability", logo: "/images/partners/drutagni.png" },
  { name: "Literacy India", type: "Education & Literacy", logo: "/images/partners/literacy-india.png" },
  { name: "Elysium Empressa", type: "Youth Action", logo: "/images/partners/elysium-empressa.png" },
  { name: "Mitti ki Vardaan", type: "Sustainability & Environment", logo: "/images/partners/mitti-ki-vardaan.png" },
  { name: "Sarbojanin Milan Utsav", type: "Community Engagement", logo: "/images/partners/sarbojanin-milan-utsav.png" },
  { name: "Mera Parivar", type: "Family & Life Skills", logo: "/images/partners/mera-parivar.png" },
  { name: "Mission Sarbat Da Bhala", type: "Mentorship & Education", logo: "/images/partners/mission-sarbat-da-bhala.png" },
  { name: "The Yap Company", type: "Media & Podcast", logo: "/images/partners/the-yap-company.png" },
  { name: "Micro School Ghosala", type: "Alternative Schooling" },
  { name: "Tere Hamsafar", type: "Mental Well-being", logo: "/images/partners/tere-hamsafar.png" },
  { name: "Swyam Mental Health & Wellness Clinic", type: "Psychological Support" },
];

const getCategoryStyles = (type: string) => {
  if (type.includes("Education") || type.includes("Literacy") || type.includes("Schooling") || type.includes("Mentorship")) {
    return "bg-gradient-to-br from-primary/10 to-bgBlue hover:border-primary/40";
  }
  if (type.includes("Mental") || type.includes("Psychological") || type.includes("Family")) {
    return "bg-gradient-to-br from-accent/10 to-bgPink hover:border-accent/40";
  }
  if (type.includes("Environment") || type.includes("Sustainability") || type.includes("STEM")) {
    return "bg-gradient-to-br from-primary/20 to-bgGreen hover:border-primary/40";
  }
  return "bg-gradient-to-br from-highlight/10 to-bgYellow hover:border-highlight/40";
};

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
          <p className="font-body text-sm md:text-base text-muted-grey mt-4 leading-relaxed">
            We collaborate with grassroots foundations, academic institutions, and wellness experts to scale our life skills curriculum across diverse communities.
          </p>
        </div>

        {/* Partners Grid */}
        <AnimatedSection
          variant="stagger-container"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {PARTNERS.map((partner) => {
            const styles = getCategoryStyles(partner.type);
            return (
              <AnimatedSection
                key={partner.name}
                variant="stagger-item"
                className="w-full h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ type: "spring", stiffness: 350, damping: 15 }}
                  className={`card-surface flex flex-col justify-between h-full min-h-[160px] p-6 group cursor-pointer relative overflow-hidden border border-charcoal/5 ${styles}`}
                >
                  <div className="w-full h-16 flex items-center justify-start mb-4">
                    {partner.logo ? (
                      <div className="relative w-32 h-14 shrink-0">
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    ) : (
                      <div className="p-2.5 bg-white/40 backdrop-blur-sm rounded-xl text-charcoal shadow-sm group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-11 h-11">
                        <Handshake className="w-5 h-5 shrink-0" />
                      </div>
                    )}
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display font-bold text-lg text-charcoal leading-tight mb-2">
                      {partner.name}
                    </h3>
                    <span className="font-body text-xs font-bold text-muted-grey tracking-wider uppercase block">
                      {partner.type}
                    </span>
                  </div>
                  {/* Subtle hover flare */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/40 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </AnimatedSection>
            );
          })}
        </AnimatedSection>

        {/* Partners Marquee Strip */}
        <div className="mt-16 pt-12 border-t border-primary/10">
          <p className="font-body text-xs font-bold text-center tracking-widest text-muted-grey uppercase mb-8 select-none">
            Our Network of Supporters
          </p>
          <Marquee
            items={PARTNERS.map((p) => p.name)}
            speed={25}
            fadeColor="from-bgCoral"
          />
        </div>
      </div>
    </section>
  );
}
