import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section id="demo" className="py-20 px-4 bg-black/90">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary text-4xl font-bold mb-6">See Aura AI in Action</h2>
            <p className="text-contrast text-lg mb-8">
              Watch how Aura AI transforms cannabis operations with intelligent automation and real-time insights.
            </p>
            <button className="bg-primary text-black px-6 py-3 rounded-full font-semibold hover:bg-opacity-90">
              Schedule a Demo
            </button>
          </motion.div>
          
          <motion.div
            className="relative aspect-video rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Replace with actual demo video/image */}
            <div className="bg-primary/20 w-full h-full flex items-center justify-center">
              <span className="text-primary text-6xl">▶️</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
