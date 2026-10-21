import React from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Star, 
  Clock, 
  RefreshCw, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight,
  HelpCircle,
  Zap,
  Globe
} from "lucide-react";
import { servicesData, personalInfo, faqData } from "../data/portfolioData";

export default function Services() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-3">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Official Fiverr Verified Gig Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-1">
            Services & Pricing Packages
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Transparent, fixed-price packages tailored for your web development needs. Order with 100% buyer protection through Fiverr or work with me on a direct contract.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 items-stretch">
          {servicesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                pkg.recommended
                  ? "bg-slate-900/90 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/20 lg:-translate-y-2"
                  : "bg-slate-900/60 border border-slate-800 hover:border-slate-700 shadow-xl"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                    {pkg.badge}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-slate-500" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-2">{pkg.name}</h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-slate-800">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">USD / project</span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-300 block mb-2">
                    What's Included:
                  </span>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-6 border-t border-slate-800">
                <a
                  href={pkg.fiverrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.recommended
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20"
                  }`}
                >
                  <span>Order on Fiverr</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  to="/contact"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 text-center block transition-colors"
                >
                  Request Custom Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-slate-900/40 border border-slate-800 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-white">
              Every Order Includes My Professional Guarantee
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              No shortcuts. When you work with Abaan Mubeen, you receive high-standard development.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">100% Satisfaction</h4>
              <p className="text-xs text-slate-400">Unlimited revisions until the final output meets your vision.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Ultra-Fast Loading</h4>
              <p className="text-xs text-slate-400">Optimized bundle size, image compression, and high Lighthouse score.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Cross-Platform Responsive</h4>
              <p className="text-xs text-slate-400">Tested and verified across mobile, tablet, laptop, and 4K desktop.</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white mb-1">Direct Communication</h4>
              <p className="text-xs text-slate-400">Direct WhatsApp, phone, and email access for seamless updates.</p>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-slate-400 text-sm mt-2">
              Everything you need to know about placing an order or starting a contract.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl bg-slate-900/60 border border-slate-800 p-5 open:bg-slate-900 transition-colors"
              >
                <summary className="font-semibold text-white cursor-pointer list-none flex items-center justify-between text-sm sm:text-base">
                  <span>{faq.question}</span>
                  <span className="text-indigo-400 text-lg transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed border-t border-slate-800/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <p className="text-slate-300 text-sm">
            Need something custom not covered in the packages above?
          </p>
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Abaan on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
