import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FlowNavigatorProps {
  onNavigate: (screen: string) => void;
}

export function FlowNavigator({ onNavigate }: FlowNavigatorProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const screens = [
    { id: 'driver-trips-requests', label: 'Trips List' },
    { id: 'request-details', label: 'Req Details' },
    { id: 'request-accept-success', label: 'Accepted' },
    { id: 'requests-list-empty', label: 'List Empty' },
    { id: 'requests-list-loading', label: 'List Load' },
    { id: 'requests-list-error', label: 'List Error' },
    { id: 'incoming-request', label: 'Request' },
    { id: 'request-loading', label: 'Loading' },
    { id: 'request-error', label: 'Req Error' },
    { id: 'request-expired', label: 'Expired' },
    { id: 'no-requests', label: 'No Req.' },
    { id: 'going-to-pickup', label: 'To Pickup' },
    { id: 'arrived-at-pickup', label: 'Arrived' },
    { id: 'pickup-confirmed', label: 'Confirmed' },
    { id: 'in-transit-screen', label: 'Transit' },
    { id: 'delivered', label: 'Delivered' },
    { id: 'connection-error', label: 'Error' },
  ];

  return (
    <motion.div 
      className="fixed bottom-20 right-2 z-[9998] flex flex-col items-end gap-2"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* Toggle Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className="px-3 py-1.5 bg-[rgba(0,0,0,0.7)] backdrop-blur-md rounded-full border border-[rgba(0,213,190,0.3)] flex items-center gap-1.5 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-[#00d5be] text-[9px] font-semibold uppercase tracking-wide">
          Screens
        </span>
        {isExpanded ? (
          <ChevronDown className="w-3 h-3 text-[#00d5be]" />
        ) : (
          <ChevronUp className="w-3 h-3 text-[#00d5be]" />
        )}
      </motion.button>

      {/* Screen List */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="bg-[rgba(0,0,0,0.85)] backdrop-blur-md rounded-xl border border-[rgba(0,213,190,0.2)] p-2 shadow-xl max-h-[400px] overflow-y-auto"
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col gap-1">
              {screens.map((screen, index) => (
                <motion.button
                  key={screen.id}
                  onClick={() => {
                    onNavigate(screen.id);
                    setIsExpanded(false);
                  }}
                  className="px-2.5 py-1.5 rounded-lg text-left text-[9px] font-medium text-[rgba(203,251,241,0.8)] hover:bg-[rgba(0,213,190,0.15)] hover:text-[#00d5be] transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                  whileHover={{ x: 4 }}
                >
                  {screen.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
