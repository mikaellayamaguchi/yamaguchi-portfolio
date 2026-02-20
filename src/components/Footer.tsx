import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { Mail } from 'lucide-react';
import logo from '../assets/img/e-portfolio-my-logo.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#2B2A28] dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <img 
                src={logo} 
                alt="MY Portfolio Logo" 
                className="w-12 h-12 rounded-full object-cover mb-4"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h3 className="font-bold mb-4 text-[#F7F4EE]">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '#about' },
                { name: 'Contact', path: '#contact' },
                { name: 'Resume', path: '/resume' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-[#B8B8B8] hover:text-[#6E9A9A] transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="font-bold mb-4 text-[#F7F4EE]">Connect</h3>
            <div className="flex gap-4 justify-center md:justify-start">
              <motion.a
                href="mailto:mikaellayamaguchi23@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#6E9A9A] transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://m.me/mikaellayamaguchi23"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#6E9A9A] transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Messenger"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.5 2 2 6.14 2 11.25c0 2.88 1.44 5.45 3.69 7.13V22l3.46-1.9c.92.25 1.89.4 2.85.4 5.5 0 10-4.14 10-9.25S17.5 2 12 2zm1.03 12.41l-2.52-2.69-4.92 2.69 5.41-5.74 2.58 2.69 4.87-2.69-5.42 5.74z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center pt-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-[#B8B8B8]">
            © {currentYear} Mikaella Gabrielle S. Yamaguchi
          </p>
          <p className="text-xs text-[#7A756D] mt-1">
            Frontend Developer
          </p>
        </motion.div>
      </div>
    </footer>
  );
}