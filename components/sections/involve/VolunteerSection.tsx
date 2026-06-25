"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Users, Calendar, Check, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const TRACKS = [
  {
    title: "School Students",
    subtitle: "Ages 14–17",
    icon: <GraduationCap className="w-6 h-6 text-primary-dark" />,
    requirements: "Must be currently enrolled in high school (Ages 14-17) and provide parent/guardian consent. Commitment of at least 2 hours per week.",
    benefits: "Official certificate of volunteering, experiential community service credit, peer collaboration skill-building, and high school mentorship.",
  },
  {
    title: "College Students",
    subtitle: "Ages 18–22",
    icon: <Users className="w-6 h-6 text-accent-dark" />,
    requirements: "Must be enrolled in an undergraduate or post-graduate degree course. Commitment of 4–6 hours per week for at least 3 months.",
    benefits: "Leadership training certificates, live project coordination experience, recommendation letters, and networking with corporate mentors.",
  },
  {
    title: "Youth Volunteers",
    subtitle: "Ages 23+",
    icon: <Calendar className="w-6 h-6 text-highlight-dark" />,
    requirements: "Working professionals, corporate employees, or independent graduates. Commitment of flexible hours (weekend projects or online mentorship).",
    benefits: "Inter-corporate networking, specialized training delivery, professional development credits, and direct grassroots impact coaching.",
  },
];

export default function VolunteerSection() {
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [ageGroup, setAgeGroup] = useState("18-22");
  const [interests, setInterests] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInterestToggle = (area: string) => {
    setInterests((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;
    const subject = encodeURIComponent(`[SkillARC] Volunteer Application - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city || "N/A"}\nAge Group: ${ageGroup}\nInterest Areas: ${interests.join(", ") || "None selected"}\n\nWhy do you want to join?:\n${message || "N/A"}`
    );
    window.location.href = `mailto:skillarc.org@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="volunteer" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-bgYellow overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
            Join the Movement
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight">
            Volunteer Tracks
          </h2>
          <p className="font-body text-sm md:text-base text-muted-grey mt-4 leading-relaxed">
            Click on a track below to explore requirements and volunteer benefits.
          </p>
        </div>

        {/* Form & Tracks Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: Interactive Track Cards Accordion */}
          <div className="lg:col-span-6 space-y-4">
            {TRACKS.map((track, index) => {
              const isSelected = selectedTrack === index;
              return (
                <div
                  key={track.title}
                  onClick={() => setSelectedTrack(isSelected ? null : index)}
                  className={`cursor-pointer border rounded-2xl p-6 transition-all duration-300 ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-charcoal/5 bg-bgGreen hover:border-primary/40 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white rounded-xl shadow-inner select-none">
                        {track.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-lg text-charcoal">
                          {track.title}
                        </h3>
                        <p className="font-body text-xs text-muted-grey">
                          {track.subtitle}
                        </p>
                      </div>
                    </div>
                    {/* Visual indicator (Chevron/Arrow) */}
                    <div className={`w-6 h-6 rounded-full border border-charcoal/10 flex items-center justify-center text-charcoal/60 transition-transform duration-300 ${isSelected ? "rotate-90" : ""}`}>
                      ➔
                    </div>
                  </div>

                  {/* Expandable details panel */}
                  <AnimatePresence initial={false}>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-6 pt-5 border-t border-charcoal/10 space-y-4">
                          <div>
                            <h4 className="font-body font-bold text-xs text-accent-dark uppercase tracking-wider mb-1">
                              Requirements
                            </h4>
                            <p className="font-body text-sm text-charcoal/95 leading-relaxed">
                              {track.requirements}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-body font-bold text-xs text-primary-dark uppercase tracking-wider mb-1">
                              Benefits & Growth
                            </h4>
                            <p className="font-body text-sm text-charcoal/95 leading-relaxed">
                              {track.benefits}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Column: Registration Form */}
          <div className="lg:col-span-6">
            <div className="bg-[#FCFAF7] border border-[#2D2D2D]/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(45,45,45,0.03)]">
              <h3 className="font-display font-bold text-xl text-charcoal mb-6 flex items-center gap-3">
                Volunteer Registration
              </h3>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <AnimatedSection
                      variant="stagger-container"
                      className="space-y-4 font-body text-sm text-charcoal"
                    >
                      {/* Full Name */}
                      <AnimatedSection variant="stagger-item">
                        <label htmlFor="fullName" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Full Name</label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Aanya Sharma"
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
                            placeholder="e.g. aanya@example.com"
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
                            placeholder="e.g. New Delhi"
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

                      {/* Interest Area Multi-select */}
                      <AnimatedSection variant="stagger-item">
                        <label className="block font-semibold mb-2 text-xs uppercase tracking-wider text-charcoal/80">Interest Areas</label>
                        <div className="grid grid-cols-2 gap-3">
                          {["Life Skills", "Leadership", "Events", "Online Support"].map((area) => {
                            const isChecked = interests.includes(area);
                            return (
                              <button
                                type="button"
                                key={area}
                                onClick={() => handleInterestToggle(area)}
                                className={`flex items-center justify-between px-4 py-2 rounded-xl border text-left transition-all cursor-pointer ${
                                  isChecked
                                    ? "border-primary bg-primary/10 font-semibold"
                                    : "border-charcoal/10 bg-white hover:bg-charcoal/[0.02]"
                                }`}
                              >
                                <span className="text-xs">{area}</span>
                                {isChecked && <Check className="w-3.5 h-3.5 text-primary-dark shrink-0" />}
                              </button>
                            );
                          })}
                        </div>
                      </AnimatedSection>

                      {/* Message */}
                      <AnimatedSection variant="stagger-item">
                        <label htmlFor="motivationMessage" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Why do you want to join?</label>
                        <textarea
                          id="motivationMessage"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell us a little bit about yourself..."
                          rows={3}
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
                          Apply to Volunteer
                        </motion.button>
                      </AnimatedSection>
                    </AnimatedSection>
                  </form>
                ) : (
                  <motion.div
                    key="volunteer-success"
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
                      <strong>Subject:</strong> [SkillARC] Volunteer Application - {name}<br/><br/>
                      Name: {name}<br/>
                      Email: {email}<br/>
                      Phone: {phone}<br/>
                      City: {city || "N/A"}<br/>
                      Age Group: {ageGroup}<br/>
                      Interest Areas: {interests.join(", ") || "None selected"}<br/><br/>
                      Why do you want to join?:<br/>
                      {message || "N/A"}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `Subject: [SkillARC] Volunteer Application - ${name}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nCity: ${city || "N/A"}\nAge Group: ${ageGroup}\nInterest Areas: ${interests.join(", ") || "None selected"}\n\nWhy do you want to join?:\n${message || "N/A"}`
                        );
                      }}
                      className="mt-6 font-body font-semibold text-xs bg-accent text-charcoal hover:bg-accent/80 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Copy Application Details
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
