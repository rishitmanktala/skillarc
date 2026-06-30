import InvolveHero from "@/components/sections/involve/InvolveHero";
import VolunteerSection from "@/components/sections/involve/VolunteerSection";
import InternshipSection from "@/components/sections/involve/InternshipSection";
import PartnerSection from "@/components/sections/involve/PartnerSection";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Involved | Volunteer, Intern & Partner | SkillARC",
  description: "Join SkillARC as a volunteer, apply for internships, partner as an institution, or support the cause through donations.",
  keywords: ["Volunteer India", "Youth Foundation Internship", "Partner with Youth Foundation", "Donate UPI", "Youth Action", "SkillARC Careers"],
  openGraph: {
    title: "Get Involved | Volunteer, Intern & Partner | SkillARC",
    description: "Join SkillARC as a volunteer, apply for internships, partner as an institution, or support the cause through donations.",
    url: "https://skillarc.org/get-involved",
    siteName: "SkillARC",
    images: [
      {
        url: "https://skillarc.org/get-involved-og.jpg",
        width: 1200,
        height: 630,
        alt: "Get Involved with SkillARC",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function GetInvolvedPage() {
  return (
    <>
      {/* 1. Involve Hero Page Section */}
      <InvolveHero />

      {/* 2. Volunteer Action Tracks & Registration */}
      <VolunteerSection />

      {/* 3. Internship Positions & Applications */}
      <InternshipSection />

      {/* 4. Institutional Partnerships & Inquiry */}
      <PartnerSection />
    </>
  );
}
