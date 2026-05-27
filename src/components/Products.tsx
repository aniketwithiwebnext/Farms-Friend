import { useState } from 'react';
import { motion } from 'motion/react';
import { Sprout, Leaf, Wrench, Droplets, Shield, BarChart3, ChevronRight, Check } from 'lucide-react';
import { servicesData } from '../data';
import { ServiceItem } from '../types';

interface ProductsProps {
  onOpenQuoteWithService: (serviceName: string) => void;
}

// Icon mapper helper
const renderIcon = (iconName: string) => {
  const props = { className: "w-6 h-6 text-brand-green-600" };
  switch (iconName) {
    case 'Sprout': return <Sprout {...props} />;
    case 'Leaf': return <Leaf {...props} />;
    case 'Wrench': return <Wrench {...props} />;
    case 'Droplets': return <Droplets {...props} />;
    case 'BarChart3': return <BarChart3 {...props} />;
    default: return <Shield {...props} />;
  }
};

export default function Products({ onOpenQuoteWithService }: ProductsProps) {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  return (
    <section id="products" className="py-24 bg-brand-green-50/50 relative overflow-hidden">
      {/* Background vectors */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-green-100 rounded-full blur-3xl pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header container */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-green-600 font-bold text-xs uppercase tracking-wider block">Farming Solutions</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-brand-green-900 tracking-tight">
            High-Performance Supplies For Serious PA Farms
          </h2>
          <p className="text-gray-600 font-light text-sm sm:text-base">
            From Lancaster County dairy pastures to large grain acreages in central Pennsylvania, we source and distribute certified items to keep you planting, irrigating, and growing.
          </p>
        </div>

        {/* Dynamic Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((item: ServiceItem, index: number) => {
            const isExpanded = activeTab === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden border border-brand-green-100/60 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                {/* Product Image Backdrop */}
                <div className="h-52 relative overflow-hidden group">
                  <picture>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900/80 via-transparent to-transparent opacity-80" />
                  
                  {/* Category icon float badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-brand-green-100">
                    {renderIcon(item.iconName)}
                  </div>

                  <div className="absolute bottom-4 left-4 text-white font-serif font-bold text-lg">
                    {item.title}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm font-light leading-relaxed">
                      {item.description}
                    </p>

                    {/* Learn More Expandable Pane */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs text-gray-500 bg-brand-green-50 rounded-lg p-3 mt-3 border border-brand-green-100 space-y-2"
                      >
                        <p className="font-light">{item.longDescription}</p>
                        <ul className="space-y-1 text-brand-green-700 font-semibold">
                          <li className="flex items-center"><Check className="w-3 h-3 mr-1" /> Laboratory Assay Certified</li>
                          <li className="flex items-center"><Check className="w-3 h-3 mr-1" /> Ready for Immediate Delivery</li>
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  {/* Actions Area */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <button
                      onClick={() => setActiveTab(isExpanded ? null : item.id)}
                      className="text-brand-green-600 hover:text-brand-green-700 text-xs font-semibold flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{isExpanded ? "Hide Details" : "Learn More"}</span>
                      <ChevronRight className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>

                    <button
                      onClick={() => onOpenQuoteWithService(item.title)}
                      className="bg-brand-green-600 hover:bg-brand-green-700 active:bg-brand-green-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow transition-colors cursor-pointer"
                    >
                      Request Quote
                    </button>
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
