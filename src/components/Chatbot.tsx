import { useState, useRef, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Calendar, Phone, RefreshCw, Sprout } from 'lucide-react';
import { ChatMessage } from '../types';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "Hello! 🌾 I am FarmsFriend AI, your Pennsylvania agriculture assistant. I can help recommend seeds, fertilizer schedules, animal feed, or equipment support. How's the weather on your acreage today?",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showPulsingBadge, setShowPulsingBadge] = useState(true);

  const listRef = useRef<HTMLDivElement>(null);

  // Automatically scroll chat to bottom when message arrives
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSendMessage = async (e: FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);
    setShowPulsingBadge(false);

    try {
      // Package conversation structure for Express Server API
      const bodyMessages = messages.concat(userMsg).map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: bodyMessages })
      });
      
      const data = await res.json();
      
      if (data.text) {
        setMessages(prev => [...prev, {
          id: Date.now().toString() + '-resp',
          role: 'assistant',
          content: data.text,
          timestamp: new Date()
        }]);
      } else {
        throw new Error("Invalid response format");
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, {
        id: Date.now().toString() + '-err',
        role: 'assistant',
        content: "I apologies, our supply lines are temporarily busy. Please contact our Pennsylvania advisors directly at 484-478-1719 for instant assistance! 🚜",
        timestamp: new Date()
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        content: "History cleared. How can I assist you with your farming needs today? 🌾",
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        
        {/* Pulsing Hint Badge above the button when closed */}
        {!isOpen && showPulsingBadge && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 2 }}
            className="absolute bottom-16 right-0 mb-3 bg-white p-3 py-2.5 rounded-xl shadow-2xl border border-brand-green-100 flex items-center space-x-2 w-52 pointer-events-none"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
            <span className="text-xxs text-gray-500 font-medium">Ask FarmsFriend AI a Question!</span>
          </motion.div>
        )}

        {/* Closed Chat Trigger Button */}
        {!isOpen && (
          <motion.button
            key="chat-trigger"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setIsOpen(true);
              setShowPulsingBadge(false);
            }}
            className="w-14 h-14 bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-full flex items-center justify-center shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-green-100 transition-all cursor-pointer relative"
            aria-label="Open Chatbot"
          >
            <MessageSquare className="w-6 h-6 shrink-0" />
            {/* Pulsing notification circle overlay */}
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-white animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-yellow-400 rounded-full border-2 border-white" />
          </motion.button>
        )}

        {/* Floating Chat Drawer Pane */}
        {isOpen && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.92 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
            className="w-80 sm:w-96 h-[460px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-brand-green-100 flex flex-col justify-between"
          >
            {/* Header */}
            <div className="bg-brand-green-700 px-4 py-3.5 text-white flex justify-between items-center relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-300/10 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 bg-white/10 rounded-lg">
                  <Sprout className="w-4 h-4 text-yellow-300 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-serif font-bold">FarmsFriend AI Advisor</h4>
                  <div className="flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-[10px] text-brand-green-100 font-medium">Pennsylvania Local Soil Base</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-1">
                <button
                  onClick={handleClearHistory}
                  title="Clear Chat History"
                  className="p-1.5 hover:bg-white/10 rounded-lg text-brand-green-100 hover:text-white transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg text-brand-green-100 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close Chat Window"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Message Pane */}
            <div
              ref={listRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-brand-green-50/20"
            >
              {messages.map((item) => {
                const isUser = item.role === 'user';
                return (
                  <div
                    key={item.id}
                    className={`flex items-start gap-2.5 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shadow-sm shadow-emerald-500/20 shrink-0">
                        PA
                      </div>
                    )}
                    <div className={`max-w-[75%] rounded-2xl p-3 text-xs leading-relaxed ${
                      isUser
                        ? 'bg-brand-green-600 text-white rounded-tr-none shadow-sm'
                        : 'bg-white text-gray-700 border border-brand-green-100/60 rounded-tl-none shadow-sm'
                    }`}>
                      {item.content}
                    </div>
                  </div>
                );
              })}

              {/* Loader Dot Indicator */}
              {isTyping && (
                <div className="flex items-center gap-2.5 justify-start">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-bold text-xs shrink-0 animate-bounce">
                    PA
                  </div>
                  <div className="bg-white border border-brand-green-100/60 rounded-2xl rounded-tl-none px-4 py-3 flex space-x-1 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions Footer Panel */}
            <div className="px-3 border-t border-gray-100 bg-white pt-2 text-[10px] text-gray-400 font-semibold flex items-center space-x-2">
              <span className="shrink-0 uppercase tracking-wide">Quick:</span>
              <button
                onClick={() => setInputMessage("Recommendation for Lancaster County PA cover crops")}
                className="bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-700 px-2 py-1 rounded border border-brand-green-100 cursor-pointer truncate"
              >
                Lancaster Soil
              </button>
              <button
                onClick={() => setInputMessage("How can I get a supply quote?")}
                className="bg-brand-green-50 hover:bg-brand-green-100 text-brand-green-700 px-2 py-1 rounded border border-brand-green-100 cursor-pointer truncate"
              >
                Inquiries
              </button>
            </div>

            {/* Form Input Frame */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white flex items-center gap-2 border-t border-gray-100">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about crops, fertilizers, lime, PA seeds..."
                className="flex-1 text-xs border border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand-green-600 focus:border-transparent rounded-lg px-3 py-2"
              />
              <button
                type="submit"
                disabled={!inputMessage.trim() || isTyping}
                className="p-2 bg-brand-green-600 hover:bg-brand-green-700 text-white rounded-lg disabled:opacity-40 select-none cursor-pointer"
                aria-label="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
