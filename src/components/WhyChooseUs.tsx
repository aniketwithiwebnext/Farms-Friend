import { motion } from 'motion/react';
import { MapPin, Award, PhoneCall, TrendingDown, Zap, Heart } from 'lucide-react';
import { benefitsData } from '../data';
import { BenefitItem } from '../types';

// Render Icon Helper
const renderIcon = (iconName: string) => {
  const props = { className: "w-6 h-6 text-brand-green-600" };
  switch (iconName) {
    case 'MapPin': return <MapPin {...props} />;
    case 'Award': return <Award {...props} />;
    case 'PhoneCall': return <PhoneCall {...props} />;
    case 'TrendingDown': return <TrendingDown {...props} />;
    case 'Zap': return <Zap {...props} />;
    default: return <Heart {...props} />;
  }
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract circles decoration */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-brand-green-50 rounded-full blur-3xl pointer-events-none opacity-40" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-earth-100 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title container */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-green-600 font-bold text-xs uppercase tracking-wider block">Why FarmsFriend</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900 tracking-tight">
            Designed By Local Growers, For Local Growers
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base">
            We don't believe in generic catalogs. We deliver real agronomic advice, heavy-duty supplies, and reliable speed so Pennsylvania harvests stay healthy and high.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit: BenefitItem, index: number) => {
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="bg-brand-green-50/40 p-6 rounded-2xl border border-brand-green-100/40 hover:border-brand-green-600/30 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Floating Circular Icon Base */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-brand-green-100/80 shadow-sm flex items-center justify-center">
                    {renderIcon(benefit.iconName)}
                  </div>

                  {/* Benefit details */}
                  <div className="space-y-2">
                    <h3 className="font-serif font-bold text-brand-green-900 text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom design line */}
                <div className="h-1 w-12 bg-emerald-400 rounded-full mt-6 opacity-60" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
