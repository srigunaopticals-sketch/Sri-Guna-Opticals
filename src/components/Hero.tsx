import React from "react";
import { Phone, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data/opticalData";

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative bg-[#f5f6f8] overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] text-balance">
              We help you see<br />
              the beauty in life.
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
              A reliable and comprehensive optical centre in Gummidipoondi, who can partner with you in maintaining optimal eye health and clear vision, is essential.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Right Hero Image (with rounded corners as requested) */}
          <div className="lg:col-span-6 h-72 sm:h-96 lg:h-[420px] relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 bg-slate-200">
            <img
              src="/src/assets/images/hero_optometry_exam_1793878137974.jpg"
              alt="Experienced optometrist examining patient at Sri Guna Opticals"
              className="w-full h-full object-cover object-center"
              loading="eager"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
