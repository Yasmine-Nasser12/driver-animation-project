import { motion } from 'motion/react';
import { Truck, MapPin } from 'lucide-react';

interface TripData {
  status: 'In Transit' | 'Assigned' | 'Waiting';
  origin: string;
  destination: string;
  progress: number;
  eta: string;
}

export function HeroTripSection({ trip }: { trip: TripData }) {
  return (
    <motion.div 
      className="relative pt-16 pb-8 px-6"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Status badge */}
      <motion.div 
        className="flex items-center justify-center mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.3)]">
          <div className="w-2 h-2 rounded-full bg-[#00d5be] relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-[#00d5be]"
              animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <span className="text-[#00d5be] text-sm font-medium">{trip.status}</span>
        </div>
      </motion.div>

      {/* Main hero visual */}
      <div className="relative">
        {/* Layered gradient background with asymmetric shape */}
        <div className="absolute inset-0 -mx-6">
          <div className="relative h-full">
            {/* Main gradient glow */}
            <motion.div 
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-[200px]"
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.4, 0.3]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-full h-full bg-gradient-to-br from-[#00d5be]/20 via-[#00bba7]/15 to-[#00d3f2]/10 blur-[40px] rounded-[60px]" />
            </motion.div>
          </div>
        </div>

        {/* Route visualization */}
        <div className="relative z-10 py-8">
          {/* Origin */}
          <motion.div 
            className="flex items-start gap-3 mb-6"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative mt-1">
              <div className="w-3 h-3 rounded-full bg-[#00d5be] ring-4 ring-[#00d5be]/20" />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#00d5be]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
            <div>
              <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">From</p>
              <p className="text-white text-lg">{trip.origin}</p>
            </div>
          </motion.div>

          {/* Animated route line with truck indicator */}
          <div className="relative pl-[6px] ml-[6px] mb-6">
            {/* Background line */}
            <div className="absolute left-0 top-0 w-[2px] h-full bg-gradient-to-b from-[rgba(0,213,190,0.3)] to-[rgba(0,213,190,0.1)]" />
            
            {/* Animated progress line */}
            <motion.div
              className="absolute left-0 top-0 w-[2px] bg-gradient-to-b from-[#00d5be] to-[#00d3f2]"
              initial={{ height: 0 }}
              animate={{ height: `${trip.progress}%` }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* Moving truck indicator */}
            <motion.div
              className="absolute -left-[14px]"
              initial={{ top: 0 }}
              animate={{ top: `${trip.progress}%` }}
              transition={{ delay: 0.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ 
                  y: [-2, 2, -2],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00d5be] to-[#00bba7] flex items-center justify-center shadow-lg shadow-[#00d5be]/30">
                    <Truck className="w-4 h-4 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-[#00d5be] blur-md opacity-40" />
                </div>
              </motion.div>
            </motion.div>

            {/* Route distance placeholder */}
            <div className="h-32" />
          </div>

          {/* Destination */}
          <motion.div 
            className="flex items-start gap-3"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="w-3 h-3 rounded-full border-2 border-[#00d5be] bg-[#0f2334] mt-1" />
            <div>
              <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">To</p>
              <p className="text-white text-lg">{trip.destination}</p>
            </div>
          </motion.div>
        </div>

        {/* ETA display - positioned asymmetrically */}
        <motion.div 
          className="absolute top-12 right-0 bg-[rgba(10,22,40,0.8)] backdrop-blur-sm border border-[rgba(0,213,190,0.2)] rounded-2xl px-4 py-3"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">ETA</p>
          <p className="text-[#00d5be] text-xl font-medium">{trip.eta}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
