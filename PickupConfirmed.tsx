import { motion } from 'motion/react';
import { CheckCircle, MapPin, Navigation, Package, Play, Scale, Box } from 'lucide-react';

interface PickupConfirmedProps {
  onStartDelivery: () => void;
}

const deliveryData = {
  pickupLocation: 'Cairo Distribution Hub',
  dropoffLocation: 'Alexandria Port Terminal',
  dropoffAddress: '45 Port Road, Alexandria',
  distance: '120 km',
  estimatedTime: '2 hr 30 min',
  shipmentId: 'SHP-4522',
  shipmentType: 'Construction Materials',
  weight: '3,200 lbs',
};

export function PickupConfirmed({ onStartDelivery }: PickupConfirmedProps) {
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
          className="absolute top-40 left-10 w-48 h-48 bg-[#00d5be] opacity-5 blur-[70px] rounded-full"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Status bar space */}
      <div className="h-12" />

      {/* Container */}
      <div className="px-5 relative">
        {/* Success Header */}
        <motion.div
          className="mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Success Icon with Animation */}
          <motion.div
            className="w-20 h-20 mx-auto mb-4 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            {/* Multiple pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#34c759]"
              animate={{ 
                scale: [1, 1.5, 1.5],
                opacity: [0.3, 0, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-[#34c759]"
              animate={{ 
                scale: [1, 1.5, 1.5],
                opacity: [0.3, 0, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-[#34c759]"
              animate={{ 
                scale: [1, 1.5, 1.5],
                opacity: [0.3, 0, 0]
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
            />
            
            {/* Checkmark icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#34c759] to-[#30b0c7] flex items-center justify-center shadow-xl shadow-[rgba(52,199,89,0.4)]">
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                <CheckCircle className="w-10 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h1
            className="text-white text-2xl font-semibold mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Pickup Confirmed!
          </motion.h1>
          
          <motion.p
            className="text-[rgba(203,251,241,0.6)] text-sm mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Shipment has been loaded successfully
          </motion.p>

          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgba(52,199,89,0.15)] to-[rgba(48,176,199,0.1)] px-3 py-1.5 rounded-full border border-[rgba(52,199,89,0.3)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <div className="w-2 h-2 rounded-full bg-[#34c759]" />
            <span className="text-[#34c759] text-xs font-semibold">Ready for Delivery</span>
          </motion.div>
        </motion.div>

        {/* Delivery Route Card */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.2)] rounded-2xl p-5 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Navigation className="w-4.5 h-4.5 text-[#00d5be]" />
            <span className="text-white text-base font-semibold">Delivery Route</span>
          </div>

          {/* Route visualization */}
          <div className="relative">
            <div className="flex items-start gap-3">
              <div className="flex flex-col items-center gap-2 mt-1">
                {/* Start point */}
                <motion.div
                  className="w-3 h-3 rounded-full bg-[#34c759] border-2 border-[rgba(52,199,89,0.3)] shadow-lg shadow-[rgba(52,199,89,0.3)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.0 }}
                />
                
                {/* Animated connecting line */}
                <motion.div
                  className="w-0.5 h-16 bg-gradient-to-b from-[#34c759] via-[#00d5be] to-[#F59E0B] rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  style={{ transformOrigin: 'top' }}
                />
                
                {/* End point - pulsing */}
                <motion.div
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.div
                    className="w-4 h-4 rounded-full bg-[#F59E0B] border-2 border-white shadow-lg"
                    animate={{ 
                      boxShadow: ['0 0 0 0 rgba(245,158,11,0.4)', '0 0 0 8px rgba(245,158,11,0)', '0 0 0 0 rgba(245,158,11,0)']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              </div>

              <div className="flex-1 space-y-6">
                {/* From */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0 }}
                >
                  <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">From (Picked up)</p>
                  <p className="text-white text-base font-medium">{deliveryData.pickupLocation}</p>
                </motion.div>

                {/* To */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">To (Destination)</p>
                  <p className="text-white text-base font-medium mb-0.5">{deliveryData.dropoffLocation}</p>
                  <p className="text-[rgba(203,251,241,0.5)] text-sm">{deliveryData.dropoffAddress}</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Trip info */}
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.2)] rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#00d5be]" />
                <span className="text-[rgba(203,251,241,0.6)] text-xs">Distance</span>
              </div>
              <p className="text-white text-base font-semibold">{deliveryData.distance}</p>
            </div>
            <div className="bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] rounded-xl p-3">
              <div className="flex items-center gap-2 mb-1">
                <Navigation className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span className="text-[rgba(203,251,241,0.6)] text-xs">Est. Time</span>
              </div>
              <p className="text-white text-base font-semibold">{deliveryData.estimatedTime}</p>
            </div>
          </div>
        </motion.div>

        {/* Shipment Details - Enhanced */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.2)] rounded-2xl overflow-hidden mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[rgba(0,213,190,0.15)] to-[rgba(0,213,190,0.08)] px-4 py-3 border-b border-[rgba(0,213,190,0.2)]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[rgba(52,199,89,0.2)] border border-[rgba(52,199,89,0.3)] flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-[#34c759]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold">Shipment Loaded</p>
                <p className="text-[rgba(203,251,241,0.6)] text-xs">Ready for delivery</p>
              </div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="p-4">
            <div className="grid grid-cols-2 gap-3 mb-4">
              {/* Weight */}
              <div className="bg-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.2)] rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#00d5be]" />
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Weight</span>
                </div>
                <p className="text-white text-base font-bold">{deliveryData.weight}</p>
              </div>

              {/* Package Type */}
              <div className="bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1.5">
                  <Box className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Package</span>
                </div>
                <p className="text-white text-sm font-semibold">Materials</p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[rgba(203,251,241,0.6)] text-xs">Shipment ID</span>
                <span className="text-white text-sm font-mono">{deliveryData.shipmentId}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[rgba(203,251,241,0.6)] text-xs">Type</span>
                <span className="text-white text-sm">{deliveryData.shipmentType}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Start Delivery Button */}
        <motion.button
          onClick={onStartDelivery}
          className="w-full h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.3)] relative overflow-hidden mb-8"
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
          <Play className="w-5 h-5 text-white relative" />
          <span className="text-white text-base font-semibold relative">Start Delivery</span>
        </motion.button>
      </div>
    </div>
  );
}
