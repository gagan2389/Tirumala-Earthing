import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

const EarthingSolution = () => {
  const comparisons = [
    {
      traditional: 'One GI/CI pipe of particular Diameter',
      advanced: 'Chemical base with latest technology without corrosion',
    },
    {
      traditional: 'The Earth Electrode is in direct contact with the soil',
      advanced: 'The TIRUMALA Earthing Electrode is not direct contact with soil',
    },
    {
      traditional: 'Liable to fast corrosion, subsequent decay of the earthing pipe/plate.',
      advanced: 'Absence of corrosion',
    },
    {
      traditional: 'Fluctuation of OHMIC values is more, resulting in frequent maintenance of gadgets /machines and may endanger human life too.',
      advanced: 'Surface area being more the time for distribution of short circuit current is least',
    },
    {
      traditional: 'Galvanization is not adequate',
      advanced: 'Galvanization is adequate',
    },
    {
      traditional: 'Need to be changes frequently in every 3-4 years',
      advanced: 'Practically no need to change i.e. fit and forget',
    },
    {
      traditional: 'Salt, charcoal is used as backfill compound and salt highly corrosive electrolytes, it corrodes GI/CI electrodes, finally get the high Ohmic value',
      advanced: 'The emerald earthing electrode is non-corrosive so there is not much variations in ohmic value',
    },
    {
      traditional: 'Back fill compound (Salt) used will be washed away in rainy seasons and will be results as high ohmic value',
      advanced: 'The back fill compound used is not soluble in water becomes part soil around the electrode',
    },
    {
      traditional: 'It requires a large space and time to install the earthing electrode',
      advanced: 'It requires a less space and time to install the earthing electrode',
    },
  ];

  return (
    <section id="earthing-solution" className="py-20 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-[#fa171a] mb-6">
            EARTHING SOLUTION – A RIGHT ADVANCED EARTHING SYSTEM FOR THE RIGHT APPLICATION!
          </h2>
          
          <div className="max-w-6xl mx-auto space-y-4 text-left mb-8">
            <p className="text-gray-700 leading-relaxed">
              If you are looking for the best earthing solution, you are in the right place. Earthing is an important aspect of electrical systems. It is a must for expensive and delicate equipment to avoid shock or any major hazard. Earthing is an important aspect in the electrical segment.
            </p>
            <p className="text-gray-700 leading-relaxed">
              People often avoid spending on earthing and lightning protection, which may compromise quality. A good quality earthing product is important. The <strong className="text-[#fa171a]">TIRUMALA ADVANCED EARTHING SYSTEM</strong> always meets the customer requirement and at the same time, we also maintain the quality.
            </p>
          </div>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
            DIFFERENCE BETWEEN TRADITIONAL METHOD OF EARTHING & TIRUMALA ADVANCED EARTHING SYSTEM
          </h3>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#fa171a] text-white">
                  <th className="px-4 py-4 text-left font-semibold border border-[#fa171a]">S.No</th>
                  <th className="px-4 py-4 text-left font-semibold border border-[#fa171a]">Traditional Method Of Earthing</th>
                  <th className="px-4 py-4 text-left font-semibold border border-[#fa171a]">TIRUMALA ADVANCED EARTHING SYSTEM</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100 transition-colors`}
                  >
                    <td className="px-4 py-4 font-semibold text-gray-900 border border-gray-300 text-center">
                      {index + 1}
                    </td>
                    <td className="px-4 py-4 text-gray-700 border border-gray-300">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{comparison.traditional}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-700 border border-gray-300">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{comparison.advanced}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {comparisons.map((comparison, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-lg p-4 shadow-md"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </span>
                  <h4 className="text-sm font-semibold text-gray-900">Comparison {index + 1}</h4>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-red-700 mb-1">Traditional Method</p>
                        <p className="text-sm text-gray-700">{comparison.traditional}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-green-700 mb-1">TIRUMALA Advanced</p>
                        <p className="text-sm text-gray-700">{comparison.advanced}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EarthingSolution;

