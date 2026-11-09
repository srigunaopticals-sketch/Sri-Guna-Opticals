import React, { useState } from "react";
import { Phone, MessageSquare, Bell, Menu, X, MapPin } from "lucide-react";
import { BUSINESS_INFO } from "../data/opticalData";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT US", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "GALLERY", href: "#gallery" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "UPDATES", href: "#updates" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-slate-200">
      {/* Top Header Row (matching reference 1 & 2: left announcement, center logo, right phone & button) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between border-b border-slate-100">
        {/* Left: Promotional / Location Notice */}
        <div className="hidden lg:flex items-center gap-2 text-xs text-slate-600">
          <Bell className="w-3.5 h-3.5 text-sky-600 fill-sky-100 shrink-0" />
          <span>Complimentary computerized vision check with every frame</span>
        </div>

        {/* Center: Centered Brand Logo */}
        <div className="flex-1 lg:flex-initial flex justify-start lg:justify-center">
          <a href="#hero" className="inline-block group" aria-label="Sri Guna Opticals Home">
            <img
              src="/assets/aistudio/Sri_Guna_Opticals_Logo_black.png"
              alt="Sri Guna Opticals"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>
        </div>

        {/* Right: Phone Number & Primary Contact Action */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="hidden sm:flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-sky-700 transition-colors"
          >
            <Phone className="w-4 h-4 text-sky-600" />
            <span>{BUSINESS_INFO.phoneDisplay}</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-semibold tracking-wide transition-all shadow-sm active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Us</span>
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Second Row: Centered Navigation Bar (matching reference 1 & 2) */}
      <nav className="hidden lg:block bg-white py-2.5">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-9 text-[13px] font-semibold tracking-wider text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#0066cc] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-0.5 after:bg-[#0066cc] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2.5 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-sky-50 hover:text-[#0066cc] rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-md bg-slate-100 text-slate-800 text-xs font-bold"
            >
              <Phone className="w-4 h-4 text-[#0066cc]" />
              <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
