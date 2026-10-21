import React from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  ExternalLink, 
  Star, 
  Clock, 
  RefreshCw, 
  ShieldCheck, 
  MessageCircle, 
  Layers,
  FileCode,
  Zap,
  Globe
} from "lucide-react";
import { servicesData, personalInfo, faqData } from "../data/portfolioData";

export default function Services() {
  return (
    <div className="pt-20 sm:pt-24 pb-14 sm:pb-20 w-full overflow-x-hidden">
      <div className="max-w-7xl 2xl:max-w-[1600px] 3xl:max-w-[2400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Compact & Balanced */}
        <div className="text-center max-w-3xl 2xl:max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-2.5">
            <Star className="w-3.5 h-3.5 fill-emerald-400" />
            <span>Fiverr Official Gig: @{personalInfo.fiverrUsername}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl 2xl:text-5xl font-extrabold text-white">
            Services & Pricing Packages
          </h1>
          <p className="text-slate-400 text-xs sm:text-base 2xl:text-lg mt-2 max-w-2xl mx-auto leading-relaxed">
            Directly synced with my active Fiverr gig. Order with 100% buyer protection, milestone tracking, and dedicated support.
          </p>
        </div>

        {/* Pricing Cards Grid - Responsive from Mobile to 4K */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-6 lg:gap-6 xl:gap-8 mb-14 sm:mb-16 items-stretch">
          {servicesData.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative rounded-3xl p-5 sm:p-6 xl:p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.recommended
                  ? "bg-slate-900/95 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/25 lg:-translate-y-1.5"
                  : "bg-slate-900/70 border border-slate-800 hover:border-slate-700 shadow-xl"
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                    {pkg.tier}
                  </span>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1 font-medium text-emerald-400">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration}
                    </span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                  {pkg.name}
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mb-4 leading-relaxed min-h-[38px]">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-slate-800">
                  <span className="text-3xl sm:text-4xl 2xl:text-5xl font-extrabold text-white tracking-tight">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">USD / gig</span>
                  <span className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-800 text-slate-300 border border-slate-700/60">
                    {pkg.pages}
                  </span>
                </div>

                {/* Quick Details Badges */}
                <div className="flex items-center gap-3 text-xs text-slate-300 mb-4 bg-slate-950/60 px-3 py-2 rounded-xl border border-slate-800/80">
                  <span className="flex items-center gap-1">
                    <RefreshCw className="w-3 h-3 text-indigo-400" />
                    <strong>{pkg.revisions}</strong>
                  </span>
                  <span>•</span>
                  <span className="text-emerald-400 font-medium">Speed Optimized</span>
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] uppercase tracking-wider font-bold text-slate-400 block mb-1">
                    What's Included:
                  </span>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs 2xl:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4 border-t border-slate-800">
                <a
                  href={pkg.fiverrLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md ${
                    pkg.recommended
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30"
                      : "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-600/20"
                  }`}
                >
                  <span>Order on Fiverr ({pkg.price})</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={personalInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Ask a Question on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantees Banner */}
        <div className="rounded-3xl p-6 sm:p-10 bg-slate-900/40 border border-slate-800 mb-14 sm:mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Every Order Includes My Professional Guarantee
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1.5">
              100% verified Fiverr seller standards applied to every delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-9 h-9 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-2.5">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Fiverr Buyer Protection</h4>
              <p className="text-[11px] sm:text-xs text-slate-400">Escrow security and revisions on all gig tiers.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2.5">
                <Zap className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Ultra-Fast Loading</h4>
              <p className="text-[11px] sm:text-xs text-slate-400">Speed optimization included across all 3 packages.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto mb-2.5">
                <Globe className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">All Screens Responsive</h4>
              <p className="text-[11px] sm:text-xs text-slate-400">Mobile, laptop, monitor, and TV tested.</p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mx-auto mb-2.5">
                <MessageCircle className="w-4 h-4" />
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-white mb-1">Direct Communication</h4>
              <p className="text-[11px] sm:text-xs text-slate-400">WhatsApp, email, and Fiverr messaging updates.</p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Pricing & Gig FAQs
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Common questions about placing an order on Fiverr.
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

        {/* Bottom CTA */}
        <div className="text-center space-y-3">
          <p className="text-slate-300 text-xs sm:text-sm">
            Need custom features or a personalized quote?
          </p>
          <a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/30"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Abaan on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
