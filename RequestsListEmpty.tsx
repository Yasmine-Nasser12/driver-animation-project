import { motion } from 'motion/react';
import { Inbox, RefreshCw, Radio } from 'lucide-react';

interface RequestsListEmptyProps {
  onRefresh: () => void;
}

export function RequestsListEmpty({ onRefresh }: RequestsListEmptyProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden flex items-center justify-center pb-20">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#00d5be] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#F59E0B] opacity-5 blur-[70px] rounded-full"
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
            Stay online to receive new shipment requests
          </motion.p>

          {/* Info Card */}
          <motion.div
            className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[rgba(52,199,89,0.15)] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Radio className="w-4 h-4 text-[#34c759]" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white text-sm font-medium mb-1">You're Online & Ready</p>
                <p className="text-[rgba(203,251,241,0.6)] text-xs">
                  New shipment requests will appear here automatically
                </p>
              </div>
            </div>
          </motion.div>

          {/* Refresh Button */}
          <motion.button
            onClick={onRefresh}
            className="w-full h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.2)] relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.3)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
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
            <span className="text-white text-base font-semibold relative">Refresh</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
