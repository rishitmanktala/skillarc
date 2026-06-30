import MediaHero from "@/components/sections/media/MediaHero";
import GallerySection from "@/components/sections/media/GallerySection";
import InstagramSection from "@/components/sections/media/InstagramSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Center | Gallery, Videos & Events | SkillARC",
  description: "Browse photographs, video logs, upcoming workshop schedules, and past event archives of the SkillARC Foundation.",
  keywords: ["Youth Foundation Gallery", "Workshop Videos", "Youth Foundation Events India", "SkillARC Media", "Life Skills Summit", "Photo Lightbox"],
  openGraph: {
    title: "Media Center | Gallery, Videos & Events | SkillARC",
    description: "Browse photographs, video logs, upcoming workshop schedules, and past event archives of the SkillARC Foundation.",
    url: "https://skillarc.org/media",
    siteName: "SkillARC",
    images: [
      {
        url: "https://skillarc.org/media-og.jpg",
        width: 1200,
        height: 630,
        alt: "SkillARC Media Center",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function MediaPage() {
  return (
    <>
      {/* 1. Media Center Hero */}
      <AnimatedSection direction="none">
        <MediaHero />
      </AnimatedSection>

      {/* 2. Photo Gallery Grid & Lightbox */}
      <AnimatedSection direction="up">
        <GallerySection />
      </AnimatedSection>



      {/* 4. Instagram Updates Section */}
      <AnimatedSection direction="up">
        <InstagramSection />
      </AnimatedSection>
    </>
  );
}
