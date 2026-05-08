import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, User, Truck, Phone } from 'lucide-react';

interface GoingToPickupProps {
  onArrived: () => void;
}

const tripData = {
  pickupLocation: 'Cairo Distribution Hub',
  pickupAddress: '124 Nasr Road, Cairo',
  dropoffLocation: 'Alexandria Port Terminal',
  distance: '8.5 km',
  estimatedTime: '12 min',
  traderName: 'Mohamed Hassan',
  traderPhone: '+20 100 123 4567',
  shipmentType: 'Construction Materials',
  weight: '3,200 lbs',
  shipmentId: 'SHP-4522',
};

export function GoingToPickup({ onArrived }: GoingToPickupProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#F59E0B] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-10 w-48 h-48 bg-[#00d5be] opacity-5 blur-[70px] rounded-full"
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
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <span className="text-[#00d5be] text-xs font-semibold uppercase tracking-wide">
                  En Route
                </span>
              </div>
              <h1 className="text-white text-xl font-semibold">Heading to Pickup</h1>
            </div>
            
            {/* Animated navigation icon */}
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d5be] to-[#00bba7] flex items-center justify-center shadow-lg shadow-[rgba(0,213,190,0.3)]"
              animate={{ 
                rotate: [0, 10, 0, -10, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Navigation className="w-6 h-6 text-white" />
            </motion.div>
          </div>
          
          <p className="text-[rgba(203,251,241,0.6)] text-sm mb-2">
            Navigate to the pickup location
          </p>

          {/* Distance & ETA Info */}
          <motion.div
            className="inline-flex items-center gap-3 bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.3)] px-4 py-2 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#00d5be]" />
              <span className="text-white text-sm font-semibold">{tripData.distance} away</span>
            </div>
            <div className="w-px h-4 bg-[rgba(0,213,190,0.3)]" />
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className="text-white text-sm font-semibold">{tripData.estimatedTime} ETA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.2)] rounded-2xl overflow-hidden mb-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {/* Mock map with route */}
          <div className="h-48 bg-gradient-to-br from-[rgba(0,213,190,0.08)] to-[rgba(245,158,11,0.05)] relative overflow-hidden">
            {/* Animated route line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 200">
              <motion.path
                d="M 50 150 Q 100 100 150 120 T 250 50"
                stroke="#00d5be"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.path
                d="M 50 150 Q 100 100 150 120 T 250 50"
                stroke="#F59E0B"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="10 10"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
              />
            </svg>
            
            {/* Start point */}
            <motion.div
              className="absolute bottom-8 left-12 w-4 h-4 bg-[#00d5be] rounded-full border-2 border-white shadow-lg"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            />
            
            {/* End point (pulsing) */}
            <motion.div
              className="absolute top-8 right-12"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            >
              <motion.div
                className="w-6 h-6 bg-[#F59E0B] rounded-full border-2 border-white shadow-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  boxShadow: ['0 0 0 0 rgba(245,158,11,0.4)', '0 0 0 8px rgba(245,158,11,0)', '0 0 0 0 rgba(245,158,11,0)']
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute h-px bg-white left-0 right-0" style={{ top: `${i * 10}%` }} />
              ))}
              {[...Array(10)].map((_, i) => (
                <div key={i} className="absolute w-px bg-white top-0 bottom-0" style={{ left: `${i * 10}%` }} />
              ))}
            </div>
          </div>

          {/* ETA Bar */}
          <div className="bg-gradient-to-r from-[#00d5be] to-[#00bba7] px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-medium">Estimated Arrival</span>
              </div>
              <div className="text-right">
                <p className="text-white text-lg font-bold">{tripData.estimatedTime}</p>
                <p className="text-white/80 text-xs">{tripData.distance} away</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pickup Location Card */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-[rgba(245,158,11,0.2)] border border-[rgba(245,158,11,0.3)] flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <div className="flex-1">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Pickup Location</p>
              <p className="text-white text-base font-semibold mb-0.5">{tripData.pickupLocation}</p>
              <p className="text-[rgba(203,251,241,0.5)] text-sm">{tripData.pickupAddress}</p>
            </div>
          </div>

          <div className="h-px bg-[rgba(0,213,190,0.15)] mb-4" />

          {/* Trader Contact */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.2)] to-[rgba(0,213,190,0.15)] border border-[rgba(245,158,11,0.3)] flex items-center justify-center">
                <User className="w-5 h-5 text-[#FBBF24]" />
              </div>
              <div>
                <p className="text-[rgba(203,251,241,0.6)] text-xs">Trader Contact</p>
                <p className="text-white text-sm font-medium">{tripData.traderName}</p>
              </div>
            </div>
            
            <motion.button
              className="w-10 h-10 rounded-full bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.3)] flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4.5 h-4.5 text-[#00d5be]" />
            </motion.button>
          </div>
        </motion.div>

        {/* Shipment Summary */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Truck className="w-4 h-4 text-[#00d5be]" />
            <span className="text-white text-sm font-medium">Shipment Summary</span>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">ID</span>
              <span className="text-white text-sm font-mono">{tripData.shipmentId}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">Type</span>
              <span className="text-white text-sm">{tripData.shipmentType}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">Weight</span>
              <span className="text-white text-sm">{tripData.weight}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[rgba(203,251,241,0.6)] text-xs">Destination</span>
              <span className="text-white text-sm">{tripData.dropoffLocation}</span>
            </div>
          </div>
        </motion.div>

        {/* Arrived Button */}
        <motion.button
          onClick={onArrived}
          className="w-full h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.3)] relative overflow-hidden mb-8"
          whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.4)" }}
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
          <MapPin className="w-5 h-5 text-white relative" />
          <span className="text-white text-base font-semibold relative">I've Arrived</span>
        </motion.button>
      </div>
    </div>
  );
}
