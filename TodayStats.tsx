import { motion } from 'motion/react';

interface TodayStatsProps {
  stats: {
    tripsCompleted: number;
    earnings: number;
    onlineTime: string;
    milesCompleted: number;
  };
}

export function TodayStats({ stats }: TodayStatsProps) {
  const items = [
    { label: 'Trips', value: stats.tripsCompleted.toString(), icon: '🚛' },
    { label: 'Earnings', value: `$${stats.earnings.toFixed(2)}`, icon: '💰' },
    { label: 'Online', value: stats.onlineTime, icon: '⏱️' },
    { label: 'Miles', value: stats.milesCompleted.toString(), icon: '📍' },
  ];

  return (
    <div className="grid grid-cols-2 gap-3">
      {items.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.05, duration: 0.3 }}
          className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[rgba(203,251,241,0.6)] text-xs">{item.label}</span>
            <span className="text-lg">{item.icon}</span>
          </div>
          <p className="text-white text-xl font-semibold">{item.value}</p>
        </motion.div>
      ))}
    </div>
  );
}
