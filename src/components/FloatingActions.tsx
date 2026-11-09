import React, { useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";
import { BUSINESS_INFO } from "../data/opticalData";

export const FloatingActions: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <>
      {/* Desktop Floating WhatsApp Bubble (bottom-right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
        {!tooltipDismissed && (
          <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-3 max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative">
            <button
              onClick={() => setTooltipDismissed(true)}
              className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Dismiss chat tip"
            >
              <X className="w-3 h-3" />
            </button>
            <p className="font-bold text-slate-900 pr-3">
              Need assistance or eye checkup?
            </p>
            <p className="text-slate-600 mt-0.5">
              Chat directly with Sri Guna Opticals on WhatsApp.
            </p>
          </div>
        )}

        <div className="flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="w-12 h-12 rounded-full bg-sky-700 hover:bg-sky-800 text-white shadow-lg flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-2 border-white"
            title="Call Sri Guna Opticals"
            aria-label="Call Store"
          >
            <Phone className="w-5 h-5" />
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 border-2 border-white relative group"
            title="Chat on WhatsApp"
            aria-label="WhatsApp Us"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white" />
          </a>
        </div>
      </div>

      {/* Mobile Persistent Floating Bottom Bar (Strictly <= 15% viewport cap, height ~50px) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-sky-700 active:bg-sky-800 text-white text-xs font-bold shadow-sm transition-transform active:scale-98"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Now</span>
          </a>

          <a
            href={BUSINESS_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg bg-emerald-600 active:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-transform active:scale-98"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
};
