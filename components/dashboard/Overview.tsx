import { motion } from 'framer-motion';

const stats = [
  { label: 'Total Revenue', value: '$125,000', change: '+12.5%' },
  { label: 'Active Plants', value: '1,234', change: '+5.2%' },
  { label: 'Inventory Value', value: '$450,000', change: '+8.7%' },
  { label: 'Employees', value: '45', change: '+2' },
];

export default function Overview() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-primary mb-8">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-black border border-primary/20 rounded-lg p-6"
          >
            <h3 className="text-contrast text-sm mb-2">{stat.label}</h3>
            <div className="flex items-end justify-between">
              <span className="text-primary text-2xl font-bold">{stat.value}</span>
              <span className={`text-sm ${
                stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.change}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder for graphs - you'll want to add a proper charting library */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-black border border-primary/20 rounded-lg p-6 h-80">
          <h3 className="text-primary font-bold mb-4">Revenue Overview</h3>
          <div className="h-64 flex items-center justify-center text-contrast">
            [Revenue Graph Placeholder]
          </div>
        </div>
        
        <div className="bg-black border border-primary/20 rounded-lg p-6 h-80">
          <h3 className="text-primary font-bold mb-4">Cultivation Status</h3>
          <div className="h-64 flex items-center justify-center text-contrast">
            [Cultivation Graph Placeholder]
          </div>
        </div>
      </div>
    </div>
  );
}
