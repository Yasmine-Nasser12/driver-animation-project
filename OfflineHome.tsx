import { motion } from 'motion/react';
import { Star, User, Navigation } from 'lucide-react';

interface OfflineHomeProps {
  onGoOnline: () => void;
}

const driverData = {
  name: 'Marcus Chen',
  rating: 4.8,
};

const activeTripData = {
  status: 'In Transit',
  shipmentId: 'SHP-4521',
  from: 'Oakland Distribution Center, CA',
  to: 'San Jose Tech Hub, CA',
  eta: '45 min',
  progress: 65,
  clientName: 'Acme Corp',
  shipmentType: 'Electronics – Fragile',
  weight: '2,400 lbs',
};

export function OfflineHome({ onGoOnline }: OfflineHomeProps) {
  return (
    <div className="min-h-screen">
      {/* Status bar space */}
      <div className="h-12" />

      {/* Header */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-[rgba(203,251,241,0.6)] text-sm mb-0.5">Welcome back</p>
            <h1 className="text-white text-xl font-semibold">{driverData.name}</h1>
          </div>
          
          <div className="flex items-center gap-2.5">
            {/* Rating */}
            <div className="flex items-center gap-1.5 bg-[rgba(0,213,190,0.15)] px-2.5 py-1.5 rounded-lg border border-[rgba(0,213,190,0.25)]">
              <Star className="w-3.5 h-3.5 fill-[#00d5be] text-[#00d5be]" />
              <span className="text-[#00d5be] text-sm font-medium">{driverData.rating}</span>
            </div>
            
            {/* Offline Badge */}
            <div className="flex items-center gap-1.5 bg-[rgba(142,142,147,0.15)] px-2.5 py-1.5 rounded-lg border border-[rgba(142,142,147,0.25)]">
              <div className="w-2 h-2 rounded-full bg-[#8e8e93]" />
              <span className="text-[#8e8e93] text-xs font-medium uppercase tracking-wide">Offline</span>
            </div>
            
            {/* Profile Icon */}
            <button className="w-9 h-9 rounded-full bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.25)] flex items-center justify-center">
              <User className="w-4.5 h-4.5 text-[#00d5be]" />
            </button>
          </div>
        </div>
      </div>

      {/* Active Trip Hero */}
      <div className="px-5 mb-4">
        <div className="bg-gradient-to-br from-[rgba(0,213,190,0.12)] to-[rgba(0,187,167,0.08)] border border-[rgba(0,213,190,0.3)] rounded-2xl p-4 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00d5be] opacity-5 blur-[30px]" />
          
          <div className="relative">
            {/* Status and Shipment ID */}
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#00d5be]"
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[#00d5be] text-sm font-medium">{activeTripData.status}</span>
              </div>
              <span className="text-[rgba(203,251,241,0.5)] text-xs font-mono tracking-wide">
                {activeTripData.shipmentId}
              </span>
            </div>

            {/* Route */}
            <div className="space-y-2.5 mb-4">
              {/* From */}
              <div className="flex gap-3">
                <div className="relative pt-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00d5be] ring-3 ring-[rgba(0,213,190,0.25)]" />
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-0.5 h-7 bg-gradient-to-b from-[rgba(0,213,190,0.5)] to-[rgba(0,213,190,0.15)]" />
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">From</p>
                  <p className="text-white text-sm leading-snug">{activeTripData.from}</p>
                </div>
              </div>

              {/* To */}
              <div className="flex gap-3">
                <div className="pt-1">
                  <div className="w-2.5 h-2.5 rounded-full border-2 border-[#00d5be] bg-[rgba(0,213,190,0.15)]" />
                </div>
                <div className="flex-1 pt-0.5">
                  <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">To</p>
                  <p className="text-white text-sm leading-snug">{activeTripData.to}</p>
                </div>
              </div>
            </div>

            {/* ETA and Progress */}
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">ETA</p>
                <p className="text-[#00d5be] text-lg font-semibold">{activeTripData.eta}</p>
              </div>
              <div className="text-right">
                <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">Progress</p>
                <p className="text-white text-lg font-semibold">{activeTripData.progress}%</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 bg-[rgba(0,213,190,0.15)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${activeTripData.progress}%` }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Primary CTA */}
      <div className="px-5 mb-5">
        <button className="w-full h-12 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl text-white font-medium flex items-center justify-center gap-2.5 shadow-lg shadow-[rgba(0,213,190,0.2)] active:scale-[0.98] transition-transform">
          <Navigation className="w-4.5 h-4.5" />
          <span>View Live Navigation</span>
        </button>
      </div>

      {/* Current Shipment Details */}
      <div className="px-5 mb-6">
        <h2 className="text-white text-base font-semibold mb-3">Current Shipment</h2>
        
        <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-4">
          <div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
            {/* Client */}
            <div>
              <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">Client</p>
              <p className="text-white text-sm font-medium">{activeTripData.clientName}</p>
            </div>
            
            {/* Weight */}
            <div>
              <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">Weight</p>
              <p className="text-white text-sm font-medium">{activeTripData.weight}</p>
            </div>
            
            {/* Shipment Type - spans full width */}
            <div className="col-span-2">
              <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1.5">Shipment Type</p>
              <div className="flex items-center gap-2">
                <p className="text-white text-sm">{activeTripData.shipmentType}</p>
              </div>
            </div>
            
            {/* Special Handling Chip */}
            <div className="col-span-2">
              <div className="inline-flex items-center gap-1.5 bg-[rgba(255,149,0,0.15)] border border-[rgba(255,149,0,0.3)] px-2.5 py-1.5 rounded-lg">
                <span className="text-[#ff9500] text-xs font-medium">⚠️ Special handling: Fragile</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary: Go Online Section */}
      <div className="px-5 mb-8">
        <div className="bg-[rgba(10,22,40,0.4)] border border-[rgba(0,213,190,0.1)] rounded-xl p-4">
          <div className="text-center mb-3">
            <p className="text-[rgba(203,251,241,0.6)] text-sm mb-1">Ready for more trips?</p>
            <p className="text-[rgba(203,251,241,0.4)] text-xs">Go online to receive new trip requests after completing this delivery</p>
          </div>
          
          <button 
            onClick={onGoOnline}
            className="w-full h-10 bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.3)] rounded-lg text-[#00d5be] text-sm font-medium active:scale-[0.98] transition-transform"
          >
            Go Online
          </button>
        </div>
      </div>
    </div>
  );
}
