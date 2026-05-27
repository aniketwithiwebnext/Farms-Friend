import { motion } from 'motion/react';
import { Shovel, ShieldCheck, Milestone, Check } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Structural background details */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-green-50 rounded-full blur-3xl pointer-events-none opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-earth-100 rounded-full blur-3xl pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Image Grid Presentation (Col-5) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              
              {/* Primary large image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="col-span-2 rounded-2xl overflow-hidden shadow-lg h-60 relative"
              >
                <picture>
                  <img
                    src="/src/assets/images/susquehanna_valley_fields_1779912668768.png"
                    alt="A Pennsylvania farmer inspecting young sprouts in the morning light"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute bottom-3 left-3 bg-brand-green-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-white text-xs font-semibold">
                  Susquehanna Valley Field Work
                </div>
              </motion.div>

              {/* Secondary image left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg h-40 relative"
              >
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=400"
                    alt="Agronomy testing and seed analysis"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </motion.div>

              {/* Secondary image right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg h-40 relative"
              >
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&q=80&w=400"
                    alt="Livestock farming Pennsylvania"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </picture>
              </motion.div>

            </div>

            {/* Float Badge Experience */}
            <div className="absolute -bottom-5 -right-5 bg-brand-green-700 text-white p-5 rounded-2xl shadow-xl border border-brand-green-600 hidden sm:block max-w-xs animate-bounce" style={{ animationDuration: '4s' }}>
              <span className="block text-3xl font-serif font-bold text-yellow-300">100% Verified</span>
              <span className="text-brand-green-100 text-xs">Pennsylvania Registered Agricultural Supply Company</span>
            </div>
          </div>

          {/* Column 2: Text Narrative (Col-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-brand-green-600 font-bold text-xs uppercase tracking-wider block">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900 tracking-tight">
                Cultivating Trust and Elevating Yields Across Pennsylvania
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed font-sans font-light">
              At <strong className="font-semibold text-brand-green-900">FarmsFriend.com</strong>, we believe every Pennsylvania farm deserves the highest grade inputs, reliable pipelines, and practical expertise. Headquartered in Pennsylvania, we have spent years supporting rural fields, multi-generational Amish operations, modern commercial acreage, and home gardens alike.
            </p>

            <p className="text-gray-600 leading-relaxed font-sans font-light">
              We handle the logistics of sourcing premium seed stock and customized fertilizers so you can focus entirely on planting and harvesting. With us, you get a dedicated supporter who understands Lancaster clay, limestone valley nutrients, and unpredictable mid-Atlantic rain systems.
            </p>

            {/* Value cards breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              
              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-green-50 rounded-xl text-brand-green-600 flex-shrink-0">
                  <Shovel className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-green-900 text-sm">Deep Rooted Agronomy expertise</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Custom analysis tailored for PA regional soils and watersheds.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-brand-green-50 bg-green-50 rounded-xl text-brand-green-600 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-green-900 text-sm">Vetted Brands & Certified Seeds</h4>
                  <p className="text-gray-500 text-xs mt-0.5">99.8% germination blends with full laboratory certificate backing.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-green-50 rounded-xl text-brand-green-600 flex-shrink-0">
                  <Milestone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-green-900 text-sm">Strict Environmental Compliancy</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Strict compliance with Chesapeake Bay organic runoff metrics.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="p-2 bg-brand-green-50 rounded-xl text-brand-green-600 flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-brand-green-900 text-sm">Pennsylvania Fast Logistics</h4>
                  <p className="text-gray-500 text-xs mt-0.5">Localized storage locks in fast delivery directly to your acreage.</p>
                </div>
              </div>

            </div>

            {/* Short CTA quote trigger */}
            <div className="pt-4 border-t border-gray-100 flex items-center space-x-4">
              <picture>
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150"
                  alt="Benjamin Stoltzfus Happy Pennsylvania Farmer"
                  className="w-12 h-12 rounded-full object-cover border border-brand-green-200"
                  referrerPolicy="no-referrer"
                />
              </picture>
              <div>
                <p className="text-sm font-light italic text-gray-500">
                  "Pennsylvania agriculture demands speed. FarmsFriend has delivered on both quality and advice without a single delay."
                </p>
                <span className="block text-brand-green-700 text-xs font-semibold mt-1">— Benjamin Stoltzfus, Dairy Farmer, Lancaster PA</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
