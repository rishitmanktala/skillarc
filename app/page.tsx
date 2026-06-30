import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import ImpactSection from "@/components/sections/ImpactSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import StoriesSection from "@/components/sections/StoriesSection";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "SkillARC | Achieving Real Change | Youth Foundation India",
  description: "SkillARC is a youth-led Youth Foundation empowering adolescents and youth across India through critical life skills, digital literacy, and leadership training programs.",
  keywords: ["Youth Foundation", "SkillARC", "Youth Empowerment", "Life Skills", "India", "Leadership Training", "Digital Literacy", "Aspirations"],
  openGraph: {
    title: "SkillARC | Achieving Real Change | Youth Foundation India",
    description: "SkillARC is a youth-led Youth Foundation empowering adolescents and youth across India through critical life skills, digital literacy, and leadership training programs.",
    url: "https://skillarc.org",
    siteName: "SkillARC",
    images: [
      {
        url: "https://skillarc.org/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SkillARC — Achieving Real Change",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Impact Stats Section */}
      <ImpactSection />

      {/* 3. About Preview Section */}
      <AboutPreviewSection />

      {/* 4. Core Programs Grid Section */}
      <ProgramsSection />

      {/* 5. Youth Stories Testimony Section */}
      <StoriesSection />
    </>
  );
}
