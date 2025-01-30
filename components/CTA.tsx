import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-black text-4xl font-bold mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ready to Transform Your Cannabis Business?
        </motion.h2>
        <motion.p 
          className="text-black/80 text-xl mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Join the leading cannabis businesses already using Aura AI
        </motion.p>
        <motion.button
          className="bg-black text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
}
