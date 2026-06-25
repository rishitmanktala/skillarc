import type { Metadata } from "next";
import Link from "next/link";
import { Heart } from "lucide-react";
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

      {/* 6. Support & Donation CTA Section */}
      <AnimatedSection
        variant="fade-up"
        className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[linear-gradient(120deg,#FDE8E4_0%,#FEF6DC_45%,#E8F4F8_100%)] border-t border-b border-white/70 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Support The Cause
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-4">
            Be the Reason Someone Finds Their Potential
          </h2>
          <p className="font-body text-sm md:text-base text-muted-grey mb-8 max-w-xl mx-auto">
            Your contribution directly funds curriculum design, learning toolkits, mental health workshops, and active mentorship programs for adolescents who need them most.
          </p>
          <div className="flex justify-center">
            <Link
              href="/get-involved#donate"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm bg-[linear-gradient(135deg,#F2B5C4,#A8D5E2)] hover:shadow-lg text-charcoal px-6 py-3 rounded-xl shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />
              Support & Donate
            </Link>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
