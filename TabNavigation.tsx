import { motion } from 'motion/react';

type TabType = 'active' | 'today' | 'history';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const tabs = [
  { id: 'active' as const, label: 'Active Trip' },
  { id: 'today' as const, label: 'Today' },
  { id: 'history' as const, label: 'History' },
];

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="flex gap-2 bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-1">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className="flex-1 relative py-2 rounded-lg transition-colors"
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-br from-[#00d5be] to-[#00bba7] rounded-lg"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <span 
            className={`relative z-10 text-sm font-medium transition-colors ${
              activeTab === tab.id ? 'text-white' : 'text-[rgba(203,251,241,0.6)]'
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
}
