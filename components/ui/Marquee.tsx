"use client";

import { motion } from "framer-motion";
import React from "react";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
  // Triple the items array to guarantee it spans wider than any viewport and loops seamlessly
  const loopedItems = [...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden whitespace-nowrap relative py-4 select-none">
      {/* Faded edge gradients for premium visual style */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background-custom to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background-custom to-transparent z-10 pointer-events-none" />

      <motion.div
        className="inline-flex gap-6 items-center"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {loopedItems.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center h-16 px-8 py-3 bg-white border border-[#2D2D2D]/5 rounded-2xl shadow-[0_4px_12px_-3px_rgba(45,45,45,0.02)] text-charcoal/95 font-body font-medium text-xs md:text-sm tracking-wide grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
