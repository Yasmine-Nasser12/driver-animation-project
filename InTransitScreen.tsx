import { motion } from 'motion/react';
import { Navigation, MapPin, Clock, Package, CheckCircle } from 'lucide-react';

interface InTransitScreenProps {
  onMarkDelivered: () => void;
}

const transitData = {
  from: 'Cairo Distribution Hub',
  to: 'Alexandria Port Terminal',
  toAddress: '45 Port Road, Alexandria',
  distance: '120 km',
  distanceRemaining: '45 km',
  eta: '1 hr 15 min',
  progress: 62, // percentage
  shipmentId: 'SHP-4522',
  shipmentType: 'Construction Materials',
  weight: '3,200 lbs',
};

export function InTransitScreen({ onMarkDelivered }: InTransitScreenProps) {
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
      <div className="px-5 relative">
        {/* Header */}
        <motion.div
          className="mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgba(0,213,190,0.15)] to-[rgba(245,158,11,0.1)] px-3 py-1.5 rounded-full border border-[rgba(0,213,190,0.3)] mb-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#00d5be]"
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[#00d5be] text-xs font-semibold uppercase tracking-wide">
                  In Transit
                </span>
              </div>
              <h1 className="text-white text-xl font-semibold">On the Way</h1>
            </div>
            
            {/* Animated navigation icon */}
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d5be] to-[#00bba7] flex items-center justify-center shadow-lg shadow-[rgba(0,213,190,0.3)]"
              animate={{ 
                rotate: [0, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Navigation className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          
          <p className="text-[rgba(203,251,241,0.6)] text-sm">
            Navigate to the destination
          </p>
        </motion.div>

        {/* Map & Progress Card */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.2)] rounded-2xl overflow-hidden mb-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Mock map */}
          <div className="h-52 bg-gradient-to-br from-[rgba(0,213,190,0.08)] to-[rgba(245,158,11,0.05)] relative overflow-hidden">
            {/* Animated route */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 220">
              {/* Background route (completed) */}
              <motion.path
                d="M 30 180 Q 80 140 130 150 Q 180 160 230 100 T 280 60"
                stroke="rgba(0,213,190,0.3)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
              {/* Active route (in progress) */}
              <motion.path
                d="M 30 180 Q 80 140 130 150 Q 180 160 230 100 T 280 60"
                stroke="#00d5be"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: transitData.progress / 100 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              {/* Glowing effect on active route */}
              <motion.path
                d="M 30 180 Q 80 140 130 150 Q 180 160 230 100 T 280 60"
                stroke="#F59E0B"
                strokeWidth="6"
                fill="none"
                strokeLinecap="round"
                opacity="0.3"
                filter="blur(4px)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: transitData.progress / 100 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
            
            {/* Start point */}
            <motion.div
              className="absolute bottom-6 left-8 w-3 h-3 bg-[#34c759] rounded-full border-2 border-white shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
            />
            
            {/* Current position (moving truck) */}
            <motion.div
              className="absolute top-1/2 left-1/2"
              initial={{ scale: 0, x: '-220%', y: '80%' }}
              animate={{ scale: 1, x: '-50%', y: '-50%' }}
              transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
            >
              <motion.div
                className="w-8 h-8 bg-gradient-to-br from-[#00d5be] to-[#00bba7] rounded-full flex items-center justify-center shadow-xl shadow-[rgba(0,213,190,0.4)] border-2 border-white"
                animate={{ 
                  y: [0, -4, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Navigation className="w-4 h-4 text-white" style={{ transform: 'rotate(45deg)' }} />
              </motion.div>
            </motion.div>
            
            {/* Destination point (pulsing) */}
            <motion.div
              className="absolute top-12 right-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="w-4 h-4 bg-[#F59E0B] rounded-full border-2 border-white shadow-lg"
                animate={{ 
                  boxShadow: ['0 0 0 0 rgba(245,158,11,0.4)', '0 0 0 12px rgba(245,158,11,0)', '0 0 0 0 rgba(245,158,11,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute h-px bg-white left-0 right-0" style={{ top: `${i * 8.33}%` }} />
              ))}
              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute w-px bg-white top-0 bottom-0" style={{ left: `${i * 8.33}%` }} />
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="px-4 py-3 bg-[rgba(10,22,40,0.6)]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">Trip Progress</span>
              <span className="text-[#00d5be] text-xs font-semibold">{transitData.progress}%</span>
            </div>
            <div className="h-2 bg-[rgba(0,213,190,0.15)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${transitData.progress}%` }}
                transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* ETA Info */}
          <div className="bg-gradient-to-r from-[#00d5be] to-[#00bba7] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Estimated Arrival</span>
              </div>
              <div className="text-right">
                <p className="text-white text-lg font-bold">{transitData.eta}</p>
                <p className="text-white/80 text-xs">{transitData.distanceRemaining} remaining</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Destination Card */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(245,158,11,0.3)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3">
            <motion.div
              className="w-10 h-10 rounded-full bg-[rgba(245,158,11,0.2)] border border-[rgba(245,158,11,0.3)] flex items-center justify-center flex-shrink-0"
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(245,158,11,0.4)', '0 0 0 8px rgba(245,158,11,0)', '0 0 0 0 rgba(245,158,11,0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-5 h-5 text-[#F59E0B]" />
            </motion.div>
            <div className="flex-1">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Destination</p>
              <p className="text-white text-base font-semibold mb-0.5">{transitData.to}</p>
              <p className="text-[rgba(203,251,241,0.5)] text-sm">{transitData.toAddress}</p>
            </div>
          </div>
        </motion.div>

        {/* Shipment Info */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-4 h-4 text-[#00d5be]" />
            <span className="text-white text-sm font-medium">Active Shipment</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">ID</span>
              <span className="text-white text-sm font-mono">{transitData.shipmentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">Type</span>
              <span className="text-white text-sm">{transitData.shipmentType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">Weight</span>
              <span className="text-white text-sm">{transitData.weight}</span>
            </div>
          </div>
        </motion.div>

        {/* Mark as Delivered Button */}
        <motion.button
          onClick={onMarkDelivered}
          className="w-full h-14 bg-gradient-to-r from-[#34c759] to-[#30b0c7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(52,199,89,0.3)] relative overflow-hidden mb-8"
          whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(52,199,89,0.4)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{ x: [-300, 300] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <CheckCircle className="w-5 h-5 text-white relative" />
          <span className="text-white text-base font-semibold relative">Mark as Delivered</span>
        </motion.button>
      </div>
    </div>
  );
}
