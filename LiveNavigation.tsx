import { motion } from 'motion/react';
import { ArrowLeft, Navigation, Phone, AlertCircle, Maximize2 } from 'lucide-react';
import { useState } from 'react';

interface LiveNavigationProps {
  onEndTrip: () => void;
  onGoBack: () => void;
}

const tripData = {
  shipmentId: 'SHP-4521',
  from: 'Maadi Distribution Center',
  to: 'New Cairo Tech Hub',
  eta: '38 min',
  distance: '12.4 mi',
  nextTurn: 'Turn right on Ring Road',
  nextTurnDistance: '0.5 mi',
};

export function LiveNavigation({ onEndTrip, onGoBack }: LiveNavigationProps) {
  const [showEndTripConfirm, setShowEndTripConfirm] = useState(false);

  const handleEndTrip = () => {
    setShowEndTripConfirm(true);
  };

  const confirmEndTrip = () => {
    onEndTrip();
  };

  return (
    <div className="min-h-screen bg-[#0f2334] relative">
      {/* Status bar space */}
      <div className="h-12" />

      {/* Map Area (Full Screen) */}
      <div className="relative h-[calc(100vh-3rem)]">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2f42] via-[#0f2334] to-[#162838]">
          {/* Grid overlay to simulate map */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-12 h-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="border border-[#00d5be]" />
              ))}
            </div>
          </div>

          {/* Route Path Simulation */}
          <svg className="absolute inset-0 w-full h-full">
            <motion.path
              d="M 100 600 Q 150 400, 200 350 T 280 200"
              stroke="#00d5be"
              strokeWidth="6"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 0.65 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            
            {/* Driver location (moving dot) */}
            <motion.circle
              cx="280"
              cy="200"
              r="8"
              fill="#00d5be"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <circle cx="280" cy="200" r="18" fill="none" stroke="#00d5be" strokeWidth="2" opacity="0.3" />
            
            {/* Destination marker */}
            <circle cx="200" cy="350" r="6" fill="#ff6b6b" opacity="0.8" />
            <circle cx="200" cy="350" r="12" fill="none" stroke="#ff6b6b" strokeWidth="2" opacity="0.5" />
          </svg>

          {/* Location pins overlay */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00d5be] to-[#00bba7] flex items-center justify-center shadow-xl shadow-[rgba(0,213,190,0.4)]"
            >
              <Navigation className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>

        {/* Top Controls */}
        <div className="absolute top-5 left-0 right-0 px-5 z-10">
          <div className="flex items-center justify-between">
            <button 
              onClick={onGoBack}
              className="w-10 h-10 rounded-full bg-[rgba(15,35,52,0.95)] backdrop-blur-md border border-[rgba(0,213,190,0.3)] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-[rgba(15,35,52,0.95)] backdrop-blur-md border border-[rgba(0,213,190,0.3)] flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                <Maximize2 className="w-4.5 h-4.5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Next Turn Card */}
        <div className="absolute top-20 left-5 right-5 z-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-[rgba(15,35,52,0.98)] backdrop-blur-xl border border-[rgba(0,213,190,0.3)] rounded-2xl p-4 shadow-xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00d5be] to-[#00bba7] flex items-center justify-center">
                <Navigation className="w-6 h-6 text-white rotate-90" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-semibold mb-0.5">{tripData.nextTurn}</p>
                <p className="text-[rgba(203,251,241,0.6)] text-xs">in {tripData.nextTurnDistance}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Info Card */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <div className="bg-gradient-to-t from-[#0f2334] via-[#0f2334] to-transparent pt-8 pb-5 px-5">
            <div className="bg-[rgba(15,35,52,0.98)] backdrop-blur-xl border border-[rgba(0,213,190,0.3)] rounded-3xl p-5 shadow-2xl">
              {/* Trip Info */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">ETA</p>
                  <p className="text-[#00d5be] text-2xl font-bold">{tripData.eta}</p>
                </div>
                <div className="text-right">
                  <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">Distance</p>
                  <p className="text-white text-2xl font-bold">{tripData.distance}</p>
                </div>
              </div>

              <div className="h-px bg-[rgba(0,213,190,0.15)] mb-4" />

              {/* Destination */}
              <div className="mb-4">
                <p className="text-[rgba(203,251,241,0.5)] text-xs mb-2">Destination</p>
                <p className="text-white text-sm font-medium leading-snug">{tripData.to}</p>
                <p className="text-[rgba(203,251,241,0.5)] text-xs mt-1 font-mono">{tripData.shipmentId}</p>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-2 gap-3">
                <button className="h-12 bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.3)] rounded-xl text-[#00d5be] text-sm font-medium flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  <Phone className="w-4 h-4" />
                  <span>Contact</span>
                </button>

                <button 
                  onClick={handleEndTrip}
                  className="h-12 bg-gradient-to-r from-[#ff6b6b] to-[#ee5a52] rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[rgba(255,107,107,0.3)] active:scale-95 transition-transform"
                >
                  <AlertCircle className="w-4 h-4" />
                  <span>End Trip</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End Trip Confirmation Modal */}
      {showEndTripConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-5"
          onClick={() => setShowEndTripConfirm(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0f2334] border border-[rgba(0,213,190,0.3)] rounded-3xl p-6 w-full max-w-sm shadow-2xl"
          >
            <div className="text-center mb-5">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#ff6b6b] to-[#ee5a52] flex items-center justify-center">
                <AlertCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-white text-xl font-bold mb-2">Complete Trip?</h2>
              <p className="text-[rgba(203,251,241,0.6)] text-sm">
                Confirm that you have successfully delivered the shipment to {tripData.to}.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={confirmEndTrip}
                className="w-full h-12 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl text-white font-semibold shadow-lg shadow-[rgba(0,213,190,0.3)] active:scale-98 transition-transform"
              >
                Yes, Complete Trip
              </button>
              <button
                onClick={() => setShowEndTripConfirm(false)}
                className="w-full h-12 bg-[rgba(142,142,147,0.2)] border border-[rgba(142,142,147,0.3)] rounded-xl text-[rgba(203,251,241,0.8)] font-medium active:scale-98 transition-transform"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}