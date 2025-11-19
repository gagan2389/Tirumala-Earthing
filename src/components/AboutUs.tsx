import { useState } from 'react';
import { motion } from 'framer-motion';
import isoLogo from '../images/isologo.png';
import apcpdclLogo from '../images/apcpdcl.png';
import warrantyBadge from '../images/5yearwarranty.png';
import satisfactionBadge from '../images/100satisfaction.png';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState<'mission' | 'vision'>('mission');
  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-[#fa171a]">Us</span>
          </h1>
          <div className="w-24 h-1 bg-[#fa171a] mx-auto mb-4" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our company and our commitment to excellence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Company Profile Section */}
            <div>
              <h2 className="text-3xl font-bold text-[#fa171a] mb-6">
                Company Profile
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                Tirumala Earthing was established in the year 2001 by a group of young electrical engineers who decided to develop new products which would play an important role in minimizing losses caused by electrical fault currents. Conventional Earthing methods were just not enough as they lacked durability and needed regular periodic maintenance to perform satisfactorily. After extensive field studies and research, Tirumala Earthing was developed.
              </p>
            </div>

            {/* Certifications Section */}
            <div>
              <h2 className="text-3xl font-bold text-[#fa171a] mb-6">
                Certifications
              </h2>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
                {/* ISO Certification */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col items-center"
                >
                  <img 
                    src={isoLogo} 
                    alt="ISO 9001:2015 Certified Company" 
                    className="w-48 h-48 object-contain"
                  />
                </motion.div>

                {/* APCPDCL Certification */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col items-center"
                >
                  <img 
                    src={apcpdclLogo} 
                    alt="APCPDCL Approved Vendor" 
                    className="w-48 h-48 object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Why Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 shadow-lg mt-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Section - Why Us */}
            <div>
              <h2 className="text-3xl font-bold text-[#fa171a] mb-6">
                Why Us?
              </h2>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">EASY TO INSTALL</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">COST EFFECTIVE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">LESS AREA CONSUMPTION</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">CORROSION PROOF</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">LOW EARTH RESISTANCE</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">STABLE EARTH VALUES</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">PERSONAL & EQUIPMENT SAFETY</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#fa171a] mr-3 mt-1">•</span>
                  <span className="text-gray-700 text-lg">MINIMUM LIFE IS 25 YEARS</span>
                </li>
              </ul>

            </div>

            {/* Right Section - Mission & Vision */}
            <div>
              <div className="border-2 border-gray-200 rounded-xl bg-white overflow-hidden">
                {/* Tabs */}
                <div className="flex border-b-2 border-gray-200">
                  <button
                    onClick={() => setActiveTab('mission')}
                    className={`flex-1 px-6 py-4 text-lg font-bold transition-colors ${
                      activeTab === 'mission'
                        ? 'text-[#fa171a] border-b-4 border-[#fa171a]/60'
                        : '!text-[#fa171a]'
                    }`}
                  >
                    Mission
                  </button>
                  <button
                    onClick={() => setActiveTab('vision')}
                    className={`flex-1 px-6 py-4 text-lg font-bold transition-colors ${
                      activeTab === 'vision'
                        ? 'text-[#fa171a] border-b-4 border-[#fa171a]/60'
                        : '!text-[#fa171a]'
                    }`}
                  >
                    Vision
                  </button>
                </div>

                {/* Tab Content */}
                <div className="p-8 bg-white">
                  {activeTab === 'mission' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg">
                        To save life, livestock and assets by providing comprehensive electrical safety & reliability solutions
                      </p>
                    </motion.div>
                  )}

                  {activeTab === 'vision' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-700 leading-relaxed text-lg">
                        To uphold the best engineering practices and to provide outstanding products and services
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Warranty Badges Below Mission/Vision */}
              <div className="flex flex-col sm:flex-row gap-6 mt-8 items-center justify-center">
                {/* Warranty Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-col items-center bg-white p-4 rounded-lg"
                >
                 <img 
  src={warrantyBadge} 
  alt="5 Year Warranty Guaranteed" 
  className="w-48 h-48 object-contain bg-white"
  style={{ backgroundColor: '#ffffff' }}
/>

                </motion.div>

                {/* Satisfaction Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-col items-center bg-white p-4 rounded-lg"
                >
                  <img 
                    src={satisfactionBadge} 
                    alt="100% Satisfaction Guaranteed" 
                    className="w-48 h-48 object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

