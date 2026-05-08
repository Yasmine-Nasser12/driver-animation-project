import { motion } from 'motion/react';
import { CheckCircle, MapPin, Navigation, ArrowRight } from 'lucide-react';

interface RequestAcceptSuccessProps {
  onGoToPickup: () => void;
}

const acceptedRequest = {
  id: 'REQ-4522',
  pickupLocation: 'Cairo Distribution Hub',
  dropoffLocation: 'Alexandria Port Terminal',
  offeredPrice: '240',
};

export function RequestAcceptSuccess({ onGoToPickup }: RequestAcceptSuccessProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden flex items-center justify-center">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#34c759] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#00d5be] opacity-5 blur-[70px] rounded-full"
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
          {/* Confetti particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ['#34c759', '#00d5be', '#F59E0B', '#FBBF24'][i % 4],
                left: `${20 + (i * 5)}%`,
                top: '20%',
              }}
              initial={{ opacity: 0, y: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 1, 0],
                y: [0, -40, -80, -120],
                x: [0, (i % 2 ? 20 : -20), (i % 2 ? 40 : -40)],
                scale: [0, 1, 1, 0.5],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 2,
                delay: i * 0.1,
                ease: "easeOut"
              }}
            />
          ))}

          {/* Success Icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-6 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 10 }}
          >
            {/* Multiple pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#34c759]"
              animate={{
                scale: [1, 1.6, 1.6],
                opacity: [0.4, 0, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-[#34c759]"
              animate={{
                scale: [1, 1.6, 1.6],
                opacity: [0.4, 0, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-[#34c759]"
              animate={{
                scale: [1, 1.6, 1.6],
                opacity: [0.4, 0, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            />

            {/* Main icon */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#34c759] to-[#30b0c7] flex items-center justify-center shadow-2xl shadow-[rgba(52,199,89,0.5)] relative overflow-hidden">
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                initial={{ x: -200, opacity: 0 }}
                animate={{ x: 200, opacity: [0, 0.3, 0] }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />

              <motion.div
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-12 h-12 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Success Message */}
          <motion.h1
            className="text-white text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Request Accepted!
          </motion.h1>

          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-base mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            You can now head to the pickup location
          </motion.p>

          {/* Request Summary Card */}
          <motion.div
            className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(52,199,89,0.3)] rounded-2xl p-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">Request ID</span>
              <span className="text-white text-sm font-mono">{acceptedRequest.id}</span>
            </div>

            <div className="h-px bg-[rgba(52,199,89,0.2)] mb-3" />

            {/* Route summary */}
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-[#34c759]" />
              <span className="text-white text-sm">{acceptedRequest.pickupLocation}</span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="text-white text-sm">{acceptedRequest.dropoffLocation}</span>
            </div>

            <div className="h-px bg-[rgba(52,199,89,0.2)] mb-3" />

            {/* Earnings */}
            <div className="bg-gradient-to-r from-[rgba(245,158,11,0.15)] to-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.3)] rounded-lg p-3">
              <div className="flex items-center justify-between">
                <span className="text-[rgba(203,251,241,0.6)] text-xs">You'll Earn</span>
                <div className="flex items-center gap-1">
                  <span className="text-[#F59E0B] text-lg font-bold">{acceptedRequest.offeredPrice}</span>
                  <span className="text-[rgba(203,251,241,0.7)] text-sm">EGP</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Step Indicator */}
          <motion.div
            className="bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.3)] rounded-xl p-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(0,213,190,0.2)] border border-[rgba(0,213,190,0.3)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Navigation className="w-4 h-4 text-[#00d5be]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white text-sm font-medium mb-1">Next Step</p>
                <p className="text-[rgba(203,251,241,0.6)] text-xs">
                  Navigate to the pickup location and confirm arrival
                </p>
              </div>
            </div>
          </motion.div>

          {/* Go to Pickup Button */}
          <motion.button
            onClick={onGoToPickup}
            className="w-full h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.3)] relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.4)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <Navigation className="w-5 h-5 text-white relative" />
            <span className="text-white text-base font-semibold relative">Go to Pickup</span>
            <ArrowRight className="w-5 h-5 text-white relative" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
