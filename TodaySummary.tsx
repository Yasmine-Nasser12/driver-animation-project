import { motion } from 'motion/react';
import { CheckCircle2, DollarSign, Clock } from 'lucide-react';

interface TodayData {
  tripsCompleted: number;
  earnings: number;
  onlineTime: string;
}

export function TodaySummary({ data }: { data: TodayData }) {
  const items = [
    {
      icon: CheckCircle2,
      label: 'Trips Completed',
      value: data.tripsCompleted.toString(),
      color: '#00d5be',
    },
    {
      icon: DollarSign,
      label: 'Earnings',
      value: `$${data.earnings.toFixed(2)}`,
      color: '#00d3f2',
    },
    {
      icon: Clock,
      label: 'Online Time',
      value: data.onlineTime,
      color: '#00bba7',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="space-y-3"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 py-4"
          >
            <div 
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ 
                backgroundColor: `${item.color}15`,
                borderColor: `${item.color}30`,
                borderWidth: '1px',
              }}
            >
              <Icon className="w-5 h-5" style={{ color: item.color }} />
            </div>
            
            <div className="flex-1 min-w-0">
              <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">{item.label}</p>
              <p className="text-white text-xl font-medium">{item.value}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
