import React from "react";
import { Phone, MessageSquare, MapPin, Clock } from "lucide-react";
import { BUSINESS_INFO, SERVICES_LIST } from "../data/opticalData";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e2229] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered White Logo (matching reference 1 & 2) */}
        <div className="flex justify-center pb-12 border-b border-slate-700/60">
          <a href="#hero" className="inline-block" aria-label="Sri Guna Opticals Home">
            <img
              src="/assets/aistudio/Sri_Guna_Opticals_Logo_db09216c.png"
              alt="Sri Guna Opticals"
              className="h-12 sm:h-14 w-auto object-contain"
              loading="lazy"
            />
          </a>
        </div>

        {/* 3 Columns (matching reference 1 & 2: Quick Links, Others/Services, Be the First to Know) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12 border-b border-slate-700/60 text-xs sm:text-sm">
          {/* Col 1: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#updates" className="hover:text-white transition-colors">
                  Blog Updates
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Services / Optical Care */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Optical Services
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              {SERVICES_LIST.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Store Info & Quick Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Store Information
            </h4>
            <div className="space-y-3 text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.landmark}, {BUSINESS_INFO.town}, {BUSINESS_INFO.districtState} - {BUSINESS_INFO.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{BUSINESS_INFO.daysOpen} · {BUSINESS_INFO.timings}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-white font-semibold">
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright notice (matching reference 1 & 2) */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© Copyright {currentYear} - Sri Guna Opticals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
