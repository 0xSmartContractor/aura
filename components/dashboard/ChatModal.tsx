import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ChatModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <AnimatePresence>
      {!isOpen ? (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-primary text-black p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        >
          <span className="text-2xl">💬</span>
        </motion.button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            height: isMinimized ? 'auto' : '500px',
          }}
          exit={{ opacity: 0, y: 20 }}
          className={`fixed bottom-4 right-4 w-80 bg-black border border-primary rounded-lg shadow-lg overflow-hidden`}
        >
          <div className="p-4 bg-primary text-black flex items-center justify-between">
            <span className="font-bold">Aura AI Assistant</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-black/10 p-1 rounded"
              >
                {isMinimized ? '↑' : '↓'}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-black/10 p-1 rounded"
              >
                ×
              </button>
            </div>
          </div>

          {!isMinimized && (
            <div className="flex flex-col h-[calc(500px-64px)]">
              <div className="flex-1 p-4 overflow-y-auto">
                {/* Chat messages will go here */}
                <div className="text-contrast">
                  How can I help you today?
                </div>
              </div>
              
              <div className="p-4 border-t border-primary/20">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 bg-black/50 text-contrast border border-primary/20 rounded-full px-4 py-2 focus:outline-none focus:border-primary"
                  />
                  <button className="bg-primary text-black p-2 rounded-full hover:bg-primary/90">
                    →
                  </button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
