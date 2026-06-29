"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";

const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    src: "/images/media/workshops/financial-literacy-5.jpg",
    likes: 124,
    comments: 18,
    alt: "Financial Literacy Workshop",
  },
  {
    id: "post-2",
    src: "/images/media/volunteers/durtagni-collab-stem-76.jpg",
    likes: 98,
    comments: 12,
    alt: "STEM Collaboration Event",
  },
  {
    id: "post-3",
    src: "/images/media/campaigns/self-awareness-1.jpg",
    likes: 142,
    comments: 24,
    alt: "Self Awareness Campaign Circle",
  },
  {
    id: "post-4",
    src: "/images/media/events/govt-college-4.jpg",
    likes: 156,
    comments: 31,
    alt: "Interactive Session at Govt College",
  },
];

export default function InstagramSection() {
  const instagramUrl = "https://www.instagram.com/skillarc_?igsh=b2ZodjQ3Ymt3dXoz&utm_source=qr";

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgCoral border-t border-charcoal/5 relative overflow-hidden">
      {/* Decorative background blur blobs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-accent/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: CTA & Profile Info */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-4 select-none">
              Stay Connected
            </span>
            
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-4">
              Follow Our Journey on Instagram
            </h2>
            
            <p className="font-body text-base text-muted-grey mb-8 leading-relaxed">
              Get real-time updates from our ground-level workshops, volunteer sessions, and upcoming community drives. See how we are achieving real change every single day.
            </p>

            {/* Profile Widget Card */}
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(45, 45, 45, 0.12)" }}
              className="w-full flex items-center justify-between p-5 rounded-2xl bg-bgGreen border border-charcoal/5 mb-8 transition-shadow duration-300 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                {/* Profile Picture */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full p-[2.5px] -m-[2.5px] animate-pulse" />
                  <Image
                    src="/logo-icon.png"
                    width={48}
                    height={48}
                    alt="SkillARC Logo"
                    style={{ width: "auto", height: "auto" }}
                    className="w-12 h-12 rounded-full border border-white bg-white object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-body font-bold text-base text-charcoal flex items-center gap-1.5 group-hover:text-primary-dark transition-colors duration-300">
                    @skillarc_
                    <ExternalLink className="w-3.5 h-3.5 text-muted-grey shrink-0" />
                  </h3>
                  <p className="font-body text-xs text-muted-grey mt-0.5">
                    SkillARC Foundation • Non-Profit
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-charcoal/5 font-body text-xs font-bold text-charcoal shadow-sm group-hover:bg-primary group-hover:text-charcoal group-hover:border-transparent transition-all duration-300">
                <Instagram className="w-3.5 h-3.5" />
                Follow
              </div>
            </motion.a>

            {/* Main Action Button using site's primary style */}
            <motion.a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-primary text-charcoal font-body font-bold text-sm sm:text-base shadow-sm hover:bg-primary/80 hover:shadow-md transition-all duration-300 w-full sm:w-auto"
            >
              <Instagram className="w-5 h-5 text-charcoal" />
              Check out our latest updates
            </motion.a>
          </div>

          {/* Right Column: Interactive collage / Instagram-style grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {INSTAGRAM_POSTS.map((post, idx) => (
                <motion.a
                  key={post.id}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300 bg-charcoal border border-charcoal/5 cursor-pointer"
                >
                  {/* Post Image */}
                  <Image
                    src={post.src}
                    alt={post.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Likes & Comments */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6 text-white font-body font-bold text-sm sm:text-base">
                    <span className="flex items-center gap-2">
                      <Heart className="w-5 h-5 fill-white text-white" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5 fill-white text-white" />
                      {post.comments}
                    </span>
                  </div>

                  {/* Tiny Instagram Icon in Corner */}
                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white backdrop-blur-xs group-hover:opacity-0 transition-opacity duration-300">
                    <Instagram className="w-3.5 h-3.5" />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
