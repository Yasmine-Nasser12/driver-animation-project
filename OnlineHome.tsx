import { useState } from 'react';
import { motion } from 'motion/react';
import { Star, User, MapPin, Truck, MessageCircle, TrendingUp } from 'lucide-react';

interface OnlineHomeProps {
  onGoOffline: () => void;
}

const driverData = {
  name: 'Marcus Chen',
  rating: 4.8,
};

const todayData = {
  tripsCompleted: 4,
  earnings: 385.50,
  onlineTime: '6h 24m',
};

const recentTrips = [
  {
    id: 'SHP-4519',
    from: 'Downtown Hub',
    to: 'Westside Plaza',
    status: 'Completed',
    time: '2h ago',
  },
  {
    id: 'SHP-4518',
    from: 'North Station',
    to: 'Airport Terminal',
    status: 'Completed',
    time: '4h ago',
  },
];

// Mock incoming offer
const incomingOffer = {
  from: 'Oakland Distribution Center',
  to: 'San Francisco Bay Area',
  distance: '28 miles',
  estimatedTime: '45 min',
  payout: '$52.00',
};

export function OnlineHome({ onGoOffline }: OnlineHomeProps) {
  const [hasOffer, setHasOffer] = useState(false);

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
            
            {/* Online Badge */}
            <div className="flex items-center gap-1.5 bg-[rgba(52,199,89,0.15)] px-2.5 py-1.5 rounded-lg border border-[rgba(52,199,89,0.3)]">
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#34c759]"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="text-[#34c759] text-xs font-medium uppercase tracking-wide">Online</span>
            </div>
            
            {/* Profile Icon */}
            <button className="w-9 h-9 rounded-full bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.25)] flex items-center justify-center">
              <User className="w-4.5 h-4.5 text-[#00d5be]" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Online Hero - Waiting State */}
      <div className="px-5 mb-4">
        <div className="bg-gradient-to-br from-[rgba(52,199,89,0.12)] to-[rgba(48,176,199,0.08)] border border-[rgba(52,199,89,0.3)] rounded-2xl p-5 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#34c759] opacity-5 blur-[40px]" />
          
          <div className="relative text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#34c759] to-[#30b0c7] flex items-center justify-center shadow-lg shadow-[rgba(52,199,89,0.3)]"
            >
              <Truck className="w-6 h-6 text-white" />
            </motion.div>
            
            <h2 className="text-white text-lg font-semibold mb-1">You're Online</h2>
            <p className="text-[rgba(203,251,241,0.6)] text-sm mb-3">Waiting for new trip requests</p>
            
            <div className="inline-flex items-center gap-2 bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] px-3 py-1.5 rounded-lg">
              <MapPin className="w-3.5 h-3.5 text-[#00d5be]" />
              <span className="text-[rgba(203,251,241,0.7)] text-xs">Zone: Downtown Area</span>
            </div>
          </div>
        </div>
      </div>

      {/* Go Offline Button */}
      <div className="px-5 mb-5">
        <button 
          onClick={onGoOffline}
          className="w-full h-10 bg-[rgba(142,142,147,0.2)] border border-[rgba(142,142,147,0.3)] rounded-lg text-[#8e8e93] text-sm font-medium active:scale-[0.98] transition-transform"
        >
          Go Offline
        </button>
      </div>

      {/* Incoming Trip Area */}
      <div className="px-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white text-base font-semibold">Incoming Trips</h2>
          <button 
            onClick={() => setHasOffer(!hasOffer)}
            className="text-[#00d5be] text-xs"
          >
            {hasOffer ? 'Hide' : 'Show'} Offer
          </button>
        </div>
        
        {!hasOffer ? (
          <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-5 text-center">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-[rgba(0,213,190,0.1)] flex items-center justify-center">
              <Truck className="w-6 h-6 text-[rgba(0,213,190,0.5)]" />
            </div>
            <p className="text-[rgba(203,251,241,0.7)] text-sm mb-1">No trip requests right now</p>
            <p className="text-[rgba(203,251,241,0.5)] text-xs">Stay online to receive nearby shipments</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-br from-[rgba(0,213,190,0.15)] to-[rgba(0,187,167,0.1)] border-2 border-[#00d5be] rounded-xl p-4 relative overflow-hidden"
          >
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 bg-[#00d5be] rounded-xl"
              animate={{ opacity: [0.1, 0.05, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[#00d5be] text-xs font-semibold uppercase tracking-wide">New Trip Request</span>
                <span className="text-white text-sm font-semibold">{incomingOffer.payout}</span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-[#00d5be] mt-1.5" />
                  <div className="flex-1">
                    <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">Pickup</p>
                    <p className="text-white text-sm">{incomingOffer.from}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full border-2 border-[#00d5be] mt-1.5" />
                  <div className="flex-1">
                    <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">Drop-off</p>
                    <p className="text-white text-sm">{incomingOffer.to}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 mb-4 text-xs text-[rgba(203,251,241,0.7)]">
                <span>{incomingOffer.distance}</span>
                <span>•</span>
                <span>{incomingOffer.estimatedTime}</span>
              </div>
              
              <div className="flex gap-2.5">
                <button className="flex-1 h-10 bg-[rgba(142,142,147,0.2)] border border-[rgba(142,142,147,0.3)] rounded-lg text-white text-sm font-medium active:scale-[0.98] transition-transform">
                  Decline
                </button>
                <button className="flex-1 h-10 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-lg text-white text-sm font-medium shadow-md active:scale-[0.98] transition-transform">
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Today Summary */}
      <div className="px-5 mb-5">
        <h2 className="text-white text-base font-semibold mb-3">Today</h2>
        
        <div className="grid grid-cols-3 gap-2.5">
          <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3">
            <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1.5">Trips</p>
            <p className="text-white text-xl font-semibold">{todayData.tripsCompleted}</p>
          </div>
          
          <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3">
            <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1.5">Earnings</p>
            <p className="text-white text-lg font-semibold">${todayData.earnings}</p>
          </div>
          
          <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3">
            <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1.5">Online</p>
            <p className="text-white text-lg font-semibold">{todayData.onlineTime}</p>
          </div>
        </div>
      </div>

      {/* Quick Access */}
      <div className="px-5 mb-5">
        <div className="flex items-center gap-2.5">
          <button className="flex-1 h-12 bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <Truck className="w-4.5 h-4.5 text-[#00d5be]" />
            <span className="text-white text-sm font-medium">Trips</span>
          </button>
          
          <button className="flex-1 h-12 bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <TrendingUp className="w-4.5 h-4.5 text-[#00d5be]" />
            <span className="text-white text-sm font-medium">Earnings</span>
          </button>
          
          <button className="flex-1 h-12 bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl flex items-center justify-center gap-2 active:scale-[0.98] transition-transform">
            <MessageCircle className="w-4.5 h-4.5 text-[#00d5be]" />
            <span className="text-white text-sm font-medium">Support</span>
          </button>
        </div>
      </div>

      {/* Recent Trips Preview */}
      <div className="px-5 mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white text-base font-semibold">Recent Trips</h2>
          <button className="text-[#00d5be] text-xs font-medium">View all</button>
        </div>
        
        <div className="space-y-2.5">
          {recentTrips.map((trip) => (
            <div 
              key={trip.id}
              className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3.5"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[rgba(203,251,241,0.5)] text-xs font-mono">{trip.id}</span>
                <span className="text-[rgba(203,251,241,0.5)] text-xs">{trip.time}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <p className="text-white text-sm mb-0.5">{trip.from} → {trip.to}</p>
                  <div className="inline-flex items-center gap-1.5 bg-[rgba(52,199,89,0.15)] px-2 py-0.5 rounded">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                    <span className="text-[#34c759] text-xs font-medium">{trip.status}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
