import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ExternalLink, 
  Smartphone, 
  Star, 
  Code2, 
  MessageCircle, 
  Mail, 
  ShieldCheck, 
  Zap,
  Layers,
  Sparkles
} from "lucide-react";
import { personalInfo, projectsData, skillsData, testimonials } from "../data/portfolioData";
import ProjectModal from "../components/ProjectModal";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="pt-20 sm:pt-24 lg:pt-28 pb-16 overflow-x-hidden w-full">
      {/* Background radial gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[350px] sm:w-[600px] 2xl:w-[900px] h-[300px] sm:h-[450px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-4 sm:right-10 w-[250px] sm:w-[400px] 2xl:w-[600px] h-[250px] sm:h-[350px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-8 pb-14 sm:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 2xl:gap-14 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Hire & Remote Contracts</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-emerald-400">
                {personalInfo.name}
              </span>
              <br />
              <span className="text-xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-slate-300 font-semibold mt-2 block">
                Full Stack MERN Web Developer
              </span>
            </h1>

            {/* Subtitle / Bio summary */}
            <p className="text-sm sm:text-base lg:text-lg 2xl:text-xl text-slate-300 leading-relaxed max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0">
              I specialize in crafting high-performance, 100% responsive web applications, modern dashboards, and high-converting landing pages utilizing React, Node.js, Express, and MongoDB.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              <span className="px-2.5 sm:px-3 py-1 rounded-lg text-xs 2xl:text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                Responsive on All Screens
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg text-xs 2xl:text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Blazing Fast Performance
              </span>
              <span className="px-2.5 sm:px-3 py-1 rounded-lg text-xs 2xl:text-sm font-semibold bg-slate-900 border border-slate-800 text-slate-300 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Production MERN Architecture
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-3 sm:pt-4">
              <a
                href={personalInfo.fiverrGigUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full xs:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm 2xl:text-base font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-xl shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Hire Me on Fiverr</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                to="/contact"
                className="w-full xs:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm 2xl:text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/projects"
                className="w-full xs:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm 2xl:text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <span>View Portfolio</span>
              </Link>
            </div>

            {/* Direct quick contact links */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 text-xs 2xl:text-sm text-slate-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-indigo-400 flex items-center gap-1.5 transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span>{personalInfo.email}</span>
              </a>
              <span className="hidden xs:inline">•</span>
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 flex items-center gap-1.5 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{personalInfo.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="relative max-w-full">
              {/* Outer glowing halo ring */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-indigo-500 via-purple-500 to-emerald-500 rounded-full blur-xl opacity-40 animate-pulse-slow pointer-events-none" />
              
              {/* Profile Image container */}
              <div className="relative w-56 h-56 xs:w-64 xs:h-64 sm:w-80 sm:h-80 lg:w-84 lg:h-84 2xl:w-[420px] 2xl:h-[420px] rounded-full p-2 sm:p-2.5 bg-gradient-to-tr from-indigo-500 via-slate-800 to-emerald-400 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-950">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating tech badge 1: React */}
              <div className="absolute -top-1 -left-2 sm:-left-4 2xl:-left-6 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-slate-900/95 border border-indigo-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 transform -rotate-3 sm:-rotate-6 hover:rotate-0 transition-transform">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                  <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="block text-[11px] sm:text-xs font-bold text-white">React.js</span>
                  <span className="block text-[9px] sm:text-[10px] text-slate-400">Frontend UI</span>
                </div>
              </div>

              {/* Floating tech badge 2: MERN */}
              <div className="absolute -bottom-2 -right-2 sm:-right-4 2xl:-right-6 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-slate-900/95 border border-emerald-500/40 backdrop-blur-md shadow-xl flex items-center gap-2 transform rotate-3 sm:rotate-6 hover:rotate-0 transition-transform">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="block text-[11px] sm:text-xs font-bold text-white">Full Stack MERN</span>
                  <span className="block text-[9px] sm:text-[10px] text-emerald-400 font-medium">Node • Mongo • Express</span>
                </div>
              </div>

              {/* Floating experience badge */}
              <div className="absolute top-1/2 -right-3 sm:-right-8 2xl:-right-12 -translate-y-1/2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-slate-950/90 border border-slate-700/80 backdrop-blur-sm shadow-lg flex items-center gap-1.5 text-[10px] sm:text-xs text-slate-200">
                <span className="text-amber-400 font-bold">★ 100%</span>
                <span>Responsive</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 2xl:p-8 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors shadow-lg text-center"
            >
              <div className="text-2xl sm:text-4xl 2xl:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm 2xl:text-base font-medium text-slate-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Me / Core Strengths */}
      <section className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-2xl 2xl:max-w-4xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs 2xl:text-sm uppercase tracking-wider text-indigo-400 font-bold">
            Guaranteed Quality
          </span>
          <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-bold text-white mt-1">
            Why Work With Abaan?
          </h2>
          <p className="text-slate-400 text-xs sm:text-base 2xl:text-lg mt-2 leading-relaxed">
            Combining rigorous self-taught engineering mastery with modern best practices to deliver sites that load fast, convert visitors, and scale cleanly across monitors, laptops, and mobiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skillsData.strengths.map((strength, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 2xl:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/40 transition-all hover:-translate-y-1 group"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {idx === 0 && <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />}
                {idx === 1 && <Layers className="w-5 h-5 sm:w-6 sm:h-6" />}
                {idx === 2 && <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />}
                {idx === 3 && <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
              </div>
              <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-white mb-2">
                {strength.title}
              </h3>
              <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 leading-relaxed">
                {strength.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-3">
          <div>
            <span className="text-xs 2xl:text-sm uppercase tracking-wider text-indigo-400 font-bold">
              Portfolio Highlights
            </span>
            <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-bold text-white mt-1">
              Featured Projects
            </h2>
            <p className="text-slate-400 text-xs sm:text-base mt-1">
              A glimpse into web applications and responsive interfaces I have built.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm 2xl:text-base font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group flex flex-col shadow-lg"
            >
              <div className="relative h-44 sm:h-48 2xl:h-60 overflow-hidden">
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

              <div className="p-5 sm:p-6 2xl:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg 2xl:text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm 2xl:text-base text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs 2xl:text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors"
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
      <section className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                <Star className="w-3.5 h-3.5 fill-emerald-300 text-emerald-300" />
                <span>Verified Fiverr Gig Seller</span>
              </div>
              <h2 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-white">
                Need a High-Converting MERN Web App or Responsive Site?
              </h2>
              <p className="text-slate-300 text-xs sm:text-base 2xl:text-lg leading-relaxed max-w-2xl">
                Order with 100% buyer protection, escrow payment security, milestone updates, and prompt turnaround on Fiverr.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <a
                  href={personalInfo.fiverrGigUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 inline-flex items-center gap-2"
                >
                  <span>Order on Fiverr Now</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <Link
                  to="/services"
                  className="px-4 sm:px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700 transition-colors"
                >
                  Compare Packages
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center w-full">
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-950/80 border border-slate-800 text-center w-full max-w-sm">
                <span className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Starting At
                </span>
                <div className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-white my-1 sm:my-2">$100</div>
                <p className="text-xs text-emerald-400 font-medium mb-3 sm:mb-4">
                  Starter Website (3 Pages) • 4-Day Delivery
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
      <section className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs 2xl:text-sm uppercase tracking-wider text-indigo-400 font-bold">
            Endorsements
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mt-1">
            What Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed mb-5">
                  "{item.content}"
                </p>
              </div>
              <div className="pt-3.5 border-t border-slate-800/80">
                <div className="font-bold text-white text-xs sm:text-sm">{item.name}</div>
                <div className="text-[11px] sm:text-xs text-indigo-400">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="text-center max-w-3xl 2xl:max-w-5xl mx-auto p-6 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-b from-indigo-950/40 via-slate-900 to-slate-950 border border-indigo-500/30 shadow-2xl space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-4xl 2xl:text-5xl font-extrabold text-white">
            Have a project in mind? Let's bring it to life.
          </h2>
          <p className="text-slate-300 text-xs sm:text-base 2xl:text-lg max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed">
            I am currently taking on new projects. Message me on WhatsApp, shoot an email to <span className="text-indigo-300 font-medium break-all">{personalInfo.email}</span>, or book me directly on Fiverr.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/contact"
              className="w-full xs:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all text-center"
            >
              Open Contact Form
            </Link>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full xs:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 hover:bg-emerald-900/40 transition-all inline-flex items-center justify-center gap-2"
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
