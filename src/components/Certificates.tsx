import { motion } from 'framer-motion';

const Certificates = () => {
    // Dummy data for certificates
    const certificates = [
        { id: 1, title: 'ISO 9001:2015', image: 'https://via.placeholder.com/300x400?text=ISO+9001:2015' },
        { id: 2, title: 'Safety Compliance', image: 'https://via.placeholder.com/300x400?text=Safety+Compliance' },
        { id: 3, title: 'Quality Assurance', image: 'https://via.placeholder.com/300x400?text=Quality+Assurance' },
        { id: 4, title: 'Environmental Management', image: 'https://via.placeholder.com/300x400?text=Environmental+Mgmt' },
        { id: 5, title: 'Industry Excellence', image: 'https://via.placeholder.com/300x400?text=Industry+Excellence' },
        { id: 6, title: 'Best Earthing Solution', image: 'https://via.placeholder.com/300x400?text=Best+Earthing+Solution' },
    ];

    return (
        <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Our <span className="text-[#fa171a]">Certificates</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We take pride in our commitment to quality and safety. Here are our certifications and recognitions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative group">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-semibold text-gray-900">{cert.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;
