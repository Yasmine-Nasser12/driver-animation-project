import { motion } from 'motion/react';
import { Navigation, Play, Radio } from 'lucide-react';

interface PrimaryActionProps {
  status: 'In Transit' | 'Assigned' | 'Waiting';
}

export function PrimaryAction({ status }: PrimaryActionProps) {
  const getActionConfig = () => {
    switch (status) {
      case 'In Transit':
        return {
          label: 'View Live Navigation',
          icon: Navigation,
          gradient: 'from-[#00d5be] to-[#00d3f2]',
        };
      case 'Assigned':
        return {
          label: 'Start Trip',
          icon: Play,
          gradient: 'from-[#00d5be] to-[#00bba7]',
        };
      case 'Waiting':
        return {
          label: 'Go Online',
          icon: Radio,
          gradient: 'from-[#00bba7] to-[#009689]',
        };
    }
  };

  const config = getActionConfig();
  const Icon = config.icon;

  return (
    <motion.button
      className={`relative w-full h-16 rounded-2xl bg-gradient-to-r ${config.gradient} shadow-lg shadow-[#00d5be]/25 overflow-hidden`}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
      />
      
      <div className="relative flex items-center justify-center gap-3 h-full">
        <Icon className="w-5 h-5 text-white" />
        <span className="text-white text-lg font-medium">{config.label}</span>
      </div>
    </motion.button>
  );
}
