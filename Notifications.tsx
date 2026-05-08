import svgPaths from "../imports/svg-bgfqu6qooo";
import { motion } from 'motion/react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      mass: 0.8
    }
  }
};

const headerVariants = {
  hidden: { opacity: 0, y: -30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      mass: 0.5
    }
  }
};

const dotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
};

const pulseVariants = {
  initial: { scale: 1, opacity: 0.6 },
  animate: {
    scale: [1, 1.3, 1],
    opacity: [0.6, 0.2, 0.6],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

const progressVariants = {
  hidden: { width: 0 },
  visible: {
    width: '47%',
    transition: {
      duration: 1.5,
      delay: 0.8,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

export function Notifications() {
  return (
    <div className="bg-[#0f2334] min-h-screen pb-24 overflow-y-auto">
      {/* Header */}
      <div className="pt-8 pb-4 px-6">
        <motion.h1 variants={headerVariants} initial="hidden" animate="visible" className="text-white text-[24px] font-['Arimo',sans-serif] font-normal leading-[36px]">
          Notifications
        </motion.h1>
      </div>

      {/* Content Container */}
      <div className="px-6">
        {/* Today Section */}
        <div className="mb-6">
          <p className="text-[rgba(203,251,241,0.5)] text-[16px] font-['Arimo',sans-serif] font-normal leading-[24px] mb-4">
            Today
          </p>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[11px] top-[20px] bottom-0 w-[2px] bg-[rgba(0,213,190,0.2)]" />

            {/* Notifications */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
              {/* Notification 1: Trip in progress */}
              <motion.div variants={itemVariants} className="relative pl-[38px]" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                {/* Timeline Dot */}
                <motion.div variants={dotVariants} initial="hidden" animate="visible" className="absolute left-0 top-[20px] size-[24px]">
                  <motion.div variants={pulseVariants} initial="initial" animate="animate" className="absolute bg-[rgba(0,213,190,0.6)] blur-[12px] left-[-3px] opacity-60 rounded-full size-[24px] top-[-3px]" />
                  <div className="absolute bg-[rgba(0,213,190,0.3)] rounded-full size-[24px] left-0 top-0 border-[1.6px] border-[#00d5be] flex items-center justify-center">
                    <motion.div 
                      className="bg-[#00d5be] rounded-full size-[8px]"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div 
                  className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]"
                  whileHover={{ 
                    borderColor: 'rgba(0,213,190,0.4)',
                    boxShadow: '0px 8px 16px 0px rgba(0,213,190,0.15)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Status Badge */}
                  <motion.div 
                    className="inline-block bg-[rgba(0,213,190,0.1)] rounded-full px-3 h-[26px] mb-3"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  >
                    <p className="text-[#00d5be] text-[12px] font-['Arimo',sans-serif] font-normal leading-[26px]">
                      Running
                    </p>
                  </motion.div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon */}
                    <motion.div 
                      className="bg-[rgba(0,213,190,0.1)] rounded-[10px] size-[36px] flex items-center justify-center flex-shrink-0"
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <svg className="size-5" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p21950300} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M5.83333 0.833333H0.833333" stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(7 15)" />
                        <path d={svgPaths.p164be260} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(11.67 6.67)" />
                        <path d={svgPaths.p29efb800} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(12.5 13.33)" />
                        <path d={svgPaths.p29efb800} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(4.17 13.33)" />
                      </svg>
                    </motion.div>

                    {/* Title */}
                    <p className="text-white text-[14px] font-['Arimo',sans-serif] font-normal leading-[24px]">
                      Trip in progress
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[rgba(240,253,250,0.7)] text-[12px] font-['Arimo',sans-serif] font-normal leading-[21px] mb-3">
                    Your trip from Maadi to Nasr City is currently active
                  </p>

                  {/* Progress Bar */}
                  <div className="flex items-end gap-2">
                    <div className="flex-1 bg-[rgba(0,213,190,0.1)] rounded-full h-[8px] overflow-hidden">
                      <motion.div 
                        className="bg-gradient-to-b from-[#009689] to-[#00b8db] via-[#00bba7] h-full rounded-full" 
                        initial={{ width: 0 }}
                        animate={{ width: '47%' }}
                        transition={{ duration: 1.5, delay: 0.8, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                    <motion.p 
                      className="text-[#00d5be] text-[12px] font-['Arimo',sans-serif] font-normal leading-[18px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                    >
                      47%
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Notification 2: Trip completed */}
              <motion.div variants={itemVariants} className="relative pl-[38px]" whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
                {/* Timeline Dot */}
                <motion.div variants={dotVariants} initial="hidden" animate="visible" className="absolute left-0 top-[20px] size-[24px]">
                  <div className="absolute bg-[rgba(0,213,190,0.6)] blur-[12px] left-[-3px] opacity-60 rounded-full size-[24px] top-[-3px]" />
                  <div className="absolute bg-[rgba(0,213,190,0.3)] rounded-full size-[24px] left-0 top-0 border-[1.6px] border-[#00d5be] flex items-center justify-center">
                    <div className="bg-[#00d5be] rounded-full size-[8px]" />
                  </div>
                </motion.div>

                {/* Card */}
                <motion.div 
                  className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]"
                  whileHover={{ 
                    borderColor: 'rgba(0,213,190,0.4)',
                    boxShadow: '0px 8px 16px 0px rgba(0,213,190,0.15)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Status Badge */}
                  <div className="inline-block bg-[rgba(0,213,190,0.1)] rounded-full px-3 h-[26px] mb-3">
                    <p className="text-[#00d5be] text-[12px] font-['Arimo',sans-serif] font-normal leading-[26px]">
                      Completed
                    </p>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon */}
                    <div className="bg-[rgba(0,213,190,0.1)] rounded-[10px] size-[36px] flex items-center justify-center flex-shrink-0">
                      <svg className="size-5" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.pd03f500} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(1.67 1.67)" />
                        <path d={svgPaths.pafc1d00} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(2.5 3.33)" />
                      </svg>
                    </div>

                    {/* Title */}
                    <p className="text-white text-[14px] font-['Arimo',sans-serif] font-normal leading-[24px]">
                      Trip completed
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[rgba(240,253,250,0.7)] text-[12px] font-['Arimo',sans-serif] font-normal leading-[21px] mb-3">
                    Delivery to Nasr City has been completed successfully
                  </p>

                  {/* Progress Bar */}
                  <div className="flex items-end gap-2">
                    <div className="flex-1 bg-[rgba(0,213,190,0.1)] rounded-full h-[8px] overflow-hidden">
                      <div className="bg-gradient-to-b from-[#009689] to-[#00b8db] via-[#00bba7] h-full rounded-full" style={{ width: '100%' }} />
                    </div>
                    <p className="text-[#00d5be] text-[12px] font-['Arimo',sans-serif] font-normal leading-[18px]">
                      100%
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Earlier Section */}
        <div className="mb-6">
          <p className="text-[rgba(203,251,241,0.5)] text-[16px] font-['Arimo',sans-serif] font-normal leading-[24px] mb-4">
            Earlier
          </p>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-[11px] top-[20px] bottom-0 w-[2px] bg-[rgba(0,213,190,0.2)]" />

            {/* Notifications */}
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
              {/* Notification 3: New offer received */}
              <div className="relative pl-[38px]">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-[20px] size-[24px]">
                  <div className="absolute bg-[rgba(0,213,190,0.3)] rounded-full size-[24px] left-0 top-0 border-[1.6px] border-[#00d5be] flex items-center justify-center">
                    <div className="bg-[#00d5be] rounded-full size-[8px]" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]">
                  {/* Status Badge */}
                  <div className="inline-block bg-[rgba(255,137,4,0.1)] rounded-full px-3 h-[26px] mb-3">
                    <p className="text-[#ff8904] text-[12px] font-['Arimo',sans-serif] font-normal leading-[26px]">
                      Alert
                    </p>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon */}
                    <div className="bg-[rgba(255,137,4,0.1)] rounded-[10px] size-[36px] flex items-center justify-center flex-shrink-0">
                      <svg className="size-5" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p147ca400} stroke="#FF8904" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(0.83 0.83)" />
                        <path d="M0.833333 0.833333V4.16667" stroke="#FF8904" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(9.17 6.67)" />
                        <path d="M0.833333 0.833333H0.841667" stroke="#FF8904" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(9.17 13.33)" />
                      </svg>
                    </div>

                    {/* Title */}
                    <p className="text-white text-[14px] font-['Arimo',sans-serif] font-normal leading-[24px]">
                      New offer received
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[rgba(240,253,250,0.7)] text-[14px] font-['Arimo',sans-serif] font-normal leading-[21px]">
                    A new delivery offer is available for you
                  </p>
                </div>
              </div>

              {/* Notification 4: Payment added */}
              <div className="relative pl-[38px]">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-[20px] size-[24px]">
                  <div className="absolute bg-[rgba(0,213,190,0.3)] rounded-full size-[24px] left-0 top-0 border-[1.6px] border-[#00d5be] flex items-center justify-center">
                    <div className="bg-[#00d5be] rounded-full size-[8px]" />
                  </div>
                </div>

                {/* Card */}
                <div className="bg-[#0f1c2e] border border-[rgba(0,213,190,0.2)] rounded-2xl p-4 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.25)]">
                  {/* Status Badge */}
                  <div className="inline-block bg-[rgba(0,213,190,0.1)] rounded-full px-3 h-[26px] mb-3">
                    <p className="text-[#00d5be] text-[12px] font-['Arimo',sans-serif] font-normal leading-[26px]">
                      Completed
                    </p>
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-3 mb-3">
                    {/* Icon */}
                    <div className="bg-[rgba(0,213,190,0.1)] rounded-[10px] size-[36px] flex items-center justify-center flex-shrink-0">
                      <svg className="size-5" fill="none" viewBox="0 0 20 20">
                        <path d={svgPaths.p3b514700} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(1.67 2.5)" />
                        <path d={svgPaths.p1787de00} stroke="#00D5BE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" transform="translate(2.5 4.17)" />
                      </svg>
                    </div>

                    {/* Title */}
                    <p className="text-white text-[14px] font-['Arimo',sans-serif] font-normal leading-[24px]">
                      Payment added
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-[rgba(240,253,250,0.7)] text-[14px] font-['Arimo',sans-serif] font-normal leading-[21px]">
                    850 EGP has been added to your wallet
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}