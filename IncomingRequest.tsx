import { motion } from 'motion/react';
import { MapPin, Clock, DollarSign, User, Truck, X, Check, ArrowRight } from 'lucide-react';

interface IncomingRequestProps {
  onAccept: () => void;
  onReject: () => void;
}

const requestData = {
  pickupLocation: 'Cairo Distribution Hub',
  dropoffLocation: 'Alexandria Port Terminal',
  distance: '120 km',
  estimatedTime: '2 hr 30 min',
  offeredPrice: '240',
  traderName: 'Mohamed Hassan Trading Co.',
  shipmentType: 'Construction Materials',
  weight: '3,200 lbs',
  expiresIn: 45, // seconds
};

export function IncomingRequest({ onAccept, onReject }: IncomingRequestProps) {
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
        {/* Pulsing notification indicator */}
        <motion.div
          className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#00d5be]"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Header */}
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgba(0,213,190,0.15)] to-[rgba(245,158,11,0.1)] px-4 py-2 rounded-full border border-[rgba(0,213,190,0.3)] mb-3"
            animate={{ 
              borderColor: ['rgba(0,213,190,0.3)', 'rgba(245,158,11,0.3)', 'rgba(0,213,190,0.3)']
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#00d5be]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-[#00d5be] text-xs font-semibold uppercase tracking-wide">
              New Shipment Request
            </span>
          </motion.div>

          <h1 className="text-white text-2xl font-semibold mb-1">Trip Available</h1>
          <p className="text-[rgba(203,251,241,0.6)] text-sm mb-3">
            Review details and accept or decline
          </p>

          {/* Quick Route Indicator */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[rgba(10,22,40,0.6)] px-3 py-2 rounded-lg border border-[rgba(0,213,190,0.2)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <MapPin className="w-3.5 h-3.5 text-[#34c759]" />
            <ArrowRight className="w-3 h-3 text-[rgba(203,251,241,0.4)]" />
            <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-[rgba(203,251,241,0.7)] text-xs font-medium ml-1">
              {requestData.distance} • {requestData.estimatedTime}
            </span>
          </motion.div>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border-2 border-[#00d5be] rounded-2xl overflow-hidden mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          {/* Animated glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00d5be] to-[#F59E0B] rounded-2xl"
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 2, repeat: Infinity }}
          />

          {/* Payout Banner */}
          <div className="bg-gradient-to-r from-[#00d5be] to-[#00bba7] px-5 py-4 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <div className="flex items-center justify-between relative">
              <span className="text-white/90 text-sm font-medium">Trip Payment</span>
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-5 h-5 text-white" />
                <span className="text-white text-2xl font-bold">{requestData.offeredPrice}</span>
                <span className="text-white/80 text-sm">EGP</span>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="p-5 relative">
            {/* Route */}
            <div className="mb-5">
              <div className="flex items-start gap-3 mb-3">
                <div className="flex flex-col items-center gap-1.5 mt-1">
                  <div className="w-3 h-3 rounded-full bg-[#00d5be] border-2 border-[rgba(0,213,190,0.3)]" />
                  <div className="w-0.5 h-8 bg-gradient-to-b from-[#00d5be] to-[rgba(0,213,190,0.3)]" />
                  <MapPin className="w-4 h-4 text-[#F59E0B]" />
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Pickup Location</p>
                    <p className="text-white text-base font-medium">{requestData.pickupLocation}</p>
                  </div>
                  <div>
                    <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Drop-off Location</p>
                    <p className="text-white text-base font-medium">{requestData.dropoffLocation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Info Grid */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="bg-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.2)] rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00d5be]" />
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Distance</span>
                </div>
                <p className="text-white text-base font-semibold">{requestData.distance}</p>
              </div>
              <div className="bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] rounded-xl p-3">
                <div className="flex items-center gap-2 mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Est. Time</span>
                </div>
                <p className="text-white text-base font-semibold">{requestData.estimatedTime}</p>
              </div>
            </div>

            {/* Shipment Details */}
            <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-4 mb-4">
              <div className="flex items-center gap-2 mb-3">
                <Truck className="w-4 h-4 text-[#00d5be]" />
                <span className="text-white text-sm font-medium">Shipment Details</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Type</span>
                  <span className="text-white text-sm">{requestData.shipmentType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Weight</span>
                  <span className="text-white text-sm">{requestData.weight}</span>
                </div>
              </div>
            </div>

            {/* Trader Info */}
            <div className="flex items-center gap-3 bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.2)] to-[rgba(0,213,190,0.15)] border border-[rgba(245,158,11,0.3)] flex items-center justify-center">
                <User className="w-5 h-5 text-[#FBBF24]" />
              </div>
              <div>
                <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">Trader</p>
                <p className="text-white text-sm font-medium">{requestData.traderName}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Expiry Timer */}
        <motion.div
          className="bg-[rgba(245,158,11,0.1)] border border-[rgba(245,158,11,0.3)] rounded-xl p-3 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#F59E0B]" />
            <span className="text-[rgba(203,251,241,0.7)] text-sm">
              Request expires in{' '}
              <motion.span
                className="text-[#F59E0B] font-semibold"
                animate={{ opacity: [1, 0.6, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {requestData.expiresIn}s
              </motion.span>
            </span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          <motion.button
            onClick={onReject}
            className="h-14 bg-[rgba(142,142,147,0.2)] border border-[rgba(142,142,147,0.3)] rounded-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <X className="w-5 h-5 text-[#8e8e93]" />
            <span className="text-[#8e8e93] text-base font-medium">Decline</span>
          </motion.button>

          <motion.button
            onClick={onAccept}
            className="h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.3)] relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.4)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <Check className="w-5 h-5 text-white relative" />
            <span className="text-white text-base font-semibold relative">Accept Trip</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
