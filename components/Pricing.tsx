import { motion } from 'framer-motion';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: {
      monthly: 299,
      annual: 249
    },
    description: 'Perfect for small cultivators and dispensaries',
    features: [
      'Basic Cultivation Analytics',
      'Standard Integration (up to 3 tools)',
      'Basic Compliance Reporting',
      'Email Support',
      '1 Location',
      'Up to 5 Team Members'
    ]
  },
  {
    name: 'Professional',
    price: {
      monthly: 599,
      annual: 499
    },
    description: 'Ideal for growing operations and multi-location businesses',
    features: [
      'Advanced Cultivation AI',
      'Premium Integrations (up to 10 tools)',
      'Automated Compliance Reporting',
      'Priority Support',
      'Up to 3 Locations',
      'Up to 15 Team Members',
      'Market Analytics',
      'Advanced Security Features'
    ],
    popular: true
  },
  {
    name: 'Enterprise',
    price: {
      monthly: 1299,
      annual: 1099
    },
    description: 'Full-scale solution for large operations',
    features: [
      'Full AI Suite',
      'Unlimited Integrations',
      'Custom Compliance Solutions',
      '24/7 Dedicated Support',
      'Unlimited Locations',
      'Unlimited Team Members',
      'Advanced R&D Tools',
      'Custom Analytics',
      'API Access',
      'White-label Options'
    ]
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-primary text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-contrast text-xl mb-8">Choose the perfect plan for your business</p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-sm ${!isAnnual ? 'text-primary' : 'text-contrast'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-16 h-8 bg-primary/20 rounded-full p-1 transition-colors"
            >
              <motion.div 
                className="w-6 h-6 bg-primary rounded-full"
                animate={{ x: isAnnual ? 32 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-primary' : 'text-contrast'}`}>
              Annual (Save 20%)
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative bg-black border ${plan.popular ? 'border-primary' : 'border-primary/50'} 
                rounded-lg p-8 hover:border-primary transition-colors`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-black px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <h3 className="text-primary text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-contrast text-sm mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-primary text-4xl font-bold">
                  ${isAnnual ? plan.price.annual : plan.price.monthly}
                </span>
                <span className="text-contrast">/month</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg 
                      className="w-5 h-5 text-primary flex-shrink-0 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                    <span className="text-contrast">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-full font-semibold transition-colors
                  ${plan.popular 
                    ? 'bg-primary text-black hover:bg-primary/90' 
                    : 'border border-primary text-primary hover:bg-primary hover:text-black'
                  }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-contrast">
            Need a custom solution? {' '}
            <a href="#contact" className="text-primary hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
