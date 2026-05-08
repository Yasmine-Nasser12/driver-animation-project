import { motion } from 'motion/react';
import { Search, Truck } from 'lucide-react';

interface RequestLoadingProps {
  onCancel?: () => void;
}

export function RequestLoading({ onCancel }: RequestLoadingProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#00d5be] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-10 w-48 h-48 bg-[#F59E0B] opacity-5 blur-[70px] rounded-full"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Status bar space */}
      <div className="h-12" />

      {/* Container */}
      <div className="px-5 relative flex flex-col items-center justify-center min-h-[calc(100vh-3rem)]">
        {/* Animated search icon */}
        <motion.div
          className="w-24 h-24 mx-auto mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Outer pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00d5be]"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.5, 0, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Middle pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-[#00d5be]"
            animate={{
              scale: [1, 1.3, 1.3],
              opacity: [0.4, 0, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
          />

          {/* Main icon container */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[rgba(0,213,190,0.15)] to-[rgba(245,158,11,0.1)] border border-[rgba(0,213,190,0.3)] flex items-center justify-center">
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Search className="w-10 h-10 text-[#00d5be]" />
            </motion.div>
          </div>

          {/* Small truck indicator */}
          <motion.div
            className="absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] rounded-full flex items-center justify-center shadow-lg shadow-[rgba(245,158,11,0.3)] border-2 border-[#0f2334]"
            animate={{
              y: [0, -4, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Truck className="w-5 h-5 text-white" />
          </motion.div>
        </motion.div>

        {/* Loading message */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-white text-2xl font-semibold mb-3">
            Finding Nearby Shipments
          </h1>

          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-base"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Searching for available requests...
          </motion.p>
        </motion.div>

        {/* Skeleton Cards */}
        <div className="w-full space-y-4 mb-8">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl p-4 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1) }}
            >
              {/* Animated shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,213,190,0.1)] to-transparent"
                animate={{ x: [-300, 300] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: index * 0.2 }}
              />

              {/* Skeleton content */}
              <div className="relative">
                {/* Header skeleton */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,213,190,0.1)] animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-[rgba(0,213,190,0.1)] rounded w-2/3 animate-pulse" />
                    <div className="h-3 bg-[rgba(0,213,190,0.08)] rounded w-1/2 animate-pulse" />
                  </div>
                </div>

                {/* Details skeleton */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[rgba(0,213,190,0.05)] rounded-lg p-3">
                    <div className="h-3 bg-[rgba(0,213,190,0.1)] rounded w-1/2 mb-2 animate-pulse" />
                    <div className="h-4 bg-[rgba(0,213,190,0.1)] rounded w-3/4 animate-pulse" />
                  </div>
                  <div className="bg-[rgba(245,158,11,0.05)] rounded-lg p-3">
                    <div className="h-3 bg-[rgba(245,158,11,0.1)] rounded w-1/2 mb-2 animate-pulse" />
                    <div className="h-4 bg-[rgba(245,158,11,0.1)] rounded w-3/4 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading indicator dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-[#00d5be]"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
