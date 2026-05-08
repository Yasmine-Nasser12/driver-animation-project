import { motion } from 'motion/react';
import { Inbox, Radio, ArrowLeft, RefreshCw, PowerOff } from 'lucide-react';

interface NoRequestsProps {
  onBackToHome: () => void;
  onRefresh?: () => void;
  onGoOffline?: () => void;
}

export function NoRequests({ onBackToHome, onRefresh, onGoOffline }: NoRequestsProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden flex items-center justify-center">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#00d5be] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#34c759] opacity-5 blur-[70px] rounded-full"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="px-5 w-full max-w-[375px] relative">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
        >
          {/* Empty State Icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Pulsing radio waves - outer */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00d5be]"
              animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            {/* Pulsing radio waves - middle */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#00d5be]"
              animate={{ scale: [1, 1.3], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            />
            
            {/* Main icon container */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[rgba(0,213,190,0.15)] to-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.3)] flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Inbox className="w-10 h-10 text-[#00d5be]" />
              </motion.div>
            </div>

            {/* Small radio indicator */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-7 h-7 bg-[rgba(52,199,89,0.2)] border-2 border-[#34c759] rounded-full flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Radio className="w-3.5 h-3.5 text-[#34c759]" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-white text-2xl font-semibold mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            No Requests Available
          </motion.h1>

          {/* Message */}
          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-base mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Stay online to receive new trips
          </motion.p>

          {/* Info Cards */}
          <div className="space-y-3 mb-8">
            <motion.div
              className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[rgba(52,199,89,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Radio className="w-4 h-4 text-[#34c759]" />
                </div>
                <div className="flex-1 text-left">
                  <p className="text-white text-sm font-medium mb-1">You're Online & Ready</p>
                  <p className="text-[rgba(203,251,241,0.6)] text-xs">
                    We'll notify you when new shipments become available in your area
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-[rgba(203,251,241,0.6)] text-sm">Current Zone</span>
                <span className="text-white text-sm font-medium">Downtown Area</span>
              </div>
            </motion.div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Refresh Button */}
            <motion.button
              onClick={onRefresh || onBackToHome}
              className="h-14 bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.3)] rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(0,213,190,0.2)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <RefreshCw className="w-4.5 h-4.5 text-[#00d5be]" />
              </motion.div>
              <span className="text-[#00d5be] text-base font-medium">Refresh</span>
            </motion.button>

            {/* Go Offline Button */}
            <motion.button
              onClick={onGoOffline || onBackToHome}
              className="h-14 bg-[rgba(142,142,147,0.15)] border border-[rgba(142,142,147,0.3)] rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(142,142,147,0.2)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <PowerOff className="w-4.5 h-4.5 text-[#8e8e93]" />
              <span className="text-[#8e8e93] text-base font-medium">Go Offline</span>
            </motion.button>
          </div>

          {/* Back to Home Button */}
          <motion.button
            onClick={onBackToHome}
            className="w-full h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.2)] relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.3)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <ArrowLeft className="w-5 h-5 text-white relative" />
            <span className="text-white text-base font-semibold relative">Back to Home</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
