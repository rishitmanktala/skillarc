"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

const VIDEOS = [
  {
    title: "Life Skills Workshop Highlights",
    duration: "4:15",
    embedUrl: "https://www.youtube.com/embed/5K10V4SgX2k", // TED Talk placeholder
  },
  {
    title: "Volunteer Stories",
    duration: "5:30",
    embedUrl: "https://www.youtube.com/embed/f60dheI4z84", // TED Talk placeholder
  },
  {
    title: "Community Impact 2024",
    duration: "3:45",
    embedUrl: "https://www.youtube.com/embed/d2gR16_x28o", // TED Talk placeholder
  },
];

export default function VideosSection() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  // Lock scroll when video lightbox is open
  useEffect(() => {
    if (activeVideoUrl !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideoUrl]);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background-custom overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Audiovisual Stories
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Watch the Impact
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VIDEOS.map((video) => (
            <div
              key={video.title}
              onClick={() => setActiveVideoUrl(video.embedUrl)}
              className="cursor-pointer flex flex-col items-start group select-none"
            >
              {/* Video Thumbnail Box (16:9) */}
              <div className="relative w-full aspect-video rounded-2xl bg-[#1D1D1D] border border-charcoal/10 flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-all duration-300">
                {/* Abstract graphic lines in thumbnail */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-tr from-primary to-accent" />
                <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-[10px] font-body font-bold text-white tracking-wider uppercase">
                  {video.duration}
                </div>

                {/* Styled Play Button (Circle in primary pastel blue) */}
                <div className="w-14 h-14 rounded-full bg-primary text-charcoal flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-accent transition-all duration-300 relative z-10 pl-1">
                  <Play className="w-6 h-6 fill-charcoal text-charcoal" />
                </div>
              </div>

              {/* Video Label */}
              <h3 className="font-display font-bold text-base text-charcoal mt-5 group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Video Lightbox Modal */}
        <AnimatePresence>
          {activeVideoUrl !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoUrl(null)}
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
                aria-label="Close video player"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Video Player Frame Container (16:9 responsive) */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
              >
                <iframe
                  src={activeVideoUrl}
                  title="SkillARC Video Player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-none"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
