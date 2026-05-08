import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Share2, Truck, Package, Star, DollarSign, MapPin, Clock, TrendingUp, CheckCircle2 } from 'lucide-react';

interface ProfileDetailsProps {
  onBack: () => void;
}

type TabType = 'about' | 'shipments';

const headerVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18,
      delay: 0.15
    }
  }
};

const statsVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const statItemVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 18
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18
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
      delay: 0.1
    }
  }
};

const infoRowVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

const infoItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 15
    }
  }
};

const shipmentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const shipmentItemVariants = {
  hidden: { opacity: 0, x: -20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 120,
      damping: 18
    }
  }
};

const driverStats = {
  totalTrips: 75,
  completed: 50,
  rating: 4.8,
  earnings: '$2.5K'
};

const driverInfo = {
  fullName: 'Ahmed Adel',
  email: 'ahmed.adel@truckmate.com',
  phone: '+20 1012345678',
  licenseNumber: 'CDL-A-123456',
  licenseType: 'Class A CDL',
  truckPlate: 'TRK-5432',
  truckType: 'Heavy Duty Semi',
  capacity: '25 Tons'
};

const shipments = [
  {
    id: '#1432',
    type: 'Heavy Duty',
    from: 'Cairo',
    to: 'Alexandria',
    price: '$150',
    duration: '2h 10m',
    distance: '220 km',
    status: 'Completed'
  },
  {
    id: '#1431',
    type: 'Medium Truck',
    from: 'Cairo',
    to: 'Fayoum',
    price: '$280',
    duration: '4h 30m',
    distance: '350 km',
    status: 'Completed'
  },
  {
    id: '#1430',
    type: 'Light Truck',
    from: 'Cairo',
    to: 'Korba',
    price: '$95',
    duration: '2h 00m',
    distance: '190 km',
    status: 'Pending'
  }
];

