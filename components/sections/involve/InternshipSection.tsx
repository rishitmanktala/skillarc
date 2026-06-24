"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Briefcase, FileText, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const ROLES = [
  {
    title: "Curriculum Development Intern",
    dept: "Education",
    duration: "3 Months (Part-time)",
    description: "Collaborate with experienced educators to research, design, and pilot experiential learning activities for adolescent life skills sessions. Map modules to UN SDG indicators.",
    requirements: [
      "Background in psychology, social work, or education",
      "Excellent content writing and formatting skills",
      "Strong interest in child development methodologies",
    ],
  },
  {
    title: "Program Operations Intern",
    dept: "Operations",
    duration: "4 Months (Hybrid)",
    description: "Assist in coordinating school schedules, managing logistics for physical workshop deliveries, collating student feedback reports, and coordinating volunteer deployments.",
    requirements: [
      "Strong coordination and task management skills",
      "Proficient in spreadsheets and workspace tools",
      "Ability to travel locally for school workshops",
    ],
  },
  {
    title: "Communications & Design Intern",
    dept: "Marketing",
    duration: "3 Months (Remote)",
    description: "Design social media campaigns, create posters and graphic toolkits, write newsletters, and coordinate website updates to promote SkillARC's impact activities.",
    requirements: [
      "Proficiency in Figma, Canva, or Adobe Illustrator",
      "Basic copy writing and editing capabilities",
      "Creative mindset with strong visual storytelling",
    ],
  },
];

