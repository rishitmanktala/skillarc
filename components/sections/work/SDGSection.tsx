"use client";

import { motion } from "framer-motion";
import { SDG_GOALS } from "@/lib/constants";
import Image from "next/image";

// Map UN SDG goal names to their official color schemes
const getSDGColor = (goal: string) => {
  switch (goal) {
    case "SDG 4":
      return {
        strip: "bg-[#C21F3C]", // UN SDG 4 Red
        text: "text-[#C21F3C]",
        bgLight: "bg-[#C21F3C]/5",
      };
    case "SDG 10":
      return {
        strip: "bg-[#DD1367]", // UN SDG 10 Pink/Crimson
        text: "text-[#CF0F5E]",
        bgLight: "bg-[#DD1367]/5",
      };
    case "SDG 17":
      return {
        strip: "bg-[#19486A]", // UN SDG 17 Navy Blue
        text: "text-[#19486A]",
        bgLight: "bg-[#19486A]/5",
      };
    default:
      return {
        strip: "bg-primary",
        text: "text-primary",
        bgLight: "bg-primary/5",
      };
  }
};

export default function SDGSection() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        delay: index * 0.15,
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgGreen overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Our Global Commitment
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Aligned with the UN Sustainable Development Goals
          </h2>
        </div>

        {/* SDG Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SDG_GOALS.map((goal, index) => {
            const colors = getSDGColor(goal.goal);

            return (
              <motion.div
                key={goal.goal}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="flex flex-col bg-white/85 border border-white/70 rounded-2xl shadow-[0_8px_24px_-12px_rgba(55,108,122,0.26)] hover:shadow-[0_14px_30px_-14px_rgba(158,61,82,0.22)] transition-all duration-300 overflow-hidden relative"
              >
                {/* Official SDG Color Strip */}
                <div className={`h-[8px] w-full ${colors.strip}`} />
                
                <div className="p-6 md:p-8 flex-grow flex flex-col items-start w-full">
                  <div className="flex justify-between items-start w-full mb-4">
                    {/* Huge bold target badge */}
                    <span className="font-display font-black text-5xl md:text-6xl text-primary-dark/70 select-none">
                      {goal.goal.split(" ")[1]}
                    </span>
                    {/* SDG Official Logo Image */}
                    <div className="relative w-20 h-20 shrink-0">
                      <Image
                        src={`/images/our-work/sdg-${goal.goal.split(" ")[1]}.png`}
                        alt={goal.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Goal Name / Title */}
                  <h3 className="font-display font-bold text-lg md:text-xl text-charcoal mb-4 flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${colors.strip}`} />
                    {goal.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm md:text-base text-muted-grey leading-relaxed">
                    {goal.description}
                  </p>

                  {/* Contribution statement */}
                  <div className={`mt-6 p-4 rounded-xl ${colors.bgLight} border border-charcoal/5 w-full`}>
                    <p className="font-body text-xs leading-normal text-charcoal/90">
                      <strong className={colors.text}>Our contribution: </strong>
                      We design experiential modules that ensure inclusive learning environments and empower marginalized adolescents to build future competencies.
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
