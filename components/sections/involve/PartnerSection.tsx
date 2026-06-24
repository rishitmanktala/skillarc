"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Send, ShieldAlert, Landmark, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

const BENEFITS = [
  "Customized life-skills workshops designed for school/college students",
  "Trained student-facilitators deployed directly to host cohorts",
  "Comprehensive learning toolkits and resources provided",
  "Transparent tracking of learning growth metrics",
];

export default function PartnerSection() {
  const [orgName, setOrgName] = useState("");
  const [contactName, setContactName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [orgType, setOrgType] = useState("School");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orgName || !contactName || !email || !phone) return;
    const subject = encodeURIComponent(`[SkillARC] Partnership Inquiry - ${orgName}`);
    const body = encodeURIComponent(
      `Organisation Name: ${orgName}\nContact Person: ${contactName}\nEmail: ${email}\nPhone: ${phone}\nOrganisation Type: ${orgType}\n\nCollaboration Details / Proposed scope:\n${message || "N/A"}`
    );
    window.location.href = `mailto:skillarc.org@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  return (
    <section id="partner" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left: Partnership Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <span className="inline-flex items-center font-body text-xs md:text-sm font-semibold tracking-wider uppercase text-accent-dark bg-accent/10 px-3.5 py-1.5 rounded-full mb-3 select-none">
              Institutional Collaborations
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-charcoal tracking-tight leading-tight mb-6">
              Partner as an Institution
            </h2>
            <p className="font-body text-base text-muted-grey leading-relaxed mb-8">
              We collaborate with schools, colleges, educational centers, and corporate brands to integrate life-skills training and digital workspace projects at the grassroots level. Let{"'"}s build a program together.
            </p>

            {/* Benefit Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {BENEFITS.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent-dark shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-charcoal/90 leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Inquiry Form */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-[#FCFAF7] border border-[#2D2D2D]/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(45,45,45,0.03)]">
              <h3 className="font-display font-bold text-xl text-charcoal mb-6">
                Partnership Inquiry
              </h3>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <AnimatedSection
                      variant="stagger-container"
                      className="space-y-4 font-body text-sm text-charcoal"
                    >
                      {/* Organisation Name */}
                      <AnimatedSection variant="stagger-item">
                        <label htmlFor="orgName" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Organisation Name</label>
                        <input
                          id="orgName"
                          type="text"
                          required
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                          placeholder="e.g. Hope Academy School"
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal"
                        />
                      </AnimatedSection>

                      {/* Contact Person */}
                      <AnimatedSection variant="stagger-item">
                        <label htmlFor="contactName" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Contact Person Name</label>
                        <input
                          id="contactName"
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="e.g. Priya Sharma"
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
                            placeholder="e.g. priya@example.com"
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

                      {/* Organisation Type Dropdown */}
                      <AnimatedSection variant="stagger-item">
                        <label htmlFor="orgType" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Organisation Type</label>
                        <select
                          id="orgType"
                          value={orgType}
                          onChange={(e) => setOrgType(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal font-semibold"
                        >
                          <option value="School">School / Educational Institution</option>
                          <option value="Youth Foundation">Youth Foundation / Non-Profit</option>
                          <option value="Corporate">Corporate / Brand Partner</option>
                          <option value="Other">Other / Individual Entity</option>
                        </select>
                      </AnimatedSection>

                      {/* Message */}
                      <AnimatedSection variant="stagger-item">
                        <label htmlFor="collabIntentText" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">How would you like to collaborate?</label>
                        <textarea
                          id="collabIntentText"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Outline the scope of proposed workshops or engagements..."
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
                          Submit Inquiry
                        </motion.button>
                      </AnimatedSection>
                    </AnimatedSection>
                  </form>
                ) : (
                  <motion.div
                    key="partner-success"
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
                      <strong>Subject:</strong> [SkillARC] Partnership Inquiry - {orgName}<br/><br/>
                      Organisation Name: {orgName}<br/>
                      Contact Person: {contactName}<br/>
                      Email: {email}<br/>
                      Phone: {phone}<br/>
                      Organisation Type: {orgType}<br/><br/>
                      Collaboration Details / Proposed scope:<br/>
                      {message || "N/A"}
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(
                          `Subject: [SkillARC] Partnership Inquiry - ${orgName}\n\nOrganisation Name: ${orgName}\nContact Person: ${contactName}\nEmail: ${email}\nPhone: ${phone}\nOrganisation Type: ${orgType}\n\nCollaboration Details / Proposed scope:\n${message || "N/A"}`
                        );
                      }}
                      className="mt-6 font-body font-semibold text-xs bg-charcoal text-white hover:bg-charcoal/80 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                    >
                      Copy Inquiry Details
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
