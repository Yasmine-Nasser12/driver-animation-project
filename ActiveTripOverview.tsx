import { motion } from 'motion/react';

interface TripData {
  status: 'In Transit';
  from: string;
  to: string;
  eta: string;
  shipmentId: string;
  progress: number;
}

export function ActiveTripOverview({ trip }: { trip: TripData }) {
  return (
    <motion.div 
      className="bg-gradient-to-br from-[rgba(0,213,190,0.12)] to-[rgba(0,187,167,0.08)] border border-[rgba(0,213,190,0.25)] rounded-2xl p-4 relative overflow-hidden"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Subtle glow effect */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d5be] opacity-5 blur-[40px] rounded-full" />
      
      <div className="relative">
        {/* Status and Shipment ID */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#00d5be]"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-[#00d5be] text-sm font-medium">{trip.status}</span>
          </div>
          <span className="text-[rgba(203,251,241,0.6)] text-xs font-mono">
            {trip.shipmentId}
          </span>
        </div>

        {/* Route */}
        <div className="space-y-3 mb-4">
          {/* From */}
          <div className="flex gap-3">
            <div className="relative pt-1">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00d5be] ring-2 ring-[#00d5be]/30" />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-0.5 h-8 bg-gradient-to-b from-[rgba(0,213,190,0.5)] to-[rgba(0,213,190,0.2)]" />
            </div>
            <div className="flex-1">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">From</p>
              <p className="text-white text-sm leading-tight">{trip.from}</p>
            </div>
          </div>

          {/* To */}
          <div className="flex gap-3">
            <div className="pt-1">
              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#00d5be] bg-[rgba(0,213,190,0.2)]" />
            </div>
            <div className="flex-1">
              <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">To</p>
              <p className="text-white text-sm leading-tight">{trip.to}</p>
            </div>
          </div>
        </div>

        {/* ETA and Progress */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">ETA</p>
            <p className="text-[#00d5be] text-lg font-semibold">{trip.eta}</p>
          </div>
          <div className="text-right">
            <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">Progress</p>
            <p className="text-white text-lg font-semibold">{trip.progress}%</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-[rgba(0,213,190,0.15)] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${trip.progress}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>
    </motion.div>
  );
}
