import React from "react";
import { MessageSquare, ArrowRight, Eye, Glasses, Sparkles, CheckCircle, Sun, Wrench } from "lucide-react";
import { SERVICES_LIST, BUSINESS_INFO } from "../data/opticalData";

export const Services: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case "eye-testing":
        return <Eye className="w-5 h-5 text-[#0066cc]" />;
      case "prescription-glasses":
        return <Glasses className="w-5 h-5 text-[#0066cc]" />;
      case "blue-cut-lenses":
        return <Sparkles className="w-5 h-5 text-[#0066cc]" />;
      case "contact-lenses":
        return <CheckCircle className="w-5 h-5 text-[#0066cc]" />;
      case "polarized-sunglasses":
        return <Sun className="w-5 h-5 text-[#0066cc]" />;
      case "frame-repairs":
        return <Wrench className="w-5 h-5 text-[#0066cc]" />;
      default:
        return <Eye className="w-5 h-5 text-[#0066cc]" />;
    }
  };

  return (
    <section id="services" className="py-12 lg:py-16 bg-[#fbfbfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-[#0066cc]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">
              SERVICES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight max-w-3xl leading-tight text-balance">
            The services of a highly experienced and professional team of eye care specialists in Gummidipoondi
          </h2>
        </div>

        {/* 6 Service Boxes: 3 in a Row (2 Rows of 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-[#0066cc] transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Title */}
                <div className="w-10 h-10 rounded-lg bg-sky-50 flex items-center justify-center mb-4 group-hover:bg-[#0066cc] group-hover:text-white transition-colors">
                  <div className="group-hover:brightness-0 group-hover:invert transition-all">
                    {getIcon(service.id)}
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#0066cc] transition-colors">
                  {service.title}
                </h3>

                {/* 2 lines concise description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Action Link to WhatsApp */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/919382301946?text=${encodeURIComponent(
                    `Hi Sri Guna Opticals, I would like to inquire about your ${service.title} service.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0066cc] hover:text-[#0052a3] group/btn"
                >
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </a>

                <span className="text-[10px] text-slate-400 font-medium">Walk-in ready</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
