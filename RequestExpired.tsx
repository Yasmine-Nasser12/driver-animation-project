import { motion } from 'motion/react';
import { Clock, ArrowLeft } from 'lucide-react';

interface RequestExpiredProps {
  onBackToHome: () => void;
}

export function RequestExpired({ onBackToHome }: RequestExpiredProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden flex items-center justify-center">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#F59E0B] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#8e8e93] opacity-5 blur-[70px] rounded-full"
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
          {/* Expired Icon */}
          <motion.div
            className="w-24 h-24 mx-auto mb-6 relative"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Pulsing background */}
            <motion.div
              className="absolute inset-0 bg-[rgba(142,142,147,0.15)] rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.15, 0.3]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Clock icon container */}
            <div className="relative w-24 h-24 rounded-full bg-[rgba(142,142,147,0.2)] border border-[rgba(142,142,147,0.3)] flex items-center justify-center">
              <Clock className="w-12 h-12 text-[#8e8e93]" />
              
              {/* Crossing line */}
              <motion.div
                className="absolute w-20 h-0.5 bg-[#8e8e93] rounded-full"
                style={{ rotate: '45deg' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-white text-2xl font-semibold mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Request Expired
          </motion.h1>

          {/* Message */}
          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-base mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            This shipment is no longer available
          </motion.p>

          <motion.p
            className="text-[rgba(203,251,241,0.5)] text-sm mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            The trader may have assigned it to another driver or cancelled the request
          </motion.p>

          {/* Info Card */}
          <motion.div
            className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(142,142,147,0.2)] rounded-xl p-4 mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-[rgba(203,251,241,0.6)] text-sm">
              Stay online to receive new trip requests from nearby traders
            </p>
          </motion.div>

          {/* Back to Home Button */}
          <motion.button
            onClick={onBackToHome}
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
            <ArrowLeft className="w-5 h-5 text-white relative" />
            <span className="text-white text-base font-semibold relative">Back to Home</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
