import { motion } from 'motion/react';

type DriverState = 'active' | 'today' | 'history';

interface StateNavigatorProps {
  currentState: DriverState;
  onStateChange: (state: DriverState) => void;
}

const states = [
  { id: 'active' as const, label: 'Active Trip' },
  { id: 'today' as const, label: 'Today' },
  { id: 'history' as const, label: 'History' },
];

export function StateNavigator({ currentState, onStateChange }: StateNavigatorProps) {
  const currentIndex = states.findIndex(s => s.id === currentState);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="relative bg-[rgba(10,22,40,0.6)] backdrop-blur-sm border border-[rgba(0,213,190,0.15)] rounded-2xl p-1.5">
        {/* Animated indicator */}
        <motion.div
          className="absolute top-1.5 h-[calc(100%-12px)] bg-gradient-to-br from-[#00d5be] to-[#00bba7] rounded-xl"
          animate={{
            left: `${(currentIndex * 100) / 3 + 1.5}%`,
            width: `${100 / 3 - 3}%`,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />

        {/* State buttons */}
        <div className="relative flex">
          {states.map((state) => (
            <button
              key={state.id}
              onClick={() => onStateChange(state.id)}
              className="flex-1 py-3 px-4 text-center relative z-10 transition-colors"
            >
              <motion.span
                className={`text-sm font-medium transition-colors`}
                animate={{
                  color: currentState === state.id ? '#ffffff' : 'rgba(203,251,241,0.5)',
                }}
              >
                {state.label}
              </motion.span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
