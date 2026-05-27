import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import QuoteModal from './components/QuoteModal';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleOpenQuote = () => {
    setSelectedCategory('');
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceName: string) => {
    setSelectedCategory(serviceName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 antialiased font-sans">
      {/* Dynamic Sticky Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Sections */}
      <main>
        {/* Hero Banner Area */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Local Story & Integrity */}
        <About />

        {/* Dynamic Products Grid */}
        <Products onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Regional Core Advantages */}
        <WhyChooseUs />

        {/* Sincere Farmer Reviews */}
        <Testimonials />

        {/* Form contact channels & directions */}
        <Contact />
      </main>

      {/* Corporate Pre-Footer Banner & Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Persistent Floating Features */}
      <Chatbot />
      <ScrollToTop />

      {/* Customized popup Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={selectedCategory}
      />
    </div>
  );
}