export function ProfileDetails({ onBack }: ProfileDetailsProps) {
  const [activeTab, setActiveTab] = useState<TabType>('about');

  return (
    <div className="bg-[#0f2334] min-h-screen">
      {/* Header with Back Button and Share */}
      <div className="pt-8 pb-4 px-6 flex items-center justify-between">
        <button
          onClick={onBack}
          className="bg-[rgba(0,213,190,0.1)] rounded-full size-[32px] flex items-center justify-center"
        >
          <ChevronLeft className="size-[16px] text-[#00d5be]" strokeWidth={1.33} />
        </button>
        <button className="bg-[rgba(0,213,190,0.1)] rounded-full size-[32px] flex items-center justify-center">
          <Share2 className="size-[16px] text-[#00d5be]" strokeWidth={1.58} />
        </button>
      </div>

      {/* Profile Header - Shared between both tabs */}
      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="bg-gradient-to-b from-[#009689] to-[#00b8db] via-[#00bba7] p-[2px] rounded-full">
              <div className="bg-[#192c3d] rounded-full p-[6px]">
                <div className="bg-gradient-to-br from-[#ff8904] to-[#9810fa] rounded-full size-[80px] flex items-center justify-center">
                  <span className="text-white text-[16px] font-['Arimo',sans-serif] font-normal">AA</span>
                </div>
              </div>
            </div>
            {/* Verified Badge */}
            <div className="absolute bottom-0 right-0 bg-gradient-to-b from-[#009689] to-[#00b8db] via-[#00bba7] rounded-full p-[1.6px]">
              <div className="bg-[#0f2334] rounded-full p-1">
                <CheckCircle2 className="size-[12px] text-[#00d5be]" strokeWidth={2} fill="#00d5be" />
              </div>
            </div>
          </div>
        </div>

        {/* Name & Role */}
        <h1 className="text-white text-[20px] font-['Arimo',sans-serif] font-normal text-center mb-1">
          Ahmed Adel
        </h1>
        <p className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal text-center mb-6">
          Driver
        </p>

        {/* Stats Grid */}
        <motion.div className="grid grid-cols-4 gap-4 mb-6" variants={statsVariants} initial="hidden" animate="visible">
          {/* Total Trips */}
          <motion.div className="flex flex-col items-center" variants={statItemVariants}>
            <div className="bg-[rgba(0,213,190,0.1)] rounded-[12px] size-[48px] flex items-center justify-center mb-2">
              <Truck className="size-[20px] text-[#00d5be]" strokeWidth={1.5} />
            </div>
            <span className="text-[#00d5be] text-[18px] font-['Arimo',sans-serif] font-semibold">
              {driverStats.totalTrips}
            </span>
            <span className="text-[rgba(203,251,241,0.5)] text-[11px] font-['Arimo',sans-serif] font-normal">
              Total Trips
            </span>
          </motion.div>

          {/* Completed */}
          <motion.div className="flex flex-col items-center" variants={statItemVariants}>
            <div className="bg-[rgba(0,213,190,0.1)] rounded-[12px] size-[48px] flex items-center justify-center mb-2">
              <Package className="size-[20px] text-[#00d5be]" strokeWidth={1.5} />
            </div>
            <span className="text-[#00d5be] text-[18px] font-['Arimo',sans-serif] font-semibold">
              {driverStats.completed}
            </span>
            <span className="text-[rgba(203,251,241,0.5)] text-[11px] font-['Arimo',sans-serif] font-normal">
              Completed
            </span>
          </motion.div>

          {/* Rating */}
          <motion.div className="flex flex-col items-center" variants={statItemVariants}>
            <div className="bg-[rgba(0,213,190,0.1)] rounded-[12px] size-[48px] flex items-center justify-center mb-2">
              <Star className="size-[20px] text-[#00d5be]" strokeWidth={1.5} />
            </div>
            <span className="text-[#00d5be] text-[18px] font-['Arimo',sans-serif] font-semibold">
              {driverStats.rating}
            </span>
            <span className="text-[rgba(203,251,241,0.5)] text-[11px] font-['Arimo',sans-serif] font-normal">
              Rating
            </span>
          </motion.div>

          {/* Earnings */}
          <motion.div className="flex flex-col items-center" variants={statItemVariants}>
            <div className="bg-[rgba(0,213,190,0.1)] rounded-[12px] size-[48px] flex items-center justify-center mb-2">
              <DollarSign className="size-[20px] text-[#00d5be]" strokeWidth={1.5} />
            </div>
            <span className="text-[#00d5be] text-[18px] font-['Arimo',sans-serif] font-semibold">
              {driverStats.earnings}
            </span>
            <span className="text-[rgba(203,251,241,0.5)] text-[11px] font-['Arimo',sans-serif] font-normal">
              Earnings
            </span>
          </motion.div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-4 border-b border-[rgba(0,213,190,0.2)]">
          <button
            onClick={() => setActiveTab('about')}
            className={`pb-3 relative ${
              activeTab === 'about' ? 'text-[#00d5be]' : 'text-[rgba(203,251,241,0.5)]'
            }`}
          >
            <span className="text-[16px] font-['Arimo',sans-serif] font-normal">About</span>
            {activeTab === 'about' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00d5be]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('shipments')}
            className={`pb-3 relative ${
              activeTab === 'shipments' ? 'text-[#00d5be]' : 'text-[rgba(203,251,241,0.5)]'
            }`}
          >
            <span className="text-[16px] font-['Arimo',sans-serif] font-normal">Shipments</span>
            {activeTab === 'shipments' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00d5be]"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 pb-24">
        {activeTab === 'about' ? (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-white text-[18px] font-['Arimo',sans-serif] font-semibold mb-4">
              Driver Information
            </h2>
            
            <motion.div 
              className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-[16px] p-4 space-y-3"
              variants={infoRowVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Full Name */}
              <motion.div className="flex justify-between items-center py-2" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  Full Name
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.fullName}
                </span>
              </motion.div>

              {/* Email */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  Email
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.email}
                </span>
              </motion.div>

              {/* Phone Number */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  Phone Number
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.phone}
                </span>
              </motion.div>

              {/* License Number */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  License Number
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.licenseNumber}
                </span>
              </motion.div>

              {/* License Type */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  License Type
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.licenseType}
                </span>
              </motion.div>

              {/* Truck Plate */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  Truck Plate
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.truckPlate}
                </span>
              </motion.div>

              {/* Truck Type */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  Truck Type
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.truckType}
                </span>
              </motion.div>

              {/* Capacity */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  Capacity
                </span>
                <span className="text-white text-[14px] font-['Arimo',sans-serif] font-normal">
                  {driverInfo.capacity}
                </span>
              </motion.div>

              {/* Documents */}
              <motion.div className="flex justify-between items-center py-2 border-t border-[rgba(0,213,190,0.1)]" variants={infoItemVariants}>
                <span className="text-[rgba(203,251,241,0.5)] text-[14px] font-['Arimo',sans-serif] font-normal">
                  Documents
                </span>
                <span className="text-[#00d5be] text-[14px] font-['Arimo',sans-serif] font-normal underline">
                  View All Documents
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="shipments"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-[18px] font-['Arimo',sans-serif] font-semibold">
                Shipments
              </h2>
              <button className="text-[#00d5be] text-[14px] font-['Arimo',sans-serif] font-normal">
                View All
              </button>
            </div>

            <motion.div className="space-y-3" variants={shipmentVariants} initial="hidden" animate="visible">
              {shipments.map((shipment, index) => (
                <motion.div
                  key={shipment.id}
                  className="bg-[rgba(10,22,40,0.6)] border border-[rgba(0,213,190,0.15)] rounded-[16px] p-4"
                  variants={shipmentItemVariants}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0,213,190,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#00d5be] text-[12px] font-['Arimo',sans-serif] font-mono">
                      Shipment {shipment.id}
                    </span>
                    <span
                      className={`text-[12px] font-['Arimo',sans-serif] font-normal px-3 py-1 rounded-full ${
                        shipment.status === 'Completed'
                          ? 'bg-[rgba(0,213,190,0.1)] text-[#00d5be]'
                          : 'bg-[rgba(255,137,4,0.1)] text-[#ff8904]'
                      }`}
                    >
                      {shipment.status}
                    </span>
                  </div>

                  {/* Type */}
                  <p className="text-white text-[14px] font-['Arimo',sans-serif] font-normal mb-3">
                    {shipment.type}
                  </p>

                  {/* Route */}
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="size-[14px] text-[#00d5be] flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[rgba(203,251,241,0.7)] text-[12px] font-['Arimo',sans-serif] font-normal">
                      {shipment.from}
                    </span>
                    <div className="flex-1 border-t border-dashed border-[rgba(0,213,190,0.3)]" />
                    <MapPin className="size-[14px] text-[#00d5be] flex-shrink-0" strokeWidth={1.5} />
                    <span className="text-[rgba(203,251,241,0.7)] text-[12px] font-['Arimo',sans-serif] font-normal">
                      {shipment.to}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#00d5be] text-[20px] font-['Arimo',sans-serif] font-semibold">
                      {shipment.price}
                    </span>
                  </div>

                  {/* Duration & Distance */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-[14px] text-[rgba(203,251,241,0.5)]" strokeWidth={1.5} />
                      <span className="text-[rgba(203,251,241,0.5)] text-[12px] font-['Arimo',sans-serif] font-normal">
                        {shipment.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className="size-[14px] text-[rgba(203,251,241,0.5)]" strokeWidth={1.5} />
                      <span className="text-[rgba(203,251,241,0.5)] text-[12px] font-['Arimo',sans-serif] font-normal">
                        {shipment.distance}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}