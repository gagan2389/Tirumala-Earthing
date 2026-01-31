import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import residentialImage from '../images/residentialservices.png';
import commercialImage from '../images/commercialservices.png';
import industrialImage from '../images/industrialservices.png';

const Services = () => {
  const services = [
    {
      title: 'Residential Services',
      description: 'Protect your home and family with reliable earthing and lightning protection systems. Expert installation for residential properties ensuring complete electrical safety.',
      overlayColor: 'bg-slate-800/70',
      backgroundImage: residentialImage,
      buttonStyle: 'bg-white text-[#fa171a] border-[#fa171a] hover:bg-gray-50',
      iconColor: 'text-[#fa171a]',
    },
    {
      title: 'Commercial Services',
      description: 'Comprehensive earthing solutions for commercial buildings, offices, and retail spaces. Keep your business operations safe with professional electrical protection systems.',
      overlayColor: 'bg-orange-500/30',
      backgroundImage: commercialImage,
      buttonStyle: 'bg-black text-white border-black hover:bg-gray-800',
      iconColor: 'text-white',
    },
    {
      title: 'Industrial Services',
      description: 'Advanced earthing and lightning protection for industrial facilities, power plants, and manufacturing units. Robust solutions designed for heavy-duty applications.',
      overlayColor: 'bg-gray-900/80',
      backgroundImage: industrialImage,
      buttonStyle: 'bg-white text-[#fa171a] border-[#fa171a] hover:bg-gray-50',
      iconColor: 'text-[#fa171a]',
    },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-0">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative h-[300px] overflow-hidden group"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={service.backgroundImage}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Overlay */}
            <div className={`absolute inset-0 ${service.overlayColor} transition-opacity duration-300 group-hover:opacity-80`} />

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-2xl lg:text-3xl font-bold text-white mb-4"
              >
                {service.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="text-gray-200 text-sm lg:text-base mb-6 max-w-xs leading-relaxed"
              >
                {service.description}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
                className={`px-6 py-3 rounded-lg font-semibold border-2 transition-all flex items-center gap-2 ${service.buttonStyle}`}
              >
                Contact Us
                <ArrowRight className={`w-5 h-5 ${service.iconColor}`} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;