export default function InternshipSection() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0].title);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [ageGroup, setAgeGroup] = useState("18-22");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef<HTMLDivElement>(null);

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    const subject = encodeURIComponent(`[SkillARC] Internship Application - ${selectedRole} - ${name}`);
    const body = encodeURIComponent(
      `Role: ${selectedRole}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city || "N/A"}\nAge Group: ${ageGroup}\n\nStatement of Purpose / Why are you a good fit?:\n${message || "N/A"}`
    );
    window.location.href = `mailto:skillarc.org@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="intern" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background-custom overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Kickstart Your Career
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Internship Positions
          </h2>
          <p className="font-body text-sm md:text-base text-muted-grey mt-4 leading-relaxed">
            Gain hands-on experience, receive professional mentorship, and make a tangible impact in our active program cohorts.
          </p>
        </div>

        {/* Roles List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {ROLES.map((role) => (
            <div
              key={role.title}
              className="card-surface flex flex-col justify-between items-start relative group"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center gap-3 mb-5 select-none">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-charcoal font-body text-[10px] font-bold uppercase tracking-wider">
                    {role.dept}
                  </span>
                  <span className="font-body text-xs text-muted-grey flex items-center gap-1.5 font-medium">
                    <Briefcase className="w-3.5 h-3.5" />
                    {role.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-charcoal mb-4 group-hover:text-primary transition-colors">
                  {role.title}
                </h3>
                
                <p className="font-body text-sm text-muted-grey leading-relaxed mb-6">
                  {role.description}
                </p>

                {/* Key Requirements list */}
                <div className="border-t border-charcoal/5 pt-5 mb-8">
                  <h4 className="font-body font-bold text-xs text-charcoal/80 uppercase tracking-widest mb-3 flex items-center gap-1.5 select-none">
                    <FileText className="w-3.5 h-3.5 text-accent-dark" />
                    Requirements
                  </h4>
                  <ul className="space-y-2.5">
                    {role.requirements.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check className="w-4.5 h-4.5 text-accent-dark shrink-0 mt-0.5" />
                        <span className="font-body text-sm text-charcoal/90">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Apply Button with hover/tap animations */}
              <motion.button
                onClick={() => handleApplyClick(role.title)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 font-body font-semibold text-sm bg-primary text-charcoal px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200 hover:bg-primary/80 cursor-pointer"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          ))}
        </div>

        {/* Application Form Section */}
        <div ref={formRef} className="max-w-2xl mx-auto scroll-mt-24">
          <div className="bg-[#FCFAF7] border border-[#2D2D2D]/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(45,45,45,0.03)]">
            <h3 className="font-display font-bold text-xl text-charcoal mb-6">
              Internship Application
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                  <AnimatedSection
                    variant="stagger-container"
                    className="space-y-4 font-body text-sm text-charcoal"
                  >
                    {/* Role Applied For Dropdown */}
                    <AnimatedSection variant="stagger-item">
                      <label htmlFor="roleSelect" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Role Applied For</label>
                      <select
                        id="roleSelect"
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal font-semibold"
                      >
                        {ROLES.map((r) => (
                          <option key={r.title} value={r.title}>
                            {r.title} ({r.dept})
                          </option>
                        ))}
                      </select>
                    </AnimatedSection>

                    {/* Full Name */}
                    <AnimatedSection variant="stagger-item">
                      <label htmlFor="fullName" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Full Name</label>
                      <input
                        id="fullName"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Kabir Verma"
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal"
                      />
                    </AnimatedSection>

                    {/* Email & Phone */}
                    <AnimatedSection variant="stagger-item" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="emailId" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Email ID</label>
                        <input
                          id="emailId"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. kabir@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal"
                        />
                      </div>
                      <div>
                        <label htmlFor="phoneNumber" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Phone Number</label>
                        <input
                          id="phoneNumber"
                          type="tel"
                          required
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 9876543210"
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal"
                        />
                      </div>
                    </AnimatedSection>

                    {/* City & Age Group */}
                    <AnimatedSection variant="stagger-item" className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="cityName" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">City</label>
                        <input
                          id="cityName"
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="e.g. Mumbai"
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal"
                        />
                      </div>
                      <div>
                        <label htmlFor="ageGroup" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Age Group</label>
                        <select
                          id="ageGroup"
                          value={ageGroup}
                          onChange={(e) => setAgeGroup(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal"
                        >
                          <option value="14-17">14-17 (School)</option>
                          <option value="18-22">18-22 (College)</option>
                          <option value="23+">23+ (Youth/Professional)</option>
                        </select>
                      </div>
                    </AnimatedSection>

                    {/* Statement of purpose */}
                    <AnimatedSection variant="stagger-item">
                      <label htmlFor="fitStatementText" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Why are you a good fit for this role?</label>
                      <textarea
                        id="fitStatementText"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Outline any prior projects or coursework..."
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal resize-none"
                      />
                    </AnimatedSection>

                    {/* Submit Button with hover/tap animations */}
                    <AnimatedSection variant="stagger-item">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full font-body font-semibold text-sm bg-primary text-charcoal py-3 rounded-xl shadow-sm transition-all duration-200 hover:bg-primary/80 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Submit Internship Application
                      </motion.button>
                    </AnimatedSection>
                  </AnimatedSection>
                </form>
              ) : (
                <motion.div
                  key="intern-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 px-6 flex flex-col items-center justify-center text-center bg-primary/10 border border-primary/20 rounded-2xl"
                >
                  <h4 className="font-display font-bold text-lg text-charcoal mb-2">
                    Opening Your Email Client...
                  </h4>
                  <p className="font-body text-sm text-muted-grey leading-relaxed max-w-sm mb-6">
                    If your email app {"didn't"} open automatically, please copy the text below and email it directly to <strong className="text-charcoal">skillarc.org@gmail.com</strong>:
                  </p>

                  <div className="w-full text-left bg-white border border-charcoal/10 rounded-xl p-4 font-mono text-xs text-charcoal/90 overflow-x-auto whitespace-pre-wrap max-h-60 select-all">
                    <strong>Subject:</strong> [SkillARC] Internship Application - {selectedRole} - {name}<br/><br/>
                    Role: {selectedRole}<br/>
                    Name: {name}<br/>
                    Email: {email}<br/>
                    Phone: {phone}<br/>
                    City: {city || "N/A"}<br/>
                    Age Group: {ageGroup}<br/><br/>
                    Statement of Purpose / Why are you a good fit?:<br/>
                    {message || "N/A"}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `Subject: [SkillARC] Internship Application - ${selectedRole} - ${name}\n\nRole: ${selectedRole}\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city || "N/A"}\nAge Group: ${ageGroup}\n\nStatement of Purpose / Why are you a good fit?:\n${message || "N/A"}`
                      );
                    }}
                    className="mt-6 font-body font-semibold text-xs bg-charcoal text-white hover:bg-charcoal/80 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Copy Application Details
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
