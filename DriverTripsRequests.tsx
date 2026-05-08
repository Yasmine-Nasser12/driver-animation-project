import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Clock, DollarSign, Truck, User, TrendingUp, Calendar, ArrowRight, ChevronRight } from 'lucide-react';

interface DriverTripsRequestsProps {
  onViewRequestDetails: (requestId: string) => void;
  onAcceptRequest: (requestId: string) => void;
  onViewTrip: (tripId: string) => void;
}

const availableRequests = [
  {
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
    traderName: 'Mohamed Hassan Trading Co.',
    postedTime: '5 mins ago',
  },
  {
    id: 'REQ-4521',
    pickupLocation: 'Maadi Warehouse',
    pickupAddress: '78 Corniche Road, Maadi',
    dropoffLocation: 'New Cairo Industrial Zone',
    dropoffAddress: 'Zone 5, Plot 12',
    distance: '35 km',
    estimatedTime: '45 min',
    offeredPrice: '85',
    cargoType: 'Electronics',
    weight: '1,200 lbs',
    traderName: 'Ahmed Electronics',
    postedTime: '12 mins ago',
  },
  {
    id: 'REQ-4520',
    pickupLocation: '6th October City Depot',
    pickupAddress: 'Central Logistics Hub',
    dropoffLocation: 'Giza Distribution Center',
    dropoffAddress: 'Ring Road, Giza',
    distance: '28 km',
    estimatedTime: '35 min',
    offeredPrice: '65',
    cargoType: 'Food & Beverages',
    weight: '2,100 lbs',
    traderName: 'Fresh Foods Co.',
    postedTime: '18 mins ago',
  },
];

const myTrips = [
  {
    id: 'TRIP-4518',
    from: 'Cairo',
    to: 'Alexandria',
    status: 'Delivered' as const,
    earnings: '240',
    date: '2026-04-25',
    time: '14:30',
  },
  {
    id: 'TRIP-4517',
    from: 'Maadi',
    to: 'New Cairo',
    status: 'Delivered' as const,
    earnings: '85',
    date: '2026-04-25',
    time: '10:15',
  },
  {
    id: 'TRIP-4516',
    from: 'Giza',
    to: 'October',
    status: 'Delivered' as const,
    earnings: '120',
    date: '2026-04-24',
    time: '16:45',
  },
];

