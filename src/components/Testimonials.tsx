import { motion } from 'motion/react';
import { Star, MessageSquare } from 'lucide-react';
import { testimonialsData } from '../data';
import { TestimonialItem } from '../types';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-brand-green-50/50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-earth-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title container */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-green-600 font-bold text-xs uppercase tracking-wider block">Farmer Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900 tracking-tight">
            Direct Words From Real PA Farmlands
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base">
            We are proud to serve families, agricultural ventures, and food manufacturers across Pennsylvania. Read why our clients trust FarmsFriend with their crop life and fields.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((review: TestimonialItem, index: number) => {
            return (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-brand-green-100/50 shadow-md hover:shadow-xl transition-shadow relative flex flex-col justify-between"
              >
                {/* Quotation vector indicator */}
                <span className="absolute top-4 right-6 text-brand-green-100 font-serif text-6xl leading-none select-none">
                  “
                </span>

                <div className="space-y-6">
                  {/* Rating block */}
                  <div className="flex text-yellow-400">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-500 mr-0.5" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="text-gray-600 font-light text-sm italic leading-relaxed relative z-10">
                    "{review.quote}"
                  </p>
                </div>

                {/* Farmer identity details */}
                <div className="flex items-center space-x-3.5 pt-6 mt-6 border-t border-gray-100">
                  <picture>
                    <img
                      src={review.avatarUrl}
                      alt={review.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-brand-green-100 flex-shrink-0"
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  <div>
                    <h4 className="font-serif font-bold text-brand-green-900 text-sm">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-xxs font-semibold uppercase tracking-wider">
                      {review.role}
                    </p>
                    <span className="text-brand-green-600 text-xxs font-mono block mt-0.5">
                      {review.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
