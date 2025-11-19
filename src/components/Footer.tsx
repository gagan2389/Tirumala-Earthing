import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashLink = (href: string) => {
    if (location.pathname === '/') {
      // If on home page, scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/', isRoute: true },
        { label: 'About Us', href: '/about', isRoute: true },
        { label: 'Products', href: '/products', isRoute: true },
        { label: 'Services', href: '#services', isRoute: false },
      ],
    },
    {
      title: 'Products',
      links: [
        { label: 'Earthing Electrodes', href: '/products', isRoute: true },
        { label: 'Lightning Arresters', href: '/products', isRoute: true },
        { label: 'Earthing Accessories', href: '/products', isRoute: true },
        { label: 'Chemical Earthing', href: '/products', isRoute: true },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Installation', href: '#services' },
        { label: 'Maintenance', href: '#services' },
        { label: 'Consultation', href: '#services' },
        { label: 'Testing', href: '#services' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <img src={logo} alt="Tirumala Earthing Logo" className="h-20 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading provider of earthing and lightning protection solutions with years of expertise in electrical safety.
            </p>
            {/* <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div> */}
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {'isRoute' in link && link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleHashLink(link.href);
                        }}
                        className="text-gray-400 hover:text-white transition-colors text-sm cursor-pointer"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-10 h-10 text-[#fa171a]" />
                <span className="text-gray-400 text-sm">
                  11-10-37, Ammisetty Vari St, Islampet, Vijayawada, Andhra Pradesh 520001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#fa171a]" />
                <span className="text-gray-400 text-sm">+91-9347644772 / +91-8332993388</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#fa171a]" />
                <span className="text-gray-400 text-sm">info@tirumalaearthing.com</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm"
        >
          <p>&copy; {currentYear} Tirumala Earthing. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

