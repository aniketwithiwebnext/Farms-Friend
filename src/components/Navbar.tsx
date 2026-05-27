import { useState, useEffect } from 'react';
import { Menu, X, Phone, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Find active section
      const sections = ['home', 'about', 'products', 'why-us', 'testimonials', 'contact'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Home', link: '#home', id: 'home' },
    { title: 'About Us', link: '#about', id: 'about' },
    { title: 'Products', link: '#products', id: 'products' },
    { title: 'Why Choose Us', link: '#why-us', id: 'why-us' },
    { title: 'Testimonials', link: '#testimonials', id: 'testimonials' },
    { title: 'Contact', link: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? 'glass-panel shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center space-x-2 text-brand-green-700 font-serif font-extrabold text-2xl tracking-tight">
              <span className="bg-brand-green-600 text-white rounded-lg p-1.5 flex items-center justify-center">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-4c0-.28.22-.5.5-.5s.5.22.5.5v4zm0-6c0 .28-.22.5-.5.5s-.5-.22-.5-.5a.5.5 0 0 1 .5-.5h.5c.28 0 .5.22.5.5zM12 5.5l5 4.5h-3v3H10v-3H7l5-4.5z"/>
                </svg>
              </span>
              <span>Farms<span className="text-brand-earth-600 font-sans font-medium text-lg italic ml-0.5">Friend</span></span>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    activeSection === item.id
                      ? 'text-brand-green-700 bg-brand-green-50'
                      : 'text-gray-600 hover:text-brand-green-600 hover:bg-gray-50'
                  }`}
                >
                  {item.title}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:484-478-1719"
                className="flex items-center space-x-2 text-brand-green-700 hover:text-brand-green-600 font-bold text-sm bg-brand-green-50 hover:bg-brand-green-100 rounded-full px-4 py-2 transition-all border border-brand-green-100"
              >
                <Phone className="w-4 h-4 fill-current animate-pulse text-brand-green-600" />
                <span>484-478-1719</span>
              </a>
              <button
                onClick={onOpenQuote}
                className="bg-brand-green-600 hover:bg-brand-green-700 active:bg-brand-green-900 text-white font-semibold text-sm rounded-full px-5 py-2.5 shadow-md hover:shadow-lg transition-all flex items-center space-x-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Get a Quote</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href="tel:484-478-1719"
                className="p-2 bg-brand-green-50 text-brand-green-700 rounded-full border border-brand-green-100 hover:bg-brand-green-100 md:hidden flex items-center"
                aria-label="Call Company"
              >
                <Phone className="w-4 h-4 text-brand-green-600" />
              </a>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-brand-green-600 hover:bg-gray-100 focus:outline-none transition-colors"
                aria-label="Toggle Mobile Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu, show/hide based on menu state. */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-100 overflow-hidden bg-white shadow-xl rounded-b-2xl"
            >
              <div className="px-2 pt-2 pb-4 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-all ${
                      activeSection === item.id
                        ? 'text-brand-green-700 bg-brand-green-50 font-semibold'
                        : 'text-gray-600 hover:text-brand-green-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.title}
                  </a>
                ))}
                
                <div className="border-t border-gray-100 pt-4 pb-2 px-3 space-y-3">
                  <a
                    href="tel:484-478-1719"
                    className="flex items-center justify-center space-x-2 text-brand-green-700 font-bold bg-brand-green-50 rounded-xl py-3 border border-brand-green-100 hover:bg-brand-green-100"
                  >
                    <Phone className="w-4 h-4 animate-pulse" />
                    <span>Call 484-478-1719</span>
                  </a>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onOpenQuote();
                    }}
                    className="w-full bg-brand-green-600 hover:bg-brand-green-700 text-white font-semibold py-3 rounded-xl shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Custom Quote</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
