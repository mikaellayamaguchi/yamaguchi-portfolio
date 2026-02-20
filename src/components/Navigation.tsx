import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import logo from '../assets/img/e-portfolio-my-logo.png';

export function Navigation({ darkMode, setDarkMode }: { darkMode: boolean; setDarkMode: (value: boolean) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      if (location.pathname === '/') {
        const sections = ['home', 'about', 'projects', 'contact'];
        const scrollPosition = window.scrollY + 100;
        
        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (section) {
            const { offsetTop, offsetHeight } = section;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/resume') {
      setActiveSection('resume');
    } else if (location.pathname === '/') {
      setActiveSection('home');
    }
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/', isAnchor: false, sectionId: 'home' },
    { name: 'About', path: '#about', isAnchor: true, sectionId: 'about' },
    { name: 'Contact', path: '#contact', isAnchor: true, sectionId: 'contact' },
    { name: 'Resume', path: '/resume', isAnchor: false, sectionId: 'resume' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, sectionId: string) => {
    if (path.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        setActiveSection(sectionId);
        setIsOpen(false);
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-[#2B2A28]/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <motion.img 
              src={logo} 
              alt="MG Logo" 
              className="w-10 h-10 rounded-full object-cover"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.sectionId;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleAnchorClick(e, link.path, link.sectionId)}
                  className={`relative text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#4C7B7B] dark:text-[#6E9A9A]'
                      : 'text-[#2B2A28] dark:text-[#F7F4EE] hover:text-[#4C7B7B] dark:hover:text-[#6E9A9A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4C7B7B] to-[#6E9A9A]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-[#4C7B7B]/10 hover:bg-[#4C7B7B]/20 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="w-5 h-5 text-[#4C7B7B]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon className="w-5 h-5 text-[#4C7B7B]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-[#4C7B7B]/10"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-[#4C7B7B]" /> : <Moon className="w-5 h-5 text-[#4C7B7B]" />}
            </motion.button>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#2B2A28] dark:text-[#F7F4EE]"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white dark:bg-[#2B2A28] border-t border-[#4C7B7B]/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.sectionId;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => handleAnchorClick(e, link.path, link.sectionId)}
                    className={`block text-lg font-medium transition-colors ${
                      isActive ? 'text-[#4C7B7B] dark:text-[#6E9A9A]' : 'text-[#2B2A28] dark:text-[#F7F4EE]'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}