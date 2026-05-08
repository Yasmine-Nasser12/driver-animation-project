import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

type TripStatus = 'none' | 'assigned' | 'in-transit';

interface SystemStateOverlayProps {
  isOnline: boolean;
  tripStatus: TripStatus;
  onToggleOnline: () => void;
  onChangeTripStatus: (status: TripStatus) => void;
}

export function SystemStateOverlay({
  isOnline,
  tripStatus,
  onToggleOnline,
  onChangeTripStatus,
}: SystemStateOverlayProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // إخفاء عند السكرول لأسفل، إظهار عند السكرول لأعلى
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div 
      className="fixed top-1.5 left-0 right-0 z-[9999] flex justify-center pointer-events-none"
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="pointer-events-auto">
        {/* Trip Status Pills Only */}
        <div className="flex items-center gap-0.5 px-1.5 py-0.5 bg-[rgba(0,0,0,0.35)] backdrop-blur-md rounded-full border border-[rgba(255,255,255,0.06)]">
          <button
            onClick={() => onChangeTripStatus('none')}
            className={`px-1.5 py-0.5 rounded-full text-[7px] font-medium transition-all ${
              tripStatus === 'none'
                ? 'bg-[rgba(0,213,190,0.2)] text-[#00d5be]'
                : 'text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.5)]'
            }`}
          >
            No Trip
          </button>
          <button
            onClick={() => onChangeTripStatus('assigned')}
            className={`px-1.5 py-0.5 rounded-full text-[7px] font-medium transition-all ${
              tripStatus === 'assigned'
                ? 'bg-[rgba(0,213,190,0.2)] text-[#00d5be]'
                : 'text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.5)]'
            }`}
          >
            Assigned
          </button>
          <button
            onClick={() => onChangeTripStatus('in-transit')}
            className={`px-1.5 py-0.5 rounded-full text-[7px] font-medium transition-all ${
              tripStatus === 'in-transit'
                ? 'bg-[rgba(0,213,190,0.2)] text-[#00d5be]'
                : 'text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.5)]'
            }`}
          >
            In Transit
          </button>
        </div>
      </div>
    </motion.div>
  );
}