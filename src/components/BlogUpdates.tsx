import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { BLOG_POSTS, BlogItem } from "../data/opticalData";

export const BlogUpdates: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogItem | null>(null);

  return (
    <section id="updates" className="py-10 lg:py-14 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-3">
            <span className="w-10 h-0.5 bg-[#0066cc]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#0066cc]">
              BLOG UPDATES
            </span>
          </div>
        </div>

        {/* 2 Side-by-Side Cards with Rounded Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="group flex flex-col justify-between border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                {/* Blog Card Image with Rounded Corners */}
                <div className="aspect-[16/9] w-full bg-slate-100 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="p-6 sm:p-7 space-y-2.5">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0066cc] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              {/* Read More Button */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="px-4 py-2 rounded-lg border border-[#0066cc] text-[#0066cc] hover:bg-[#0066cc] hover:text-white text-xs font-bold transition-colors"
                >
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Blog Post Detail Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-7 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-4 bg-slate-100">
                <img
                  src={selectedPost.image}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {selectedPost.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                {selectedPost.summary}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                At Sri Guna Opticals in Ganapathi Theater Complex, Gummidipoondi, our optometrist provides computerized eye exams and helps you select anti-reflective, blue-cut or progressive lenses to restore optimal comfort.
              </p>

              <div className="flex items-center justify-between gap-3 pt-2 border-t border-slate-100">
                <a
                  href={`https://wa.me/919382301946?text=${encodeURIComponent(
                    `Hi Sri Guna Opticals, I read your article "${selectedPost.title}" and have questions regarding my vision.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask Optometrist on WhatsApp</span>
                </a>

                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
