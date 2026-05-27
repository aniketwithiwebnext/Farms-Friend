import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus({ type: 'error', message: 'Please complete all required fields.' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (data.success) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Could not connect to the server. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft circular decorations */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-earth-100 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-brand-green-600 font-bold text-xs uppercase tracking-wider block">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-brand-green-900 tracking-tight">
            Connect With Our Pennsylvania Team
          </h2>
          <p className="text-gray-500 font-light text-sm sm:text-base">
            Have questions about seed adaptabilities, organic compound regulations, or localized delivery? Fill out the form below or talk to us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Column 1: Coordinate Details (Col-5) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Quick Metadata Block */}
            <div className="bg-brand-green-50/70 p-6 rounded-2xl border border-brand-green-100/60 shadow-sm space-y-6">
              <h3 className="font-serif font-bold text-brand-green-900 text-lg border-b border-brand-green-100/80 pb-3">
                Corporate Coordinates
              </h3>

              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-white rounded-xl text-brand-green-600 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xxs font-semibold uppercase tracking-wider">Base Region</span>
                    <strong className="block text-brand-green-900 text-sm font-semibold">Pennsylvania (PA), United States</strong>
                    <span className="text-gray-500 text-xs">Serving all 67 counties including Lancaster, Berks, and York.</span>
                  </div>
                </div>

                {/* Hotlines */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-white rounded-xl text-brand-green-600 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xxs font-semibold uppercase tracking-wider">Phone Lines</span>
                    <a href="tel:484-478-1719" className="block text-brand-green-900 font-bold text-base hover:text-brand-green-600 transition-colors">
                      484-478-1719
                    </a>
                  </div>
                </div>

                {/* Emails */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-white rounded-xl text-brand-green-600 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-gray-400 text-xxs font-semibold uppercase tracking-wider">Email Addresses</span>
                    <a href="mailto:krishnakishore.t@gmail.com" className="block text-brand-green-900 hover:text-brand-green-700 text-sm font-medium transition-colors break-all">
                      krishnakishore.t@gmail.com
                    </a>
                    <a href="mailto:kthanneru@ksquaregroup.org" className="block text-brand-green-900 hover:text-brand-green-700 text-sm font-medium transition-colors break-all">
                      kthanneru@ksquaregroup.org
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2.5 bg-white rounded-xl text-brand-green-600 shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-gray-400 text-xxs font-semibold uppercase tracking-wider">Farming Supply Hours</span>
                    <p className="text-brand-green-900 text-xs font-semibold">Monday – Saturday: 6:00 AM – 6:00 PM</p>
                    <span className="text-gray-500 text-xxs font-light">Sundays: Reserved for family and rest pastures.</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Embedded maps placeholder card */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="bg-gray-100 p-2 text-center text-xxs text-gray-400 font-semibold uppercase tracking-wider">
                FarmsFriend Pennsylvania Operational Coverage Map
              </div>
              <div className="h-44 relative bg-brand-green-900/10 flex items-center justify-center">
                {/* Inline SVG Map of Pennsylvania to keep it lightweight, fast & professional */}
                <svg className="w-44 h-28 opacity-40 text-brand-green-700 fill-current" viewBox="0 0 100 60">
                  <path d="M5,10 H90 L95,45 L85,47 L5,45 Z" />
                  <circle cx="25" cy="18" r="3" className="text-yellow-500 animate-ping" />
                  <circle cx="25" cy="18" r="2" className="text-yellow-500" />
                  <circle cx="55" cy="22" r="1.5" className="text-brand-green-600" />
                  <circle cx="78" cy="30" r="1.5" className="text-brand-green-600" />
                </svg>
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900/60 to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-xs font-serif font-bold">Susquehanna Local Warehouses</span>
                  <span className="text-xxs text-brand-green-100">Supplying Harrisburg, Lancaster, York, & Allentown fields</span>
                </div>
              </div>
            </div>

          </div>

          {/* Column 2: Interactive Form (Col-7) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-155 border-gray-100 shadow-xl space-y-6"
            >
              <div className="border-b border-gray-100 pb-4">
                <h3 className="font-serif font-bold text-brand-green-900 text-xl">Send a Direct Message</h3>
                <p className="text-gray-400 text-xs mt-0.5">We respond to all email inbounds within 2 hours.</p>
              </div>

              {/* Status Notice */}
              <AnimatePresence>
                {status.type && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className={`p-4 rounded-xl text-sm border flex items-start space-x-3 ${
                      status.type === 'success'
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-100'
                        : 'bg-red-50 text-red-800 border-red-100'
                    }`}
                  >
                    {status.type === 'success' && <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-600" />}
                    <p>{status.message}</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                <div>
                  <label htmlFor="contact-name" className="block text-gray-700 text-xs font-semibold mb-1">
                    Full Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Samuel Stoltzfus"
                    className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-gray-700 text-xs font-semibold mb-1">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sam@pa-farms.com"
                      className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-gray-700 text-xs font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. 484-478-1719"
                      className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-gray-700 text-xs font-semibold mb-1">
                    Your Message / Inquiry Details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="How can FarmsFriend help you today? Please tell us about your land, crop varieties, animal counts, or equipment support requirements..."
                    className="w-full text-sm border border-gray-200 rounded-lg px-3- py-2.5 px-3 border-gray-200 focus:border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green-600 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-green-600 hover:bg-brand-green-700 active:bg-brand-green-900 border-none text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 transition-colors cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
