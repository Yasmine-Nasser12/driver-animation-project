import { motion, AnimatePresence } from 'motion/react';
import { Star, User, Navigation, MapPin, Truck, Play, TrendingUp, Clock, DollarSign, Radio, ArrowDownLeft, Inbox } from 'lucide-react';
import { useState } from 'react';

type TripStatus = 'none' | 'assigned' | 'in-transit' | 'completed';

interface DriverHomeProps {
  isOnline: boolean;
  onToggleOnline: () => void;
  tripStatus: TripStatus;
  onStartTrip: () => void;
  onViewLiveNavigation: () => void;
  onViewAllTrips?: () => void;
}

const driverData = {
  name: 'Ahmed Adel',
  rating: 4.8,
};

const assignedTripData = {
  pickupLocation: 'Maadi Distribution Center, Cairo',
  dropoffLocation: 'New Cairo Tech Hub, Cairo',
  scheduledStart: 'Ready to start',
  shipmentId: 'SHP-4521',
  clientName: 'El-Ezz Steel',
  shipmentType: 'Electronics – Fragile',
  weight: '2,400 lbs',
};

const inTransitTripData = {
  shipmentId: 'SHP-4521',
  from: 'Maadi Distribution Center, Cairo',
  to: 'New Cairo Tech Hub, Cairo',
  eta: '45 min',
  progress: 65,
  clientName: 'El-Ezz Steel',
  shipmentType: 'Electronics – Fragile',
  weight: '2,400 lbs',
};

const todayData = {
  tripsCompleted: 4,
  earnings: 385.50,
  onlineTime: '6h 24m',
};

const recentTrips = [
  {
    id: 'SHP-4519',
    from: 'Nasr City Hub',
    to: 'Heliopolis Plaza',
    status: 'Completed',
    date: 'Jan 30, 2026',
    time: '2:30 PM',
  },
  {
    id: 'SHP-4518',
    from: 'Zamalek Station',
    to: '6th of October Terminal',
    status: 'Completed',
    date: 'Jan 30, 2026',
    time: '11:15 AM',
  },
];

const incomingOffer = {
  from: 'Sheikh Zayed Distribution Center',
  to: 'Obour Industrial Area',
  distance: '28 miles',
  estimatedTime: '45 min',
  payout: '520 EGP',
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2
    }
  }
};

const floatVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotateVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

const slideVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20
    }
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Status chip component
function StatusChip({ status }: { status: TripStatus }) {
  if (status === 'none' || status === 'completed') {
    return (
      <div className="inline-flex items-center gap-1.5 bg-[rgba(142,142,147,0.15)] px-2.5 py-1 rounded-lg border border-[rgba(142,142,147,0.25)]">
        <span className="text-[rgba(142,142,147,0.8)] text-xs">No Active Trip</span>
      </div>
    );
  }
  
  if (status === 'assigned') {
    return (
      <div className="inline-flex items-center gap-1.5 bg-[rgba(0,213,190,0.15)] px-2.5 py-1 rounded-lg border border-[rgba(0,213,190,0.3)]">
        <span className="text-[#00d5be] text-xs font-medium">Assigned</span>
      </div>
    );
  }
  
  return (
    <div className="inline-flex items-center gap-1.5 bg-[rgba(0,213,190,0.15)] px-2.5 py-1 rounded-lg border border-[rgba(0,213,190,0.3)]">
      <motion.div 
        className="w-1.5 h-1.5 rounded-full bg-[#00d5be]"
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="text-[#00d5be] text-xs font-medium">In Transit</span>
    </div>
  );
}

