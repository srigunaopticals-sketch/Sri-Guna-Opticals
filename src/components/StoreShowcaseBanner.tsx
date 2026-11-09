import React from "react";
import { MapPin } from "lucide-react";

export const StoreShowcaseBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Storefront Image - Natural full height with zero top cropping */}
        <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg bg-slate-900 border border-slate-200/80 group">
          <img
            src="/assets/aistudio/file_000000005de08208875d8b741c37f159_e552ad97.png"
            alt="Sri Guna Opticals Storefront at Ganapathi Theater Complex, Gummidipoondi - 25 Years In Service"
            className="w-full h-auto block object-contain object-top transition-transform duration-700 group-hover:scale-[1.01]"
            loading="lazy"
            referrerPolicy="no-referrer"
          />

          {/* Subtle gradient overlay at bottom for location caption readability */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Bottom Location & Trust Indicator */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-7 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-semibold drop-shadow">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Sri Guna Opticals · Ganapathi Theater Complex, Gummidipoondi</span>
            </div>
            <span className="hidden sm:inline-block text-[11px] font-bold bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded shadow">
              25 Years In Service
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
