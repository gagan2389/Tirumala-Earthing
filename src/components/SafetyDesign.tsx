import { motion } from 'framer-motion';
import { Button } from 'antd';
import { ArrowRight } from 'lucide-react';
import rangeImage from '../images/range.png';

const SafetyDesign = () => {
  const products = [
    'GI ADVANCED EARTHING ELECTRODE (STRIP IN PIPE / PIPE IN PIPE)',
    'COPPER BONDED EARTHING ELECTRODE',
    'COPPER STRIPS IN GI PIPE EARTHING ELECTRODE',
    'PURE COPPER EARTHING ELECTRODE',
    'COPPER BONDED SOLID EARTHING ROD',
    'ADVANCED EARTHING COMPOUND',
    'BENTONITE EARTHING COMPOUND',
    'FRP & POLYMER EARTH PIT INSPECTION CHAMBER',
    'LIGHTNING PROTECTION SYSTEMS E.S.E MODELS: COSMOS / KALRE (MADE IN TURKEY)',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Top Section - Heading and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#fa171a] mb-6">
            Safety through design by Tirumala Tech
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We specialize in providing focused solutions and bring system efficiency to keep businesses and services running efficiently. We have 15+ years of experience in providing consultancy and solutions to a wide range of industries across the globe.
          </p>
        </motion.div>

        {/* Main Content - Image and Product List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={rangeImage}
              alt="Earthing and Lightning Protection Products"
              width={1024}
              height={1536}
              loading="lazy"
              className="w-full max-w-md md:max-w-lg lg:max-w-full h-auto rounded-lg shadow-lg object-contain mx-auto lg:mx-0"
            />
          </motion.div>

          {/* Right Side - Product List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Our Wide{' '}
              <span className="bg-[#fa171a] text-white px-2 py-1 rounded">
                range
              </span>{' '}
              of Maintenance Free Products
            </h3>

            <ul className="space-y-3">
              {products.map((product, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start text-gray-700 text-sm lg:text-base"
                >
                  <span className="text-orange-600 font-bold mr-3 mt-1">
                    &gt;&gt;
                  </span>
                  <span className="leading-relaxed">{product}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4"
            >
              <Button
                type="primary"
                size="large"
                className="!bg-[#fa171a] !text-white !rounded-lg !font-semibold hover:!bg-[#fa171a]/90 !text-sm !md:text-base !border-none"
              >
                Know More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SafetyDesign;

