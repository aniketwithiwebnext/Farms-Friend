import { Phone, Mail, MapPin, ExternalLink, ArrowRight } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
}

export default function Footer({ onOpenQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-green-900 text-white relative overflow-hidden">
      {/* Upper Pre-Footer Action Banner with Parallax-mood background */}
      <div className="relative py-16 px-4 bg-brand-green-700/60 border-b border-white/10 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <picture>
            <img
              src="https://images.unsplash.com/photo-1593113598332-cd59c5ad3f90?auto=format&fit=crop&q=80&w=1200"
              alt="Pennsylvania Golden Wheat Field"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </picture>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h3 className="font-serif font-extrabold text-3xl sm:text-4xl text-white">
            Ready to Grow Your Pennsylvania Harvest?
          </h3>
          <p className="text-gray-200 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Get in touch for custom high-volume soil formulations, certified weed-free silage seed blends, or localized tractor parts support. Let’s map your season’s strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-brand-green-900 font-bold px-7 py-3 rounded-full shadow-lg transition-transform hover:scale-105 duration-200 cursor-pointer flex items-center justify-center space-x-2"
            >
              <span>Request Custom Bulk Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:484-478-1719"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-7 py-3 rounded-full transition-colors flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4 fill-current text-emerald-400" />
              <span>Call 484-478-1719</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 font-sans font-light text-sm">
          
          {/* Col 1: Brand & Description (Col-4) */}
          <div className="lg:col-span-4 space-y-6">
            <a href="#home" className="flex items-center space-x-2 text-white font-serif font-extrabold text-2xl tracking-tight">
              <span className="bg-brand-green-600 text-white rounded-lg p-1.5 flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm0-6c0 .28-.22.5-.5.5s-.5-.22-.5-.5a.5.5 0 0 1 .5-.5h.5c.28 0 .5.22.5.5zM12 5.5l5 4.5h-3v3H10v-3H7l5-4.5z"/>
                </svg>
              </span>
              <span>Farms<span className="text-yellow-400 font-sans font-medium text-lg italic ml-0.5">Friend</span></span>
            </a>
            <p className="text-gray-300 leading-relaxed text-xs">
              Sourcing and distributing premium seeds, custom biological nutrients, heavy-duty irrigation systems, and professional agronomic advisors. Locally owned and operated proudly in Pennsylvania (PA).
            </p>
            <div className="pt-2 flex items-center space-x-4">
              {['Facebook', 'Twitter', 'LinkedIn', 'YouTube'].map((social) => (
                <span
                  key={social}
                  className="text-gray-400 hover:text-yellow-300 transition-colors text-xxs uppercase tracking-wider font-semibold cursor-pointer border-r border-white/10 last:border-none pr-4"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Quick navigation (Col-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-white text-base">Quick Connections</h4>
            <ul className="space-y-2 text-gray-300 text-xs text-brand-green-100">
              <li><a href="#home" className="hover:text-yellow-300 transition-colors">Home Base</a></li>
              <li><a href="#about" className="hover:text-yellow-300 transition-colors">Local Pennsylvania Roots</a></li>
              <li><a href="#products" className="hover:text-yellow-300 transition-colors">Farming Products & Supplies</a></li>
              <li><a href="#why-us" className="hover:text-yellow-300 transition-colors">Competitive Advantage points</a></li>
              <li><a href="#testimonials" className="hover:text-yellow-300 transition-colors">Farmer Reviews</a></li>
              <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Connect Coordinate channels</a></li>
            </ul>
          </div>

          {/* Col 3: Contact Coordinates (Col-5) */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-serif font-bold text-white text-base">Contact Information</h4>
            <div className="space-y-3.5 text-gray-300 text-xs">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-5 h-5 text-yellow-300 shrink-0 mt-0.5" />
                <span>Pennsylvania (PA), US (We service all 67 structural regional counties)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a href="tel:484-478-1719" className="hover:text-yellow-300 transition-colors font-semibold">
                  484-478-1719
                </a>
              </div>
              <div className="flex flex-col space-y-1.5 pl-7">
                <a href="mailto:krishnakishore.t@gmail.com" className="hover:text-yellow-300 transition-colors flex items-center space-x-1 break-all">
                  <Mail className="w-3.5 h-3.5 mr-1" />
                  <span>krishnakishore.t@gmail.com</span>
                </a>
                <a href="mailto:kthanneru@ksquaregroup.org" className="hover:text-yellow-300 transition-colors flex items-center space-x-1 break-all">
                  <Mail className="w-3.5 h-3.5 mr-1" />
                  <span>kthanneru@ksquaregroup.org</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Closing metadata & credit bars */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xxs text-gray-400">
          <div>
            &copy; {currentYear} FarmsFriend.com. All Rights Reserved. Pennsylvania Registered Agricultural supplier.
          </div>
          <div>
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-yellow-300 hover:text-yellow-400 font-semibold underline inline-flex items-center gap-0.5">
              iWebNext <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
