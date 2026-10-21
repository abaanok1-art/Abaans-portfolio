import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Layout, 
  Server, 
  Database, 
  Wrench, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ExternalLink,
  Code2,
  Cpu
} from "lucide-react";
import { skillsData, personalInfo } from "../data/portfolioData";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = skillsData.categories;
  const filteredCategories =
    activeCategory === "all"
      ? categories
      : categories.filter((cat) => cat.id === activeCategory);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case "Layout":
        return <Layout className="w-5 h-5 text-indigo-400" />;
      case "Server":
        return <Server className="w-5 h-5 text-emerald-400" />;
      case "Database":
        return <Database className="w-5 h-5 text-amber-400" />;
      default:
        return <Wrench className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-indigo-400 font-bold">
            Technical Proficiency
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2">
            Skills & Tech Stack
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            A comprehensive breakdown of the modern technologies, frameworks, and tools I use to engineer robust full-stack web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === "all"
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all shadow-xl space-y-6"
            >
              <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
                <div className="p-3 rounded-2xl bg-slate-800/80 border border-slate-700">
                  {getCategoryIcon(category.icon)}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">{category.title}</h2>
                  <p className="text-xs text-slate-400 mt-0.5">{category.description}</p>
                </div>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-semibold text-slate-200">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-slate-400 hidden sm:inline-block">
                          {skill.exp}
                        </span>
                        <span className="text-indigo-400 font-mono font-bold">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                    {/* Progress Track */}
                    <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-emerald-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths & Quality Standards */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/40 border border-slate-800 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              Core Competencies & Engineering Principles
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Beyond syntax, here is what guides my day-to-day web development work:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Mobile-First Fluid Layouts
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Utilizing Tailwind CSS breakpoints, flexible grid systems, and viewport units to make sure no content clips or breaks on screens from 320px to 4K.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Scalable State Architecture
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Proper separation of component local state, URL parameters with React Router, and context providers for clean unidirectional data flow.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                RESTful API Design & Error Safety
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Predictable status codes, input sanitization, Express error handling middleware, and graceful fallback states for UI loaders and alerts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Optimized Database Queries
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Indexed schemas, efficient lean projections, and Mongoose population structures designed to minimize server memory and speed up latency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                SEO & Accessibility Best Practices
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Semantic HTML elements, proper ARIA attributes, meta tags, and structured heading hierarchies that search engines and screen readers favor.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="font-bold text-white mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Rapid Debugging & Troubleshooting
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Experienced with Chrome DevTools, Network analyzers, Postman API runners, and Git branch workflows to isolate and eliminate bugs swiftly.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-slate-300 text-sm">
            Ready to apply these skills to your next product or business website?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personalInfo.fiverrGigUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30 inline-flex items-center gap-2"
            >
              <span>Order on Fiverr</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
