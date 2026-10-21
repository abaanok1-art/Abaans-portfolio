import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Clock, 
  MapPin, 
  Sparkles, 
  AlertCircle,
  HelpCircle,
  Check
} from "lucide-react";
import confetti from "canvas-confetti";
import { personalInfo, faqData } from "../data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Full Stack MERN Web App",
    budget: "$100 - $300",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Submitting directly to FormSubmit endpoint configured for Abaan's email
      const response = await fetch("https://formsubmit.co/ajax/abaanok1@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not provided",
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: "table",
        }),
      });

      if (response.ok) {
        // Trigger celebratory confetti
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });

        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent directly to Abaan Mubeen (abaanok1@gmail.com). You will receive a response within 1-2 hours.",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "Full Stack MERN Web App",
          budget: "$100 - $300",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (err) {
      // Fallback assistance
      setStatus({
        type: "error",
        message:
          "Form submission couldn't reach the email gateway right now. Please email directly at abaanok1@gmail.com or message via WhatsApp (+92 334 0004884).",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
            Let's Collaborate
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
            Get In Touch With Abaan
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Have a project to discuss, a question, or need a custom web application? Fill out the form below or connect directly through WhatsApp, phone, or Fiverr.
          </p>
        </div>

        {/* Main Grid: Contact Channels (Left) & Live Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-indigo-500/40 transition-colors shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Email Address</h3>
              <p className="text-xs text-slate-400 mb-3">
                Send your RFP, project brief, or questions directly to my inbox.
              </p>
              <a
                href={`mailto:${personalInfo.email}?subject=Project%20Inquiry%20for%20Abaan`}
                className="text-sm font-semibold text-indigo-400 hover:text-indigo-300 break-all flex items-center gap-1.5"
              >
                <span>{personalInfo.email}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-emerald-500/30 hover:border-emerald-500/50 transition-colors shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <button
                  onClick={() => handleCopy(personalInfo.phone, "phone")}
                  className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                  title="Copy phone to clipboard"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Phone & WhatsApp</h3>
              <p className="text-xs text-slate-400 mb-3">
                Fastest response for urgent projects, consultations, or voice calls.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Chat</span>
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call: {personalInfo.phone}</span>
                </a>
              </div>
            </div>

            {/* Fiverr Gig Order Card */}
            <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-colors shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  Fiverr Escrow Protected
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full font-bold">
                  Active Gig
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Hire Me on Fiverr</h3>
              <p className="text-xs text-slate-400 mb-4">
                Prefer the security of Fiverr escrow, dispute protection, and milestone tracking? Order directly through my gig.
              </p>
              <a
                href={personalInfo.fiverrGigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 transition-all inline-flex items-center justify-center gap-2 shadow-md"
              >
                <span>Go to Fiverr Gig</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Details Box */}
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-indigo-400" />
                <span>Typical Response Time: <strong className="text-white">Under 1 hour</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-indigo-400" />
                <span>Location: <strong className="text-white">Pakistan (GMT+5) • Available Globally</strong></span>
              </div>
            </div>

          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl relative">
              
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white">Send a Direct Message</h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Fill out this form and your message will land straight into Abaan's email inbox (<span className="text-indigo-400 font-medium">abaanok1@gmail.com</span>).
                </p>
              </div>

              {/* Status Alert */}
              {status.message && (
                <div
                  className={`p-4 rounded-2xl mb-6 text-sm flex items-start gap-3 ${
                    status.type === "success"
                      ? "bg-emerald-950/60 border border-emerald-500/40 text-emerald-200"
                      : "bg-red-950/60 border border-red-500/40 text-red-200"
                  }`}
                >
                  {status.type === "success" ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  )}
                  <div className="leading-relaxed">{status.message}</div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. client@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone & Service Required */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Phone or WhatsApp (Optional)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="e.g. +1 555 0192"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    >
                      <option value="Full Stack MERN Web App">Full Stack MERN Web App</option>
                      <option value="Responsive React Landing Page">Responsive React Landing Page</option>
                      <option value="Multi-Page Business Website">Multi-Page Business Website</option>
                      <option value="API Integration & Backend (Node/Express)">API Integration & Backend (Node/Express)</option>
                      <option value="Bug Fixing & Responsive Optimization">Bug Fixing & Responsive Optimization</option>
                      <option value="Other / Custom Work">Other / Custom Work</option>
                    </select>
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                  >
                    <option value="$40 - $100 (Starter / Single Page)">$40 - $100 (Starter / Single Page)</option>
                    <option value="$100 - $300 (Standard Multi-Page / React)">$100 - $300 (Standard Multi-Page / React)</option>
                    <option value="$300 - $600+ (Full Stack MERN Application)">$300 - $600+ (Full Stack MERN Application)</option>
                    <option value="Custom / Undecided">Custom / Undecided</option>
                  </select>
                </div>

                {/* Message Body */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Project Details & Requirements <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Briefly describe what you want to build, any target deadlines, features, or design references..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 transition-all shadow-xl shadow-indigo-600/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting Message to Abaan...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message to abaanok1@gmail.com</span>
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-500 pt-1">
                  🔒 Zero spam. Your contact details are stored securely and used solely to reply to your inquiry.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto pt-6 border-t border-slate-900">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white">Contact & Communication FAQs</h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Quick answers about timeline, messaging, and project kickoff.
            </p>
          </div>

          <div className="space-y-3">
            {faqData.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800 p-4 open:bg-slate-900 transition-colors"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm">
                  <span>{faq.question}</span>
                  <span className="text-indigo-400 text-base transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-xs text-slate-400 mt-2.5 leading-relaxed border-t border-slate-800/60 pt-2.5">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
