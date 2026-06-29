"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isTransparent = pathname === "/" && !isScrolled;

  // Detect scroll past 60px to transition background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4",
          !isTransparent
            ? "bg-white/85 backdrop-blur-md shadow-sm border-b border-primary/10 py-3"
            : "bg-white/10 backdrop-blur-sm border-b border-white/10"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
<Image
  src="/logo-icon.png"
  alt="SkillARC Logo Icon"
  width={36}
  height={36}
  style={{ width: "auto", height: "auto" }}
  className="object-contain group-hover:scale-105 transition-transform duration-300"
/>
            <span className={cn(
              "font-display font-bold text-2xl tracking-tight transition-colors duration-300",
              !isTransparent ? "text-charcoal group-hover:text-primary-dark" : "text-white group-hover:text-primary"
            )}>
              Skill<span className={cn(
                "transition-colors duration-300",
                !isTransparent ? "text-primary-dark" : "text-primary"
              )}>ARC</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative font-body text-sm font-medium transition-colors duration-300 py-1.5",
                    !isTransparent
                      ? (isActive ? "text-charcoal" : "text-muted-grey hover:text-charcoal")
                      : (isActive ? "text-white" : "text-white/75 hover:text-white")
                  )}
                >
                  {link.label}
                  {/* Underline indicators */}
                  {isActive ? (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-primary rounded-full"
                    />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary/40 transition-all duration-300 group-hover:w-full hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/get-involved#donate"
              className={cn(
                "font-body font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-[1.02] shadow-sm hover:shadow-md active:scale-95",
                !isTransparent
                  ? "bg-accent text-charcoal hover:bg-accent/80"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25"
              )}
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors focus:outline-none",
              !isTransparent ? "text-charcoal hover:bg-primary/10" : "text-white hover:bg-white/15"
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40 lg:hidden"
            />

            {/* Mobile Drawer Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-[280px] max-w-[85vw] bg-bgBlue shadow-xl border-l border-primary/20 p-6 pt-24 z-40 lg:hidden flex flex-col justify-between"
            >
              <div className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "font-body text-lg font-medium py-2 px-3 rounded-lg transition-all",
                        isActive
                          ? "bg-primary/25 text-charcoal font-semibold border-l-4 border-primary pl-2"
                          : "text-muted-grey hover:bg-primary/10 hover:text-charcoal"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile CTA at the bottom */}
              <div className="mt-8 border-t border-primary/15 pt-6">
                <Link
                  href="/get-involved#donate"
                  onClick={() => setIsOpen(false)}
                  className="block text-center font-body font-semibold bg-accent text-charcoal py-3 px-6 rounded-full transition-all hover:bg-accent/80 shadow-sm active:scale-95"
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
