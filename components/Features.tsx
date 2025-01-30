import { motion } from 'framer-motion';

const features = [
  {
    title: 'Cultivation Intelligence',
    description: 'AI-powered environmental control systems with real-time monitoring.',
    icon: '🌱'
  },
  {
    title: 'Integration & Automation',
    description: 'Seamless integration with industry-standard software and IoT devices.',
    icon: '🔄'
  },
  {
    title: 'Advanced Analytics',
    description: 'Comprehensive market analysis and business intelligence tools.',
    icon: '📊'
  },
  {
    title: 'Security & Compliance',
    description: 'Automated compliance reporting and security management.',
    icon: '🔒'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-contrast text-xl">Everything you need to succeed in the cannabis industry</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-black border border-primary rounded-lg p-6 hover:bg-primary/5 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-primary text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-contrast">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
