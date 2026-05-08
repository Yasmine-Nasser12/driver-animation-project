import { motion } from 'motion/react';
import { AlertCircle, RefreshCw, WifiOff } from 'lucide-react';

interface RequestsListErrorProps {
  onRetry: () => void;
}

export function RequestsListError({ onRetry }: RequestsListErrorProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden flex items-center justify-center pb-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#8e8e93] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#d32f2f] opacity-5 blur-[70px] rounded-full"
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
          {/* Error Icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Pulsing warning rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[rgba(211,47,47,0.4)]"
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.4, 0, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[rgba(211,47,47,0.4)]"
              animate={{
                scale: [1, 1.4, 1.4],
                opacity: [0.4, 0, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />

            {/* Main icon container */}
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[rgba(211,47,47,0.2)] to-[rgba(142,142,147,0.15)] border border-[rgba(211,47,47,0.3)] flex items-center justify-center">
              {/* Alert Icon */}
              <motion.div
                animate={{
                  rotate: [0, -10, 10, -10, 0],
                }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <AlertCircle className="w-12 h-12 text-[#d32f2f]" />
              </motion.div>
            </div>

            {/* Connection badge */}
            <motion.div
              className="absolute -bottom-1 -right-1 w-8 h-8 bg-[rgba(142,142,147,0.2)] border-2 border-[#8e8e93] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <WifiOff className="w-4 h-4 text-[#8e8e93]" />
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-white text-2xl font-semibold mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Failed to Load Requests
          </motion.h1>

          {/* Message */}
          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-base mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Please check your connection and try again
          </motion.p>

          {/* Error Details Card */}
          <motion.div
            className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(142,142,147,0.2)] rounded-xl p-4 mb-6 text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-white text-sm font-medium mb-3">Troubleshooting:</p>

            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d32f2f] mt-1.5 flex-shrink-0" />
                <p className="text-[rgba(203,251,241,0.6)] text-sm">
                  Check your internet connection
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d32f2f] mt-1.5 flex-shrink-0" />
                <p className="text-[rgba(203,251,241,0.6)] text-sm">
                  Ensure you have a stable network signal
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#d32f2f] mt-1.5 flex-shrink-0" />
                <p className="text-[rgba(203,251,241,0.6)] text-sm">
                  Try again in a few moments
                </p>
              </div>
            </div>
          </motion.div>

          {/* Connection Status */}
          <motion.div
            className="flex items-center justify-center gap-2 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#d32f2f]"
              animate={{
                opacity: [1, 0.4, 1],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[rgba(203,251,241,0.5)] text-sm">Connection error</span>
          </motion.div>

          {/* Retry Button */}
          <motion.button
            onClick={onRetry}
            className="w-full h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.2)] relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.3)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white text-base font-semibold relative">Retry</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
