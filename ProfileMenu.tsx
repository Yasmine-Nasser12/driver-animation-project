import { User, Wallet, Moon, Globe, UserPlus, Settings, HelpCircle, LogOut, ChevronRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ProfileMenuProps {
  onNavigateToProfile: () => void;
  onNavigateToSettings?: () => void;
  onNavigateToReviews?: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.25
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -25, scale: 0.96 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 18,
      mass: 0.7
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      mass: 0.8,
      delay: 0.1
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

const avatarVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 20,
      delay: 0.2
    }
  }
};

export function ProfileMenu({ onNavigateToProfile, onNavigateToSettings, onNavigateToReviews }: ProfileMenuProps) {
  return (
    <div className="bg-[#0f2334] min-h-screen pb-24">
      {/* Header */}
      <motion.div className="pt-8 pb-6 px-6" variants={headerVariants} initial="hidden" animate="visible">
        <h1 className="text-white text-[24px] font-['Arimo',sans-serif] font-normal leading-[36px] text-center">
          Profile
        </h1>
      </motion.div>

      {/* Profile Card */}
      <motion.div className="mx-6 mb-6 bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[20px] p-6" variants={cardVariants} initial="hidden" animate="visible">
        <div className="flex flex-col items-center">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="bg-gradient-to-b from-[#009689] to-[#00b8db] via-[#00bba7] p-[2px] rounded-full">
              <div className="bg-[#192c3d] rounded-full p-[6px]">
                <div className="bg-gradient-to-br from-[#ff8904] to-[#9810fa] rounded-full size-[80px] flex items-center justify-center">
                  <span className="text-white text-[16px] font-['Arimo',sans-serif] font-normal">AA</span>
                </div>
              </div>
            </div>
            {/* Online indicator */}
            <div className="absolute bottom-0 right-0 bg-gradient-to-b from-[#009689] to-[#00b8db] via-[#00bba7] p-[1.6px] rounded-full">
              <div className="bg-white rounded-full size-[12px]" />
            </div>
          </div>

          {/* Name & Email */}
          <h2 className="text-white text-[20px] font-['Arimo',sans-serif] font-normal mb-1">
            Ahmed Adel
          </h2>
          <p className="text-[rgba(203,251,241,0.5)] text-[16px] font-['Arimo',sans-serif] font-normal">
            driver@truckmate.com
          </p>
        </div>
      </motion.div>

      {/* Menu Items */}
      <motion.div className="px-6 space-y-3" variants={containerVariants} initial="hidden" animate="visible">
        {/* Your Profile */}
        <motion.button
          onClick={onNavigateToProfile}
          className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between"
          variants={itemVariants}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex items-center gap-3">
            <User className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Your profile
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>

        {/* My Wallet */}
        <motion.button className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between" variants={itemVariants} whileTap={{ scale: 0.97 }}>
          <div className="flex items-center gap-3">
            <Wallet className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              My Wallet
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>

        {/* Dark Mode */}
        <motion.div className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between" variants={itemVariants}>
          <div className="flex items-center gap-3">
            <Moon className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Dark Mode
            </span>
          </div>
          {/* Toggle */}
          <div className="bg-[rgba(0,213,190,0.8)] rounded-full w-[44px] h-[24px] p-[2px] flex items-center justify-end">
            <div className="bg-white rounded-full size-[20px] shadow-[0px_4px_6px_0px_rgba(0,0,0,0.1),0px_2px_4px_0px_rgba(0,0,0,0.1)]" />
          </div>
        </motion.div>

        {/* Language */}
        <motion.button className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between" variants={itemVariants} whileTap={{ scale: 0.97 }}>
          <div className="flex items-center gap-3">
            <Globe className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Language
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>

        {/* Invite Friends */}
        <motion.button className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between" variants={itemVariants} whileTap={{ scale: 0.97 }}>
          <div className="flex items-center gap-3">
            <UserPlus className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Invite Friends
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>

        {/* Reviews & Ratings */}
        <motion.button
          onClick={onNavigateToReviews}
          className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between"
          variants={itemVariants}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex items-center gap-3">
            <Star className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Reviews & Ratings
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>

        {/* Settings */}
        <motion.button
          onClick={onNavigateToSettings}
          className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between"
          variants={itemVariants}
          whileTap={{ scale: 0.97 }}
        >
          <div className="flex items-center gap-3">
            <Settings className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Settings
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>

        {/* Support Setting */}
        <motion.button className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between" variants={itemVariants} whileTap={{ scale: 0.97 }}>
          <div className="flex items-center gap-3">
            <HelpCircle className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Support Setting
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>

        {/* Log out */}
        <motion.button className="w-full bg-[rgba(10,22,40,0.7)] border border-[rgba(0,213,190,0.2)] rounded-[14px] px-[16px] py-[16px] flex items-center justify-between" variants={itemVariants} whileTap={{ scale: 0.97 }}>
          <div className="flex items-center gap-3">
            <LogOut className="size-[20px] text-[#00d5be] opacity-80" strokeWidth={1.67} />
            <span className="text-[rgba(240,253,250,0.9)] text-[16px] font-['Arimo',sans-serif] font-normal">
              Log out
            </span>
          </div>
          <ChevronRight className="size-[20px] text-[rgba(203,251,241,0.3)]" strokeWidth={1.67} />
        </motion.button>
      </motion.div>
    </div>
  );
}