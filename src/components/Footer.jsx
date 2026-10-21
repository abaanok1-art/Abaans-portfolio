import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Heart, 
  ArrowUpRight, 
  MapPin, 
  Code,
  CheckCircle2
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 relative overflow-hidden">
      {/* Glow orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-indigo-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500 shadow-md"
              />
              <div>
                <h3 className="text-white font-bold text-lg">{personalInfo.name}</h3>
                <p className="text-xs text-indigo-400 font-medium">Full Stack MERN Developer</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Passionate 32-year-old web developer crafting responsive, high-performance web applications and landing pages that drive business growth.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Available for Freelance & Remote Work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  About Abaan
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  Tech Stack & Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  Featured Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  Services & Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  Contact & Hire
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact info */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500/40 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="break-all">{personalInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500/40 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{personalInfo.phone} ({personalInfo.formattedPhone})</span>
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 group-hover:border-emerald-500/50 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span>WhatsApp Chat</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-xs text-slate-500 pt-1">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>

          {/* Fiverr Gig Highlight */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">
              Fiverr Verified
            </h4>
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">
                  Active Gig
                </span>
                <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">
                  5.0 ★
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-snug mb-3">
                Order customized MERN stack web applications and responsive sites with complete buyer protection.
              </p>
              <a
                href={personalInfo.fiverrGigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-md shadow-emerald-600/30"
              >
                <span>View My Fiverr Gig</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-indigo-400" />
              Built with React & Tailwind CSS
            </span>
            <span>•</span>
            <span className="text-slate-400">100% Responsive Design</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
