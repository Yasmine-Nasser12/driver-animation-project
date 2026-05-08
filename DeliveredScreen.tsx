import { motion } from 'motion/react';
import { CheckCircle, MapPin, DollarSign, TrendingUp, Star, Home } from 'lucide-react';

interface DeliveredScreenProps {
  onComplete: () => void;
}

const deliveryData = {
  shipmentId: 'SHP-4522',
  from: 'Cairo Distribution Hub',
  to: 'Alexandria Port Terminal',
  distance: '120 km',
  duration: '2 hr 28 min',
  earnings: '240',
  todayTotal: '1,150',
  rating: 5,
};

export function DeliveredScreen({ onComplete }: DeliveredScreenProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#34c759] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-[#F59E0B] opacity-5 blur-[70px] rounded-full"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Status bar space */}
      <div className="h-12" />

      {/* Container */}
      <div className="px-5 relative">
        {/* Success Celebration */}
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Confetti particles */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: ['#34c759', '#00d5be', '#F59E0B', '#FBBF24'][i % 4],
                left: `${20 + (i * 5)}%`,
                top: '10%',
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
            className="w-24 h-24 mx-auto mb-4 relative"
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

          <motion.h1
            className="text-white text-3xl font-bold mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Delivered Successfully!
          </motion.h1>
          
          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-base"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            Great work completing this delivery
          </motion.p>
        </motion.div>

        {/* Earnings Card - Highlighted */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(245,158,11,0.15)] via-[rgba(0,213,190,0.1)] to-[rgba(245,158,11,0.08)] border-2 border-[#F59E0B] rounded-2xl overflow-hidden mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          {/* Animated glow */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] to-[#00d5be]"
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          
          <div className="relative p-5">
            <div className="text-center mb-4">
              <p className="text-[rgba(203,251,241,0.6)] text-sm mb-1">Trip Earnings</p>
              <div className="flex items-center justify-center gap-2">
                <DollarSign className="w-6 h-6 text-[#F59E0B]" />
                <motion.span
                  className="text-white text-4xl font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
                >
                  {deliveryData.earnings}
                </motion.span>
                <span className="text-[rgba(203,251,241,0.7)] text-xl">EGP</span>
              </div>
            </div>

            <div className="h-px bg-[rgba(245,158,11,0.3)] mb-4" />

            <div className="flex items-center justify-center gap-2 text-[rgba(203,251,241,0.7)]">
              <TrendingUp className="w-4 h-4 text-[#34c759]" />
              <span className="text-sm">Today's total:</span>
              <span className="text-white font-semibold">{deliveryData.todayTotal} EGP</span>
            </div>
          </div>
        </motion.div>

        {/* Route Summary */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4 text-[#00d5be]" />
            <span className="text-white text-sm font-medium">Trip Summary</span>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#34c759] border border-[rgba(52,199,89,0.3)] mt-1.5" />
              <div className="flex-1">
                <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">From</p>
                <p className="text-white text-sm">{deliveryData.from}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] border border-[rgba(245,158,11,0.3)] mt-1.5" />
              <div className="flex-1">
                <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">To</p>
                <p className="text-white text-sm">{deliveryData.to}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.2)] rounded-lg p-3">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Distance</p>
              <p className="text-white text-base font-semibold">{deliveryData.distance}</p>
            </div>
            <div className="bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] rounded-lg p-3">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Duration</p>
              <p className="text-white text-base font-semibold">{deliveryData.duration}</p>
            </div>
          </div>
        </motion.div>

        {/* Rating Request */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
        >
          <p className="text-white text-sm font-medium mb-3 text-center">
            How was your delivery experience?
          </p>
          
          <div className="flex items-center justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                className="w-10 h-10 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + (star * 0.1) }}
              >
                <Star 
                  className={`w-7 h-7 ${star <= deliveryData.rating ? 'fill-[#C9A063] text-[#C9A063]' : 'text-[rgba(142,142,147,0.3)]'}`}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Complete Button */}
        <motion.button
          onClick={onComplete}
          className="w-full h-16 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl shadow-lg shadow-[rgba(0,213,190,0.3)] relative overflow-hidden mb-8"
          whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.4)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{ x: [-300, 300] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <div className="flex flex-col items-center justify-center gap-1 relative">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-white" />
              <span className="text-white text-base font-semibold">Complete Trip</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Home className="w-3.5 h-3.5 text-white/80" />
              <span className="text-white/80 text-xs">Return to Home</span>
            </div>
          </div>
        </motion.button>
      </div>
    </div>
  );
}
