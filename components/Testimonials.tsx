import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Aura AI has revolutionized how we manage our cultivation facility. The AI-driven insights are invaluable.",
    author: "Jane Smith",
    role: "Master Grower",
    company: "Green Horizons"
  },
  {
    quote: "The integration capabilities and automation features have saved us countless hours of manual work.",
    author: "Mike Johnson",
    role: "Operations Director",
    company: "Canopy Solutions"
  },
  {
    quote: "Their analytics platform has helped us make data-driven decisions that increased our yield by 40%.",
    author: "Sarah Williams",
    role: "CEO",
    company: "Pure Grow"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-primary text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-black border border-primary rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-contrast mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="text-primary font-bold">{testimonial.author}</p>
                <p className="text-contrast text-sm">{testimonial.role}</p>
                <p className="text-contrast text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
