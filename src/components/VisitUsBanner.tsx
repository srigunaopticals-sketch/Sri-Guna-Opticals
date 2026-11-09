import React from "react";
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { BUSINESS_INFO } from "../data/opticalData";

export const VisitUsBanner: React.FC = () => {
  return (
    <section className="bg-[#0066cc] text-white py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Column: Visit us in Gummidipoondi */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Visit us in Gummidipoondi
            </h3>

            <div className="space-y-3 text-xs sm:text-sm text-sky-100">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="hover:underline font-semibold text-white"
                >
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white shrink-0" />
                <span>{BUSINESS_INFO.email}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Let's Get Started! */}
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Let's Get Started!
            </h3>

            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed max-w-lg">
              Ensuring regular eye care is crucial for maintaining good eye health. We invite you to visit our store in Ganapathi Theater Complex or contact us directly on WhatsApp to prioritize your vision needs.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={BUSINESS_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-white bg-transparent hover:bg-white hover:text-[#0066cc] text-white text-xs font-bold tracking-wide transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-[#0066cc] hover:bg-sky-50 text-xs font-bold tracking-wide transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
