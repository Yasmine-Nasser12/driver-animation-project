import { motion } from 'motion/react';
import { MapPin, User, Package, CheckCircle, Phone, Truck } from 'lucide-react';

interface ArrivedAtPickupProps {
  onConfirmPickup: () => void;
}

const pickupData = {
  location: 'Cairo Distribution Hub',
  address: '124 Nasr Road, Cairo',
  traderName: 'Mohamed Hassan',
  traderPhone: '+20 100 123 4567',
  shipmentId: 'SHP-4522',
  shipmentType: 'Construction Materials',
  weight: '3,200 lbs',
  items: '12 pallets',
  specialInstructions: 'Handle with care - Fragile items',
};

export function ArrivedAtPickup({ onConfirmPickup }: ArrivedAtPickupProps) {
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
          className="absolute top-40 left-10 w-48 h-48 bg-[#34c759] opacity-5 blur-[70px] rounded-full"
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
          className="mb-5 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Success indicator */}
          <motion.div
            className="w-16 h-16 mx-auto mb-4 relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            {/* Pulsing rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#34c759]"
              animate={{ 
                scale: [1, 1.4, 1.4],
                opacity: [0.5, 0, 0]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-[#34c759]"
              animate={{ 
                scale: [1, 1.4, 1.4],
                opacity: [0.5, 0, 0]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            />
            
            {/* Icon */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#34c759] to-[#30b0c7] flex items-center justify-center shadow-lg shadow-[rgba(52,199,89,0.3)]">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </motion.div>

          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[rgba(52,199,89,0.15)] to-[rgba(48,176,199,0.1)] px-3 py-1.5 rounded-full border border-[rgba(52,199,89,0.3)] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-[#34c759]"
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="text-[#34c759] text-xs font-semibold uppercase tracking-wide">
              At Pickup Location
            </span>
          </motion.div>

          <h1 className="text-white text-2xl font-semibold mb-2">You've Arrived!</h1>
          <p className="text-[rgba(203,251,241,0.6)] text-sm mb-3">
            Meet with the trader to collect the shipment
          </p>

          {/* Confirmation Instruction */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[rgba(52,199,89,0.1)] border border-[rgba(52,199,89,0.3)] px-4 py-2 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <CheckCircle className="w-4 h-4 text-[#34c759]" />
            <span className="text-[rgba(203,251,241,0.8)] text-sm">
              Confirm you have arrived at the pickup location
            </span>
          </motion.div>
        </motion.div>

        {/* Location Card */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(52,199,89,0.3)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-start gap-3">
            <motion.div
              className="w-12 h-12 rounded-full bg-[rgba(52,199,89,0.2)] border border-[rgba(52,199,89,0.3)] flex items-center justify-center flex-shrink-0"
              animate={{ 
                boxShadow: ['0 0 0 0 rgba(52,199,89,0.4)', '0 0 0 8px rgba(52,199,89,0)', '0 0 0 0 rgba(52,199,89,0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <MapPin className="w-6 h-6 text-[#34c759]" />
            </motion.div>
            <div className="flex-1">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Current Location</p>
              <p className="text-white text-base font-semibold mb-0.5">{pickupData.location}</p>
              <p className="text-[rgba(203,251,241,0.5)] text-sm">{pickupData.address}</p>
            </div>
          </div>
        </motion.div>

        {/* Trader Contact Card */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.2)] to-[rgba(0,213,190,0.15)] border border-[rgba(245,158,11,0.3)] flex items-center justify-center">
                <User className="w-6 h-6 text-[#FBBF24]" />
              </div>
              <div>
                <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">Contact Person</p>
                <p className="text-white text-base font-semibold">{pickupData.traderName}</p>
                <p className="text-[rgba(203,251,241,0.5)] text-sm">{pickupData.traderPhone}</p>
              </div>
            </div>
            
            <motion.button
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d5be] to-[#00bba7] flex items-center justify-center shadow-lg shadow-[rgba(0,213,190,0.3)]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </motion.div>

        {/* Shipment Details */}
        <motion.div
          className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl p-4 mb-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Package className="w-4.5 h-4.5 text-[#00d5be]" />
            <span className="text-white text-base font-semibold">Shipment to Collect</span>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[rgba(203,251,241,0.6)] text-sm">Shipment ID</span>
              <span className="text-white text-sm font-mono">{pickupData.shipmentId}</span>
            </div>
            
            <div className="h-px bg-[rgba(0,213,190,0.1)]" />
            
            <div className="flex justify-between items-center">
              <span className="text-[rgba(203,251,241,0.6)] text-sm">Type</span>
              <span className="text-white text-sm">{pickupData.shipmentType}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[rgba(203,251,241,0.6)] text-sm">Weight</span>
              <span className="text-white text-sm font-medium">{pickupData.weight}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[rgba(203,251,241,0.6)] text-sm">Items</span>
              <span className="text-white text-sm">{pickupData.items}</span>
            </div>
          </div>
        </motion.div>

        {/* Special Instructions */}
        <motion.div
          className="bg-gradient-to-br from-[rgba(245,158,11,0.1)] to-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.3)] rounded-xl p-4 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="flex items-start gap-3">
            <Truck className="w-4.5 h-4.5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-[rgba(203,251,241,0.7)] text-xs mb-1 uppercase tracking-wide">Special Instructions</p>
              <p className="text-white text-sm">{pickupData.specialInstructions}</p>
            </div>
          </div>
        </motion.div>

        {/* Confirm Pickup Button */}
        <motion.button
          onClick={onConfirmPickup}
          className="w-full h-14 bg-gradient-to-r from-[#34c759] to-[#30b0c7] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[rgba(52,199,89,0.3)] relative overflow-hidden mb-8"
          whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(52,199,89,0.4)" }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
            animate={{ x: [-300, 300] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <CheckCircle className="w-5 h-5 text-white relative" />
          <span className="text-white text-base font-semibold relative">Confirm Pickup</span>
        </motion.button>
      </div>
    </div>
  );
}