export function DriverHome({ isOnline, onToggleOnline, tripStatus, onStartTrip, onViewLiveNavigation, onViewAllTrips }: DriverHomeProps) {
  const [showOffer, setShowOffer] = useState(false);

  // Determine which case we're in
  const isNoTrip = tripStatus === 'none' || tripStatus === 'completed';
  const isAssigned = tripStatus === 'assigned';
  const isInTransit = tripStatus === 'in-transit';
  const isCompleted = tripStatus === 'completed';

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-[#F59E0B] opacity-5 blur-[80px] rounded-full"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 left-10 w-48 h-48 bg-[#00d5be] opacity-5 blur-[70px] rounded-full"
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-32 right-20 w-56 h-56 bg-[#FBBF24] opacity-5 blur-[75px] rounded-full"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      {/* Status bar space */}
      <div className="h-12 relative" />

      {/* Header */}
      <motion.div 
        className="px-5 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex-1">
            <motion.p 
              className="text-[rgba(203,251,241,0.6)] text-sm mb-0.5"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome back
            </motion.p>
            <motion.h1 
              className="text-white text-xl font-semibold relative inline-block"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {driverData.name}
              {/* Animated gradient underline */}
              <motion.div
                className="absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-[#F59E0B] via-[#00d5be] to-transparent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              />
            </motion.h1>
          </div>
          
          <div className="flex items-center gap-2.5">
            {/* Rating */}
            <motion.div 
              className="flex items-center gap-1.5 bg-gradient-to-br from-[rgba(201,160,99,0.12)] to-[rgba(0,213,190,0.08)] px-2.5 py-1.5 rounded-lg border border-[rgba(201,160,99,0.25)] relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(201,160,99,0.35)" }}
            >
              {/* Subtle pulsing glow effect */}
              <motion.div
                className="absolute inset-0 bg-[#C9A063] rounded-lg"
                animate={{ opacity: [0, 0.06, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Star className="w-3.5 h-3.5 fill-[#C9A063] text-[#C9A063]" />
              </motion.div>
              <span className="text-[#D4B589] text-sm font-medium relative">{driverData.rating}</span>
            </motion.div>
            
            {/* Availability Badge */}
            <AnimatePresence mode="wait">
            {isOnline ? (
              <motion.div 
                key="online-badge"
                className="flex items-center gap-1.5 bg-[rgba(52,199,89,0.15)] px-2.5 py-1.5 rounded-lg border border-[rgba(52,199,89,0.3)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div 
                  className="w-2 h-2 rounded-full bg-[#34c759]"
                  animate={{ opacity: [1, 0.4, 1], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-[#34c759] text-xs font-medium uppercase tracking-wide">Online</span>
              </motion.div>
            ) : (
              <motion.div 
                key="offline-badge"
                className="flex items-center gap-1.5 bg-[rgba(142,142,147,0.15)] px-2.5 py-1.5 rounded-lg border border-[rgba(142,142,147,0.25)]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#8e8e93]" />
                <span className="text-[#8e8e93] text-xs font-medium uppercase tracking-wide">Offline</span>
              </motion.div>
            )}
            </AnimatePresence>
            
            {/* Profile Icon */}
            <motion.button 
              className="w-9 h-9 rounded-full bg-gradient-to-br from-[rgba(245,158,11,0.2)] to-[rgba(0,213,190,0.15)] border border-[rgba(245,158,11,0.3)] flex items-center justify-center relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Rotating gradient background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] to-[#00d5be] opacity-0"
                whileHover={{ opacity: 0.2, rotate: 90 }}
                transition={{ duration: 0.3 }}
              />
              <User className="w-4.5 h-4.5 text-[#FBBF24] relative" />
            </motion.button>
          </div>
        </div>

        {/* Status Chip (System State) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <StatusChip status={tripStatus} />
        </motion.div>
      </motion.div>

      {/* CASE 1: No Active Trip + OFFLINE */}
      <AnimatePresence mode="wait">
      {isNoTrip && !isOnline && (
        <motion.div
          key="offline-state"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Offline Hero */}
          <motion.div variants={itemVariants} className="px-5 mb-5">
            <div className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-2xl p-6 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-[rgba(142,142,147,0.1)] rounded-full blur-3xl" />
              
              {/* Floating particles */}
              <motion.div
                className="absolute top-4 right-8 w-1.5 h-1.5 rounded-full bg-[rgba(245,158,11,0.4)]"
                animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute top-8 right-16 w-1 h-1 rounded-full bg-[rgba(0,213,190,0.4)]"
                animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.div
                className="absolute bottom-6 left-10 w-1 h-1 rounded-full bg-[rgba(251,191,36,0.4)]"
                animate={{ y: [0, -10, 0], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
              
              <div className="relative">
                <motion.div 
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-[rgba(142,142,147,0.15)] flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Truck className="w-8 h-8 text-[rgba(142,142,147,0.5)]" />
                </motion.div>
                <h2 className="text-white text-lg font-semibold mb-2">You're Offline</h2>
                <p className="text-[rgba(203,251,241,0.5)] text-sm mb-4">
                  You're not receiving new trips
                </p>
                
                <motion.button 
                  onClick={onToggleOnline}
                  className="w-full h-12 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-xl text-white font-medium shadow-lg shadow-[rgba(0,213,190,0.2)] relative overflow-hidden"
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(0,213,190,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Animated gold gradient sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(245,158,11,0.15)] to-transparent"
                    animate={{ x: [-300, 300] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative">Go Online</span>
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Recent Trips */}
          <motion.div variants={itemVariants} className="px-5 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white text-base font-semibold">Recent Trips</h2>
              <button onClick={onViewAllTrips} className="text-[#00d5be] text-xs font-medium">View all</button>
            </div>
            
            <div className="space-y-2.5">
              {recentTrips.slice(0, 2).map((trip, index) => (
                <motion.div 
                  key={trip.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-3.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[rgba(203,251,241,0.5)] text-xs font-mono">{trip.id}</span>
                    <span className="text-[rgba(203,251,241,0.5)] text-xs">{trip.date}</span>
                  </div>
                  
                  <p className="text-white text-sm mb-1.5">{trip.from} → {trip.to}</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 bg-[rgba(52,199,89,0.15)] px-2 py-0.5 rounded">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                      <span className="text-[#34c759] text-xs font-medium">{trip.status}</span>
                    </div>
                    <span className="text-[rgba(203,251,241,0.5)] text-xs">{trip.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* CASE 2: No Active Trip + ONLINE */}
      <AnimatePresence mode="wait">
      {isNoTrip && isOnline && (
        <motion.div
          key="online-state"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Online Hero */}
          <motion.div variants={itemVariants} className="px-5 mb-4">
            <div className="bg-gradient-to-br from-[rgba(52,199,89,0.12)] to-[rgba(48,176,199,0.08)] border border-[rgba(52,199,89,0.3)] rounded-2xl p-5 relative overflow-hidden">
              {/* Multiple glow orbs for depth */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-[#34c759] opacity-5 blur-[40px]"
                animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-24 h-24 bg-[#30b0c7] opacity-5 blur-[35px]"
                animate={{ x: [0, -8, 0], y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative text-center">
                {/* Live Broadcasting Truck with Radio Waves */}
                <div className="relative w-12 h-12 mx-auto mb-3">
                  {/* Pulsing radio wave rings - outer */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#34c759]"
                    animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                  {/* Pulsing radio wave rings - middle */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#34c759]"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
                  />
                  {/* Pulsing radio wave rings - inner */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-[#34c759]"
                    animate={{ scale: [1, 1.3], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.6 }}
                  />
                  
                  {/* Central Radio icon - Broadcasting availability */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 2, 0, -2, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#34c759] to-[#30b0c7] flex items-center justify-center shadow-lg shadow-[rgba(52,199,89,0.3)]"
                  >
                    <Radio className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
                
                <h2 className="text-white text-lg font-semibold mb-1">You're Online</h2>
                <p className="text-[rgba(203,251,241,0.6)] text-sm mb-3">Waiting for new trip requests</p>
                
                <motion.div 
                  className="inline-flex items-center gap-2 bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] px-3 py-1.5 rounded-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <MapPin className="w-3.5 h-3.5 text-[#00d5be]" />
                  <span className="text-[rgba(203,251,241,0.7)] text-xs">Zone: Downtown Area</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Go Offline Button */}
          <motion.div variants={itemVariants} className="px-5 mb-5">
            <motion.button 
              onClick={onToggleOnline}
              className="w-full h-10 bg-[rgba(142,142,147,0.2)] border border-[rgba(142,142,147,0.3)] rounded-lg text-[#8e8e93] text-sm font-medium"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              Go Offline
            </motion.button>
          </motion.div>

          {/* Offers Area */}
          <motion.div variants={itemVariants} className="px-5 mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white text-base font-semibold">Incoming Trips</h2>
              <motion.button 
                onClick={() => setShowOffer(!showOffer)}
                className="text-[#00d5be] text-xs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showOffer ? 'Hide' : 'Show'} Offer
              </motion.button>
            </div>
            
            <AnimatePresence mode="wait">
            {!showOffer ? (
              <motion.div 
                key="no-offers"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-5 text-center"
              >
                {/* Truck with incoming arrow indicator */}
                <div className="relative w-12 h-12 mx-auto mb-3">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-[rgba(0,213,190,0.1)] flex items-center justify-center"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Inbox className="w-6 h-6 text-[rgba(0,213,190,0.5)]" />
                  </motion.div>
                  
                  {/* Directional arrow indicator - top right */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-5 h-5 bg-[rgba(0,213,190,0.2)] rounded-full flex items-center justify-center border border-[rgba(0,213,190,0.3)]"
                    animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowDownLeft className="w-3 h-3 text-[#00d5be]" />
                  </motion.div>
                </div>
                <p className="text-[rgba(203,251,241,0.7)] text-sm mb-1">No trips available right now</p>
                <p className="text-[rgba(203,251,241,0.5)] text-xs">Stay online to receive nearby shipments</p>
              </motion.div>
            ) : (
              <motion.div
                key="offer-card"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="bg-gradient-to-br from-[rgba(0,213,190,0.15)] via-[rgba(245,158,11,0.08)] to-[rgba(0,187,167,0.1)] border-2 border-[#00d5be] rounded-xl p-4 relative overflow-hidden"
              >
                {/* Multiple animated gradient layers */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#00d5be] to-[#F59E0B] rounded-xl"
                  animate={{ opacity: [0.1, 0.05, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tl from-[#F59E0B] to-transparent rounded-xl"
                  animate={{ opacity: [0, 0.08, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                />
                
                {/* Enhanced animated particles */}
                <motion.div
                  className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-[#F59E0B]"
                  animate={{ y: [0, -12, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                />
                <motion.div
                  className="absolute top-4 right-12 w-1 h-1 rounded-full bg-[#00d5be]"
                  animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: 0.3 }}
                />
                <motion.div
                  className="absolute top-6 right-20 w-1 h-1 rounded-full bg-[#FBBF24]"
                  animate={{ y: [0, -10, 0], opacity: [0.3, 0.9, 0.3] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 0.6 }}
                />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <motion.span 
                      className="text-[#00d5be] text-xs font-semibold uppercase tracking-wide"
                      animate={{ opacity: [1, 0.7, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      New Trip Request
                    </motion.span>
                    <motion.span 
                      className="text-white text-sm font-semibold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      {incomingOffer.payout}
                    </motion.span>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <motion.div 
                      className="flex items-start gap-2.5"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-[#00d5be] mt-1.5" />
                      <div className="flex-1">
                        <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">From</p>
                        <p className="text-white text-sm">{incomingOffer.from}</p>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="flex items-start gap-2.5"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <div className="w-2 h-2 rounded-full border-2 border-[#00d5be] mt-1.5" />
                      <div className="flex-1">
                        <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">To</p>
                        <p className="text-white text-sm">{incomingOffer.to}</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="flex items-center gap-4 mb-4 text-xs text-[rgba(203,251,241,0.7)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span>{incomingOffer.distance}</span>
                    <span>•</span>
                    <span>{incomingOffer.estimatedTime}</span>
                  </motion.div>
                  
                  <motion.button 
                    className="w-full h-10 bg-gradient-to-r from-[#F59E0B] via-[#00d5be] to-[#00bba7] rounded-lg text-white text-sm font-medium shadow-md relative overflow-hidden"
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 16px rgba(245,158,11,0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <span className="relative">View Offer</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>

          {/* Today Summary */}
          <motion.div variants={itemVariants} className="px-5 mb-5">
            <h2 className="text-white text-base font-semibold mb-3">Today</h2>
            
            <div className="space-y-2.5">
              {[
                { label: "Trips completed", value: todayData.tripsCompleted, icon: TrendingUp, color: "#F59E0B" },
                { label: "Earnings", value: `${todayData.earnings} EGP`, icon: DollarSign, color: "#00d5be" },
                { label: "Online time", value: todayData.onlineTime, icon: Clock, color: "#FBBF24" }
              ].map((item, index) => (
                <motion.div 
                  key={item.label}
                  className="flex items-center justify-between bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-3 relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4, borderColor: index === 0 ? "rgba(245,158,11,0.3)" : "rgba(0,213,190,0.3)" }}
                >
                  {/* Subtle glow on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl"
                    style={{ background: `radial-gradient(circle at left, ${item.color}15, transparent)` }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="flex items-center gap-2 relative">
                    <motion.div
                      animate={{ rotate: index === 0 ? [0, 5, -5, 0] : 0 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </motion.div>
                    <span className="text-[rgba(203,251,241,0.5)] text-sm">{item.label}</span>
                  </div>
                  <motion.span 
                    className="text-white text-lg font-semibold relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.6 + index * 0.1 }}
                  >
                    {item.value}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recent Trips */}
          <motion.div variants={itemVariants} className="px-5 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white text-base font-semibold">Recent Trips</h2>
              <button onClick={onViewAllTrips} className="text-[#00d5be] text-xs font-medium">View all</button>
            </div>
            
            <div className="space-y-2.5">
              {recentTrips.slice(0, 1).map((trip, index) => (
                <motion.div 
                  key={trip.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  whileHover={{ x: 4, borderColor: "rgba(245,158,11,0.3)" }}
                  className="bg-[rgba(10,22,40,0.6)] backdrop-blur-md border border-[rgba(0,213,190,0.15)] rounded-xl p-3.5 relative overflow-hidden"
                >
                  {/* Subtle gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[rgba(245,158,11,0.05)] to-transparent rounded-xl"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[rgba(203,251,241,0.5)] text-xs font-mono">{trip.id}</span>
                    <span className="text-[rgba(203,251,241,0.5)] text-xs">{trip.date}</span>
                  </div>
                  
                  <p className="text-white text-sm mb-1.5">{trip.from} → {trip.to}</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 bg-[rgba(52,199,89,0.15)] px-2 py-0.5 rounded">
                      <motion.div 
                        className="w-1.5 h-1.5 rounded-full bg-[#34c759]"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-[#34c759] text-xs font-medium">{trip.status}</span>
                    </div>
                    <span className="text-[rgba(203,251,241,0.5)] text-xs">{trip.time}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>

      {/* CASE 3 & 4: Trip Assigned (both OFFLINE and ONLINE) */}
      {isAssigned && (
        <>
          {/* Assigned Trip Layout - Static & Informational */}
          <div className="px-5 mb-6">
            {/* Trip Summary Card - Distinct Layout */}
            <div className="bg-[rgba(10,22,40,0.8)] border border-[rgba(0,213,190,0.2)] rounded-3xl overflow-hidden">
              {/* Header Strip */}
              <div className="bg-gradient-to-r from-[rgba(0,213,190,0.15)] to-[rgba(0,187,167,0.1)] px-5 py-3 border-b border-[rgba(0,213,190,0.15)]">
                <div className="flex items-center justify-between">
                  <span className="text-[#00d5be] text-sm font-semibold">Trip Ready to Start</span>
                  <span className="text-[rgba(203,251,241,0.5)] text-xs font-mono">{assignedTripData.shipmentId}</span>
                </div>
              </div>

              {/* Main Content - Structured Sections */}
              <div className="p-5 space-y-5">
                {/* Route Section */}
                <div>
                  <p className="text-[rgba(203,251,241,0.5)] text-xs uppercase tracking-wider mb-3">Route</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(0,213,190,0.2)] border-2 border-[#00d5be] flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2 h-2 rounded-full bg-[#00d5be]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Pickup Location</p>
                        <p className="text-white text-base font-medium leading-snug">{assignedTripData.pickupLocation}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[rgba(10,22,40,0.6)] border-2 border-[rgba(0,213,190,0.4)] flex items-center justify-center shrink-0 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-[rgba(0,213,190,0.6)]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-[rgba(203,251,241,0.6)] text-xs mb-1">Drop-off Location</p>
                        <p className="text-white text-base leading-snug">{assignedTripData.dropoffLocation}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-[rgba(0,213,190,0.1)]" />

                {/* Schedule Section */}
                <div>
                  <p className="text-[rgba(203,251,241,0.5)] text-xs uppercase tracking-wider mb-3">Schedule</p>
                  <div className="bg-[rgba(0,213,190,0.08)] border border-[rgba(0,213,190,0.15)] rounded-xl px-4 py-3">
                    <p className="text-[#00d5be] text-sm font-medium">{assignedTripData.scheduledStart}</p>
                  </div>
                </div>

                <div className="h-px bg-[rgba(0,213,190,0.1)]" />

                {/* Shipment Info Section */}
                <div>
                  <p className="text-[rgba(203,251,241,0.5)] text-xs uppercase tracking-wider mb-3">Shipment Information</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[rgba(203,251,241,0.6)] text-sm">Client</span>
                      <span className="text-white text-sm font-medium">{assignedTripData.clientName}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[rgba(203,251,241,0.6)] text-sm">Cargo Type</span>
                      <span className="text-white text-sm">{assignedTripData.shipmentType}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-[rgba(203,251,241,0.6)] text-sm">Weight</span>
                      <span className="text-white text-sm font-medium">{assignedTripData.weight}</span>
                    </div>

                    <div className="pt-2">
                      <div className="inline-flex items-center gap-1.5 bg-[rgba(255,149,0,0.15)] border border-[rgba(255,149,0,0.3)] px-3 py-2 rounded-lg">
                        <span className="text-[#ff9500] text-xs font-semibold">⚠️ Fragile</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA - Prominent */}
          <div className="px-5 mb-5">
            <motion.button
              onClick={onStartTrip}
              className="w-full h-14 bg-[#00d5be] rounded-2xl text-white text-base font-semibold flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02, backgroundColor: "#00bba7" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Play className="w-5 h-5" />
              <span>Start Trip</span>
            </motion.button>
          </div>

          {/* Secondary Action */}
          <div className="px-5 mb-6">
            <motion.button 
              className="w-full h-11 bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl text-[rgba(203,251,241,0.8)] text-sm font-medium"
              whileHover={{ 
                scale: 1.01, 
                borderColor: "rgba(0,213,190,0.3)",
                backgroundColor: "rgba(10,22,40,0.8)"
              }}
              whileTap={{ scale: 0.99 }}
            >
              View Full Details
            </motion.button>
          </div>

          {/* Availability Indicator (Bottom) */}
          {!isOnline ? (
            <div className="px-5 mb-8">
              <div className="bg-[rgba(142,142,147,0.08)] border border-[rgba(142,142,147,0.15)] rounded-xl p-3.5 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8e8e93]" />
                <p className="text-[#8e8e93] text-xs">Offline – Not receiving new trips</p>
              </div>
            </div>
          ) : (
            <div className="px-5 mb-8">
              <div className="bg-[rgba(52,199,89,0.08)] border border-[rgba(52,199,89,0.15)] rounded-xl p-3.5 flex items-center justify-center gap-2">
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-[#34c759]"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="text-[#34c759] text-xs">You can receive trips after completion</p>
              </div>
            </div>
          )}
        </>
      )}

      {/* CASE 5 & 6: In Transit (both OFFLINE and ONLINE) */}
      {isInTransit && (
        <>
          {/* Live Tracking Hero - Dynamic Layout */}
          <div className="px-5 mb-5">
            <div className="bg-gradient-to-br from-[rgba(0,213,190,0.15)] via-[rgba(0,187,167,0.1)] to-[rgba(0,173,181,0.08)] rounded-3xl p-5 relative overflow-hidden border border-[rgba(0,213,190,0.3)] shadow-xl shadow-[rgba(0,213,190,0.1)]">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-[#00d5be] opacity-10 blur-[60px] rounded-full"
                animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative">
                {/* Shipment ID - Top right */}
                <div className="flex items-center justify-end mb-4">
                  <span className="text-[rgba(203,251,241,0.5)] text-xs font-mono tracking-wider">
                    {inTransitTripData.shipmentId}
                  </span>
                </div>

                {/* Route Visualization - Hero Element */}
                <div className="mb-5">
                  <div className="relative">
                    {/* From */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative mt-1">
                        <motion.div 
                          className="w-4 h-4 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#00d5be] ring-4 ring-[rgba(245,158,11,0.25)]"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />
                        {/* Vertical connecting line with gradient */}
                        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-1 h-16 bg-gradient-to-b from-[#F59E0B] via-[#00d5be] to-[rgba(0,213,190,0.2)] rounded-full" />
                        
                        {/* Vehicle indicator on the line */}
                        <motion.div
                          className="absolute left-1/2 -translate-x-1/2"
                          style={{ top: `${(inTransitTripData.progress / 100) * 64 + 20}px` }}
                          animate={{ y: [-1, 1, -1] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#F59E0B] via-[#00d5be] to-[#00bba7] flex items-center justify-center shadow-lg shadow-[rgba(245,158,11,0.4)] relative">
                            {/* Pulsing ring */}
                            <motion.div
                              className="absolute inset-0 rounded-full border-2 border-[#F59E0B]"
                              animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                            <Truck className="w-3 h-3 text-white" />
                          </div>
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">From</p>
                        <p className="text-white text-base font-medium leading-snug">{inTransitTripData.from}</p>
                      </div>
                    </div>

                    {/* To */}
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 rounded-full border-2 border-[#00d5be] bg-[rgba(0,213,190,0.2)] mt-1" />
                      <div className="flex-1">
                        <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1">To</p>
                        <p className="text-white text-base font-medium leading-snug">{inTransitTripData.to}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Stats - Highlighted */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[rgba(10,22,40,0.7)] backdrop-blur-sm rounded-xl p-3 border border-[rgba(245,158,11,0.3)] relative overflow-hidden">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#F59E0B] to-transparent"
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1 relative">ETA</p>
                    <p className="text-[#FBBF24] text-2xl font-bold relative">{inTransitTripData.eta}</p>
                  </div>
                  
                  <div className="bg-[rgba(10,22,40,0.7)] backdrop-blur-sm rounded-xl p-3 border border-[rgba(0,213,190,0.3)] relative overflow-hidden">
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#00d5be] to-transparent"
                      animate={{ opacity: [0, 0.1, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                    />
                    <p className="text-[rgba(203,251,241,0.5)] text-xs mb-1 relative">Progress</p>
                    <p className="text-[#00d5be] text-2xl font-bold relative">{inTransitTripData.progress}%</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="h-2 bg-[rgba(10,22,40,0.8)] rounded-full overflow-hidden border border-[rgba(245,158,11,0.2)] relative">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#F59E0B] via-[#00d5be] to-[#00bba7] rounded-full shadow-lg shadow-[rgba(245,158,11,0.4)] relative"
                    initial={{ width: 0 }}
                    animate={{ width: `${inTransitTripData.progress}%` }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Animated shimmer effect on progress bar */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      animate={{ x: [-100, 200] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    />
                    {/* Pulsing glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#00d5be]"
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>

          {/* Primary CTA - Navigation */}
          <div className="px-5 mb-5">
            <motion.button 
              onClick={onViewLiveNavigation}
              className="w-full h-14 bg-[#00d5be] rounded-2xl text-white text-base font-semibold flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02, backgroundColor: "#00bba7" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Navigation className="w-5 h-5" />
              <span>View Live Navigation</span>
            </motion.button>
          </div>

          {/* Secondary Info - Compact */}
          <div className="px-5 mb-5">
            <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white text-sm font-semibold">Shipment Details</h3>
              </div>
              
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Client</span>
                  <span className="text-white text-sm font-medium">{inTransitTripData.clientName}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[rgba(203,251,241,0.6)] text-xs">Cargo</span>
                  <span className="text-white text-xs">{inTransitTripData.shipmentType}</span>
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <div className="inline-flex items-center gap-1.5 bg-[rgba(255,149,0,0.15)] border border-[rgba(255,149,0,0.3)] px-2.5 py-1 rounded-lg">
                    <span className="text-[#ff9500] text-[10px] font-semibold uppercase tracking-wide">⚠️ Fragile</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.2)] px-2.5 py-1 rounded-lg">
                    <span className="text-[rgba(203,251,241,0.7)] text-[10px] font-medium">{inTransitTripData.weight}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Status - Subtle */}
          {!isOnline ? (
            <div className="px-5 mb-8">
              <div className="flex items-center justify-center gap-2 py-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8e8e93]" />
                <p className="text-[#8e8e93] text-xs">Offline – Not receiving new trips after completion</p>
              </div>
            </div>
          ) : (
            <div className="px-5 mb-8">
              <div className="flex items-center justify-center gap-2 py-2">
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-[#34c759]"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className="text-[#34c759] text-xs">Online – Can receive new trips after completion</p>
              </div>
            </div>
          )}
        </>
      )}

      {/* CASE 7: Trip Completed */}
      {isCompleted && (
        <>
          {/* Completed Trip Hero */}
          <div className="px-5 mb-5">
            <div className="bg-gradient-to-br from-[rgba(52,199,89,0.12)] to-[rgba(48,176,199,0.08)] border border-[rgba(52,199,89,0.3)] rounded-2xl p-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#34c759] opacity-5 blur-[40px]" />
              
              <div className="relative text-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-[#34c759] to-[#30b0c7] flex items-center justify-center shadow-lg shadow-[rgba(52,199,89,0.3)]"
                >
                  <Truck className="w-6 h-6 text-white" />
                </motion.div>
                
                <h2 className="text-white text-lg font-semibold mb-1">Trip Completed</h2>
                <p className="text-[rgba(203,251,241,0.6)] text-sm mb-3">Thank you for your service</p>
                
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
              onClick={onToggleOnline}
              className="w-full h-10 bg-[rgba(142,142,147,0.2)] border border-[rgba(142,142,147,0.3)] rounded-lg text-[#8e8e93] text-sm font-medium active:scale-[0.98] transition-transform"
            >
              Go Offline
            </button>
          </div>

          {/* Offers Area */}
          <div className="px-5 mb-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white text-base font-semibold">Incoming Trips</h2>
              <button 
                onClick={() => setShowOffer(!showOffer)}
                className="text-[#00d5be] text-xs"
              >
                {showOffer ? 'Hide' : 'Show'} Offer
              </button>
            </div>
            
            {!showOffer ? (
              <div className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-5 text-center">
                {/* Truck with incoming arrow indicator */}
                <div className="relative w-12 h-12 mx-auto mb-3">
                  <div className="w-12 h-12 rounded-full bg-[rgba(0,213,190,0.1)] flex items-center justify-center">
                    <Inbox className="w-6 h-6 text-[rgba(0,213,190,0.5)]" />
                  </div>
                  
                  {/* Directional arrow indicator - top right */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-[rgba(0,213,190,0.2)] rounded-full flex items-center justify-center border border-[rgba(0,213,190,0.3)]">
                    <ArrowDownLeft className="w-3 h-3 text-[#00d5be]" />
                  </div>
                </div>
                <p className="text-[rgba(203,251,241,0.7)] text-sm mb-1">No trips available right now</p>
                <p className="text-[rgba(203,251,241,0.5)] text-xs">Stay online to receive nearby shipments</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-[rgba(0,213,190,0.15)] to-[rgba(0,187,167,0.1)] border-2 border-[#00d5be] rounded-xl p-4 relative overflow-hidden"
              >
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
                        <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">From</p>
                        <p className="text-white text-sm">{incomingOffer.from}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2.5">
                      <div className="w-2 h-2 rounded-full border-2 border-[#00d5be] mt-1.5" />
                      <div className="flex-1">
                        <p className="text-[rgba(203,251,241,0.6)] text-xs mb-0.5">To</p>
                        <p className="text-white text-sm">{incomingOffer.to}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mb-4 text-xs text-[rgba(203,251,241,0.7)]">
                    <span>{incomingOffer.distance}</span>
                    <span>•</span>
                    <span>{incomingOffer.estimatedTime}</span>
                  </div>
                  
                  <button className="w-full h-10 bg-gradient-to-r from-[#00d5be] to-[#00bba7] rounded-lg text-white text-sm font-medium shadow-md active:scale-[0.98] transition-transform">
                    View Offer
                  </button>
                </div>
              </motion.div>
            )}
          </div>

          {/* Today Summary */}
          <div className="px-5 mb-5">
            <h2 className="text-white text-base font-semibold mb-3">Today</h2>
            
            <div className="space-y-2.5">
              <div className="flex items-center justify-between bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3">
                <span className="text-[rgba(203,251,241,0.5)] text-sm">Trips completed</span>
                <span className="text-white text-lg font-semibold">{todayData.tripsCompleted}</span>
              </div>
              
              <div className="flex items-center justify-between bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3">
                <span className="text-[rgba(203,251,241,0.5)] text-sm">Earnings</span>
                <span className="text-white text-lg font-semibold">{todayData.earnings} EGP</span>
              </div>
              
              <div className="flex items-center justify-between bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3">
                <span className="text-[rgba(203,251,241,0.5)] text-sm">Online time</span>
                <span className="text-white text-lg font-semibold">{todayData.onlineTime}</span>
              </div>
            </div>
          </div>

          {/* Recent Trips */}
          <div className="px-5 mb-8">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white text-base font-semibold">Recent Trips</h2>
              <button onClick={onViewAllTrips} className="text-[#00d5be] text-xs font-medium">View all</button>
            </div>
            
            <div className="space-y-2.5">
              {recentTrips.slice(0, 1).map((trip) => (
                <div 
                  key={trip.id}
                  className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-xl p-3.5"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[rgba(203,251,241,0.5)] text-xs font-mono">{trip.id}</span>
                    <span className="text-[rgba(203,251,241,0.5)] text-xs">{trip.date}</span>
                  </div>
                  
                  <p className="text-white text-sm mb-1.5">{trip.from} → {trip.to}</p>
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 bg-[rgba(52,199,89,0.15)] px-2 py-0.5 rounded">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#34c759]" />
                      <span className="text-[#34c759] text-xs font-medium">{trip.status}</span>
                    </div>
                    <span className="text-[rgba(203,251,241,0.5)] text-xs">{trip.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}