"use client";

import { useState } from "react";
import { Heart, CreditCard, Landmark, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";

const DONATIONS = [
  {
    amount: "₹500",
    value: 500,
    impact: "₹500 provides learning toolkits and workbook materials for 2 students during physical sessions.",
  },
  {
    amount: "₹1,000",
    value: 1000,
    impact: "₹1,000 sponsors a student's entire 12-session Life Skills curriculum, building key decision-making capacities.",
  },
  {
    amount: "₹2,500",
    value: 2500,
    impact: "₹2,500 funds a local environmental campaign or mental health peer network coordinated entirely by youth.",
  },
];

export default function DonateSection() {
  const [selectedDonation, setSelectedDonation] = useState(1); // Default to ₹1,000 index
  const [isCopied, setIsCopied] = useState(false);

  const copyUPI = () => {
    navigator.clipboard.writeText("SkillARC@upi");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="donate" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-accent/15 overflow-hidden scroll-mt-20">
      <div className="max-w-5xl mx-auto w-full">
        
        {/* Section Heading */}
        <AnimatedSection variant="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-white px-3.5 py-1.5 rounded-full mb-3 select-none">
            Support The Cause
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Be the Reason Someone Finds Their Potential
          </h2>
          <p className="font-body text-sm md:text-base text-muted-grey mt-4">
            Your contribution directly funds curriculum design, learning toolkits, mental health workshops, and active mentorship programs for adolescents who need them most.
          </p>
        </AnimatedSection>

        {/* Clickable Donation Tier Buttons */}
        <AnimatedSection variant="fade-up" delay={0.1} className="grid grid-cols-3 gap-4 mb-8 max-w-md mx-auto select-none">
          {DONATIONS.map((d, index) => {
            const isSelected = selectedDonation === index;
            return (
              <motion.button
                key={d.amount}
                onClick={() => setSelectedDonation(index)}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className={`py-4 rounded-xl border text-center font-display font-bold text-lg md:text-xl transition-colors duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-charcoal text-white border-charcoal shadow-md"
                    : "bg-white text-charcoal border-charcoal/5 hover:border-charcoal/30 hover:bg-white/80"
                }`}
              >
                {d.amount}
              </motion.button>
            );
          })}
        </AnimatedSection>

        {/* Dynamic Impact Display Box */}
        <AnimatedSection variant="scale-in" delay={0.2} className="card-surface p-6 md:p-8 max-w-2xl mx-auto text-center mb-12 min-h-[140px] flex flex-col justify-center">
          <span className="inline-block font-body text-[10px] font-bold text-primary-dark uppercase tracking-widest mb-2 select-none">
            The Impact
          </span>
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedDonation}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="font-body text-base md:text-lg text-charcoal/90 leading-relaxed font-medium"
              >
                {"\""}{DONATIONS[selectedDonation].impact}{"\""}
              </motion.p>
            </AnimatePresence>
          </div>
        </AnimatedSection>

        {/* Alternative details: Bank & UPI Info */}
        <AnimatedSection variant="stagger-container" delay={0.3} className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          
          {/* Column 1: UPI Transfer */}
          <AnimatedSection variant="stagger-item" className="card-surface p-6 md:p-8 flex flex-col justify-between hover:shadow-lg hover:border-accent/20 transition-all duration-300">
            <div>
              <h3 className="font-display font-bold text-lg text-charcoal mb-4 flex items-center gap-2.5">
                <CreditCard className="w-5 h-5 text-accent-dark" />
                UPI Transfer
              </h3>
              <p className="font-body text-sm text-muted-grey leading-relaxed mb-6">
                You can transfer support funds instantly using any UPI app (Google Pay, PhonePe, Paytm) by targeting our ID below.
              </p>
            </div>
            
            <div className="flex items-center gap-2 w-full">
              <div className="bg-background-custom border border-charcoal/5 rounded-xl px-4 py-2.5 font-mono text-sm text-charcoal flex-grow select-all">
                SkillARC@upi
              </div>
              <motion.button
                onClick={copyUPI}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="font-body font-semibold text-xs bg-primary text-charcoal px-4 py-2.5 rounded-xl transition-colors hover:bg-primary/80 shrink-0 cursor-pointer"
              >
                {isCopied ? "Copied!" : "Copy ID"}
              </motion.button>
            </div>
          </AnimatedSection>

          {/* Column 2: Bank Transfer */}
          <AnimatedSection variant="stagger-item" className="card-surface p-6 md:p-8 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
            <h3 className="font-display font-bold text-lg text-charcoal mb-4 flex items-center gap-2.5">
              <Landmark className="w-5 h-5 text-primary-dark" />
              Bank Account Details
            </h3>
            <div className="font-body text-xs md:text-sm text-charcoal/90 space-y-2">
              <div className="flex justify-between border-b border-charcoal/5 pb-2">
                <span className="text-muted-grey">Account Name</span>
                <span className="font-semibold">SkillARC Foundation</span>
              </div>
              <div className="flex justify-between border-b border-charcoal/5 pb-2">
                <span className="text-muted-grey">Bank Name</span>
                <span className="font-semibold">HDFC Bank Ltd</span>
              </div>
              <div className="flex justify-between border-b border-charcoal/5 pb-2">
                <span className="text-muted-grey">Account Number</span>
                <span className="font-mono font-semibold">50200084739201</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-grey">IFSC Code</span>
                <span className="font-mono font-semibold">HDFC0000124</span>
              </div>
            </div>
          </AnimatedSection>

        </AnimatedSection>

        {/* Security Notice */}
        <AnimatedSection variant="fade-in" delay={0.5} className="text-center mt-10">
          <p className="font-body text-xs text-muted-grey italic">
            * Note: Secure online payment gateway integration is coming soon.
          </p>
        </AnimatedSection>

      </div>
    </section>
  );
}

