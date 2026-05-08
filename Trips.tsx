import { Filter, Truck, MapPin, Calendar, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type FilterType = 'all' | 'upcoming' | 'completed';

interface Trip {
  id: string;
  from: string;
  to: string;
  date: string;
  distance: string;
  status: 'in-progress' | 'scheduled' | 'completed';
  progress?: number;
}

const activeTrip: Trip = {
  id: 'TR-4721',
  from: 'Nasr City',
  to: 'Maadi',
  date: 'Dec 16, 2025',
  distance: '382 km',
  status: 'in-progress',
  progress: 47,
};

const otherTrips: Trip[] = [
  {
    id: 'TR-4722',
    from: 'Maadi',
    to: 'Nasr City',
    date: 'Dec 17, 2025',
    distance: '124 km',
    status: 'scheduled',
  },
  {
    id: 'TR-4723',
    from: 'Maadi',
    to: 'Zamalek',
    date: 'Dec 17, 2025',
    distance: '355 km',
    status: 'scheduled',
  },
  {
    id: 'TR-4718',
    from: 'Zamalek',
    to: 'Dokki',
    date: 'Dec 15, 2025',
    distance: '87 km',
    status: 'completed',
  },
  {
    id: 'TR-4715',
    from: 'Zamalek',
    to: 'Dokki',
    date: 'Dec 14, 2025',
    distance: '52 km',
    status: 'completed',
  },
];

const StatusBadge = ({ status }: { status: Trip['status'] }) => {
  const styles = {
    'in-progress': {
      bg: 'bg-[rgba(0,211,242,0.1)]',
      border: 'border-[rgba(0,211,242,0.3)]',
      text: 'text-[#00d3f2]',
      label: 'In Progress',
    },
    scheduled: {
      bg: 'bg-[rgba(255,137,4,0.1)]',
      border: 'border-[rgba(255,137,4,0.3)]',
      text: 'text-[#ff8904]',
      label: 'Scheduled',
    },
    completed: {
      bg: 'bg-[rgba(0,213,190,0.1)]',
      border: 'border-[rgba(0,213,190,0.3)]',
      text: 'text-[#00d5be]',
      label: 'Completed',
    },
  };

  const style = styles[status];

  return (
    <div
      className={`${style.bg} ${style.text} px-3 py-1 rounded-full border ${style.border} text-[10px] font-medium`}
    >
      {style.label}
    </div>
  );
};

export function Trips() {
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  // Filter trips based on selected filter
  const filteredTrips = otherTrips.filter((trip) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'upcoming') return trip.status === 'scheduled' || trip.status === 'in-progress';
    if (selectedFilter === 'completed') return trip.status === 'completed';
    return true;
  });

  const showActiveTrip = selectedFilter === 'all' || selectedFilter === 'upcoming';

  return (
    <div className="min-h-screen bg-[#0f2334] pb-20 relative">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="pt-6 pb-4 px-5"
      >
        <div className="flex items-start justify-between mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-[#f0fdfa] text-[22px] font-normal mb-1">Trips</h1>
            <p className="text-[rgba(203,251,241,0.5)] text-[14px]">Manage your deliveries</p>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            onClick={() => setFilterOpen(true)}
            className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.2)] rounded-xl p-2.5 mt-1"
          >
            <motion.div
              animate={{ rotate: filterOpen ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Filter className="w-[18px] h-[18px] text-[#00d5be] opacity-70" />
            </motion.div>
          </motion.button>
        </div>

        {/* Active Trip Section */}
        <AnimatePresence mode="wait">
          {showActiveTrip && (
            <motion.div
              key="active-trip"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="mb-6"
            >
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-[rgba(203,251,241,0.5)] text-[12px] mb-3"
              >
                Active Now
              </motion.p>
              
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,211,242,0.3)] rounded-2xl p-4 shadow-[0px_0px_20px_0px_rgba(0,211,242,0.15)] cursor-pointer"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <motion.div 
                      initial={{ rotate: -10, scale: 0.8 }}
                      animate={{ rotate: 0, scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.3 }}
                      className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#00d5be] to-[#00d3f2] flex items-center justify-center shadow-[0px_0px_12px_0px_rgba(0,211,242,0.5)]"
                    >
                      <Truck className="w-4 h-4 text-white" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <p className="text-[#f0fdfa] text-[14px] font-normal">Trip #{activeTrip.id}</p>
                      <p className="text-[rgba(203,251,241,0.5)] text-[11px]">{activeTrip.date}</p>
                    </motion.div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                  >
                    <StatusBadge status={activeTrip.status} />
                  </motion.div>
                </div>

                {/* Route */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex items-center gap-2 mb-4"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#00d5be] opacity-60" />
                  <p className="text-[rgba(203,251,241,0.7)] text-[13px]">
                    {activeTrip.from} → {activeTrip.to}
                  </p>
                  <span className="ml-auto text-[rgba(203,251,241,0.4)] text-[12px]">
                    {activeTrip.distance}
                  </span>
                </motion.div>

                {/* Progress */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mb-3"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[rgba(203,251,241,0.5)] text-[11px]">Progress</span>
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8, type: 'spring' }}
                      className="text-[#00d3f2] text-[11px]"
                    >
                      {activeTrip.progress}%
                    </motion.span>
                  </div>
                  <div className="w-full h-1 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${activeTrip.progress}%` }}
                      transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full bg-gradient-to-r from-[#00d5be] to-[#00d3f2] rounded-full shadow-[0px_0px_8px_0px_rgba(0,213,190,0.6)]"
                    />
                  </div>
                </motion.div>

                {/* View Details */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="flex items-center justify-end gap-1 mt-3"
                >
                  <span className="text-[rgba(0,213,190,0.7)] text-[12px]">View Details</span>
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#00d5be] opacity-70" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Other Trips Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-[rgba(203,251,241,0.5)] text-[12px] mb-3"
          >
            Other Trips
          </motion.p>
          
          <div className="space-y-3">
            <AnimatePresence mode="popLayout">
              {filteredTrips.map((trip, index) => (
                <motion.div
                  key={trip.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.5 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                    layout: { type: 'spring', stiffness: 300, damping: 30 }
                  }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 cursor-pointer"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-[#f0fdfa] text-[13px] font-normal mb-0.5">Trip #{trip.id}</p>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-[11px] h-[11px] text-[rgba(203,251,241,0.5)]" />
                        <span className="text-[rgba(203,251,241,0.5)] text-[11px]">{trip.date}</span>
                      </div>
                    </div>
                    <StatusBadge status={trip.status} />
                  </div>

                  {/* Route */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3 text-[#00d5be] opacity-50" />
                      <p className="text-[rgba(203,251,241,0.7)] text-[12px]">
                        {trip.from} → {trip.to}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-[rgba(203,251,241,0.4)] text-[11px]">{trip.distance}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#00d5be] opacity-40" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      {/* Filter Bottom Sheet */}
      <AnimatePresence>
        {filterOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setFilterOpen(false)}
              className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-40"
            />

            {/* Bottom Sheet */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 35, stiffness: 400, mass: 0.8 }}
              className="fixed bottom-0 left-0 right-0 z-50 max-w-[375px] mx-auto"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-[#192c3d] border-t border-[rgba(0,213,190,0.3)] rounded-t-3xl shadow-[0px_-8px_32px_0px_rgba(0,0,0,0.3)] pb-8"
              >
                {/* Indicator */}
                <motion.div 
                  initial={{ scaleX: 0.5, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
                  className="w-10 h-1 bg-[rgba(0,213,190,0.3)] rounded-full mx-auto mt-3 mb-4" 
                />

                {/* Header */}
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-center justify-between px-6 pb-3 border-b border-[rgba(0,213,190,0.15)]"
                >
                  <h3 className="text-[#f0fdfa] text-[16px] font-normal">Filter Trips</h3>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    onClick={() => setFilterOpen(false)}
                    className="bg-[rgba(0,213,190,0.1)] rounded-full p-2"
                  >
                    <X className="w-4 h-4 text-[#00d5be] opacity-70" />
                  </motion.button>
                </motion.div>

                {/* Filter Options */}
                <div className="px-6 pt-4 space-y-2">
                  {/* All Trips */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedFilter('all');
                      setFilterOpen(false);
                    }}
                    className={`w-full h-[54px] rounded-2xl flex items-center justify-between px-4 transition-all ${
                      selectedFilter === 'all'
                        ? 'bg-gradient-to-r from-[#009689] to-[#00bba7] border border-[rgba(0,213,190,0.4)] shadow-[0px_0px_12px_0px_rgba(0,187,167,0.3)]'
                        : 'bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.2)]'
                    }`}
                  >
                    <span className={selectedFilter === 'all' ? 'text-white text-[14px]' : 'text-[rgba(203,251,241,0.7)] text-[14px]'}>
                      All Trips
                    </span>
                    <AnimatePresence>
                      {selectedFilter === 'all' && (
                        <motion.div 
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center"
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: 'spring', stiffness: 500 }}
                            className="w-2 h-2 rounded-full bg-white" 
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Upcoming */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedFilter('upcoming');
                      setFilterOpen(false);
                    }}
                    className={`w-full h-[54px] rounded-2xl flex items-center justify-between px-4 transition-all ${
                      selectedFilter === 'upcoming'
                        ? 'bg-gradient-to-r from-[#009689] to-[#00bba7] border border-[rgba(0,213,190,0.4)] shadow-[0px_0px_12px_0px_rgba(0,187,167,0.3)]'
                        : 'bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.2)]'
                    }`}
                  >
                    <span className={selectedFilter === 'upcoming' ? 'text-white text-[14px]' : 'text-[rgba(203,251,241,0.7)] text-[14px]'}>
                      Upcoming
                    </span>
                    <AnimatePresence>
                      {selectedFilter === 'upcoming' && (
                        <motion.div 
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center"
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: 'spring', stiffness: 500 }}
                            className="w-2 h-2 rounded-full bg-white" 
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>

                  {/* Completed */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, type: 'spring', stiffness: 300 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      setSelectedFilter('completed');
                      setFilterOpen(false);
                    }}
                    className={`w-full h-[54px] rounded-2xl flex items-center justify-between px-4 transition-all ${
                      selectedFilter === 'completed'
                        ? 'bg-gradient-to-r from-[#009689] to-[#00bba7] border border-[rgba(0,213,190,0.4)] shadow-[0px_0px_12px_0px_rgba(0,187,167,0.3)]'
                        : 'bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.2)]'
                    }`}
                  >
                    <span className={selectedFilter === 'completed' ? 'text-white text-[14px]' : 'text-[rgba(203,251,241,0.7)] text-[14px]'}>
                      Completed
                    </span>
                    <AnimatePresence>
                      {selectedFilter === 'completed' && (
                        <motion.div 
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 180 }}
                          transition={{ type: 'spring', stiffness: 500, damping: 25 }}
                          className="w-5 h-5 rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center"
                        >
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: 'spring', stiffness: 500 }}
                            className="w-2 h-2 rounded-full bg-white" 
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}