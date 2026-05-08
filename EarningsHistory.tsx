import { ChevronLeft, Calendar } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type FilterType = 'all' | 'paid' | 'pending';
type PaymentStatus = 'paid' | 'pending';

interface EarningEntry {
  id: string;
  from: string;
  to: string;
  date: string;
  tripId: string;
  amount: number;
  status: PaymentStatus;
}

const earningsData: EarningEntry[] = [
  {
    id: '1',
    from: 'Maadi',
    to: 'Nasr City',
    date: 'Dec 16, 2025',
    tripId: 'TR-4721',
    amount: 850,
    status: 'paid',
  },
  {
    id: '2',
    from: 'Downtown',
    to: 'Heliopolis',
    date: 'Dec 16, 2025',
    tripId: 'TR-4720',
    amount: 620,
    status: 'paid',
  },
  {
    id: '3',
    from: 'Zamalek',
    to: 'New Cairo',
    date: 'Dec 15, 2025',
    tripId: 'TR-4719',
    amount: 1150,
    status: 'pending',
  },
  {
    id: '4',
    from: '6th October',
    to: 'Maadi',
    date: 'Dec 15, 2025',
    tripId: 'TR-4718',
    amount: 730,
    status: 'paid',
  },
  {
    id: '5',
    from: 'Nasr City',
    to: 'Dokki',
    date: 'Dec 14, 2025',
    tripId: 'TR-4717',
    amount: 540,
    status: 'paid',
  },
  {
    id: '6',
    from: 'Heliopolis',
    to: 'Sheikh Zayed',
    date: 'Dec 14, 2025',
    tripId: 'TR-4716',
    amount: 920,
    status: 'pending',
  },
  {
    id: '7',
    from: 'Mohandessin',
    to: 'New Cairo',
    date: 'Dec 13, 2025',
    tripId: 'TR-4715',
    amount: 1080,
    status: 'paid',
  },
];

interface EarningsHistoryProps {
  onBack: () => void;
}

export function EarningsHistory({ onBack }: EarningsHistoryProps) {
  const [selectedFilter, setSelectedFilter] = useState<FilterType>('all');

  // Filter data based on selected filter
  const filteredData = earningsData.filter((entry) => {
    if (selectedFilter === 'all') return true;
    return entry.status === selectedFilter;
  });

  // Calculate total for filtered data
  const totalAmount = filteredData.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <div className="min-h-screen bg-[#0f2334] pb-8 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-6 pb-4 px-5"
      >
        <div className="flex items-center gap-4 mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-[rgba(0,213,190,0.1)] rounded-xl p-2 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-[#00d5be]" />
          </motion.button>
          <div>
            <h1 className="text-white text-[22px] font-normal mb-1">Earnings History</h1>
            <p className="text-[rgba(203,251,241,0.5)] text-[14px]">
              Completed trips & payouts
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-1.5 grid grid-cols-3 gap-1 mb-5"
        >
          {(['all', 'paid', 'pending'] as FilterType[]).map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              whileTap={{ scale: 0.97 }}
              className="relative h-10 rounded-xl transition-all"
            >
              {/* Active Background */}
              {selectedFilter === filter && (
                <motion.div
                  layoutId="history-tab-bg"
                  className="absolute inset-0 bg-gradient-to-b from-[#009689] to-[#00b8db] rounded-xl shadow-[0px_2px_8px_0px_rgba(0,213,190,0.3)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}

              {/* Text */}
              <span
                className={`relative z-10 text-[14px] capitalize ${
                  selectedFilter === filter ? 'text-white' : 'text-[rgba(203,251,241,0.5)]'
                }`}
              >
                {filter}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Total Summary Card */}
        <motion.div
          key={`total-${selectedFilter}`}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-[rgba(0,213,190,0.05)] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 mb-5"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[rgba(203,251,241,0.5)] text-[12px] mb-1">
                {selectedFilter === 'all'
                  ? 'Total Earnings'
                  : selectedFilter === 'paid'
                  ? 'Total Paid'
                  : 'Total Pending'}
              </p>
              <motion.p
                key={`amount-${selectedFilter}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[#00d5be] text-[28px] font-normal"
              >
                {totalAmount.toLocaleString()} EGP
              </motion.p>
            </div>
            <div className="text-right">
              <p className="text-[rgba(203,251,241,0.5)] text-[12px] mb-1">Total Trips</p>
              <motion.p
                key={`count-${selectedFilter}`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-[20px]"
              >
                {filteredData.length}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Earnings List */}
        <div className="space-y-3">
          <AnimatePresence mode="popLayout">
            {filteredData.map((entry, index) => (
              <motion.div
                key={entry.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + index * 0.05,
                  layout: { type: 'spring', stiffness: 300, damping: 30 },
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 cursor-pointer"
              >
                {/* Header Row */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="text-white text-[15px] font-normal mb-1">
                      {entry.from} → {entry.to}
                    </p>
                    <div className="flex items-center gap-3 text-[rgba(203,251,241,0.5)] text-[11px]">
                      <span>{entry.date}</span>
                      <span>•</span>
                      <span>{entry.tripId}</span>
                    </div>
                  </div>

                  {/* Amount */}
                  <div className="text-right ml-3">
                    <p className="text-[#00d5be] text-[18px] font-normal mb-1">
                      +{entry.amount} EGP
                    </p>
                    {/* Status Badge */}
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] ${
                        entry.status === 'paid'
                          ? 'bg-[rgba(0,213,190,0.15)] text-[#00d5be]'
                          : 'bg-[rgba(251,146,60,0.15)] text-[#fb923c]'
                      }`}
                    >
                      {entry.status === 'paid' ? 'Paid' : 'Pending'}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {filteredData.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 bg-[rgba(0,213,190,0.1)] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-[#00d5be] opacity-50" />
              </div>
              <p className="text-[rgba(203,251,241,0.5)] text-[14px]">
                No {selectedFilter} earnings found
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
