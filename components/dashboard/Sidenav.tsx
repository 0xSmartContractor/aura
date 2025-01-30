import { useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { id: 'overview', label: 'Overview', icon: '📊' },
  { id: 'cultivation', label: 'Cultivation', icon: '🌱' },
  { id: 'inventory', label: 'Inventory', icon: '📦' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'employees', label: 'Employees', icon: '👥' },
  { id: 'compliance', label: 'Compliance', icon: '📋' },
  { id: 'security', label: 'Security', icon: '🔒' },
  { id: 'settings', label: 'Settings', icon: '⚙️' },
];

export default function Sidenav({ activeTab, setActiveTab }: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div 
      className={`h-screen bg-black border-r border-primary/20 transition-all duration-300 ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
      initial={false}
    >
      <div className="p-4 border-b border-primary/20 flex items-center justify-between">
        <span className={`text-primary font-bold ${isCollapsed ? 'hidden' : 'block'}`}>
          Aura AI Admin
        </span>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-primary p-2 rounded-full hover:bg-primary/10"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>

      <nav className="p-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center p-3 rounded-lg mb-1 transition-colors ${
              activeTab === item.id
                ? 'bg-primary text-black'
                : 'text-contrast hover:bg-primary/10'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && (
              <span className="ml-3">{item.label}</span>
            )}
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
