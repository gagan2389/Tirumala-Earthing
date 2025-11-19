import { motion } from 'framer-motion';
import { Shield, Headphones, DollarSign, CheckCircle } from 'lucide-react';
import safeSecureImage from '../images/safe&secure.png';
import supportImage from '../images/24x7Support.png';
import lowCostImage from '../images/lowcost.png';

const WhyChooseUs = () => {
  const benefits = [
    'EASY TO INSTALL',
    'COST EFFECTIVE',
    'LESS AREA CONSUMPTION',
    'CORROSION PROOF',
    'LOW EARTH RESISTANCE',
    'STABLE EARTH VALUES',
    'PERSONAL & EQUIP SAFETY',
    'MINIMUM LIFE IS 25 YEARS',
  ];

  const features = [
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Our advanced earthing systems provide maximum protection for your equipment and personnel, ensuring complete safety and security.',
      image: safeSecureImage,
    },
    {
      icon: Headphones,
      title: '24x7 Support',
      description: 'Round-the-clock technical support and assistance to help you with any queries or issues related to your earthing systems.',
      image: supportImage,
    },
    {
      icon: DollarSign,
      title: 'Low Cost',
      description: 'Cost-effective solutions that provide excellent value for money without compromising on quality and performance.',
      image: lowCostImage,
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-[0.5fr_1fr] gap-4 items-center">
          {/* Left Side - Why Choose Us List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#fa171a] mb-6">
              Why Choose Us
            </h2>
            <ul className="space-y-2.5">
              {benefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-2.5 text-gray-800 text-base"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-semibold">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Side - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-lg group h-[300px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900/70 group-hover:bg-gray-900/60 transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 h-full flex flex-col">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-3"
                  >
                    <div className="w-14 h-14 bg-[#fa171a] rounded-lg flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-200 text-xs mb-4 flex-grow leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#fa171a] px-3 py-2 rounded font-semibold text-xs hover:bg-gray-100 transition-colors flex items-center justify-center gap-1.5"
                  >
                    Know More
                    <span className="text-sm">&gt;&gt;</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

