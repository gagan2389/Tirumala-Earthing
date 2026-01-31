import { motion } from 'framer-motion';
import cbElectrode from '../images/products/CB EARTHING ELECTRODE.png';
import copperBondedRod from '../images/products/COPPER BONDED SOLID ROD.png';
import copperElectrode from '../images/products/COPPER EARTHING ELECTRODE.png';
import csElectrode from '../images/products/CS EARTHING ELECTRODE.png';
import giElectrode from '../images/products/GI EARTHING ELECTRODE.png';
import compound from '../images/products/Compound.png';
import earthingPit from '../images/products/EARTHING PIT.png';
import lightningProtection from '../images/products/LIGHTNING PROTECTION.png';
import lightningProtection2 from '../images/products/LIGHTNING PROTECTION2.png';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'CB Earthing Electrode',
            image: cbElectrode,
            description: 'Copper Bonded Earthing Electrode provides excellent conductivity and corrosion resistance for reliable grounding systems.',
        },
        {
            id: 2,
            name: 'Copper Bonded Solid Rod',
            image: copperBondedRod,
            description: 'High-quality copper bonded solid rod designed for superior electrical conductivity and long-lasting performance.',
        },
        {
            id: 3,
            name: 'Copper Earthing Electrode',
            image: copperElectrode,
            description: 'Premium copper earthing electrode offering maximum conductivity and durability for critical applications.',
        },
        {
            id: 4,
            name: 'CS Earthing Electrode',
            image: csElectrode,
            description: 'Carbon Steel Earthing Electrode providing robust grounding solutions with excellent mechanical strength.',
        },
        {
            id: 5,
            name: 'GI Earthing Electrode',
            image: giElectrode,
            description: 'Galvanized Iron Earthing Electrode offering cost-effective grounding solutions with reliable performance.',
        },
        {
            id: 6,
            name: 'Compound',
            image: compound,
            description: 'High-performance earthing compound designed to enhance conductivity and reduce soil resistivity for optimal grounding systems.',
        },
        {
            id: 7,
            name: 'Earthing Pit',
            image: earthingPit,
            description: 'Complete earthing pit solution providing comprehensive grounding infrastructure for safe and reliable electrical systems.',
        },
        {
            id: 8,
            name: 'Lightning Protection',
            image: lightningProtection,
            description: 'Advanced lightning protection system designed to safeguard structures and equipment from lightning strikes and electrical surges.',
        },
        {
            id: 9,
            name: 'Lightning Protection System',
            image: lightningProtection2,
            description: 'Comprehensive lightning protection solution with advanced technology to protect buildings and critical infrastructure from lightning damage.',
        },
    ];

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <main className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Tirumala Earthing <span className="text-[#fa171a]">Products</span>
                    </h1>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
                        Premium Chemical Earthing, Lightning Arrestors, and Electrodes designed by <span className="font-semibold text-[#fa171a]">Tirumala Earthing</span>. High-quality solutions for safety across Vijayawada.
                    </p>
                </motion.div>

                {/* Products Grid - 3 columns on desktop/tablet, 1 column on mobile */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative h-64 md:h-72 overflow-hidden bg-white">
                                <motion.img
                                    src={product.image}
                                    alt={product.name}
                                    width={1024}
                                    height={1536}
                                    loading="lazy"
                                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                                    whileHover={{ scale: 1.05 }}
                                />
                            </div>
                            <div className="p-5 md:p-6 flex flex-col flex-grow">
                                <h3 className="text-xl md:text-2xl font-bold text-[#fa171a] mb-3">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                    {product.description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={scrollToContact}
                                    className="w-full bg-[#fa171a] text-white py-2.5 md:py-3 rounded-lg font-semibold hover:bg-[#fa171a]/80 transition-colors text-sm md:text-base mt-auto"
                                >
                                    Enquire Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>


            </div>
        </main>
    );
};

export default Products;

