import React from "react";
import { Link } from "react-router-dom";
import { 
  User, 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Mail, 
  Phone, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Compass, 
  Layers, 
  Terminal,
  Clock,
  Heart
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function About() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Planning",
      desc: "Understanding business goals, target audience, UI expectations, and project architecture to choose the ideal technical stack.",
    },
    {
      num: "02",
      title: "Clean MERN Development",
      desc: "Writing modular, scalable React components paired with secure Node/Express REST APIs and optimized MongoDB database models.",
    },
    {
      num: "03",
      title: "Responsive & Performance Polish",
      desc: "Exhaustive testing across iPhones, Androids, tablets, and high-res desktops to guarantee fluid responsiveness and sub-second load times.",
    },
    {
      num: "04",
      title: "Deployment & Seamless Handover",
      desc: "Setting up production hosting on Vercel/Netlify/VPS, domain wiring, and providing complete source code with post-launch support.",
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
            Get To Know Me
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
            About Abaan Mubeen
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Full Stack MERN Developer, problem solver, and web craftsman passionate about building responsive, modern digital experiences.
          </p>
        </div>

        {/* Profile Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Image & Quick Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                <img
                  src={personalInfo.avatarUrl}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover max-h-[460px] mx-auto"
                />
                <div className="p-6 bg-slate-950/90 border-t border-slate-800">
                  <h3 className="text-xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-sm text-indigo-400 font-medium">{personalInfo.title}</p>
                </div>
              </div>
            </div>

            {/* Quick Personal Attributes Card */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3 text-sm">
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-400" />
                  Age:
                </span>
                <span className="text-white font-semibold">{personalInfo.age} Years Old</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-indigo-400" />
                  Education:
                </span>
                <span className="text-white font-semibold">Matriculation • Self-Taught</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  Location:
                </span>
                <span className="text-white font-semibold">Pakistan (Remote Globally)</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-slate-800">
                <span className="text-slate-400 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-400" />
                  Availability:
                </span>
                <span className="text-emerald-400 font-semibold">Open for Freelance & Contract</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-slate-400 flex items-center gap-2">
                  <Award className="w-4 h-4 text-indigo-400" />
                  Primary Stack:
                </span>
                <span className="text-indigo-300 font-semibold">MongoDB, Express, React, Node</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-5 leading-relaxed">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <Sparkles className="w-5 h-5 text-indigo-400" />
                My Journey & Passion
              </h2>
              <p>
                My name is <strong className="text-white">Abaan Mubeen</strong>. At 32, my journey in web development is driven by a deep, genuine fascination with how lines of code translate into functional, interactive tools that help businesses and people achieve their goals.
              </p>
              <p>
                My formal academic foundation began with my <strong className="text-indigo-300">Matriculation</strong> studies. While many rely solely on traditional university classrooms, my pathway has been defined by <strong className="text-emerald-300">rigorous, disciplined, self-taught software engineering</strong>. 
              </p>
              <p>
                Being self-taught has taught me how to read official documentation voraciously, solve difficult bugs independently, adapt instantly to rapid JavaScript ecosystem shifts, and build real-world production projects from scratch.
              </p>
              <p>
                Today, I specialize primarily in the <strong className="text-white">MERN Stack (MongoDB, Express.js, React.js, Node.js)</strong>. I take pride in building full-stack applications with modular components, secure RESTful endpoints, and responsive CSS architectures that feel effortless on mobile phones and desktop computers alike.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Pixel Perfection</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every margin, font scale, breakpoint, and interactive hover effect is tuned for a smooth visual experience.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Reliable Communication</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fast response times via WhatsApp, phone, email, and Fiverr messaging with frequent progress updates.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Clean Architecture</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Code written with clean component separation, reusable utilities, and scalable folder organization.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-colors">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Performance Focused</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Optimized assets, minimal bundle sizes, and Lighthouse scores targeting 90+ for SEO and user retention.
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={personalInfo.fiverrGigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 inline-flex items-center gap-2"
              >
                <span>Hire on Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
              >
                Contact Me Directly
              </Link>
            </div>
          </div>
        </div>

        {/* Development Workflow / Process */}
        <div className="pt-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
              How I Work
            </span>
            <h2 className="text-3xl font-bold text-white mt-1">
              My 4-Step Engineering Workflow
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              A structured, transparent development approach to ensure on-time delivery with zero surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all relative overflow-hidden"
              >
                <div className="text-3xl font-extrabold text-indigo-500/30 mb-3 font-mono">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
