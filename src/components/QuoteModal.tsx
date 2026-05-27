import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check } from 'lucide-react';
import { QuoteRequest } from '../types';
import { servicesData } from '../data';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function QuoteModal({ isOpen, onClose, initialService = "" }: QuoteModalProps) {
  const [formData, setFormData] = useState<QuoteRequest>({
    name: '',
    email: '',
    phone: '',
    service: initialService,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setErrorMessage("Please fill in your Name, Email, and Phone number.");
      return;
    }
    
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setIsDone(true);
        setTimeout(() => {
          setIsDone(false);
          setFormData({ name: '', email: '', phone: '', service: '', message: '' });
          onClose();
        }, 3000);
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMessage("Could not connect to the server. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-brand-green-900/60 backdrop-blur-sm"
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl z-10 border border-brand-green-100"
          >
            {/* Header branding background */}
            <div className="bg-brand-green-700 px-6 py-5 text-white flex justify-between items-center relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <h3 className="text-xl font-serif font-semibold tracking-tight">Request a Custom PA Quote</h3>
                <p className="text-brand-green-100 text-xs mt-1">Get custom rates for Pennsylvania farming essentials</p>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-white/10 text-brand-green-50 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {isDone ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-green-50 flex items-center justify-center text-brand-green-600 mb-4 animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-brand-green-900">Quote Captured Successfully</h4>
                  <p className="text-gray-500 text-sm max-w-xs mt-2">
                    Our Pennsylvania agricultural advisors have received your request and will generate custom rates shortly. Speak soon!
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="bg-red-50 text-red-600 text-xs text-center border border-red-100 rounded-lg p-3">
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="modal-name">
                      Full Name *
                    </label>
                    <input
                      id="modal-name"
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
                      <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="modal-email">
                        Email Address *
                      </label>
                      <input
                        id="modal-email"
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
                      <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="modal-phone">
                        Phone Number *
                      </label>
                      <input
                        id="modal-phone"
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
                    <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="modal-service">
                      Requested Farming Category
                    </label>
                    <select
                      id="modal-service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all"
                    >
                      <option value="">-- General Supplies / Consulting Inquiry --</option>
                      {servicesData.map(s => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-xs font-semibold mb-1" htmlFor="modal-message">
                      Acreage & Supply Description (Optional)
                    </label>
                    <textarea
                      id="modal-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your soil, crops, size of land, or specific brands you are seeking..."
                      className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand-green-600 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  <div className="flex justify-end space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm px-4 py-2 bg-white rounded-lg transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-brand-green-600 hover:bg-brand-green-700 active:bg-brand-green-900 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Request"
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
