import React from "react";
import { MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data/opticalData";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 lg:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Accent Line & Headline */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <span className="w-10 h-0.5 bg-[#0066cc]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">
                ABOUT US
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
              A reliable and comprehensive optical centre in Gummidipoondi
            </h2>
          </div>

          {/* Right Column: 2 Parallel Paragraphs + Button */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-xs sm:text-sm text-slate-600 leading-relaxed border-l-0 md:border-l md:border-slate-200 md:pl-8">
              <div>
                <p>
                  Having good vision is crucial to how we perceive the world and how it perceives us. Whether it's in our personal or professional lives, having clear and sharp eyesight, coupled with the right eyewear, can make a significant difference. That's why having access to a reliable and comprehensive optical centre...
                </p>
              </div>

              <div>
                <p>
                  ...who can partner with you in maintaining optimal eye health, is essential. Regular and consistent computerized eye exams are a necessity, and having a local and convenient full-service optical centre at Ganapathi Theater Complex can help ensure that your vision is always at its best.
                </p>
              </div>
            </div>

            <div className="md:pl-8">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-bold tracking-wide transition-all shadow-sm active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
