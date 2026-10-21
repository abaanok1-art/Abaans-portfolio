import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Smartphone, 
  CheckCircle2, 
  Star, 
  Code2, 
  MessageCircle, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Zap,
  Globe,
  Terminal,
  Cpu
} from "lucide-react";
import { personalInfo, projectsData, skillsData, testimonials } from "../data/portfolioData";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="pt-24 pb-16 overflow-hidden">
      {/* Background radial gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-10 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire & Freelance Projects</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
                {personalInfo.name}
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-slate-300 font-semibold mt-2 block">
                Full Stack MERN Web Developer
              </span>
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I specialize in building lightning-fast, 100% mobile-responsive web applications, modern dashboards, and high-converting landing pages utilizing React, Node.js, Express, and MongoDB.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                Mobile-First Responsive
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Blazing Fast Performance
              </span>
              <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Production MERN Architecture
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={personalInfo.fiverrGigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Hire Me on Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/projects"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
              >
                <span>View Portfolio</span>
              </Link>
            </div>

            {/* Direct quick contact links */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{personalInfo.email}</span>
              </a>
              <span>•</span>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Outer glowing halo ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur-xl opacity-40 animate-pulse-slow" />
              
              {/* Profile Image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 bg-gradient-to-tr from-indigo-500 via-slate-800 to-emerald-400 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-950">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating tech badge 1: React */}
              <div className="absolute -top-2 -left-4 sm:-left-6 px-3.5 py-2 rounded-2xl bg-slate-900/95 border border-indigo-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 transform -rotate-6 hover:rotate-0 transition-transform">
                <div className="w-6 h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">React.js</span>
                  <span className="block text-[10px] text-slate-400">Frontend UI</span>
                </div>
              </div>

              {/* Floating tech badge 2: MERN */}
              <div className="absolute -bottom-3 -right-3 sm:-right-6 px-4 py-2 rounded-2xl bg-slate-900/95 border border-emerald-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 transform rotate-6 hover:rotate-0 transition-transform">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-white">Full Stack MERN</span>
                  <span className="block text-[10px] text-emerald-400 font-medium">Node • Mongo • Express</span>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 px-3 py-1.5 rounded-xl bg-slate-950/90 border border-slate-700/80 backdrop-blur-sm shadow-lg flex items-center gap-1.5 text-xs text-slate-200">
                <span className="text-amber-400 font-bold">★ 100%</span>
                <span>Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors shadow-lg text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Me / Core Strengths */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
            Guaranteed Quality
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Why Work With Abaan?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Combining rigorous self-taught engineering mastery with modern best practices to deliver sites that load fast, convert visitors, and scale cleanly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.strengths.map((strength, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {idx === 0 && <Smartphone className="w-6 h-6" />}
                {idx === 1 && <Layers className="w-6 h-6" />}
                {idx === 2 && <Code2 className="w-6 h-6" />}
                {idx === 3 && <MessageCircle className="w-6 h-6" />}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                {strength.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {strength.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
              Portfolio Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              A glimpse into web applications and responsive interfaces I have built.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group flex flex-col shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-slate-700">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Details & Specs →
                  </button>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label="Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fiverr Gig Promotion Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Star className="w-3.5 h-3.5 fill-emerald-300 text-emerald-300" />
                <span>Verified Fiverr Gig Seller</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Need a High-Converting MERN Web App or Responsive Site?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Order with 100% buyer protection, escrow payment security, milestone updates, and prompt turnaround on Fiverr. Or contact me directly for tailored contracts!
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={personalInfo.fiverrGigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 inline-flex items-center gap-2"
                >
                  <span>Order on Fiverr Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/services"
                  className="px-5 py-3 rounded-xl text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  Compare Packages
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center w-full max-w-sm">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Starting At
                </span>
                <div className="text-4xl font-extrabold text-white my-2">$40</div>
                <p className="text-xs text-emerald-400 font-medium mb-4">
                  Fast 2-Day Delivery • Unlimited Revisions
                </p>
                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 bg-slate-900 border border-slate-700 hover:text-white hover:border-slate-600 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Discuss Custom Quote</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
            Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-1">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed mb-6">
                  "{item.content}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-800/80">
                <div className="font-bold text-white text-sm">{item.name}</div>
                <div className="text-xs text-indigo-400">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Have a project in mind? Let's bring it to life.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            I am currently taking on new projects. Message me on WhatsApp, shoot an email to <span className="text-indigo-300 font-medium">{personalInfo.email}</span>, or book me directly on Fiverr.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all"
            >
              Open Contact Form
            </Link>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl text-sm font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-all inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
