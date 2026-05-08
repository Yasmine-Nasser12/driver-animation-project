import { motion } from 'motion/react';
import { Package, User, Hash } from 'lucide-react';

interface TripData {
  origin: string;
  destination: string;
  clientName: string;
  shipmentType: string;
  shipmentId: string;
  progress: number;
}

export function TripSnapshot({ trip }: { trip: TripData }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.6 }}
    >
      <h3 className="text-[rgba(203,251,241,0.5)] text-xs uppercase tracking-wider mb-4">
        Trip Details
      </h3>
      
      <div className="space-y-4">
        {/* Client */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.2)] flex items-center justify-center shrink-0">
            <User className="w-4 h-4 text-[#00d5be]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[rgba(203,251,241,0.5)] text-xs">Client</p>
            <p className="text-white">{trip.clientName}</p>
          </div>
        </div>

        {/* Shipment Type */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.2)] flex items-center justify-center shrink-0">
            <Package className="w-4 h-4 text-[#00d5be]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[rgba(203,251,241,0.5)] text-xs">Shipment Type</p>
            <p className="text-white">{trip.shipmentType}</p>
          </div>
        </div>

        {/* Shipment ID */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.2)] flex items-center justify-center shrink-0">
            <Hash className="w-4 h-4 text-[#00d5be]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[rgba(203,251,241,0.5)] text-xs">Shipment ID</p>
            <p className="text-white font-mono text-sm">{trip.shipmentId}</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[rgba(203,251,241,0.5)] text-xs">Progress</p>
            <p className="text-[#00d5be] text-sm font-medium">{trip.progress}%</p>
          </div>
          <div className="h-1.5 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#00d5be] to-[#00d3f2] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${trip.progress}%` }}
              transition={{ delay: 1.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
