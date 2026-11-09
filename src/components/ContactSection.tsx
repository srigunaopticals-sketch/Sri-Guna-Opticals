import React from "react";
import { Phone, MessageSquare, MapPin, Clock, Navigation } from "lucide-react";
import { BUSINESS_INFO } from "../data/opticalData";

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-12 lg:py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-[#0066cc]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">
              CONTACT & LOCATION
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
            Conveniently Located at Ganapathi Theater Complex, Gummidipoondi
          </h2>
        </div>

        {/* 2-Column: Info Cards on Left, Full-Bleed Embedded Google Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-stretch">
          {/* Left Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            {/* Address Card with Rounded Corners */}
            <div className="p-6 rounded-2xl bg-[#f7f8fa] border border-slate-200 space-y-3 shadow-sm">
              <div className="flex items-center gap-2.5 text-slate-900 font-bold text-sm">
                <MapPin className="w-5 h-5 text-[#0066cc] shrink-0" />
                <span>Store Address</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {BUSINESS_INFO.address}
              </p>
              <div className="pt-2">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0066cc] hover:bg-[#0052a3] text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="p-5 rounded-xl border border-slate-200 bg-[#f7f8fa] hover:bg-white hover:border-[#0066cc] transition-all block shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-[#0066cc]" />
                  <span className="text-xs font-bold text-slate-900">Phone Call</span>
                </div>
                <p className="text-sm font-bold text-[#0066cc]">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
                <span className="text-[11px] text-slate-500 mt-1 block">Tap to call store</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-400 transition-all block shadow-sm"
              >
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-slate-900">WhatsApp Chat</span>
                </div>
                <p className="text-sm font-bold text-emerald-700">
                  {BUSINESS_INFO.phoneDisplay}
                </p>
                <span className="text-[11px] text-slate-500 mt-1 block">Instant message</span>
              </a>
            </div>

            {/* Timings */}
            <div className="p-5 rounded-xl border border-slate-200 bg-[#f7f8fa] flex items-center justify-between text-xs shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold">{BUSINESS_INFO.daysOpen}</span>
              </div>
              <span className="font-bold text-slate-900">{BUSINESS_INFO.timings}</span>
            </div>
          </div>

          {/* Right Column: Embedded Google Map (Clean, Full Bleed, Zero Overlaps) */}
          <div className="lg:col-span-7 min-h-[360px] sm:min-h-[420px] rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
            <iframe
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[360px] sm:min-h-[420px] border-0 block"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sri Guna Opticals Google Maps Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
