import { motion } from 'motion/react';
import { MapPin, Clock, DollarSign, User, Truck, Package, ArrowLeft, Check, X, FileText } from 'lucide-react';

interface RequestDetailsProps {
  requestId: string;
  onAccept: () => void;
  onReject: () => void;
  onBack: () => void;
}

const requestData = {
  id: 'REQ-4522',
  pickupLocation: 'Cairo Distribution Hub',
  pickupAddress: '124 Nasr Road, Cairo',
  dropoffLocation: 'Alexandria Port Terminal',
  dropoffAddress: '45 Port Road, Alexandria',
  distance: '120 km',
  estimatedTime: '2 hr 30 min',
  offeredPrice: '240',
  cargoType: 'Construction Materials',
  weight: '3,200 lbs',
  packages: '12 pallets',
  traderName: 'Mohamed Hassan Trading Co.',
  traderPhone: '+20 100 123 4567',
  postedTime: '5 mins ago',
  specialNotes: 'Handle with care - Fragile items included. Contact before pickup.',
};

export function RequestDetails({ requestId, onAccept, onReject, onBack }: RequestDetailsProps) {
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
        {/* Header with Back */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.3)] flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: "rgba(0,213,190,0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-5 h-5 text-[#00d5be]" />
          </motion.button>

          <div>
            <h1 className="text-white text-xl font-semibold">Request Details</h1>
            <p className="text-[rgba(203,251,241,0.5)] text-xs">{requestData.id}</p>
          </div>
        </motion.div>

        {/* Price Card */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(245,158,11,0.15)] via-[rgba(0,213,190,0.1)] to-[rgba(245,158,11,0.08)] border-2 border-[#F59E0B] rounded-2xl p-5 mb-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <p className="text-[rgba(203,251,241,0.6)] text-sm mb-2">Offered Payment</p>
            <div className="flex items-center justify-center gap-2">
              <DollarSign className="w-6 h-6 text-[#F59E0B]" />
              <span className="text-white text-4xl font-bold">{requestData.offeredPrice}</span>
              <span className="text-[rgba(203,251,241,0.7)] text-xl">EGP</span>
            </div>
            <p className="text-[rgba(203,251,241,0.5)] text-xs mt-2">Posted {requestData.postedTime}</p>
          </div>
        </motion.div>

        {/* Route Card */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.2)] rounded-2xl p-5 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-4.5 h-4.5 text-[#00d5be]" />
            <span className="text-white text-base font-semibold">Route</span>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <div className="flex flex-col items-center gap-1.5 mt-1">
              <div className="w-3 h-3 rounded-full bg-[#00d5be] border-2 border-[rgba(0,213,190,0.3)]" />
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#00d5be] to-[#F59E0B] rounded-full" />
              <MapPin className="w-4 h-4 text-[#F59E0B]" />
            </div>

            <div className="flex-1 space-y-5">
              <div>
                <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Pickup Location</p>
                <p className="text-white text-base font-medium mb-0.5">{requestData.pickupLocation}</p>
                <p className="text-[rgba(203,251,241,0.5)] text-sm">{requestData.pickupAddress}</p>
              </div>

              <div>
                <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Drop-off Location</p>
                <p className="text-white text-base font-medium mb-0.5">{requestData.dropoffLocation}</p>
                <p className="text-[rgba(203,251,241,0.5)] text-sm">{requestData.dropoffAddress}</p>
              </div>
            </div>
          </div>

          {/* Distance & Time */}
          <div className="grid grid-cols-2 gap-3">
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
        </motion.div>

        {/* Cargo Details */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-4.5 h-4.5 text-[#00d5be]" />
            <span className="text-white text-base font-semibold">Cargo Details</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[rgba(203,251,241,0.6)] text-sm">Type</span>
              <span className="text-white text-sm font-medium">{requestData.cargoType}</span>
            </div>

            <div className="h-px bg-[rgba(0,213,190,0.1)]" />

            <div className="flex justify-between items-center">
              <span className="text-[rgba(203,251,241,0.6)] text-sm">Weight</span>
              <span className="text-white text-sm font-medium">{requestData.weight}</span>
            </div>

            <div className="h-px bg-[rgba(0,213,190,0.1)]" />

            <div className="flex justify-between items-center">
              <span className="text-[rgba(203,251,241,0.6)] text-sm">Packages</span>
              <span className="text-white text-sm font-medium">{requestData.packages}</span>
            </div>
          </div>
        </motion.div>

        {/* Trader Info */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.2)] to-[rgba(0,213,190,0.15)] border border-[rgba(245,158,11,0.3)] flex items-center justify-center">
              <User className="w-6 h-6 text-[#FBBF24]" />
            </div>
            <div className="flex-1">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">Trader</p>
              <p className="text-white text-sm font-medium mb-0.5">{requestData.traderName}</p>
              <p className="text-[rgba(203,251,241,0.5)] text-xs">{requestData.traderPhone}</p>
            </div>
          </div>
        </motion.div>

        {/* Special Notes */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(245,158,11,0.1)] to-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.3)] rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-start gap-3">
            <FileText className="w-4.5 h-4.5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[rgba(203,251,241,0.7)] text-xs mb-1 uppercase tracking-wide">Special Notes</p>
              <p className="text-white text-sm">{requestData.specialNotes}</p>
            </div>
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
            transition={{ delay: 0.7 }}
          >
            <X className="w-5 h-5 text-[#8e8e93]" />
            <span className="text-[#8e8e93] text-base font-medium">Reject</span>
          </motion.button>

          <motion.button
            onClick={onAccept}
            className="h-14 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(0,213,190,0.3)] relative overflow-hidden"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.4)" }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              animate={{ x: [-300, 300] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <Check className="w-5 h-5 text-white relative" />
            <span className="text-white text-base font-semibold relative">Accept Request</span>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
