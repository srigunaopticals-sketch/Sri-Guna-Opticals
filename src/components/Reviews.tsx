import React from "react";
import { Star, ExternalLink } from "lucide-react";
import { TESTIMONIALS, BUSINESS_INFO } from "../data/opticalData";

export const Reviews: React.FC = () => {
  return (
    <section id="testimonials" className="py-10 lg:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2.5">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-0.5 bg-[#0066cc]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">
              TESTIMONIAL
            </span>
            <span className="w-10 h-0.5 bg-[#0066cc]" />
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            What Our Customers Says About Us.
          </h2>
        </div>

        {/* 3 Tinted Testimonial Cards with Rounded Corners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-xl bg-[#f0f9f4] border border-[#d6f0e2] flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-3.5">
                {/* Giant Green Quotation Mark */}
                <div className="text-[#3bb258] text-4xl font-serif font-black leading-none select-none">
                  “
                </div>

                {/* Review Prose */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {t.review}
                </p>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-[#d6f0e2]/60">
                {/* 5 Green/Gold Stars */}
                <div className="flex items-center text-[#3bb258] gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#3bb258] text-[#3bb258]" />
                  ))}
                </div>

                <p className="text-xs font-bold text-slate-800">
                  - {t.name}
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link */}
        <div className="mt-8 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0066cc] hover:underline"
          >
            <span>Read more reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
