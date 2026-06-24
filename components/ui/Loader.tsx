"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    if (isDev) {
      const timer = setTimeout(() => setIsDone(true), 0);
      return () => clearTimeout(timer);
    }
    const hasVisited = sessionStorage.getItem("SkillARC_visited");
    if (!hasVisited) {
      // Defer state update to next tick to avoid cascading render warnings
      const initTimer = setTimeout(() => setLoading(true), 0);
      
      // Wait for animation + fadeout to complete before fully unmounting
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("SkillARC_visited", "true");
        // Let it unmount after exit animation
        setTimeout(() => setIsDone(true), 500);
      }, 2200);

      return () => {
        clearTimeout(initTimer);
        clearTimeout(timer);
      };
    } else {
      const doneTimer = setTimeout(() => setIsDone(true), 0);
      return () => clearTimeout(doneTimer);
    }
  }, []);

  if (isDone) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background-custom"
        >
          <div className="flex flex-col items-center gap-6">
            {/* Animated Logo Container */}
            <div className="relative w-28 h-28 flex items-center justify-center">
              {/* Pulsing glow background */}
              <motion.div 
                className="absolute inset-0 bg-primary/25 rounded-full blur-xl -z-10"
                animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* 1. SVG Drawing Path (Brand Gradient) */}
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                className="absolute inset-0 z-10"
              >
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F2B5C4" /> {/* Pink */}
                    <stop offset="50%" stopColor="#A8D5E2" /> {/* Teal */}
                    <stop offset="100%" stopColor="#E8C97A" /> {/* Yellow */}
                  </linearGradient>
                </defs>
                {/* Thin outline background path */}
                <motion.path
                  d="M 70 28 C 55 18, 32 18, 32 35 C 32 50, 68 50, 68 65 C 68 82, 45 82, 30 72"
                  fill="none"
                  stroke="rgba(45, 45, 45, 0.05)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Animated drawing path */}
                <motion.path
                  d="M 70 28 C 55 18, 32 18, 32 35 C 32 50, 68 50, 68 65 C 68 82, 45 82, 30 72"
                  fill="none"
                  stroke="url(#logo-grad)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1, opacity: [1, 1, 0] }}
                  transition={{
                    pathLength: { duration: 1.4, ease: "easeInOut", delay: 0.1 },
                    opacity: { duration: 0.4, times: [0, 0.8, 1], delay: 1.4 }
                  }}
                />
              </svg>

              {/* 2. Brand Logo Image (Fades in as path completes) */}
              <motion.img
                src="/logo-icon.png"
                alt="SkillARC Logo Icon"
                className="w-24 h-24 object-contain z-20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, ease: "easeOut", delay: 1.3 },
                  scale: { duration: 0.5, ease: "easeOut", delay: 1.3 }
                }}
              />
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-display font-bold text-2xl tracking-wide text-charcoal"
            >
              SkillARC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="font-body text-xs tracking-widest text-muted-grey uppercase"
            >
              Achieving Real Change
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
