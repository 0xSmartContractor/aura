import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center px-4 bg-[url('/hero-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative text-center max-w-4xl mx-auto">
        <motion.h1 
          className="text-primary text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transform Your Cannabis Business
        </motion.h1>
        <motion.p 
          className="text-contrast text-xl md:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AI-powered solutions for cultivation, analytics, and business management
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <button className="bg-primary text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all mr-4">
            Get Started
          </button>
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-black transition-all">
            Watch Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
