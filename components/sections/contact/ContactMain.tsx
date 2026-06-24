"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Send } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function ContactMain() {
  // Form Fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [purpose, setPurpose] = useState("General Enquiry");
  const [message, setMessage] = useState("");
  
  // Validation Errors
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = "Full Name is required";
    
    if (!email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const subject = encodeURIComponent(`[SkillARC] Contact Request - ${purpose}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nPurpose: ${purpose}\n\nMessage:\n${message}`
      );
      window.location.href = `mailto:skillarc.org@gmail.com?subject=${subject}&body=${body}`;
      setIsSubmitted(true);
    }
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* LEFT COLUMN — Contact Information */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 border border-primary/20 space-y-8 flex flex-col justify-between">
            
            <div>
              <h2 className="font-display font-bold text-xl md:text-2xl text-charcoal mb-2">
                Connect With Us
              </h2>
              <p className="font-body text-sm text-muted-grey leading-relaxed mb-6">
                Have questions about our sessions, campaigns, or partnerships? Reach out and we will respond shortly.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-4 bg-white/60 p-4.5 rounded-xl border border-white/50 shadow-sm">
                <div className="p-3 bg-white rounded-xl shadow-inner text-accent-dark shrink-0 select-none">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block font-body text-[10px] font-bold text-muted-grey uppercase tracking-wider">Email</span>
                  <a href="mailto:skillarc.org@gmail.com" className="font-body text-sm md:text-base font-semibold text-charcoal hover:text-accent transition-colors break-all">
                    skillarc.org@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 bg-white/60 p-4.5 rounded-xl border border-white/50 shadow-sm">
                <div className="p-3 bg-white rounded-xl shadow-inner text-primary-dark shrink-0 select-none">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold text-muted-grey uppercase tracking-wider">Phone</span>
                  <span className="font-body text-sm md:text-base font-semibold text-charcoal leading-normal">
                    +91 70422 20997
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-white/60 p-4.5 rounded-xl border border-white/50 shadow-sm">
                <div className="p-3 bg-white rounded-xl shadow-inner text-highlight-dark shrink-0 select-none">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-body text-[10px] font-bold text-muted-grey uppercase tracking-wider">Location</span>
                  <span className="font-body text-sm md:text-base font-semibold text-charcoal leading-normal">
                    Gurugram, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Row */}
            <div className="border-t border-charcoal/10 pt-6 mt-4">
              <span className="block font-body text-[10px] font-bold text-muted-grey uppercase tracking-widest mb-3.5 select-none">
                Follow Our Change
              </span>
              
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/skillarc_?igsh=b2ZodjQ3Ymt3dXoz&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal hover:bg-accent hover:text-charcoal transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>
                {/* LinkedIn */}
                <motion.a
                  href="https://www.linkedin.com/company/skillarcorganisation/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal hover:bg-accent hover:text-charcoal transition-colors shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>
                {/* Twitter / X */}
                <motion.a
                  href="https://x.com/skillarcorg?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-charcoal hover:bg-accent hover:text-charcoal transition-colors shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT COLUMN — Contact Form */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-[#FCFAF7] border border-[#2D2D2D]/5 rounded-2xl p-6 md:p-8 shadow-[0_4px_20px_-4px_rgba(45,45,45,0.03)] relative overflow-hidden">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-4 font-body text-sm text-charcoal"
                  noValidate
                >
                  <AnimatedSection variant="stagger-container" className="space-y-4">
                    {/* Full Name */}
                    <AnimatedSection variant="stagger-item">
                      <div>
                        <label htmlFor="fullName" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Full Name</label>
                        <input
                          id="fullName"
                          type="text"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                            if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                          }}
                          placeholder="e.g. Aanya Sharma"
                          className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:border-primary text-charcoal ${
                            errors.name ? "border-red-500" : "border-charcoal/10"
                          }`}
                        />
                        {errors.name && (
                          <span className="text-red-500 text-xs font-semibold mt-1 block">
                            {errors.name}
                          </span>
                        )}
                      </div>
                    </AnimatedSection>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <AnimatedSection variant="stagger-item">
                        <div>
                          <label htmlFor="emailAddress" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Email Address</label>
                          <input
                            id="emailAddress"
                            type="email"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                            }}
                            placeholder="e.g. aanya@example.com"
                            className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:border-primary text-charcoal ${
                              errors.email ? "border-red-500" : "border-charcoal/10"
                            }`}
                          />
                          {errors.email && (
                            <span className="text-red-500 text-xs font-semibold mt-1 block">
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </AnimatedSection>
                      
                      <AnimatedSection variant="stagger-item">
                        <div>
                          <label htmlFor="phoneNumber" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Phone Number (Optional)</label>
                          <input
                            id="phoneNumber"
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="e.g. +91 9876543210"
                            className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal"
                          />
                        </div>
                      </AnimatedSection>
                    </div>

                    {/* Purpose of Contacting */}
                    <AnimatedSection variant="stagger-item">
                      <div>
                        <label htmlFor="contactPurpose" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Purpose of Contacting</label>
                        <select
                          id="contactPurpose"
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-xl border border-charcoal/10 bg-white focus:outline-none focus:border-primary text-charcoal font-semibold"
                        >
                          <option value="General Enquiry">General Enquiry</option>
                          <option value="Volunteer">Volunteer With Us</option>
                          <option value="Partnership">Institutional Partnership</option>
                          <option value="Media">Media Inquiry</option>
                          <option value="Internship">Apply for Internship</option>
                          <option value="Donation">Donation Support</option>
                        </select>
                      </div>
                    </AnimatedSection>

                    {/* Message */}
                    <AnimatedSection variant="stagger-item">
                      <div>
                        <label htmlFor="messageText" className="block font-semibold mb-1 text-xs uppercase tracking-wider text-charcoal/80">Message</label>
                        <textarea
                          id="messageText"
                          value={message}
                          onChange={(e) => {
                            setMessage(e.target.value);
                            if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                          }}
                          placeholder="Write your message here..."
                          rows={5}
                          className={`w-full px-4 py-2.5 rounded-xl border bg-white focus:outline-none focus:border-primary text-charcoal resize-none ${
                            errors.message ? "border-red-500" : "border-charcoal/10"
                          }`}
                        />
                        {errors.message && (
                          <span className="text-red-500 text-xs font-semibold mt-1 block">
                            {errors.message}
                          </span>
                        )}
                      </div>
                    </AnimatedSection>

                    {/* Submit Button */}
                    <AnimatedSection variant="stagger-item">
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full font-body font-semibold text-sm bg-primary text-charcoal py-3 rounded-xl shadow-sm transition-all duration-200 hover:bg-primary/80 flex items-center justify-center gap-2 mt-2 cursor-pointer"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </motion.button>
                    </AnimatedSection>
                  </AnimatedSection>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-10 px-6 flex flex-col items-center justify-center text-center bg-primary/10 border border-primary/20 rounded-[1.85rem]"
                >
                  <h4 className="font-display font-bold text-xl text-charcoal mb-3">
                    Opening Your Email Client...
                  </h4>
                  
                  <p className="font-body text-sm text-muted-grey leading-relaxed max-w-lg mb-6">
                    If your email app {"didn't"} open automatically, please copy the text below and email it directly to <strong className="text-charcoal">skillarc.org@gmail.com</strong>:
                  </p>

                  <div className="w-full text-left bg-white border border-charcoal/10 rounded-xl p-4 font-mono text-xs text-charcoal/90 overflow-x-auto whitespace-pre-wrap max-h-60 select-all">
                    <strong>Subject:</strong> [SkillARC] Contact Request - {purpose}<br/><br/>
                    Name: {name}<br/>
                    Email: {email}<br/>
                    Phone: {phone || "N/A"}<br/>
                    Purpose: {purpose}<br/><br/>
                    Message:<br/>
                    {message}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `Subject: [SkillARC] Contact Request - ${purpose}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\nPurpose: ${purpose}\n\nMessage:\n${message}`
                      );
                    }}
                    className="mt-6 font-body font-semibold text-xs bg-charcoal text-white hover:bg-charcoal/80 px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    Copy Message Details
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
