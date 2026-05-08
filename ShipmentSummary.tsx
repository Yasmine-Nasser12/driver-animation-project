import { motion } from 'motion/react';

interface ShipmentSummaryProps {
  clientName: string;
  shipmentType: string;
  weight: string;
  status: string;
}

export function ShipmentSummary({ clientName, shipmentType, weight, status }: ShipmentSummaryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.4 }}
    >
      <h2 className="text-white text-base font-semibold mb-3">Current Shipment</h2>
      
      <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-4">
        <div className="grid grid-cols-2 gap-4">
          {/* Client */}
          <div>
            <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Client</p>
            <p className="text-white text-sm font-medium">{clientName}</p>
          </div>
          
          {/* Status */}
          <div>
            <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Status</p>
            <div className="inline-flex items-center gap-1.5 bg-[rgba(0,213,190,0.15)] px-2 py-0.5 rounded-md">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00d5be]" />
              <span className="text-[#00d5be] text-xs font-medium">{status}</span>
            </div>
          </div>
          
          {/* Shipment Type */}
          <div>
            <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Type</p>
            <p className="text-white text-sm">{shipmentType}</p>
          </div>
          
          {/* Weight */}
          <div>
            <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Weight</p>
            <p className="text-white text-sm font-medium">{weight}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
