import { motion } from 'motion/react';
import { Wallet, History, MessageCircle } from 'lucide-react';

const actions = [
  { icon: Wallet, label: 'Earnings', color: '#00d5be' },
  { icon: History, label: 'Trip History', color: '#00d3f2' },
  { icon: MessageCircle, label: 'Support', color: '#00bba7' },
];

export function SecondaryActions() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.6 }}
      className="flex justify-around items-center gap-2"
    >
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <motion.button
            key={action.label}
            className="flex flex-col items-center gap-2 py-3 px-4 rounded-xl hover:bg-[rgba(0,213,190,0.05)] transition-colors"
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
          >
            <div 
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ 
                backgroundColor: `${action.color}12`,
                borderColor: `${action.color}25`,
                borderWidth: '1px',
              }}
            >
              <Icon className="w-5 h-5" style={{ color: action.color }} />
            </div>
            <span className="text-[rgba(203,251,241,0.5)] text-xs">{action.label}</span>
          </motion.button>
        );
      })}
    </motion.div>
  );
}
