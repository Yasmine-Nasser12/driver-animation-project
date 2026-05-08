import { Wallet, ChevronRight, Info } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'today' | 'week' | 'month';

interface EarningsData {
  amount: number;
  comparison: string;
  progress: number;
  target: number;
  remaining: number;
  label: string;
}

interface EarningsProps {
  onViewBreakdown?: () => void;
  onViewHistory?: () => void;
}

const earningsData: Record<TabType, EarningsData> = {
  today: {
    amount: 1250,
    comparison: 'You earned 22% more than yesterday',
    progress: 83,
    target: 1500,
    remaining: 250,
    label: 'Today Earnings',
  },
  week: {
    amount: 6800,
    comparison: 'You earned 15% more than last week',
    progress: 68,
    target: 10000,
    remaining: 3200,
    label: 'This Week Earnings',
  },
  month: {
    amount: 28500,
    comparison: 'You earned 18% more than last month',
    progress: 95,
    target: 30000,
    remaining: 1500,
    label: 'This Month Earnings',
  },
};

export function Earnings({ onViewBreakdown, onViewHistory }: EarningsProps) {
  const [selectedTab, setSelectedTab] = useState<TabType>('today');
  const [breakdownOpen, setBreakdownOpen] = useState(false);

  const data = earningsData[selectedTab];
  const progressDegrees = (data.progress / 100) * 360;

  return (
    <div className="min-h-screen bg-[#0f2334] pb-20 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-6 pb-4 px-5"
      >
        <h1 className="text-white text-[22px] font-normal mb-1">Earnings</h1>
        <p className="text-[rgba(203,251,241,0.5)] text-[14px]">Your income summary</p>
      </motion.div>

      <div className="px-5 space-y-5">
        {/* Main Earnings Card */}
        <motion.div
          key={selectedTab}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,213,190,0.4)] to-[rgba(0,150,137,0.3)] rounded-3xl blur-[40px] opacity-75 -z-10" />

          {/* Card */}
          <div className="bg-gradient-to-b from-[#009689] via-[#00bba7] to-[#00b8db] rounded-3xl p-5 shadow-[0px_19px_58px_0px_rgba(20,184,166,0.49),0px_0px_0px_1px_rgba(255,255,255,0.14)]">
            {/* Top Row */}
            <div className="flex items-center justify-between mb-5">
              {/* Icon */}
              <div className="w-10 h-10 bg-[rgba(255,255,255,0.2)] rounded-[10px] flex items-center justify-center">
                <Wallet className="w-5 h-5 text-white" />
              </div>

              {/* Next Payout Badge */}
              <div className="bg-[rgba(255,255,255,0.95)] rounded-full px-3 py-1.5 flex items-center gap-2 shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)]">
                <div className="w-1.5 h-1.5 bg-[#009689] rounded-full opacity-85" />
                <span className="text-[#009689] text-[11px] font-normal">
                  Next payout in 2 days
                </span>
              </div>
            </div>

            {/* Earnings Info */}
            <div className="space-y-2">
              <p className="text-[rgba(255,255,255,0.8)] text-[13px]">{data.label}</p>
              <motion.p
                key={`amount-${selectedTab}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-white text-[42px] font-normal leading-[42px]"
              >
                {data.amount.toLocaleString()} EGP
              </motion.p>

              {/* Comparison Badge */}
              <motion.div
                key={`comparison-${selectedTab}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] rounded-xl px-3 py-2.5"
              >
                <p className="text-white text-[13px]">{data.comparison}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-1.5 grid grid-cols-3 gap-0"
        >
          {(['today', 'week', 'month'] as TabType[]).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              whileTap={{ scale: 0.97 }}
              className={`relative h-10 rounded-xl transition-all ${
                selectedTab === tab ? '' : ''
              }`}
            >
              {/* Active Background */}
              {selectedTab === tab && (
                <motion.div
                  layoutId="tab-bg"
                  className="absolute inset-0 bg-gradient-to-b from-[#009689] to-[#00b8db] rounded-xl shadow-[0px_2px_8px_0px_rgba(0,213,190,0.3)] overflow-hidden"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0)] via-[rgba(255,255,255,0.1)] to-[rgba(0,0,0,0)] w-[105px] h-10" />
                </motion.div>
              )}

              {/* Text */}
              <span
                className={`relative z-10 text-[13px] ${
                  selectedTab === tab ? 'text-white' : 'text-[rgba(203,251,241,0.5)]'
                }`}
              >
                {tab === 'today' ? 'Today' : tab === 'week' ? 'This Week' : 'This Month'}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Target Progress Card */}
        <motion.div
          key={`progress-${selectedTab}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-[20px] p-5 relative"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-[rgba(203,251,241,0.5)] text-[11px] mb-1">Target Progress</p>
              <motion.p
                key={`progress-text-${selectedTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-white text-[18px]"
              >
                {data.progress}% Complete
              </motion.p>
            </div>
            <div className="text-right">
              <p className="text-[rgba(203,251,241,0.5)] text-[11px] mb-1">Target</p>
              <motion.p
                key={`target-${selectedTab}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[#00d5be] text-[15px]"
              >
                {data.target.toLocaleString()} EGP
              </motion.p>
            </div>
          </div>

          {/* Circular Progress */}
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Background Circle */}
            <svg className="absolute inset-0 -rotate-90" viewBox="0 0 160 160">
              <circle
                cx="80"
                cy="80"
                r="73"
                fill="none"
                stroke="rgba(0,213,190,0.1)"
                strokeWidth="14"
              />
              {/* Progress Arc */}
              <motion.circle
                cx="80"
                cy="80"
                r="73"
                fill="none"
                stroke="url(#progress-gradient)"
                strokeWidth="14"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 73}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 73 }}
                animate={{
                  strokeDashoffset: 2 * Math.PI * 73 * (1 - data.progress / 100),
                }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#009689" />
                  <stop offset="50%" stopColor="#00bba7" />
                  <stop offset="100%" stopColor="#00b8db" />
                </linearGradient>
              </defs>
            </svg>

            {/* Center Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.p
                key={`current-${selectedTab}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white text-[28px] font-normal"
              >
                {data.amount.toLocaleString()}
              </motion.p>
              <p className="text-[rgba(203,251,241,0.5)] text-[11px]">Current</p>
            </div>
          </div>

          {/* Remaining Text */}
          <motion.p
            key={`remaining-${selectedTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-[rgba(203,251,241,0.5)] text-[11px] text-center"
          >
            {data.remaining.toLocaleString()} EGP remaining to reach target
          </motion.p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-3"
        >
          {/* View History Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onViewHistory}
            className="w-full bg-gradient-to-b from-[#009689] to-[#00b8db] rounded-2xl px-4 py-3.5 shadow-[0px_4px_16px_0px_rgba(0,213,190,0.3)] flex items-center justify-center gap-2"
          >
            <span className="text-white text-[15px]">View Earnings History</span>
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>

          {/* Calculation Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              if (onViewBreakdown) {
                onViewBreakdown();
              } else {
                setBreakdownOpen(true);
              }
            }}
            className="w-full bg-[rgba(0,213,190,0.1)] border border-[rgba(0,213,190,0.2)] rounded-2xl px-4 py-3 flex items-center justify-center gap-2"
          >
            <Info className="w-4 h-4 text-[#00d5be]" />
            <span className="text-[#00d5be] text-[13px]">How this was calculated</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Calculation Breakdown Bottom Sheet */}
      <AnimatePresence>
        {breakdownOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setBreakdownOpen(false)}
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
              <div className="bg-[#192c3d] border-t border-[rgba(0,213,190,0.2)] rounded-t-[32px] shadow-[0px_-8px_32px_0px_rgba(0,0,0,0.3)] pb-8">
                {/* Indicator */}
                <motion.div
                  initial={{ scaleX: 0.5, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: 1 }}
                  transition={{ delay: 0.15, type: 'spring', stiffness: 300 }}
                  className="w-12 h-1 bg-[rgba(203,251,241,0.2)] rounded-full mx-auto mt-4 mb-4"
                />

                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="px-6 pb-4"
                >
                  <h2 className="text-white text-[20px] font-normal mb-2">
                    Calculation Breakdown
                  </h2>
                  <p className="text-[rgba(203,251,241,0.5)] text-[14px]">
                    How your {selectedTab === 'today' ? 'today' : selectedTab === 'week' ? 'this week' : 'this month'} earnings were calculated
                  </p>
                </motion.div>

                {/* Breakdown Items */}
                <div className="px-6 space-y-3">
                  {/* Base Fare */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                    className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[rgba(203,251,241,0.5)] text-[12px]">Base Fare</span>
                      <span className="text-white text-[16px]">3,200 EGP</span>
                    </div>
                    <div className="w-full h-2 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="h-full bg-gradient-to-r from-[#009689] to-[#00b8db] rounded-full"
                      />
                    </div>
                  </motion.div>

                  {/* Distance Bonus */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[rgba(203,251,241,0.5)] text-[12px]">
                        Distance Bonus
                      </span>
                      <span className="text-white text-[16px]">1,200 EGP</span>
                    </div>
                    <div className="w-full h-2 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '25%' }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-[#009689] to-[#00b8db] rounded-full"
                      />
                    </div>
                  </motion.div>

                  {/* Peak Hours */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 }}
                    className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[rgba(203,251,241,0.5)] text-[12px]">Peak Hours</span>
                      <span className="text-white text-[16px]">400 EGP</span>
                    </div>
                    <div className="w-full h-2 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '10%' }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="h-full bg-gradient-to-r from-[#009689] to-[#00b8db] rounded-full"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}