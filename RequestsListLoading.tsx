import { motion } from 'motion/react';

export function RequestsListLoading() {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden pb-20">
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
      <div className="px-5 relative">
        {/* Header Skeleton */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-8 w-24 bg-[rgba(0,213,190,0.1)] rounded animate-pulse mb-2" />
          <div className="h-4 w-48 bg-[rgba(0,213,190,0.08)] rounded animate-pulse" />
        </motion.div>

        {/* Tabs Skeleton */}
        <motion.div
          className="flex gap-2 mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex-1 h-11 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl opacity-50" />
          <div className="flex-1 h-11 bg-[rgba(0,213,190,0.1)] rounded-xl" />
        </motion.div>

        {/* Loading Message */}
        <motion.div
          className="text-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-sm"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Loading requests...
          </motion.p>
        </motion.div>

        {/* Skeleton Request Cards */}
        <div className="space-y-4">
          {[1, 2, 3].map((index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl overflow-hidden"
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

              {/* Price Banner Skeleton */}
              <div className="h-10 bg-[rgba(245,158,11,0.2)] animate-pulse" />

              <div className="p-4 relative">
                {/* Route Skeleton */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex flex-col items-center gap-1 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[rgba(0,213,190,0.2)] animate-pulse" />
                    <div className="w-0.5 h-6 bg-[rgba(0,213,190,0.15)] rounded-full animate-pulse" />
                    <div className="w-3.5 h-3.5 rounded-full bg-[rgba(245,158,11,0.2)] animate-pulse" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <div>
                      <div className="h-3 bg-[rgba(0,213,190,0.1)] rounded w-16 mb-1 animate-pulse" />
                      <div className="h-4 bg-[rgba(0,213,190,0.15)] rounded w-3/4 animate-pulse" />
                    </div>
                    <div>
                      <div className="h-3 bg-[rgba(0,213,190,0.1)] rounded w-16 mb-1 animate-pulse" />
                      <div className="h-4 bg-[rgba(0,213,190,0.15)] rounded w-2/3 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Info Grid Skeleton */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-[rgba(0,213,190,0.05)] rounded-lg p-2">
                      <div className="h-3 bg-[rgba(0,213,190,0.1)] rounded w-12 mb-1 animate-pulse" />
                      <div className="h-4 bg-[rgba(0,213,190,0.1)] rounded w-16 animate-pulse" />
                    </div>
                  ))}
                </div>

                {/* Details Skeleton */}
                <div className="flex items-center justify-between mb-4">
                  <div className="space-y-1">
                    <div className="h-3 bg-[rgba(0,213,190,0.1)] rounded w-16 animate-pulse" />
                    <div className="h-4 bg-[rgba(0,213,190,0.15)] rounded w-32 animate-pulse" />
                  </div>
                  <div className="space-y-1 text-right">
                    <div className="h-3 bg-[rgba(0,213,190,0.1)] rounded w-12 animate-pulse" />
                    <div className="h-3 bg-[rgba(0,213,190,0.15)] rounded w-16 animate-pulse" />
                  </div>
                </div>

                {/* Buttons Skeleton */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-10 bg-[rgba(0,213,190,0.1)] rounded-lg animate-pulse" />
                  <div className="h-10 bg-[rgba(0,213,190,0.2)] rounded-lg animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
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
