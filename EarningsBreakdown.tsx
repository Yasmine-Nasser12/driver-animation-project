import { ChevronLeft, TrendingUp, MapPin, Navigation, Clock } from 'lucide-react';
import { motion } from 'motion/react';

interface EarningsBreakdownProps {
  onBack: () => void;
}

export function EarningsBreakdown({ onBack }: EarningsBreakdownProps) {
  return (
    <div className="min-h-screen bg-[#0f2334] pb-8 relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-6 pb-4 px-5"
      >
        <div className="flex items-center gap-4 mb-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="bg-[rgba(0,213,190,0.1)] rounded-xl p-2 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5 text-[#00d5be]" />
          </motion.button>
          <div>
            <h1 className="text-white text-[24px] font-normal mb-1">Earnings Breakdown</h1>
            <p className="text-[rgba(203,251,241,0.5)] text-[14px]">Where your money comes from</p>
          </div>
        </div>

        {/* Primary Metric Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="relative mb-6"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,213,190,0.3)] to-[rgba(0,150,137,0.2)] rounded-[20px] blur-[24px] opacity-50 -z-10" />

          {/* Card */}
          <div className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-[20px] p-6 shadow-[0px_8px_24px_0px_rgba(0,0,0,0.3)]">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-[rgba(203,251,241,0.5)] text-[12px] mb-2">Primary Metric</p>
                <p className="text-white text-[14px] mb-2">Average Earnings per Trip</p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-[#00d5be] text-[42px] font-normal leading-[42px]"
                >
                  470 EGP
                </motion.p>
              </div>
              <div className="w-12 h-12 bg-[rgba(0,213,190,0.1)] rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#00d5be]" />
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-[rgba(0,213,190,0.05)] border border-[rgba(0,213,190,0.1)] rounded-xl p-3">
              <p className="text-[rgba(203,251,241,0.7)] text-[13px] leading-[19.5px]">
                This is 18% higher than the platform average
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contributing Factors */}
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[rgba(203,251,241,0.5)] text-[12px] tracking-[0.3px] uppercase mb-3"
          >
            Contributing Factors
          </motion.p>

          {/* Factor 1: 18 trips this week */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-5 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[rgba(0,213,190,0.1)] rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-[#00d5be]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-[16px] font-normal mb-0.5">18 trips this week</p>
                <p className="text-[rgba(203,251,241,0.5)] text-[12px]">
                  8,460 EGP total from completed trips
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[rgba(203,251,241,0.5)] text-[11px]">Contribution</span>
                <span className="text-[#00d5be] text-[11px]">100%</span>
              </div>
              <div className="w-full h-2 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-[#009689] to-[#00b8db] rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Factor 2: Long-distance trips */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-5 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[rgba(0,213,190,0.1)] rounded-lg flex items-center justify-center">
                <Navigation className="w-4 h-4 text-[#00d5be]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-[16px] font-normal mb-0.5">Long-distance trips</p>
                <p className="text-[rgba(203,251,241,0.5)] text-[12px]">
                  5,200 EGP from trips over 20km
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[rgba(203,251,241,0.5)] text-[11px]">
                  Most earnings came from these
                </span>
                <span className="text-[#00d5be] text-[11px]">61%</span>
              </div>
              <div className="w-full h-2 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '61%' }}
                  transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-[#009689] to-[#00b8db] rounded-full"
                />
              </div>
            </div>
          </motion.div>

          {/* Factor 3: Weekend earnings */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-5 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.2)]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-[rgba(0,213,190,0.1)] rounded-lg flex items-center justify-center">
                <Clock className="w-4 h-4 text-[#00d5be]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-[16px] font-normal mb-0.5">Weekend earnings</p>
                <p className="text-[rgba(203,251,241,0.5)] text-[12px]">
                  3,100 EGP earned on weekends
                </p>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[rgba(203,251,241,0.5)] text-[11px]">
                  You earn more on weekends
                </span>
                <span className="text-[#00d5be] text-[11px]">37%</span>
              </div>
              <div className="w-full h-2 bg-[rgba(0,213,190,0.1)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '37%' }}
                  transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-[#009689] to-[#00b8db] rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Key Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 bg-gradient-to-b from-[rgba(0,213,190,0.1)] to-[rgba(0,184,166,0.05)] border border-[rgba(0,213,190,0.2)] rounded-2xl p-5"
        >
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-[rgba(0,213,190,0.2)] rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-4 h-4 text-[#00d5be]" />
            </div>
            <div>
              <p className="text-[#00d5be] text-[12px] tracking-[0.3px] uppercase mb-2">
                Key Insight
              </p>
              <p className="text-white text-[14px] leading-[21px] mb-2">
                Most of your earnings came from long-distance trips during peak hours
              </p>
              <p className="text-[rgba(203,251,241,0.5)] text-[12px] leading-[18px]">
                Consider accepting more trips over 20km for higher earnings
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 bg-gradient-to-b from-[#009689] to-[#00b8db] rounded-2xl px-4 py-4 shadow-[0px_4px_16px_0px_rgba(0,213,190,0.3)] flex items-center justify-center gap-2"
        >
          <span className="text-white text-[16px]">See full trip breakdown</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="white"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
}
