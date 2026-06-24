"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

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
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-primary/10 py-3"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo-icon.png"
              alt="SkillARC Logo Icon"
              className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-display font-bold text-2xl tracking-tight text-charcoal group-hover:text-primary-dark transition-colors duration-300">
              Skill<span className="text-primary-dark group-hover:text-charcoal transition-colors duration-300">ARC</span>
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
                    "relative font-body text-sm font-medium transition-colors duration-300 py-1.5",
                    isActive
                      ? "text-charcoal"
                      : "text-muted-grey hover:text-charcoal"
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
              className="font-body font-semibold text-sm bg-accent text-charcoal px-6 py-2.5 rounded-full transition-all duration-200 hover:bg-accent/80 hover:scale-[1.02] shadow-sm hover:shadow-md active:scale-95"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-charcoal hover:bg-primary/10 rounded-lg transition-colors focus:outline-none"
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
              className="fixed right-0 top-0 bottom-0 w-[280px] max-w-[85vw] bg-background-custom shadow-xl border-l border-primary/20 p-6 pt-24 z-40 lg:hidden flex flex-col justify-between"
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
