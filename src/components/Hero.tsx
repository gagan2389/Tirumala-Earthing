import { motion } from 'framer-motion';
import { Button } from 'antd';
import { ArrowRight, Shield, Zap, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import homeImage from '../images/homeImage.png';

const Hero = () => {
  const navigate = useNavigate();

  const features = [
    { icon: Shield, text: 'Certified Products' },
    { icon: Zap, text: 'Expert Installation' },
    { icon: Award, text: 'Quality Assured' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToProducts = () => {
    navigate('/products');
  };

  return (
    <section id="home" className="pt-25 pb-16 bg-gradient-to-br from-blue-50 to-white min-h-screen flex items-center mt-2 overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-[#fa171a] text-white rounded-full text-sm font-semibold mb-4"
            >
              Leading Earthing Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Professional{' '}
              <span className="text-[#fa171a]">Earthing & Lightning</span>{' '}
              Arrestor Solutions in Vijayawada
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Trusted by industries nationwide, <span className="font-semibold">Tirumala Tech (Tirumala Earthing)</span> provides reliable electrical safety.
              We specialize in Chemical Earthing, Lightning Arrestors, and high-quality Electrodes for superior Vijayawada Earthing & Electric infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button size="large" className="h-12 px-8 !bg-[#fa171a] !text-white !rounded-lg !font-semibold hover:!bg-[#fa171a]/90 !text-sm !md:text-base !border-none" onClick={scrollToContact}>
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="large" className="h-12 px-8" onClick={navigateToProducts}>
                Our Products
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-10 h-10 bg-[#fa171a] rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative overflow-hidden"
          >
            <img
              src={homeImage}
              alt="Earthing Solutions"
              width={1536}
              height={1024}
              fetchPriority="high"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

