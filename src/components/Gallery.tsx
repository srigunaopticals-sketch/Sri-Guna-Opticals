import React, { useState } from "react";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY_ITEMS } from "../data/opticalData";

export const Gallery: React.FC = () => {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
  };

  const nextPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const prevPhoto = () => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex(
        (activePhotoIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section id="gallery" className="py-12 lg:py-16 bg-[#fbfbfc] border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-[#0066cc]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">
              GALLERY
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight text-balance">
            A Glimpse Inside Sri Guna Opticals
          </h2>
        </div>

        {/* 4-Item Balanced Gallery Grid with Rounded Corners on all images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-md aspect-[4/3] bg-slate-100 cursor-pointer transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />

              <div className="absolute inset-0 p-4 flex flex-col justify-between text-white">
                <div className="self-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="p-1.5 rounded-full bg-white/20 backdrop-blur-sm inline-flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-white mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal with Rounded Corners */}
        {activePhotoIndex !== null && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {GALLERY_ITEMS.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            <div className="max-w-3xl w-full max-h-[85vh] flex flex-col items-center">
              <div className="rounded-2xl overflow-hidden shadow-2xl max-h-[65vh] bg-black border border-white/10">
                <img
                  src={GALLERY_ITEMS[activePhotoIndex].image}
                  alt={GALLERY_ITEMS[activePhotoIndex].title}
                  className="w-full h-full object-contain max-h-[65vh]"
                />
              </div>

              <div className="mt-4 text-center text-white">
                <h4 className="text-base font-bold">
                  {GALLERY_ITEMS[activePhotoIndex].title}
                </h4>
                <p className="text-xs text-slate-300 mt-1">
                  {GALLERY_ITEMS[activePhotoIndex].subtitle}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
