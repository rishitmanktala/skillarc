import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Footer() {
  return (
    <footer className="relative w-full bg-bgBlue text-charcoal pt-0 overflow-hidden">
      {/* Decorative Wave SVG Top Border */}
      <div className="w-full overflow-hidden leading-[0] bg-transparent">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[50px] md:h-[70px]"
        >
          <defs>
            <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A8D5E2" />
              <stop offset="100%" stopColor="#F2B5C4" />
            </linearGradient>
          </defs>
          {/* Subtle offset background wave */}
          <path
            d="M0,30 C300,70 600,10 900,60 L1200,30 L1200,120 L0,120 Z"
            fill="url(#wave-grad)"
            opacity="0.4"
          />
          {/* Main foreground wave matching footer background */}
          <path
            d="M0,45 C300,85 600,25 900,75 L1200,45 L1200,120 L0,120 Z"
            fill="#E8F4F8"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-10 pb-8">
        {/* Main Grid Layout */}
        <AnimatedSection
          variant="stagger-container"
          threshold={0.05}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12"
        >
          
          {/* Column 1: Logo & Mission */}
          <AnimatedSection variant="stagger-item" className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
<Image
  src="/logo-icon.png"
  alt="SkillARC Logo Icon"
  width={36}
  height={36}
  style={{ width: "auto", height: "auto" }}
  className="object-contain group-hover:scale-105 transition-transform duration-300"
/>
              <span className="font-display font-bold text-xl tracking-tight text-charcoal group-hover:text-primary-dark transition-colors duration-300">
                Skill<span className="text-primary-dark">ARC</span>
              </span>
            </Link>
            
            <p className="font-body text-sm font-semibold text-primary tracking-wide uppercase -mt-2">
              Achieving Real Change
            </p>
            
            <p className="font-body text-sm text-muted-grey leading-relaxed max-w-xs">
              SkillARC is a youth-led organization empowering adolescents through critical life skills, digital literacy, and leadership training.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a
                href="https://www.instagram.com/skillarc_?igsh=b2ZodjQ3Ymt3dXoz&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-charcoal hover:bg-accent hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/skillarcorganisation/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-charcoal hover:bg-accent hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/skillarcorg?s=11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full bg-primary text-charcoal hover:bg-accent hover:scale-110 active:scale-95 transition-all duration-300 shadow-sm"
                aria-label="Twitter/X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </AnimatedSection>

          {/* Column 2: Quick Links */}
          <AnimatedSection variant="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg text-primary-dark tracking-wide">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-muted-grey hover:text-accent-dark hover:pl-1 transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* Column 3: Get Involved */}
          <AnimatedSection variant="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg text-primary-dark tracking-wide">
              Get Involved
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/get-involved#volunteer"
                  className="font-body text-sm text-muted-grey hover:text-accent-dark hover:pl-1 transition-all duration-300"
                >
                  Volunteer with Us
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#intern"
                  className="font-body text-sm text-muted-grey hover:text-accent-dark hover:pl-1 transition-all duration-300"
                >
                  Apply for Internships
                </Link>
              </li>
              <li>
                <Link
                  href="/get-involved#partner"
                  className="font-body text-sm text-muted-grey hover:text-accent-dark hover:pl-1 transition-all duration-300"
                >
                  Partner as an Institution
                </Link>
              </li>

            </ul>
          </AnimatedSection>

          {/* Column 4: Contact Us */}
          <AnimatedSection variant="stagger-item" className="flex flex-col gap-4">
            <h3 className="font-display font-bold text-lg text-primary-dark tracking-wide">
              Contact Us
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <a
                  href="mailto:skillarc.org@gmail.com"
                  className="font-body text-sm text-muted-grey hover:text-accent-dark transition-colors break-all"
                >
                  skillarc.org@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-grey">
                  +91 70422 20997
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="font-body text-sm text-muted-grey leading-normal">
                  Gurugram, India
                </span>
              </li>
            </ul>
          </AnimatedSection>

        </AnimatedSection>

        {/* Bottom Bar separator line */}
        <AnimatedSection
          variant="fade-in"
          delay={0.3}
          className="border-t border-primary/20 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-body text-xs text-muted-grey text-center sm:text-left">
            &copy; 2026 SkillARC Foundation. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-grey flex items-center justify-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-accent fill-accent animate-pulse" /> for Youth Empowerment
          </p>
        </AnimatedSection>
      </div>
    </footer>
  );
}