export function DriverTripsRequests({
  onViewRequestDetails,
  onAcceptRequest,
  onViewTrip,
}: DriverTripsRequestsProps) {
  const [activeTab, setActiveTab] = useState<'available' | 'my-trips'>('available');

  return (
    <div className="min-h-screen bg-[#0f2334] relative overflow-hidden pb-20">
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
        {/* Header */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-white text-2xl font-semibold mb-1">Trips</h1>
          <p className="text-[rgba(203,251,241,0.6)] text-sm">
            Manage your requests and active trips
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="flex gap-2 mb-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <button
            onClick={() => setActiveTab('available')}
            className={`flex-1 h-11 rounded-xl transition-all ${
              activeTab === 'available'
                ? 'bg-gradient-to-r from-[#00d5be] to-[#00bba7] shadow-lg shadow-[rgba(0,213,190,0.3)]'
                : 'bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.2)]'
            }`}
          >
            <span
              className={`text-sm font-semibold ${
                activeTab === 'available' ? 'text-white' : 'text-[rgba(203,251,241,0.6)]'
              }`}
            >
              Available Requests
            </span>
          </button>

          <button
            onClick={() => setActiveTab('my-trips')}
            className={`flex-1 h-11 rounded-xl transition-all ${
              activeTab === 'my-trips'
                ? 'bg-gradient-to-r from-[#00d5be] to-[#00bba7] shadow-lg shadow-[rgba(0,213,190,0.3)]'
                : 'bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.2)]'
            }`}
          >
            <span
              className={`text-sm font-semibold ${
                activeTab === 'my-trips' ? 'text-white' : 'text-[rgba(203,251,241,0.6)]'
              }`}
            >
              My Trips
            </span>
          </button>
        </motion.div>

        {/* Tab Content */}
        {activeTab === 'available' ? (
          <div className="space-y-4">
            {availableRequests.map((request, index) => (
              <motion.div
                key={request.id}
                className="bg-gradient-to-br from-[rgba(10,22,40,0.8)] to-[rgba(15,35,52,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.2)] rounded-2xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {/* Price Banner */}
                <div className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] px-4 py-2.5 flex items-center justify-between">
                  <span className="text-white/90 text-xs font-medium">Offered Price</span>
                  <div className="flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-white" />
                    <span className="text-white text-lg font-bold">{request.offeredPrice}</span>
                    <span className="text-white/90 text-xs">EGP</span>
                  </div>
                </div>

                <div className="p-4">
                  {/* Route */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="flex flex-col items-center gap-1 mt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#00d5be] border border-[rgba(0,213,190,0.3)]" />
                      <div className="w-0.5 h-6 bg-gradient-to-b from-[#00d5be] to-[#F59E0B] rounded-full" />
                      <MapPin className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </div>
                    <div className="flex-1">
                      <div className="mb-3">
                        <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">Pickup</p>
                        <p className="text-white text-sm font-medium">{request.pickupLocation}</p>
                      </div>
                      <div>
                        <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">Drop-off</p>
                        <p className="text-white text-sm font-medium">{request.dropoffLocation}</p>
                      </div>
                    </div>
                  </div>

                  {/* Trip Info */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.2)] rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-0.5">
                        <MapPin className="w-3 h-3 text-[#00d5be]" />
                        <span className="text-[rgba(203,251,241,0.6)] text-[10px]">Distance</span>
                      </div>
                      <p className="text-white text-xs font-semibold">{request.distance}</p>
                    </div>

                    <div className="bg-[rgba(245,158,11,0.08)] border border-[rgba(245,158,11,0.2)] rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-0.5">
                        <Clock className="w-3 h-3 text-[#F59E0B]" />
                        <span className="text-[rgba(203,251,241,0.6)] text-[10px]">Time</span>
                      </div>
                      <p className="text-white text-xs font-semibold">{request.estimatedTime}</p>
                    </div>

                    <div className="bg-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.2)] rounded-lg p-2">
                      <div className="flex items-center gap-1 mb-0.5">
                        <Truck className="w-3 h-3 text-[#00d5be]" />
                        <span className="text-[rgba(203,251,241,0.6)] text-[10px]">Weight</span>
                      </div>
                      <p className="text-white text-xs font-semibold">{request.weight}</p>
                    </div>
                  </div>

                  {/* Cargo & Trader */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">Cargo Type</p>
                      <p className="text-white text-sm">{request.cargoType}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[rgba(203,251,241,0.5)] text-xs mb-0.5">Posted</p>
                      <p className="text-[#00d5be] text-xs font-medium">{request.postedTime}</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2">
                    <motion.button
                      onClick={() => onViewRequestDetails(request.id)}
                      className="h-10 bg-[rgba(0,213,190,0.15)] border border-[rgba(0,213,190,0.3)] rounded-lg flex items-center justify-center gap-1.5"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-[#00d5be] text-sm font-medium">View Details</span>
                      <ChevronRight className="w-4 h-4 text-[#00d5be]" />
                    </motion.button>

                    <motion.button
                      onClick={() => onAcceptRequest(request.id)}
                      className="h-10 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-lg flex items-center justify-center gap-1.5 shadow-md shadow-[rgba(0,213,190,0.2)]"
                      whileHover={{ scale: 1.02, boxShadow: "0 4px 16px rgba(0,213,190,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-white text-sm font-semibold">Accept</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {myTrips.map((trip, index) => (
              <motion.div
                key={trip.id}
                className="bg-[rgba(10,22,40,0.8)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[rgba(52,199,89,0.15)] border border-[rgba(52,199,89,0.3)] flex items-center justify-center">
                      <Truck className="w-4 h-4 text-[#34c759]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">{trip.from}</span>
                        <ArrowRight className="w-3 h-3 text-[rgba(203,251,241,0.4)]" />
                        <span className="text-white text-sm font-medium">{trip.to}</span>
                      </div>
                      <p className="text-[rgba(203,251,241,0.5)] text-xs mt-0.5">{trip.id}</p>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1 bg-[rgba(52,199,89,0.15)] border border-[rgba(52,199,89,0.3)] px-2 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                    <span className="text-[#34c759] text-xs font-medium">{trip.status}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <DollarSign className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span className="text-white text-sm font-semibold">{trip.earnings} EGP</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[rgba(203,251,241,0.5)]" />
                      <span className="text-[rgba(203,251,241,0.6)] text-xs">{trip.date}</span>
                    </div>
                  </div>

                  <motion.button
                    onClick={() => onViewTrip(trip.id)}
                    className="text-[#00d5be] text-xs font-medium flex items-center gap-1"
                    whileHover={{ x: 2 }}
                  >
                    View
                    <ChevronRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
