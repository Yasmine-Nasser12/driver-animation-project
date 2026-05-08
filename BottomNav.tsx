import { Home, Truck, DollarSign, Bell, User } from 'lucide-react';
import { motion } from 'motion/react';

interface BottomNavProps {
  activeTab: 'home' | 'trips' | 'earnings' | 'alerts' | 'profile';
  onNavigate?: (tab: 'home' | 'trips' | 'earnings' | 'alerts' | 'profile') => void;
}

const navItems = [
  { id: 'home' as const, label: 'Home', icon: Home },
  { id: 'trips' as const, label: 'Trips', icon: Truck },
  { id: 'earnings' as const, label: 'Earnings', icon: DollarSign },
  { id: 'alerts' as const, label: 'Alerts', icon: Bell },
  { id: 'profile' as const, label: 'Profile', icon: User },
];

export function BottomNav({ activeTab, onNavigate }: BottomNavProps) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 bg-[#0a1628] border-t border-[rgba(0,213,190,0.2)]"
      style={{
        boxShadow: `
          0 -1px 0 0 rgba(0, 213, 190, 0.15),
          0 -2px 8px 0 rgba(0, 213, 190, 0.08),
          0 -4px 16px 0 rgba(0, 213, 190, 0.04),
          0 -1px 24px 0 rgba(0, 213, 190, 0.06)
        `
      }}
    >
      <div className="max-w-[375px] mx-auto">
        <div className="flex items-center justify-around h-16 px-2 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onNavigate?.(item.id)}
                className="flex flex-col items-center justify-center gap-1 py-2 px-3 min-w-[60px] relative"
              >
                {/* Traveling curved stroke indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeStroke"
                    className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[50px] h-[3px]"
                    style={{
                      background: 'linear-gradient(180deg, rgba(0,213,190,0.7) 0%, rgba(0,213,190,0.4) 60%, transparent 100%)',
                      boxShadow: `
                        0 0 12px rgba(0,213,190,0.4),
                        0 2px 16px rgba(0,213,190,0.2),
                        0 4px 24px rgba(0,213,190,0.1)
                      `,
                      filter: 'blur(0.5px)',
                      borderRadius: '0 0 50% 50%',
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 28,
                      mass: 0.6
                    }}
                  />
                )}

                {/* Icon */}
                <Icon 
                  className={`w-5 h-5 relative z-10 transition-all duration-[220ms] ease-in-out ${
                    isActive ? 'text-[#00d5be]' : 'text-[rgba(203,251,241,0.5)]'
                  }`}
                  style={{
                    opacity: isActive ? 1 : 0.6,
                  }}
                />

                {/* Label */}
                <span 
                  className={`text-[10px] font-medium relative z-10 transition-all duration-[220ms] ease-in-out ${
                    isActive ? 'text-[#00d5be]' : 'text-[rgba(203,251,241,0.5)]'
                  }`}
                  style={{
                    opacity: isActive ? 1 : 0.6,
                  }}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}