import { motion } from 'motion/react';
import { Phone, FileText, CheckCircle2, Award, Zap } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-brand-green-900">
      {/* Immersive background decoration */}
      <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
        <picture>
          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=2000"
            alt="Beautiful green agriculture fields in Pennsylvania"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900 via-brand-green-900/45 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-brand-green-900 to-transparent" />
      </div>

      {/* Futuristic soft floating abstract shapes */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main hero grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and Primary CTAs (Col-7) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-yellow-400/15 border border-yellow-400/30 rounded-full px-4 py-1.5 text-yellow-300 font-semibold text-xs tracking-wider uppercase mx-auto lg:mx-0 shadow-lg"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              <span>PA’s Dedicated Farming Supply Network</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white leading-tight"
            >
              Your Trusted Partner in <br />
              <span className="text-yellow-300 bg-gradient-to-r from-yellow-300 to-emerald-400 bg-clip-text text-transparent">Farming & Agricultural Supply</span>
            </motion.h1>

            {/* Paragraph body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-200 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light"
            >
              Supplying high-yield seeds, custom-blended soil nutrients, state-of-the-art irrigation equipment, and expert agronomist advisory, custom-balanced specifically for Pennsylvania's soils and fields.
            </motion.p>

            {/* Quick trust metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 border-y border-white/10 py-4 max-w-lg mx-auto lg:mx-0 text-white font-serif"
            >
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-yellow-300">99.8%</span>
                <span className="text-gray-300 text-xs font-sans">Seed Germination Rate</span>
              </div>
              <div className="border-x border-white/10">
                <span className="block text-xl sm:text-2xl font-bold text-emerald-300">Same-Day</span>
                <span className="text-gray-300 text-xs font-sans">Localized Delivery</span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-yellow-300">20+ Yrs</span>
                <span className="text-gray-300 text-xs font-sans">PA Field Insights</span>
              </div>
            </motion.div>

            {/* CTA button cluster */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-brand-green-900 font-bold text-base px-8 py-4 rounded-full shadow-xl hover:shadow-yellow-400/10 transition-all flex items-center justify-center space-x-2.5 cursor-pointer hover:scale-105 duration-200"
              >
                <FileText className="w-5 h-5" />
                <span>Get a Quote</span>
              </button>
              <a
                href="tel:484-478-1719"
                className="w-full sm:w-auto bg-transparent hover:bg-white/10 text-white font-bold text-base px-8 py-4 rounded-full border border-white/30 hover:border-white transition-all flex items-center justify-center space-x-2.5"
              >
                <Phone className="w-5 h-5 fill-current text-emerald-400 animate-pulse" />
                <span>Call 484-478-1719</span>
              </a>
            </motion.div>
          </div>

          {/* Interactive Card Presentation (Col-5) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: 1 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-panel-dark rounded-3xl p-6 md:p-8 shadow-2xl space-y-6"
            >
              {/* Card Title */}
              <div className="flex items-center space-x-3.5 border-b border-white/10 pb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-serif font-bold text-white">FarmsFriend Quality Promise</h4>
                  <p className="text-emerald-300 text-xs">Direct from PA regional distribution warehouses</p>
                </div>
              </div>

              {/* Checkpoints */}
              <ul className="space-y-4">
                {[
                  { title: "Direct Silo/Barn Supply Lines", desc: "No middleman pricing bottlenecks." },
                  { title: "Adaptable Fertilizer Formulations", desc: "Eco-friendly, mid-Atlantic regulations compliant." },
                  { title: "Immediate Urgent Equipment Dispatch", desc: "Parts delivered to your site within hours." }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-white font-semibold text-sm">{item.title}</span>
                      <span className="text-gray-300 text-xs font-light">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Floating review summary */}
              <div className="bg-white/10 border border-white/15 rounded-2xl p-4 flex items-center space-x-3.5">
                <picture>
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
                    alt="Happy Farmer Clara Pennsylvania"
                    className="w-10 h-10 rounded-full object-cover border-2 border-yellow-300 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div>
                  <div className="flex text-yellow-300 text-xs mb-0.5">★ ★ ★ ★ ★</div>
                  <p className="text-gray-200 text-xs italic">
                    "FarmsFriend solved our dry pasture issues in Lancaster instantly!"
                  </p>
                  <span className="text-emerald-300 text-xxs font-mono uppercase tracking-wider block mt-1">— Clara M., PA Farmer</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Wave bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full text-white fill-current" viewBox="0 0 1440 74" fill="none">
          <path d="M0,32 C240,74.6 480,74.6 720,32 C960,-10.6 1200,-10.6 1440,32 L1440,74 L0,74 Z" />
        </svg>
      </div>
    </section>
  );
}
