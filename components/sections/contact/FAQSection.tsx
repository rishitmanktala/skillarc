"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What is SkillARC?",
    answer: "SkillARC is a youth-led nonprofit organization based in Gurugram, India. We are dedicated to empowering underprivileged adolescents and youth through critical life skills, digital literacy, and leadership training to bridge the gap between academic schooling and real-world capabilities.",
  },
  {
    question: "How can I volunteer with SkillARC?",
    answer: "We welcome volunteers across multiple roles including workshop facilitation, campaign design, event operations, and online counseling support. To apply, head to our Get Involved page, choose a track that fits your schedule, and fill out our volunteer registration form.",
  },
  {
    question: "Are there age requirements to volunteer?",
    answer: "Yes, we categorize volunteering into three clear tracks: School Students (Ages 14-17), College Students (Ages 18-22), and Youth/Professional Volunteers (Ages 23+). Each track is designed with age-appropriate commitments and specific mentorship benefits.",
  },
  {
    question: "How can my school partner with SkillARC?",
    answer: "We partner with schools to integrate structured, semester-long life-skills sessions directly into the curriculum. Schools can send a partnership inquiry via our Get Involved page, and our operations team will schedule a co-design consultation to align on curriculum schedules.",
  },
  {
    question: "Are internships paid?",
    answer: "No, only certificates and LORs will be provided.",
  },

  {
    question: "How can my Youth Foundation collaborate?",
    answer: "We collaborate with local and national Youth Foundations to deploy digital literacy modules or extend mental well-being circles to underserved communities. If you run a community center or adolescent shelter, please send a partnership inquiry so we can align programs.",
  },
  {
    question: "Where does SkillARC operate?",
    answer: "Our administrative office is located in Gurugram, India, where we run physical school workshops and local community campaigns. We operate exclusively in Gurugram.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgPink overflow-hidden">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 select-none">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3">
            Got Questions?
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            // Alternating subtle background color on open
            const activeBg = index % 2 === 0 ? "bg-primary/10 border-primary/20" : "bg-accent/10 border-accent/20";

            return (
              <div
                key={faq.question}
                className={`border rounded-2xl transition-all duration-300 ${
                  isOpen
                    ? activeBg
                    : "border-charcoal/5 bg-white hover:border-primary/30"
                }`}
              >
                {/* Header / Question bar */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-display font-bold text-base md:text-lg text-charcoal leading-snug">
                    {faq.question}
                  </span>
                  
                  {/* Rotating pink chevron arrow */}
                  <ChevronDown
                    className={`w-5 h-5 text-accent-dark shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-charcoal/5 font-body text-sm md:text-base text-charcoal/90 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
